"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[18],{4430:function(e,t,l){l.d(t,{z:function(){return filterDOMProps}});var o=new Set(["id","type","style","title","role","tabIndex","htmlFor","width","height","abbr","accept","acceptCharset","accessKey","action","allowFullScreen","allowTransparency","alt","async","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","challenge","charset","checked","cite","class","className","cols","colSpan","command","content","contentEditable","contextMenu","controls","coords","crossOrigin","data","dateTime","default","defer","dir","disabled","download","draggable","dropzone","encType","for","form","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","headers","hidden","high","href","hrefLang","httpEquiv","icon","inputMode","isMap","itemId","itemProp","itemRef","itemScope","itemType","kind","label","lang","list","loop","manifest","max","maxLength","media","mediaGroup","method","min","minLength","multiple","muted","name","noValidate","open","optimum","pattern","ping","placeholder","poster","preload","radioGroup","referrerPolicy","readOnly","rel","required","rows","rowSpan","sandbox","scope","scoped","scrolling","seamless","selected","shape","size","sizes","slot","sortable","span","spellCheck","src","srcDoc","srcSet","start","step","target","translate","typeMustMatch","useMap","value","wmode","wrap"]),n=new Set(["onCopy","onCut","onPaste","onLoad","onError","onWheel","onScroll","onCompositionEnd","onCompositionStart","onCompositionUpdate","onKeyDown","onKeyPress","onKeyUp","onFocus","onBlur","onChange","onInput","onSubmit","onClick","onContextMenu","onDoubleClick","onDrag","onDragEnd","onDragEnter","onDragExit","onDragLeave","onDragOver","onDragStart","onDrop","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onPointerDown","onPointerEnter","onPointerLeave","onPointerUp","onSelect","onTouchCancel","onTouchEnd","onTouchMove","onTouchStart","onAnimationStart","onAnimationEnd","onAnimationIteration","onTransitionEnd"]),i=/^(data-.*)$/,r=/^(aria-.*)$/,s=/^(on[A-Z].*)$/;function filterDOMProps(e,t={}){let{labelable:l=!0,enabled:a=!0,propNames:c,omitPropNames:u,omitEventNames:d}=t,f={};if(!a)return e;for(let t in e)!((null==u?void 0:u.has(t))||(null==d?void 0:d.has(t))&&s.test(t)||s.test(t)&&!n.has(t))&&(Object.prototype.hasOwnProperty.call(e,t)&&(o.has(t)||l&&r.test(t)||(null==c?void 0:c.has(t))||i.test(t))||s.test(t))&&(f[t]=e[t]);return f}},262:function(e,t,l){l.d(t,{PB:function(){return dataAttr},Ts:function(){return o}});var o=!1,dataAttr=e=>e?"true":void 0},8103:function(e,t,l){l.d(t,{Cs:function(){return $880e95eb8b93ba9a$export$ecf600387e221c37},_t:function(){return $982254629710d113$export$b95089534ab7c1fd},gq:function(){return $ae20dd8cbca75726$export$d6daf82dcd84e87c}});var o=l(3935),n=l(7294),i=l(8628),r=l(8974),s=l(2290),a=l(3175);function $feb5ffebff200149$export$d3e3bd3e26688c04(e){return(0,r.ad)()?e.altKey:e.ctrlKey}function $feb5ffebff200149$export$16792effe837dba3(e){return(0,r.V5)()?e.metaKey:e.ctrlKey}function $fb3050f43d946246$export$e32c88dfddc6e1d8(e){let{keyboardDelegate:t,selectionManager:l,onTypeSelect:o}=e,i=(0,n.useRef)({search:"",timeout:null}).current;return{typeSelectProps:{onKeyDownCapture:t.getKeyForSearch?e=>{let n=$fb3050f43d946246$var$getStringForKey(e.key);if(!n||e.ctrlKey||e.metaKey||!e.currentTarget.contains(e.target))return;" "!==n||!(i.search.trim().length>0)||(e.preventDefault(),"continuePropagation"in e||e.stopPropagation()),i.search+=n;let r=t.getKeyForSearch(i.search,l.focusedKey);null==r&&(r=t.getKeyForSearch(i.search)),null!=r&&(l.setFocusedKey(r),o&&o(r)),clearTimeout(i.timeout),i.timeout=setTimeout(()=>{i.search=""},1e3)}:null}}}function $fb3050f43d946246$var$getStringForKey(e){return 1!==e.length&&/^[A-Z]/i.test(e)?"":e}function $ae20dd8cbca75726$export$d6daf82dcd84e87c(e){let t,{selectionManager:l,keyboardDelegate:c,ref:u,autoFocus:d=!1,shouldFocusWrap:f=!1,disallowEmptySelection:h=!1,disallowSelectAll:y=!1,selectOnFocus:p="replace"===l.selectionBehavior,disallowTypeAhead:g=!1,shouldUseVirtualFocus:b,allowsTabNavigation:$=!1,isVirtualized:K,scrollRef:v=u,linkBehavior:m="action"}=e,{direction:S}=(0,a.bU)(),x=(0,r.tv)(),w=(0,n.useRef)({top:0,left:0});(0,r.zX)(v,"scroll",K?null:()=>{w.current={top:v.current.scrollTop,left:v.current.scrollLeft}});let k=(0,n.useRef)(d);(0,n.useEffect)(()=>{if(k.current){let e=null;"first"===d&&(e=c.getFirstKey()),"last"===d&&(e=c.getLastKey());let t=l.selectedKeys;if(t.size){for(let o of t)if(l.canSelectItem(o)){e=o;break}}l.setFocused(!0),l.setFocusedKey(e),null!=e||b||(0,i.ex)(u.current)}},[]);let C=(0,n.useRef)(l.focusedKey);(0,n.useEffect)(()=>{let e=(0,s.Jz)();if(l.isFocused&&null!=l.focusedKey&&(null==v?void 0:v.current)){let t=v.current.querySelector(`[data-key="${CSS.escape(l.focusedKey.toString())}"]`);t&&("keyboard"===e||k.current)&&(K||(0,r.zT)(v.current,t),(0,r.Gt)(t,{containingElement:u.current}))}l.isFocused&&null==l.focusedKey&&null!=C.current&&(0,i.ex)(u.current),C.current=l.focusedKey,k.current=!1},[K,v,l.focusedKey,l.isFocused,u]);let F={onKeyDown:e=>{var t,n,s,a,d,g,b,K;if(e.altKey&&"Tab"===e.key&&e.preventDefault(),!u.current.contains(e.target))return;let navigateToKey=(t,n)=>{if(null!=t){if(l.isLink(t)&&"selection"===m&&p&&!$feb5ffebff200149$export$d3e3bd3e26688c04(e)){(0,o.flushSync)(()=>{l.setFocusedKey(t,n)});let i=v.current.querySelector(`[data-key="${CSS.escape(t.toString())}"]`);x.open(i,e);return}l.setFocusedKey(t,n),l.isLink(t)&&"override"===m||(e.shiftKey&&"multiple"===l.selectionMode?l.extendSelection(t):p&&!$feb5ffebff200149$export$d3e3bd3e26688c04(e)&&l.replaceSelection(t))}};switch(e.key){case"ArrowDown":if(c.getKeyBelow){e.preventDefault();let o=null!=l.focusedKey?c.getKeyBelow(l.focusedKey):null===(t=c.getFirstKey)||void 0===t?void 0:t.call(c);null==o&&f&&(o=null===(n=c.getFirstKey)||void 0===n?void 0:n.call(c,l.focusedKey)),navigateToKey(o)}break;case"ArrowUp":if(c.getKeyAbove){e.preventDefault();let t=null!=l.focusedKey?c.getKeyAbove(l.focusedKey):null===(s=c.getLastKey)||void 0===s?void 0:s.call(c);null==t&&f&&(t=null===(a=c.getLastKey)||void 0===a?void 0:a.call(c,l.focusedKey)),navigateToKey(t)}break;case"ArrowLeft":if(c.getKeyLeftOf){e.preventDefault();let t=c.getKeyLeftOf(l.focusedKey);null==t&&f&&(t="rtl"===S?null===(d=c.getFirstKey)||void 0===d?void 0:d.call(c,l.focusedKey):null===(g=c.getLastKey)||void 0===g?void 0:g.call(c,l.focusedKey)),navigateToKey(t,"rtl"===S?"first":"last")}break;case"ArrowRight":if(c.getKeyRightOf){e.preventDefault();let t=c.getKeyRightOf(l.focusedKey);null==t&&f&&(t="rtl"===S?null===(b=c.getLastKey)||void 0===b?void 0:b.call(c,l.focusedKey):null===(K=c.getFirstKey)||void 0===K?void 0:K.call(c,l.focusedKey)),navigateToKey(t,"rtl"===S?"last":"first")}break;case"Home":if(c.getFirstKey){e.preventDefault();let t=c.getFirstKey(l.focusedKey,$feb5ffebff200149$export$16792effe837dba3(e));l.setFocusedKey(t),$feb5ffebff200149$export$16792effe837dba3(e)&&e.shiftKey&&"multiple"===l.selectionMode?l.extendSelection(t):p&&l.replaceSelection(t)}break;case"End":if(c.getLastKey){e.preventDefault();let t=c.getLastKey(l.focusedKey,$feb5ffebff200149$export$16792effe837dba3(e));l.setFocusedKey(t),$feb5ffebff200149$export$16792effe837dba3(e)&&e.shiftKey&&"multiple"===l.selectionMode?l.extendSelection(t):p&&l.replaceSelection(t)}break;case"PageDown":c.getKeyPageBelow&&(e.preventDefault(),navigateToKey(c.getKeyPageBelow(l.focusedKey)));break;case"PageUp":c.getKeyPageAbove&&(e.preventDefault(),navigateToKey(c.getKeyPageAbove(l.focusedKey)));break;case"a":$feb5ffebff200149$export$16792effe837dba3(e)&&"multiple"===l.selectionMode&&!0!==y&&(e.preventDefault(),l.selectAll());break;case"Escape":e.preventDefault(),h||l.clearSelection();break;case"Tab":if(!$){if(e.shiftKey)u.current.focus();else{let e,t,l=(0,i.QL)(u.current,{tabbable:!0});do(t=l.lastChild())&&(e=t);while(t);e&&!e.contains(document.activeElement)&&(0,r.Ao)(e)}}}},onFocus:e=>{if(l.isFocused){e.currentTarget.contains(e.target)||l.setFocused(!1);return}if(e.currentTarget.contains(e.target)){if(l.setFocused(!0),null==l.focusedKey){var t,o,n;let i=e.relatedTarget;null!=(n=i&&e.currentTarget.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_FOLLOWING?null!==(t=l.lastSelectedKey)&&void 0!==t?t:c.getLastKey():null!==(o=l.firstSelectedKey)&&void 0!==o?o:c.getFirstKey())&&(l.setFocusedKey(n),p&&l.replaceSelection(n))}else K||(v.current.scrollTop=w.current.top,v.current.scrollLeft=w.current.left);if(!K&&null!=l.focusedKey){let e=v.current.querySelector(`[data-key="${CSS.escape(l.focusedKey.toString())}"]`);e&&(e.contains(document.activeElement)||(0,r.Ao)(e),"keyboard"===(0,s.Jz)()&&(0,r.Gt)(e,{containingElement:u.current}))}}},onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||l.setFocused(!1)},onMouseDown(e){v.current===e.target&&e.preventDefault()}},{typeSelectProps:I}=$fb3050f43d946246$export$e32c88dfddc6e1d8({keyboardDelegate:c,selectionManager:l});return g||(F=(0,r.dG)(I,F)),b||(t=null==l.focusedKey?0:-1),{collectionProps:{...F,tabIndex:t}}}function $880e95eb8b93ba9a$export$ecf600387e221c37(e){let{selectionManager:t,key:l,ref:o,shouldSelectOnPressUp:a,shouldUseVirtualFocus:c,focus:u,isDisabled:d,onAction:f,allowsDifferentPressOrigin:h,linkBehavior:y="action"}=e,p=(0,r.tv)(),onSelect=e=>{if("keyboard"===e.pointerType&&$feb5ffebff200149$export$d3e3bd3e26688c04(e))t.toggleSelection(l);else{if("none"===t.selectionMode)return;if(t.isLink(l)){if("selection"===y){p.open(o.current,e),t.setSelectedKeys(t.selectedKeys);return}if("override"===y||"none"===y)return}"single"===t.selectionMode?t.isSelected(l)&&!t.disallowEmptySelection?t.toggleSelection(l):t.replaceSelection(l):e&&e.shiftKey?t.extendSelection(l):"toggle"===t.selectionBehavior||e&&($feb5ffebff200149$export$16792effe837dba3(e)||"touch"===e.pointerType||"virtual"===e.pointerType)?t.toggleSelection(l):t.replaceSelection(l)}};(0,n.useEffect)(()=>{l===t.focusedKey&&t.isFocused&&!c&&(u?u():document.activeElement!==o.current&&(0,i.ex)(o.current))},[o,l,t.focusedKey,t.childFocusStrategy,t.isFocused,c]),d=d||t.isDisabled(l);let g={};c||d?d&&(g.onMouseDown=e=>{e.preventDefault()}):g={tabIndex:l===t.focusedKey?0:-1,onFocus(e){e.target===o.current&&t.setFocusedKey(l)}};let b=t.isLink(l)&&"override"===y,$=t.isLink(l)&&"selection"!==y&&"none"!==y,K=!d&&t.canSelectItem(l)&&!b,v=(f||$)&&!d,m=v&&("replace"===t.selectionBehavior?!K:!K||t.isEmpty),S=v&&K&&"replace"===t.selectionBehavior,x=m||S,w=(0,n.useRef)(null),k=x&&K,C=(0,n.useRef)(!1),F=(0,n.useRef)(!1),performAction=e=>{f&&f(),$&&p.open(o.current,e)},I={};a?(I.onPressStart=e=>{w.current=e.pointerType,C.current=k,"keyboard"===e.pointerType&&(!x||$880e95eb8b93ba9a$var$isSelectionKey())&&onSelect(e)},h?(I.onPressUp=m?null:e=>{"keyboard"!==e.pointerType&&K&&onSelect(e)},I.onPress=m?performAction:null):I.onPress=e=>{m||S&&"mouse"!==e.pointerType?("keyboard"!==e.pointerType||$880e95eb8b93ba9a$var$isActionKey())&&performAction(e):"keyboard"!==e.pointerType&&K&&onSelect(e)}):(I.onPressStart=e=>{w.current=e.pointerType,C.current=k,F.current=m,K&&("mouse"===e.pointerType&&!m||"keyboard"===e.pointerType&&(!v||$880e95eb8b93ba9a$var$isSelectionKey()))&&onSelect(e)},I.onPress=e=>{("touch"===e.pointerType||"pen"===e.pointerType||"virtual"===e.pointerType||"keyboard"===e.pointerType&&x&&$880e95eb8b93ba9a$var$isActionKey()||"mouse"===e.pointerType&&F.current)&&(x?performAction(e):K&&onSelect(e))}),g["data-key"]=l,I.preventFocusOnPress=c;let{pressProps:M,isPressed:T}=(0,s.r7)(I),A=S?e=>{"mouse"===w.current&&(e.stopPropagation(),e.preventDefault(),performAction(e))}:void 0,{longPressProps:P}=(0,s.TA)({isDisabled:!k,onLongPress(e){"touch"===e.pointerType&&(onSelect(e),t.setSelectionBehavior("toggle"))}}),D=t.isLink(l)?e=>{r.nG.isOpening||e.preventDefault()}:void 0;return{itemProps:(0,r.dG)(g,K||m?M:{},k?P:{},{onDoubleClick:A,onDragStartCapture:e=>{"touch"===w.current&&C.current&&e.preventDefault()},onClick:D}),isPressed:T,isSelected:t.isSelected(l),isFocused:t.isFocused&&t.focusedKey===l,isDisabled:d,allowsSelection:K,hasAction:x}}function $880e95eb8b93ba9a$var$isActionKey(){let e=window.event;return(null==e?void 0:e.key)==="Enter"}function $880e95eb8b93ba9a$var$isSelectionKey(){let e=window.event;return(null==e?void 0:e.key)===" "||(null==e?void 0:e.code)==="Space"}let $2a25aae57d74318e$export$a05409b8bb224a5a=class $2a25aae57d74318e$export$a05409b8bb224a5a{getNextKey(e){for(e=this.collection.getKeyAfter(e);null!=e;){if("item"===this.collection.getItem(e).type&&!this.disabledKeys.has(e))return e;e=this.collection.getKeyAfter(e)}return null}getPreviousKey(e){for(e=this.collection.getKeyBefore(e);null!=e;){if("item"===this.collection.getItem(e).type&&!this.disabledKeys.has(e))return e;e=this.collection.getKeyBefore(e)}return null}findKey(e,t,l){let o=this.getItem(e);if(!o)return null;let n=o.getBoundingClientRect();do e=t(e),o=this.getItem(e);while(o&&l(n,o.getBoundingClientRect()));return e}isSameRow(e,t){return e.top===t.top||e.left!==t.left}isSameColumn(e,t){return e.left===t.left||e.top!==t.top}getKeyBelow(e){return"grid"===this.layout&&"vertical"===this.orientation?this.findKey(e,e=>this.getNextKey(e),this.isSameRow):this.getNextKey(e)}getKeyAbove(e){return"grid"===this.layout&&"vertical"===this.orientation?this.findKey(e,e=>this.getPreviousKey(e),this.isSameRow):this.getPreviousKey(e)}getNextColumn(e,t){return t?this.getPreviousKey(e):this.getNextKey(e)}getKeyRightOf(e){return"grid"===this.layout?"vertical"===this.orientation?this.getNextColumn(e,"rtl"===this.direction):this.findKey(e,e=>this.getNextColumn(e,"rtl"===this.direction),this.isSameColumn):"horizontal"===this.orientation?this.getNextColumn(e,"rtl"===this.direction):null}getKeyLeftOf(e){return"grid"===this.layout?"vertical"===this.orientation?this.getNextColumn(e,"ltr"===this.direction):this.findKey(e,e=>this.getNextColumn(e,"ltr"===this.direction),this.isSameColumn):"horizontal"===this.orientation?this.getNextColumn(e,"ltr"===this.direction):null}getFirstKey(){let e=this.collection.getFirstKey();for(;null!=e;){if("item"===this.collection.getItem(e).type&&!this.disabledKeys.has(e))return e;e=this.collection.getKeyAfter(e)}return null}getLastKey(){let e=this.collection.getLastKey();for(;null!=e;){if("item"===this.collection.getItem(e).type&&!this.disabledKeys.has(e))return e;e=this.collection.getKeyBefore(e)}return null}getItem(e){return this.ref.current.querySelector(`[data-key="${CSS.escape(e.toString())}"]`)}getKeyPageAbove(e){let t=this.ref.current,l=this.getItem(e);if(!l)return null;if(!(0,r.a9)(t))return this.getFirstKey();let o=t.getBoundingClientRect(),n=l.getBoundingClientRect();if("horizontal"===this.orientation){let i=o.x-t.scrollLeft,r=Math.max(0,n.x-i+n.width-o.width);for(;l&&n.x-i>r;)n=null==(l=null==(e=this.getKeyAbove(e))?null:this.getItem(e))?void 0:l.getBoundingClientRect()}else{let i=o.y-t.scrollTop,r=Math.max(0,n.y-i+n.height-o.height);for(;l&&n.y-i>r;)n=null==(l=null==(e=this.getKeyAbove(e))?null:this.getItem(e))?void 0:l.getBoundingClientRect()}return null!=e?e:this.getFirstKey()}getKeyPageBelow(e){let t=this.ref.current,l=this.getItem(e);if(!l)return null;if(!(0,r.a9)(t))return this.getLastKey();let o=t.getBoundingClientRect(),n=l.getBoundingClientRect();if("horizontal"===this.orientation){let i=o.x-t.scrollLeft,r=Math.min(t.scrollWidth,n.x-i-n.width+o.width);for(;l&&n.x-i<r;)n=null==(l=null==(e=this.getKeyBelow(e))?null:this.getItem(e))?void 0:l.getBoundingClientRect()}else{let i=o.y-t.scrollTop,r=Math.min(t.scrollHeight,n.y-i-n.height+o.height);for(;l&&n.y-i<r;)n=null==(l=null==(e=this.getKeyBelow(e))?null:this.getItem(e))?void 0:l.getBoundingClientRect()}return null!=e?e:this.getLastKey()}getKeyForSearch(e,t){if(!this.collator)return null;let l=this.collection,o=t||this.getFirstKey();for(;null!=o;){let t=l.getItem(o),n=t.textValue.slice(0,e.length);if(t.textValue&&0===this.collator.compare(n,e))return o;o=this.getKeyBelow(o)}return null}constructor(...e){if(1===e.length){let t=e[0];this.collection=t.collection,this.ref=t.ref,this.collator=t.collator,this.disabledKeys=t.disabledKeys||new Set,this.orientation=t.orientation,this.direction=t.direction,this.layout=t.layout||"stack"}else this.collection=e[0],this.disabledKeys=e[1],this.ref=e[2],this.collator=e[3],this.layout="stack",this.orientation="vertical";"stack"===this.layout&&"vertical"===this.orientation&&(this.getKeyLeftOf=void 0,this.getKeyRightOf=void 0)}};function $982254629710d113$export$b95089534ab7c1fd(e){let{selectionManager:t,collection:l,disabledKeys:o,ref:i,keyboardDelegate:r}=e,s=(0,a.Xe)({usage:"search",sensitivity:"base"}),c=t.disabledBehavior,u=(0,n.useMemo)(()=>r||new $2a25aae57d74318e$export$a05409b8bb224a5a(l,"selection"===c?new Set:o,i,s),[r,l,o,i,s,c]),{collectionProps:d}=$ae20dd8cbca75726$export$d6daf82dcd84e87c({...e,ref:i,selectionManager:t,keyboardDelegate:u});return{listProps:d}}},7911:function(e,t,l){l.d(t,{Em:function(){return $c5a24bc478652b5f$export$5f3398f8733f90e2},Kx:function(){return $7613b1592d41b092$export$6cd28814d92fa9c9},_P:function(){return $c5a24bc478652b5f$export$1005530eda016c13},ck:function(){return n},eg:function(){return $c5a24bc478652b5f$export$8c434b3a7a4dad6},l8:function(){return $c5a24bc478652b5f$export$fbdeaa6a76694f71},s:function(){return $c5a24bc478652b5f$export$7475b2c64539e4cf}});var o=l(7294);function $c1d7fb2ec91bae71$var$Item(e){return null}function $c1d7fb2ec91bae71$var$hasChildItems(e){return null!=e.hasChildItems?e.hasChildItems:!!(e.childItems||e.title&&o.Children.count(e.children)>0)}$c1d7fb2ec91bae71$var$Item.getCollectionNode=function*(e,t){let{childItems:l,title:n,children:i}=e,r=e.title||e.children,s=e.textValue||("string"==typeof r?r:"")||e["aria-label"]||"";s||(null==t?void 0:t.suppressTextValueWarning)||console.warn("<Item> with non-plain text contents is unsupported by type to select for accessibility. Please add a `textValue` prop."),yield{type:"item",props:e,rendered:r,textValue:s,"aria-label":e["aria-label"],hasChildNodes:$c1d7fb2ec91bae71$var$hasChildItems(e),*childNodes(){if(l)for(let e of l)yield{type:"item",value:e};else if(n){let e=[];o.Children.forEach(i,t=>{e.push({type:"item",element:t})}),yield*e}}}};let n=$c1d7fb2ec91bae71$var$Item;let $eb2240fc39a57fa5$export$bf788dd355e3a401=class $eb2240fc39a57fa5$export$bf788dd355e3a401{build(e,t){return this.context=t,$eb2240fc39a57fa5$var$iterable(()=>this.iterateCollection(e))}*iterateCollection(e){let{children:t,items:l}=e;if("function"==typeof t){if(!l)throw Error("props.children was a function but props.items is missing");for(let l of e.items)yield*this.getFullNode({value:l},{renderer:t})}else{let e=[];o.Children.forEach(t,t=>{e.push(t)});let l=0;for(let t of e)for(let e of this.getFullNode({element:t,index:l},{}))l++,yield e}}getKey(e,t,l,o){if(null!=e.key)return e.key;if("cell"===t.type&&null!=t.key)return`${o}${t.key}`;let n=t.value;if(null!=n){var i;let e=null!==(i=n.key)&&void 0!==i?i:n.id;if(null==e)throw Error("No key found for item");return e}return o?`${o}.${t.index}`:`$.${t.index}`}getChildState(e,t){return{renderer:t.renderer||e.renderer}}*getFullNode(e,t,l,n){let i=e.element;if(!i&&e.value&&t&&t.renderer){let l=this.cache.get(e.value);if(l&&(!l.shouldInvalidate||!l.shouldInvalidate(this.context))){l.index=e.index,l.parentKey=n?n.key:null,yield l;return}i=t.renderer(e.value)}if(o.isValidElement(i)){let o=i.type;if("function"!=typeof o&&"function"!=typeof o.getCollectionNode){let e="function"==typeof i.type?i.type.name:i.type;throw Error(`Unknown element <${e}> in collection.`)}let r=o.getCollectionNode(i.props,this.context),s=e.index,a=r.next();for(;!a.done&&a.value;){let o=a.value;e.index=s;let c=o.key;c||(c=o.element?null:this.getKey(i,e,t,l));let u=[...this.getFullNode({...o,key:c,index:s,wrapper:$eb2240fc39a57fa5$var$compose(e.wrapper,o.wrapper)},this.getChildState(t,o),l?`${l}${i.key}`:i.key,n)];for(let t of u){if(t.value=o.value||e.value,t.value&&this.cache.set(t.value,t),e.type&&t.type!==e.type)throw Error(`Unsupported type <${$eb2240fc39a57fa5$var$capitalize(t.type)}> in <${$eb2240fc39a57fa5$var$capitalize(n.type)}>. Only <${$eb2240fc39a57fa5$var$capitalize(e.type)}> is supported.`);s++,yield t}a=r.next(u)}return}if(null==e.key)return;let r=this,s={type:e.type,props:e.props,key:e.key,parentKey:n?n.key:null,value:e.value,level:n?n.level+1:0,index:e.index,rendered:e.rendered,textValue:e.textValue,"aria-label":e["aria-label"],wrapper:e.wrapper,shouldInvalidate:e.shouldInvalidate,hasChildNodes:e.hasChildNodes,childNodes:$eb2240fc39a57fa5$var$iterable(function*(){if(!e.hasChildNodes)return;let l=0;for(let o of e.childNodes())for(let e of(null!=o.key&&(o.key=`${s.key}${o.key}`),o.index=l,r.getFullNode(o,r.getChildState(t,o),s.key,s)))l++,yield e})};yield s}constructor(){this.cache=new WeakMap}};function $eb2240fc39a57fa5$var$iterable(e){let t=[],l=null;return{*[Symbol.iterator](){for(let e of t)yield e;for(let o of(l||(l=e()),l))t.push(o),yield o}}}function $eb2240fc39a57fa5$var$compose(e,t){return e&&t?l=>e(t(l)):e||t||void 0}function $eb2240fc39a57fa5$var$capitalize(e){return e[0].toUpperCase()+e.slice(1)}function $7613b1592d41b092$export$6cd28814d92fa9c9(e,t,l){let n=(0,o.useMemo)(()=>new $eb2240fc39a57fa5$export$bf788dd355e3a401,[]),{children:i,items:r,collection:s}=e;return(0,o.useMemo)(()=>s||t(n.build({children:i,items:r},l)),[n,i,r,s,l,t])}function $c5a24bc478652b5f$export$1005530eda016c13(e,t){return"function"==typeof t.getChildren?t.getChildren(e.key):e.childNodes}function $c5a24bc478652b5f$export$fbdeaa6a76694f71(e){return $c5a24bc478652b5f$export$5f3398f8733f90e2(e,0)}function $c5a24bc478652b5f$export$5f3398f8733f90e2(e,t){if(t<0)return;let l=0;for(let o of e){if(l===t)return o;l++}}function $c5a24bc478652b5f$export$7475b2c64539e4cf(e){let t;for(let l of e)t=l;return t}function $c5a24bc478652b5f$export$8c434b3a7a4dad6(e,t,l){if(t.parentKey===l.parentKey)return t.index-l.index;let o=[...$c5a24bc478652b5f$var$getAncestors(e,t),t],n=[...$c5a24bc478652b5f$var$getAncestors(e,l),l],i=o.slice(0,n.length).findIndex((e,t)=>e!==n[t]);return-1!==i?(t=o[i],l=n[i],t.index-l.index):o.findIndex(e=>e===l)>=0?1:(n.findIndex(e=>e===t),-1)}function $c5a24bc478652b5f$var$getAncestors(e,t){let l=[];for(;(null==t?void 0:t.parentKey)!=null;)l.unshift(t=e.getItem(t.parentKey));return l}new WeakMap},6417:function(e,t,l){l.d(t,{Z:function(){return $d496c0a20b6e58ec$export$6c8a5aaad13c9852},q:function(){return $7af3f5b51489e0b5$export$253fe78d46329472}});var o=l(5897),n=l(7294),i=l(7911);let $e40ea825a81a3709$export$52baac22726c72bf=class $e40ea825a81a3709$export$52baac22726c72bf extends Set{constructor(e,t,l){super(e),e instanceof $e40ea825a81a3709$export$52baac22726c72bf?(this.anchorKey=t||e.anchorKey,this.currentKey=l||e.currentKey):(this.anchorKey=t,this.currentKey=l)}};function $7af3f5b51489e0b5$var$equalSets(e,t){if(e.size!==t.size)return!1;for(let l of e)if(!t.has(l))return!1;return!0}function $7af3f5b51489e0b5$export$253fe78d46329472(e){let{selectionMode:t="none",disallowEmptySelection:l,allowDuplicateSelectionEvents:i,selectionBehavior:r="toggle",disabledBehavior:s="all"}=e,a=(0,n.useRef)(!1),[,c]=(0,n.useState)(!1),u=(0,n.useRef)(null),d=(0,n.useRef)(null),[,f]=(0,n.useState)(null),h=(0,n.useMemo)(()=>$7af3f5b51489e0b5$var$convertSelection(e.selectedKeys),[e.selectedKeys]),y=(0,n.useMemo)(()=>$7af3f5b51489e0b5$var$convertSelection(e.defaultSelectedKeys,new $e40ea825a81a3709$export$52baac22726c72bf),[e.defaultSelectedKeys]),[p,g]=(0,o.zk)(h,y,e.onSelectionChange),b=(0,n.useMemo)(()=>e.disabledKeys?new Set(e.disabledKeys):new Set,[e.disabledKeys]),[$,K]=(0,n.useState)(r);"replace"===r&&"toggle"===$&&"object"==typeof p&&0===p.size&&K("replace");let v=(0,n.useRef)(r);return(0,n.useEffect)(()=>{r!==v.current&&(K(r),v.current=r)},[r]),{selectionMode:t,disallowEmptySelection:l,selectionBehavior:$,setSelectionBehavior:K,get isFocused(){return a.current},setFocused(e){a.current=e,c(e)},get focusedKey(){return u.current},get childFocusStrategy(){return d.current},setFocusedKey(e,t="first"){u.current=e,d.current=t,f(e)},selectedKeys:p,setSelectedKeys(e){(i||!$7af3f5b51489e0b5$var$equalSets(e,p))&&g(e)},disabledKeys:b,disabledBehavior:s}}function $7af3f5b51489e0b5$var$convertSelection(e,t){return e?"all"===e?"all":new $e40ea825a81a3709$export$52baac22726c72bf(e):t}let $d496c0a20b6e58ec$export$6c8a5aaad13c9852=class $d496c0a20b6e58ec$export$6c8a5aaad13c9852{get selectionMode(){return this.state.selectionMode}get disallowEmptySelection(){return this.state.disallowEmptySelection}get selectionBehavior(){return this.state.selectionBehavior}setSelectionBehavior(e){this.state.setSelectionBehavior(e)}get isFocused(){return this.state.isFocused}setFocused(e){this.state.setFocused(e)}get focusedKey(){return this.state.focusedKey}get childFocusStrategy(){return this.state.childFocusStrategy}setFocusedKey(e,t){(null==e||this.collection.getItem(e))&&this.state.setFocusedKey(e,t)}get selectedKeys(){return"all"===this.state.selectedKeys?new Set(this.getSelectAllKeys()):this.state.selectedKeys}get rawSelection(){return this.state.selectedKeys}isSelected(e){return"none"!==this.state.selectionMode&&(e=this.getKey(e),"all"===this.state.selectedKeys?this.canSelectItem(e):this.state.selectedKeys.has(e))}get isEmpty(){return"all"!==this.state.selectedKeys&&0===this.state.selectedKeys.size}get isSelectAll(){if(this.isEmpty)return!1;if("all"===this.state.selectedKeys)return!0;if(null!=this._isSelectAll)return this._isSelectAll;let e=this.getSelectAllKeys(),t=this.state.selectedKeys;return this._isSelectAll=e.every(e=>t.has(e)),this._isSelectAll}get firstSelectedKey(){let e=null;for(let t of this.state.selectedKeys){let l=this.collection.getItem(t);(!e||l&&0>(0,i.eg)(this.collection,l,e))&&(e=l)}return null==e?void 0:e.key}get lastSelectedKey(){let e=null;for(let t of this.state.selectedKeys){let l=this.collection.getItem(t);(!e||l&&(0,i.eg)(this.collection,l,e)>0)&&(e=l)}return null==e?void 0:e.key}get disabledKeys(){return this.state.disabledKeys}get disabledBehavior(){return this.state.disabledBehavior}extendSelection(e){let t;if("none"!==this.selectionMode){if("single"===this.selectionMode){this.replaceSelection(e);return}if(e=this.getKey(e),"all"===this.state.selectedKeys)t=new $e40ea825a81a3709$export$52baac22726c72bf([e],e,e);else{let l=this.state.selectedKeys,o=l.anchorKey||e;for(let n of(t=new $e40ea825a81a3709$export$52baac22726c72bf(l,o,e),this.getKeyRange(o,l.currentKey||e)))t.delete(n);for(let l of this.getKeyRange(e,o))this.canSelectItem(l)&&t.add(l)}this.state.setSelectedKeys(t)}}getKeyRange(e,t){let l=this.collection.getItem(e),o=this.collection.getItem(t);return l&&o?0>=(0,i.eg)(this.collection,l,o)?this.getKeyRangeInternal(e,t):this.getKeyRangeInternal(t,e):[]}getKeyRangeInternal(e,t){let l=[],o=e;for(;o;){let e=this.collection.getItem(o);if((e&&"item"===e.type||"cell"===e.type&&this.allowsCellSelection)&&l.push(o),o===t)return l;o=this.collection.getKeyAfter(o)}return[]}getKey(e){let t=this.collection.getItem(e);if(!t||"cell"===t.type&&this.allowsCellSelection)return e;for(;"item"!==t.type&&null!=t.parentKey;)t=this.collection.getItem(t.parentKey);return t&&"item"===t.type?t.key:null}toggleSelection(e){if("none"===this.selectionMode)return;if("single"===this.selectionMode&&!this.isSelected(e)){this.replaceSelection(e);return}if(null==(e=this.getKey(e)))return;let t=new $e40ea825a81a3709$export$52baac22726c72bf("all"===this.state.selectedKeys?this.getSelectAllKeys():this.state.selectedKeys);t.has(e)?t.delete(e):this.canSelectItem(e)&&(t.add(e),t.anchorKey=e,t.currentKey=e),this.disallowEmptySelection&&0===t.size||this.state.setSelectedKeys(t)}replaceSelection(e){if("none"===this.selectionMode||null==(e=this.getKey(e)))return;let t=this.canSelectItem(e)?new $e40ea825a81a3709$export$52baac22726c72bf([e],e,e):new $e40ea825a81a3709$export$52baac22726c72bf;this.state.setSelectedKeys(t)}setSelectedKeys(e){if("none"===this.selectionMode)return;let t=new $e40ea825a81a3709$export$52baac22726c72bf;for(let l of e)if(null!=(l=this.getKey(l))&&(t.add(l),"single"===this.selectionMode))break;this.state.setSelectedKeys(t)}getSelectAllKeys(){let e=[],addKeys=t=>{for(;t;){if(this.canSelectItem(t)){let l=this.collection.getItem(t);"item"===l.type&&e.push(t),l.hasChildNodes&&(this.allowsCellSelection||"item"!==l.type)&&addKeys((0,i.l8)((0,i._P)(l,this.collection)).key)}t=this.collection.getKeyAfter(t)}};return addKeys(this.collection.getFirstKey()),e}selectAll(){this.isSelectAll||"multiple"!==this.selectionMode||this.state.setSelectedKeys("all")}clearSelection(){!this.disallowEmptySelection&&("all"===this.state.selectedKeys||this.state.selectedKeys.size>0)&&this.state.setSelectedKeys(new $e40ea825a81a3709$export$52baac22726c72bf)}toggleSelectAll(){this.isSelectAll?this.clearSelection():this.selectAll()}select(e,t){"none"!==this.selectionMode&&("single"===this.selectionMode?this.isSelected(e)&&!this.disallowEmptySelection?this.toggleSelection(e):this.replaceSelection(e):"toggle"===this.selectionBehavior||t&&("touch"===t.pointerType||"virtual"===t.pointerType)?this.toggleSelection(e):this.replaceSelection(e))}isSelectionEqual(e){if(e===this.state.selectedKeys)return!0;let t=this.selectedKeys;if(e.size!==t.size)return!1;for(let l of e)if(!t.has(l))return!1;for(let l of t)if(!e.has(l))return!1;return!0}canSelectItem(e){if("none"===this.state.selectionMode||this.state.disabledKeys.has(e))return!1;let t=this.collection.getItem(e);return!!t&&("cell"!==t.type||!!this.allowsCellSelection)}isDisabled(e){return this.state.disabledKeys.has(e)&&"all"===this.state.disabledBehavior}isLink(e){var t,l;return!!(null===(l=this.collection.getItem(e))||void 0===l?void 0:null===(t=l.props)||void 0===t?void 0:t.href)}constructor(e,t,l){var o;this.collection=e,this.state=t,this.allowsCellSelection=null!==(o=null==l?void 0:l.allowsCellSelection)&&void 0!==o&&o,this._isSelectAll=null}}},5897:function(e,t,l){l.d(t,{zk:function(){return $458b0a5536c1a7cf$export$40bfa8c7b0832715}});var o=l(7294);function $458b0a5536c1a7cf$export$40bfa8c7b0832715(e,t,l){let[n,i]=(0,o.useState)(e||t),r=(0,o.useRef)(void 0!==e),s=void 0!==e;(0,o.useEffect)(()=>{let e=r.current;e!==s&&console.warn(`WARN: A component changed from ${e?"controlled":"uncontrolled"} to ${s?"controlled":"uncontrolled"}.`),r.current=s},[s]);let a=s?e:n,c=(0,o.useCallback)((e,...t)=>{let onChangeCaller=(e,...t)=>{l&&!Object.is(a,e)&&l(e,...t),s||(a=e)};"function"==typeof e?(console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"),i((l,...o)=>{let n=e(s?a:l,...o);return(onChangeCaller(n,...t),s)?l:n})):(s||i(e),onChangeCaller(e,...t))},[s,a,l]);return[a,c]}}}]);