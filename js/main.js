// ================================================================
// DS Syntax Cards — Main Interaction Logic
// Handles: card rendering, flip, search, category filter, progress
// ================================================================

(function () {
  'use strict';

  // ── State ──────────────────────────────────────────────────────
  const library   = document.body.dataset.library; // 'numpy'|'pandas'|'sklearn'
  const allCards  = window.CARDS_DATA[library] || [];
  let activeCategory = 'all';
  let searchQuery    = '';

  // ── DOM refs ────────────────────────────────────────────────────
  const grid         = document.getElementById('cards-grid');
  const searchInput  = document.getElementById('search-input');
  const filterRow    = document.getElementById('filter-chips');
  const progressFill = document.getElementById('progress-fill');
  const progressText = document.getElementById('progress-text');
  const progressPct  = document.getElementById('progress-pct');
  const totalCount   = document.getElementById('total-count');
  const exploredCountEl = document.getElementById('explored-count');

  // ── Persistence ─────────────────────────────────────────────────
  const STORAGE_KEY = `ds-cards-explored-${library}`;
  function getExplored() {
    try { return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')); }
    catch { return new Set(); }
  }
  function saveExplored(set) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...set]));
  }
  let explored = getExplored();

  // ── Colab URL builder ────────────────────────────────────────────
  function colabUrl(notebookPath) {
    return `https://colab.research.google.com/github/shrutidoshi94/Cheatsheet_DataScience/blob/main/notebooks/${notebookPath}`;
  }

  // ── Build category list ──────────────────────────────────────────
  function buildCategories() {
    const cats = ['all', ...new Set(allCards.map(c => c.category))];
    filterRow.innerHTML = '';

    cats.forEach(cat => {
      const chip = document.createElement('button');
      chip.className = 'chip' + (cat === activeCategory ? ' active' : '');
      chip.textContent = cat === 'all' ? `All (${allCards.length})` : cat;
      chip.dataset.cat = cat;
      chip.addEventListener('click', () => {
        activeCategory = cat;
        document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        renderCards();
      });
      filterRow.appendChild(chip);
    });
  }

  // ── Filter cards ────────────────────────────────────────────────
  function filteredCards() {
    return allCards.filter(card => {
      const catMatch = activeCategory === 'all' || card.category === activeCategory;
      const q = searchQuery.toLowerCase();
      const textMatch = !q ||
        card.title.toLowerCase().includes(q) ||
        card.description.toLowerCase().includes(q) ||
        card.category.toLowerCase().includes(q);
      return catMatch && textMatch;
    });
  }

  // ── Render a single card ─────────────────────────────────────────
  function createCardEl(card) {
    const isExplored = explored.has(card.id);
    const url = colabUrl(card.notebook);

    const wrapper = document.createElement('div');
    wrapper.className = 'card-wrapper' + (isExplored ? ' explored' : '');
    wrapper.dataset.id = card.id;

    wrapper.innerHTML = `
      <div class="card-inner">
        <!-- FRONT -->
        <div class="card-front">
          <div class="card-accent-bar"></div>
          <div class="card-front-header">
            <div class="card-title">${card.title}</div>
            <span class="card-category-badge">${card.category}</span>
          </div>
          <div class="card-snippet">
            <pre><code>${card.snippet}</code></pre>
          </div>
          <div class="card-front-footer">
            <span class="difficulty-badge ${card.difficulty}">${card.difficulty}</span>
            <span class="flip-hint">↩ click to flip</span>
          </div>
        </div>

        <!-- BACK -->
        <div class="card-back">
          <div class="card-back-header">
            <div class="back-title">${card.title}</div>
            <div class="back-subtitle">${card.category} · ${card.difficulty}</div>
          </div>
          <div class="card-back-body">
            <p>${card.description}</p>
            <div class="params-box">
              <strong>Signature / Key Params</strong>${card.params}
            </div>
          </div>
          <div class="card-back-footer">
            <a href="${url}" target="_blank" rel="noopener noreferrer"
               class="colab-btn" onclick="event.stopPropagation()">
              <span class="colab-icon">▶</span> Open in Colab
            </a>
            <button class="back-flip-btn" onclick="event.stopPropagation(); flipCard(this.closest('.card-wrapper'))">↩</button>
          </div>
        </div>
      </div>
    `;

    // Flip on wrapper click
    wrapper.addEventListener('click', (e) => {
      // Prevent flipping if text is currently selected (e.g., copying a code snippet)
      if (window.getSelection().toString().length > 0) return;
      flipCard(wrapper);
    });

    return wrapper;
  }

  // ── Flip card ────────────────────────────────────────────────────
  window.flipCard = function(wrapper) {
    wrapper.classList.toggle('flipped');
    if (wrapper.classList.contains('flipped')) {
      const id = wrapper.dataset.id;
      if (!explored.has(id)) {
        explored.add(id);
        saveExplored(explored);
        wrapper.classList.add('explored');
        updateProgress();
      }
    }
  };

  // ── Render cards ─────────────────────────────────────────────────
  function renderCards() {
    const cards = filteredCards();
    grid.innerHTML = '';

    if (cards.length === 0) {
      grid.innerHTML = `
        <div class="empty-state" style="grid-column:1/-1">
          <div class="icon">🔍</div>
          <p>No cards match "<strong>${searchQuery}</strong>"</p>
        </div>
      `;
      return;
    }

    // Group by category
    const grouped = {};
    cards.forEach(card => {
      if (!grouped[card.category]) grouped[card.category] = [];
      grouped[card.category].push(card);
    });

    Object.entries(grouped).forEach(([cat, catCards]) => {
      const group = document.createElement('div');
      group.className = 'category-group';
      group.style.gridColumn = '1 / -1';
      group.innerHTML = `
        <div class="category-label">
          ${cat} <span style="color:var(--accent);margin-left:0.25rem">(${catCards.length})</span>
        </div>
        <div class="cards-grid category-cards"></div>
      `;
      const catGrid = group.querySelector('.category-cards');
      catCards.forEach(card => catGrid.appendChild(createCardEl(card)));
      grid.appendChild(group);
    });

    updateProgress();
  }

  // ── Update progress bar ──────────────────────────────────────────
  function updateProgress() {
    const total = allCards.length;
    const done  = [...explored].filter(id => allCards.some(c => c.id === id)).length;
    const pct   = total > 0 ? Math.round((done / total) * 100) : 0;

    if (progressFill) progressFill.style.width = pct + '%';
    if (progressText) progressText.textContent  = `${done} of ${total} explored`;
    if (progressPct)  progressPct.textContent   = pct + '%';
    if (totalCount)   totalCount.textContent     = total;
    if (exploredCountEl) exploredCountEl.textContent = done;
  }

  // ── Search ───────────────────────────────────────────────────────
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      renderCards();
    });
  }

  // ── Keyboard shortcuts ───────────────────────────────────────────
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput?.focus();
    }
    if (e.key === 'Escape') {
      if (searchInput) { searchInput.value = ''; searchQuery = ''; renderCards(); }
    }
  });

  // ── Init ─────────────────────────────────────────────────────────
  buildCategories();
  renderCards();

})();
