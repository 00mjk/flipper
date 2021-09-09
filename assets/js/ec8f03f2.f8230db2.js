"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2902],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>d,MDXProvider:()=>u,mdx:()=>g,useMDXComponents:()=>c,withMDXComponents:()=>p});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=i.createContext({}),p=function(e){return function(t){var n=c(t.components);return i.createElement(e,r({},t,{components:n}))}},c=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,h=p["".concat(l,".").concat(u)]||p[u]||m[u]||r;return n?i.createElement(h,s(s({ref:t},d),{},{components:n})):i.createElement(h,s({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var d=2;d<r;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},15257:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>o,metadata:()=>d,toc:()=>p,default:()=>u});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),l=["components"],s={id:"js-plugin-api",title:"Desktop Plugin API"},o=void 0,d={unversionedId:"extending/js-plugin-api",id:"extending/js-plugin-api",isDocsHomePage:!1,title:"Desktop Plugin API",description:"The APIs shown here are deprecated. The APIs exposed from flipper-plugin should be preferred instead.",source:"@site/../docs/extending/js-plugin-api.mdx",sourceDirName:"extending",slug:"/extending/js-plugin-api",permalink:"/docs/extending/js-plugin-api",editUrl:"https://github.com/facebook/flipper/blob/main/website/../docs/extending/js-plugin-api.mdx",tags:[],version:"current",frontMatter:{id:"js-plugin-api",title:"Desktop Plugin API"},sidebar:"extending",previous:{title:"UI Components",permalink:"/docs/extending/ui-components"},next:{title:"Create Table Plugin",permalink:"/docs/extending/create-table-plugin"}},p=[{value:"init()",id:"init",children:[]},{value:"Client",id:"client",children:[{value:"call",id:"call",children:[]},{value:"subscribe",id:"subscribe",children:[]},{value:"supportsMethod",id:"supportsmethod",children:[]},{value:"send (DEPRECATED)",id:"send-deprecated",children:[]}]},{value:"Props",id:"props",children:[{value:"persistedState",id:"persistedstate",children:[]},{value:"setPersistedState",id:"setpersistedstate",children:[]},{value:"selectPlugin",id:"selectplugin",children:[]},{value:"deepLinkPayload",id:"deeplinkpayload",children:[]},{value:"isArchivedDevice",id:"isarchiveddevice",children:[]}]},{value:"Background Plugins",id:"background-plugins",children:[]},{value:"Notifications",id:"notifications",children:[]},{value:"Type Parameters",id:"type-parameters",children:[]}],c={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.mdx)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("div",{class:"warning"},"The APIs shown here are deprecated. The APIs exposed from [`flipper-plugin`](/docs/extending/flipper-plugin) should be preferred instead."),(0,r.mdx)("div",{class:"warning"},(0,r.mdx)("p",null,"This page describes the JavaScript API that is used to implement plugins inside the Flipper Desktop application. For the JavaScript API that can be used inside React Native to communicate with the Flipper Desktop, see ",(0,r.mdx)("a",{parentName:"p",href:"/docs/extending/create-plugin"},"Client Plugin API"),".")),(0,r.mdx)("p",null,"Provided a plugin is setup as defined in ",(0,r.mdx)("a",{parentName:"p",href:"/docs/extending/desktop-plugin-structure"},"Desktop Plugin Development"),", the basic requirement of a Flipper plugin is that ",(0,r.mdx)("inlineCode",{parentName:"p"},"index.tsx")," exports a default class that extends ",(0,r.mdx)("inlineCode",{parentName:"p"},"FlipperPlugin"),"."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"FlipperPlugin")," is an extension of ",(0,r.mdx)("inlineCode",{parentName:"p"},"React.Component")," with extra Flipper-related functionality. This means to define the UI of your plugin, you just need to implement this React component."),(0,r.mdx)("p",null,"Below is a reference of the APIs available to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"FlipperPlugin")," class."),(0,r.mdx)("h2",{id:"init"},"init()"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"FlipperPlugin")," has an ",(0,r.mdx)("inlineCode",{parentName:"p"},"init()")," method which can be overridden by plugins. Use this to make any initial calls to the client, and set up subscriptions. Only after ",(0,r.mdx)("inlineCode",{parentName:"p"},"init()")," is called will the ",(0,r.mdx)("inlineCode",{parentName:"p"},"client")," object be set."),(0,r.mdx)("h2",{id:"client"},"Client"),(0,r.mdx)("p",null,"This object is provided for communicating with the client plugin, and is accessible using ",(0,r.mdx)("inlineCode",{parentName:"p"},"this.client")," inside ",(0,r.mdx)("inlineCode",{parentName:"p"},"FlipperPlugin")," after ",(0,r.mdx)("inlineCode",{parentName:"p"},"init()")," has been called. Methods called on it will be routed to the client plugin with the same identifier as the JS plugin."),(0,r.mdx)("h3",{id:"call"},"call"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"client.call(method: string, params: Object): Promise<Object>")),(0,r.mdx)("p",null,"Call a method on your client plugin implementation. Call ",(0,r.mdx)("inlineCode",{parentName:"p"},".catch()")," on the returned promise to handle any errors returned from the client."),(0,r.mdx)("h3",{id:"subscribe"},"subscribe"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"client.subscribe(method: string, callback: (Object => void)): void")),(0,r.mdx)("p",null,"Subscribe to messages sent proactively from the client plugin."),(0,r.mdx)("h3",{id:"supportsmethod"},"supportsMethod"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"client.supportsMethod(method: string): Promise<Boolean>")),(0,r.mdx)("p",null,"Resolves to true if the client supports the specified method. Useful when adding functionality to existing plugins, when connectivity to older clients is still required. Also useful when client plugins are implemented on multitple platforms and don't all have feature parity."),(0,r.mdx)("h3",{id:"send-deprecated"},"send (DEPRECATED)"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"client.send(method, params): void")),(0,r.mdx)("p",null,"Use call instead which allows error handling and tracking."),(0,r.mdx)("h2",{id:"props"},"Props"),(0,r.mdx)("p",null,"Since ",(0,r.mdx)("inlineCode",{parentName:"p"},"FlipperClient")," inherits from ",(0,r.mdx)("inlineCode",{parentName:"p"},"React.Component")," we've defined some props that are provided. The main ones are explained below. Consult the code for the full set."),(0,r.mdx)("h3",{id:"persistedstate"},"persistedState"),(0,r.mdx)("p",null,"As well as React state, a FlipperPlugin also has persisted state. This state is retained even when the plugin is not active, for example when the user is using a different plugin, or when a client is temporarily disconnected, however it is not persisted across restarts of Flipper (by default)."),(0,r.mdx)("p",null,"Like React state, it should ",(0,r.mdx)("strong",{parentName:"p"},"never")," be modified directly. Instead, you should use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"setPersistedState")," prop."),(0,r.mdx)("p",null,"If using persisted state, make sure to set a ",(0,r.mdx)("strong",{parentName:"p"},"static")," ",(0,r.mdx)("inlineCode",{parentName:"p"},"defaultPersistedState")," in your class, so that the state is correctly initialized."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"static defaultPersistedState = {myValue: 55};")),(0,r.mdx)("h3",{id:"setpersistedstate"},"setPersistedState"),(0,r.mdx)("p",null,"A callback for updating persisted state. Similar to React's ",(0,r.mdx)("inlineCode",{parentName:"p"},"setState"),", you can pass either a complete PersistedState or a partial one that will be merged with the current persisted state."),(0,r.mdx)("p",null,"Persisted state can also be modified when a plugin is not active. See ",(0,r.mdx)("a",{parentName:"p",href:"#background-plugins"},"Background Plugins")," for details."),(0,r.mdx)("h3",{id:"selectplugin"},"selectPlugin"),(0,r.mdx)("p",null,"A callback for deep-linking to another plugin. When called, Flipper will switch from the current active plugin to the one specified and include a payload to provide context for the receiving plugin."),(0,r.mdx)("h3",{id:"deeplinkpayload"},"deepLinkPayload"),(0,r.mdx)("p",null,"When a plugin is activated through a deep-link, this prop will contain the payload, allowing the plugin to highlight some particular data, or perform an action for example. A good time to check for the deepLinkPayload is in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"componentDidMount")," React callback."),(0,r.mdx)("h3",{id:"isarchiveddevice"},"isArchivedDevice"),(0,r.mdx)("p",null,"Informs the plugin whether or not the client is archived, and therefore not currently connected."),(0,r.mdx)("h2",{id:"background-plugins"},"Background Plugins"),(0,r.mdx)("p",null,"Sometimes it's desirable for a plugin to be able to process incoming messages from the client even when inactive."),(0,r.mdx)("p",null,"To do this, define a static ",(0,r.mdx)("inlineCode",{parentName:"p"},"persistedStateReducer")," function in the plugin class:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-typescript"},"static persistedStateReducer<PersistedState>(\n    persistedState: PersistedState,\n    method: string,\n    data: Object\n  ): PersistedState\n")),(0,r.mdx)("p",null,"The job of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"persistedStateReducer")," is to merge incoming data into the state, so that next time the plugin is activated, the persisted state will be ready.\nIf a plugin has a ",(0,r.mdx)("inlineCode",{parentName:"p"},"persistedStateReducer"),", and the plugin is not open in flipper, incoming messages are queued until the plugin is opened."),(0,r.mdx)("p",null,"The number of events that are cached for a plugin is controlled by the optional static field ",(0,r.mdx)("inlineCode",{parentName:"p"},"maxQueueSize"),", which defaults to ",(0,r.mdx)("inlineCode",{parentName:"p"},"10000")," events."),(0,r.mdx)("div",{class:"warning"},(0,r.mdx)("p",null,"Note that if a plugin is not starred by the user, it will not receive any messages when it is not selected by the user. Even when it has a ",(0,r.mdx)("inlineCode",{parentName:"p"},"persistedStateReducer"),". This prevents plugins that are not actively used by the user from wasting a lot of CPU / memory.")),(0,r.mdx)("p",null,"The data that is produced from ",(0,r.mdx)("inlineCode",{parentName:"p"},"persistedStateReducer")," should be immutable, but also structurally sharing unchanged parts of the state with the previous state to avoid performance hiccups. To simplify this process we recommend using the ",(0,r.mdx)("a",{parentName:"p",href:"https://immerjs.github.io/immer/docs/introduction"},"Immer"),' package.\nImmer makes it possible to keep the reducer concise by directly supporting "writing" to the current state, and keeping track of that in the background.\nAlso it will guarantee that there are no accidental data manipulations by freezing the produced state.'),(0,r.mdx)("p",null,"You can directly ",(0,r.mdx)("inlineCode",{parentName:"p"},'import {produce} from "flipper"')," so there is no need to add Immer as additional dependency."),(0,r.mdx)("p",null,"A quick example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-typescript"},'static persistedStateReducer(persistedState, method, data) {\n  return produce(persistedState, draft => {\n    if (method.name === "newRecord") {\n      draft.lastRecordReceived = Date.now();\n      draft.records.push(data);\n    }\n  });\n}\n')),(0,r.mdx)("h2",{id:"notifications"},"Notifications"),(0,r.mdx)("p",null,"Plugins can publish system notifications to alert the user of something. This is particularly useful when the plugin isn't the current active plugin. All notifications are aggregated in Flipper's notifications pane, accessible from the sidebar."),(0,r.mdx)("p",null,"A notification should provide actionable and high-signal information for important events the user is likely to take action on. Notifications are generated from the data in your persistedState. To trigger notifications you need to implement a static function ",(0,r.mdx)("inlineCode",{parentName:"p"},"getActiveNotifications"),". This function should return all currently active notifications. To invalidate a notification, you simply stop including it in the result."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"static getActiveNotifications(\n    persistedState: PersistedState\n  ): Array<Notification>\n")),(0,r.mdx)("p",null,"When the user clicks on a notification, they will be sent back to your plugin with the ",(0,r.mdx)("a",{parentName:"p",href:"#deeplinkpayload"},"deepLinkPayload")," equal to the notification's action."),(0,r.mdx)("h2",{id:"type-parameters"},"Type Parameters"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"FlipperPlugin<S, A, P>")," can optionally take the following type parameters. It is highly recommended you provide them to benefit from type safety, but you can pass ",(0,r.mdx)("inlineCode",{parentName:"p"},"any")," when not using these features."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"State"),": Specifies the type of the FlipperPlugin state. A ",(0,r.mdx)("inlineCode",{parentName:"p"},"FlipperPlugin")," is a React component, and this is equivalent to the React state type parameter."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Actions"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"FlipperPlugin")," has an infrequently used dispatchAction mechanism allowing your plugin dispatch actions and reduce state in a redux-like manner. This specifies the type of actions that can be dispatched."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"PersistedState"),": This specifies the type of the persisted state of the plugin."))}u.isMDXComponent=!0}}]);