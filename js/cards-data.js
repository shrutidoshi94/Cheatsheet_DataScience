// ================================================================
// DS Syntax Cards — Card Data
// All ~126 cards: 37 NumPy + 45 Pandas + 44 Scikit-learn
// ================================================================

const GITHUB_BASE = "https://colab.research.google.com/github/shrutidoshi94/ds-syntax-cards/blob/main/notebooks";

window.CARDS_DATA = {

  // ==============================================================
  // NUMPY CARDS (37 cards, 8 categories)
  // ==============================================================
  numpy: [
    // ---- Category: Array Creation ----
    {
      id: "np-01", title: "np.array()", category: "Array Creation", difficulty: "beginner",
      snippet: `<span class="kw">import</span> numpy <span class="kw">as</span> np\n\na = np.<span class="fn">array</span>([<span class="nm">1</span>, <span class="nm">2</span>, <span class="nm">3</span>])          <span class="cm"># 1D</span>\nb = np.<span class="fn">array</span>([[<span class="nm">1</span>,<span class="nm">2</span>],[<span class="nm">3</span>,<span class="nm">4</span>]]) <span class="cm"># 2D</span>\nc = np.<span class="fn">array</span>([<span class="nm">1</span>,<span class="nm">2</span>], dtype=np.float32)`,
      description: "Creates an ndarray from any Python sequence. The dtype is inferred or explicitly set. Copies data by default.",
      params: "np.array(object, dtype=None, copy=True, ndmin=0)",
      notebook: "numpy/01_array_creation.ipynb"
    },
    {
      id: "np-02", title: "np.arange()", category: "Array Creation", difficulty: "beginner",
      snippet: `np.<span class="fn">arange</span>(<span class="nm">10</span>)         <span class="cm"># [0,1,...,9]</span>\nnp.<span class="fn">arange</span>(<span class="nm">2</span>, <span class="nm">10</span>)      <span class="cm"># [2,3,...,9]</span>\nnp.<span class="fn">arange</span>(<span class="nm">0</span>, <span class="nm">1</span>, <span class="nm">0.2</span>)  <span class="cm"># [0., 0.2, ...]</span>`,
      description: "Returns evenly spaced values within a given interval. Like Python's range() but returns an array and supports floats.",
      params: "np.arange(start=0, stop, step=1, dtype=None)",
      notebook: "numpy/01_array_creation.ipynb"
    },
    {
      id: "np-03", title: "np.linspace()", category: "Array Creation", difficulty: "beginner",
      snippet: `np.<span class="fn">linspace</span>(<span class="nm">0</span>, <span class="nm">1</span>, <span class="nm">5</span>)\n<span class="cm"># [0., 0.25, 0.5, 0.75, 1.]</span>\n\nnp.<span class="fn">linspace</span>(<span class="nm">0</span>, <span class="nm">10</span>, <span class="nm">4</span>, endpoint=<span class="cn">False</span>)`,
      description: "Returns num evenly spaced samples over [start, stop]. Unlike arange, guarantees exact count and includes endpoint by default.",
      params: "np.linspace(start, stop, num=50, endpoint=True, dtype=None)",
      notebook: "numpy/01_array_creation.ipynb"
    },
    {
      id: "np-04", title: "np.zeros() / np.ones() / np.full()", category: "Array Creation", difficulty: "beginner",
      snippet: `np.<span class="fn">zeros</span>((<span class="nm">3</span>, <span class="nm">4</span>))       <span class="cm"># 3×4 of 0.0</span>\nnp.<span class="fn">ones</span>((<span class="nm">2</span>, <span class="nm">3</span>))        <span class="cm"># 2×3 of 1.0</span>\nnp.<span class="fn">full</span>((<span class="nm">2</span>, <span class="nm">2</span>), <span class="nm">7</span>)    <span class="cm"># 2×2 of 7</span>`,
      description: "Create constant-filled arrays. zeros/ones also have _like variants (np.zeros_like(arr)) to match shape and dtype of existing array.",
      params: "np.zeros(shape, dtype=float) | np.full(shape, fill_value, dtype=None)",
      notebook: "numpy/01_array_creation.ipynb"
    },
    {
      id: "np-05", title: "np.empty()", category: "Array Creation", difficulty: "intermediate",
      snippet: `np.<span class="fn">empty</span>((<span class="nm">3</span>, <span class="nm">3</span>))     <span class="cm"># uninitialized!</span>\nnp.<span class="fn">empty_like</span>(arr)  <span class="cm"># same shape/dtype</span>\n\n<span class="cm"># Fastest way to allocate memory</span>\n<span class="cm"># Values are garbage — always fill before use</span>`,
      description: "Allocates memory without initializing it — fastest array creation. Values are whatever was previously in memory. Use when you'll overwrite every element.",
      params: "np.empty(shape, dtype=float, order='C')",
      notebook: "numpy/01_array_creation.ipynb"
    },
    {
      id: "np-06", title: "np.eye() / np.identity()", category: "Array Creation", difficulty: "beginner",
      snippet: `np.<span class="fn">eye</span>(<span class="nm">3</span>)           <span class="cm"># 3×3 identity</span>\nnp.<span class="fn">eye</span>(<span class="nm">3</span>, k=<span class="nm">1</span>)      <span class="cm"># diagonal offset</span>\nnp.<span class="fn">identity</span>(<span class="nm">4</span>)     <span class="cm"># always square</span>`,
      description: "Create identity matrices. eye() is more flexible — k shifts the diagonal (k>0 upper, k<0 lower). identity() is always square with 1s on main diagonal.",
      params: "np.eye(N, M=None, k=0, dtype=float) | np.identity(n)",
      notebook: "numpy/01_array_creation.ipynb"
    },

    // ---- Category: Array Inspection ----
    {
      id: "np-07", title: ".shape / .ndim / .size", category: "Array Inspection", difficulty: "beginner",
      snippet: `a = np.<span class="fn">zeros</span>((<span class="nm">3</span>, <span class="nm">4</span>, <span class="nm">5</span>))\na.shape  <span class="cm"># (3, 4, 5)</span>\na.ndim   <span class="cm"># 3</span>\na.size   <span class="cm"># 60  (total elements)</span>`,
      description: "Core metadata attributes. shape returns a tuple of dimension sizes. ndim is the number of axes (len(shape)). size is the total element count.",
      params: "Read-only attributes — no parameters",
      notebook: "numpy/02_array_inspection.ipynb"
    },
    {
      id: "np-08", title: ".dtype", category: "Array Inspection", difficulty: "beginner",
      snippet: `np.<span class="fn">array</span>([<span class="nm">1</span>,<span class="nm">2</span>]).dtype      <span class="cm"># int64</span>\nnp.<span class="fn">array</span>([<span class="nm">1.</span>,<span class="nm">2.</span>]).dtype    <span class="cm"># float64</span>\nnp.<span class="fn">array</span>([<span class="cn">True</span>]).dtype      <span class="cm"># bool</span>\n<span class="cm"># int8 int16 int32 int64</span>\n<span class="cm"># float16 float32 float64 complex128</span>`,
      description: "Describes the element data type. NumPy's rich dtype system allows fine-grained control over memory vs precision. Use smaller dtypes (float32) for ML models to reduce RAM.",
      params: "Read-only attribute — set via dtype= at creation or .astype()",
      notebook: "numpy/02_array_inspection.ipynb"
    },
    {
      id: "np-09", title: ".itemsize / .nbytes", category: "Array Inspection", difficulty: "intermediate",
      snippet: `a = np.<span class="fn">zeros</span>((<span class="nm">1000</span>, <span class="nm">1000</span>))\na.itemsize   <span class="cm"># 8 bytes (float64)</span>\na.nbytes     <span class="cm"># 8_000_000 (8 MB)</span>\n\nb = a.<span class="fn">astype</span>(np.float32)\nb.nbytes     <span class="cm"># 4_000_000 (4 MB)</span>`,
      description: "itemsize = bytes per element. nbytes = total bytes = size × itemsize. Critical for memory management in large-scale data processing.",
      params: "Read-only attributes",
      notebook: "numpy/02_array_inspection.ipynb"
    },
    {
      id: "np-10", title: ".astype()", category: "Array Inspection", difficulty: "beginner",
      snippet: `a = np.<span class="fn">array</span>([<span class="nm">1.7</span>, <span class="nm">2.3</span>, <span class="nm">3.9</span>])\na.<span class="fn">astype</span>(int)       <span class="cm"># [1, 2, 3] truncates</span>\na.<span class="fn">astype</span>(<span class="st">'float32'</span>) <span class="cm"># halves memory</span>\na.<span class="fn">astype</span>(bool)      <span class="cm"># [T, T, T]</span>`,
      description: "Casts array to a different dtype. Always returns a copy (use copy=False to avoid when safe). Truncates floats to int, non-zero becomes True.",
      params: "arr.astype(dtype, copy=True, casting='unsafe')",
      notebook: "numpy/02_array_inspection.ipynb"
    },

    // ---- Category: Indexing & Slicing ----
    {
      id: "np-11", title: "Basic Slicing [start:stop:step]", category: "Indexing & Slicing", difficulty: "beginner",
      snippet: `a = np.<span class="fn">arange</span>(<span class="nm">10</span>)     <span class="cm"># [0..9]</span>\na[<span class="nm">2</span>:<span class="nm">7</span>]     <span class="cm"># [2,3,4,5,6]</span>\na[::<span class="nm">2</span>]     <span class="cm"># [0,2,4,6,8]</span>\na[::<span class="nm">-1</span>]    <span class="cm"># reversed</span>\nm[<span class="nm">1</span>:, :<span class="nm">2</span>]  <span class="cm"># 2D: rows 1+, cols 0-1</span>`,
      description: "Slices return VIEWS (not copies) — modifying a slice modifies the original. Use .copy() to avoid this. 2D: m[row_slice, col_slice].",
      params: "arr[start:stop:step] — all optional, negative values count from end",
      notebook: "numpy/03_indexing_slicing.ipynb"
    },
    {
      id: "np-12", title: "Boolean Indexing", category: "Indexing & Slicing", difficulty: "beginner",
      snippet: `a = np.<span class="fn">array</span>([<span class="nm">3</span>, <span class="nm">-1</span>, <span class="nm">4</span>, <span class="nm">-2</span>, <span class="nm">5</span>])\na[a > <span class="nm">0</span>]          <span class="cm"># [3, 4, 5]</span>\na[a % <span class="nm">2</span> == <span class="nm">0</span>]     <span class="cm"># [-2] or [4,-2]</span>\na[(a>&nbsp;<span class="nm">0</span>) &amp; (a&lt;<span class="nm">5</span>)] <span class="cm"># [3, 4]</span>`,
      description: "Pass a boolean array as an index to select elements. Returns a COPY. Combine conditions with & (and), | (or), ~ (not). Never use Python's 'and'/'or' here.",
      params: "arr[bool_array] — bool_array must match arr's shape",
      notebook: "numpy/03_indexing_slicing.ipynb"
    },
    {
      id: "np-13", title: "Fancy Indexing", category: "Indexing & Slicing", difficulty: "intermediate",
      snippet: `a = np.<span class="fn">array</span>([<span class="nm">10</span>,<span class="nm">20</span>,<span class="nm">30</span>,<span class="nm">40</span>,<span class="nm">50</span>])\na[[<span class="nm">0</span>,<span class="nm">2</span>,<span class="nm">4</span>]]    <span class="cm"># [10,30,50]</span>\n\nm = np.<span class="fn">arange</span>(<span class="nm">9</span>).<span class="fn">reshape</span>(<span class="nm">3</span>,<span class="nm">3</span>)\nm[[<span class="nm">0</span>,<span class="nm">2</span>], [<span class="nm">1</span>,<span class="nm">2</span>]]  <span class="cm"># m[0,1], m[2,2]</span>`,
      description: "Index with integer arrays to select arbitrary elements. Always returns a COPY. For 2D, pair row indices with column indices to select specific elements.",
      params: "arr[int_array] — returns copy with shape of the index array",
      notebook: "numpy/03_indexing_slicing.ipynb"
    },
    {
      id: "np-14", title: "np.where()", category: "Indexing & Slicing", difficulty: "intermediate",
      snippet: `a = np.<span class="fn">array</span>([<span class="nm">-2</span>,<span class="nm">3</span>,<span class="nm">-1</span>,<span class="nm">4</span>])\nnp.<span class="fn">where</span>(a > <span class="nm">0</span>, a, <span class="nm">0</span>)\n<span class="cm"># [0, 3, 0, 4] — ReLU!</span>\n\nnp.<span class="fn">where</span>(a > <span class="nm">0</span>)  <span class="cm"># (array([1,3]),)</span>\n<span class="cm"># indices where condition is True</span>`,
      description: "Two modes: (1) with x,y — returns elements from x where True, y where False. (2) without x,y — returns tuple of indices where True. Great for conditional assignment.",
      params: "np.where(condition[, x, y])",
      notebook: "numpy/03_indexing_slicing.ipynb"
    },
    {
      id: "np-15", title: "np.nonzero() / np.argwhere()", category: "Indexing & Slicing", difficulty: "intermediate",
      snippet: `a = np.<span class="fn">array</span>([[<span class="nm">0</span>,<span class="nm">1</span>],[<span class="nm">2</span>,<span class="nm">0</span>]])\nnp.<span class="fn">nonzero</span>(a)    <span class="cm"># tuple of index arrays</span>\nnp.<span class="fn">argwhere</span>(a)   <span class="cm"># array of [row,col] pairs</span>\nnp.<span class="fn">count_nonzero</span>(a) <span class="cm"># 2</span>`,
      description: "nonzero() returns index tuple — use with zip for coordinates. argwhere() is more readable for 2D+ arrays: returns array of [row,col,...] coordinates of non-zero elements.",
      params: "np.nonzero(a) | np.argwhere(a)",
      notebook: "numpy/03_indexing_slicing.ipynb"
    },

    // ---- Category: Shape Manipulation ----
    {
      id: "np-16", title: "reshape() / ravel() / flatten()", category: "Shape Manipulation", difficulty: "beginner",
      snippet: `a = np.<span class="fn">arange</span>(<span class="nm">12</span>)\na.<span class="fn">reshape</span>(<span class="nm">3</span>, <span class="nm">4</span>)  <span class="cm"># view — fast</span>\na.<span class="fn">reshape</span>(<span class="nm">3</span>, <span class="nm">-1</span>) <span class="cm"># -1 auto-calculates</span>\na.<span class="fn">ravel</span>()        <span class="cm"># 1D view (if possible)</span>\na.<span class="fn">flatten</span>()      <span class="cm"># 1D copy — always safe</span>`,
      description: "reshape returns a view (fast, no memory copy). ravel returns 1D view if contiguous else copy. flatten always returns a copy — safe to modify. Use -1 for auto-computed dimension.",
      params: "arr.reshape(newshape) | arr.ravel(order='C') | arr.flatten(order='C')",
      notebook: "numpy/04_shape_manipulation.ipynb"
    },
    {
      id: "np-17", title: "np.expand_dims() / np.newaxis", category: "Shape Manipulation", difficulty: "intermediate",
      snippet: `a = np.<span class="fn">array</span>([<span class="nm">1</span>,<span class="nm">2</span>,<span class="nm">3</span>])  <span class="cm"># shape (3,)</span>\na[np.newaxis, :]       <span class="cm"># shape (1,3) — row</span>\na[:, np.newaxis]       <span class="cm"># shape (3,1) — col</span>\nnp.<span class="fn">expand_dims</span>(a, <span class="nm">0</span>) <span class="cm"># same as newaxis</span>`,
      description: "Add a size-1 dimension to enable broadcasting. np.newaxis is just None. Essential for making shapes compatible in matrix operations (e.g., (3,) → (3,1) for column vector).",
      params: "np.expand_dims(a, axis) — axis can be int or tuple",
      notebook: "numpy/04_shape_manipulation.ipynb"
    },
    {
      id: "np-18", title: "np.squeeze()", category: "Shape Manipulation", difficulty: "intermediate",
      snippet: `a = np.<span class="fn">zeros</span>((<span class="nm">1</span>, <span class="nm">3</span>, <span class="nm">1</span>, <span class="nm">4</span>))  <span class="cm"># (1,3,1,4)</span>\nnp.<span class="fn">squeeze</span>(a)          <span class="cm"># (3,4)</span>\nnp.<span class="fn">squeeze</span>(a, axis=<span class="nm">0</span>)   <span class="cm"># (3,1,4)</span>`,
      description: "Removes all size-1 dimensions (or a specific axis). The inverse of expand_dims. Common when model outputs have extra batch dimensions you need to strip.",
      params: "np.squeeze(a, axis=None) — axis must be size 1 or ValueError",
      notebook: "numpy/04_shape_manipulation.ipynb"
    },
    {
      id: "np-19", title: "concatenate / stack / vstack / hstack", category: "Shape Manipulation", difficulty: "intermediate",
      snippet: `a, b = np.<span class="fn">array</span>([[<span class="nm">1</span>,<span class="nm">2</span>]]), np.<span class="fn">array</span>([[<span class="nm">3</span>,<span class="nm">4</span>]])\nnp.<span class="fn">vstack</span>([a, b])   <span class="cm"># (2,2) — row stack</span>\nnp.<span class="fn">hstack</span>([a, b])   <span class="cm"># (1,4) — col stack</span>\nnp.<span class="fn">stack</span>([a, b], axis=<span class="nm">0</span>)   <span class="cm"># (2,1,2) new axis</span>`,
      description: "concatenate joins along an existing axis (arrays must match on all other axes). stack creates a NEW axis. vstack/hstack are shortcuts for axis=0/1 concatenation.",
      params: "np.concatenate(seq, axis=0) | np.stack(seq, axis=0)",
      notebook: "numpy/04_shape_manipulation.ipynb"
    },
    {
      id: "np-20", title: "np.split() / hsplit() / vsplit()", category: "Shape Manipulation", difficulty: "intermediate",
      snippet: `a = np.<span class="fn">arange</span>(<span class="nm">12</span>).<span class="fn">reshape</span>(<span class="nm">3</span>, <span class="nm">4</span>)\nnp.<span class="fn">vsplit</span>(a, <span class="nm">3</span>)     <span class="cm"># 3 rows → 3 arrays</span>\nnp.<span class="fn">hsplit</span>(a, <span class="nm">2</span>)     <span class="cm"># 4 cols → 2 arrays</span>\nnp.<span class="fn">split</span>(a, [<span class="nm">1</span>,<span class="nm">2</span>], axis=<span class="nm">0</span>) <span class="cm"># at indices</span>`,
      description: "Inverse of stacking functions. Split into equal parts or at specified indices. Raises ValueError if equal split isn't possible. Returns list of views.",
      params: "np.split(ary, indices_or_sections, axis=0)",
      notebook: "numpy/04_shape_manipulation.ipynb"
    },

    // ---- Category: Math & Arithmetic ----
    {
      id: "np-21", title: "Element-wise Operators", category: "Math & Arithmetic", difficulty: "beginner",
      snippet: `a = np.<span class="fn">array</span>([<span class="nm">1</span>,<span class="nm">2</span>,<span class="nm">3</span>])\nb = np.<span class="fn">array</span>([<span class="nm">4</span>,<span class="nm">5</span>,<span class="nm">6</span>])\na + b  <span class="cm"># [5, 7, 9]</span>\na * b  <span class="cm"># [4, 10, 18]</span>\na ** <span class="nm">2</span> <span class="cm"># [1, 4, 9]</span>\na * <span class="nm">10</span> <span class="cm"># broadcasting scalar</span>`,
      description: "All Python arithmetic operators (+,-,*,/,//,%,**) work element-wise on arrays. Broadcasting extends operations to arrays of different-but-compatible shapes.",
      params: "No function calls — uses operator overloading (ufuncs under the hood)",
      notebook: "numpy/05_math_arithmetic.ipynb"
    },
    {
      id: "np-22", title: "np.dot() / np.matmul() / @", category: "Math & Arithmetic", difficulty: "intermediate",
      snippet: `a = np.<span class="fn">array</span>([[<span class="nm">1</span>,<span class="nm">2</span>],[<span class="nm">3</span>,<span class="nm">4</span>]])\nb = np.<span class="fn">array</span>([[<span class="nm">5</span>,<span class="nm">6</span>],[<span class="nm">7</span>,<span class="nm">8</span>]])\na @ b          <span class="cm"># matrix multiply</span>\nnp.<span class="fn">matmul</span>(a, b) <span class="cm"># same as @</span>\nnp.<span class="fn">dot</span>(a, b)    <span class="cm"># same for 2D</span>`,
      description: "@ and matmul are identical — preferred for readability. dot handles n-D contraction rules differently. For 1D: dot gives scalar product. matmul/@: no scalar broadcasting.",
      params: "np.dot(a, b) | np.matmul(a, b) | a @ b",
      notebook: "numpy/05_math_arithmetic.ipynb"
    },
    {
      id: "np-23", title: "Trigonometric Functions", category: "Math & Arithmetic", difficulty: "beginner",
      snippet: `angles = np.<span class="fn">array</span>([<span class="nm">0</span>, <span class="nm">30</span>, <span class="nm">90</span>])\nrad = np.<span class="fn">deg2rad</span>(angles)\nnp.<span class="fn">sin</span>(rad)  <span class="cm"># [0., 0.5, 1.]</span>\nnp.<span class="fn">cos</span>(rad)\nnp.<span class="fn">tan</span>(rad)\nnp.pi  <span class="cm"># 3.141592653589793</span>`,
      description: "All trig functions work in radians. Use np.deg2rad() / np.rad2deg() for conversion. Returns exact dtype-appropriate results. Available: sin, cos, tan, arcsin, arccos, arctan, arctan2.",
      params: "np.sin(x) — x in radians | np.deg2rad(angles_in_degrees)",
      notebook: "numpy/05_math_arithmetic.ipynb"
    },
    {
      id: "np-24", title: "np.exp() / np.log() / np.sqrt()", category: "Math & Arithmetic", difficulty: "beginner",
      snippet: `a = np.<span class="fn">array</span>([<span class="nm">1</span>, np.e, np.e**<span class="nm">2</span>])\nnp.<span class="fn">log</span>(a)     <span class="cm"># [0., 1., 2.] natural log</span>\nnp.<span class="fn">log2</span>([<span class="nm">1</span>,<span class="nm">2</span>,<span class="nm">4</span>])  <span class="cm"># [0., 1., 2.]</span>\nnp.<span class="fn">exp</span>([<span class="nm">0</span>,<span class="nm">1</span>,<span class="nm">2</span>])   <span class="cm"># [1., e, e²]</span>\nnp.<span class="fn">sqrt</span>([<span class="nm">4</span>,<span class="nm">9</span>])    <span class="cm"># [2., 3.]</span>`,
      description: "Exponential and logarithmic functions applied element-wise. np.log is natural log (base e). Also available: np.log10, np.log1p (log(1+x) for numerical stability), np.abs.",
      params: "np.exp(x) | np.log(x) | np.sqrt(x) | np.abs(x)",
      notebook: "numpy/05_math_arithmetic.ipynb"
    },
    {
      id: "np-25", title: "np.round() / np.floor() / np.ceil()", category: "Math & Arithmetic", difficulty: "beginner",
      snippet: `a = np.<span class="fn">array</span>([<span class="nm">1.4</span>, <span class="nm">2.5</span>, <span class="nm">-1.7</span>])\nnp.<span class="fn">round</span>(a)   <span class="cm"># [1., 2., -2.]</span>\nnp.<span class="fn">floor</span>(a)   <span class="cm"># [1., 2., -2.]</span>\nnp.<span class="fn">ceil</span>(a)    <span class="cm"># [2., 3., -1.]</span>\nnp.<span class="fn">trunc</span>(a)   <span class="cm"># [1., 2., -1.]</span>`,
      description: "round uses banker's rounding (round half to even). floor always rounds down, ceil always rounds up, trunc always rounds toward zero.",
      params: "np.round(a, decimals=0) — decimals controls precision",
      notebook: "numpy/05_math_arithmetic.ipynb"
    },

    // ---- Category: Statistical Functions ----
    {
      id: "np-26", title: "np.sum() / np.prod()", category: "Statistical Functions", difficulty: "beginner",
      snippet: `m = np.<span class="fn">array</span>([[<span class="nm">1</span>,<span class="nm">2</span>],[<span class="nm">3</span>,<span class="nm">4</span>]])\nnp.<span class="fn">sum</span>(m)         <span class="cm"># 10 (all)</span>\nnp.<span class="fn">sum</span>(m, axis=<span class="nm">0</span>) <span class="cm"># [4,6] per col</span>\nnp.<span class="fn">sum</span>(m, axis=<span class="nm">1</span>) <span class="cm"># [3,7] per row</span>\nnp.<span class="fn">prod</span>(m, axis=<span class="nm">0</span>)<span class="cm"># [3,8]</span>`,
      description: "axis=None sums all elements. axis=0 collapses rows (results per column). axis=1 collapses columns (results per row). keepdims=True preserves dimensionality for broadcasting.",
      params: "np.sum(a, axis=None, keepdims=False, initial=0)",
      notebook: "numpy/06_statistical_functions.ipynb"
    },
    {
      id: "np-27", title: "np.mean() / np.std() / np.var()", category: "Statistical Functions", difficulty: "beginner",
      snippet: `a = np.<span class="fn">array</span>([<span class="nm">2</span>,<span class="nm">4</span>,<span class="nm">4</span>,<span class="nm">4</span>,<span class="nm">5</span>,<span class="nm">5</span>,<span class="nm">7</span>,<span class="nm">9</span>])\nnp.<span class="fn">mean</span>(a)    <span class="cm"># 5.0</span>\nnp.<span class="fn">median</span>(a)  <span class="cm"># 4.5 (not affected by outliers)</span>\nnp.<span class="fn">std</span>(a)     <span class="cm"># 2.0 (ddof=0)</span>\nnp.<span class="fn">var</span>(a)     <span class="cm"># 4.0</span>`,
      description: "Default ddof=0 (population stats). Use ddof=1 for sample stats (unbiased). np.median is robust to outliers. All support axis parameter for row/column operations.",
      params: "np.std(a, axis=None, ddof=0, keepdims=False)",
      notebook: "numpy/06_statistical_functions.ipynb"
    },
    {
      id: "np-28", title: "np.min() / np.max() / np.ptp()", category: "Statistical Functions", difficulty: "beginner",
      snippet: `a = np.<span class="fn">array</span>([[<span class="nm">3</span>,<span class="nm">1</span>],[<span class="nm">2</span>,<span class="nm">4</span>]])\nnp.<span class="fn">min</span>(a, axis=<span class="nm">0</span>)  <span class="cm"># [2,1] col mins</span>\nnp.<span class="fn">max</span>(a, axis=<span class="nm">1</span>)  <span class="cm"># [3,4] row maxes</span>\nnp.<span class="fn">ptp</span>(a, axis=<span class="nm">0</span>)  <span class="cm"># [1,3] range</span>`,
      description: "ptp = peak-to-peak = max - min. Use np.minimum(a,b) and np.maximum(a,b) for element-wise min/max between two arrays (different from np.min/max which aggregate).",
      params: "np.min(a, axis=None, keepdims=False) | np.ptp(a, axis=None)",
      notebook: "numpy/06_statistical_functions.ipynb"
    },
    {
      id: "np-29", title: "np.percentile() / np.quantile()", category: "Statistical Functions", difficulty: "intermediate",
      snippet: `a = np.<span class="fn">arange</span>(<span class="nm">1</span>, <span class="nm">101</span>)  <span class="cm"># 1..100</span>\nnp.<span class="fn">percentile</span>(a, <span class="nm">25</span>)  <span class="cm"># Q1 = 25.75</span>\nnp.<span class="fn">percentile</span>(a, [<span class="nm">25</span>,<span class="nm">50</span>,<span class="nm">75</span>])  <span class="cm"># IQR</span>\nnp.<span class="fn">quantile</span>(a, <span class="nm">0.5</span>)    <span class="cm"># same as 50th %ile</span>`,
      description: "percentile takes values 0-100, quantile takes 0-1. Both support interpolation methods. Use with axis for per-row/column percentiles. Great for outlier detection (IQR method).",
      params: "np.percentile(a, q, axis=None, interpolation='linear')",
      notebook: "numpy/06_statistical_functions.ipynb"
    },
    {
      id: "np-30", title: "np.cumsum() / np.cumprod()", category: "Statistical Functions", difficulty: "intermediate",
      snippet: `a = np.<span class="fn">array</span>([<span class="nm">1</span>, <span class="nm">2</span>, <span class="nm">3</span>, <span class="nm">4</span>])\nnp.<span class="fn">cumsum</span>(a)  <span class="cm"># [1, 3, 6, 10]</span>\nnp.<span class="fn">cumprod</span>(a) <span class="cm"># [1, 2, 6, 24]</span>\nnp.<span class="fn">diff</span>(np.<span class="fn">cumsum</span>(a))  <span class="cm"># back to a</span>`,
      description: "cumsum: running total (each element = sum of all preceding). cumprod: running product. Both support axis parameter. np.diff() computes differences between consecutive elements.",
      params: "np.cumsum(a, axis=None, dtype=None)",
      notebook: "numpy/06_statistical_functions.ipynb"
    },

    // ---- Category: Sorting & Searching ----
    {
      id: "np-31", title: "np.sort() / np.argsort()", category: "Sorting & Searching", difficulty: "beginner",
      snippet: `a = np.<span class="fn">array</span>([<span class="nm">3</span>,<span class="nm">1</span>,<span class="nm">4</span>,<span class="nm">1</span>,<span class="nm">5</span>,<span class="nm">9</span>])\nnp.<span class="fn">sort</span>(a)      <span class="cm"># returns sorted copy</span>\na.<span class="fn">sort</span>()         <span class="cm"># sorts IN PLACE</span>\nnp.<span class="fn">argsort</span>(a)   <span class="cm"># indices that would sort</span>\nnp.<span class="fn">sort</span>(a)[::<span class="nm">-1</span>] <span class="cm"># descending</span>`,
      description: "np.sort() returns sorted copy. arr.sort() sorts in-place. argsort() returns indices that would sort array — use to reorder related arrays together. axis parameter for 2D.",
      params: "np.sort(a, axis=-1, kind='quicksort') | np.argsort(a, axis=-1)",
      notebook: "numpy/07_sorting_searching.ipynb"
    },
    {
      id: "np-32", title: "np.argmin() / np.argmax()", category: "Sorting & Searching", difficulty: "beginner",
      snippet: `a = np.<span class="fn">array</span>([[<span class="nm">3</span>,<span class="nm">1</span>],[<span class="nm">7</span>,<span class="nm">2</span>]])\nnp.<span class="fn">argmin</span>(a)         <span class="cm"># 1 (flat index)</span>\nnp.<span class="fn">argmin</span>(a, axis=<span class="nm">0</span>) <span class="cm"># [0,0] col mins</span>\nnp.<span class="fn">argmax</span>(a, axis=<span class="nm">1</span>) <span class="cm"># [0,0] row maxes</span>`,
      description: "Returns the INDEX (not value) of min/max. Without axis, returns flat index into the array. Use np.unravel_index(idx, shape) to convert flat index to multi-dimensional.",
      params: "np.argmin(a, axis=None) | np.argmax(a, axis=None)",
      notebook: "numpy/07_sorting_searching.ipynb"
    },
    {
      id: "np-33", title: "np.searchsorted() / np.unique()", category: "Sorting & Searching", difficulty: "intermediate",
      snippet: `a = np.<span class="fn">array</span>([<span class="nm">1</span>,<span class="nm">1</span>,<span class="nm">2</span>,<span class="nm">3</span>,<span class="nm">3</span>,<span class="nm">5</span>])\nnp.<span class="fn">unique</span>(a)         <span class="cm"># [1,2,3,5]</span>\nnp.<span class="fn">unique</span>(a, return_counts=<span class="cn">True</span>)\nnp.<span class="fn">searchsorted</span>(a, <span class="nm">4</span>) <span class="cm"># 5 (insertion point)</span>`,
      description: "searchsorted does binary search on sorted array — returns index where value should be inserted. unique deduplicates and optionally returns indices, inverse, and counts.",
      params: "np.searchsorted(a, v, side='left') | np.unique(a, return_counts=False)",
      notebook: "numpy/07_sorting_searching.ipynb"
    },

    // ---- Category: Linear Algebra & Random ----
    {
      id: "np-34", title: "np.linalg.inv() / .det() / .norm()", category: "Linear Algebra & Random", difficulty: "advanced",
      snippet: `A = np.<span class="fn">array</span>([[<span class="nm">1</span>,<span class="nm">2</span>],[<span class="nm">3</span>,<span class="nm">4</span>]])\nnp.linalg.<span class="fn">inv</span>(A)   <span class="cm"># inverse matrix</span>\nnp.linalg.<span class="fn">det</span>(A)   <span class="cm"># -2.0 (determinant)</span>\nnp.linalg.<span class="fn">norm</span>(A)  <span class="cm"># Frobenius norm</span>\nnp.linalg.<span class="fn">norm</span>(A, ord=<span class="nm">2</span>)  <span class="cm"># spectral norm</span>`,
      description: "linalg submodule. inv() computes matrix inverse (A × A⁻¹ = I). det() returns scalar determinant. norm() computes various matrix/vector norms — default is Frobenius for matrices, L2 for vectors.",
      params: "np.linalg.norm(x, ord=None, axis=None)",
      notebook: "numpy/08_linalg_random.ipynb"
    },
    {
      id: "np-35", title: "np.linalg.eig() / .svd() / .solve()", category: "Linear Algebra & Random", difficulty: "advanced",
      snippet: `A = np.<span class="fn">array</span>([[<span class="nm">4</span>,<span class="nm">2</span>],[<span class="nm">1</span>,<span class="nm">3</span>]])\nvals, vecs = np.linalg.<span class="fn">eig</span>(A)   <span class="cm"># PCA basis</span>\nU, S, Vt = np.linalg.<span class="fn">svd</span>(A)     <span class="cm"># decompose</span>\nnp.linalg.<span class="fn">solve</span>(A, b)           <span class="cm"># solve Ax=b</span>`,
      description: "eig: eigenvalues & eigenvectors (PCA). svd: Singular Value Decomposition — generalizes eigendecomposition. solve: more numerically stable than inv(A) @ b for linear systems.",
      params: "np.linalg.eig(a) → (values, vectors) | np.linalg.svd(a, full_matrices=True)",
      notebook: "numpy/08_linalg_random.ipynb"
    },
    {
      id: "np-36", title: "np.random.seed() / rand() / randn()", category: "Linear Algebra & Random", difficulty: "beginner",
      snippet: `rng = np.random.<span class="fn">default_rng</span>(<span class="nm">42</span>) <span class="cm"># new API</span>\nrng.<span class="fn">random</span>((<span class="nm">3</span>,<span class="nm">4</span>))  <span class="cm"># [0,1) uniform</span>\nrng.<span class="fn">standard_normal</span>((<span class="nm">3</span>,<span class="nm">4</span>)) <span class="cm"># N(0,1)</span>\nrng.<span class="fn">integers</span>(<span class="nm">0</span>, <span class="nm">10</span>, size=<span class="nm">5</span>)`,
      description: "Prefer np.random.default_rng(seed) over np.random.seed() — it's the modern API. The Generator object is thread-safe and reproducible. Pass seed=42 for reproducibility.",
      params: "np.random.default_rng(seed=None) → Generator",
      notebook: "numpy/08_linalg_random.ipynb"
    },
    {
      id: "np-37", title: "np.random.choice() / .shuffle() / .normal()", category: "Linear Algebra & Random", difficulty: "intermediate",
      snippet: `rng = np.random.<span class="fn">default_rng</span>(<span class="nm">42</span>)\nrng.<span class="fn">choice</span>([<span class="nm">1</span>,<span class="nm">2</span>,<span class="nm">3</span>], size=<span class="nm">2</span>, replace=<span class="cn">False</span>)\nrng.<span class="fn">shuffle</span>(arr)           <span class="cm"># in-place</span>\nrng.<span class="fn">normal</span>(<span class="nm">0</span>, <span class="nm">1</span>, (<span class="nm">3</span>,<span class="nm">3</span>))  <span class="cm"># μ=0, σ=1</span>\nrng.<span class="fn">uniform</span>(<span class="nm">2</span>, <span class="nm">5</span>, <span class="nm">100</span>)   <span class="cm"># [2,5) range</span>`,
      description: "choice with replace=False for sampling without replacement. shuffle is in-place. normal(loc, scale, size) — loc=mean, scale=std. uniform(low, high, size) for bounded random floats.",
      params: "rng.choice(a, size, replace=True) | rng.normal(loc=0, scale=1, size=None)",
      notebook: "numpy/08_linalg_random.ipynb"
    }
  ],

  // ==============================================================
  // PANDAS CARDS (45 cards, 9 categories)
  // ==============================================================
  pandas: [
    // ---- Category: Object Creation ----
    {
      id: "pd-01", title: "pd.Series()", category: "Object Creation", difficulty: "beginner",
      snippet: `<span class="kw">import</span> pandas <span class="kw">as</span> pd\n\ns = pd.<span class="fn">Series</span>([<span class="nm">10</span>,<span class="nm">20</span>,<span class="nm">30</span>])\ns = pd.<span class="fn">Series</span>({<span class="st">'a'</span>:<span class="nm">1</span>, <span class="st">'b'</span>:<span class="nm">2</span>})\ns = pd.<span class="fn">Series</span>([<span class="nm">1</span>,<span class="nm">2</span>], index=[<span class="st">'x'</span>,<span class="st">'y'</span>], name=<span class="st">'vals'</span>)`,
      description: "1D labeled array. Index is auto 0,1,2... or custom. From dict, list, scalar, or ndarray. Has a name attribute. Underlying data is a NumPy array (accessible via .values or .to_numpy()).",
      params: "pd.Series(data=None, index=None, dtype=None, name=None)",
      notebook: "pandas/01_object_creation.ipynb"
    },
    {
      id: "pd-02", title: "pd.DataFrame()", category: "Object Creation", difficulty: "beginner",
      snippet: `df = pd.<span class="fn">DataFrame</span>({<span class="st">'A'</span>:[<span class="nm">1</span>,<span class="nm">2</span>], <span class="st">'B'</span>:[<span class="nm">3</span>,<span class="nm">4</span>]})\ndf = pd.<span class="fn">DataFrame</span>(np_array, columns=[...])\ndf = pd.<span class="fn">DataFrame</span>(list_of_dicts)\ndf.<span class="fn">head</span>(<span class="nm">2</span>)  <span class="cm"># peek</span>`,
      description: "2D labeled table. From dict of lists (columns), list of dicts (rows), or numpy array + column names. Pandas 3.0+ uses Copy-on-Write by default — modifying a slice requires .copy() first.",
      params: "pd.DataFrame(data=None, index=None, columns=None, dtype=None)",
      notebook: "pandas/01_object_creation.ipynb"
    },
    {
      id: "pd-03", title: "pd.read_csv()", category: "Object Creation", difficulty: "beginner",
      snippet: `df = pd.<span class="fn">read_csv</span>(<span class="st">'data.csv'</span>)\ndf = pd.<span class="fn">read_csv</span>(url, sep=<span class="st">','</span>)\ndf = pd.<span class="fn">read_csv</span>(<span class="st">'f.csv'</span>,\n    usecols=[<span class="st">'A'</span>,<span class="st">'B'</span>],\n    dtype={<span class="st">'A'</span>:<span class="st">'Int32'</span>},\n    parse_dates=[<span class="st">'date'</span>])`,
      description: "Most common data loading function. Works with local paths, URLs, file objects, and S3 paths. Key params: sep for delimiter, usecols to load only needed columns (faster), dtype to avoid type inference.",
      params: "pd.read_csv(filepath, sep=',', header='infer', index_col=None, usecols=None, dtype=None, na_values=None, nrows=None)",
      notebook: "pandas/01_object_creation.ipynb"
    },
    {
      id: "pd-04", title: "read_excel / read_json / read_parquet", category: "Object Creation", difficulty: "beginner",
      snippet: `pd.<span class="fn">read_excel</span>(<span class="st">'f.xlsx'</span>, sheet_name=<span class="nm">0</span>)\npd.<span class="fn">read_json</span>(<span class="st">'f.json'</span>)\npd.<span class="fn">read_parquet</span>(<span class="st">'f.parquet'</span>)\npd.<span class="fn">read_sql</span>(query, connection)`,
      description: "Parquet is fastest for large datasets (columnar, compressed). read_sql requires a SQLAlchemy connection. read_excel needs openpyxl (pip install). All return DataFrames.",
      params: "pd.read_excel(io, sheet_name=0, header=0) | pd.read_parquet(path, engine='auto')",
      notebook: "pandas/01_object_creation.ipynb"
    },

    // ---- Category: Inspection & Info ----
    {
      id: "pd-05", title: ".head() / .tail()", category: "Inspection & Info", difficulty: "beginner",
      snippet: `df.<span class="fn">head</span>()    <span class="cm"># first 5 rows</span>\ndf.<span class="fn">head</span>(<span class="nm">10</span>)  <span class="cm"># first 10 rows</span>\ndf.<span class="fn">tail</span>(<span class="nm">3</span>)   <span class="cm"># last 3 rows</span>\ndf.<span class="fn">sample</span>(<span class="nm">5</span>) <span class="cm"># 5 random rows</span>`,
      description: "Quick data peek. head/tail show the first/last n rows. Always use these before any analysis to catch encoding issues, extra header rows, or unexpected data types early.",
      params: "df.head(n=5) | df.tail(n=5)",
      notebook: "pandas/02_inspection_info.ipynb"
    },
    {
      id: "pd-06", title: ".info()", category: "Inspection & Info", difficulty: "beginner",
      snippet: `df.<span class="fn">info</span>()\n<span class="cm"># &lt;class 'pandas.core.frame.DataFrame'&gt;</span>\n<span class="cm"># RangeIndex: 891 entries</span>\n<span class="cm"># age     float64  (714 non-null)</span>\n<span class="cm"># cabin   object   (204 non-null)</span>\n<span class="cm"># memory usage: 83.7 KB</span>`,
      description: "Shows dtypes, non-null counts, and memory usage for every column at once. Best first step in EDA. Null count = (total - non-null). Shows which columns need cleaning.",
      params: "df.info(verbose=True, show_counts=None, memory_usage=True)",
      notebook: "pandas/02_inspection_info.ipynb"
    },
    {
      id: "pd-07", title: ".describe()", category: "Inspection & Info", difficulty: "beginner",
      snippet: `df.<span class="fn">describe</span>()           <span class="cm"># numeric only</span>\ndf.<span class="fn">describe</span>(include=<span class="st">'all'</span>) <span class="cm"># all dtypes</span>\ndf.<span class="fn">describe</span>(percentiles=[<span class="nm">.1</span>,<span class="nm">.9</span>])\ndf[<span class="st">'col'</span>].<span class="fn">describe</span>()`,
      description: "Computes count, mean, std, min, 25th/50th/75th percentile, max for numeric columns. With include='all', also shows top, freq for categorical. Best single-line EDA summary.",
      params: "df.describe(percentiles=None, include=None, exclude=None)",
      notebook: "pandas/02_inspection_info.ipynb"
    },
    {
      id: "pd-08", title: ".shape / .columns / .dtypes", category: "Inspection & Info", difficulty: "beginner",
      snippet: `df.shape     <span class="cm"># (891, 12) — rows × cols</span>\ndf.columns   <span class="cm"># Index(['age','sex'...])</span>\ndf.index     <span class="cm"># RangeIndex(start=0, stop=891)</span>\ndf.dtypes    <span class="cm"># Series of dtype per column</span>`,
      description: "Core structural attributes. columns and index return Index objects you can convert with .tolist(). dtypes is a Series — filter with df.select_dtypes(include='number') or include='object'.",
      params: "Read-only attributes (except .columns and .index which can be assigned)",
      notebook: "pandas/02_inspection_info.ipynb"
    },
    {
      id: "pd-09", title: ".value_counts() / .nunique()", category: "Inspection & Info", difficulty: "beginner",
      snippet: `df[<span class="st">'sex'</span>].<span class="fn">value_counts</span>()\n<span class="cm"># male      577</span>\n<span class="cm"># female    314</span>\ndf[<span class="st">'sex'</span>].<span class="fn">value_counts</span>(normalize=<span class="cn">True</span>)\ndf.<span class="fn">nunique</span>()  <span class="cm"># unique values per column</span>`,
      description: "value_counts returns frequency table sorted by count. normalize=True for proportions. dropna=False to include NaNs. nunique() on DataFrame gives unique count per column — great for cardinality check.",
      params: "Series.value_counts(normalize=False, sort=True, ascending=False, dropna=True)",
      notebook: "pandas/02_inspection_info.ipynb"
    },

    // ---- Category: Indexing & Selection ----
    {
      id: "pd-10", title: ".loc[] — Label-based", category: "Indexing & Selection", difficulty: "beginner",
      snippet: `df.<span class="op">loc</span>[<span class="nm">0</span>]             <span class="cm"># row by label</span>\ndf.<span class="op">loc</span>[<span class="nm">0</span>, <span class="st">'age'</span>]      <span class="cm"># single value</span>\ndf.<span class="op">loc</span>[:<span class="nm">5</span>, [<span class="st">'age'</span>,<span class="st">'sex'</span>]]  <span class="cm"># slice + cols</span>\ndf.<span class="op">loc</span>[df.<span class="st">age</span> > <span class="nm">30</span>, <span class="st">'fare'</span>]  <span class="cm"># conditional</span>`,
      description: "Label-based indexing — INCLUSIVE on both ends for slices. Row and column labels. Can use boolean arrays. Use .loc for setting values (avoids SettingWithCopyWarning in Pandas 3.0+).",
      params: "df.loc[row_indexer, col_indexer] — indexers can be label, slice, list, or bool array",
      notebook: "pandas/03_indexing_selection.ipynb"
    },
    {
      id: "pd-11", title: ".iloc[] — Position-based", category: "Indexing & Selection", difficulty: "beginner",
      snippet: `df.<span class="op">iloc</span>[<span class="nm">0</span>]           <span class="cm"># first row</span>\ndf.<span class="op">iloc</span>[<span class="nm">0</span>, <span class="nm">2</span>]        <span class="cm"># row 0, col 2</span>\ndf.<span class="op">iloc</span>[:<span class="nm">5</span>, :<span class="nm">3</span>]      <span class="cm"># EXCLUSIVE like Python</span>\ndf.<span class="op">iloc</span>[[<span class="nm">0</span>,<span class="nm">2</span>,<span class="nm">4</span>], [<span class="nm">1</span>,<span class="nm">3</span>]] <span class="cm"># fancy</span>`,
      description: "Integer position-based — EXCLUSIVE end like Python slicing. Works like numpy indexing. Always use iloc when you need positional access regardless of what the index contains.",
      params: "df.iloc[row_int_indexer, col_int_indexer]",
      notebook: "pandas/03_indexing_selection.ipynb"
    },
    {
      id: "pd-12", title: "Boolean Filtering", category: "Indexing & Selection", difficulty: "beginner",
      snippet: `df[df[<span class="st">'age'</span>] > <span class="nm">30</span>]\ndf[(df.age > <span class="nm">18</span>) &amp; (df.sex == <span class="st">'male'</span>)]\ndf[df[<span class="st">'class'</span>].<span class="fn">isin</span>([<span class="st">'First'</span>,<span class="st">'Second'</span>])]\ndf[~df[<span class="st">'cabin'</span>].<span class="fn">isna</span>()]  <span class="cm"># not null</span>`,
      description: "Most common filtering pattern. Use & for AND, | for OR, ~ for NOT (never Python's and/or). isin() for membership test. Always wrap conditions in parentheses when combining.",
      params: "df[bool_series] or df.loc[bool_series, cols]",
      notebook: "pandas/03_indexing_selection.ipynb"
    },
    {
      id: "pd-13", title: ".at[] / .iat[]", category: "Indexing & Selection", difficulty: "intermediate",
      snippet: `df.<span class="op">at</span>[<span class="nm">0</span>, <span class="st">'age'</span>]    <span class="cm"># label — scalar access</span>\ndf.<span class="op">iat</span>[<span class="nm">0</span>, <span class="nm">2</span>]       <span class="cm"># position — scalar access</span>\n\n<span class="cm"># Setting a single value:</span>\ndf.<span class="op">at</span>[<span class="nm">0</span>, <span class="st">'age'</span>] = <span class="nm">25</span>`,
      description: "Optimized scalar access — faster than .loc/.iloc for single values. at uses labels, iat uses integer positions. Prefer these in loops where you access one cell at a time.",
      params: "df.at[row_label, col_label] | df.iat[row_pos, col_pos]",
      notebook: "pandas/03_indexing_selection.ipynb"
    },
    {
      id: "pd-14", title: ".query()", category: "Indexing & Selection", difficulty: "intermediate",
      snippet: `df.<span class="fn">query</span>(<span class="st">'age > 30'</span>)\ndf.<span class="fn">query</span>(<span class="st">'age > 18 and sex == "male"'</span>)\nmin_age = <span class="nm">18</span>\ndf.<span class="fn">query</span>(<span class="st">'age > @min_age'</span>)  <span class="cm"># use @ for vars</span>`,
      description: "SQL-like string filtering. More readable for complex conditions. Can reference Python variables with @. Supports all comparison operators. Slower than boolean indexing for small DataFrames.",
      params: "df.query(expr: str, inplace=False) — @ prefix for local variables",
      notebook: "pandas/03_indexing_selection.ipynb"
    },
    {
      id: "pd-15", title: "pd.IndexSlice[]", category: "Indexing & Selection", difficulty: "advanced",
      snippet: `idx = pd.<span class="fn">IndexSlice</span>\ndf.<span class="op">loc</span>[idx[<span class="st">'A'</span>:<span class="st">'C'</span>, <span class="st">'x'</span>]]  <span class="cm"># MultiIndex</span>\ndf.<span class="op">loc</span>[idx[:, <span class="st">'sub_level'</span>], :]`,
      description: "Convenient syntax for MultiIndex slicing with .loc. pd.IndexSlice creates a slice object for each level. Essential when working with hierarchical indices (e.g., after groupby+unstack).",
      params: "pd.IndexSlice[level0_slice, level1_slice, ...]",
      notebook: "pandas/03_indexing_selection.ipynb"
    },

    // ---- Category: Cleaning & Missing Data ----
    {
      id: "pd-16", title: ".isnull() / .isna()", category: "Cleaning & Missing Data", difficulty: "beginner",
      snippet: `df.<span class="fn">isnull</span>()       <span class="cm"># bool DataFrame</span>\ndf.<span class="fn">isnull</span>().<span class="fn">sum</span>() <span class="cm"># count per column</span>\ndf.<span class="fn">isna</span>().<span class="fn">mean</span>()  <span class="cm"># fraction missing</span>\ndf[df[<span class="st">'age'</span>].<span class="fn">notna</span>()]  <span class="cm"># filter non-null</span>`,
      description: "isnull() and isna() are aliases. Chain .sum() for counts per column, .mean() for proportions. Use in boolean indexing to filter out NaN rows. Works on both Series and DataFrame.",
      params: "df.isnull() → bool DataFrame | df.isnull().sum() → Series of counts",
      notebook: "pandas/04_cleaning_missing_data.ipynb"
    },
    {
      id: "pd-17", title: ".dropna()", category: "Cleaning & Missing Data", difficulty: "beginner",
      snippet: `df.<span class="fn">dropna</span>()              <span class="cm"># any NaN → drop row</span>\ndf.<span class="fn">dropna</span>(axis=<span class="nm">1</span>)        <span class="cm"># drop cols with NaN</span>\ndf.<span class="fn">dropna</span>(how=<span class="st">'all'</span>)     <span class="cm"># all NaN → drop</span>\ndf.<span class="fn">dropna</span>(subset=[<span class="st">'age'</span>]) <span class="cm"># only check 'age'</span>\ndf.<span class="fn">dropna</span>(thresh=<span class="nm">3</span>)      <span class="cm"># need ≥3 non-NaN</span>`,
      description: "Removes missing values. how='any' (default) drops if ANY value is NaN. how='all' drops only if ALL values are NaN. thresh=n keeps rows with at least n non-NaN values.",
      params: "df.dropna(axis=0, how='any', thresh=None, subset=None, inplace=False)",
      notebook: "pandas/04_cleaning_missing_data.ipynb"
    },
    {
      id: "pd-18", title: ".fillna()", category: "Cleaning & Missing Data", difficulty: "beginner",
      snippet: `df.<span class="fn">fillna</span>(<span class="nm">0</span>)                  <span class="cm"># all NaN → 0</span>\ndf[<span class="st">'age'</span>].<span class="fn">fillna</span>(df.age.<span class="fn">mean</span>())\ndf.<span class="fn">ffill</span>()  <span class="cm"># forward fill</span>\ndf.<span class="fn">bfill</span>()  <span class="cm"># backward fill</span>\ndf.<span class="fn">fillna</span>({<span class="st">'age'</span>:<span class="nm">0</span>, <span class="st">'fare'</span>:<span class="nm">15</span>})`,
      description: "Fill NaN with a scalar, dict (per-column values), or Series. ffill propagates last valid value forward (time series). bfill fills backward. Dict allows different fill values per column.",
      params: "df.fillna(value=None, method=None, axis=None, limit=None, inplace=False)",
      notebook: "pandas/04_cleaning_missing_data.ipynb"
    },
    {
      id: "pd-19", title: ".drop()", category: "Cleaning & Missing Data", difficulty: "beginner",
      snippet: `df.<span class="fn">drop</span>(<span class="st">'age'</span>, axis=<span class="nm">1</span>)      <span class="cm"># drop column</span>\ndf.<span class="fn">drop</span>([<span class="st">'a'</span>,<span class="st">'b'</span>], axis=<span class="nm">1</span>)  <span class="cm"># multiple cols</span>\ndf.<span class="fn">drop</span>([<span class="nm">0</span>,<span class="nm">1</span>,<span class="nm">2</span>])           <span class="cm"># drop rows</span>\ndf.<span class="fn">drop</span>(columns=[<span class="st">'x'</span>,<span class="st">'y'</span>])  <span class="cm"># cleaner syntax</span>`,
      description: "Remove rows or columns by label. axis=1 (or columns=) for columns, axis=0 (or index=) for rows. Returns new DataFrame by default. errors='ignore' to skip missing labels.",
      params: "df.drop(labels=None, axis=0, index=None, columns=None, inplace=False, errors='raise')",
      notebook: "pandas/04_cleaning_missing_data.ipynb"
    },
    {
      id: "pd-20", title: ".duplicated() / .drop_duplicates()", category: "Cleaning & Missing Data", difficulty: "beginner",
      snippet: `df.<span class="fn">duplicated</span>()              <span class="cm"># bool Series</span>\ndf.<span class="fn">duplicated</span>().<span class="fn">sum</span>()       <span class="cm"># count dups</span>\ndf.<span class="fn">drop_duplicates</span>()         <span class="cm"># remove all</span>\ndf.<span class="fn">drop_duplicates</span>(subset=[<span class="st">'name'</span>],\n    keep=<span class="st">'last'</span>)`,
      description: "duplicated() marks rows as True if already seen. keep='first' (default) marks subsequent duplicates. keep=False marks ALL duplicates. subset limits comparison to specific columns.",
      params: "df.drop_duplicates(subset=None, keep='first', inplace=False, ignore_index=False)",
      notebook: "pandas/04_cleaning_missing_data.ipynb"
    },

    // ---- Category: Transformation ----
    {
      id: "pd-21", title: ".apply()", category: "Transformation", difficulty: "intermediate",
      snippet: `df[<span class="st">'age'</span>].<span class="fn">apply</span>(<span class="kw">lambda</span> x: x**<span class="nm">2</span>)\ndf.<span class="fn">apply</span>(np.sum, axis=<span class="nm">0</span>)    <span class="cm"># col-wise</span>\ndf.<span class="fn">apply</span>(np.sum, axis=<span class="nm">1</span>)    <span class="cm"># row-wise</span>\ndf.<span class="fn">apply</span>(<span class="kw">lambda</span> row: row.age * row.fare, axis=<span class="nm">1</span>)`,
      description: "Applies a function along an axis. On Series: element-wise. On DataFrame: axis=0 applies function to each column, axis=1 to each row. Slower than vectorized ops — avoid in loops.",
      params: "df.apply(func, axis=0, raw=False, result_type=None, args=())",
      notebook: "pandas/05_transformation.ipynb"
    },
    {
      id: "pd-22", title: ".map()", category: "Transformation", difficulty: "beginner",
      snippet: `s = df[<span class="st">'sex'</span>]\ns.<span class="fn">map</span>({<span class="st">'male'</span>: <span class="nm">0</span>, <span class="st">'female'</span>: <span class="nm">1</span>})\ns.<span class="fn">map</span>(<span class="kw">lambda</span> x: x.upper())\ns.<span class="fn">map</span>(str)  <span class="cm"># convert type</span>`,
      description: "Series method for element-wise transformation. Accepts dict (for value substitution), function, or Series. NaN for missing keys in dict — use fillna() after. For DataFrames, use apply(func).",
      params: "Series.map(arg, na_action=None) — arg can be function, dict, or Series",
      notebook: "pandas/05_transformation.ipynb"
    },
    {
      id: "pd-23", title: ".replace()", category: "Transformation", difficulty: "beginner",
      snippet: `df.<span class="fn">replace</span>(<span class="st">'?'</span>, np.nan)          <span class="cm"># string → NaN</span>\ndf.<span class="fn">replace</span>({<span class="st">'sex'</span>: {<span class="st">'male'</span>:<span class="nm">0</span>}})  <span class="cm"># nested dict</span>\ndf[<span class="st">'age'</span>].<span class="fn">replace</span>(<span class="nm">0</span>, np.nan)`,
      description: "Replaces values. More powerful than .map for DataFrames. Nested dict {column: {old: new}}. Also supports regex=True for pattern replacement. Works on both Series and DataFrame.",
      params: "df.replace(to_replace, value=None, regex=False, method='pad')",
      notebook: "pandas/05_transformation.ipynb"
    },
    {
      id: "pd-24", title: ".rename()", category: "Transformation", difficulty: "beginner",
      snippet: `df.<span class="fn">rename</span>(columns={<span class="st">'old'</span>:<span class="st">'new'</span>})\ndf.<span class="fn">rename</span>(index={<span class="nm">0</span>:<span class="st">'first'</span>})\ndf.columns = [<span class="st">'a'</span>,<span class="st">'b'</span>,<span class="st">'c'</span>]  <span class="cm"># full replace</span>\ndf.<span class="fn">rename</span>(str.lower, axis=<span class="st">'columns'</span>)`,
      description: "Rename rows or columns via dict (partial rename) or function (applied to all). str.lower, str.strip, str.upper work as rename functions. inplace=False by default returns new DF.",
      params: "df.rename(mapper=None, index=None, columns=None, axis=None, inplace=False, errors='ignore')",
      notebook: "pandas/05_transformation.ipynb"
    },
    {
      id: "pd-25", title: ".astype()", category: "Transformation", difficulty: "beginner",
      snippet: `df[<span class="st">'age'</span>].<span class="fn">astype</span>(int)\ndf[<span class="st">'score'</span>].<span class="fn">astype</span>(float)\ndf.<span class="fn">astype</span>({<span class="st">'age'</span>: <span class="st">'Int32'</span>, <span class="st">'name'</span>: <span class="st">'string'</span>})\ndf[<span class="st">'cat'</span>].<span class="fn">astype</span>(<span class="st">'category'</span>) <span class="cm"># memory ↓</span>`,
      description: "Cast column types. Pandas 3.0 native string dtype ('string') is separate from object. 'category' dtype greatly reduces memory for low-cardinality columns. Int32 (capital I) supports nullable integers.",
      params: "df.astype(dtype, copy=True, errors='raise') — dtype can be dict",
      notebook: "pandas/05_transformation.ipynb"
    },
    {
      id: "pd-26", title: "pd.to_datetime() / .dt accessor", category: "Transformation", difficulty: "intermediate",
      snippet: `df[<span class="st">'date'</span>] = pd.<span class="fn">to_datetime</span>(df[<span class="st">'date'</span>])\ndf[<span class="st">'date'</span>].dt.year\ndf[<span class="st">'date'</span>].dt.month\ndf[<span class="st">'date'</span>].dt.dayofweek  <span class="cm"># 0=Mon</span>\ndf[<span class="st">'date'</span>].dt.<span class="fn">strftime</span>(<span class="st">'%Y-%m'</span>)`,
      description: "to_datetime parses strings to datetime64. The .dt accessor unlocks datetime properties: year, month, day, hour, dayofweek, is_month_end, etc. Essential for time series feature engineering.",
      params: "pd.to_datetime(arg, format=None, errors='raise', utc=False)",
      notebook: "pandas/05_transformation.ipynb"
    },

    // ---- Category: Aggregation & GroupBy ----
    {
      id: "pd-27", title: ".groupby().agg()", category: "Aggregation & GroupBy", difficulty: "intermediate",
      snippet: `df.<span class="fn">groupby</span>(<span class="st">'sex'</span>)[<span class="st">'fare'</span>].<span class="fn">mean</span>()\ndf.<span class="fn">groupby</span>(<span class="st">'sex'</span>).<span class="fn">agg</span>({<span class="st">'fare'</span>:[<span class="st">'mean'</span>,<span class="st">'std'</span>]})\ndf.<span class="fn">groupby</span>([<span class="st">'sex'</span>,<span class="st">'class'</span>]).<span class="fn">size</span>()`,
      description: "Split-apply-combine pattern. groupby groups rows by one or more columns, then apply aggregation function(s). agg with dict gives multiple stats per column. Named aggregations: agg(new_col=('col','func')).",
      params: "df.groupby(by, as_index=True, dropna=True).agg(func)",
      notebook: "pandas/06_aggregation_groupby.ipynb"
    },
    {
      id: "pd-28", title: ".groupby().transform()", category: "Aggregation & GroupBy", difficulty: "intermediate",
      snippet: `<span class="cm"># Z-score within each group:</span>\ndf.<span class="fn">groupby</span>(<span class="st">'sex'</span>)[<span class="st">'fare'</span>].<span class="fn">transform</span>(\n    <span class="kw">lambda</span> x: (x - x.<span class="fn">mean</span>()) / x.<span class="fn">std</span>()\n)\n<span class="cm"># Returns same-length Series aligned with df</span>`,
      description: "Like agg but returns a Series of the same length as the original DataFrame — result is aligned back to each row's group. Perfect for adding group statistics as new columns.",
      params: "df.groupby(by).transform(func, *args, **kwargs)",
      notebook: "pandas/06_aggregation_groupby.ipynb"
    },
    {
      id: "pd-29", title: ".groupby().filter()", category: "Aggregation & GroupBy", difficulty: "intermediate",
      snippet: `<span class="cm"># Keep groups with mean fare > 50:</span>\ndf.<span class="fn">groupby</span>(<span class="st">'class'</span>).<span class="fn">filter</span>(\n    <span class="kw">lambda</span> g: g[<span class="st">'fare'</span>].<span class="fn">mean</span>() > <span class="nm">50</span>\n)`,
      description: "Filter entire groups based on a group-level condition. Function receives each group DataFrame and must return True/False. Returns subset of original DataFrame with passing groups.",
      params: "df.groupby(by).filter(func, dropna=True) — func must return bool",
      notebook: "pandas/06_aggregation_groupby.ipynb"
    },
    {
      id: "pd-30", title: ".pivot_table()", category: "Aggregation & GroupBy", difficulty: "intermediate",
      snippet: `pd.<span class="fn">pivot_table</span>(df,\n    values=<span class="st">'fare'</span>,\n    index=<span class="st">'sex'</span>,\n    columns=<span class="st">'class'</span>,\n    aggfunc=<span class="st">'mean'</span>,\n    fill_value=<span class="nm">0</span>)`,
      description: "Spreadsheet-style pivot table. values = what to aggregate. index = row grouping. columns = column grouping. aggfunc can be string or list of functions. fill_value for NaN cells.",
      params: "pd.pivot_table(data, values, index, columns, aggfunc='mean', fill_value=None, margins=False)",
      notebook: "pandas/06_aggregation_groupby.ipynb"
    },
    {
      id: "pd-31", title: "pd.crosstab()", category: "Aggregation & GroupBy", difficulty: "intermediate",
      snippet: `pd.<span class="fn">crosstab</span>(df.sex, df.survived)\npd.<span class="fn">crosstab</span>(df.sex, df.survived,\n    normalize=<span class="st">'index'</span>)  <span class="cm"># row %</span>\npd.<span class="fn">crosstab</span>(df.sex, df.pclass,\n    values=df.fare, aggfunc=<span class="st">'mean'</span>)`,
      description: "Frequency cross-tabulation. normalize='index' shows row percentages, 'columns' for column %, True for overall %. Can be used as a pivot_table with count as aggfunc.",
      params: "pd.crosstab(index, columns, values=None, aggfunc=None, normalize=False, margins=False)",
      notebook: "pandas/06_aggregation_groupby.ipynb"
    },
    {
      id: "pd-32", title: ".resample()", category: "Aggregation & GroupBy", difficulty: "advanced",
      snippet: `df = df.<span class="fn">set_index</span>(<span class="st">'date'</span>)  <span class="cm"># datetime index</span>\ndf.<span class="fn">resample</span>(<span class="st">'M'</span>).<span class="fn">mean</span>()    <span class="cm"># monthly avg</span>\ndf.<span class="fn">resample</span>(<span class="st">'W'</span>).<span class="fn">sum</span>()     <span class="cm"># weekly sum</span>\ndf.<span class="fn">resample</span>(<span class="st">'Q'</span>).<span class="fn">agg</span>({<span class="st">'price'</span>:<span class="st">'last'</span>})`,
      description: "Time series resampling — requires DatetimeIndex. 'D'=daily, 'W'=weekly, 'M'=month end, 'MS'=month start, 'Q'=quarter, 'Y'=year. Aggregate with .mean(), .sum(), .last(), .first(), .ohlc().",
      params: "df.resample(rule, on=None, level=None).agg(func)",
      notebook: "pandas/06_aggregation_groupby.ipynb"
    },

    // ---- Category: Combining DataFrames ----
    {
      id: "pd-33", title: "pd.concat()", category: "Combining DataFrames", difficulty: "intermediate",
      snippet: `pd.<span class="fn">concat</span>([df1, df2])          <span class="cm"># stack rows</span>\npd.<span class="fn">concat</span>([df1, df2], axis=<span class="nm">1</span>)  <span class="cm"># side-by-side</span>\npd.<span class="fn">concat</span>([df1, df2],\n    ignore_index=<span class="cn">True</span>)  <span class="cm"># reset index</span>`,
      description: "Stack DataFrames vertically (axis=0, default) or horizontally (axis=1). join='inner' for intersection of columns only. ignore_index=True resets row index after stacking.",
      params: "pd.concat(objs, axis=0, join='outer', ignore_index=False, keys=None)",
      notebook: "pandas/07_combining_dataframes.ipynb"
    },
    {
      id: "pd-34", title: "pd.merge()", category: "Combining DataFrames", difficulty: "intermediate",
      snippet: `pd.<span class="fn">merge</span>(df1, df2, on=<span class="st">'id'</span>)        <span class="cm"># inner</span>\npd.<span class="fn">merge</span>(df1, df2, on=<span class="st">'id'</span>, how=<span class="st">'left'</span>)\npd.<span class="fn">merge</span>(df1, df2,\n    left_on=<span class="st">'emp_id'</span>,\n    right_on=<span class="st">'id'</span>)`,
      description: "SQL-style join. how: 'inner' (default), 'left', 'right', 'outer'. Use left_on/right_on when column names differ. Adds _x/_y suffixes for overlapping columns (control with suffixes param).",
      params: "pd.merge(left, right, how='inner', on=None, left_on=None, right_on=None, suffixes=('_x','_y'))",
      notebook: "pandas/07_combining_dataframes.ipynb"
    },
    {
      id: "pd-35", title: ".join()", category: "Combining DataFrames", difficulty: "intermediate",
      snippet: `df1.<span class="fn">join</span>(df2)              <span class="cm"># index-based</span>\ndf1.<span class="fn">join</span>(df2, how=<span class="st">'inner'</span>)\ndf1.<span class="fn">join</span>(df2, on=<span class="st">'key'</span>)   <span class="cm"># use col as key</span>`,
      description: "Index-based join (vs merge's column-based). Faster when data is already indexed properly. For on= parameter, df1 column value is matched against df2's index.",
      params: "df.join(other, on=None, how='left', lsuffix='', rsuffix='', sort=False)",
      notebook: "pandas/07_combining_dataframes.ipynb"
    },
    {
      id: "pd-36", title: "pd.merge_asof()", category: "Combining DataFrames", difficulty: "advanced",
      snippet: `<span class="cm"># Merge on nearest key (sorted data)</span>\npd.<span class="fn">merge_asof</span>(trades, quotes,\n    on=<span class="st">'time'</span>,\n    direction=<span class="st">'backward'</span>)`,
      description: "Nearest-key join — matches each row in left to the nearest row in right (must be sorted). Essential for time series: match each trade to the most recent quote. direction: 'backward', 'forward', 'nearest'.",
      params: "pd.merge_asof(left, right, on, by=None, tolerance=None, direction='backward')",
      notebook: "pandas/07_combining_dataframes.ipynb"
    },
    {
      id: "pd-37", title: "pd.concat() with keys", category: "Combining DataFrames", difficulty: "advanced",
      snippet: `result = pd.<span class="fn">concat</span>(\n    [df1, df2],\n    keys=[<span class="st">'train'</span>, <span class="st">'test'</span>]\n)\nresult.<span class="op">loc</span>[<span class="st">'train'</span>]  <span class="cm"># access by key</span>`,
      description: "keys parameter creates a hierarchical MultiIndex, labeling which source DataFrame each row came from. Useful for creating a single DataFrame from multiple data splits while preserving provenance.",
      params: "pd.concat(objs, keys=None, names=None)",
      notebook: "pandas/07_combining_dataframes.ipynb"
    },

    // ---- Category: Reshaping ----
    {
      id: "pd-38", title: ".melt()", category: "Reshaping", difficulty: "intermediate",
      snippet: `df.<span class="fn">melt</span>(id_vars=[<span class="st">'name'</span>],\n    value_vars=[<span class="st">'q1'</span>,<span class="st">'q2'</span>],\n    var_name=<span class="st">'quarter'</span>,\n    value_name=<span class="st">'sales'</span>)\n<span class="cm"># Wide → Long (tidy) format</span>`,
      description: "Converts wide format (one column per metric) to long/tidy format (one row per observation). The inverse of pivot. Essential for ggplot-style visualization (Seaborn/Altair need long format).",
      params: "df.melt(id_vars=None, value_vars=None, var_name='variable', value_name='value')",
      notebook: "pandas/08_reshaping.ipynb"
    },
    {
      id: "pd-39", title: ".pivot()", category: "Reshaping", difficulty: "intermediate",
      snippet: `df.<span class="fn">pivot</span>(index=<span class="st">'date'</span>,\n    columns=<span class="st">'city'</span>,\n    values=<span class="st">'temp'</span>)\n<span class="cm"># Long → Wide format</span>\n<span class="cm"># Fails if duplicate (row,col) pairs</span>`,
      description: "Converts long format to wide format. Requires unique (index, columns) pairs — use pivot_table for duplicates (with aggregation). Returns DF with column MultiIndex if values=list.",
      params: "df.pivot(index=None, columns=None, values=None)",
      notebook: "pandas/08_reshaping.ipynb"
    },
    {
      id: "pd-40", title: ".stack() / .unstack()", category: "Reshaping", difficulty: "advanced",
      snippet: `df.<span class="fn">stack</span>()      <span class="cm"># columns → index level</span>\ndf.<span class="fn">unstack</span>()    <span class="cm"># index level → columns</span>\ndf.<span class="fn">unstack</span>(<span class="nm">0</span>)   <span class="cm"># specify level</span>\n<span class="cm"># Works with MultiIndex</span>`,
      description: "stack rotates the innermost column level to a new row index level (columns→rows). unstack is the inverse (rows→columns). Both return a longer/wider DataFrame with MultiIndex.",
      params: "df.stack(level=-1, dropna=True) | df.unstack(level=-1, fill_value=None)",
      notebook: "pandas/08_reshaping.ipynb"
    },
    {
      id: "pd-41", title: "pd.cut() / pd.qcut() / pd.get_dummies()", category: "Reshaping", difficulty: "intermediate",
      snippet: `pd.<span class="fn">cut</span>(df.age, bins=[<span class="nm">0</span>,<span class="nm">18</span>,<span class="nm">60</span>,<span class="nm">100</span>],\n    labels=[<span class="st">'child'</span>,<span class="st">'adult'</span>,<span class="st">'senior'</span>])\npd.<span class="fn">qcut</span>(df.age, q=<span class="nm">4</span>)  <span class="cm"># equal-frequency</span>\npd.<span class="fn">get_dummies</span>(df, columns=[<span class="st">'sex'</span>])`,
      description: "cut: fixed-width bins. qcut: equal-frequency bins (quantile-based). get_dummies: one-hot encoding. drop_first=True in get_dummies avoids dummy variable trap in regression.",
      params: "pd.cut(x, bins, labels=None) | pd.qcut(x, q) | pd.get_dummies(df, columns=None, drop_first=False)",
      notebook: "pandas/08_reshaping.ipynb"
    },

    // ---- Category: Output & Visualization ----
    {
      id: "pd-42", title: "to_csv() / to_excel() / to_parquet()", category: "Output & Visualization", difficulty: "beginner",
      snippet: `df.<span class="fn">to_csv</span>(<span class="st">'out.csv'</span>, index=<span class="cn">False</span>)\ndf.<span class="fn">to_excel</span>(<span class="st">'out.xlsx'</span>, sheet_name=<span class="st">'data'</span>)\ndf.<span class="fn">to_parquet</span>(<span class="st">'out.parquet'</span>)\ndf.<span class="fn">to_json</span>(<span class="st">'out.json'</span>, orient=<span class="st">'records'</span>)`,
      description: "index=False prevents writing the row index as a column (usually unwanted). Parquet is fastest for large files. orient='records' in to_json produces [{col:val}] format (most common for APIs).",
      params: "df.to_csv(path, sep=',', index=True, encoding='utf-8')",
      notebook: "pandas/09_output_visualization.ipynb"
    },
    {
      id: "pd-43", title: ".plot()", category: "Output & Visualization", difficulty: "beginner",
      snippet: `df[<span class="st">'age'</span>].<span class="fn">plot</span>(kind=<span class="st">'hist'</span>)\ndf.<span class="fn">plot</span>(x=<span class="st">'age'</span>, y=<span class="st">'fare'</span>, kind=<span class="st">'scatter'</span>)\ndf.<span class="fn">plot</span>(kind=<span class="st">'bar'</span>, figsize=(<span class="nm">10</span>,<span class="nm">5</span>))\ndf.<span class="fn">plot</span>(kind=<span class="st">'box'</span>)  <span class="cm"># boxplot</span>`,
      description: "Thin matplotlib wrapper. kind options: 'line', 'bar', 'barh', 'hist', 'box', 'kde', 'area', 'pie', 'scatter', 'hexbin'. Returns AxesSubplot — call plt.show() or use in Jupyter.",
      params: "df.plot(kind='line', x=None, y=None, figsize=None, title=None, legend=True)",
      notebook: "pandas/09_output_visualization.ipynb"
    },
    {
      id: "pd-44", title: ".sort_values() / .sort_index()", category: "Output & Visualization", difficulty: "beginner",
      snippet: `df.<span class="fn">sort_values</span>(<span class="st">'age'</span>)\ndf.<span class="fn">sort_values</span>([<span class="st">'class'</span>,<span class="st">'fare'</span>],\n    ascending=[<span class="cn">True</span>, <span class="cn">False</span>])\ndf.<span class="fn">sort_index</span>()           <span class="cm"># sort by row label</span>\ndf.<span class="fn">nlargest</span>(<span class="nm">5</span>, <span class="st">'fare'</span>)     <span class="cm"># top 5 rows</span>`,
      description: "sort_values sorts by column values (multi-column with lists). ascending=False for descending. na_position='last'/'first'. nlargest/nsmallest are faster than sort+head for extreme values.",
      params: "df.sort_values(by, ascending=True, na_position='last', inplace=False, key=None)",
      notebook: "pandas/09_output_visualization.ipynb"
    },
    {
      id: "pd-45", title: ".sample()", category: "Output & Visualization", difficulty: "beginner",
      snippet: `df.<span class="fn">sample</span>(<span class="nm">5</span>)                   <span class="cm"># 5 random rows</span>\ndf.<span class="fn">sample</span>(frac=<span class="nm">0.1</span>)           <span class="cm"># 10% of data</span>\ndf.<span class="fn">sample</span>(frac=<span class="nm">1</span>, random_state=<span class="nm">42</span>) <span class="cm"># shuffle!</span>`,
      description: "Random sampling without replacement by default. frac=1 shuffles the entire DataFrame. Set random_state for reproducibility. replace=True for bootstrap sampling. Axis=1 samples columns.",
      params: "df.sample(n=None, frac=None, replace=False, random_state=None, axis=None)",
      notebook: "pandas/09_output_visualization.ipynb"
    }
  ],

  // ==============================================================
  // SCIKIT-LEARN CARDS (44 cards, 9 categories)
  // ==============================================================
  sklearn: [
    // ---- Category: Data Loading ----
    {
      id: "sk-01", title: "load_iris() / load_wine() / load_digits()", category: "Data Loading", difficulty: "beginner",
      snippet: `<span class="kw">from</span> sklearn.datasets <span class="kw">import</span> load_iris\ndata = <span class="fn">load_iris</span>()\nX, y = data.data, data.target\ndata.feature_names  <span class="cm"># ['sepal length'...]</span>\ndata.target_names   <span class="cm"># ['setosa'...]</span>`,
      description: "Built-in toy datasets return Bunch objects (dict-like). Common attributes: .data (feature matrix), .target (labels), .feature_names, .target_names, .DESCR (full description). Use as_frame=True for DataFrame.",
      params: "load_iris(*, return_X_y=False, as_frame=False)",
      notebook: "sklearn/01_data_loading.ipynb"
    },
    {
      id: "sk-02", title: "fetch_california_housing() / fetch_openml()", category: "Data Loading", difficulty: "beginner",
      snippet: `<span class="kw">from</span> sklearn.datasets <span class="kw">import</span> fetch_california_housing\nhousing = <span class="fn">fetch_california_housing</span>(as_frame=<span class="cn">True</span>)\nX, y = housing.data, housing.target\n\n<span class="kw">from</span> sklearn.datasets <span class="kw">import</span> fetch_openml\nmnist = <span class="fn">fetch_openml</span>(<span class="st">'mnist_784'</span>, version=<span class="nm">1</span>)`,
      description: "Larger real-world datasets fetched from the internet (cached locally). fetch_openml accesses the OpenML repository — over 20,000 datasets available by name or ID. First call downloads; subsequent calls use cache.",
      params: "fetch_california_housing(*, data_home=None, as_frame=False, return_X_y=False)",
      notebook: "sklearn/01_data_loading.ipynb"
    },
    {
      id: "sk-03", title: "make_classification() / make_regression() / make_blobs()", category: "Data Loading", difficulty: "intermediate",
      snippet: `<span class="kw">from</span> sklearn.datasets <span class="kw">import</span> make_classification\nX, y = <span class="fn">make_classification</span>(n_samples=<span class="nm">1000</span>,\n    n_features=<span class="nm">20</span>, n_informative=<span class="nm">5</span>,\n    random_state=<span class="nm">42</span>)\nX, y = <span class="fn">make_blobs</span>(n_samples=<span class="nm">300</span>, centers=<span class="nm">3</span>)`,
      description: "Synthetic datasets for algorithm testing. make_blobs: isotropic Gaussian clusters (for clustering). make_classification: features with controlled noise/redundancy. make_regression: continuous target with optional noise.",
      params: "make_classification(n_samples=100, n_features=20, n_informative=2, random_state=None)",
      notebook: "sklearn/01_data_loading.ipynb"
    },
    {
      id: "sk-04", title: "train_test_split()", category: "Data Loading", difficulty: "beginner",
      snippet: `<span class="kw">from</span> sklearn.model_selection <span class="kw">import</span> train_test_split\nX_train, X_test, y_train, y_test = <span class="fn">train_test_split</span>(\n    X, y,\n    test_size=<span class="nm">0.2</span>,\n    random_state=<span class="nm">42</span>,\n    stratify=y   <span class="cm"># preserve class ratios</span>\n)`,
      description: "Split arrays into random train and test subsets. stratify=y ensures the class distribution in each split matches the original — essential for imbalanced datasets. Always set random_state for reproducibility.",
      params: "train_test_split(*arrays, test_size=None, train_size=None, random_state=None, shuffle=True, stratify=None)",
      notebook: "sklearn/01_data_loading.ipynb"
    },

    // ---- Category: Preprocessing ----
    {
      id: "sk-05", title: "StandardScaler()", category: "Preprocessing", difficulty: "beginner",
      snippet: `<span class="kw">from</span> sklearn.preprocessing <span class="kw">import</span> StandardScaler\nscaler = <span class="fn">StandardScaler</span>()\nX_train_s = scaler.<span class="fn">fit_transform</span>(X_train)\nX_test_s  = scaler.<span class="fn">transform</span>(X_test) <span class="cm"># only transform!</span>\n<span class="cm"># scaler.mean_, scaler.scale_</span>`,
      description: "Standardize to zero mean, unit variance: z = (x - μ) / σ. NEVER fit on test set — data leakage! fit_transform on train, transform only on test/validation. Use inside Pipeline to prevent leakage automatically.",
      params: "StandardScaler(copy=True, with_mean=True, with_std=True)",
      notebook: "sklearn/02_preprocessing.ipynb"
    },
    {
      id: "sk-06", title: "MinMaxScaler() / RobustScaler()", category: "Preprocessing", difficulty: "beginner",
      snippet: `<span class="kw">from</span> sklearn.preprocessing <span class="kw">import</span> MinMaxScaler, RobustScaler\n<span class="fn">MinMaxScaler</span>().<span class="fn">fit_transform</span>(X)\n<span class="cm"># Scales to [0,1] — sensitive to outliers</span>\n<span class="fn">RobustScaler</span>().<span class="fn">fit_transform</span>(X)\n<span class="cm"># Uses median + IQR — robust to outliers</span>`,
      description: "MinMaxScaler: x_scaled = (x - min) / (max - min). Good for neural networks. RobustScaler: uses median and interquartile range — better than StandardScaler when data has outliers.",
      params: "MinMaxScaler(feature_range=(0,1)) | RobustScaler(quantile_range=(25,75))",
      notebook: "sklearn/02_preprocessing.ipynb"
    },
    {
      id: "sk-07", title: "LabelEncoder() / OrdinalEncoder()", category: "Preprocessing", difficulty: "beginner",
      snippet: `<span class="kw">from</span> sklearn.preprocessing <span class="kw">import</span> LabelEncoder\nle = <span class="fn">LabelEncoder</span>()\ny = le.<span class="fn">fit_transform</span>([<span class="st">'cat'</span>,<span class="st">'dog'</span>,<span class="st">'cat'</span>])\n<span class="cm"># [0, 1, 0]</span>\nle.<span class="fn">inverse_transform</span>([<span class="nm">0</span>,<span class="nm">1</span>])  <span class="cm"># back to labels</span>`,
      description: "LabelEncoder: encode target labels (1D only). OrdinalEncoder: encode 2D feature matrix with multiple columns. Both map categories to integers. Use for ordinal categories (small/medium/large), not for nominal (use OneHotEncoder).",
      params: "LabelEncoder() — no params | OrdinalEncoder(categories='auto', handle_unknown='error')",
      notebook: "sklearn/02_preprocessing.ipynb"
    },
    {
      id: "sk-08", title: "OneHotEncoder()", category: "Preprocessing", difficulty: "intermediate",
      snippet: `<span class="kw">from</span> sklearn.preprocessing <span class="kw">import</span> OneHotEncoder\nohe = <span class="fn">OneHotEncoder</span>(sparse_output=<span class="cn">False</span>, drop=<span class="st">'first'</span>)\nX_enc = ohe.<span class="fn">fit_transform</span>(X_cat)\nohe.get_feature_names_out()  <span class="cm"># column names</span>`,
      description: "Creates binary columns for each category. sparse_output=False for dense array. drop='first' avoids dummy variable trap. handle_unknown='ignore' silently handles unseen categories at test time.",
      params: "OneHotEncoder(categories='auto', drop=None, sparse_output=True, handle_unknown='error')",
      notebook: "sklearn/02_preprocessing.ipynb"
    },
    {
      id: "sk-09", title: "SimpleImputer()", category: "Preprocessing", difficulty: "beginner",
      snippet: `<span class="kw">from</span> sklearn.impute <span class="kw">import</span> SimpleImputer\nimp = <span class="fn">SimpleImputer</span>(strategy=<span class="st">'mean'</span>)\nX_imp = imp.<span class="fn">fit_transform</span>(X)\n<span class="cm"># strategies: 'mean','median',</span>\n<span class="cm">#  'most_frequent', 'constant'</span>`,
      description: "Fill missing values using a strategy. 'mean'/'median' for numerical, 'most_frequent' or 'constant' (fill_value=X) for categorical. Fits on training set, applies same strategy to test set.",
      params: "SimpleImputer(missing_values=nan, strategy='mean', fill_value=None, add_indicator=False)",
      notebook: "sklearn/02_preprocessing.ipynb"
    },
    {
      id: "sk-10", title: "PolynomialFeatures()", category: "Preprocessing", difficulty: "intermediate",
      snippet: `<span class="kw">from</span> sklearn.preprocessing <span class="kw">import</span> PolynomialFeatures\npoly = <span class="fn">PolynomialFeatures</span>(degree=<span class="nm">2</span>, include_bias=<span class="cn">False</span>)\nX_poly = poly.<span class="fn">fit_transform</span>(X)\n<span class="cm"># [a,b] → [a, b, a², ab, b²]</span>`,
      description: "Generates polynomial and interaction features. With 2 features and degree=2: creates feature², feature×feature², and cross-products. Enables linear models to fit non-linear data. Watch for feature explosion with high degree.",
      params: "PolynomialFeatures(degree=2, interaction_only=False, include_bias=True)",
      notebook: "sklearn/02_preprocessing.ipynb"
    },

    // ---- Category: Model Selection & Validation ----
    {
      id: "sk-11", title: "cross_val_score()", category: "Model Selection", difficulty: "intermediate",
      snippet: `<span class="kw">from</span> sklearn.model_selection <span class="kw">import</span> cross_val_score\nscores = <span class="fn">cross_val_score</span>(\n    estimator, X, y,\n    cv=<span class="nm">5</span>,\n    scoring=<span class="st">'accuracy'</span>\n)\nscores.<span class="fn">mean</span>(), scores.<span class="fn">std</span>()`,
      description: "K-fold cross-validation. Returns array of scores (one per fold). cv=5 means 5-fold. scoring options: 'accuracy', 'f1', 'roc_auc', 'neg_mean_squared_error', etc. Negative for errors (convention).",
      params: "cross_val_score(estimator, X, y, groups=None, scoring=None, cv=5, n_jobs=None)",
      notebook: "sklearn/03_model_selection.ipynb"
    },
    {
      id: "sk-12", title: "KFold() / StratifiedKFold()", category: "Model Selection", difficulty: "intermediate",
      snippet: `<span class="kw">from</span> sklearn.model_selection <span class="kw">import</span> StratifiedKFold\nskf = <span class="fn">StratifiedKFold</span>(n_splits=<span class="nm">5</span>, shuffle=<span class="cn">True</span>, random_state=<span class="nm">42</span>)\n<span class="kw">for</span> train_idx, val_idx <span class="kw">in</span> skf.<span class="fn">split</span>(X, y):\n    X_tr, X_val = X[train_idx], X[val_idx]`,
      description: "StratifiedKFold preserves class proportions in each fold — essential for imbalanced datasets. shuffle=True randomizes before splitting. GroupKFold prevents data from same group appearing in both train/test.",
      params: "StratifiedKFold(n_splits=5, shuffle=False, random_state=None)",
      notebook: "sklearn/03_model_selection.ipynb"
    },
    {
      id: "sk-13", title: "GridSearchCV()", category: "Model Selection", difficulty: "intermediate",
      snippet: `<span class="kw">from</span> sklearn.model_selection <span class="kw">import</span> GridSearchCV\nparam_grid = {<span class="st">'C'</span>: [<span class="nm">0.1</span>,<span class="nm">1</span>,<span class="nm">10</span>], <span class="st">'kernel'</span>:[<span class="st">'rbf'</span>,<span class="st">'linear'</span>]}\ngs = <span class="fn">GridSearchCV</span>(SVC(), param_grid, cv=<span class="nm">5</span>, n_jobs=<span class="nm">-1</span>)\ngs.<span class="fn">fit</span>(X_train, y_train)\ngs.best_params_, gs.best_score_`,
      description: "Exhaustive hyperparameter search over a parameter grid. n_jobs=-1 uses all CPU cores. refit=True (default) fits best model on full training set. Access cv_results_ for full grid results.",
      params: "GridSearchCV(estimator, param_grid, scoring=None, cv=5, n_jobs=None, refit=True, verbose=0)",
      notebook: "sklearn/03_model_selection.ipynb"
    },
    {
      id: "sk-14", title: "RandomizedSearchCV()", category: "Model Selection", difficulty: "intermediate",
      snippet: `<span class="kw">from</span> sklearn.model_selection <span class="kw">import</span> RandomizedSearchCV\n<span class="kw">from</span> scipy.stats <span class="kw">import</span> loguniform\nparam_dist = {<span class="st">'C'</span>: <span class="fn">loguniform</span>(<span class="nm">0.01</span>, <span class="nm">100</span>)}\nrs = <span class="fn">RandomizedSearchCV</span>(SVC(), param_dist, n_iter=<span class="nm">20</span>, cv=<span class="nm">5</span>)\nrs.<span class="fn">fit</span>(X_train, y_train)`,
      description: "Randomly samples from parameter distributions. Much faster than GridSearchCV for large grids. Use scipy distributions (loguniform, uniform, randint) for continuous/integer parameters. n_iter controls budget.",
      params: "RandomizedSearchCV(estimator, param_distributions, n_iter=10, scoring=None, cv=5, random_state=None)",
      notebook: "sklearn/03_model_selection.ipynb"
    },
    {
      id: "sk-15", title: "Pipeline()", category: "Model Selection", difficulty: "intermediate",
      snippet: `<span class="kw">from</span> sklearn.pipeline <span class="kw">import</span> Pipeline\npipe = <span class="fn">Pipeline</span>([\n    (<span class="st">'scaler'</span>, StandardScaler()),\n    (<span class="st">'clf'</span>, LogisticRegression())\n])\npipe.<span class="fn">fit</span>(X_train, y_train)\npipe.<span class="fn">predict</span>(X_test)`,
      description: "Chains preprocessing + model into a single estimator. Prevents data leakage — scaler is fit on each training fold during CV. Last step must be an estimator; earlier steps must be transformers. Use with GridSearchCV.",
      params: "Pipeline(steps: list[tuple], memory=None) | make_pipeline(*steps) — auto-names steps",
      notebook: "sklearn/03_model_selection.ipynb"
    },
    {
      id: "sk-16", title: "ColumnTransformer()", category: "Model Selection", difficulty: "advanced",
      snippet: `<span class="kw">from</span> sklearn.compose <span class="kw">import</span> ColumnTransformer\npreprocessor = <span class="fn">ColumnTransformer</span>([\n    (<span class="st">'num'</span>, StandardScaler(), num_cols),\n    (<span class="st">'cat'</span>, OneHotEncoder(), cat_cols)\n])\npipe = <span class="fn">Pipeline</span>([(<span class="st">'pre'</span>, preprocessor), (<span class="st">'clf'</span>, clf)])`,
      description: "Apply different transformers to different column subsets simultaneously — the standard pattern for mixed numeric/categorical data. 'passthrough' passes columns unchanged. 'drop' removes them.",
      params: "ColumnTransformer(transformers, remainder='drop', sparse_threshold=0.3, n_jobs=None)",
      notebook: "sklearn/03_model_selection.ipynb"
    },

    // ---- Category: Classification ----
    {
      id: "sk-17", title: "LogisticRegression()", category: "Classification", difficulty: "beginner",
      snippet: `<span class="kw">from</span> sklearn.linear_model <span class="kw">import</span> LogisticRegression\nclf = <span class="fn">LogisticRegression</span>(C=<span class="nm">1.0</span>, max_iter=<span class="nm">1000</span>)\nclf.<span class="fn">fit</span>(X_train, y_train)\nclf.<span class="fn">predict</span>(X_test)\nclf.<span class="fn">predict_proba</span>(X_test)[:, <span class="nm">1</span>]`,
      description: "Linear classifier using sigmoid function. C = 1/λ (inverse regularization strength — larger C = less regularization). max_iter: increase if convergence warning. predict_proba for class probabilities.",
      params: "LogisticRegression(penalty='l2', C=1.0, max_iter=100, solver='lbfgs', multi_class='auto')",
      notebook: "sklearn/04_classification.ipynb"
    },
    {
      id: "sk-18", title: "KNeighborsClassifier()", category: "Classification", difficulty: "beginner",
      snippet: `<span class="kw">from</span> sklearn.neighbors <span class="kw">import</span> KNeighborsClassifier\nknn = <span class="fn">KNeighborsClassifier</span>(n_neighbors=<span class="nm">5</span>)\nknn.<span class="fn">fit</span>(X_train, y_train)\nknn.<span class="fn">score</span>(X_test, y_test)\n<span class="cm"># Always scale features first!</span>`,
      description: "Classifies based on k nearest training points. No training phase — computes distances at prediction time (lazy learner). Always standardize features first — distances are not scale-invariant. k=odd prevents ties in binary.",
      params: "KNeighborsClassifier(n_neighbors=5, weights='uniform', metric='minkowski', p=2)",
      notebook: "sklearn/04_classification.ipynb"
    },
    {
      id: "sk-19", title: "SVC()", category: "Classification", difficulty: "intermediate",
      snippet: `<span class="kw">from</span> sklearn.svm <span class="kw">import</span> SVC\nclf = <span class="fn">SVC</span>(kernel=<span class="st">'rbf'</span>, C=<span class="nm">1.0</span>,\n    gamma=<span class="st">'scale'</span>,\n    probability=<span class="cn">True</span>)\nclf.<span class="fn">fit</span>(X_train, y_train)\n<span class="cm"># kernels: 'linear','rbf','poly','sigmoid'</span>`,
      description: "Support Vector Classifier. C: tradeoff between margin and misclassification. gamma='scale' (1/(n_features × var)) usually good. probability=True enables predict_proba but slower. Scale features first.",
      params: "SVC(C=1.0, kernel='rbf', degree=3, gamma='scale', probability=False, class_weight=None)",
      notebook: "sklearn/04_classification.ipynb"
    },
    {
      id: "sk-20", title: "DecisionTreeClassifier()", category: "Classification", difficulty: "beginner",
      snippet: `<span class="kw">from</span> sklearn.tree <span class="kw">import</span> DecisionTreeClassifier\ntree = <span class="fn">DecisionTreeClassifier</span>(\n    max_depth=<span class="nm">5</span>,\n    min_samples_leaf=<span class="nm">5</span>,\n    random_state=<span class="nm">42</span>)\ntree.<span class="fn">fit</span>(X_train, y_train)\ntree.feature_importances_`,
      description: "Axis-aligned binary splits. Prone to overfitting — control with max_depth, min_samples_leaf, min_samples_split, max_features. .feature_importances_ shows Gini/entropy gain per feature.",
      params: "DecisionTreeClassifier(criterion='gini', max_depth=None, min_samples_split=2, random_state=None)",
      notebook: "sklearn/04_classification.ipynb"
    },
    {
      id: "sk-21", title: "RandomForestClassifier()", category: "Classification", difficulty: "intermediate",
      snippet: `<span class="kw">from</span> sklearn.ensemble <span class="kw">import</span> RandomForestClassifier\nrf = <span class="fn">RandomForestClassifier</span>(\n    n_estimators=<span class="nm">100</span>,\n    max_features=<span class="st">'sqrt'</span>,\n    random_state=<span class="nm">42</span>, n_jobs=<span class="nm">-1</span>)\nrf.<span class="fn">fit</span>(X_train, y_train)\nrf.oob_score_  <span class="cm"># free validation!</span>`,
      description: "Ensemble of decision trees — bagging + random feature subsets. max_features='sqrt' (default) selects √features at each split. oob_score=True gives free out-of-bag validation estimate. Parallel with n_jobs=-1.",
      params: "RandomForestClassifier(n_estimators=100, max_features='sqrt', max_depth=None, oob_score=False, n_jobs=None)",
      notebook: "sklearn/04_classification.ipynb"
    },
    {
      id: "sk-22", title: "HistGradientBoostingClassifier()", category: "Classification", difficulty: "advanced",
      snippet: `<span class="kw">from</span> sklearn.ensemble <span class="kw">import</span> HistGradientBoostingClassifier\nhgb = <span class="fn">HistGradientBoostingClassifier</span>(\n    max_iter=<span class="nm">200</span>,\n    learning_rate=<span class="nm">0.05</span>,\n    max_depth=<span class="nm">6</span>,\n    random_state=<span class="nm">42</span>)\nhgb.<span class="fn">fit</span>(X_train, y_train)`,
      description: "Modern gradient boosting (like LightGBM/XGBoost) — fastest sklearn gradient boosting. Handles NaN natively (no imputation needed). Better than GradientBoostingClassifier for large datasets.",
      params: "HistGradientBoostingClassifier(max_iter=100, learning_rate=0.1, max_depth=None, early_stopping='auto')",
      notebook: "sklearn/04_classification.ipynb"
    },

    // ---- Category: Regression ----
    {
      id: "sk-23", title: "LinearRegression()", category: "Regression", difficulty: "beginner",
      snippet: `<span class="kw">from</span> sklearn.linear_model <span class="kw">import</span> LinearRegression\nlr = <span class="fn">LinearRegression</span>()\nlr.<span class="fn">fit</span>(X_train, y_train)\ny_pred = lr.<span class="fn">predict</span>(X_test)\nlr.coef_       <span class="cm"># feature weights</span>\nlr.intercept_  <span class="cm"># bias term</span>`,
      description: "Ordinary Least Squares regression. coef_ holds feature weights (one per feature). intercept_ is the bias. No hyperparameters to tune. Use Ridge/Lasso when multicollinearity or many features.",
      params: "LinearRegression(fit_intercept=True, positive=False)",
      notebook: "sklearn/05_regression.ipynb"
    },
    {
      id: "sk-24", title: "Ridge() / Lasso() / ElasticNet()", category: "Regression", difficulty: "intermediate",
      snippet: `<span class="kw">from</span> sklearn.linear_model <span class="kw">import</span> Ridge, Lasso, ElasticNet\n<span class="fn">Ridge</span>(alpha=<span class="nm">1.0</span>)     <span class="cm"># L2 — shrinks coefs</span>\n<span class="fn">Lasso</span>(alpha=<span class="nm">0.1</span>)     <span class="cm"># L1 — zeros out coefs</span>\n<span class="fn">ElasticNet</span>(alpha=<span class="nm">0.1</span>, l1_ratio=<span class="nm">0.5</span>)  <span class="cm"># L1+L2</span>`,
      description: "Regularized regression. Ridge (L2): shrinks all coefficients, doesn't zero them — good for correlated features. Lasso (L1): drives some to zero — automatic feature selection. ElasticNet: combines both.",
      params: "Ridge(alpha=1.0, fit_intercept=True) | Lasso(alpha=1.0, max_iter=1000) | ElasticNet(alpha=1.0, l1_ratio=0.5)",
      notebook: "sklearn/05_regression.ipynb"
    },
    {
      id: "sk-25", title: "SVR()", category: "Regression", difficulty: "intermediate",
      snippet: `<span class="kw">from</span> sklearn.svm <span class="kw">import</span> SVR\nsvr = <span class="fn">SVR</span>(kernel=<span class="st">'rbf'</span>, C=<span class="nm">100</span>, epsilon=<span class="nm">0.1</span>)\nsvr.<span class="fn">fit</span>(X_train_s, y_train)  <span class="cm"># scale first!</span>\nsvr.<span class="fn">predict</span>(X_test_s)`,
      description: "Support Vector Regression. epsilon defines tube around predictions where no penalty is given. C controls slack tolerance. Must scale features first. Works well for non-linear regression with right kernel.",
      params: "SVR(kernel='rbf', degree=3, gamma='scale', C=1.0, epsilon=0.1)",
      notebook: "sklearn/05_regression.ipynb"
    },
    {
      id: "sk-26", title: "RandomForestRegressor()", category: "Regression", difficulty: "intermediate",
      snippet: `<span class="kw">from</span> sklearn.ensemble <span class="kw">import</span> RandomForestRegressor\nrf = <span class="fn">RandomForestRegressor</span>(\n    n_estimators=<span class="nm">100</span>,\n    max_features=<span class="nm">1</span>/<span class="nm">3</span>,   <span class="cm"># Breiman's rule</span>\n    random_state=<span class="nm">42</span>, n_jobs=<span class="nm">-1</span>)\nrf.<span class="fn">fit</span>(X_train, y_train)`,
      description: "Ensemble of regression trees. max_features=1/3 (Breiman's recommendation for regression, vs sqrt for classification). No scaling needed. Handles mixed feature types naturally. oob_score=True for free validation.",
      params: "RandomForestRegressor(n_estimators=100, max_features=1.0, max_depth=None, n_jobs=None)",
      notebook: "sklearn/05_regression.ipynb"
    },
    {
      id: "sk-27", title: "HistGradientBoostingRegressor()", category: "Regression", difficulty: "advanced",
      snippet: `<span class="kw">from</span> sklearn.ensemble <span class="kw">import</span> HistGradientBoostingRegressor\nhgb = <span class="fn">HistGradientBoostingRegressor</span>(\n    max_iter=<span class="nm">500</span>, learning_rate=<span class="nm">0.05</span>,\n    early_stopping=<span class="cn">True</span>, validation_fraction=<span class="nm">0.1</span>)`,
      description: "Fastest sklearn gradient boosting for regression. Native NaN handling. early_stopping=True uses validation_fraction to stop training when performance plateaus. Best for structured data.",
      params: "HistGradientBoostingRegressor(loss='squared_error', learning_rate=0.1, max_iter=100, early_stopping='auto')",
      notebook: "sklearn/05_regression.ipynb"
    },

    // ---- Category: Clustering ----
    {
      id: "sk-28", title: "KMeans()", category: "Clustering", difficulty: "intermediate",
      snippet: `<span class="kw">from</span> sklearn.cluster <span class="kw">import</span> KMeans\nkm = <span class="fn">KMeans</span>(n_clusters=<span class="nm">3</span>, init=<span class="st">'k-means++'</span>,\n    n_init=<span class="nm">10</span>, random_state=<span class="nm">42</span>)\nkm.<span class="fn">fit</span>(X)\nkm.labels_         <span class="cm"># cluster assignment</span>\nkm.cluster_centers_\nkm.inertia_        <span class="cm"># within-cluster sum of sq</span>`,
      description: "Partitions data into k clusters by minimizing inertia. k-means++ initialization greatly improves results vs random. n_init=10 runs algorithm 10 times, keeps best. Scale features first. Elbow method for choosing k.",
      params: "KMeans(n_clusters=8, init='k-means++', n_init=10, max_iter=300, random_state=None)",
      notebook: "sklearn/06_clustering.ipynb"
    },
    {
      id: "sk-29", title: "DBSCAN()", category: "Clustering", difficulty: "intermediate",
      snippet: `<span class="kw">from</span> sklearn.cluster <span class="kw">import</span> DBSCAN\ndb = <span class="fn">DBSCAN</span>(eps=<span class="nm">0.5</span>, min_samples=<span class="nm">5</span>)\ndb.<span class="fn">fit</span>(X)\ndb.labels_  <span class="cm"># -1 = noise/outlier</span>\n<span class="kw">import</span> numpy <span class="kw">as</span> np\nn_clusters = <span class="fn">len</span>(<span class="fn">set</span>(db.labels_)) - (<span class="nm">1</span> <span class="kw">if</span> <span class="nm">-1</span> <span class="kw">in</span> db.labels_ <span class="kw">else</span> <span class="nm">0</span>)`,
      description: "Density-based clustering — no need to specify k. eps: max distance between points in same cluster. min_samples: minimum points to form a core point. Label -1 = noise/outlier. Finds arbitrary-shaped clusters.",
      params: "DBSCAN(eps=0.5, min_samples=5, metric='euclidean', algorithm='auto')",
      notebook: "sklearn/06_clustering.ipynb"
    },
    {
      id: "sk-30", title: "AgglomerativeClustering()", category: "Clustering", difficulty: "intermediate",
      snippet: `<span class="kw">from</span> sklearn.cluster <span class="kw">import</span> AgglomerativeClustering\nagg = <span class="fn">AgglomerativeClustering</span>(n_clusters=<span class="nm">3</span>,\n    linkage=<span class="st">'ward'</span>)\nagg.<span class="fn">fit_predict</span>(X)\n<span class="cm"># linkages: 'ward','complete','average','single'</span>`,
      description: "Bottom-up hierarchical clustering — merges closest pair of clusters iteratively. ward minimizes within-cluster variance (best for compact clusters). Complete/average for non-Euclidean metrics. No predict on new data.",
      params: "AgglomerativeClustering(n_clusters=2, metric='euclidean', linkage='ward')",
      notebook: "sklearn/06_clustering.ipynb"
    },
    {
      id: "sk-31", title: "GaussianMixture()", category: "Clustering", difficulty: "advanced",
      snippet: `<span class="kw">from</span> sklearn.mixture <span class="kw">import</span> GaussianMixture\ngm = <span class="fn">GaussianMixture</span>(n_components=<span class="nm">3</span>, random_state=<span class="nm">42</span>)\ngm.<span class="fn">fit</span>(X)\ngm.<span class="fn">predict</span>(X)          <span class="cm"># hard assignment</span>\ngm.<span class="fn">predict_proba</span>(X)    <span class="cm"># soft (probabilistic)</span>`,
      description: "Probabilistic model — assumes data from mixture of Gaussians. Unlike KMeans: soft assignments (probability per cluster), handles elliptical clusters, uses BIC/AIC for model selection. EM algorithm.",
      params: "GaussianMixture(n_components=1, covariance_type='full', max_iter=100, random_state=None)",
      notebook: "sklearn/06_clustering.ipynb"
    },

    // ---- Category: Dimensionality Reduction ----
    {
      id: "sk-32", title: "PCA()", category: "Dimensionality Reduction", difficulty: "intermediate",
      snippet: `<span class="kw">from</span> sklearn.decomposition <span class="kw">import</span> PCA\npca = <span class="fn">PCA</span>(n_components=<span class="nm">2</span>)\nX_2d = pca.<span class="fn">fit_transform</span>(X_scaled)\npca.explained_variance_ratio_   <span class="cm"># % variance</span>\nnp.<span class="fn">cumsum</span>(pca.explained_variance_ratio_)`,
      description: "Linear dimensionality reduction via SVD. Scale features first! explained_variance_ratio_ shows importance of each component. n_components=0.95 keeps components explaining 95% variance automatically.",
      params: "PCA(n_components=None, whiten=False, svd_solver='auto', random_state=None)",
      notebook: "sklearn/07_dimensionality_reduction.ipynb"
    },
    {
      id: "sk-33", title: "TruncatedSVD()", category: "Dimensionality Reduction", difficulty: "intermediate",
      snippet: `<span class="kw">from</span> sklearn.decomposition <span class="kw">import</span> TruncatedSVD\nsvd = <span class="fn">TruncatedSVD</span>(n_components=<span class="nm">50</span>, random_state=<span class="nm">42</span>)\nX_reduced = svd.<span class="fn">fit_transform</span>(X_sparse)\n<span class="cm"># Works with sparse matrices — PCA does not!</span>`,
      description: "Like PCA but works on sparse matrices (no centering). Essential for NLP bag-of-words TF-IDF matrices and recommendation systems. Also called Latent Semantic Analysis (LSA) in NLP.",
      params: "TruncatedSVD(n_components=2, algorithm='randomized', n_iter=5, random_state=None)",
      notebook: "sklearn/07_dimensionality_reduction.ipynb"
    },
    {
      id: "sk-34", title: "TSNE()", category: "Dimensionality Reduction", difficulty: "intermediate",
      snippet: `<span class="kw">from</span> sklearn.manifold <span class="kw">import</span> TSNE\ntsne = <span class="fn">TSNE</span>(n_components=<span class="nm">2</span>, perplexity=<span class="nm">30</span>,\n    random_state=<span class="nm">42</span>)\nX_2d = tsne.<span class="fn">fit_transform</span>(X)\n<span class="cm"># VISUALIZATION ONLY — not for ML features!</span>`,
      description: "Non-linear dimensionality reduction for 2D/3D visualization. Preserves local structure — clusters visible. Perplexity ≈ expected cluster size (5-50). Does NOT have a transform() method — can't apply to new data.",
      params: "TSNE(n_components=2, perplexity=30, learning_rate='auto', n_iter=1000, random_state=None)",
      notebook: "sklearn/07_dimensionality_reduction.ipynb"
    },
    {
      id: "sk-35", title: "NMF()", category: "Dimensionality Reduction", difficulty: "advanced",
      snippet: `<span class="kw">from</span> sklearn.decomposition <span class="kw">import</span> NMF\nnmf = <span class="fn">NMF</span>(n_components=<span class="nm">10</span>, random_state=<span class="nm">42</span>)\nW = nmf.<span class="fn">fit_transform</span>(X)  <span class="cm"># coeff matrix</span>\nH = nmf.components_          <span class="cm"># basis matrix</span>\n<span class="cm"># X ≈ W × H  (all non-negative)</span>`,
      description: "Non-negative Matrix Factorization — decomposes X into non-negative factors W and H. Parts-based representation: used for topic modeling, image decomposition, and audio source separation. Requires non-negative input.",
      params: "NMF(n_components=None, init='warn', solver='cd', beta_loss='frobenius', max_iter=200, random_state=None)",
      notebook: "sklearn/07_dimensionality_reduction.ipynb"
    },

    // ---- Category: Metrics & Evaluation ----
    {
      id: "sk-36", title: "accuracy_score() / f1_score()", category: "Metrics & Evaluation", difficulty: "beginner",
      snippet: `<span class="kw">from</span> sklearn.metrics <span class="kw">import</span> accuracy_score, f1_score\n<span class="fn">accuracy_score</span>(y_true, y_pred)\n<span class="fn">f1_score</span>(y_true, y_pred)             <span class="cm"># binary</span>\n<span class="fn">f1_score</span>(y_true, y_pred, average=<span class="st">'macro'</span>)  <span class="cm"># multi</span>`,
      description: "accuracy = correct/total. F1 = harmonic mean of precision and recall. average options: 'macro' (unweighted per class), 'weighted' (by support), 'micro' (global TP/FP/FN). Use F1 for imbalanced datasets.",
      params: "f1_score(y_true, y_pred, average='binary', zero_division=0)",
      notebook: "sklearn/08_metrics_evaluation.ipynb"
    },
    {
      id: "sk-37", title: "mean_squared_error() / r2_score()", category: "Metrics & Evaluation", difficulty: "beginner",
      snippet: `<span class="kw">from</span> sklearn.metrics <span class="kw">import</span> mean_squared_error, r2_score\nmse = <span class="fn">mean_squared_error</span>(y_true, y_pred)\nrmse = mse ** <span class="nm">0.5</span>     <span class="cm"># same units as y</span>\nmae = <span class="fn">mean_absolute_error</span>(y_true, y_pred)\nr2  = <span class="fn">r2_score</span>(y_true, y_pred)`,
      description: "MSE penalizes large errors. RMSE in same unit as target — interpretable. MAE robust to outliers. R² = proportion of variance explained (1.0 = perfect, 0.0 = mean baseline, negative = worse than mean).",
      params: "mean_squared_error(y_true, y_pred, squared=True, multioutput='uniform_average')",
      notebook: "sklearn/08_metrics_evaluation.ipynb"
    },
    {
      id: "sk-38", title: "confusion_matrix() / classification_report()", category: "Metrics & Evaluation", difficulty: "beginner",
      snippet: `<span class="kw">from</span> sklearn.metrics <span class="kw">import</span> confusion_matrix, classification_report\n<span class="fn">confusion_matrix</span>(y_true, y_pred)\n<span class="fn">classification_report</span>(y_true, y_pred,\n    target_names=[<span class="st">'neg'</span>,<span class="st">'pos'</span>])`,
      description: "confusion_matrix: rows=actual, cols=predicted. classification_report: shows precision, recall, F1, support per class + macro/weighted averages. ConfusionMatrixDisplay for visual plot.",
      params: "confusion_matrix(y_true, y_pred, labels=None, normalize=None)",
      notebook: "sklearn/08_metrics_evaluation.ipynb"
    },
    {
      id: "sk-39", title: "roc_curve() / roc_auc_score()", category: "Metrics & Evaluation", difficulty: "intermediate",
      snippet: `<span class="kw">from</span> sklearn.metrics <span class="kw">import</span> roc_curve, roc_auc_score\ny_prob = clf.<span class="fn">predict_proba</span>(X_test)[:, <span class="nm">1</span>]\nfpr, tpr, thresholds = <span class="fn">roc_curve</span>(y_test, y_prob)\nauc = <span class="fn">roc_auc_score</span>(y_test, y_prob)`,
      description: "ROC = Receiver Operating Characteristic. AUC = Area Under the Curve (0.5=random, 1.0=perfect). Threshold-independent metric — great for imbalanced data. Plot FPR vs TPR for the curve.",
      params: "roc_auc_score(y_true, y_score, average='macro', multi_class='raise')",
      notebook: "sklearn/08_metrics_evaluation.ipynb"
    },
    {
      id: "sk-40", title: "cross_val_predict()", category: "Metrics & Evaluation", difficulty: "intermediate",
      snippet: `<span class="kw">from</span> sklearn.model_selection <span class="kw">import</span> cross_val_predict\ny_pred_cv = <span class="fn">cross_val_predict</span>(\n    clf, X, y, cv=<span class="nm">5</span>)\n<span class="cm"># Each element predicted when in test fold</span>\n<span class="fn">confusion_matrix</span>(y, y_pred_cv)`,
      description: "Returns predictions for each sample made when it was in the validation fold. Unlike cross_val_score (returns scores), this returns predictions — useful for generating out-of-fold predictions for stacking.",
      params: "cross_val_predict(estimator, X, y, cv=5, method='predict')",
      notebook: "sklearn/08_metrics_evaluation.ipynb"
    },

    // ---- Category: Feature Engineering ----
    {
      id: "sk-41", title: "SelectKBest()", category: "Feature Engineering", difficulty: "intermediate",
      snippet: `<span class="kw">from</span> sklearn.feature_selection <span class="kw">import</span> SelectKBest, f_classif\nselector = <span class="fn">SelectKBest</span>(score_func=f_classif, k=<span class="nm">5</span>)\nX_new = selector.<span class="fn">fit_transform</span>(X_train, y_train)\nselector.get_support()  <span class="cm"># bool mask of selected features</span>`,
      description: "Univariate feature selection based on statistical tests. f_classif: ANOVA F-test for classification. f_regression: for regression. chi2: for non-negative features. k='all' or integer count.",
      params: "SelectKBest(score_func=f_classif, k=10)",
      notebook: "sklearn/09_feature_engineering.ipynb"
    },
    {
      id: "sk-42", title: "RFE()", category: "Feature Engineering", difficulty: "intermediate",
      snippet: `<span class="kw">from</span> sklearn.feature_selection <span class="kw">import</span> RFE\nrfe = <span class="fn">RFE</span>(estimator=<span class="fn">LogisticRegression</span>(),\n    n_features_to_select=<span class="nm">5</span>)\nrfe.<span class="fn">fit</span>(X_train, y_train)\nrfe.support_  <span class="cm"># selected feature mask</span>\nrfe.ranking_  <span class="cm"># feature importance ranks</span>`,
      description: "Recursive Feature Elimination — fits model, removes weakest features, repeats. Uses model's coef_ or feature_importances_. RFECV automatically selects n_features via cross-validation.",
      params: "RFE(estimator, n_features_to_select=None, step=1) | RFECV(..., cv=5, scoring='accuracy')",
      notebook: "sklearn/09_feature_engineering.ipynb"
    },
    {
      id: "sk-43", title: ".feature_importances_", category: "Feature Engineering", difficulty: "intermediate",
      snippet: `rf.<span class="fn">fit</span>(X_train, y_train)\nimportances = rf.feature_importances_\nidx = np.<span class="fn">argsort</span>(importances)[::<span class="nm">-1</span>]\n<span class="kw">for</span> i <span class="kw">in</span> idx:\n    <span class="fn">print</span>(feature_names[i], importances[i])`,
      description: "Available on tree-based models (RF, GB, DT). Values are Gini importance (mean decrease in impurity) normalized to sum to 1. Higher = more important. Can be misleading for high-cardinality or correlated features.",
      params: "Attribute of fitted tree-based models — no parameters",
      notebook: "sklearn/09_feature_engineering.ipynb"
    },
    {
      id: "sk-44", title: "permutation_importance()", category: "Feature Engineering", difficulty: "advanced",
      snippet: `<span class="kw">from</span> sklearn.inspection <span class="kw">import</span> permutation_importance\nresult = <span class="fn">permutation_importance</span>(\n    rf, X_test, y_test,\n    n_repeats=<span class="nm">10</span>, random_state=<span class="nm">42</span>)\nresult.importances_mean  <span class="cm"># per-feature importance</span>`,
      description: "Model-agnostic feature importance — permutes each feature and measures score drop. More reliable than .feature_importances_ for correlated features. Use on TEST set to avoid overfitting bias.",
      params: "permutation_importance(estimator, X, y, n_repeats=5, random_state=None, scoring=None)",
      notebook: "sklearn/09_feature_engineering.ipynb"
    }
  ]
};


// SEABORN CARDS
window.CARDS_DATA['seaborn'] = [
  {
    "id": "sns_1",
    "title": "sns.relplot()",
    "category": "Relational",
    "difficulty": "beginner",
    "notebook": "seaborn/01_relational_plots.ipynb",
    "snippet": "sns.relplot(\n    data=df, \n    x='total_bill', \n    y='tip', \n    hue='smoker', \n    col='time'\n)",
    "description": "Figure-level function for creating relational plots. It can create either scatter plots or line plots and easily facet across subplots using 'col' or 'row'.",
    "params": "<ul><li><code>data</code>: DataFrame</li><li><code>x, y</code>: Variables for axes</li><li><code>hue, size, style</code>: Semantic mappings</li><li><code>kind</code>: 'scatter' (default) or 'line'</li><li><code>col, row</code>: Facet variables</li></ul>"
  },
  {
    "id": "sns_2",
    "title": "sns.scatterplot()",
    "category": "Relational",
    "difficulty": "beginner",
    "notebook": "seaborn/01_relational_plots.ipynb",
    "snippet": "sns.scatterplot(\n    data=df, \n    x='total_bill', \n    y='tip', \n    hue='size', \n    palette='deep'\n)",
    "description": "Axes-level function to draw a scatter plot. Unlike relplot, it draws onto a single existing matplotlib Axes.",
    "params": "<ul><li><code>ax</code>: Pre-existing axes for the plot</li><li><code>palette</code>: Colors to use for the different levels of the hue variable</li></ul>"
  },
  {
    "id": "sns_3",
    "title": "sns.lineplot()",
    "category": "Relational",
    "difficulty": "intermediate",
    "notebook": "seaborn/01_relational_plots.ipynb",
    "snippet": "sns.lineplot(\n    data=flights, \n    x='year', \n    y='passengers', \n    hue='month'\n)",
    "description": "Draws a line plot with possibility of several semantic groupings. By default, it aggregates over multiple measurements at each x value to plot the mean and 95% confidence interval.",
    "params": "<ul><li><code>errorbar</code>: Name of errorbar method (e.g. 'ci', 'pi', 'se')</li><li><code>estimator</code>: Function to aggregate across multiple observations</li></ul>"
  },
  {
    "id": "sns_4",
    "title": "sns.displot()",
    "category": "Distribution",
    "difficulty": "beginner",
    "notebook": "seaborn/02_distribution_plots.ipynb",
    "snippet": "sns.displot(\n    data=penguins, \n    x='flipper_length_mm', \n    hue='species', \n    kind='kde'\n)",
    "description": "Figure-level function for distribution plots (histograms, KDEs, ECDFs). Similar to relplot, it supports faceting via 'col' and 'row'.",
    "params": "<ul><li><code>kind</code>: 'hist' (default), 'kde', or 'ecdf'</li><li><code>rug</code>: Boolean to add rugplot on margins</li></ul>"
  },
  {
    "id": "sns_5",
    "title": "sns.histplot()",
    "category": "Distribution",
    "difficulty": "beginner",
    "notebook": "seaborn/02_distribution_plots.ipynb",
    "snippet": "sns.histplot(\n    data=penguins, \n    x='body_mass_g', \n    bins=30, \n    kde=True\n)",
    "description": "Axes-level function for plotting univariate or bivariate histograms to show distributions of datasets.",
    "params": "<ul><li><code>bins</code>: Number of bins</li><li><code>kde</code>: If True, compute a kernel density estimate</li><li><code>stat</code>: 'count', 'frequency', 'probability', 'percent', 'density'</li></ul>"
  },
  {
    "id": "sns_6",
    "title": "sns.kdeplot()",
    "category": "Distribution",
    "difficulty": "intermediate",
    "notebook": "seaborn/02_distribution_plots.ipynb",
    "snippet": "sns.kdeplot(\n    data=penguins, \n    x='flipper_length_mm', \n    hue='species', \n    fill=True\n)",
    "description": "Plots univariate or bivariate distributions using kernel density estimation. It creates a smooth curve representing data distribution.",
    "params": "<ul><li><code>fill</code>: If True, fill the area under the KDE curve</li><li><code>bw_adjust</code>: Factor that scales the bandwidth</li></ul>"
  },
  {
    "id": "sns_7",
    "title": "sns.jointplot()",
    "category": "Distribution",
    "difficulty": "intermediate",
    "notebook": "seaborn/02_distribution_plots.ipynb",
    "snippet": "sns.jointplot(\n    data=penguins, \n    x='bill_length_mm', \n    y='bill_depth_mm', \n    kind='hex'\n)",
    "description": "Draws a plot of two variables with bivariate and univariate graphs. Combines a bivariate plot (scatter/hex/kde) with marginal distributions.",
    "params": "<ul><li><code>kind</code>: 'scatter', 'kde', 'hist', 'hex', 'reg', 'resid'</li></ul>"
  },
  {
    "id": "sns_8",
    "title": "sns.pairplot()",
    "category": "Distribution",
    "difficulty": "advanced",
    "notebook": "seaborn/02_distribution_plots.ipynb",
    "snippet": "sns.pairplot(\n    data=penguins, \n    hue='species', \n    corner=True\n)",
    "description": "Plots pairwise relationships in a dataset. Creates a grid of scatterplots for each pair of variables, and a histogram/KDE for each variable on the diagonal.",
    "params": "<ul><li><code>corner</code>: If True, don't add axes to the upper (redundant) triangle</li><li><code>diag_kind</code>: 'auto', 'hist', 'kde'</li></ul>"
  },
  {
    "id": "sns_9",
    "title": "sns.catplot()",
    "category": "Categorical",
    "difficulty": "beginner",
    "notebook": "seaborn/03_categorical_plots.ipynb",
    "snippet": "sns.catplot(\n    data=titanic, \n    x='class', \n    y='survived', \n    hue='sex', \n    kind='bar'\n)",
    "description": "Figure-level interface for drawing categorical plots onto a FacetGrid. Can represent data with points, bars, boxes, violins, etc.",
    "params": "<ul><li><code>kind</code>: 'strip', 'swarm', 'box', 'violin', 'boxen', 'point', 'bar', 'count'</li></ul>"
  },
  {
    "id": "sns_10",
    "title": "sns.boxplot()",
    "category": "Categorical",
    "difficulty": "beginner",
    "notebook": "seaborn/03_categorical_plots.ipynb",
    "snippet": "sns.boxplot(\n    data=tips, \n    x='day', \n    y='total_bill', \n    hue='smoker'\n)",
    "description": "Draws a box plot to show distributions with respect to categories. Shows quartiles, median, and outliers.",
    "params": "<ul><li><code>order, hue_order</code>: Explicitly pass category order</li><li><code>orient</code>: 'v' or 'h' for vertical/horizontal</li></ul>"
  },
  {
    "id": "sns_11",
    "title": "sns.violinplot()",
    "category": "Categorical",
    "difficulty": "intermediate",
    "notebook": "seaborn/03_categorical_plots.ipynb",
    "snippet": "sns.violinplot(\n    data=tips, \n    x='day', \n    y='total_bill', \n    hue='sex', \n    split=True\n)",
    "description": "Combines a boxplot with a kernel density estimation to provide a richer description of the distribution of values.",
    "params": "<ul><li><code>split</code>: If True and hue has 2 levels, draw half of a violin for each level</li><li><code>inner</code>: 'box', 'quartile', 'point', 'stick', None</li></ul>"
  },
  {
    "id": "sns_12",
    "title": "sns.barplot()",
    "category": "Categorical",
    "difficulty": "beginner",
    "notebook": "seaborn/03_categorical_plots.ipynb",
    "snippet": "sns.barplot(\n    data=tips, \n    x='day', \n    y='total_bill', \n    estimator='sum'\n)",
    "description": "Shows point estimates (like mean or sum) and confidence intervals as rectangular bars.",
    "params": "<ul><li><code>estimator</code>: Statistical function to estimate within each categorical bin</li><li><code>errorbar</code>: Method to compute confidence intervals</li></ul>"
  },
  {
    "id": "sns_13",
    "title": "sns.countplot()",
    "category": "Categorical",
    "difficulty": "beginner",
    "notebook": "seaborn/03_categorical_plots.ipynb",
    "snippet": "sns.countplot(\n    data=titanic, \n    x='deck', \n    hue='class'\n)",
    "description": "Shows the counts of observations in each categorical bin using bars. Think of it as a histogram across a categorical, instead of quantitative, variable.",
    "params": "<ul><li>Cannot pass both x and y. Pass one to specify orientation.</li></ul>"
  },
  {
    "id": "sns_14",
    "title": "sns.heatmap()",
    "category": "Matrix",
    "difficulty": "intermediate",
    "notebook": "seaborn/04_matrix_plots.ipynb",
    "snippet": "sns.heatmap(\n    data=flights_pivot, \n    annot=True, \n    fmt='d', \n    cmap='YlGnBu'\n)",
    "description": "Plots rectangular data as a color-encoded matrix. Often used with a pivot table or correlation matrix.",
    "params": "<ul><li><code>annot</code>: If True, write the data value in each cell</li><li><code>fmt</code>: String formatting code (e.g., '.2f')</li><li><code>cmap</code>: Matplotlib colormap name</li></ul>"
  },
  {
    "id": "sns_15",
    "title": "sns.clustermap()",
    "category": "Matrix",
    "difficulty": "advanced",
    "notebook": "seaborn/04_matrix_plots.ipynb",
    "snippet": "sns.clustermap(\n    data=iris_data, \n    cmap='viridis', \n    standard_scale=1\n)",
    "description": "Plots a matrix dataset as a hierarchically-clustered heatmap. It performs hierarchical clustering and sorts the rows/cols to show patterns.",
    "params": "<ul><li><code>standard_scale</code>: 0 (rows) or 1 (cols) to standardize variables</li><li><code>z_score</code>: 0 (rows) or 1 (cols) to compute z-scores</li></ul>"
  },
  {
    "id": "sns_16",
    "title": "sns.lmplot()",
    "category": "Relational",
    "difficulty": "intermediate",
    "notebook": "seaborn/01_relational_plots.ipynb",
    "snippet": "sns.lmplot(\n    data=tips, \n    x='total_bill', \n    y='tip', \n    col='time', \n    hue='smoker'\n)",
    "description": "Figure-level function that combines regplot() and FacetGrid. It plots data and a linear regression model fit across a faceted grid.",
    "params": "<ul><li><code>col, row</code>: Faceting variables</li><li><code>order</code>: Polynomial regression order</li></ul>"
  },
  {
    "id": "sns_17",
    "title": "sns.regplot()",
    "category": "Relational",
    "difficulty": "intermediate",
    "notebook": "seaborn/01_relational_plots.ipynb",
    "snippet": "sns.regplot(\n    data=tips, \n    x='total_bill', \n    y='tip', \n    marker='+'\n)",
    "description": "Axes-level function to plot data and a linear regression model fit. Does not support faceting.",
    "params": "<ul><li><code>logistic</code>: If True, fit a logistic regression model</li><li><code>robust</code>: If True, fit a robust regression model</li></ul>"
  },
  {
    "id": "sns_18",
    "title": "sns.set_theme()",
    "category": "Aesthetics",
    "difficulty": "beginner",
    "notebook": "seaborn/05_aesthetics.ipynb",
    "snippet": "sns.set_theme(\n    style='darkgrid', \n    palette='pastel', \n    font_scale=1.2\n)",
    "description": "Sets multiple theme parameters in one step. This applies across all seaborn (and matplotlib) plots in your session.",
    "params": "<ul><li><code>style</code>: 'darkgrid', 'whitegrid', 'dark', 'white', 'ticks'</li><li><code>context</code>: 'paper', 'notebook', 'talk', 'poster'</li></ul>"
  },
  {
    "id": "sns_19",
    "title": "sns.despine()",
    "category": "Aesthetics",
    "difficulty": "intermediate",
    "notebook": "seaborn/05_aesthetics.ipynb",
    "snippet": "sns.despine(\n    left=True, \n    bottom=False\n)",
    "description": "Removes the top and right spines from plot(s). Can also be used to remove other spines for a cleaner aesthetic.",
    "params": "<ul><li><code>fig</code>: Figure to despine (defaults to current)</li><li><code>top, right, left, bottom</code>: Boolean toggles</li></ul>"
  },
  {
    "id": "sns_20",
    "title": "sns.color_palette()",
    "category": "Aesthetics",
    "difficulty": "beginner",
    "notebook": "seaborn/05_aesthetics.ipynb",
    "snippet": "palette = sns.color_palette('husl', 8)\nsns.set_palette(palette)",
    "description": "Returns a list of colors defining a color palette. Can be passed directly to a plot's palette param or set globally with set_palette.",
    "params": "<ul><li><code>palette</code>: Name of palette (e.g. 'deep', 'muted', 'bright', 'pastel', 'dark', 'colorblind')</li><li><code>n_colors</code>: Number of colors in palette</li></ul>"
  }
];


// DATA STRUCTURES CARDS
window.CARDS_DATA['datastructures'] = [
  {
    "id": "ds_1",
    "title": "List: Creation & Dynamic Array",
    "category": "Built-in Sequences",
    "difficulty": "beginner",
    "notebook": "datastructures/01_built_in_sequences.ipynb",
    "snippet": "my_list = [1, 2, 3]\nmy_list = list(range(10))",
    "description": "Lists in Python are dynamic arrays. They store a contiguous block of memory for object references. Accessing elements by index is O(1). Growing the list occasionally triggers an O(N) memory reallocation.",
    "params": "<ul><li><b>Access:</b> O(1)</li><li><b>Search:</b> O(N)</li></ul>"
  },
  {
    "id": "ds_2",
    "title": "List: append() & extend()",
    "category": "Built-in Sequences",
    "difficulty": "beginner",
    "notebook": "datastructures/01_built_in_sequences.ipynb",
    "snippet": "my_list.append(4)\nmy_list.extend([5, 6])",
    "description": "Adding to the end of a list is very fast. `append()` adds a single item in O(1) amortized time. `extend()` adds K elements in O(K) time.",
    "params": "<ul><li><b>Append:</b> O(1) amortized</li><li><b>Extend:</b> O(K)</li></ul>"
  },
  {
    "id": "ds_3",
    "title": "List: insert()",
    "category": "Built-in Sequences",
    "difficulty": "intermediate",
    "notebook": "datastructures/01_built_in_sequences.ipynb",
    "snippet": "my_list.insert(0, 'front')",
    "description": "Inserting an item at an arbitrary index requires shifting all subsequent elements to the right. Therefore, inserting at the beginning (index 0) is an expensive O(N) operation.",
    "params": "<ul><li><b>Insert (end):</b> O(1)</li><li><b>Insert (start/mid):</b> O(N)</li></ul>"
  },
  {
    "id": "ds_4",
    "title": "List: pop() & remove()",
    "category": "Built-in Sequences",
    "difficulty": "beginner",
    "notebook": "datastructures/01_built_in_sequences.ipynb",
    "snippet": "last_item = my_list.pop()\nfirst_item = my_list.pop(0)\nmy_list.remove('target')",
    "description": "`pop()` removes and returns the last item in O(1). `pop(0)` removes the first item in O(N) (due to shifting). `remove(val)` searches for a value and removes it in O(N).",
    "params": "<ul><li><b>pop():</b> O(1)</li><li><b>pop(i):</b> O(N)</li><li><b>remove(val):</b> O(N)</li></ul>"
  },
  {
    "id": "ds_5",
    "title": "List: Slicing",
    "category": "Built-in Sequences",
    "difficulty": "intermediate",
    "notebook": "datastructures/01_built_in_sequences.ipynb",
    "snippet": "sub_list = my_list[1:4]\nreversed_list = my_list[::-1]",
    "description": "Slicing creates a shallow copy of the sub-array. Creating a slice of length K takes O(K) time and O(K) auxiliary space.",
    "params": "<ul><li><b>Slicing [a:b]:</b> O(K) where K is length of slice</li></ul>"
  },
  {
    "id": "ds_6",
    "title": "List: Comprehensions",
    "category": "Built-in Sequences",
    "difficulty": "intermediate",
    "notebook": "datastructures/01_built_in_sequences.ipynb",
    "snippet": "squares = [x**2 for x in range(10) if x % 2 == 0]",
    "description": "A concise and highly optimized way to construct lists. It operates exactly like a for-loop but is implemented at the C-level, making it slightly faster.",
    "params": "<ul><li><b>Time Complexity:</b> O(N)</li><li><b>Space Complexity:</b> O(N)</li></ul>"
  },
  {
    "id": "ds_7",
    "title": "Tuple: Creation & Immutability",
    "category": "Built-in Sequences",
    "difficulty": "beginner",
    "notebook": "datastructures/01_built_in_sequences.ipynb",
    "snippet": "my_tuple = (1, 2, 3)\npoint = 4, 5",
    "description": "Tuples are immutable fixed-size arrays. Because they are immutable, they are hashable (can be used as dictionary keys) and have slightly less memory overhead than lists.",
    "params": "<ul><li><b>Access:</b> O(1)</li><li><b>Modifications:</b> Not supported</li></ul>"
  },
  {
    "id": "ds_8",
    "title": "Dictionary: Creation & Hash Table",
    "category": "Hash-based Maps",
    "difficulty": "beginner",
    "notebook": "datastructures/02_hash_based_maps.ipynb",
    "snippet": "my_dict = {'a': 1, 'b': 2}\nmy_dict['c'] = 3",
    "description": "Dictionaries are hash maps. They map hashable keys to arbitrary values. Insertion, deletion, and lookup are extremely fast on average.",
    "params": "<ul><li><b>Lookup/Set/Delete:</b> O(1) average, O(N) worst-case (hash collisions)</li></ul>"
  },
  {
    "id": "ds_9",
    "title": "Dictionary: get() & setdefault()",
    "category": "Hash-based Maps",
    "difficulty": "intermediate",
    "notebook": "datastructures/02_hash_based_maps.ipynb",
    "snippet": "val = my_dict.get('d', 0)\nmy_dict.setdefault('list', []).append(1)",
    "description": "`get()` retrieves a key safely without raising KeyError, returning a default if missing. `setdefault()` sets the key to a default if missing, and returns the value.",
    "params": "<ul><li><b>Time Complexity:</b> O(1) average</li></ul>"
  },
  {
    "id": "ds_10",
    "title": "Dictionary: items(), keys(), values()",
    "category": "Hash-based Maps",
    "difficulty": "beginner",
    "notebook": "datastructures/02_hash_based_maps.ipynb",
    "snippet": "for k, v in my_dict.items():\n    print(k, v)",
    "description": "These methods return dynamic view objects. Iterating through a dictionary takes time proportional to its size. Since Python 3.7, insertion order is guaranteed to be preserved.",
    "params": "<ul><li><b>Iteration:</b> O(N)</li></ul>"
  },
  {
    "id": "ds_11",
    "title": "collections.defaultdict",
    "category": "Hash-based Maps",
    "difficulty": "intermediate",
    "notebook": "datastructures/02_hash_based_maps.ipynb",
    "snippet": "from collections import defaultdict\nd = defaultdict(int)\nd['a'] += 1",
    "description": "A subclass of dict that calls a factory function (like int, list) to supply missing values. Avoids needing `get()` or `setdefault()`.",
    "params": "<ul><li><b>Lookup/Set:</b> O(1) average</li></ul>"
  },
  {
    "id": "ds_12",
    "title": "collections.Counter",
    "category": "Hash-based Maps",
    "difficulty": "intermediate",
    "notebook": "datastructures/02_hash_based_maps.ipynb",
    "snippet": "from collections import Counter\ncounts = Counter(['a', 'a', 'b'])\ntop_2 = counts.most_common(2)",
    "description": "A specialized dictionary for counting hashable objects. Very useful in data science for quick frequency mapping.",
    "params": "<ul><li><b>Creation:</b> O(N)</li><li><b>most_common(K):</b> O(N log K)</li></ul>"
  },
  {
    "id": "ds_13",
    "title": "Set: Creation & Hash Set",
    "category": "Hash-based Maps",
    "difficulty": "beginner",
    "notebook": "datastructures/02_hash_based_maps.ipynb",
    "snippet": "my_set = {1, 2, 3}\nunique_items = set([1, 1, 2])",
    "description": "Sets are unordered collections of unique, hashable elements. They are essentially dictionaries without values. Perfect for membership testing and eliminating duplicates.",
    "params": "<ul><li><b>Add/Remove/In:</b> O(1) average</li></ul>"
  },
  {
    "id": "ds_14",
    "title": "Set: Operations",
    "category": "Hash-based Maps",
    "difficulty": "intermediate",
    "notebook": "datastructures/02_hash_based_maps.ipynb",
    "snippet": "union = set_a | set_b\nintersect = set_a & set_b\ndiff = set_a - set_b",
    "description": "Mathematical set operations. Highly optimized in C.",
    "params": "<ul><li><b>Union:</b> O(len(A) + len(B))</li><li><b>Intersection:</b> O(min(len(A), len(B)))</li></ul>"
  },
  {
    "id": "ds_15",
    "title": "Stack (LIFO)",
    "category": "Linear Structures",
    "difficulty": "beginner",
    "notebook": "datastructures/03_linear_structures.ipynb",
    "snippet": "stack = []\nstack.append(1) # Push\nval = stack.pop() # Pop",
    "description": "Last-In-First-Out. In Python, you can just use a standard list as a stack, because appending and popping from the end are both O(1) operations.",
    "params": "<ul><li><b>Push:</b> O(1)</li><li><b>Pop:</b> O(1)</li></ul>"
  },
  {
    "id": "ds_16",
    "title": "collections.deque (Doubly Linked List)",
    "category": "Linear Structures",
    "difficulty": "intermediate",
    "notebook": "datastructures/03_linear_structures.ipynb",
    "snippet": "from collections import deque\nd = deque([1, 2, 3])\nd.append(4)\nd.appendleft(0)",
    "description": "A double-ended queue. Internally implemented as a doubly-linked list of blocks. Perfect for when you need fast appends and pops from BOTH ends.",
    "params": "<ul><li><b>append() / pop():</b> O(1)</li><li><b>appendleft() / popleft():</b> O(1)</li><li><b>Middle Access:</b> O(N)</li></ul>"
  },
  {
    "id": "ds_17",
    "title": "Queue (FIFO)",
    "category": "Linear Structures",
    "difficulty": "beginner",
    "notebook": "datastructures/03_linear_structures.ipynb",
    "snippet": "from collections import deque\nq = deque()\nq.append(1) # Enqueue\nval = q.popleft() # Dequeue",
    "description": "First-In-First-Out. NEVER use a standard list for a queue, because `pop(0)` is O(N). Always use `collections.deque` with `popleft()` for O(1) performance.",
    "params": "<ul><li><b>Enqueue:</b> O(1)</li><li><b>Dequeue:</b> O(1)</li></ul>"
  },
  {
    "id": "ds_18",
    "title": "queue.Queue (Thread-Safe)",
    "category": "Linear Structures",
    "difficulty": "advanced",
    "notebook": "datastructures/03_linear_structures.ipynb",
    "snippet": "from queue import Queue\nq = Queue()\nq.put(1)\nval = q.get()",
    "description": "Provides a thread-safe FIFO implementation with locking mechanics. Use this when communicating between multiple threads, not for standard data structure problems.",
    "params": "<ul><li><b>put() / get():</b> O(1) with lock overhead</li></ul>"
  },
  {
    "id": "ds_19",
    "title": "Min-Heap: heapq.heapify",
    "category": "Heaps / Priority Queues",
    "difficulty": "intermediate",
    "notebook": "datastructures/04_heaps_priority_queues.ipynb",
    "snippet": "import heapq\narr = [3, 1, 4, 1, 5]\nheapq.heapify(arr)",
    "description": "Python's `heapq` module provides a Min-Heap implementation built on top of standard lists. `heapify` transforms a list into a valid min-heap in place.",
    "params": "<ul><li><b>heapify(list):</b> O(N)</li><li><b>Smallest item:</b> `arr[0]` in O(1)</li></ul>"
  },
  {
    "id": "ds_20",
    "title": "Min-Heap: Push & Pop",
    "category": "Heaps / Priority Queues",
    "difficulty": "intermediate",
    "notebook": "datastructures/04_heaps_priority_queues.ipynb",
    "snippet": "heapq.heappush(arr, 2)\nsmallest = heapq.heappop(arr)",
    "description": "`heappush` adds an item while maintaining the heap invariant. `heappop` removes and returns the smallest item. Excellent for Priority Queue patterns.",
    "params": "<ul><li><b>heappush:</b> O(log N)</li><li><b>heappop:</b> O(log N)</li></ul>"
  },
  {
    "id": "ds_21",
    "title": "Max-Heap Workaround",
    "category": "Heaps / Priority Queues",
    "difficulty": "advanced",
    "notebook": "datastructures/04_heaps_priority_queues.ipynb",
    "snippet": "arr = [3, 1, 4]\nmax_heap = [-x for x in arr]\nheapq.heapify(max_heap)\nlargest = -heapq.heappop(max_heap)",
    "description": "Python ONLY has a min-heap natively. To create a max-heap with numbers, you invert the sign of the numbers before pushing, and invert them back when popping.",
    "params": "<ul><li><b>Time Complexity:</b> Identical to min-heap</li></ul>"
  },
  {
    "id": "ds_22",
    "title": "heapq.nlargest / nsmallest",
    "category": "Heaps / Priority Queues",
    "difficulty": "advanced",
    "notebook": "datastructures/04_heaps_priority_queues.ipynb",
    "snippet": "arr = [1, 9, 3, 7, 5]\ntop_3 = heapq.nlargest(3, arr)\nbot_2 = heapq.nsmallest(2, arr)",
    "description": "Finds the N largest/smallest elements in a dataset. More efficient than sorting the entire array when N is much smaller than the array size.",
    "params": "<ul><li><b>nlargest(K, arr):</b> O(N log K)</li><li><b>sorted(arr)[:K]:</b> O(N log N)</li></ul>"
  },
  {
    "id": "ds_23",
    "title": "Linked List Node",
    "category": "Trees and Graphs",
    "difficulty": "intermediate",
    "notebook": "datastructures/05_trees_and_graphs.ipynb",
    "snippet": "class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next",
    "description": "A singly linked list is a collection of nodes where each node contains a value and a pointer to the next node. Allows O(1) insertion/deletion if you have the pointer.",
    "params": "<ul><li><b>Search / Access:</b> O(N)</li><li><b>Insert/Delete (known node):</b> O(1)</li></ul>"
  },
  {
    "id": "ds_24",
    "title": "Binary Tree Node",
    "category": "Trees and Graphs",
    "difficulty": "intermediate",
    "notebook": "datastructures/05_trees_and_graphs.ipynb",
    "snippet": "class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right",
    "description": "A node with at most two children. The foundation for BSTs, Heaps, and Tries. Used heavily in recursive algorithms.",
    "params": "<ul><li><b>Traversal (DFS/BFS):</b> O(N) Time, O(H) Space where H is height</li></ul>"
  },
  {
    "id": "ds_25",
    "title": "Binary Search Tree (BST)",
    "category": "Trees and Graphs",
    "difficulty": "advanced",
    "notebook": "datastructures/05_trees_and_graphs.ipynb",
    "snippet": "# Property: left.val < root.val < right.val\ndef searchBST(root, val):\n    if not root or root.val == val:\n        return root\n    return searchBST(root.left if val < root.val else root.right, val)",
    "description": "A binary tree where the left child is smaller and right child is larger. Allows for fast search, insertion, and deletion.",
    "params": "<ul><li><b>Search/Insert/Delete:</b> O(log N) average, O(N) worst-case (unbalanced)</li></ul>"
  },
  {
    "id": "ds_26",
    "title": "Graph: Adjacency List",
    "category": "Trees and Graphs",
    "difficulty": "intermediate",
    "notebook": "datastructures/05_trees_and_graphs.ipynb",
    "snippet": "graph = {\n    'A': ['B', 'C'],\n    'B': ['A', 'D'],\n    'C': ['A'],\n    'D': ['B']\n}",
    "description": "The most common way to represent a graph in Python is a dictionary where keys are nodes and values are lists (or sets) of neighboring nodes.",
    "params": "<ul><li><b>Space Complexity:</b> O(V + E)</li><li><b>Find Neighbors:</b> O(1) dictionary lookup</li></ul>"
  },
  {
    "id": "ds_27",
    "title": "Graph: Adjacency Matrix",
    "category": "Trees and Graphs",
    "difficulty": "intermediate",
    "notebook": "datastructures/05_trees_and_graphs.ipynb",
    "snippet": "matrix = [\n    [0, 1, 1, 0], # A\n    [1, 0, 0, 1], # B\n    [1, 0, 0, 0], # C\n    [0, 1, 0, 0]  # D\n]",
    "description": "A 2D array of size V x V. `matrix[i][j] = 1` if an edge exists from node i to node j. Better for dense graphs. Usually represented as a 2D list or NumPy array.",
    "params": "<ul><li><b>Space Complexity:</b> O(V\u00b2)</li><li><b>Check Edge:</b> O(1)</li></ul>"
  },
  {
    "id": "ds_28",
    "title": "Depth First Search (DFS)",
    "category": "Trees and Graphs",
    "difficulty": "advanced",
    "notebook": "datastructures/05_trees_and_graphs.ipynb",
    "snippet": "visited = set()\ndef dfs(node):\n    if node not in visited:\n        visited.add(node)\n        for neighbor in graph[node]:\n            dfs(neighbor)",
    "description": "Explores a graph deeply by following a path until it can't go further, then backtracking. Easily implemented using recursion (call stack) or an explicit Stack.",
    "params": "<ul><li><b>Time Complexity:</b> O(V + E)</li><li><b>Space:</b> O(V) for visited set + call stack</li></ul>"
  },
  {
    "id": "ds_29",
    "title": "Breadth First Search (BFS)",
    "category": "Trees and Graphs",
    "difficulty": "advanced",
    "notebook": "datastructures/05_trees_and_graphs.ipynb",
    "snippet": "from collections import deque\nvisited = set([start])\nq = deque([start])\nwhile q:\n    node = q.popleft()\n    for n in graph[node]:\n        if n not in visited:\n            visited.add(n)\n            q.append(n)",
    "description": "Explores a graph level by level. Must use a `collections.deque` (Queue). The standard algorithm for finding the shortest path in an unweighted graph.",
    "params": "<ul><li><b>Time Complexity:</b> O(V + E)</li><li><b>Space:</b> O(V) for queue and visited set</li></ul>"
  },
  {
    "id": "ds_30",
    "title": "Trie (Prefix Tree) Node",
    "category": "Trees and Graphs",
    "difficulty": "advanced",
    "notebook": "datastructures/05_trees_and_graphs.ipynb",
    "snippet": "class TrieNode:\n    def __init__(self):\n        self.children = {} # char -> TrieNode\n        self.is_end = False",
    "description": "A specialized tree used to store associative arrays where keys are usually strings. Excellent for autocomplete, spell checking, and prefix searching.",
    "params": "<ul><li><b>Insert/Search Time:</b> O(L) where L is length of word</li></ul>"
  },
  {
    "id": "ds_31",
    "title": "Disjoint Set (Union Find)",
    "category": "Trees and Graphs",
    "difficulty": "advanced",
    "notebook": "datastructures/05_trees_and_graphs.ipynb",
    "snippet": "parent = {i: i for i in range(n)}\ndef find(i):\n    if parent[i] != i:\n        parent[i] = find(parent[i]) # Path compression\n    return parent[i]",
    "description": "Tracks a set of elements partitioned into a number of disjoint (non-overlapping) subsets. Used primarily in Kruskal's algorithm and for finding cycles.",
    "params": "<ul><li><b>Find / Union:</b> O(\u03b1(N)) \u2248 O(1) with path compression</li></ul>"
  },
  {
    "id": "ds_32",
    "title": "Dijkstra's Algorithm",
    "category": "Trees and Graphs",
    "difficulty": "advanced",
    "notebook": "datastructures/05_trees_and_graphs.ipynb",
    "snippet": "pq = [(0, start)] # (distance, node)\nwhile pq:\n    dist, node = heapq.heappop(pq)\n    # ... check neighbors and push ...",
    "description": "Finds the shortest paths between nodes in a graph with non-negative edge weights. It relies on a Min-Heap (Priority Queue) to always expand the closest node.",
    "params": "<ul><li><b>Time Complexity:</b> O((V + E) log V) using a binary heap</li></ul>"
  },
  {
    "id": "ds_33",
    "title": "String: Immutability",
    "category": "Built-in Sequences",
    "difficulty": "beginner",
    "notebook": "datastructures/01_built_in_sequences.ipynb",
    "snippet": "s = 'hello'\n# s[0] = 'H'  # TypeError!\ns = 'H' + s[1:]",
    "description": "Strings in Python are immutable sequences of Unicode code points. Any operation that modifies a string actually creates a brand new string in memory.",
    "params": "<ul><li><b>String Concatenation (a+b):</b> O(len(a) + len(b))</li></ul>"
  },
  {
    "id": "ds_34",
    "title": "String: join() vs +",
    "category": "Built-in Sequences",
    "difficulty": "intermediate",
    "notebook": "datastructures/01_built_in_sequences.ipynb",
    "snippet": "words = ['a', 'b', 'c']\nsentence = ' '.join(words)",
    "description": "When concatenating many strings, always use `join()` instead of `+` in a loop. `join()` pre-calculates the required memory and allocates it once.",
    "params": "<ul><li><b>join():</b> O(N) total time</li><li><b>+= in a loop:</b> O(N\u00b2) worst-case time (historically)</li></ul>"
  }
];
