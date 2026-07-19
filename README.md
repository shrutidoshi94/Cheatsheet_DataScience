# Data Science Syntax Cards

A reference website designed for active learning. It contains interactive flashcards covering 95% of the day-to-day APIs in NumPy, Pandas, and Scikit-learn, with links to runnable Jupyter Notebooks in Google Colab.

## Structure
- `index.html`: Landing page.
- `numpy.html`, `pandas.html`, `sklearn.html`: Flashcard pages for each library.
- `css/style.css`: Design system.
- `js/cards-data.js`: The dataset containing 126 cards.
- `js/main.js`: Interaction logic (flip animation, filtering, search, progress tracking).
- `notebooks/`: 26 Jupyter Notebooks corresponding to the 26 categories covered by the flashcards.

## Hosting on GitHub Pages
To publish this website for free via GitHub Pages, follow these steps:

1. **Initialize Git and Commit**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of DS Syntax Cards"
   ```
2. **Create a GitHub Repository**:
   Create a **Public** repository on GitHub named `ds-syntax-cards`. Note: The repository MUST be public to host GitHub Pages for free and to allow Google Colab to access the notebooks.
3. **Push the Code**:
   ```bash
   git remote add origin https://github.com/shrutidoshi94/ds-syntax-cards.git
   git branch -M main
   git push -u origin main
   ```
4. **Enable GitHub Pages**:
   - Go to your repository on GitHub.
   - Click on **Settings** > **Pages** (under Code and automation).
   - Under **Build and deployment**, set the Source to **Deploy from a branch**.
   - Select the `main` branch and `/ (root)` folder, then click **Save**.
   - Your site will be published at `https://shrutidoshi94.github.io/ds-syntax-cards/`.

## Running Locally
You can test the website locally using any local web server:
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.
