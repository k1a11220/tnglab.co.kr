// Generated by Framer (d213f04)
import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";import{addFonts,addPropertyControls,ControlType,cx,Image,Link,RichText,useActiveVariantCallback,useLocaleInfo,useVariantState,withCSS}from"framer";import{LayoutGroup,motion,MotionConfigContext}from"framer-motion";import*as React from"react";import*as sharedStyle from"https://framerusercontent.com/modules/K0a3AYfJdt0McTAGhNf6/Fb4ggUsHNprOuPLZZ38g/ctJg5r4mw.js";const cycleOrder=["PU9gFhtXB","LiuFvNjg3","SfZ7B7Ljm","bizA6i3WY"];const variantClassNames={bizA6i3WY:"framer-v-1kj0ou3",LiuFvNjg3:"framer-v-d2razy",PU9gFhtXB:"framer-v-13hw172",SfZ7B7Ljm:"framer-v-12oy3sm"};function addPropertyOverrides(overrides,...variants){const nextOverrides={};variants===null||variants===void 0?void 0:variants.forEach(variant=>variant&&Object.assign(nextOverrides,overrides[variant]));return nextOverrides;}const transitions={default:{damping:60,delay:0,mass:1,stiffness:500,type:"spring"}};const Transition=({value,children})=>{const config=React.useContext(MotionConfigContext);const transition=value!==null&&value!==void 0?value:config.transition;const contextValue=React.useMemo(()=>({...config,transition}),[JSON.stringify(transition)]);return /*#__PURE__*/ _jsx(MotionConfigContext.Provider,{value:contextValue,children:children});};const humanReadableVariantMap={"Phone Open":"bizA6i3WY",Desktop:"PU9gFhtXB",Phone:"SfZ7B7Ljm",Tablet:"LiuFvNjg3"};const getProps=({height,id,width,...props})=>{var _variant,ref;return{...props,variant:(ref=(_variant=humanReadableVariantMap[props.variant])!==null&&_variant!==void 0?_variant:props.variant)!==null&&ref!==void 0?ref:"PU9gFhtXB"};};const createLayoutDependency=(props,variants)=>variants.join("-")+props.layoutDependency;const Component=/*#__PURE__*/ React.forwardRef(function(props,ref){const{activeLocale}=useLocaleInfo();const{style,className,layoutId,variant,...restProps}=getProps(props);const{baseVariant,classNames,gestureVariant,setGestureState,setVariant,transition,variants}=useVariantState({cycleOrder,defaultVariant:"PU9gFhtXB",transitions,variant,variantClassNames});const layoutDependency=createLayoutDependency(props,variants);const{activeVariantCallback,delay}=useActiveVariantCallback(baseVariant);const onTapvlvejr=activeVariantCallback(async(...args)=>{setVariant("bizA6i3WY");});const onTapo7mnxs=activeVariantCallback(async(...args)=>{setVariant("SfZ7B7Ljm");});const isDisplayed=()=>{if(["SfZ7B7Ljm","bizA6i3WY"].includes(baseVariant))return true;return false;};const isDisplayed1=()=>{if(baseVariant==="SfZ7B7Ljm")return false;return true;};const defaultLayoutId=React.useId();return /*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsx(motion.div,{initial:variant,animate:variants,onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),className:cx("framer-tdI8H",sharedStyle.className,classNames),style:{display:"contents"},children:/*#__PURE__*/ _jsx(Transition,{value:transition,children:/*#__PURE__*/ _jsxs(motion.div,{...restProps,className:cx("framer-13hw172",className),"data-border":true,"data-framer-name":"Desktop",layoutDependency:layoutDependency,layoutId:"PU9gFhtXB",ref:ref,style:{"--border-bottom-width":"1px","--border-color":"rgba(0, 0, 0, 0.08)","--border-left-width":"0px","--border-right-width":"0px","--border-style":"solid","--border-top-width":"0px",backgroundColor:"rgb(255, 255, 255)",...style},...addPropertyOverrides({bizA6i3WY:{"data-framer-name":"Phone Open"},LiuFvNjg3:{"data-framer-name":"Tablet"},SfZ7B7Ljm:{"data-framer-name":"Phone"}},baseVariant,gestureVariant),children:[/*#__PURE__*/ _jsxs(motion.div,{className:"framer-tqo4yb","data-framer-name":"Title and Icon",layoutDependency:layoutDependency,layoutId:"WRlPzAWqV",children:[/*#__PURE__*/ _jsx(Link,{href:{webPageId:"augiA20Il"},children:/*#__PURE__*/ _jsx(Image,{as:"a",background:{alt:"",fit:"fill",intrinsicHeight:64.5,intrinsicWidth:150,pixelHeight:129,pixelWidth:300,src:new URL("assets/mAmkmMvtJDYLQDu7HjvKYllVM.png",import.meta.url).href},className:"framer-ws6e7p framer-j0r48h","data-framer-name":"image",layoutDependency:layoutDependency,layoutId:"G8_Yp2kVW"})}),isDisplayed()&&/*#__PURE__*/ _jsxs(motion.div,{className:"framer-n6rrov","data-framer-name":"Icon",layoutDependency:layoutDependency,layoutId:"Z_LNgMsZs",...addPropertyOverrides({bizA6i3WY:{"data-highlight":true,onTap:onTapo7mnxs},SfZ7B7Ljm:{"data-highlight":true,onTap:onTapvlvejr}},baseVariant,gestureVariant),children:[/*#__PURE__*/ _jsx(motion.div,{className:"framer-1gl4gag","data-framer-name":"Bottom",layoutDependency:layoutDependency,layoutId:"GPT8M22ds",style:{backgroundColor:"rgb(153, 153, 153)",borderBottomLeftRadius:10,borderBottomRightRadius:10,borderTopLeftRadius:10,borderTopRightRadius:10,rotate:0},variants:{bizA6i3WY:{rotate:-45}}}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-85xm6q","data-framer-name":"Mid",layoutDependency:layoutDependency,layoutId:"sZhSbOOn5",style:{backgroundColor:"rgb(153, 153, 153)",borderBottomLeftRadius:10,borderBottomRightRadius:10,borderTopLeftRadius:10,borderTopRightRadius:10}}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-1nfyfku","data-framer-name":"Top",layoutDependency:layoutDependency,layoutId:"ht5MGbmlT",style:{backgroundColor:"rgb(153, 153, 153)",borderBottomLeftRadius:10,borderBottomRightRadius:10,borderTopLeftRadius:10,borderTopRightRadius:10,rotate:0},variants:{bizA6i3WY:{rotate:45}}})]})]}),/*#__PURE__*/ _jsxs(motion.div,{className:"framer-1oapuq0",layoutDependency:layoutDependency,layoutId:"nTOY_LVGn",children:[isDisplayed1()&&/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{style:{"--font-selector":"Q1VTVE9NO1ByZXRlbmRhcmQgUmVndWxhcg==","--framer-font-family":'"Pretendard Regular", sans-serif',"--framer-font-size":"15px","--framer-line-height":"1.6em","--framer-text-alignment":"center"},children:/*#__PURE__*/ _jsx(Link,{href:{webPageId:"TRpLTlXZV"},openInNewTab:false,smoothScroll:false,children:/*#__PURE__*/ _jsx(motion.a,{className:"framer-styles-preset-11wsheo","data-styles-preset":"ctJg5r4mw",children:"About"})})})}),className:"framer-162ienc",fonts:["CUSTOM;Pretendard Regular"],layoutDependency:layoutDependency,layoutId:"sj4I1N3a1",style:{"--framer-paragraph-spacing":"0px"},verticalAlignment:"top",withExternalLayout:true}),isDisplayed1()&&/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{style:{"--font-selector":"Q1VTVE9NO1ByZXRlbmRhcmQgUmVndWxhcg==","--framer-font-family":'"Pretendard Regular", sans-serif',"--framer-font-size":"15px","--framer-line-height":"1.6em","--framer-text-alignment":"center"},children:"Viewport"})}),className:"framer-1x46q9b",fonts:["CUSTOM;Pretendard Regular"],layoutDependency:layoutDependency,layoutId:"Jjbn_2o3k",style:{"--framer-link-hover-text-color":"rgba(153, 153, 153, 0.6)","--framer-link-text-decoration":"none","--framer-paragraph-spacing":"0px"},verticalAlignment:"top",withExternalLayout:true}),isDisplayed1()&&/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{style:{"--font-selector":"Q1VTVE9NO1ByZXRlbmRhcmQgUmVndWxhcg==","--framer-font-family":'"Pretendard Regular", sans-serif',"--framer-font-size":"15px","--framer-line-height":"1.6em","--framer-text-alignment":"center"},children:"Vaccum Component"})}),className:"framer-rvu99w",fonts:["CUSTOM;Pretendard Regular"],layoutDependency:layoutDependency,layoutId:"kF_UEoA2c",style:{"--framer-link-hover-text-color":"rgba(153, 153, 153, 0.6)","--framer-link-text-decoration":"none","--framer-paragraph-spacing":"0px"},verticalAlignment:"top",withExternalLayout:true}),isDisplayed1()&&/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{style:{"--font-selector":"Q1VTVE9NO1ByZXRlbmRhcmQgUmVndWxhcg==","--framer-font-family":'"Pretendard Regular", sans-serif',"--framer-font-size":"15px","--framer-line-height":"1.6em","--framer-text-alignment":"center"},children:"Hydrogen Compressor"})}),className:"framer-rta1hm",fonts:["CUSTOM;Pretendard Regular"],layoutDependency:layoutDependency,layoutId:"MTFckakhg",style:{"--framer-link-hover-text-color":"rgba(153, 153, 153, 0.6)","--framer-link-text-decoration":"none","--framer-paragraph-spacing":"0px"},verticalAlignment:"top",withExternalLayout:true}),isDisplayed1()&&/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{style:{"--font-selector":"Q1VTVE9NO1ByZXRlbmRhcmQgUmVndWxhcg==","--framer-font-family":'"Pretendard Regular", sans-serif',"--framer-font-size":"15px","--framer-line-height":"1.6em","--framer-text-alignment":"center"},children:"특수금속"})}),className:"framer-1xxgcjn",fonts:["CUSTOM;Pretendard Regular"],layoutDependency:layoutDependency,layoutId:"xWZCviXIV",style:{"--framer-link-hover-text-color":"rgba(153, 153, 153, 0.6)","--framer-link-text-decoration":"none","--framer-paragraph-spacing":"0px"},verticalAlignment:"top",withExternalLayout:true})]}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-bvvz7l",layoutDependency:layoutDependency,layoutId:"Tt04d60sk",style:{backgroundColor:"rgb(0, 0, 0)",borderBottomLeftRadius:4,borderBottomRightRadius:4,borderTopLeftRadius:4,borderTopRightRadius:4},children:/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{style:{"--font-selector":"Q1VTVE9NO1ByZXRlbmRhcmQgUmVndWxhcg==","--framer-font-family":'"Pretendard Regular", sans-serif',"--framer-font-size":"15px","--framer-text-alignment":"center","--framer-text-color":"var(--extracted-r6o4lv)"},children:"Contact"})}),className:"framer-1c2lgma",fonts:["CUSTOM;Pretendard Regular"],layoutDependency:layoutDependency,layoutId:"bRHYD_96y",style:{"--extracted-r6o4lv":"rgb(255, 255, 255)","--framer-paragraph-spacing":"0px"},verticalAlignment:"top",withExternalLayout:true})})]})})})});});const css=['.framer-tdI8H [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',"@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-tdI8H .framer-j0r48h { display: block; }",".framer-tdI8H .framer-13hw172 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: 64px; justify-content: center; padding: 24px 40px 24px 40px; position: relative; width: 1200px; }",".framer-tdI8H .framer-tqo4yb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",".framer-tdI8H .framer-ws6e7p { aspect-ratio: 2.3255813953488373 / 1; flex: none; height: 21px; overflow: visible; position: relative; text-decoration: none; width: var(--framer-aspect-ratio-supported, 49px); }",".framer-tdI8H .framer-n6rrov { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 32px); overflow: hidden; position: relative; width: 32px; }",".framer-tdI8H .framer-1gl4gag { bottom: 7px; flex: none; height: 2px; left: calc(50.00000000000002% - 24px / 2); overflow: hidden; position: absolute; width: 24px; will-change: var(--framer-will-change-override, transform); }",".framer-tdI8H .framer-85xm6q { flex: none; height: 2px; left: calc(50.00000000000002% - 24px / 2); overflow: hidden; position: absolute; top: calc(50.00000000000002% - 2px / 2); width: 24px; will-change: var(--framer-will-change-override, transform); }",".framer-tdI8H .framer-1nfyfku { flex: none; height: 2px; left: calc(50.00000000000002% - 24px / 2); overflow: hidden; position: absolute; top: 7px; width: 24px; will-change: var(--framer-will-change-override, transform); }",".framer-tdI8H .framer-1oapuq0 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",".framer-tdI8H .framer-162ienc, .framer-tdI8H .framer-1x46q9b, .framer-tdI8H .framer-rvu99w, .framer-tdI8H .framer-rta1hm, .framer-tdI8H .framer-1xxgcjn { flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; }",".framer-tdI8H .framer-bvvz7l { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 32px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 80px; }",".framer-tdI8H .framer-1c2lgma { flex: none; height: auto; position: relative; white-space: pre; width: auto; }","@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-tdI8H .framer-13hw172, .framer-tdI8H .framer-tqo4yb, .framer-tdI8H .framer-1oapuq0, .framer-tdI8H .framer-bvvz7l { gap: 0px; } .framer-tdI8H .framer-13hw172 > * { margin: 0px; margin-left: calc(24px / 2); margin-right: calc(24px / 2); } .framer-tdI8H .framer-13hw172 > :first-child, .framer-tdI8H .framer-tqo4yb > :first-child, .framer-tdI8H .framer-1oapuq0 > :first-child, .framer-tdI8H .framer-bvvz7l > :first-child { margin-left: 0px; } .framer-tdI8H .framer-13hw172 > :last-child, .framer-tdI8H .framer-tqo4yb > :last-child, .framer-tdI8H .framer-1oapuq0 > :last-child, .framer-tdI8H .framer-bvvz7l > :last-child { margin-right: 0px; } .framer-tdI8H .framer-tqo4yb > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-tdI8H .framer-1oapuq0 > * { margin: 0px; margin-left: calc(40px / 2); margin-right: calc(40px / 2); } .framer-tdI8H .framer-bvvz7l > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }",".framer-tdI8H.framer-v-d2razy .framer-13hw172 { width: 810px; }",".framer-tdI8H.framer-v-12oy3sm .framer-13hw172 { width: 390px; }",".framer-tdI8H.framer-v-12oy3sm .framer-n6rrov, .framer-tdI8H.framer-v-1kj0ou3 .framer-n6rrov { cursor: pointer; }",".framer-tdI8H.framer-v-12oy3sm .framer-1oapuq0 { min-height: 48px; }",".framer-tdI8H.framer-v-1kj0ou3 .framer-13hw172 { flex-direction: column; height: min-content; padding: 20px 40px 60px 24px; width: 390px; }",".framer-tdI8H.framer-v-1kj0ou3 .framer-tqo4yb { gap: unset; justify-content: space-between; width: 100%; }",".framer-tdI8H.framer-v-1kj0ou3 .framer-1gl4gag { bottom: 15px; }",".framer-tdI8H.framer-v-1kj0ou3 .framer-85xm6q { left: calc(50.00000000000002% - 2px / 2); width: 2px; }",".framer-tdI8H.framer-v-1kj0ou3 .framer-1nfyfku { top: 15px; }",".framer-tdI8H.framer-v-1kj0ou3 .framer-1oapuq0 { align-content: flex-start; align-items: flex-start; flex: none; flex-direction: column; width: 100%; }","@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-tdI8H.framer-v-1kj0ou3 .framer-13hw172, .framer-tdI8H.framer-v-1kj0ou3 .framer-tqo4yb, .framer-tdI8H.framer-v-1kj0ou3 .framer-1oapuq0 { gap: 0px; } .framer-tdI8H.framer-v-1kj0ou3 .framer-13hw172 > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-tdI8H.framer-v-1kj0ou3 .framer-13hw172 > :first-child, .framer-tdI8H.framer-v-1kj0ou3 .framer-1oapuq0 > :first-child { margin-top: 0px; } .framer-tdI8H.framer-v-1kj0ou3 .framer-13hw172 > :last-child, .framer-tdI8H.framer-v-1kj0ou3 .framer-1oapuq0 > :last-child { margin-bottom: 0px; } .framer-tdI8H.framer-v-1kj0ou3 .framer-tqo4yb > *, .framer-tdI8H.framer-v-1kj0ou3 .framer-tqo4yb > :first-child, .framer-tdI8H.framer-v-1kj0ou3 .framer-tqo4yb > :last-child { margin: 0px; } .framer-tdI8H.framer-v-1kj0ou3 .framer-1oapuq0 > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } }",...sharedStyle.css];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 64
 * @framerIntrinsicWidth 1200
 * @framerCanvasComponentVariantDetails {"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"LiuFvNjg3":{"layout":["fixed","fixed"]},"SfZ7B7Ljm":{"layout":["fixed","fixed"]},"bizA6i3WY":{"layout":["fixed","auto"]}}}
 */ const Framerlng1mU6NW=withCSS(Component,css,"framer-tdI8H");export default Framerlng1mU6NW;Framerlng1mU6NW.displayName="Navbar";Framerlng1mU6NW.defaultProps={height:64,width:1200};addPropertyControls(Framerlng1mU6NW,{variant:{options:["PU9gFhtXB","LiuFvNjg3","SfZ7B7Ljm","bizA6i3WY"],optionTitles:["Desktop","Tablet","Phone","Phone Open"],title:"Variant",type:ControlType.Enum}});addFonts(Framerlng1mU6NW,[{family:"Pretendard Regular",moduleAsset:{localModuleIdentifier:"local-module:canvasComponent/lng1mU6NW:default",url:"assets/ScYvRzgzTYEvRAfb3CeiEIx8J1Y.otf"},url:new URL("assets/ScYvRzgzTYEvRAfb3CeiEIx8J1Y.otf",import.meta.url).href},...sharedStyle.fonts]);
export const __FramerMetadata__ = {"exports":{"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"default":{"type":"reactComponent","name":"Framerlng1mU6NW","slots":[],"annotations":{"framerIntrinsicWidth":"1200","framerCanvasComponentVariantDetails":"{\"propertyName\":\"variant\",\"data\":{\"default\":{\"layout\":[\"fixed\",\"fixed\"]},\"LiuFvNjg3\":{\"layout\":[\"fixed\",\"fixed\"]},\"SfZ7B7Ljm\":{\"layout\":[\"fixed\",\"fixed\"]},\"bizA6i3WY\":{\"layout\":[\"fixed\",\"auto\"]}}}","framerContractVersion":"1","framerIntrinsicHeight":"64"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./lng1mU6NW.map