(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),i=(n(0),n(90)),o={id:"installation",title:"Installation",sidebar_label:"Installation",slug:"/installation"},l={unversionedId:"getting-started/installation",id:"getting-started/installation",isDocsHomePage:!1,title:"Installation",description:"This site is under construction.",source:"@site/docs/getting-started/installation.md",slug:"/installation",permalink:"/installation",editUrl:"https://github.com/memgraph/networkx-guide/edit/main/docs/getting-started/installation.md",version:"current",sidebar_label:"Installation",sidebar:"networkx_guide",previous:{title:"Getting started",permalink:"/getting-started"},next:{title:"Visualization overview",permalink:"/visualization"}},c=[{value:"Installing with <strong>pip</strong>",id:"installing-with-pip",children:[]},{value:"Installing with <strong>Anaconda</strong>",id:"installing-with-anaconda",children:[]},{value:"Installing from source",id:"installing-from-source",children:[]}],p={toc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This site is under construction."))),Object(i.b)("h3",{id:"installing-with-pip"},"Installing with ",Object(i.b)("strong",{parentName:"h3"},"pip")),Object(i.b)("p",null,"Install the current release of ",Object(i.b)("strong",{parentName:"p"},"networkx")," with ",Object(i.b)("strong",{parentName:"p"},"pip"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"pip install networkx\n")),Object(i.b)("p",null,"To upgrade to a newer release use the ",Object(i.b)("inlineCode",{parentName:"p"},"--upgrade")," flag:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"pip install --upgrade networkx\n")),Object(i.b)("p",null,"If you do not have permission to install software systemwide, you can install into your user directory using the ",Object(i.b)("inlineCode",{parentName:"p"},"--user")," flag:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"pip install --user networkx\n")),Object(i.b)("h3",{id:"installing-with-anaconda"},"Installing with ",Object(i.b)("strong",{parentName:"h3"},"Anaconda")),Object(i.b)("p",null,"NetworkX is ",Object(i.b)("a",{parentName:"p",href:"https://docs.continuum.io/anaconda/packages/pkg-docs/"},"currently installed")," with Anaconda. Miniconda doesn't come with NetworkX by default."),Object(i.b)("p",null,"You can install/update NetworkX to the latest version with:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"conda install networkx\n")),Object(i.b)("p",null,"of if you want to update NetworkX installation then:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"conda update networkx\n")),Object(i.b)("h3",{id:"installing-from-source"},"Installing from source"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Source file archive")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Download the source from ",Object(i.b)("a",{parentName:"li",href:"https://pypi.python.org/pypi/networkx/"},"PyPi")," or get the latest version from ",Object(i.b)("a",{parentName:"li",href:"https://github.com/networkx/networkx/"},"Github"),"."),Object(i.b)("li",{parentName:"ol"},"Unpack and change directory to the source directory."),Object(i.b)("li",{parentName:"ol"},"Run ",Object(i.b)("inlineCode",{parentName:"li"},"python setup.py install")," to build and install")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Installing from GitHub")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Clone NetworkX repository (see ",Object(i.b)("a",{parentName:"li",href:"https://github.com/networkx/networkx/"},"https://github.com/networkx/networkx/")," for options)\n",Object(i.b)("inlineCode",{parentName:"li"},"git clone https://github.com/networkx/networkx/.git")),Object(i.b)("li",{parentName:"ol"},"Change directory to ",Object(i.b)("inlineCode",{parentName:"li"},"NetworkX")),Object(i.b)("li",{parentName:"ol"},"Run ",Object(i.b)("inlineCode",{parentName:"li"},"python setup.py install")," to build nad install")))}s.isMDXComponent=!0},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return n?a.a.createElement(m,l(l({ref:t},p),{},{components:n})):a.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);