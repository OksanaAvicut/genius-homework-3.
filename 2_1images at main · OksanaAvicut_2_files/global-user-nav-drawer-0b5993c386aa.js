"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["global-user-nav-drawer"],{58809:(e,t,a)=>{var r=a(11110),n=a(74848),s=a(21728),i=a(38621),o=a(8338),c=a(47139),l=a(63867),d=a(30631),u=a(30729),h=a(96540),m=a(53949),p=a(44968),f=a(34407),y=a(97074),g=a(90524),x=a(62456),j=a(5225),_=a(70404),A=a(57572);async function S(e){return e.set("_method","put"),(await (0,A.DI)("/users/status",{method:"POST",headers:{"X-Requested-With":"XMLHttpRequest",Accept:"application/json"},body:e})).json()}function w(e){let t,a,r,o,c,d,u,p,f,y,x,j;let _=(0,s.c)(24),{onClose:A}=e,[w,b]=(0,h.useState)(!1),v=(0,h.useRef)(null),N=(0,h.useId)();_[0]!==A?(t=e=>{e.preventDefault(),A(S(new FormData(e.target)))},_[0]=A,_[1]=t):t=_[1];let I=t;_[2]!==A?(a=()=>{S(new FormData),A(Promise.resolve({}))},_[2]=A,_[3]=a):a=_[3];let P=a;_[4]===Symbol.for("react.memo_cache_sentinel")?(r=()=>{let e=v.current;if(!e)return;let t=function(){b(!0)};return e.addEventListener("load",t),()=>{e.removeEventListener("load",t)}},o=[v],_[4]=r,_[5]=o):(r=_[4],o=_[5]),(0,h.useEffect)(r,o),_[6]!==P?(c={buttonType:"normal",content:"Clear status",onClick:P},_[6]=P,_[7]=c):c=_[7];let U=!w;return _[8]!==N||_[9]!==U?(d={buttonType:"primary",type:"submit",content:"Set status",form:N,disabled:U},_[8]=N,_[9]=U,_[10]=d):d=_[10],_[11]!==c||_[12]!==d?(u=[c,d],_[11]=c,_[12]=d,_[13]=u):u=_[13],_[14]===Symbol.for("react.memo_cache_sentinel")?(p=(0,m.G)("user-status-dialog-include-fragment"),_[14]=p):p=_[14],_[15]===Symbol.for("react.memo_cache_sentinel")?(f=(0,n.jsx)("p",{className:"text-center mt-3","data-hide-on-error":!0,children:(0,n.jsx)(l.A,{})}),_[15]=f):f=_[15],_[16]===Symbol.for("react.memo_cache_sentinel")?(y=(0,n.jsxs)("include-fragment",{src:"/users/status",accept:"text/fragment+html",ref:v,...p,children:[f,(0,n.jsxs)("p",{className:"flash flash-error mb-0 mt-2","data-show-on-error":!0,hidden:!0,children:[(0,n.jsx)(i.AlertIcon,{}),"Sorry, something went wrong and we were not able to fetch the user settings form"]})]}),_[16]=y):y=_[16],_[17]!==N||_[18]!==I?(x=(0,n.jsx)("form",{id:N,onSubmit:I,className:"user-status-dialog-fragment js-user-status-container",children:y}),_[17]=N,_[18]=I,_[19]=x):x=_[19],_[20]!==A||_[21]!==x||_[22]!==u?(j=(0,n.jsx)(g.l,{width:"large",title:"Edit status",onClose:A,footerButtons:u,children:x}),_[20]=A,_[21]=x,_[22]=u,_[23]=j):j=_[23],j}try{w.displayName||(w.displayName="UserStatusDialog")}catch{}let b={emojiIcon:"styles-module__emojiIcon--AXyd_",emojiContainer:"styles-module__emojiContainer--yBvrp"};var v=a(20053);function N(e){let t,a;let r=(0,s.c)(11),{class:i}=e.attributes;if(r[0]!==i||r[1]!==e.attributes||r[2]!==e.imgPath||r[3]!==e.raw||r[4]!==e.tag){t=Symbol.for("react.early_return_sentinel");e:{let a=(0,v.$)(i,b.emojiIcon),s={...e.attributes};switch(delete s.class,e.tag){case"g-emoji":t=(0,h.createElement)(e.tag,{...s,class:a},e.raw);break e;case"img":{let i;r[6]!==s||r[7]!==a||r[8]!==e.imgPath?(i=(0,n.jsx)("img",{alt:"",src:e.imgPath,...s,className:a}),r[6]=s,r[7]=a,r[8]=e.imgPath,r[9]=i):i=r[9],t=i;break e}}}r[0]=i,r[1]=e.attributes,r[2]=e.imgPath,r[3]=e.raw,r[4]=e.tag,r[5]=t}else t=r[5];return t!==Symbol.for("react.early_return_sentinel")?t:(r[10]===Symbol.for("react.memo_cache_sentinel")?(a=(0,n.jsx)(n.Fragment,{}),r[10]=a):a=r[10],a)}try{N.displayName||(N.displayName="Emoji")}catch{}var I=a(68593);function P(e){let t,a,r;let o=(0,s.c)(7),{title:c,error:l,onClose:d}=e;return o[0]===Symbol.for("react.memo_cache_sentinel")?(t=(0,n.jsx)(I.A.Visual,{children:(0,n.jsx)(i.AlertIcon,{size:"medium",className:"fgColor-danger"})}),o[0]=t):t=o[0],o[1]!==l?(a=(0,n.jsx)(g.l.Body,{children:(0,n.jsxs)(I.A,{children:[t,l]})}),o[1]=l,o[2]=a):a=o[2],o[3]!==d||o[4]!==a||o[5]!==c?(r=(0,n.jsx)(g.l,{onClose:d,title:c,children:a}),o[3]=d,o[4]=a,o[5]=c,o[6]=r):r=o[6],r}try{P.displayName||(P.displayName="ErrorDialog")}catch{}var U=a(89323),L=a(87330),C=a(47767),E=a(47584);function T(e){let t,a,r;let o=(0,s.c)(13),{addAccountPath:c,canAddAccount:l,switchAccountPath:d,stashedAccounts:u,loginAccountPath:m,setError:p}=e,[f,y]=(0,h.useState)(!1),g=null===u,x=!g&&u.length>0;return o[0]===Symbol.for("react.memo_cache_sentinel")?(t=(0,n.jsx)(U.W.Anchor,{children:(0,n.jsx)(L.K,{icon:i.ArrowSwitchIcon,"aria-label":"Account switcher",variant:"invisible",tooltipDirection:"s"})}),o[0]=t):t=o[0],o[1]!==c||o[2]!==l||o[3]!==x||o[4]!==g||o[5]!==m||o[6]!==p||o[7]!==u||o[8]!==d?(a=g?(0,n.jsx)(R,{}):x?(0,n.jsx)(D,{stashedAccounts:u,canAddAccount:l,addAccountPath:c,switchAccountPath:d,loginAccountPath:m,setError:p}):(0,n.jsx)(k,{addAccountPath:c}),o[1]=c,o[2]=l,o[3]=x,o[4]=g,o[5]=m,o[6]=p,o[7]=u,o[8]=d,o[9]=a):a=o[9],o[10]!==f||o[11]!==a?(r=(0,n.jsxs)(U.W,{open:f,onOpenChange:y,children:[t,a]}),o[10]=f,o[11]=a,o[12]=r):r=o[12],r}function R(){let e;let t=(0,s.c)(1);return t[0]===Symbol.for("react.memo_cache_sentinel")?(e=(0,n.jsx)(U.W.Overlay,{align:"end",children:(0,n.jsx)(o.l,{children:(0,n.jsxs)(o.l.Item,{children:[(0,n.jsx)(o.l.LeadingVisual,{children:(0,n.jsx)(l.A,{size:"small"})}),"Loading..."]})})}),t[0]=e):e=t[0],e}function k(e){let t;let a=(0,s.c)(2),{addAccountPath:r}=e;return a[0]!==r?(t=(0,n.jsx)(U.W.Overlay,{align:"end",children:(0,n.jsx)(o.l,{children:(0,n.jsx)(O,{href:r})})}),a[0]=r,a[1]=t):t=a[1],t}function O(e){let t,a;let r=(0,s.c)(4),{href:c,inactive:l}=e,d=c||void 0,u=l||void 0;return r[0]===Symbol.for("react.memo_cache_sentinel")?(t=(0,n.jsx)(o.l.LeadingVisual,{children:(0,n.jsx)(i.PersonAddIcon,{})}),r[0]=t):t=r[0],r[1]!==d||r[2]!==u?(a=(0,n.jsxs)(o.l.LinkItem,{href:d,inactiveText:u,children:[t,"Add account"]}),r[1]=d,r[2]=u,r[3]=a):a=r[3],a}function D(e){let t,a,r,c,l,d,u;let h=(0,s.c)(20),{addAccountPath:m,canAddAccount:p,switchAccountPath:f,stashedAccounts:y,loginAccountPath:g,setError:x}=e;if(h[0]===Symbol.for("react.memo_cache_sentinel")?(t=(0,n.jsx)(o.l.GroupHeading,{children:"Switch account"}),h[0]=t):t=h[0],h[1]!==g||h[2]!==x||h[3]!==y||h[4]!==f){let e;h[6]!==g||h[7]!==x||h[8]!==f?(e=e=>"number"==typeof e.userSessionId?(0,n.jsx)(G,{switchAccountPath:f,account:e,setError:x},e.login):(0,n.jsx)(H,{loginAccountPath:g,account:e},e.login),h[6]=g,h[7]=x,h[8]=f,h[9]=e):e=h[9],a=y.map(e),h[1]=g,h[2]=x,h[3]=y,h[4]=f,h[5]=a}else a=h[5];h[10]===Symbol.for("react.memo_cache_sentinel")?(r=(0,n.jsx)(o.l.Divider,{}),h[10]=r):r=h[10],h[11]!==a?(c=(0,n.jsxs)(o.l.Group,{children:[t,a,r]}),h[11]=a,h[12]=c):c=h[12];let j=p?m:void 0,_=p?void 0:"Maximum accounts reached";return h[13]!==j||h[14]!==_?(l=(0,n.jsx)(O,{href:j,inactive:_}),h[13]=j,h[14]=_,h[15]=l):l=h[15],h[16]===Symbol.for("react.memo_cache_sentinel")?(d=(0,n.jsxs)(o.l.LinkItem,{href:"/logout",children:[(0,n.jsx)(o.l.LeadingVisual,{children:(0,n.jsx)(i.SignOutIcon,{})}),"Sign out..."]}),h[16]=d):d=h[16],h[17]!==c||h[18]!==l?(u=(0,n.jsx)(U.W.Overlay,{align:"end",width:"small",children:(0,n.jsxs)(o.l,{children:[c,l,d]})}),h[17]=c,h[18]=l,h[19]=u):u=h[19],u}function G(e){let t,a,r,i;let c=(0,s.c)(13),{account:l,switchAccountPath:d,setError:u}=e;return c[0]!==l.userSessionId||c[1]!==u||c[2]!==d?(t=()=>M(d,l.userSessionId,u),c[0]=l.userSessionId,c[1]=u,c[2]=d,c[3]=t):t=c[3],c[4]!==l.avatarUrl?(a=(0,n.jsx)(o.l.LeadingVisual,{children:(0,n.jsx)(x.r,{src:l.avatarUrl,size:20})}),c[4]=l.avatarUrl,c[5]=a):a=c[5],c[6]!==l.name?(r=(0,n.jsx)(o.l.Description,{truncate:!0,children:l.name}),c[6]=l.name,c[7]=r):r=c[7],c[8]!==l.login||c[9]!==t||c[10]!==a||c[11]!==r?(i=(0,n.jsxs)(o.l.Item,{onSelect:t,children:[a,l.login,r]}),c[8]=l.login,c[9]=t,c[10]=a,c[11]=r,c[12]=i):i=c[12],i}function H(e){let t,a,r,i,c;let l=(0,s.c)(12),{account:d,loginAccountPath:u}=e;if((0,C.zy)(),l[0]!==d.login||l[1]!==u){let e=E.fV.toString(),t=new URL(u,e);t.searchParams.set("login",d.login),t.searchParams.set("return_to",e),a=t.toString(),l[0]=d.login,l[1]=u,l[2]=a}else a=l[2];return t=a,l[3]!==d.avatarUrl?(r=(0,n.jsx)(o.l.LeadingVisual,{children:(0,n.jsx)(x.r,{src:d.avatarUrl,size:20,className:"inactive-user-avatar"})}),l[3]=d.avatarUrl,l[4]=r):r=l[4],l[5]!==d.name?(i=(0,n.jsx)(o.l.Description,{truncate:!0,children:d.name}),l[5]=d.name,l[6]=i):i=l[6],l[7]!==d.login||l[8]!==t||l[9]!==r||l[10]!==i?(c=(0,n.jsxs)(o.l.LinkItem,{href:t,children:[r,d.login,i]}),l[7]=d.login,l[8]=t,l[9]=r,l[10]=i,l[11]=c):c=l[11],c}async function M(e,t,a){try{let r=new FormData;r.append("user_session_id",String(t)),r.append("from","nav_panel");let n=await (0,A.DI)(e,{method:"POST",body:r,headers:{Accept:"application/json"}});if(n.ok){let e=await n.json();e.success?window.location.reload():"emu_sso_redirect"===e.reason&&e.redirect_to?window.location.href=e.redirect_to:a(F("An error has occurred while switching accounts. Please try again."))}else{let{error:e,reason:t}=await n.json();a(F(e,t))}}catch{a(F("An error occurred while switching accounts. Please try again."))}}function F(e,t){return{title:"Switch account",error:"enterprise access denied"===t?(0,n.jsx)(I.A.Description,{children:e}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(I.A.Heading,{children:"Unable to switch to the selected account."}),(0,n.jsx)(I.A.Description,{children:"Please try again. If the issue persists, try adding the account again."})]})}}try{T.displayName||(T.displayName="AccountSwitcher")}catch{}try{R.displayName||(R.displayName="AccountSwitcherOverlayLoading")}catch{}try{k.displayName||(k.displayName="AccountSwitcherOverlayEmpty")}catch{}try{O.displayName||(O.displayName="AddAccountLinkItem")}catch{}try{D.displayName||(D.displayName="AccountSwitcherOverlayHasAccounts")}catch{}try{G.displayName||(G.displayName="StashedAccountItem")}catch{}try{H.displayName||(H.displayName="InactiveStashedAccountItem")}catch{}var z=a(32057);let Y=(0,j.A)(async function(e){let t=await fetch(e);if(!t.ok)throw Error(`Failed to fetch data from ${e}`);return t.json()}),V={fetchError:!0,userStatus:{},hasUnseenFeatures:!1,stashedAccounts:[]};function W(e){let t,a,r;let i=(0,s.c)(12),{href:c,icon:l,analyticsCategory:d,analyticsAction:h,analyticsLabel:m,children:p}=e,f=void 0===d?"Global navigation":d,{sendClickAnalyticsEvent:y}=(0,_.S)();i[0]!==h||i[1]!==f||i[2]!==m||i[3]!==y?(t=()=>{y({category:f,action:h,label:m})},i[0]=h,i[1]=f,i[2]=m,i[3]=y,i[4]=t):t=i[4];let g=t;return i[5]!==l?(a=(0,n.jsx)(o.l.LeadingVisual,{children:(0,n.jsx)(u.A,{icon:l})}),i[5]=l,i[6]=a):a=i[6],i[7]!==p||i[8]!==c||i[9]!==g||i[10]!==a?(r=(0,n.jsxs)(o.l.LinkItem,{href:c,onClick:g,children:[a,p]}),i[7]=p,i[8]=c,i[9]=g,i[10]=a,i[11]=r):r=i[11],r}let B=(0,h.memo)(function(e){let t,a,r,c;let l=(0,s.c)(9),{lazyLoadItemData:d,onClick:h}=e;return l[0]===Symbol.for("react.memo_cache_sentinel")?(t=(0,m.G)("global-user-nav-set-status-item"),l[0]=t):t=l[0],l[1]!==d?.userStatus?(a=(0,n.jsx)(o.l.LeadingVisual,{children:d?.userStatus?.emojiAttributes?(0,n.jsx)(N,{...d?.userStatus.emojiAttributes}):(0,n.jsx)(u.A,{icon:i.SmileyIcon})}),l[1]=d?.userStatus,l[2]=a):a=l[2],l[3]!==d?(r=d?(0,n.jsx)(p.oG,{className:b.emojiContainer,unverifiedHTML:d.userStatus.messageHtml||"Set status"}):(0,n.jsx)(f.O,{height:"md"}),l[3]=d,l[4]=r):r=l[4],l[5]!==h||l[6]!==a||l[7]!==r?(c=(0,n.jsxs)(o.l.Item,{...t,onSelect:h,children:[a,r]}),l[5]=h,l[6]=a,l[7]=r,l[8]=c):c=l[8],c});function X(e){let t=(0,s.c)(4),a=e.lazyLoadItemData?.enterpriseTrialUrl;if(a){let e,r;return t[0]===Symbol.for("react.memo_cache_sentinel")?(e=(0,n.jsx)(o.l.TrailingVisual,{children:(0,n.jsx)(c.A,{variant:"primary",children:"Free"})}),t[0]=e):e=t[0],t[1]!==a?(r=(0,n.jsxs)(W,{href:a,icon:i.UploadIcon,analyticsCategory:"start_a_free_trial",analyticsAction:"click_to_set_up_enterprise_trial",analyticsLabel:"ref_loc:side_panel;ref_cta:try_enterprise",children:["Try Enterprise",e]}),t[1]=a,t[2]=r):r=t[2],r}{let e;return t[3]===Symbol.for("react.memo_cache_sentinel")?(e=(0,n.jsx)(W,{href:"/account/choose?action=upgrade",icon:i.UploadIcon,analyticsAction:"UPGRADE_PLAN",children:"Upgrade"}),t[3]=e):e=t[3],e}}function $(e){let t,a,r;let o=(0,s.c)(6),{onClose:c,login:d}=e;return o[0]===Symbol.for("react.memo_cache_sentinel")?(t={width:960},o[0]=t):t=o[0],o[1]!==d?(a=()=>(0,n.jsx)(g.l.Body,{className:"p-0",children:(0,n.jsxs)("include-fragment",{src:`/users/${d}/feature_previews`,children:[(0,n.jsx)("p",{className:"text-center mt-3","data-hide-on-error":!0,children:(0,n.jsx)(l.A,{})}),(0,n.jsxs)("p",{className:"flash flash-error mb-0 mt-2","data-show-on-error":!0,hidden:!0,children:[(0,n.jsx)(i.AlertIcon,{}),"Sorry, something went wrong and we were not able to fetch the feature previews"]})]})}),o[1]=d,o[2]=a):a=o[2],o[3]!==c||o[4]!==a?(r=(0,n.jsx)(g.l,{title:"Feature preview dialog",sx:t,onClose:c,renderBody:a}),o[3]=c,o[4]=a,o[5]=r):r=o[5],r}function q(e){let[t,a]=(0,h.useState)(null),[r,s]=(0,h.useState)(!1),[l,m]=(0,h.useState)(!1),{onClose:p,owner:f}=e,y=`/${f.login}`,{sendClickAnalyticsEvent:j}=(0,_.S)(),A=(0,h.useCallback)(()=>{s(!0),j({category:"Global navigation",action:"USER_STATUS"})},[j]),S=(0,h.useCallback)(async e=>{if(s(!1),e&&"string"!=typeof e&&t)try{let r=await e;a({...t,userStatus:r})}catch{}},[t]),b=(0,h.useCallback)(()=>{m(!0),j({category:"Global navigation",action:"FEATURE_PREVIEW"})},[j]);(0,h.useEffect)(()=>{t||(async()=>{try{let t=await Y(e.lazyLoadItemDataFetchUrl);a({fetchError:!1,...t})}catch{a(V)}})()},[e.lazyLoadItemDataFetchUrl,t]);let v=(0,h.useCallback)(({dialogLabelId:a})=>(0,n.jsxs)("div",{className:"d-flex pr-3 pl-3 pt-3",id:a,"aria-label":"User navigation",role:"heading","aria-level":1,children:[(0,n.jsx)("div",{className:"d-flex flex-1",children:(0,n.jsxs)("div",{className:"d-flex",children:[(0,n.jsx)(x.r,{src:f.avatarUrl,size:32}),(0,n.jsxs)("div",{className:"lh-condensed overflow-hidden d-flex flex-column flex-justify-center ml-2 f5 mr-auto",children:[(0,n.jsx)("div",{className:"text-bold",children:(0,n.jsx)(d.A,{title:f.login,maxWidth:175,children:f.login})}),(0,n.jsx)("div",{className:"fgColor-muted",children:(0,n.jsx)(d.A,{title:f.name,maxWidth:175,children:f.name})})]})]})}),e.showAccountSwitcher&&(0,n.jsx)(T,{canAddAccount:e.canAddAccount,addAccountPath:e.addAccountPath,switchAccountPath:e.switchAccountPath,stashedAccounts:t?.stashedAccounts??null,loginAccountPath:e.loginAccountPath,setError:I}),(0,n.jsx)(g.l.CloseButton,{onClose:()=>p("close-button")})]}),[p,f,t?.stashedAccounts,e.canAddAccount,e.addAccountPath,e.switchAccountPath,e.loginAccountPath,e.showAccountSwitcher]),[N,I]=(0,h.useState)(!1);return N?(0,n.jsx)(P,{...N,onClose:()=>I(!1)}):(0,n.jsxs)(g.l,{onClose:e.onClose,width:"medium",position:"right",renderHeader:v,children:[r&&(0,n.jsx)(w,{onClose:S}),l&&(0,n.jsx)($,{onClose:()=>m(!1),login:e.owner.login}),(0,n.jsxs)(o.l,{variant:"full",children:[(0,n.jsx)(B,{lazyLoadItemData:t,onClick:A}),(0,n.jsx)(o.l.Divider,{}),(0,n.jsx)(W,{href:y,icon:i.PersonIcon,analyticsAction:"PROFILE",children:"Your profile"}),(0,n.jsx)(W,{href:`${y}?tab=repositories`,icon:i.RepoIcon,analyticsAction:"YOUR_REPOSITORIES",children:"Your repositories"}),e.showCopilot&&(0,n.jsx)(W,{href:"/settings/copilot",icon:i.CopilotIcon,analyticsCategory:"try_copilot",analyticsAction:"click_to_try_copilot",analyticsLabel:"ref_loc:side_panel;ref_cta:your_copilot",children:"Your Copilot"}),(0,n.jsx)(W,{href:e.projectsPath,icon:i.ProjectIcon,analyticsAction:"YOUR_PROJECTS",children:"Your projects"}),(0,n.jsx)(W,{href:`${y}?tab=stars`,icon:i.StarIcon,analyticsAction:"YOUR_STARS",children:"Your stars"}),e.showGists&&(0,n.jsx)(W,{href:e.gistsUrl,icon:i.CodeSquareIcon,analyticsAction:"YOUR_GISTS",children:"Your gists"}),e.showOrganizations&&(0,n.jsx)(W,{href:"/settings/organizations",icon:i.OrganizationIcon,analyticsAction:"YOUR_ORGANIZATIONS",children:"Your organizations"}),e.showEnterprises&&(0,n.jsx)(W,{href:"/settings/enterprises",icon:i.GlobeIcon,analyticsCategory:"enterprises_more_discoverable",analyticsAction:"click_your_enterprises",analyticsLabel:"ref_loc:side_panel;ref_cta:your_enterprises;is_navigation_redesign:true",children:"Your enterprises"}),e.showEnterprise&&(0,n.jsx)(W,{href:e.yourEnterpriseUrl,icon:i.GlobeIcon,analyticsAction:"YOUR_ENTERPRISE",children:"Your enterprise"}),e.showSponsors&&(0,n.jsx)(W,{href:"/sponsors/accounts",icon:i.HeartIcon,analyticsAction:"SPONSORS",children:"Your sponsors"}),(0,n.jsx)(o.l.Divider,{}),(0,n.jsx)(z.O,{...e.createMenuProps}),e.showUpgrade&&(0,n.jsx)(X,{lazyLoadItemData:t}),e.showFeaturesPreviews&&(0,n.jsxs)(o.l.Item,{onSelect:b,children:[(0,n.jsx)(o.l.LeadingVisual,{children:(0,n.jsx)(u.A,{icon:i.BeakerIcon})}),t?.hasUnseenFeatures&&(0,n.jsx)(o.l.TrailingVisual,{children:(0,n.jsx)(c.A,{variant:"accent",children:"New"})}),(0,n.jsx)("span",{children:"Feature preview"})]}),(0,n.jsx)(W,{href:"/settings/profile",icon:i.GearIcon,analyticsAction:"SETTINGS",children:"Settings"}),e.showEnterpriseSettings&&(0,n.jsx)(W,{href:e.enterpriseSettingsUrl,icon:i.GlobeIcon,analyticsAction:"ENTERPRISE_SETTINGS",children:"Enterprise settings"}),(0,n.jsx)(o.l.Divider,{}),(0,n.jsx)(W,{href:"https://github.com/home",icon:i.BrowserIcon,analyticsAction:"MARKETINGWEBSITE",children:"GitHub Website"}),(0,n.jsx)(W,{href:e.docsUrl,icon:i.BookIcon,analyticsAction:"DOCS",children:"GitHub Docs"}),(0,n.jsx)(W,{href:e.supportUrl,icon:i.PeopleIcon,analyticsAction:"SUPPORT",children:"GitHub Support"}),(0,n.jsx)(W,{href:"https://community.github.com",icon:i.CommentDiscussionIcon,analyticsAction:"COMMUNITY",children:"GitHub Community"}),(0,n.jsx)(o.l.Divider,{}),(0,n.jsx)(W,{href:"/logout",icon:i.SignOutIcon,analyticsAction:"LOGOUT",children:"Sign out"})]})]})}function J(e){let{open:t,setOpen:a,ref:r}=(0,y.Mm)(e.reactPartialAnchor),s=(0,h.useCallback)(()=>{a(!1),setTimeout(()=>{r.current?.focus()})},[a,r]);return t?(0,n.jsx)(q,{...e,onClose:s}):(0,n.jsx)(n.Fragment,{})}function K(e){let t;let a=(0,s.c)(4);if(e.reactPartialAnchor){let t;return a[0]!==e?(t=(0,n.jsx)(J,{...e,reactPartialAnchor:e.reactPartialAnchor}),a[0]=e,a[1]=t):t=a[1],t}return a[2]!==e?(t=(0,n.jsx)(q,{...e}),a[2]=e,a[3]=t):t=a[3],t}try{W.displayName||(W.displayName="NavLink")}catch{}try{B.displayName||(B.displayName="UserStatusNavItem")}catch{}try{X.displayName||(X.displayName="UpgradeNavItem")}catch{}try{$.displayName||($.displayName="FeaturePreviewDialog")}catch{}try{q.displayName||(q.displayName="GlobalUserNavDrawerDialog")}catch{}try{J.displayName||(J.displayName="ExternallyAnchoredGlobalUserNavDrawer")}catch{}try{K.displayName||(K.displayName="GlobalUserNavDrawer")}catch{}(0,r.k)("global-user-nav-drawer",{Component:K})},53949:(e,t,a)=>{a.d(t,{G:()=>r});let r=e=>({})},57572:(e,t,a)=>{function r(e,t={}){!function(e){if(new URL(e,window.location.origin).origin!==window.location.origin)throw Error("Can not make cross-origin requests from verifiedFetch")}(e);let a=function(e){let t=new URL(e,window.location.origin),a=new URL(window.location.href,window.location.origin),r=a.searchParams.get("_features");r&&!t.searchParams.has("_features")&&t.searchParams.set("_features",r);let n=a.searchParams.get("_tracing");return n&&!t.searchParams.has("_tracing")&&t.searchParams.set("_tracing",n),e.startsWith("/")?`${t.pathname}${t.search}`:t.href}(e),n={...t.headers,"GitHub-Verified-Fetch":"true","X-Requested-With":"XMLHttpRequest"};return fetch(a,{...t,headers:n})}function n(e,t){let a={...t?.headers??{},Accept:"application/json","Content-Type":"application/json"},n=t?.body?JSON.stringify(t.body):void 0;return r(e,{...t,body:n,headers:a})}function s(e,t={}){let a={...t.headers,"GitHub-Is-React":"true"};return r(e,{...t,headers:a})}function i(e,t){let a={...t?.headers??{},"GitHub-Is-React":"true"};return n(e,{...t,headers:a})}a.d(t,{DI:()=>r,QJ:()=>s,Sr:()=>i,lS:()=>n})},62456:(e,t,a)=>{a.d(t,{r:()=>o});var r=a(74848),n=a(47584),s=a(47258),i=a(96540);let o=(0,i.forwardRef)(function({src:e,size:t=20,...a},o){let c=(0,i.useMemo)(()=>{let a=new URL(e,n.fV.origin);return a.searchParams.has("size")||a.searchParams.has("s")||a.searchParams.set("size",String(2*Number(t))),a.toString()},[e,t]);return(0,r.jsx)(s.A,{ref:o,src:c,size:t,"data-testid":"github-avatar",...a})});try{o.displayName||(o.displayName="GitHubAvatar")}catch{}},44968:(e,t,a)=>{a.d(t,{mo:()=>m,oG:()=>d,yx:()=>u});var r,n=a(74848),s=a(75177),i=a(52464),o=a(99418),c=a(96540);function l(e){if("html"in e&&void 0!==e.html){let{html:t,...a}=e;return{safeHTML:t,props:a}}let{unverifiedHTML:t,unverifiedHTMLConfig:a,...r}=e,n={...a,RETURN_DOM:!1,RETURN_DOM_FRAGMENT:!1};return{safeHTML:o.default.sanitize(t,n),props:r}}let d=h(s.A);d.displayName="SafeHTMLBox";let u=h(i.A);function h(e){return(0,c.forwardRef)((t,a)=>{let{safeHTML:r,props:s}=l(t);return(0,n.jsx)(e,{ref:a,...s,dangerouslySetInnerHTML:r?{__html:r}:void 0})})}u.displayName="SafeHTMLText";let m=(0,c.forwardRef)((e,t)=>{let{safeHTML:a,props:r}=l(e);return(0,n.jsx)("div",{ref:t,...r,dangerouslySetInnerHTML:a?{__html:a}:void 0})});m.displayName="SafeHTMLDiv";try{(r=SafeHTMLComponent).displayName||(r.displayName="SafeHTMLComponent")}catch{}},34407:(e,t,a)=>{a.d(t,{O:()=>u});var r=a(75177),n=a(59299),s=a(44999),i=a(38267);let o=(0,i.i7)(["0%{transform:translateX(-100%);}50%{transform:translateX(100%);}100%{transform:translateX(100%);}"]),c=(0,i.AH)(["animation:"," 1.5s infinite linear;"],o),l=(0,i.i7)(["0%{opacity:.3;}10%{opacity:1;}100%{opacity:.3;}"]),d=(0,i.AH)(["animation:"," 2s infinite linear;"],l),u=(0,i.Ay)(r.A).withConfig({displayName:"LoadingSkeleton",componentId:"sc-bcbf24f9-0"})(["position:relative;overflow:hidden;mask-image:radial-gradient(white,black);",";&::after{",";background:linear-gradient(90deg,transparent,",",transparent);content:'';position:absolute;transform:translateX(-100%);bottom:0;left:0;right:0;top:0;}background-color:",";border-radius:",";display:block;height:1.2em;"," width:",";height:",";",""],({animationStyle:e})=>"pulse"===e&&d,({animationStyle:e})=>"pulse"!==e&&c,(0,n.Jt)("colors.neutral.subtle"),(0,n.Jt)("colors.neutral.subtle"),({theme:e,variant:t})=>{switch(t){case"rounded":return(0,n.Jt)("radii.1")(e);case"pill":return"100px";case"elliptical":return"50%";default:return"0"}},({variant:e})=>"elliptical"===e&&{borderRadius:"50%"},({width:e})=>{switch(e){case"random":return`${Math.floor(40*Math.random()+40)}%`;case"xl":return"32px";case"lg":return"24px";case"md":return"20px";case"sm":return"16px";default:return e}},({height:e})=>{switch(e){case"xl":return"32px";case"lg":return"24px";case"md":return"20px";case"sm":return"16px";default:return e}},s.A);try{u.displayName||(u.displayName="LoadingSkeleton")}catch{}}},e=>{var t=t=>e(e.s=t);e.O(0,["primer-react","react-core","react-lib","octicons-react","vendors-node_modules_primer_behaviors_dist_esm_index_mjs","vendors-node_modules_emotion_is-prop-valid_dist_emotion-is-prop-valid_esm_js-node_modules_emo-62da9f","vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_stacktrace-parser_dist_s-e7dcdd","vendors-node_modules_oddbird_popover-polyfill_dist_popover-fn_js","vendors-node_modules_dompurify_dist_purify_es_mjs","ui_packages_failbot_failbot_ts","ui_packages_promise-with-resolvers-polyfill_promise-with-resolvers-polyfill_ts-ui_packages_re-8d43b0"],()=>t(58809)),e.O()}]);
//# sourceMappingURL=global-user-nav-drawer-add1fb506b9e.js.map