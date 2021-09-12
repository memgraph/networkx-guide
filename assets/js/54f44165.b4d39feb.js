"use strict";(self.webpackChunknetworkx_guide=self.webpackChunknetworkx_guide||[]).push([[152],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=s(n),g=a,f=d["".concat(p,".").concat(g)]||d[g]||c[g]||o;return n?r.createElement(f,i(i({ref:e},u),{},{components:n})):r.createElement(f,i({ref:e},u))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},681:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"installation",title:"Installation",sidebar_label:"Installation",slug:"/installation"},p=void 0,s={unversionedId:"getting-started/installation",id:"getting-started/installation",isDocsHomePage:!1,title:"Installation",description:"Installing with pip",source:"@site/docs/getting-started/installation.md",sourceDirName:"getting-started",slug:"/installation",permalink:"/installation",editUrl:"https://github.com/memgraph/networkx-guide/edit/main/docs/getting-started/installation.md",tags:[],version:"current",frontMatter:{id:"installation",title:"Installation",sidebar_label:"Installation",slug:"/installation"},sidebar:"networkx_guide",previous:{title:"Getting started",permalink:"/getting-started"},next:{title:"Visualization overview",permalink:"/visualization"}},u=[{value:"Installing with <strong>pip</strong>",id:"installing-with-pip",children:[]},{value:"Installing with <strong>Anaconda</strong>",id:"installing-with-anaconda",children:[]}],c={toc:u};function d(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"installing-with-pip"},"Installing with ",(0,o.kt)("strong",{parentName:"h2"},"pip")),(0,o.kt)("p",null,"Install the most recent stable release of ",(0,o.kt)("strong",{parentName:"p"},"networkx")," with ",(0,o.kt)("strong",{parentName:"p"},"pip"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pip install networkx\n")),(0,o.kt)("p",null,"To upgrade to a newer release, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--upgrade")," flag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pip install --upgrade networkx\n")),(0,o.kt)("p",null,"If you do not have the right permissions to install software systemwide, you can install NetworkX into your user directory using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--user")," flag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pip install --user networkx\n")),(0,o.kt)("p",null,"You can also manually download the networkx repository from\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/networkx/networkx/releases"},"GitHub")," or ",(0,o.kt)("a",{parentName:"p",href:"https://pypi.python.org/pypi/networkx"},"PyPI"),".\nTo install one of these versions, unpack it and run the following command from the top-level source directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pip install .\n")),(0,o.kt)("h2",{id:"installing-with-anaconda"},"Installing with ",(0,o.kt)("strong",{parentName:"h2"},"Anaconda")),(0,o.kt)("p",null,"NetworkX is ",(0,o.kt)("a",{parentName:"p",href:"https://docs.continuum.io/anaconda/packages/pkg-docs/"},"currently available")," through the Anaconda distribution platform.\nMiniconda doesn't come with NetworkX by default."),(0,o.kt)("p",null,"You can install the latest version of NetworkX with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"conda install networkx\n")),(0,o.kt)("p",null,"If you want to update your current version of NetworkX then run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"conda update networkx\n")))}d.isMDXComponent=!0}}]);