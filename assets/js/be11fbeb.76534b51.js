"use strict";(self.webpackChunknetworkx_guide=self.webpackChunknetworkx_guide||[]).push([[0],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),h=a,d=m["".concat(s,".").concat(h)]||m[h]||p[h]||o;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>x});var r=n(7462),a=n(7294),o=n(6010),l=n(2466),i=n(6550),s=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=m(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,u]=d({queryString:n,groupId:r}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),g=(()=>{const e=s??p;return h({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var g=n(2389);const b="tabList__CuJ",y="tabItem_LNqP";function w(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==i&&(p(t),s(r))},h=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:m},l,{className:(0,o.Z)("tabs__item",y,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b)},a.createElement(w,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function x(e){const t=(0,g.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},5136:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294);const a={ctaButton:"ctaButton_fu4n",ctaBox:"ctaBox_gZT4"};function o(e){const{title:t,url:n}=e;return r.createElement("div",{className:a.ctaBox},r.createElement("a",{href:n,className:a.ctaButton,style:a},t))}},8809:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var r=n(7462),a=(n(7294),n(3905)),o=n(4866),l=n(5162),i=n(5136);const s={title:"Betweenness centrality",sidebar_label:"Betweenness centrality"},u=void 0,c={unversionedId:"algorithms/centrality-algorithms/betweenness-centrality",id:"algorithms/centrality-algorithms/betweenness-centrality",title:"Betweenness centrality",description:"Centrality analysis provides information about the node\u2019s importance for an information flow or connectivity of the network. Betweenness centrality is one of the most used centrality metrics. Betweenness centrality measures the extent to which a node lies on paths between other nodes in the graph. Nodes with higher betweenness have more influence within a network.",source:"@site/docs/algorithms/centrality-algorithms/betweenness-centrality.md",sourceDirName:"algorithms/centrality-algorithms",slug:"/algorithms/centrality-algorithms/betweenness-centrality",permalink:"/algorithms/centrality-algorithms/betweenness-centrality",draft:!1,editUrl:"https://github.com/memgraph/networkx-guide/edit/main/docs/algorithms/centrality-algorithms/betweenness-centrality.md",tags:[],version:"current",frontMatter:{title:"Betweenness centrality",sidebar_label:"Betweenness centrality"},sidebar:"networkx_guide",previous:{title:"PageRank",permalink:"/algorithms/centrality-algorithms/pagerank"},next:{title:"Degree centrality",permalink:"/algorithms/centrality-algorithms/degree-centrality"}},p={},m=[{value:"Practical applications",id:"practical-applications",level:2},{value:"Usage in NetworkX",id:"usage-in-networkx",level:2},{value:"Example",id:"example",level:3},{value:"Where to next?",id:"where-to-next",level:2}],h={toc:m};function d(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,r.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Centrality analysis provides information about the node\u2019s importance for an information flow or connectivity of the network. Betweenness centrality is one of the most used centrality metrics. Betweenness centrality measures the extent to which a node lies on paths between other nodes in the graph. Nodes with higher betweenness have more influence within a network. "),(0,a.kt)("h2",{id:"practical-applications"},"Practical applications"),(0,a.kt)("p",null,"There are many applications of the betweenness centrality, such as in social networks to indicate the position of power or to measure the strength of a relationship with friends. It is also used in protein to protein interactio networks to get a better insight into how proteins interact with each other. One of the most popular usages is in transportation. In a complex transportation network, centrality measurement can reveal the main bottlenecks and congestions within the system. Such can help to organize the infrastructure of a big city, as well as the amount spent in optimizing such routes."),(0,a.kt)("h2",{id:"usage-in-networkx"},"Usage in NetworkX"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"betweenness_centrality(G, k=None, normalized=True, weight=None, endpoints=False, seed=None)[source]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Not fast enough?")," Find 100x faster algorithms ",(0,a.kt)("a",{parentName:"p",href:"https://memgraph.com/memgraph-for-networkx?utm_source=networkx-guide&utm_medium=referral&utm_campaign=networkx_ppp&utm_term=centralityalgorithms%2Bbc&utm_content=findfasteralgorithms"},(0,a.kt)("strong",{parentName:"a"},"here")),"."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"First save locally ",(0,a.kt)("a",{parentName:"p",href:"https://public-assets.memgraph.com/networkx-resources/graph.gexf"},(0,a.kt)("inlineCode",{parentName:"a"},"graph.gexf"))," to run the below example."),(0,a.kt)(o.Z,{groupId:"bc",defaultValue:"code",values:[{label:"Python code",value:"code"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"code",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import networkx as nx\nimport matplotlib.pyplot as plt\n\n\nG = nx.read_gexf("graph.gexf")\n\ncentrality = nx.betweenness_centrality(G)\ncolors = list(centrality.values())\n\nnx.draw_networkx(\n    G,\n    nx.spring_layout(G),\n    node_size=50,\n    node_color=colors,\n    edge_color="g",\n    with_labels=False,\n)\n\nplt.axis("off")\nplt.show()\n'))),(0,a.kt)(l.Z,{value:"output",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"centrality-bc",src:n(3567).Z,width:"1516",height:"1266"})))),(0,a.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,a.kt)("p",null,"There are many graph algorithms libraries out there, with their own implementations of betweenness centrality algorithm. NetworkX's algorithms are written in Python, and there are many other libraries that offer faster C++ implementations, such as ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage"},(0,a.kt)("strong",{parentName:"a"},"MAGE")),", a graph algorithms library developed by Memgraph team."),(0,a.kt)(i.Z,{title:"Memgraph for NetworkX developers",url:"https://memgraph.com/memgraph-for-networkx?utm_source=networkx-guide&utm_medium=referral&utm_campaign=networkx_ppp&utm_term=centralityalgorithms%2Bbc&utm_content=ctabutton",mdxType:"CtaButton"}))}d.isMDXComponent=!0},3567:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/bc-3925572b1db31ea4294d7a6b9024bd3c.png"}}]);