(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var a=n(3),r=n(7),i=(n(0),n(94)),o={id:"pagerank",title:"PageRank algorithm",sidebar_label:"PageRank"},l={unversionedId:"algorithms/link-analysis/pagerank",id:"algorithms/link-analysis/pagerank",isDocsHomePage:!1,title:"PageRank algorithm",description:"Typing terms in Google and searching them up yields a lot of results. But why are we getting the results in that order? The answer to that question is the PageRank algorithm. The PageRank algorithm is a way to measure the importance of a webpage by analyzing the quantity and quality of the links that point to it.",source:"@site/docs/algorithms/link-analysis/pagerank.md",slug:"/algorithms/link-analysis/pagerank",permalink:"/algorithms/link-analysis/pagerank",editUrl:"https://github.com/memgraph/networkx-guide/edit/main/docs/algorithms/link-analysis/pagerank.md",version:"current",sidebar_label:"PageRank",sidebar:"networkx_guide",previous:{title:"Floyd-Warshall algorithm",permalink:"/algorithms/shortest-path/floyd-warshall"},next:{title:"Community detection algorithms",permalink:"/algorithms/community-detection"}},s=[{value:"How does it work?",id:"how-does-it-work",children:[]},{value:"Practical Applications",id:"practical-applications",children:[]},{value:"Pseudocode",id:"pseudocode",children:[]},{value:"Usage in NetworkX",id:"usage-in-networkx",children:[{value:"Method input",id:"method-input",children:[]},{value:"Method output",id:"method-output",children:[]},{value:"Example",id:"example",children:[]}]}],p={toc:s};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Typing terms in Google and searching them up yields a lot of results. But why are we getting the results in that order? The answer to that question is the PageRank algorithm. The PageRank algorithm is a way to measure the importance of a webpage by analyzing the quantity and quality of the links that point to it."),Object(i.b)("h2",{id:"how-does-it-work"},"How does it work?"),Object(i.b)("p",null,"Google interprets a link from page A to page B as a vote from page A to page B.  All incoming links can be interpreted as votes. Looking at Figure X, we can say that then, the yellow node is more important than the red node."),Object(i.b)("p",null,"But, it also takes into consideration the \u201cimportance\u201d of the page that is \u201cgiving\u201d out the vote. If the page that\u2019s casting a vote is more important, the links are worth more and it will help rank up the other pages. Page\u2019s importance is equal to the sum of the votes of its incoming links."),Object(i.b)("p",null,"Mathematically, PageRank (PR) is defined as"),Object(i.b)("p",null,"PR(A) = (1 - d) + d i=1nPR(Ti)C(Ti)"),Object(i.b)("p",null,"where\nPage A has pages T1 to Tn which point to it\nd is a damping factor set between 0 and 1. It is usually set to 0.85\nC(A) is defined as the number of links going out of page A."),Object(i.b)("p",null,"The algorithm is robust against spam since it\u2019s not easy for a web page owner to add in links to their page from other important pages. The disadvantage is that it favours the older pages because new pages will not have many links going towards them. "),Object(i.b)("h2",{id:"practical-applications"},"Practical Applications"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Determining key species in ecology by mapping the relationship between species in the ecosystem. PageRank allows users to identify the most important species. "),Object(i.b)("li",{parentName:"ul"},"It\u2019s been used to rank public spaces or streets, predicting traffic flow and human movement"),Object(i.b)("li",{parentName:"ul"},"Personalized PageRank is used by Twitter to present users with recommendations of other accounts that they may wish to follow")),Object(i.b)("h2",{id:"pseudocode"},"Pseudocode"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"n = number of nodes in graph\nINIT LIST A\nINIT LIST PR\nFOR i = 0 to n-1\n    A[i] = 1/n-1\nENDFOR\nd = some value between 0 and 1 (usually 0.85)\n\nFOR i = 0 to n-1\n    PR[i] = 1-d\n    FOR EACH page Q that connects to PR[i]\n        On = number of outgoing edges of Q\n        PR[i] = PR[i] + d * A[Q]/On\n        FOR i = 0 to n-1\n            A[i] = PR[i]\n        ENDFOR\n    ENDFOR\nENDFOR\n")),Object(i.b)("h2",{id:"usage-in-networkx"},"Usage in NetworkX"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"pagerank(G, alpha=0.85, personalization=None, max_iter=100, tol=1e-06, nstart=None, weight='weight', dangling=None)\n")),Object(i.b)("h3",{id:"method-input"},"Method input"),Object(i.b)("p",null,"The first input parameter of the method, G, is a NetworkX graph. Undirected graphs will be converted to a directed graph with two directed edges for each undirected edge.\nThe second parameter, alpha, is the damping parameter for PageRank and the default value is 0.85.\nThe fourth parameter, max_iter, is the Maximum number of iterations.\nThe seventh parameter, weight, represents the edge attribute that should be used as the edge weight. If it\u2019s not specified, the weight of all edges will be 1. "),Object(i.b)("p",null,"For all other parameters, check out the ",Object(i.b)("a",{parentName:"p",href:"https://networkx.org/documentation/stable/reference/algorithms/generated/networkx.algorithms.link_analysis.pagerank_alg.pagerank.html#networkx.algorithms.link_analysis.pagerank_alg.pagerank"},"NetworkX Reference Guide"),"."),Object(i.b)("h3",{id:"method-output"},"Method output"),Object(i.b)("p",null,"The output of the method is a dictionary with nodes as keys and with PageRank as values."),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("p",null,"Python\u2019s NetworkX implements the PageRank algorithm as part of its Link Analysis algorithms. In the example below, we will showcase how to use the PageRank algorithm. We will calculate PageRank values on the graph from figure X."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"G = nx.DiGraph()\n\n[G.add_node(k) for k in [\"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\"]]\nG.add_edges_from([('G','A'), ('A','G'),('B','A'),\n                  ('C','A'),('A','C'),('A','D'),\n                  ('E','A'),('F','A'),('D','B'),\n                  ('D','F')])\n\n\nppr1 = nx.pagerank(G)\n\nprint(\u201cPage rank value: \u201d + ppr1)\npos = nx.spiral_layout(G)\nnx.draw(G, pos, with_labels = True, node_color=\"#f86e00\")\nplt.show()\n")),Object(i.b)("p",null,"The output is:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"Page rank values: {'A': 0.408074514346756, 'B': 0.07967426232810562, 'C': 0.13704946318948708, 'D': 0.13704946318948708, 'E': 0.021428571428571432, 'F': 0.07967426232810562, 'G': 0.13704946318948708}\n")))}c.isMDXComponent=!0},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return g}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),c=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},h=function(e){var t=c(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=a,g=h["".concat(o,".").concat(d)]||h[d]||u[d]||i;return n?r.a.createElement(g,l(l({ref:t},p),{},{components:n})):r.a.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);