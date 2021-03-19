(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{149:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/wcc-example-0db447c402ad732b74567c79ae103ba1.jpg"},150:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/wcc-matplotlib-9d37b46220fe1db6aa79f8d922df2db6.png"},85:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var o=t(3),r=t(7),a=(t(0),t(95)),c={id:"weakly-connected-components",title:"Weakly connected components algorithm (Union find)",sidebar_label:"Weakly connected components (Union find)"},i={unversionedId:"algorithms/components/weakly-connected-components",id:"algorithms/components/weakly-connected-components",isDocsHomePage:!1,title:"Weakly connected components algorithm (Union find)",description:"A weakly connected component is a subgraph that is unreachable from other nodes/vertices of a graph or subgraph. The algorithm was described by A. Galler and Michael J. in 1964 and specific implementations either utilize breadth-first search or depth-first search to find the graph components.",source:"@site/docs/algorithms/components/weakly-connected-components.md",slug:"/algorithms/components/weakly-connected-components",permalink:"/algorithms/components/weakly-connected-components",editUrl:"https://github.com/memgraph/networkx-guide/edit/main/docs/algorithms/components/weakly-connected-components.md",version:"current",sidebar_label:"Weakly connected components (Union find)",sidebar:"networkx_guide",previous:{title:"Girvan-Newman algorithm",permalink:"/algorithms/community-detection/girvan-newman"},next:{title:"Other useful resources",permalink:"/other-resources"}},s=[{value:"Practical Applications",id:"practical-applications",children:[]},{value:"Pseudocode",id:"pseudocode",children:[]},{value:"Usage in NetworkX",id:"usage-in-networkx",children:[{value:"Method input",id:"method-input",children:[]},{value:"Method output",id:"method-output",children:[]},{value:"Example",id:"example",children:[]}]}],l={toc:s};function p(e){var n=e.components,c=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,c,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A weakly connected component is a subgraph that is unreachable from other nodes/vertices of a graph or subgraph. The algorithm was described by A. Galler and Michael J. in 1964 and specific implementations either utilize breadth-first search or depth-first search to find the graph components.\nHow does it work?\nThe Weakly Connected Components algorithm (WCC), also known as Union Find, searches for distinct sets of connected nodes in a graph. All nodes in such a set are reachable from any other node in the same set.\nWhile the Strongly Connected Components algorithm (SCC) requires nodes to be reachable in both directions, WCC only requires nodes to be reachable in one direction. Both algorithms are used for network structure analysis."),Object(a.b)("p",null,Object(a.b)("img",{alt:"WCC-example",src:t(149).default})),Object(a.b)("p",null,"For example, in the graph above, you can see three weakly connected components. Nodes from the subgraph {A, B, C} aren\u2019t connected to any other nodes in the graph and therefore must be a separate component."),Object(a.b)("h2",{id:"practical-applications"},"Practical Applications"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The Weakly Connected Component algorithm is mostly used for graph pre-processing. Many graph algorithms require networks to be fully connected without distinct components. Union find can be used to find and potentially eliminate such components."),Object(a.b)("li",{parentName:"ul"},"WCC can be used for basic community detection use cases where distinct disconnected groups are expected."),Object(a.b)("li",{parentName:"ul"},"Some social networks can utilize weakly connected components for recommendation generating purposes.")),Object(a.b)("h2",{id:"pseudocode"},"Pseudocode"),Object(a.b)("p",null,"Start by labeling all nodes as unvisited. Then, iterate over the nodes in any order. For each node, if it wasn\u2019t visited, run BFS from that node and add all reachable nodes as the same component. Add them to the list of visited nodes as well. If the node was already visited, skip it."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"visited_nodes = []\ncomponents = []\nFOR EACH node n in graph\n    IF n is not in visited_nodes THEN\n        connected_nodes = BFS(v)\n        ADD connected_nodes TO visited_nodes\n        ADD connected_nodes TO component\n    ENDIF\nENDFOR\n")),Object(a.b)("h2",{id:"usage-in-networkx"},"Usage in NetworkX"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"weakly_connected_components(G)\n")),Object(a.b)("h3",{id:"method-input"},"Method input"),Object(a.b)("p",null,"The input parameter of the method, ",Object(a.b)("inlineCode",{parentName:"p"},"G"),", is a directed graph."),Object(a.b)("h3",{id:"method-output"},"Method output"),Object(a.b)("p",null,"The output of the method is a generator of sets. Each set contains the nodes of one weakly connected component."),Object(a.b)("h3",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"import matplotlib.pyplot as plt\nimport networkx as nx\nfrom networkx.algorithms.components import weakly_connected_components\n\nG = nx.path_graph(4, create_using=nx.DiGraph())\nnx.add_path(G, [10, 11, 12])\n\ncommunities = weakly_connected_components(G)\n\nnode_groups = []\nfor com in communities:\n  node_groups.append(list(com))\n\nprint(node_groups)\n\ncolor_map = []\nfor node in G:\n    if node in node_groups[0]:\n        color_map.append('orange')\n    else: \n        color_map.append('red')  \n\nnx.draw(G, node_color=color_map, with_labels=True)\nplt.show()\n")),Object(a.b)("p",null,"The output is:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"[[0, 1, 2, 3], [10, 11, 12]]\n")),Object(a.b)("p",null,"The network has two weakly connected components:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"WCC matplotlib",src:t(150).default})))}p.isMDXComponent=!0},95:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return h}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),p=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return t?r.a.createElement(h,i(i({ref:n},l),{},{components:t})):r.a.createElement(h,i({ref:n},l))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);