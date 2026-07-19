import json

seaborn_cards = [
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
]

file_path = "/Users/shrutidoshi/.gemini/antigravity/scratch/ds-syntax-cards/js/cards-data.js"

with open(file_path, "a") as f:
    f.write("\n\n// SEABORN CARDS\n")
    f.write("window.CARDS_DATA['seaborn'] = ")
    json.dump(seaborn_cards, f, indent=2)
    f.write(";\n")

print("Successfully appended seaborn cards to js/cards-data.js")
