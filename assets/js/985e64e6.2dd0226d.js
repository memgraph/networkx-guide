"use strict";(self.webpackChunknetworkx_guide=self.webpackChunknetworkx_guide||[]).push([[140],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),d=n,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return r?a.createElement(g,l(l({ref:t},u),{},{components:r})):a.createElement(g,l({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(7294),n=r(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>d});var a=r(7462),n=r(7294),o=r(6010),l=r(2389),i=r(7392),s=r(7094),c=r(2466);const u="tabList__CuJ",m="tabItem_LNqP";function p(e){var t;const{lazy:r,block:l,defaultValue:p,values:d,groupId:g,className:h}=e,f=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=d??f.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),b=(0,i.l)(y,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===p?p:p??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==v&&!y.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:k}=(0,s.U)(),[x,_]=(0,n.useState)(v),N=[],{blockElementScrollPositionUntilNextRender:O}=(0,c.o5)();if(null!=g){const e=w[g];null!=e&&e!==x&&y.some((t=>t.value===e))&&_(e)}const T=e=>{const t=e.currentTarget,r=N.indexOf(t),a=y[r].value;a!==x&&(O(t),_(a),null!=g&&k(g,String(a)))},E=e=>{var t;let r=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;r=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;r=N[t]??N[N.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},h)},y.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>N.push(e),onKeyDown:E,onClick:T},l,{className:(0,o.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":x===t})}),r??t)}))),r?(0,n.cloneElement)(f.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function d(e){const t=(0,l.Z)();return n.createElement(p,(0,a.Z)({key:String(t)},e))}},5136:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294);const n={ctaButton:"ctaButton_fu4n",ctaBox:"ctaBox_gZT4"};function o(e){const{title:t,url:r}=e;return a.createElement("div",{className:n.ctaBox},a.createElement("a",{href:r,className:n.ctaButton,style:n},t))}},3168:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var a=r(7462),n=(r(7294),r(3905)),o=r(5488),l=r(5162),i=r(5136);const s={title:"Degree centrality",sidebar_label:"Degree centrality"},c=void 0,u={unversionedId:"algorithms/centrality-algorithms/degree-centrality",id:"algorithms/centrality-algorithms/degree-centrality",title:"Degree centrality",description:"Historically, the first centrality was the degree centrality. Conceptually, it is the simplest algorithm to measure centrality. Degree centrality is defined as the number of connections a node has. Here, we have to differentiate two types of edges - edges that go \u201cin\u201d the node and edges that go \u201cout\u201d of the node. Therefore, there are two separate measures of degree centrality - indegree and outdegree. Indegree centrality is often interpreted as a form of popularity and outdegree as a form of companionship.",source:"@site/docs/algorithms/centrality-algorithms/degree-centrality.md",sourceDirName:"algorithms/centrality-algorithms",slug:"/algorithms/centrality-algorithms/degree-centrality",permalink:"/algorithms/centrality-algorithms/degree-centrality",draft:!1,editUrl:"https://github.com/memgraph/networkx-guide/edit/main/docs/algorithms/centrality-algorithms/degree-centrality.md",tags:[],version:"current",frontMatter:{title:"Degree centrality",sidebar_label:"Degree centrality"},sidebar:"networkx_guide",previous:{title:"Betweenness centrality",permalink:"/algorithms/centrality-algorithms/betweenness-centrality"},next:{title:"Closeness centrality",permalink:"/algorithms/centrality-algorithms/closeness-centrality"}},m={},p=[{value:"Usage in NetworkX",id:"usage-in-networkx",level:2},{value:"Example",id:"example",level:3},{value:"Where to next?",id:"where-to-next",level:2}],d={toc:p};function g(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Historically, the first centrality was the degree centrality. Conceptually, it is the simplest algorithm to measure centrality. Degree centrality is defined as the number of connections a node has. Here, we have to differentiate two types of edges - edges that go \u201cin\u201d the node and edges that go \u201cout\u201d of the node. Therefore, there are two separate measures of degree centrality - indegree and outdegree. Indegree centrality is often interpreted as a form of popularity and outdegree as a form of companionship. "),(0,n.kt)("h2",{id:"usage-in-networkx"},"Usage in NetworkX"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"degree_centrality(G)\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Not fast enough?")," Find 100x faster algorithms ",(0,n.kt)("a",{parentName:"p",href:"https://memgraph.com/memgraph-for-networkx?utm_source=networkx-guide&utm_medium=referral&utm_campaign=networkx_ppp&utm_term=centralityalgorithms%2Bdegree&utm_content=findfasteralgorithms"},(0,n.kt)("strong",{parentName:"a"},"here")),"."),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("p",null,"First save locally ",(0,n.kt)("a",{parentName:"p",href:"https://public-assets.memgraph.com/networkx-resources/graph.gexf"},(0,n.kt)("inlineCode",{parentName:"a"},"graph.gexf"))," to run the below example."),(0,n.kt)(o.Z,{groupId:"bc",defaultValue:"code",values:[{label:"Python code",value:"code"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'import networkx as nx\nimport matplotlib.pyplot as plt\n\n\nG = nx.read_gexf("graph.gexf")\n\ncentrality = nx.degree_centrality(G)\ncolors = list(centrality.values())\n\nnx.draw_networkx(\n    G,\n    nx.spring_layout(G),\n    node_size=50,\n    node_color=colors,\n    edge_color="g",\n    with_labels=False,\n)\n\nplt.axis("off")\nplt.show()\n\n'))),(0,n.kt)(l.Z,{value:"output",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"centrality-degree",src:r(3010).Z,width:"1560",height:"1216"})))),(0,n.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,n.kt)("p",null,"There are many graph algorithms libraries out there, with their own implementations of degree centrality algorithm. NetworkX's algorithms are written in Python, and there are many other libraries that offer faster C++ implementations, such as ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage"},(0,n.kt)("strong",{parentName:"a"},"MAGE")),", a graph algorithms library developed by Memgraph team."),(0,n.kt)(i.Z,{title:"Memgraph for NetworkX developers",url:"https://memgraph.com/memgraph-for-networkx?utm_source=networkx-guide&utm_medium=referral&utm_campaign=networkx_ppp&utm_term=centralityalgorithms%2Bdegree&utm_content=ctabutton",mdxType:"CtaButton"}))}g.isMDXComponent=!0},3010:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/degree-bb7742c9bf72c96c2fad264a4c64aa3f.png"}}]);