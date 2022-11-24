"use strict";(self.webpackChunknetworkx_guide=self.webpackChunknetworkx_guide||[]).push([[63],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=m(n),p=r,d=h["".concat(s,".").concat(p)]||h[p]||c[p]||o;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(7462),r=n(7294),o=n(6010),i=n(2389),l=n(7392),s=n(7094),m=n(2466);const u="tabList__CuJ",c="tabItem_LNqP";function h(e){var t;const{lazy:n,block:i,defaultValue:h,values:p,groupId:d,className:g}=e,w=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=p??w.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,l.l)(f,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===h?h:h??(null==(t=w.find((e=>e.props.default)))?void 0:t.props.value)??w[0].props.value;if(null!==v&&!f.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:y}=(0,s.U)(),[N,x]=(0,r.useState)(v),T=[],{blockElementScrollPositionUntilNextRender:_}=(0,m.o5)();if(null!=d){const e=k[d];null!=e&&e!==N&&f.some((t=>t.value===e))&&x(e)}const E=e=>{const t=e.currentTarget,n=T.indexOf(t),a=f[n].value;a!==N&&(_(t),x(a),null!=d&&y(d,String(a)))},O=e=>{var t;let n=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},g)},f.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>T.push(e),onKeyDown:O,onClick:E},i,{className:(0,o.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,r.cloneElement)(w.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},w.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function p(e){const t=(0,i.Z)();return r.createElement(h,(0,a.Z)({key:String(t)},e))}},5136:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294);const r={ctaButton:"ctaButton_fu4n",ctaBox:"ctaBox_gZT4"};function o(e){const{title:t,url:n}=e;return a.createElement("div",{className:r.ctaBox},a.createElement("a",{href:n,className:r.ctaButton,style:r},t))}},5622:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>m,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>h});var a=n(7462),r=(n(7294),n(3905)),o=n(5136),i=n(5488),l=n(5162);const s={id:"girvan-newman",title:"Girvan-Newman algorithm",sidebar_label:"Girvan-Newman"},m=void 0,u={unversionedId:"algorithms/community-detection/girvan-newman",id:"algorithms/community-detection/girvan-newman",title:"Girvan-Newman algorithm",description:"The Girvan-Newman algorithm for the detection and analysis of community structure relies on the iterative elimination of edges that have the highest number of shortest paths between nodes passing through them. By removing edges from the graph one-by-one, the network breaks down into smaller pieces, so-called communities. The algorithm was introduced by Michelle Girvan and Mark Newman.",source:"@site/docs/algorithms/community-detection/girvan\u2013newman.md",sourceDirName:"algorithms/community-detection",slug:"/algorithms/community-detection/girvan-newman",permalink:"/algorithms/community-detection/girvan-newman",draft:!1,editUrl:"https://github.com/memgraph/networkx-guide/edit/main/docs/algorithms/community-detection/girvan\u2013newman.md",tags:[],version:"current",frontMatter:{id:"girvan-newman",title:"Girvan-Newman algorithm",sidebar_label:"Girvan-Newman"},sidebar:"networkx_guide",previous:{title:"Community detection algorithms overview",permalink:"/algorithms/community-detection"},next:{title:"Weakly connected components (Union find)",permalink:"/algorithms/components/weakly-connected-components"}},c={},h=[{value:"How does it work?",id:"how-does-it-work",level:2},{value:"Betweenness centrality",id:"betweenness-centrality",level:2},{value:"Pseudocode",id:"pseudocode",level:2},{value:"Usage in NetworkX",id:"usage-in-networkx",level:2},{value:"Method input",id:"method-input",level:3},{value:"Method output",id:"method-output",level:3},{value:"Example",id:"example",level:3},{value:"Where to next?",id:"where-to-next",level:2}],p={toc:h};function d(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Girvan-Newman algorithm")," for the detection and analysis of community structure relies on the ",(0,r.kt)("em",{parentName:"p"},"iterative elimination of edges that have the highest number of shortest paths between nodes passing through them"),". By removing edges from the graph one-by-one, the network breaks down into smaller pieces, so-called communities. The algorithm was introduced by Michelle Girvan and Mark Newman."),(0,r.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,r.kt)("p",null,"The idea was to find which edges in a network occur most frequently between other pairs of nodes by finding edges betweenness centrality. The edges joining communities are then expected to have a high edge betweenness. The underlying community structure of the network will be much more fine-grained once the edges with the highest betweenness are eliminated which means that communities will be much easier to spot."),(0,r.kt)("p",null,"The Girvan-Newman algorithm can be divided into four main steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"For every edge in a graph, calculate the edge betweenness centrality."),(0,r.kt)("li",{parentName:"ol"},"Remove the edge with the highest betweenness centrality."),(0,r.kt)("li",{parentName:"ol"},"Calculate the betweenness centrality for every remaining edge."),(0,r.kt)("li",{parentName:"ol"},"Repeat steps 2-4 until there are no more edges left.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Girvan-newman-example-1",src:n(1306).Z,width:"1468",height:"680"})),(0,r.kt)("p",null,"In this example, you can see how a typical graph looks like when ",(0,r.kt)("strong",{parentName:"p"},"edges are assigned weights based on the number of shortest paths passing through them"),". To keep things simple, we only calculated the number of undirected shortest paths that pass through an edge. The edge between nodes ",(0,r.kt)("strong",{parentName:"p"},"A")," and ",(0,r.kt)("strong",{parentName:"p"},"B")," has a strength of 1 because we don\u2019t count ",(0,r.kt)("strong",{parentName:"p"},"A->B")," and ",(0,r.kt)("strong",{parentName:"p"},"B->A")," as two different paths."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Girvan-newman-example-2",src:n(9816).Z,width:"1459",height:"685"})),(0,r.kt)("p",null,"The Girvan-Newman algorithm would remove the edge between nodes ",(0,r.kt)("strong",{parentName:"p"},"C")," and ",(0,r.kt)("strong",{parentName:"p"},"D")," because it is the one with the highest strength. As you can see intuitively, this means that the edge is located between communities.\nAfter removing an edge, the betweenness centrality has to be recalculated for every remaining edge. In this example, we have come to the point where every edge has the same betweenness centrality."),(0,r.kt)("h2",{id:"betweenness-centrality"},"Betweenness centrality"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Betweenness centrality")," measures the extent to which a vertex or edge lies on paths between vertices. Vertices and edges with high betweenness may have considerable influence within a network by virtue of their control over information passing between others."),(0,r.kt)("p",null,"The calculation of betweenness centrality is not standardized and there are many ways to solve it. It is defined as the number of shortest paths in the graph that pass through the node or edge divided by the total number of shortest paths."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Betweenness-example",src:n(9428).Z,width:"1200",height:"1200"})),(0,r.kt)("p",null,"The image above shows an undirected graph colored based on the betweenness centrality of each vertex from least (red) to greatest (blue)."),(0,r.kt)("p",null,"Read more about it at the ",(0,r.kt)("a",{parentName:"p",href:"/algorithms/centrality-algorithms/betweenness-centrality"},"betweenness centrality")," page."),(0,r.kt)("h2",{id:"pseudocode"},"Pseudocode"),(0,r.kt)("p",null,"In each iteration, calculate the betweenness centrality for all edges in the graph. Remove the edge with the highest centrality. Repeat until there are no more edges left."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"REPEAT\n    LET n BE number of edges in the graph\n    FOR i=0 to n-1\n        LET B[i] BE betweenness centrality of edge i\n        IF B[i] > max_B THEN\n            max_B = B[i]\n            max_B_edge = i\n        ENDIF\n    ENDFOR\n    remove edge i from graph\nUNTIL number of edges in graph is 0\n")),(0,r.kt)("h2",{id:"usage-in-networkx"},"Usage in NetworkX"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"girvan_newman(G, most_valuable_edge=None)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Not fast enough?")," Find 100x faster algorithms ",(0,r.kt)("a",{parentName:"p",href:"https://memgraph.com/memgraph-for-networkx?utm_source=networkx-guide&utm_medium=referral&utm_campaign=networkx_ppp&utm_term=communitydetection%2Bgirvannewman&utm_content=findfasteralgorithms"},(0,r.kt)("strong",{parentName:"a"},"here")),"."),(0,r.kt)("h3",{id:"method-input"},"Method input"),(0,r.kt)("p",null,"The first input parameter of the method, ",(0,r.kt)("inlineCode",{parentName:"p"},"G"),", is a NetworkX graph.\nThe second parameter, ",(0,r.kt)("inlineCode",{parentName:"p"},"most_valuable_edge"),", is a function that takes a graph as input and returns the edge that should be removed from the graph in each iteration. If no function is specified, the edge with the highest betweenness centrality will be chosen in each iteration."),(0,r.kt)("h3",{id:"method-output"},"Method output"),(0,r.kt)("p",null,"The output of the method is an iterator over tuples of sets of nodes in ",(0,r.kt)("inlineCode",{parentName:"p"},"G"),". Each set of nodes represents a community and each tuple is a sequence of communities at a particular level (iteration) of the algorithm. "),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)(i.Z,{groupId:"gn",defaultValue:"code",values:[{label:"Python code",value:"code"},{label:"Output",value:"output"},{label:"Visualization",value:"visualization"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import matplotlib.pyplot as plt\nimport networkx as nx\nfrom networkx.algorithms.community.centrality import girvan_newman\n\nG = nx.karate_club_graph()\ncommunities = girvan_newman(G)\n\nnode_groups = []\nfor com in next(communities):\n    node_groups.append(list(com))\n\nprint(node_groups)\n\ncolor_map = []\nfor node in G:\n    if node in node_groups[0]:\n        color_map.append("red")\n    else:\n        color_map.append("orange")\nnx.draw(G, node_color=color_map, with_labels=True)\nplt.show()\n'))),(0,r.kt)(l.Z,{value:"output",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[[0, 1, 3, 4, 5, 6, 7, 10, 11, 12, 13, 16, 17, 19, 21], \n[2, 8, 9, 14, 15, 18, 20, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]]\n"))),(0,r.kt)(l.Z,{value:"visualization",mdxType:"TabItem"},(0,r.kt)("p",null,"The network has been divided into two distinct communities:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Graph",src:n(8110).Z,width:"640",height:"480"})))),(0,r.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,r.kt)("p",null,"There are many graph algorithms libraries out there, with their own implementations of Girvan-Newman's algorithm. NetworkX's algorithms are written in Python, and there are many other libraries that offer faster C++ implementations, such as ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage"},(0,r.kt)("strong",{parentName:"a"},"MAGE")),", a graph algorithms library developed by Memgraph team."),(0,r.kt)(o.Z,{title:"Memgraph for NetworkX developers",url:"https://memgraph.com/memgraph-for-networkx?utm_source=networkx-guide&utm_medium=referral&utm_campaign=networkx_ppp&utm_term=communitydetection%2Bgirvannewman&utm_content=ctabutton",mdxType:"CtaButton"}))}d.isMDXComponent=!0},9428:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/betweenness-example-cbad71113c6da9653030cd68f4fa3a33.png"},1306:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/girvan-newman-example-one-ccbdfc6710fb745b5b36bd36e688f799.jpg"},9816:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/girvan-newman-example-two-d8ba556c56b207e70825862714606287.jpg"},8110:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/girvan-newman-matplotlib-9c46583212fe9ffe9167ffc088e60066.png"}}]);