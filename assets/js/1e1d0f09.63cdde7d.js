"use strict";(self.webpackChunknetworkx_guide=self.webpackChunknetworkx_guide||[]).push([[968],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return p}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var h=a.createContext({}),l=function(e){var t=a.useContext(h),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(h.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,h=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),p=n,m=u["".concat(h,".").concat(p)]||u[p]||d[p]||o;return r?a.createElement(m,i(i({ref:t},c),{},{components:r})):a.createElement(m,i({ref:t},c))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var h in t)hasOwnProperty.call(t,h)&&(s[h]=t[h]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5832:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return h},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],s={id:"a-star-search",title:"A* search algorithm",sidebar_label:"A* search"},h=void 0,l={unversionedId:"algorithms/shortest-path/a-star-search",id:"algorithms/shortest-path/a-star-search",isDocsHomePage:!1,title:"A* search algorithm",description:"A\\* algorithm is a graph traversal and path search algorithm often used in many fields of computer science. Starting from the starting node, it aims to find the path to the target node having the smallest cost.",source:"@site/docs/algorithms/shortest-path/a-star-search.md",sourceDirName:"algorithms/shortest-path",slug:"/algorithms/shortest-path/a-star-search",permalink:"/algorithms/shortest-path/a-star-search",editUrl:"https://github.com/memgraph/networkx-guide/edit/main/docs/algorithms/shortest-path/a-star-search.md",tags:[],version:"current",frontMatter:{id:"a-star-search",title:"A* search algorithm",sidebar_label:"A* search"},sidebar:"networkx_guide",previous:{title:"Dijkstra",permalink:"/algorithms/shortest-path/dijkstra"},next:{title:"Floyd-Warshall",permalink:"/algorithms/shortest-path/floyd-warshall"}},c=[{value:"How does it work?",id:"how-does-it-work",children:[]},{value:"The difference from other shortest path algorithms",id:"the-difference-from-other-shortest-path-algorithms",children:[]},{value:"Pseudocode",id:"pseudocode",children:[]},{value:"Usage in NetworkX",id:"usage-in-networkx",children:[{value:"Method input",id:"method-input",children:[]},{value:"Method output",id:"method-output",children:[]},{value:"Example",id:"example",children:[]}]}],d={toc:c};function u(e){var t=e.components,s=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A","*"," algorithm is a graph traversal and path search algorithm often used in many fields of computer science. Starting from the starting node, it aims to find the path to the target node having the smallest cost."),(0,o.kt)("p",null,"A","*"," search algorithm was made as a part of the Shakey project. The goal of the project was to build a mobile robot that could plan its own action. It yielded in the making of Shakey the Robot, the first general-purpose robot made in 1966. A* search algorithm was developed to help Shakey solve the pathfinding problems so it could move around."),(0,o.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,o.kt)("p",null,"A* search algorithm combines information from Dijkstra\u2019s algorithm and the Greedy Best-First-Search algorithm. Dijkstra\u2019s algorithm favours vertices that are closer to the starting point, while the Greedy Best-First-Search algorithm favours vertices that are closer to the goal. "),(0,o.kt)("p",null,"A* search algorithm uses heuristics to determine the path it will take. The heuristic function provides an estimate of the minimum cost between the current vertex and the target vertex. The algorithm will combine the actual cost from the start vertex with the estimated cost to the target vertex. It will use the result to select the next vertex to evaluate."),(0,o.kt)("h2",{id:"the-difference-from-other-shortest-path-algorithms"},"The difference from other shortest path algorithms"),(0,o.kt)("p",null,"The difference from other shortest path algorithms\nUnlike other traversal techniques, A","*"," search algorithm has \u201cbrains\u201d. It is a really smart algorithm that uses heuristic methods to guide itself. A","*"," search algorithm is more efficient as its use of heuristics allows the algorithm to make a better choice about what path to take next. "),(0,o.kt)("p",null,"While Dijkstra\u2019s algorithm will always find the shortest path between the starting vertex and every other vertex in the graph, A","*"," search algorithm will find the shortest path between the starting vertex and target vertex.  In a graph with a small number of nodes, Dijkstra\u2019s algorithm will suffice. However, in a real-life situation, we are dealing with the problem of an enormous number of combinations. For that, we need to use a \u201cguided\u201d algorithm that can decide the optimal route quickly and accurately. A","*"," search algorithm only performs steps if it seems promising and reasonable, unlike other shortest path algorithms. It runs toward the goal and doesn\u2019t consider any non-optimal steps if it doesn\u2019t have to consider them. "),(0,o.kt)("p",null,"A","*"," search algorithm is very useful for artificially intelligent systems such as machine learning and game development where characters navigate complex terrains and obstacles to reach players."),(0,o.kt)("h2",{id:"pseudocode"},"Pseudocode"),(0,o.kt)("p",null,"Before starting with the pseudocode, we need to explain the node structure. Each node has three attributes f, g, and h. Those attributes are parameters of the following equation:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"f(n) = g(n) + h(n)")),(0,o.kt)("p",null,"Where: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"f is cost of the transversal"),(0,o.kt)("li",{parentName:"ul"},"g is the actual cost of transversal from the starting node"),(0,o.kt)("li",{parentName:"ul"},"h is the estimate cost of transversal to the target node ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"INIT LIST openList\nINIT LIST closedList\nstartNode.f = 0\nADD startNode TO openList\nWHILE openList is not empty\n    currentNode = node with the least f value\n    REMOVE currentNode FROM penList\n    ADD currentNode TO closedList\n    IF currentNode = goal THEN\n        FINISHED\n    ENDIF\n    children = list of nodes adjacent to currentNode\n \n    FOR EACH child in children\n        IF child is in closedList\n            CONTINUE\n        ENDIF\n        child.g = currentNode.g + distance between child and current\n        child.h = distance from child to target\n        child.f = child.g + child.h\n        IF child.position is in the openList's nodes positions\n            IF the child.g is higher than the openList node's g\n                CONTINUE\n        ENDIF\n          ENDIF\n        ADD the child TO the openList\n    ENDFOR\nENDWHILE\n")),(0,o.kt)("h2",{id:"usage-in-networkx"},"Usage in NetworkX"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"astar_path(G, source, target, heuristic=None, weight='weight')")),(0,o.kt)("h3",{id:"method-input"},"Method input"),(0,o.kt)("p",null,"The first input parameter of the method, G, is a NetworkX graph.\nThe second parameter, source, is the source node of the shortest path.\nThe third parameter, target, is the target node of the shortest path.\nThe fourth parameter, heuristic, is a function to evaluate the estimate of the distance from the a node to the target. The function takes two node arguments and must return a number.\nThe fifth parameter, weight, represents the edge attribute that should be used as the edge weight. If it\u2019s not specified, the weight of all edges will be 1. "),(0,o.kt)("h3",{id:"method-output"},"Method output"),(0,o.kt)("p",null,"The output of the method is a list of nodes."),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"Using A","*"," search algorithm in Python allows us to use custom methods and function as heuristics. In the following example, we designed the distance heuristic which calculates geometrical distances between the points. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import networkx as nx\nimport matplotlib.pyplot as plt\n\ndef dist(a, b):\n    (x1, y1) = a\n    (x2, y2) = b\n    return ((x1 - x2) ** 2 + (y1 - y2) ** 2) ** 0.5\n\nG = nx.grid_graph(dim=[3, 3])  # nodes are two-tuples (x,y)\nnx.set_edge_attributes(G, {e: e[1][0] * 2 for e in G.edges()}, "cost")\npath = nx.astar_path(G, (0, 0), (2, 2), heuristic=dist, weight="cost")\nlength = nx.astar_path_length(G, (0, 0), (2, 2), heuristic=dist, weight="cost")\nprint(\u201cPath: \u201d + path)\nprint(\u201cPath length: \u201d + length)\n\npos = nx.spring_layout(G)\nnx.draw(G, pos, with_labels = True, node_color="#f86e00")\nedge_labels = nx.get_edge_attributes(G, "cost")\nnx.draw_networkx_edge_labels(G, pos, edge_labels=edge_labels)\nplt.show()\n')),(0,o.kt)("p",null,"The output is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Path: [(0, 0), (0, 1), (0, 2), (1, 2), (2, 2)]\nPath length: 6\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Astar matplotlib",src:r(3977).Z})),(0,o.kt)("p",null,"The first output represents the shortest path from point (0,0) to point (2,2). The second output is the length of the shortest path."))}u.isMDXComponent=!0},3977:function(e,t,r){t.Z=r.p+"assets/images/astar-matplotlib-f592903db52ed6923d4078c76f28f182.png"}}]);