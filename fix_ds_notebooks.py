import json
import os

ds_cards = [
    {
        "id": "ds_master_1",
        "title": "Arrays / Dynamic Arrays",
        "notebook": "datastructures/01_arrays.ipynb",
        "snippet": "arr = [10, 20, 30, 40, 50]\narr2 = list(range(5))\nimport array\ntyped = array.array('i', [1, 2, 3])  # packed C ints, no pointer overhead\n\nprint('Array:', arr)\nprint('Typed array:', typed)"
    },
    {
        "id": "ds_master_2",
        "title": "Singly & Doubly Linked Lists",
        "notebook": "datastructures/02_linked_lists.ipynb",
        "snippet": "class Node:\n    __slots__ = ('val', 'next', 'prev')\n    def __init__(self, val, next=None, prev=None):\n        self.val, self.next, self.prev = val, next, prev\n\nclass DoublyLinkedList:\n    def __init__(self):\n        self.head = self.tail = None\n        self.size = 0\n    \n    def push_front(self, val):\n        n = Node(val, next=self.head)\n        if self.head: self.head.prev = n\n        self.head = n\n        self.tail = self.tail or n\n        self.size += 1\n\n    def print_list(self):\n        curr = self.head\n        while curr:\n            print(curr.val, end=' <-> ')\n            curr = curr.next\n        print('None')\n\ndll = DoublyLinkedList()\ndll.push_front(30)\ndll.push_front(20)\ndll.push_front(10)\ndll.print_list()"
    },
    {
        "id": "ds_master_3",
        "title": "Stacks & Queues",
        "notebook": "datastructures/03_stacks_queues.ipynb",
        "snippet": "stack = []\nstack.append(1)\nstack.append(2)\nprint('Stack after appends:', stack)\nprint('Popped from stack:', stack.pop())\n\nfrom collections import deque\nqueue = deque()\nqueue.append(1)\nqueue.append(2)\nprint('Queue after appends:', queue)\nprint('Popped from queue:', queue.popleft())"
    },
    {
        "id": "ds_master_4",
        "title": "Hash Tables (dict / set)",
        "notebook": "datastructures/04_hash_tables.ipynb",
        "snippet": "d = {\"cat\": 5, \"dog\": 2}\nd[\"fox\"] = 9\ns = {1, 2, 3}\n\nfrom collections import defaultdict, Counter\ndd = defaultdict(list)\ndd['animals'].append('cat')\n\ncnt = Counter(\"mississippi\")\n\nprint('Dict:', d)\nprint('Set:', s)\nprint('DefaultDict:', dd)\nprint('Counter:', cnt)"
    },
    {
        "id": "ds_master_5",
        "title": "Binary Search Trees & AVL Trees",
        "notebook": "datastructures/05_bst_avl.ipynb",
        "snippet": "class BSTNode:\n    __slots__ = ('key', 'left', 'right', 'height')\n    def __init__(self, key):\n        self.key, self.left, self.right, self.height = key, None, None, 1\n\ndef insert(root, key):\n    if not root: return BSTNode(key)\n    if key < root.key: \n        root.left = insert(root.left, key)\n    elif key > root.key: \n        root.right = insert(root.right, key)\n    return root\n\ndef inorder(root):\n    if root:\n        inorder(root.left)\n        print(root.key, end=' ')\n        inorder(root.right)\n\nroot = None\nfor k in [50, 30, 70, 20, 40]:\n    root = insert(root, k)\n\nprint('Inorder traversal:')\ninorder(root)\nprint()"
    },
    {
        "id": "ds_master_6",
        "title": "Heaps / Priority Queues",
        "notebook": "datastructures/06_heaps.ipynb",
        "snippet": "import heapq\nh = [5, 8, 7, 20, 15]\nheapq.heapify(h)                     # O(n) in-place\nprint('Min-heap:', h)\n\nheapq.heappush(h, 3)\nsmallest = heapq.heappop(h)\nprint('Smallest element:', smallest)\n\n# Max-heap emulation\nneg_max_heap = [-x for x in [5, 8, 7, 20, 15]]\nheapq.heapify(neg_max_heap)\nlargest = -heapq.heappop(neg_max_heap)\nprint('Largest element:', largest)"
    },
    {
        "id": "ds_master_7",
        "title": "Graphs (Adjacency List & Matrix)",
        "notebook": "datastructures/07_graphs.ipynb",
        "snippet": "from collections import defaultdict\n\n# Adjacency List\nadj_list = defaultdict(list)\nadj_list[\"A\"].extend([\"B\", \"C\"])\nadj_list[\"B\"].append(\"A\")\nprint('Adjacency List:', dict(adj_list))\n\n# Adjacency Matrix\nn = 3\nadj_matrix = [[0]*n for _ in range(n)]\nadj_matrix[0][1] = adj_matrix[1][0] = 1   # edge A-B\nprint('Adjacency Matrix:')\nfor row in adj_matrix:\n    print(row)"
    }
]

def create_notebook(path, title, snippet):
    content = {
        "cells": [
            {
                "cell_type": "markdown",
                "metadata": {},
                "source": [
                    f"# {title}\n",
                    "Run the code below to test the Data Structure syntax from the card!"
                ]
            },
            {
                "cell_type": "code",
                "execution_count": None,
                "metadata": {},
                "outputs": [],
                "source": [line + "\\n" for line in snippet.split("\\n")]
            }
        ],
        "metadata": {
            "kernelspec": {
                "display_name": "Python 3",
                "language": "python",
                "name": "python3"
            }
        },
        "nbformat": 4,
        "nbformat_minor": 4
    }
    
    # fix the last newline
    if content["cells"][1]["source"]:
        content["cells"][1]["source"][-1] = content["cells"][1]["source"][-1].rstrip("\\n")

    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w") as f:
        json.dump(content, f, indent=2)

for card in ds_cards:
    nb_path = os.path.join("/Users/shrutidoshi/.gemini/antigravity/scratch/ds-syntax-cards/notebooks", card["notebook"])
    create_notebook(nb_path, card["title"], card["snippet"])
    print(f"Updated {nb_path}")
