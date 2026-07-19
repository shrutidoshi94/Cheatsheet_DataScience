# Cheatsheet_DataScience

A reference website designed for active learning. It contains interactive flashcards covering 95% of the day-to-day APIs in NumPy, Pandas, Scikit-learn, and Seaborn, with links to runnable Jupyter Notebooks in Google Colab.

## Structure
- `index.html`: Landing page.
- `numpy.html`, `pandas.html`, `sklearn.html`, `seaborn.html`: Flashcard pages for each library.
- `css/style.css`: Design system.
- `js/cards-data.js`: The dataset containing 146 cards.
- `js/main.js`: Interaction logic (flip animation, filtering, search, progress tracking).
- `notebooks/`: 31 Jupyter Notebooks corresponding to the 31 categories covered by the flashcards.

## Hosting on GitHub Pages
This project is set up to be hosted on GitHub Pages so the Colab Notebooks can be accessed.

To enable GitHub Pages:
- Go to your repository on GitHub.
- Click on **Settings** > **Pages** (under Code and automation).
- Under **Build and deployment**, set the Source to **Deploy from a branch**.
- Select the `main` branch and `/ (root)` folder, then click **Save**.
- Your site will be published at `https://shrutidoshi94.github.io/Cheatsheet_DataScience/`.

## Running Locally
You can test the website locally using any local web server:
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.
