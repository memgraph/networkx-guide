"use strict";(self.webpackChunknetworkx_guide=self.webpackChunknetworkx_guide||[]).push([[195],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,g=p["".concat(l,".").concat(d)]||p[d]||u[d]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m.mdxType="string"==typeof e?e:a,i[1]=m;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3687:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>m,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={slug:"/algorithms/community-detection",title:"Community detection algorithms overview"},i=void 0,m={unversionedId:"algorithms/community-detection/overview",id:"algorithms/community-detection/overview",title:"Community detection algorithms overview",description:"While humans are very good at detecting distinct or repetitive patterns among a few components, the nature of large interconnected networks makes it practically impossible to perform such basic tasks manually. Groups of densely connected nodes are easy to spot visually, but more sophisticated methods are needed to perform these tasks programmatically. Community detection algorithms are used to find such groups of densely connected components in various networks.",source:"@site/docs/algorithms/community-detection/overview.md",sourceDirName:"algorithms/community-detection",slug:"/algorithms/community-detection",permalink:"/networkx-guide/algorithms/community-detection",draft:!1,editUrl:"https://github.com/memgraph/networkx-guide/edit/main/docs/algorithms/community-detection/overview.md",tags:[],version:"current",frontMatter:{slug:"/algorithms/community-detection",title:"Community detection algorithms overview"},sidebar:"networkx_guide",previous:{title:"Katz centrality",permalink:"/networkx-guide/algorithms/centrality-algorithms/katz-centrality"},next:{title:"Girvan-Newman",permalink:"/networkx-guide/algorithms/community-detection/girvan-newman"}},l={},s=[{value:"Practical applications",id:"practical-applications",level:2},{value:"Community detection techniques",id:"community-detection-techniques",level:2},{value:"Community detection algorithms in NetworkX",id:"community-detection-algorithms-in-networkx",level:2},{value:"Learn more",id:"learn-more",level:2}],c=(u="CtaButton",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var u;const p={toc:s};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"While humans are very good at detecting distinct or repetitive patterns among a few components, the nature of large interconnected networks makes it practically impossible to perform such basic tasks manually. Groups of densely connected nodes are easy to spot visually, but more sophisticated methods are needed to perform these tasks programmatically. Community detection algorithms are used to find such groups of densely connected components in various networks."),(0,a.kt)("p",null,"M. Girvan and M. E. J. Newman have proposed one of the most widely adopted community detection algorithms. According to them, groups of nodes in a network are tightly connected within communities and loosely connected between communities."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Community-detection-example",src:n(5627).Z,width:"1315",height:"760"})),(0,a.kt)("p",null,"Through this section you'll learn about ",(0,a.kt)("a",{parentName:"p",href:"/algorithms/community-detection/girvan-newman"},(0,a.kt)("strong",{parentName:"a"},"Girvan-Newman algorithm")),"."),(0,a.kt)("h2",{id:"practical-applications"},"Practical applications"),(0,a.kt)("p",null,"Because networks are an integral part of many real-world problems, community detection algorithms have found their way into various fields, ranging from social network analysis to public health initiatives."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A known use case is the detection of terrorist groups in social networks by tracking their activities and interactions. In a similar fashion, groups of malicious bots can be detected on online social platforms."),(0,a.kt)("li",{parentName:"ul"},"Community detection can be used to study the dynamics of certain groups that are susceptible to epidemic diseases. Other types of diseases can be studied in a similar fashion to discover common links among patients."),(0,a.kt)("li",{parentName:"ul"},"One of the most recent use cases, community evolution prediction, involves the prediction of upcoming changes in a network structure.")),(0,a.kt)("h2",{id:"community-detection-techniques"},"Community detection techniques"),(0,a.kt)("p",null,"There are two main types of community detection techniques, ",(0,a.kt)("strong",{parentName:"p"},"agglomerative")," and ",(0,a.kt)("strong",{parentName:"p"},"divisive"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Agglomerative")," methods generally start with a network that contains only nodes of the original graph. The edges are added one-by-one to the graph, while stronger edges are prioritized over weaker ones. The strength of an edge, or weight, is calculated differently depending on the specific algorithm implementation."),(0,a.kt)("p",null,"On the other hand, ",(0,a.kt)("strong",{parentName:"p"},"divisive")," methods rely on the process of removing edges from the original graph iteratively. Stronger edges are removed before weaker ones. At every step, the edge-weight calculation is repeated, since the weight of the remaining edges changes after an edge is removed. After a certain number of steps, we get clusters of densely connected nodes, a.k.a. communities."),(0,a.kt)("h2",{id:"community-detection-algorithms-in-networkx"},"Community detection algorithms in NetworkX"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Link"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Girvan-Newman algorithm")),(0,a.kt)("td",{parentName:"tr",align:null},"The Girvan-Newman algorithm detects communities by progressively removing edges from the original network."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://networkx.org/documentation/stable/reference/algorithms/generated/networkx.algorithms.community.centrality.girvan_newman.html#networkx.algorithms.community.centrality.girvan_newman"},"NetworkX Reference Guide"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Fluid Communities algorithm")),(0,a.kt)("td",{parentName:"tr",align:null},"The algorithm is based on the simple idea of fluids interacting in an environment, expanding and pushing each other."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://networkx.org/documentation/stable/reference/algorithms/generated/networkx.algorithms.community.asyn_fluid.asyn_fluidc.html#networkx.algorithms.community.asyn_fluid.asyn_fluidc"},"NetworkX Reference Guide"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Label Propagation algorithm")),(0,a.kt)("td",{parentName:"tr",align:null},"Label propagation is a semi-supervised machine learning algorithm that assigns labels to previously unlabeled data points."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://networkx.org/documentation/stable/reference/algorithms/generated/networkx.algorithms.community.label_propagation.asyn_lpa_communities.html#networkx.algorithms.community.label_propagation.asyn_lpa_communities"},"NetworkX Reference Guide"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Clique Percolation algorithm")),(0,a.kt)("td",{parentName:"tr",align:null},"The algorithm finds k-clique communities in a graph using the percolation method."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://networkx.org/documentation/stable/reference/algorithms/generated/networkx.algorithms.community.kclique.k_clique_communities.html#networkx.algorithms.community.kclique.k_clique_communities"},"NetworkX Reference Guide"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Kernighan-Lin algorithm")),(0,a.kt)("td",{parentName:"tr",align:null},"This algorithm partitions a network into two sets by iteratively swapping pairs of nodes to reduce the edge cut between the two sets."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://networkx.org/documentation/stable/reference/algorithms/generated/networkx.algorithms.community.kernighan_lin.kernighan_lin_bisection.html#networkx.algorithms.community.kernighan_lin.kernighan_lin_bisection"},"NetworkX Reference Guide"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Not fast enough?")," Find 100x faster algorithms ",(0,a.kt)("a",{parentName:"p",href:"https://memgraph.com/memgraph-for-networkx?utm_source=networkx-guide&utm_medium=referral&utm_campaign=networkx_ppp&utm_term=communitydetection%2Boverview&utm_content=findfasteralgorithms"},(0,a.kt)("strong",{parentName:"a"},"here")),"."),(0,a.kt)("h2",{id:"learn-more"},"Learn more"),(0,a.kt)("p",null,"There are many graph algorithms libraries out there, with their own implementations of community detection algorithms. NetworkX's algorithms are written in Python, and there are many other libraries that offer faster C++ implementations, such as ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage"},(0,a.kt)("strong",{parentName:"a"},"MAGE")),", a graph algorithms library developed by Memgraph team."),(0,a.kt)(c,{title:"Memgraph for NetworkX developers",url:"https://memgraph.com/memgraph-for-networkx?utm_source=networkx-guide&utm_medium=referral&utm_campaign=networkx_ppp&utm_term=communitydetection%2Boverview&utm_content=ctabutton",mdxType:"CtaButton"}))}d.isMDXComponent=!0},5627:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/community-detection-example-e5d5f602844e25f6fa160874e8f2faf4.jpg"}}]);