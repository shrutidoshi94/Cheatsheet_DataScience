import json

ds_cards = [
    # Built-in Sequences
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

    # Hash-based Maps
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

    # Linear Structures
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

    # Heaps / Priority Queues
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

    # Trees and Graphs
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
        "params": "<ul><li><b>Space Complexity:</b> O(V²)</li><li><b>Check Edge:</b> O(1)</li></ul>"
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
        "params": "<ul><li><b>Find / Union:</b> O(α(N)) ≈ O(1) with path compression</li></ul>"
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
        "params": "<ul><li><b>join():</b> O(N) total time</li><li><b>+= in a loop:</b> O(N²) worst-case time (historically)</li></ul>"
    }
]

file_path = "/Users/shrutidoshi/.gemini/antigravity/scratch/ds-syntax-cards/js/cards-data.js"

with open(file_path, "a") as f:
    f.write("\n\n// DATA STRUCTURES CARDS\n")
    f.write("window.CARDS_DATA['datastructures'] = ")
    json.dump(ds_cards, f, indent=2)
    f.write(";\n")

print("Successfully appended Data Structures cards to js/cards-data.js")
