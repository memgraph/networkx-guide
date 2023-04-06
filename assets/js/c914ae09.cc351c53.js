"use strict";(self.webpackChunknetworkx_guide=self.webpackChunknetworkx_guide||[]).push([[400],{3905:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>p});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},h=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=u(r),p=n,m=c["".concat(i,".").concat(p)]||c[p]||d[p]||o;return r?a.createElement(m,l(l({ref:t},h),{},{components:r})):a.createElement(m,l({ref:t},h))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(7294),n=r(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>x});var a=r(7462),n=r(7294),o=r(6010),l=r(2466),s=r(6550),i=r(1980),u=r(7392),h=r(12);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function c(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=c(e),[l,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,u]=m({queryString:r,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,h.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),g=(()=>{const e=i??d;return p({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var g=r(2389);const b="tabList__CuJ",w="tabItem_LNqP";function y(e){let{className:t,block:r,selectedValue:s,selectValue:i,tabValues:u}=e;const h=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),c=e=>{const t=e.currentTarget,r=h.indexOf(t),a=u[r].value;a!==s&&(d(t),i(a))},p=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=h.indexOf(e.currentTarget)+1;t=h[r]??h[0];break}case"ArrowLeft":{const r=h.indexOf(e.currentTarget)-1;t=h[r]??h[h.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>h.push(e),onKeyDown:p,onClick:c},l,{className:(0,o.Z)("tabs__item",w,l?.className,{"tabs__item--active":s===t})}),r??t)})))}function v(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=f(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",b)},n.createElement(y,(0,a.Z)({},e,t)),n.createElement(v,(0,a.Z)({},e,t)))}function x(e){const t=(0,g.Z)();return n.createElement(k,(0,a.Z)({key:String(t)},e))}},5136:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294);const n={ctaButton:"ctaButton_fu4n",ctaBox:"ctaBox_gZT4"};function o(e){const{title:t,url:r}=e;return a.createElement("div",{className:n.ctaBox},a.createElement("a",{href:r,className:n.ctaButton,style:n},t))}},7533:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>h,toc:()=>c});var a=r(7462),n=(r(7294),r(3905)),o=r(5136),l=r(4866),s=r(5162);const i={id:"floyd-warshall",title:"Floyd-Warshall algorithm",sidebar_label:"Floyd-Warshall"},u=void 0,h={unversionedId:"algorithms/shortest-path/floyd-warshall",id:"algorithms/shortest-path/floyd-warshall",title:"Floyd-Warshall algorithm",description:"Floyd-Warshall algorithm is an algorithm for finding the shortest path between all the pairs of vertices in a weighted graph. The result of the algorithm is a list of lengths of shortest paths between all pairs of vertices.",source:"@site/docs/algorithms/shortest-path/floyd-warshall.md",sourceDirName:"algorithms/shortest-path",slug:"/algorithms/shortest-path/floyd-warshall",permalink:"/algorithms/shortest-path/floyd-warshall",draft:!1,editUrl:"https://github.com/memgraph/networkx-guide/edit/main/docs/algorithms/shortest-path/floyd-warshall.md",tags:[],version:"current",frontMatter:{id:"floyd-warshall",title:"Floyd-Warshall algorithm",sidebar_label:"Floyd-Warshall"},sidebar:"networkx_guide",previous:{title:"A* search",permalink:"/algorithms/shortest-path/a-star-search"},next:{title:"Centrality algorithms overview",permalink:"/algorithms/centrality-algorithms"}},d={},c=[{value:"How does it work?",id:"how-does-it-work",level:2},{value:"The difference from other shortest path algorithms",id:"the-difference-from-other-shortest-path-algorithms",level:2},{value:"Pseudocode",id:"pseudocode",level:2},{value:"Usage in NetworkX",id:"usage-in-networkx",level:2},{value:"Method input",id:"method-input",level:3},{value:"Method output",id:"method-output",level:3},{value:"Example",id:"example",level:3},{value:"Where to next?",id:"where-to-next",level:2}],p={toc:c};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Floyd-Warshall algorithm is an algorithm for finding the shortest path between all the pairs of vertices in a weighted graph. The result of the algorithm is a list of lengths of shortest paths between all pairs of vertices. "),(0,n.kt)("p",null,"The algorithm was first designed as an example for dynamic programming by Robert Floyd in 1962. The same year, Stephen Warshall published essentially the same algorithm, but as a graph example. As the algorithms were essentially the same, the algorithm got named after both authors."),(0,n.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,n.kt)("p",null,"Floyd-Warshall algorithm creates a series of matrices with dimension n x n, where n is the number of nodes in the graph. Elements of the matrices are filled with distances from node i to node j. If there is no path between the two nodes, the element is put as infinity. "),(0,n.kt)("p",null,"Each next matrix takes into account the node that is intermediate between the source node and the target node. Element of the matrix is filled if the sum of distance from source node to intermediate node and distance from intermediate node to target node is lower than the current distance. The algorithm is repeated as many times as there\u2019s nodes in the graph."),(0,n.kt)("p",null,"The resulting matrix contains the length of the shortest path between each pair of nodes. "),(0,n.kt)("h2",{id:"the-difference-from-other-shortest-path-algorithms"},"The difference from other shortest path algorithms"),(0,n.kt)("p",null,"Floyd-Warshall algorithm can find lengths of the shortest paths between all pairs of vertices in a graph. The algorithm works with both directed and undirected graphs. It accepts both positive and negative values as weights. "),(0,n.kt)("p",null,"Floyd-Warshall algorithm is used in solving many different problems such as finding the shortest path in a directed graph, finding the transitive closure of directed graphs, finding the inversion of real matrices, testing whether an undirected graph is a bipartite and fast computation of pathfinder networks. "),(0,n.kt)("h2",{id:"pseudocode"},"Pseudocode"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"dist = |V| x |V|\nFOR EACH edge (u,v)\n    dist[u][v] = weight(u,v)\nENDFOR\nFOR EACH vertex v\n    dist[u][v] = 0\nENDFOR\n\nFOR k = 1 to |V|\n    FOR i = 1 to |V|\n        FOR j from 1 to |V|\n            IF dist[i][j] > dist[i][k] + dist[k][j] THEN\n                Dist[i][j] = dist[i][k] + dist[k][j]\n            ENDIF\n        ENDFOR\n    ENDFOR\nENDFOR\n")),(0,n.kt)("h2",{id:"usage-in-networkx"},"Usage in NetworkX"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"floyd_warshall(G, weight='weight')")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Not fast enough?")," Find 100x faster algorithms ",(0,n.kt)("a",{parentName:"p",href:"https://memgraph.com/memgraph-for-networkx?utm_source=networkx-guide&utm_medium=referral&utm_campaign=networkx_ppp&utm_term=shortestpath%2Bfloydwarshall&utm_content=findfasteralgorithms"},(0,n.kt)("strong",{parentName:"a"},"here")),"."),(0,n.kt)("h3",{id:"method-input"},"Method input"),(0,n.kt)("p",null,"The first input parameter of the method, G, is a NetworkX graph.\nThe fifth parameter, weight, represents the edge attribute that should be used as the edge weight. If it\u2019s not specified, the default value is \u2018weight\u2019. "),(0,n.kt)("h3",{id:"method-output"},"Method output"),(0,n.kt)("p",null,"The output of the method is a dictionary keyed by source and target, of shortest paths distances between nodes.."),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)(l.Z,{groupId:"floyd",defaultValue:"code",values:[{label:"Python code",value:"code"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"import networkx as nx\nimport pprint as pp\n\nedges = [(1,2, {'weight':4}),\n        (1,3,{'weight':2}),\n        (2,3,{'weight':1}),\n        (2,4, {'weight':5}),\n        (3,4, {'weight':8}),\n        (3,5, {'weight':10}),\n        (4,5,{'weight':2}),\n        (4,6,{'weight':8}),\n        (5,6,{'weight':5})]\nedge_labels = {(1,2):4, (1,3):2, (2,3):1, (2,4):5, (3,4):8, (3,5):10, (4,5):2, (4,6):8, (5,6):5}\n   \n        \nG = nx.Graph()\nfor i in range(1,7):\n    G.add_node(i)\nG.add_edges_from(edges)\n\npos = nx.planar_layout(G)\nnx.draw(G, pos, with_labels = True)\nnx.draw_networkx_edge_labels(G, pos,edge_labels=edge_labels)\n\nfw = nx.floyd_warshall(G, weight='weight')\n\nresults = {a:dict(b) for a,b in fw.items()}  \npp.pprint(results)\n"))),(0,n.kt)(s.Z,{value:"output",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"{1: {1: 0, 2: 3, 3: 2, 4: 8, 5: 10, 6: 15},\n 2: {1: 3, 2: 0, 3: 1, 4: 5, 5: 7, 6: 12},\n 3: {1: 2, 2: 1, 3: 0, 4: 6, 5: 8, 6: 13},\n 4: {1: 8, 2: 5, 3: 6, 4: 0, 5: 2, 6: 7},\n 5: {1: 10, 2: 7, 3: 8, 4: 2, 5: 0, 6: 5},\n 6: {1: 15, 2: 12, 3: 13, 4: 7, 5: 5, 6: 0}}\n")))),(0,n.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,n.kt)("p",null,"There are many graph algorithms libraries out there, with their own implementations of Floyd-Warshall's algorithm. NetworkX's algorithms are written in Python, and there are many other libraries that offer faster C++ implementations, such as ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage"},(0,n.kt)("strong",{parentName:"a"},"MAGE")),", a graph algorithms library developed by Memgraph team."),(0,n.kt)(o.Z,{title:"Memgraph for NetworkX developers",url:"https://memgraph.com/memgraph-for-networkx?utm_source=networkx-guide&utm_medium=referral&utm_campaign=networkx_ppp&utm_term=shortestpath%2Bfloydwarshall&utm_content=ctabutton",mdxType:"CtaButton"}))}m.isMDXComponent=!0}}]);