"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8284],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>c,MDXProvider:()=>d,mdx:()=>v,useMDXComponents:()=>p,withMDXComponents:()=>s});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){return function(n){var t=p(n.components);return r.createElement(e,o({},n,{components:t}))}},p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=p(t),d=a,m=s["".concat(l,".").concat(d)]||s[d]||f[d]||o;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},80713:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>c,contentTitle:()=>s,metadata:()=>p,toc:()=>d,default:()=>m});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),l=t(55064),i=t(58215),u=["components"],c={},s=void 0,p={type:"mdx",permalink:"/docs/plugins/preferences/setup",source:"@site/src/embedded-pages/docs/plugins/preferences/setup.mdx"},d=[{value:"Android",id:"android",children:[]},{value:"iOS",id:"ios",children:[]}],f={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,u);return(0,o.mdx)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"This plugin is available for both Android and iOS."),(0,o.mdx)("h2",{id:"android"},"Android"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},'import com.facebook.flipper.plugins.sharedpreferences.SharedPreferencesFlipperPlugin;\n\nclient.addPlugin(\n    new SharedPreferencesFlipperPlugin(context, "my_shared_preference_file"));\n')),(0,o.mdx)("h2",{id:"ios"},"iOS"),(0,o.mdx)("p",null,"If you want to use the Shared Preferences plugin, you need to add ",(0,o.mdx)("inlineCode",{parentName:"p"},"FlipperKit/FlipperKitUserDefaultsPlugin")," to your Podfile."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-ruby"},"pod 'FlipperKit/FlipperKitUserDefaultsPlugin', '~>' + flipperkit_version\n")),(0,o.mdx)("p",null,"Initialize the plugin in the following way:"),(0,o.mdx)(l.Z,{defaultValue:"ios",values:[{label:"iOS",value:"ios"},{label:"Swift",value:"swift"}],mdxType:"Tabs"},(0,o.mdx)(i.Z,{value:"ios",mdxType:"TabItem"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-objectivec"},'#import <FlipperKitUserDefaultsPlugin/FKUserDefaultsPlugin.h>\n\n[client addPlugin:[[FKUserDefaultsPlugin alloc] initWithSuiteName:@"your_suitename"]];\n'))),(0,o.mdx)(i.Z,{value:"swift",mdxType:"TabItem"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-swift"},'import FlipperKit\n\nclient?.add(FKUserDefaultsPlugin.init(suiteName: "your_suitename"))\n')))))}m.isMDXComponent=!0},58215:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(67294);const a=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},55064:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(67294),a=t(79443);const o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var l=t(86010);const i="tabItem_1uMI",u="tabItemActive_2DSg";const c=function(e){var n,t=e.lazy,a=e.block,c=e.defaultValue,s=e.values,p=e.groupId,d=e.className,f=r.Children.toArray(e.children),m=null!=s?s:f.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=c?c:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value,b=o(),g=b.tabGroupChoices,y=b.setTabGroupChoices,h=(0,r.useState)(v),x=h[0],O=h[1],w=[];if(null!=p){var P=g[p];null!=P&&P!==x&&m.some((function(e){return e.value===P}))&&O(P)}var N=function(e){var n=e.currentTarget,t=w.indexOf(n),r=m[t].value;O(r),null!=p&&(y(p,r),setTimeout((function(){var e,t,r,a,o,l,i,c;(e=n.getBoundingClientRect(),t=e.top,r=e.left,a=e.bottom,o=e.right,l=window,i=l.innerHeight,c=l.innerWidth,t>=0&&o<=c&&a<=i&&r>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(u),setTimeout((function(){return n.classList.remove(u)}),2e3))}),150))},j=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=w.indexOf(e.target)+1;t=w[r]||w[0];break;case"ArrowLeft":var a=w.indexOf(e.target)-1;t=w[a]||w[w.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.default)("tabs",{"tabs--block":a},d)},m.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,className:(0,l.default)("tabs__item",i,{"tabs__item--active":x===n}),key:n,ref:function(e){return w.push(e)},onKeyDown:j,onFocus:N,onClick:N},null!=t?t:n)}))),t?(0,r.cloneElement)(f.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==x})}))))}},79443:(e,n,t)=>{t.d(n,{Z:()=>r});const r=(0,t(67294).createContext)(void 0)},86010:(e,n,t)=>{function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function a(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}t.r(n),t.d(n,{default:()=>a})}}]);