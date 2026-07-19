import json
import os

ds_cards = [
    {
        "id": "ds_master_1",
        "title": "Arrays / Dynamic Arrays",
        "category": "Arrays",
        "difficulty": "beginner",
        "notebook": "datastructures.ipynb#scrollTo=ds_master_1",
        "snippet": "arr = [10, 20, 30, 40, 50]\narr2 = list(range(5))\nimport array\ntyped = array.array('i', [1, 2, 3])  # packed C ints, no pointer overhead\n\nprint('Array:', arr)\nprint('Typed array:', typed)",
        "description": "<strong>ADT:</strong> indexed sequence supporting O(1) positional access. <br><strong>Impl:</strong> contiguous block of fixed-size memory slots; Python's <code>list</code> is a dynamic array — an over-allocated raw array of <em>pointers</em> to objects, resized via geometric growth when capacity is exceeded.",
        "params": """<pre class="diagram">
index:      0     1     2     3     4    (len=5, capacity=8)
         +-----+-----+-----+-----+-----+-----+-----+-----+
buffer:  | ptr | ptr | ptr | ptr | ptr |  .  |  .  |  .  |
         +--|--+--|--+--|--+--|--+--|--+-----+-----+-----+
            v     v     v     v     v
           10    20    30    40    50    <- heap objects

Append past capacity -> allocate new buffer (~1.125x growth),
copy all pointers, free old buffer.  O(n) worst, O(1) amortized.</pre>
<table>
<tr><th>Op</th><th>Method</th><th>Best</th><th>Avg</th><th>Worst</th><th>Space</th></tr>
<tr><td>Access</td><td>a[i]</td><td>O(1)</td><td>O(1)</td><td>O(1)</td><td>O(1)</td></tr>
<tr><td>Search</td><td>x in a</td><td>O(1)</td><td>O(n)</td><td>O(n)</td><td>O(1)</td></tr>
<tr><td>Append</td><td>.append(x)</td><td>O(1)</td><td>O(1)*</td><td>O(n)</td><td>O(1)*</td></tr>
<tr><td>Insert</td><td>.insert(i,x)</td><td>O(1)</td><td>O(n)</td><td>O(n)</td><td>O(1)</td></tr>
<tr><td>Delete</td><td>.pop(i)</td><td>O(1)</td><td>O(n)</td><td>O(n)</td><td>O(1)</td></tr>
<tr><td>Pop end</td><td>.pop()</td><td>O(1)</td><td>O(1)</td><td>O(1)</td><td>O(1)</td></tr>
<tr><td>Slice</td><td>a[i:j]</td><td>O(k)</td><td>O(k)</td><td>O(k)</td><td>O(k)</td></tr>
</table>
<div style="font-size:0.75rem; color:var(--text-secondary); margin-bottom: 0.5rem;">*amortized (geometric resize)</div>
<strong>PITFALLS</strong>
<ul class="pitfalls">
<li><code>a[i:j]=x</code> and <code>del/insert(0,x)</code> shift all elements — O(n), silent perf trap in loops.</li>
<li>Shallow copy: <code>b = a</code> aliases; use <code>a.copy()</code> / <code>a[:]</code> to avoid mutating shared refs.</li>
<li><code>[[0]*n]*m</code> creates m references to <em>the same</em> inner list — classic 2D-array bug.</li>
<li>Over-allocation trades memory for amortized O(1) append; <code>sys.getsizeof</code> > sum of elements.</li>
</ul>"""
    },
    {
        "id": "ds_master_2",
        "title": "Singly & Doubly Linked Lists",
        "category": "Linked Lists",
        "difficulty": "intermediate",
        "notebook": "datastructures.ipynb#scrollTo=ds_master_2",
        "snippet": "class Node:\n    __slots__ = ('val', 'next', 'prev')\n    def __init__(self, val, next=None, prev=None):\n        self.val, self.next, self.prev = val, next, prev\n\nclass DoublyLinkedList:\n    def __init__(self):\n        self.head = self.tail = None\n        self.size = 0\n    \n    def push_front(self, val):\n        n = Node(val, next=self.head)\n        if self.head: self.head.prev = n\n        self.head = n\n        self.tail = self.tail or n\n        self.size += 1\n\n    def print_list(self):\n        curr = self.head\n        while curr:\n            print(curr.val, end=' <-> ')\n            curr = curr.next\n        print('None')\n\ndll = DoublyLinkedList()\ndll.push_front(30)\ndll.push_front(20)\ndll.push_front(10)\ndll.print_list()",
        "description": "<strong>ADT:</strong> ordered sequence with O(1) insert/delete given a node reference. <br><strong>Impl:</strong> non-contiguous heap nodes linked via pointers — no built-in Python type; roll your own or use <code>collections.deque</code> (doubly-linked block list).",
        "params": """<pre class="diagram">
Singly:
head                                       tail
 |                                          |
 v                                          v
[10|next]->[20|next]->[30|next]->[40|None]

Doubly:
head                                       tail
 |                                          |
 v                                          v
None<-[10|n|p]<->[20|n|p]<->[30|n|p]->[40|n|p]->None
      prev<-     <-prev     prev->     prev-></pre>
<table>
<tr><th>Op</th><th>Method</th><th>Best</th><th>Avg</th><th>Worst</th><th>Space</th></tr>
<tr><td>Access(i)</td><td>traverse</td><td>O(1)</td><td>O(n)</td><td>O(n)</td><td>O(1)</td></tr>
<tr><td>Push front</td><td>push_front</td><td>O(1)</td><td>O(1)</td><td>O(1)</td><td>O(1)</td></tr>
<tr><td>Push back</td><td>push_back</td><td>O(1)</td><td>O(1)</td><td>O(1)</td><td>O(1)</td></tr>
<tr><td>Insert after node</td><td>-</td><td>O(1)</td><td>O(1)</td><td>O(1)</td><td>O(1)</td></tr>
<tr><td>Delete (given node)</td><td>-</td><td>O(1)</td><td>O(1)</td><td>O(1)</td><td>O(1)</td></tr>
<tr><td>Search</td><td>-</td><td>O(1)</td><td>O(n)</td><td>O(n)</td><td>O(1)</td></tr>
<tr><td>deque append/pop</td><td>deque.append</td><td>O(1)</td><td>O(1)</td><td>O(1)</td><td>O(1)</td></tr>
</table>
<strong>PITFALLS</strong>
<ul class="pitfalls">
<li>Forgetting to update <strong>both</strong> prev & next pointers on delete/insert corrupts the chain silently.</li>
<li>Losing the only reference to head/tail during traversal leaks the remainder of the list (GC-collected but logically lost).</li>
<li>No O(1) random access — never use a linked list when frequent indexing is required.</li>
<li>Per-node pointer + object overhead (~56+ bytes/node in CPython) >> array's packed layout.</li>
</ul>"""
    },
    {
        "id": "ds_master_3",
        "title": "Stacks & Queues",
        "category": "Linear Structures",
        "difficulty": "beginner",
        "notebook": "datastructures.ipynb#scrollTo=ds_master_3",
        "snippet": "stack = []\nstack.append(1)\nstack.append(2)\nprint('Stack after appends:', stack)\nprint('Popped from stack:', stack.pop())\n\nfrom collections import deque\nqueue = deque()\nqueue.append(1)\nqueue.append(2)\nprint('Queue after appends:', queue)\nprint('Popped from queue:', queue.popleft())",
        "description": "<strong>ADT:</strong> Stack = LIFO; Queue = FIFO — both restrict access to ends. <br><strong>Impl:</strong> Stack via dynamic array (<code>list</code>); Queue via <code>collections.deque</code> (doubly-linked array blocks) — <strong>never</strong> use list as a queue (O(n) pop(0)).",
        "params": """<pre class="diagram">
Stack (LIFO)             Queue (FIFO)
push -> [ 30 ] top       enqueue->[10|20|30]->dequeue
        [ 20 ]                    front ^    ^ rear
        [ 10 ] <- bottom
pop <-  top</pre>
<table>
<tr><th>Op</th><th>Method</th><th>Best</th><th>Avg</th><th>Worst</th><th>Space</th></tr>
<tr><td>Push (stack)</td><td>list.append</td><td>O(1)</td><td>O(1)</td><td>O(n)</td><td>O(1)</td></tr>
<tr><td>Pop (stack)</td><td>list.pop()</td><td>O(1)</td><td>O(1)</td><td>O(1)</td><td>O(1)</td></tr>
<tr><td>Peek</td><td>list[-1]</td><td>O(1)</td><td>O(1)</td><td>O(1)</td><td>O(1)</td></tr>
<tr><td>Enqueue</td><td>deque.append</td><td>O(1)</td><td>O(1)</td><td>O(1)</td><td>O(1)</td></tr>
<tr><td>Dequeue</td><td>deque.popleft</td><td>O(1)</td><td>O(1)</td><td>O(1)</td><td>O(1)</td></tr>
<tr><td>list.pop(0)</td><td>list.pop(0)</td><td>O(n)</td><td>O(n)</td><td>O(n)</td><td>O(1)</td></tr>
</table>
<strong>PITFALLS</strong>
<ul class="pitfalls">
<li><code>list.pop(0)</code> / <code>list.insert(0,x)</code> for a queue is O(n) — silently degrades to quadratic in loops.</li>
<li>Unbounded recursion mimics an implicit call stack — can blow Python's recursion limit (~1000) where an explicit stack wouldn't.</li>
<li>Stack overflow (deep recursion) vs. queue starvation (priority queues) are distinct failure modes — don't conflate.</li>
<li><code>deque(maxlen=n)</code> silently discards elements from the opposite end when full — a sneaky data-loss trap.</li>
</ul>"""
    },
    {
        "id": "ds_master_4",
        "title": "Hash Tables (dict / set)",
        "category": "Hash Maps",
        "difficulty": "intermediate",
        "notebook": "datastructures.ipynb#scrollTo=ds_master_4",
        "snippet": "d = {\"cat\": 5, \"dog\": 2}\nd[\"fox\"] = 9\ns = {1, 2, 3}\n\nfrom collections import defaultdict, Counter\ndd = defaultdict(list)\ndd['animals'].append('cat')\n\ncnt = Counter(\"mississippi\")\n\nprint('Dict:', d)\nprint('Set:', s)\nprint('DefaultDict:', dd)\nprint('Counter:', cnt)",
        "description": "<strong>ADT:</strong> associative array mapping keys to values with expected O(1) access. <br><strong>Impl:</strong> array of buckets indexed by <code>hash(key) % capacity</code>; CPython dict uses open addressing + a compact dense array for insertion-ordered storage since 3.7.",
        "params": """<pre class="diagram">
hash("cat")=17 -> slot 17 % 8 = 1
     slot:  0      1      2      3    ...
   bucket: [ - ] [cat:5] [ - ] [dog:2] ...
Collision (probing): slot occupied -> perturb & probe next slot
                     (open addressing, not chaining, in CPython)</pre>
<table>
<tr><th>Op</th><th>Method</th><th>Best</th><th>Avg</th><th>Worst</th><th>Space</th></tr>
<tr><td>Insert</td><td>d[k]=v</td><td>O(1)</td><td>O(1)</td><td>O(n)</td><td>O(1)</td></tr>
<tr><td>Lookup</td><td>d[k] / k in d</td><td>O(1)</td><td>O(1)</td><td>O(n)</td><td>O(1)</td></tr>
<tr><td>Delete</td><td>del d[k]</td><td>O(1)</td><td>O(1)</td><td>O(n)</td><td>O(1)</td></tr>
<tr><td>Iterate</td><td>for k in d</td><td>O(n)</td><td>O(n)</td><td>O(n)</td><td>O(1)</td></tr>
</table>
<strong>PITFALLS</strong>
<ul class="pitfalls">
<li>Mutable keys (lists) are unhashable by design — mutating an object used as a key after insertion corrupts lookups.</li>
<li>Worst case O(n) under pathological/adversarial hash collisions (mitigated by PYTHONHASHSEED randomization).</li>
<li>Resizing (rehashing all keys) triggers on load factor threshold — occasional O(n) latency spikes.</li>
<li>Dict preserves insertion order (3.7+) but this is <em>not</em> the same guarantee as a sorted structure — don't rely on it for ordering logic.</li>
</ul>"""
    },
    {
        "id": "ds_master_5",
        "title": "Binary Search Trees & AVL Trees",
        "category": "Trees",
        "difficulty": "advanced",
        "notebook": "datastructures.ipynb#scrollTo=ds_master_5",
        "snippet": "class BSTNode:\n    __slots__ = ('key', 'left', 'right', 'height')\n    def __init__(self, key):\n        self.key, self.left, self.right, self.height = key, None, None, 1\n\ndef insert(root, key):\n    if not root: return BSTNode(key)\n    if key < root.key: \n        root.left = insert(root.left, key)\n    elif key > root.key: \n        root.right = insert(root.right, key)\n    return root\n\ndef inorder(root):\n    if root:\n        inorder(root.left)\n        print(root.key, end=' ')\n        inorder(root.right)\n\nroot = None\nfor k in [50, 30, 70, 20, 40]:\n    root = insert(root, k)\n\nprint('Inorder traversal:')\ninorder(root)\nprint()",
        "description": "<strong>ADT:</strong> ordered hierarchical set/map maintaining left < node < right invariant. <br><strong>Impl:</strong> linked nodes with left/right pointers; AVL adds a self-balancing invariant (|height(L)-height(R)| ≤ 1) via rotations, bounding height to O(log n).",
        "params": """<pre class="diagram">
       BST                   AVL after rotation (LL case)
       (50)                         (30)
      /    \                       /    \
   (30)    (70)     -->         (20)    (50)
   /  \                            \       /  \
(20) (40)                          (40)  (70)
 /
(10)   <- unbalanced! height=4       balanced, height=2
       left-heavy, O(n) worst</pre>
<table>
<tr><th>Op</th><th>Struct</th><th>Best</th><th>Avg</th><th>Worst</th><th>Space</th></tr>
<tr><td>Search</td><td>BST</td><td>O(1)</td><td>O(log n)</td><td>O(n)</td><td>O(1)</td></tr>
<tr><td>Insert</td><td>BST</td><td>O(1)</td><td>O(log n)</td><td>O(n)</td><td>O(1)</td></tr>
<tr><td>Delete</td><td>BST</td><td>O(1)</td><td>O(log n)</td><td>O(n)</td><td>O(1)</td></tr>
<tr><td>Search</td><td>AVL</td><td>O(1)</td><td>O(log n)</td><td>O(log n)</td><td>O(1)</td></tr>
<tr><td>Insert</td><td>AVL</td><td>O(log n)</td><td>O(log n)</td><td>O(log n)</td><td>O(1)</td></tr>
<tr><td>Delete</td><td>AVL</td><td>O(log n)</td><td>O(log n)</td><td>O(log n)</td><td>O(1)</td></tr>
<tr><td>In-order traversal</td><td>both</td><td>O(n)</td><td>O(n)</td><td>O(n)</td><td>O(h)</td></tr>
</table>
<strong>PITFALLS</strong>
<ul class="pitfalls">
<li>Inserting sorted/near-sorted data into a plain BST degenerates it into a linked list — O(n) ops, defeats the point.</li>
<li>Deletion with two children requires the in-order successor/predecessor swap — easy to mishandle subtree reattachment.</li>
<li>AVL rebalancing (4 rotation cases: LL/RR/LR/RL) is easy to get subtly wrong — always update heights bottom-up first.</li>
<li>Recursive implementations risk stack overflow on very deep/degenerate trees; consider iterative or increase recursion limit.</li>
</ul>"""
    },
    {
        "id": "ds_master_6",
        "title": "Heaps / Priority Queues",
        "category": "Priority Queues",
        "difficulty": "advanced",
        "notebook": "datastructures.ipynb#scrollTo=ds_master_6",
        "snippet": "import heapq\nh = [5, 8, 7, 20, 15]\nheapq.heapify(h)                     # O(n) in-place\nprint('Min-heap:', h)\n\nheapq.heappush(h, 3)\nsmallest = heapq.heappop(h)\nprint('Smallest element:', smallest)\n\n# Max-heap emulation\nneg_max_heap = [-x for x in [5, 8, 7, 20, 15]]\nheapq.heapify(neg_max_heap)\nlargest = -heapq.heappop(neg_max_heap)\nprint('Largest element:', largest)",
        "description": "<strong>ADT:</strong> collection supporting O(log n) insert and O(log n) extract-min/max with O(1) peek. <br><strong>Impl:</strong> complete binary tree stored implicitly in a flat array — <code>heapq</code> is a binary min-heap over a plain Python list.",
        "params": """<pre class="diagram">
Min-heap tree:            Array repr (0-indexed):
     (5)                      idx:  0  1  2  3  4
    /   \                     val:  5  8  7 20 15
  (8)   (7)
  / \     \                   child(i) = 2i+1, 2i+2
(20)(15)                      parent(i) = (i-1)//2</pre>
<table>
<tr><th>Op</th><th>Method</th><th>Best</th><th>Avg</th><th>Worst</th><th>Space</th></tr>
<tr><td>Peek min</td><td>h[0]</td><td>O(1)</td><td>O(1)</td><td>O(1)</td><td>O(1)</td></tr>
<tr><td>Push</td><td>heappush</td><td>O(1)</td><td>O(log n)</td><td>O(log n)</td><td>O(1)</td></tr>
<tr><td>Pop min</td><td>heappop</td><td>O(log n)</td><td>O(log n)</td><td>O(log n)</td><td>O(1)</td></tr>
<tr><td>Build heap</td><td>heapify</td><td>O(n)</td><td>O(n)</td><td>O(n)</td><td>O(1)</td></tr>
<tr><td>Search arbitrary</td><td>-</td><td>O(1)</td><td>O(n)</td><td>O(n)</td><td>O(1)</td></tr>
</table>
<strong>PITFALLS</strong>
<ul class="pitfalls">
<li>Python's <code>heapq</code> is min-heap only — negate values or wrap in a comparator class for max-heap behavior.</li>
<li>Tuple comparison for ties falls through to comparing the 2nd element (payload) — can crash if payloads are incomparable (e.g., dicts); add a unique tiebreaker index.</li>
<li>A heap is <em>not</em> fully sorted — only the root is guaranteed min; don't iterate the array expecting sorted order.</li>
<li>Decreasing a key in-place (needed for Dijkstra) isn't natively supported — requires lazy deletion or an indexed heap.</li>
</ul>"""
    },
    {
        "id": "ds_master_7",
        "title": "Graphs (Adjacency List & Matrix)",
        "category": "Graphs",
        "difficulty": "advanced",
        "notebook": "datastructures.ipynb#scrollTo=ds_master_7",
        "snippet": "from collections import defaultdict\n\n# Adjacency List\nadj_list = defaultdict(list)\nadj_list[\"A\"].extend([\"B\", \"C\"])\nadj_list[\"B\"].append(\"A\")\nprint('Adjacency List:', dict(adj_list))\n\n# Adjacency Matrix\nn = 3\nadj_matrix = [[0]*n for _ in range(n)]\nadj_matrix[0][1] = adj_matrix[1][0] = 1   # edge A-B\nprint('Adjacency Matrix:')\nfor row in adj_matrix:\n    print(row)",
        "description": "<strong>ADT:</strong> set of vertices V and edges E modeling pairwise relationships. <br><strong>Impl:</strong> Adjacency List = dict/array of neighbor lists (sparse-friendly); Adjacency Matrix = V×V grid of edge weights/flags (dense-friendly, O(1) edge lookup).",
        "params": """<pre class="diagram">
Graph: A-B, A-C, B-C      Adjacency List      Adjacency Matrix
                               A: [B, C]           A  B  C
   (A)---(B)                   B: [A, C]        A [ 0, 1, 1 ]
     \   /                     C: [A, B]        B [ 1, 0, 1 ]
      (C)                                       C [ 1, 1, 0 ]</pre>
<table>
<tr><th>Op</th><th>List</th><th>Matrix</th></tr>
<tr><td>Add vertex</td><td>O(1)</td><td>O(V²)</td></tr>
<tr><td>Add edge</td><td>O(1)</td><td>O(1)</td></tr>
<tr><td>Remove edge</td><td>O(deg)</td><td>O(1)</td></tr>
<tr><td>Edge query (u,v)?</td><td>O(deg)</td><td>O(1)</td></tr>
<tr><td>Iterate neighbors</td><td>O(deg)</td><td>O(V)</td></tr>
<tr><td>Space</td><td>O(V+E)</td><td>O(V²)</td></tr>
<tr><td>BFS / DFS</td><td>O(V+E)</td><td>O(V²)</td></tr>
</table>
<div style="font-size:0.75rem; color:var(--text-secondary); margin-bottom: 0.5rem;">(V=VERTICES, E=EDGES)</div>
<strong>PITFALLS</strong>
<ul class="pitfalls">
<li>Adjacency matrix wastes O(V²) memory on sparse graphs — infeasible past ~10⁴ vertices; prefer list.</li>
<li>Undirected graphs need edges added <em>both</em> directions — a common off-by-one/one-way-edge bug.</li>
<li>Forgetting a <code>visited</code> set in DFS/BFS on a cyclic graph causes infinite loops/stack overflow.</li>
<li>Dense weighted graphs (Floyd-Warshall) favor matrix; sparse shortest-path (Dijkstra) favors list + heap — pick per access pattern, not habit.</li>
</ul>"""
    }
]

# Create the master notebook structure
notebook = {
    "cells": [
        {
            "cell_type": "markdown",
            "id": "ds_title",
            "metadata": {"id": "ds_title"},
            "source": [
                "# Data Structures Master Notebook\n",
                "Run the code blocks below to experiment with the various data structure implementations in Python."
            ]
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
    "nbformat_minor": 5
}

# Append each structure as a markdown cell followed by a code cell
for card in ds_cards:
    # Adding markdown cell with the specific ID
    md_cell = {
        "cell_type": "markdown",
        "id": card["id"],
        "metadata": {"id": card["id"]},
        "source": [
            f"## {card['title']}\n"
        ]
    }
    
    # Adding code cell
    code_source = [line + "\\n" for line in card["snippet"].split("\\n")]
    if code_source:
        code_source[-1] = code_source[-1].rstrip("\\n")
        
    code_cell = {
        "cell_type": "code",
        "execution_count": None,
        "id": card["id"] + "_code",
        "metadata": {"id": card["id"] + "_code"},
        "outputs": [],
        "source": code_source
    }
    
    notebook["cells"].append(md_cell)
    notebook["cells"].append(code_cell)

# Write master notebook
nb_path = "/Users/shrutidoshi/.gemini/antigravity/scratch/ds-syntax-cards/notebooks/datastructures.ipynb"
with open(nb_path, "w") as f:
    json.dump(notebook, f, indent=2)

print(f"Successfully generated {nb_path}")

# Update cards-data.js to point to the new notebook fragment
cards_data_path = "/Users/shrutidoshi/.gemini/antigravity/scratch/ds-syntax-cards/js/cards-data.js"
with open(cards_data_path, "r") as f:
    content = f.read()

split_token = "// DATA STRUCTURES CARDS"
if split_token in content:
    content = content.split(split_token)[0]

with open(cards_data_path, "w") as f:
    f.write(content)
    f.write("\n" + split_token + "\n")
    f.write("window.CARDS_DATA['datastructures'] = ")
    json.dump(ds_cards, f, indent=2)
    f.write(";\n")

print("Successfully replaced Data Structures cards in js/cards-data.js")
