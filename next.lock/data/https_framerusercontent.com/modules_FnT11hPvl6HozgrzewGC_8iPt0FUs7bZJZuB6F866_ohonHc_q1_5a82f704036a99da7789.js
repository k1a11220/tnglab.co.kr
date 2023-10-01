// Generated by Framer (b12dec4)
import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";import{addFonts,addPropertyControls,ControlType,cx,getFonts,useLocaleInfo,useVariantState,withCSS}from"framer";import{LayoutGroup,motion,MotionConfigContext}from"framer-motion";import*as React from"react";import ViewportNavItem from"https://framerusercontent.com/modules/DrjgTr1mxvntLCrwzlbX/LPx6cMmusBlEon5XhMQL/kWEu1wqvF.js";const ViewportNavItemFonts=getFonts(ViewportNavItem);const cycleOrder=["ddq018c9d"];const variantClassNames={ddq018c9d:"framer-v-oh2wkh"};function addPropertyOverrides(overrides,...variants){const nextOverrides={};variants===null||variants===void 0?void 0:variants.forEach(variant=>variant&&Object.assign(nextOverrides,overrides[variant]));return nextOverrides;}const transitions={default:{damping:60,delay:0,mass:1,stiffness:500,type:"spring"}};const Transition=({value,children})=>{const config=React.useContext(MotionConfigContext);const transition=value!==null&&value!==void 0?value:config.transition;const contextValue=React.useMemo(()=>({...config,transition}),[JSON.stringify(transition)]);return /*#__PURE__*/ _jsx(MotionConfigContext.Provider,{value:contextValue,children:children});};const getProps=({height,id,jk,jkr,nys,tls,width,...props})=>{return{...props,pFpWiZRsi:jk!==null&&jk!==void 0?jk:props.pFpWiZRsi,Rw21QuTaF:jkr!==null&&jkr!==void 0?jkr:props.Rw21QuTaF,vY3Pth54n:nys!==null&&nys!==void 0?nys:props.vY3Pth54n,ZgULvYYUI:tls!==null&&tls!==void 0?tls:props.ZgULvYYUI};};const createLayoutDependency=(props,variants)=>variants.join("-")+props.layoutDependency;const Component=/*#__PURE__*/ React.forwardRef(function(props,ref){const{activeLocale}=useLocaleInfo();const{style,className,layoutId,variant,pFpWiZRsi,Rw21QuTaF,vY3Pth54n,ZgULvYYUI,...restProps}=getProps(props);const{baseVariant,classNames,gestureVariant,setGestureState,setVariant,transition,variants}=useVariantState({cycleOrder,defaultVariant:"ddq018c9d",transitions,variant,variantClassNames});const layoutDependency=createLayoutDependency(props,variants);const defaultLayoutId=React.useId();return /*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsx(motion.div,{initial:variant,animate:variants,onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),className:cx("framer-36CIM",classNames),style:{display:"contents"},children:/*#__PURE__*/ _jsx(Transition,{value:transition,children:/*#__PURE__*/ _jsxs(motion.div,{...restProps,className:cx("framer-oh2wkh",className),"data-border":true,"data-framer-name":"Variant 1",layoutDependency:layoutDependency,layoutId:"ddq018c9d",ref:ref,style:{"--border-bottom-width":"1px","--border-color":'var(--token-edb64d4b-4cbb-48b4-b31b-4aabc5a8e7c5, rgba(0, 0, 0, 0.08)) /* {"name":"border"} */',"--border-left-width":"0px","--border-right-width":"0px","--border-style":"solid","--border-top-width":"0px",backgroundColor:"rgb(255, 255, 255)",...style},children:[/*#__PURE__*/ _jsx(motion.div,{className:"framer-16jkurw-container",layoutDependency:layoutDependency,layoutId:"BTOLA0DsI-container",children:/*#__PURE__*/ _jsx(ViewportNavItem,{cYfoh43bG:pFpWiZRsi,height:"100%",id:"BTOLA0DsI",layoutId:"BTOLA0DsI",style:{height:"100%",width:"100%"},variant:"kWZBy551A",width:"100%"})}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-156e7bi",layoutDependency:layoutDependency,layoutId:"DXIGU7t0V",style:{backgroundColor:"var(--token-edb64d4b-4cbb-48b4-b31b-4aabc5a8e7c5, rgba(0, 0, 0, 0.08))"}}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-1ekrvnr-container",layoutDependency:layoutDependency,layoutId:"GtQd6ujXd-container",children:/*#__PURE__*/ _jsx(ViewportNavItem,{cYfoh43bG:Rw21QuTaF,height:"100%",id:"GtQd6ujXd",layoutId:"GtQd6ujXd",style:{height:"100%",width:"100%"},variant:"bUhQ96GBE",width:"100%"})}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-1pi1lrj",layoutDependency:layoutDependency,layoutId:"Wyj1rpZpD",style:{backgroundColor:"var(--token-edb64d4b-4cbb-48b4-b31b-4aabc5a8e7c5, rgba(0, 0, 0, 0.08))"}}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-apxe9x-container",layoutDependency:layoutDependency,layoutId:"qUBkBguQY-container",children:/*#__PURE__*/ _jsx(ViewportNavItem,{cYfoh43bG:vY3Pth54n,height:"100%",id:"qUBkBguQY",layoutId:"qUBkBguQY",style:{height:"100%",width:"100%"},variant:"FK1VCjUOf",width:"100%"})}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-ofjvjw",layoutDependency:layoutDependency,layoutId:"JmsPveciC",style:{backgroundColor:"var(--token-edb64d4b-4cbb-48b4-b31b-4aabc5a8e7c5, rgba(0, 0, 0, 0.08))"}}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-21m5xy-container",layoutDependency:layoutDependency,layoutId:"p5aEJrrKi-container",children:/*#__PURE__*/ _jsx(ViewportNavItem,{cYfoh43bG:ZgULvYYUI,height:"100%",id:"p5aEJrrKi",layoutId:"p5aEJrrKi",style:{height:"100%",width:"100%"},variant:"pq7tmH5ho",width:"100%"})})]})})})});});const css=['.framer-36CIM [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',"@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-36CIM .framer-rog80q { display: block; }",".framer-36CIM .framer-oh2wkh { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; height: 72px; justify-content: space-between; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1200px; }",".framer-36CIM .framer-16jkurw-container, .framer-36CIM .framer-1ekrvnr-container, .framer-36CIM .framer-apxe9x-container, .framer-36CIM .framer-21m5xy-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }",".framer-36CIM .framer-156e7bi, .framer-36CIM .framer-1pi1lrj, .framer-36CIM .framer-ofjvjw { flex: none; height: 100%; overflow: hidden; position: relative; width: 1px; }"];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 72
 * @framerIntrinsicWidth 1200
 * @framerCanvasComponentVariantDetails {"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]}}}
 * @framerVariables {"pFpWiZRsi":"jk","Rw21QuTaF":"jkr","vY3Pth54n":"nys","ZgULvYYUI":"tls"}
 * @framerImmutableVariables false
 */ const FramerohonHc_q1=withCSS(Component,css,"framer-36CIM");export default FramerohonHc_q1;FramerohonHc_q1.displayName="Viewport/Nav";FramerohonHc_q1.defaultProps={height:72,width:1200};addPropertyControls(FramerohonHc_q1,{pFpWiZRsi:{defaultValue:false,title:"jk",type:ControlType.Boolean},Rw21QuTaF:{defaultValue:false,title:"jkr",type:ControlType.Boolean},vY3Pth54n:{defaultValue:false,title:"nys",type:ControlType.Boolean},ZgULvYYUI:{defaultValue:false,title:"tls",type:ControlType.Boolean}});addFonts(FramerohonHc_q1,[...ViewportNavItemFonts]);
export const __FramerMetadata__ = {"exports":{"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"default":{"type":"reactComponent","name":"FramerohonHc_q1","slots":[],"annotations":{"framerImmutableVariables":"false","framerIntrinsicHeight":"72","framerContractVersion":"1","framerIntrinsicWidth":"1200","framerCanvasComponentVariantDetails":"{\"propertyName\":\"variant\",\"data\":{\"default\":{\"layout\":[\"fixed\",\"fixed\"]}}}","framerVariables":"{\"pFpWiZRsi\":\"jk\",\"Rw21QuTaF\":\"jkr\",\"vY3Pth54n\":\"nys\",\"ZgULvYYUI\":\"tls\"}"}},"__FramerMetadata__":{"type":"variable"}}}