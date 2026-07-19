import os
import json

numpy_nbs = [
    "01_array_creation.ipynb",
    "02_array_inspection.ipynb",
    "03_indexing_slicing.ipynb",
    "04_shape_manipulation.ipynb",
    "05_math_arithmetic.ipynb",
    "06_statistical_functions.ipynb",
    "07_sorting_searching.ipynb",
    "08_linalg_random.ipynb"
]

pandas_nbs = [
    "01_object_creation.ipynb",
    "02_inspection_info.ipynb",
    "03_indexing_selection.ipynb",
    "04_cleaning_missing_data.ipynb",
    "05_transformation.ipynb",
    "06_aggregation_groupby.ipynb",
    "07_combining_dataframes.ipynb",
    "08_reshaping.ipynb",
    "09_output_visualization.ipynb"
]

sklearn_nbs = [
    "01_data_loading.ipynb",
    "02_preprocessing.ipynb",
    "03_model_selection.ipynb",
    "04_classification.ipynb",
    "05_regression.ipynb",
    "06_clustering.ipynb",
    "07_dimensionality_reduction.ipynb",
    "08_metrics_evaluation.ipynb",
    "09_feature_engineering.ipynb"
]

seaborn_nbs = [
    "01_relational_plots.ipynb",
    "02_distribution_plots.ipynb",
    "03_categorical_plots.ipynb",
    "04_matrix_plots.ipynb",
    "05_aesthetics.ipynb"
]

def create_notebook(path, lib, title):
    content = {
        "cells": [
            {
                "cell_type": "markdown",
                "metadata": {},
                "source": [
                    f"# {title}\n",
                    f"Welcome to the {lib} syntax exploration notebook. Here you can run code corresponding to the flip cards."
                ]
            },
            {
                "cell_type": "code",
                "execution_count": None,
                "metadata": {},
                "outputs": [],
                "source": [
                    "import numpy as np\n",
                    "import pandas as pd\n",
                    "import matplotlib.pyplot as plt\n",
                    "import seaborn as sns\n",
                    "\n",
                    "print(f'Ready to explore {lib}!')"
                ]
            }
        ],
        "metadata": {
            "kernelspec": {
                "display_name": "Python 3",
                "language": "python",
                "name": "python3"
            },
            "language_info": {
                "codemirror_mode": {"name": "ipython", "version": 3},
                "file_extension": ".py",
                "mimetype": "text/x-python",
                "name": "python",
                "nbconvert_exporter": "python",
                "pygments_lexer": "ipython3",
                "version": "3.10.0"
            }
        },
        "nbformat": 4,
        "nbformat_minor": 4
    }
    
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w") as f:
        json.dump(content, f, indent=2)

base_dir = "/Users/shrutidoshi/.gemini/antigravity/scratch/ds-syntax-cards/notebooks"

for nb in numpy_nbs:
    create_notebook(os.path.join(base_dir, "numpy", nb), "NumPy", nb.replace(".ipynb", "").replace("_", " ").title())

for nb in pandas_nbs:
    create_notebook(os.path.join(base_dir, "pandas", nb), "Pandas", nb.replace(".ipynb", "").replace("_", " ").title())

for nb in sklearn_nbs:
    create_notebook(os.path.join(base_dir, "sklearn", nb), "Scikit-learn", nb.replace(".ipynb", "").replace("_", " ").title())

for nb in seaborn_nbs:
    create_notebook(os.path.join(base_dir, "seaborn", nb), "Seaborn", nb.replace(".ipynb", "").replace("_", " ").title())

print("All notebooks generated successfully.")
