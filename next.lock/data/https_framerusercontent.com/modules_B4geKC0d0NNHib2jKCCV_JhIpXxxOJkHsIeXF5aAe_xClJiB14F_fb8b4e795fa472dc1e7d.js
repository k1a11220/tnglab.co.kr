// Generated by Framer (b12dec4)
import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";import{addFonts,addPropertyControls,ControlType,cx,getFonts,Image,RichText,useLocaleInfo,useVariantState,withCSS}from"framer";import{LayoutGroup,motion,MotionConfigContext}from"framer-motion";import*as React from"react";import HeroImg from"https://framerusercontent.com/modules/6iP4CX7Gn08SKtzCQrsD/WCREStnNQQv8Z2KszeFA/TExOnnDkz.js";const HeroImgFonts=getFonts(HeroImg);const cycleOrder=["Nb0IdHsMf","KpnAjMVWo","W7raJaXNL"];const variantClassNames={KpnAjMVWo:"framer-v-jhfatr",Nb0IdHsMf:"framer-v-n3kjf9",W7raJaXNL:"framer-v-7jnbk6"};function addPropertyOverrides(overrides,...variants){const nextOverrides={};variants===null||variants===void 0?void 0:variants.forEach(variant=>variant&&Object.assign(nextOverrides,overrides[variant]));return nextOverrides;}const transitions={default:{damping:60,delay:0,mass:1,stiffness:500,type:"spring"}};const Transition=({value,children})=>{const config=React.useContext(MotionConfigContext);const transition=value!==null&&value!==void 0?value:config.transition;const contextValue=React.useMemo(()=>({...config,transition}),[JSON.stringify(transition)]);return /*#__PURE__*/ _jsx(MotionConfigContext.Provider,{value:contextValue,children:children});};const humanReadableVariantMap={about:"Nb0IdHsMf",home:"W7raJaXNL",material:"KpnAjMVWo"};const getProps=({height,id,width,...props})=>{var _variant,ref;return{...props,variant:(ref=(_variant=humanReadableVariantMap[props.variant])!==null&&_variant!==void 0?_variant:props.variant)!==null&&ref!==void 0?ref:"Nb0IdHsMf"};};const createLayoutDependency=(props,variants)=>variants.join("-")+props.layoutDependency;const Component=/*#__PURE__*/ React.forwardRef(function(props,ref){const{activeLocale}=useLocaleInfo();const{style,className,layoutId,variant,...restProps}=getProps(props);const{baseVariant,classNames,gestureVariant,setGestureState,setVariant,transition,variants}=useVariantState({cycleOrder,defaultVariant:"Nb0IdHsMf",transitions,variant,variantClassNames});const layoutDependency=createLayoutDependency(props,variants);const isDisplayed=()=>{if(baseVariant==="W7raJaXNL")return false;return true;};const isDisplayed1=()=>{if(baseVariant==="W7raJaXNL")return true;return false;};const defaultLayoutId=React.useId();return /*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsx(motion.div,{initial:variant,animate:variants,onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),className:cx("framer-dG4G3",classNames),style:{display:"contents"},children:/*#__PURE__*/ _jsx(Transition,{value:transition,children:/*#__PURE__*/ _jsxs(Image,{...restProps,background:{alt:"",fit:"fill",intrinsicHeight:2890,intrinsicWidth:4602,pixelHeight:2890,pixelWidth:4602,sizes:"min(1200px, 100vw)",src:new URL("assets/b3YLQFhywtfFwhja5D5Rj5mun70.jpg",import.meta.url).href,srcSet:`${new URL("assets/512/b3YLQFhywtfFwhja5D5Rj5mun70.jpg",import.meta.url).href} 512w, ${new URL("assets/1024/b3YLQFhywtfFwhja5D5Rj5mun70.jpg",import.meta.url).href} 1024w, ${new URL("assets/2048/b3YLQFhywtfFwhja5D5Rj5mun70.jpg",import.meta.url).href} 2048w, ${new URL("assets/4096/b3YLQFhywtfFwhja5D5Rj5mun70.jpg",import.meta.url).href} 4096w, ${new URL("assets/b3YLQFhywtfFwhja5D5Rj5mun70.jpg",import.meta.url).href} 4602w`},className:cx("framer-n3kjf9",className),"data-framer-name":"about",layoutDependency:layoutDependency,layoutId:"Nb0IdHsMf",ref:ref,style:{filter:"grayscale(1)",WebkitFilter:"grayscale(1)",...style},...addPropertyOverrides({KpnAjMVWo:{"data-framer-name":"material",background:{alt:"",fit:"fill",intrinsicHeight:2890,intrinsicWidth:4602,pixelHeight:3468,pixelWidth:5202,sizes:"min(1200px, 100vw)",src:new URL("assets/imEbvtWTxl3Hi2rZ6h9cXWXHTbg.jpg",import.meta.url).href,srcSet:`${new URL("assets/512/imEbvtWTxl3Hi2rZ6h9cXWXHTbg.jpg",import.meta.url).href} 512w, ${new URL("assets/1024/imEbvtWTxl3Hi2rZ6h9cXWXHTbg.jpg",import.meta.url).href} 1024w, ${new URL("assets/2048/imEbvtWTxl3Hi2rZ6h9cXWXHTbg.jpg",import.meta.url).href} 2048w, ${new URL("assets/4096/imEbvtWTxl3Hi2rZ6h9cXWXHTbg.jpg",import.meta.url).href} 4096w, ${new URL("assets/imEbvtWTxl3Hi2rZ6h9cXWXHTbg.jpg",import.meta.url).href} 5202w`}},W7raJaXNL:{"data-framer-name":"home",background:{alt:"",fit:"fill",intrinsicHeight:2890,intrinsicWidth:4602,pixelHeight:5304,pixelWidth:7952,sizes:"min(1200px, 100vw)",src:new URL("assets/qTxfSq3A50dLoBWaoaZoHukc5s.jpg",import.meta.url).href,srcSet:`${new URL("assets/512/qTxfSq3A50dLoBWaoaZoHukc5s.jpg",import.meta.url).href} 512w, ${new URL("assets/1024/qTxfSq3A50dLoBWaoaZoHukc5s.jpg",import.meta.url).href} 1024w, ${new URL("assets/2048/qTxfSq3A50dLoBWaoaZoHukc5s.jpg",import.meta.url).href} 2048w, ${new URL("assets/4096/qTxfSq3A50dLoBWaoaZoHukc5s.jpg",import.meta.url).href} 4096w, ${new URL("assets/qTxfSq3A50dLoBWaoaZoHukc5s.jpg",import.meta.url).href} 7952w`}}},baseVariant,gestureVariant),children:[isDisplayed()&&/*#__PURE__*/ _jsxs(motion.div,{className:"framer-c0nadq",layoutDependency:layoutDependency,layoutId:"yZ_PxfPo_",style:{backgroundColor:"rgba(0, 0, 0, 0.4)"},children:[/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{style:{"--font-selector":"R0Y7SW50ZXItODAw","--framer-font-size":"32px","--framer-font-weight":"800","--framer-line-height":"1.5em","--framer-text-alignment":"left","--framer-text-color":"var(--extracted-r6o4lv)","--framer-text-transform":"uppercase"},children:"about"})}),className:"framer-3rvt7a",fonts:["GF;Inter-800"],layoutDependency:layoutDependency,layoutId:"P3jrOQ4EA",style:{"--extracted-r6o4lv":"rgb(255, 255, 255)","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline","--framer-paragraph-spacing":"0px"},variants:{KpnAjMVWo:{"--extracted-14qxiz":"rgb(255, 255, 255)","--extracted-1iakedh":"rgb(255, 255, 255)","--extracted-2gxw0f":"rgb(255, 255, 255)","--extracted-ydz9fi":"rgb(255, 255, 255)"}},verticalAlignment:"top",withExternalLayout:true,...addPropertyOverrides({KpnAjMVWo:{children:/*#__PURE__*/ _jsxs(React.Fragment,{children:[/*#__PURE__*/ _jsx(motion.p,{style:{"--font-selector":"SW50ZXItRXh0cmFCb2xk","--framer-font-family":'"Inter-ExtraBold", "Inter", sans-serif',"--framer-font-size":"40px","--framer-font-weight":"800","--framer-line-height":"1.5em","--framer-text-color":"var(--extracted-r6o4lv)"},children:"하스텔로이"}),/*#__PURE__*/ _jsx(motion.p,{style:{"--font-selector":"SW50ZXItRXh0cmFCb2xk","--framer-font-family":'"Inter-ExtraBold", "Inter", sans-serif',"--framer-font-size":"40px","--framer-font-weight":"800","--framer-line-height":"1.5em","--framer-text-color":"var(--extracted-2gxw0f)"},children:"인코넬"}),/*#__PURE__*/ _jsx(motion.p,{style:{"--font-selector":"SW50ZXItRXh0cmFCb2xk","--framer-font-family":'"Inter-ExtraBold", "Inter", sans-serif',"--framer-font-size":"40px","--framer-font-weight":"800","--framer-line-height":"1.5em","--framer-text-color":"var(--extracted-1iakedh)"},children:"니켈"}),/*#__PURE__*/ _jsx(motion.p,{style:{"--font-selector":"SW50ZXItRXh0cmFCb2xk","--framer-font-family":'"Inter-ExtraBold", "Inter", sans-serif',"--framer-font-size":"40px","--framer-font-weight":"800","--framer-line-height":"1.5em","--framer-text-color":"var(--extracted-14qxiz)"},children:"니켈 크롬합금"}),/*#__PURE__*/ _jsx(motion.p,{style:{"--font-selector":"SW50ZXItRXh0cmFCb2xk","--framer-font-family":'"Inter-ExtraBold", "Inter", sans-serif',"--framer-font-size":"40px","--framer-font-weight":"800","--framer-line-height":"1.5em","--framer-text-color":"var(--extracted-ydz9fi)"},children:"기타"})]}),fonts:["Inter-ExtraBold"]}},baseVariant,gestureVariant)}),/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{style:{"--font-selector":"R0Y7SW50ZXItNTAw","--framer-font-size":"32px","--framer-font-weight":"500","--framer-line-height":"1.5em","--framer-text-alignment":"left","--framer-text-color":"var(--extracted-r6o4lv)"},children:"TNG stands for Technology for Next Generation. TNG focuses on creating innovations for future generations. TNG's advancements will aid in the sustainable growth and flourishing of humanity."})}),className:"framer-eu0191",fonts:["GF;Inter-500"],layoutDependency:layoutDependency,layoutId:"sSbOm_zLl",style:{"--extracted-r6o4lv":"rgb(255, 255, 255)","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline","--framer-paragraph-spacing":"0px"},variants:{KpnAjMVWo:{"--extracted-1iakedh":"rgb(255, 255, 255)","--extracted-2gxw0f":"rgb(255, 255, 255)"}},verticalAlignment:"top",withExternalLayout:true,...addPropertyOverrides({KpnAjMVWo:{children:/*#__PURE__*/ _jsxs(React.Fragment,{children:[/*#__PURE__*/ _jsx(motion.p,{style:{"--font-selector":"R0Y7SW50ZXItODAw","--framer-font-size":"32px","--framer-font-weight":"800","--framer-line-height":"1.5em","--framer-text-alignment":"left","--framer-text-color":"var(--extracted-r6o4lv)"},children:"특수금속"}),/*#__PURE__*/ _jsx(motion.p,{style:{"--font-selector":"R0Y7SW50ZXItODAw","--framer-font-size":"32px","--framer-font-weight":"800","--framer-line-height":"1.5em","--framer-text-alignment":"left","--framer-text-color":"var(--extracted-2gxw0f)"},children:"중국 일양합금의 한국  판매대리점."}),/*#__PURE__*/ _jsx(motion.p,{style:{"--font-selector":"R0Y7SW50ZXItODAw","--framer-font-size":"32px","--framer-font-weight":"800","--framer-line-height":"1.5em","--framer-text-alignment":"left","--framer-text-color":"var(--extracted-1iakedh)"},children:"일양합금은 방산 ,우주 항공산업 , 원유 시추산업용 특수 합금소재를 생산하고 있습니다. "})]}),fonts:["GF;Inter-800"]}},baseVariant,gestureVariant)})]}),isDisplayed1()&&/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{style:{"--font-selector":"R0Y7SW50ZXItODAw","--framer-font-size":"32px","--framer-font-weight":"800","--framer-line-height":"1.5em","--framer-text-alignment":"left","--framer-text-color":"var(--extracted-r6o4lv)","--framer-text-transform":"uppercase"},children:"Technology for next generation"})}),className:"framer-4dvmug",fonts:["GF;Inter-800"],layoutDependency:layoutDependency,layoutId:"PmQZAkRKs",style:{"--extracted-r6o4lv":"rgb(255, 255, 255)","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline","--framer-paragraph-spacing":"0px"},verticalAlignment:"top",withExternalLayout:true}),isDisplayed1()&&/*#__PURE__*/ _jsx(motion.div,{className:"framer-1vcc4jh-container",layoutDependency:layoutDependency,layoutId:"LBcQXZq6_-container",children:/*#__PURE__*/ _jsx(HeroImg,{height:"100%",id:"LBcQXZq6_",layoutId:"LBcQXZq6_",style:{height:"100%",width:"100%"},variant:"fQb2szQLn",width:"100%"})})]})})})});});const css=['.framer-dG4G3 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',"@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-dG4G3 .framer-1i1aahu { display: block; }",".framer-dG4G3 .framer-n3kjf9 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 720px; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1200px; }",".framer-dG4G3 .framer-c0nadq { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 1px; justify-content: space-between; overflow: hidden; padding: 20px 20px 20px 20px; position: relative; width: 100%; }",".framer-dG4G3 .framer-3rvt7a, .framer-dG4G3 .framer-eu0191 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",".framer-dG4G3 .framer-4dvmug { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }",".framer-dG4G3 .framer-1vcc4jh-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 1; }","@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-dG4G3 .framer-n3kjf9 { gap: 0px; } .framer-dG4G3 .framer-n3kjf9 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-dG4G3 .framer-n3kjf9 > :first-child { margin-top: 0px; } .framer-dG4G3 .framer-n3kjf9 > :last-child { margin-bottom: 0px; } }",".framer-dG4G3.framer-v-jhfatr .framer-3rvt7a, .framer-dG4G3.framer-v-7jnbk6 .framer-4dvmug { order: 1; }",".framer-dG4G3.framer-v-jhfatr .framer-eu0191, .framer-dG4G3.framer-v-7jnbk6 .framer-1vcc4jh-container { order: 0; }",".framer-dG4G3.framer-v-7jnbk6 .framer-n3kjf9 { justify-content: flex-end; padding: 20px 20px 20px 20px; }"];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 720
 * @framerIntrinsicWidth 1200
 * @framerCanvasComponentVariantDetails {"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"KpnAjMVWo":{"layout":["fixed","fixed"]},"W7raJaXNL":{"layout":["fixed","fixed"]}}}
 * @framerImmutableVariables false
 */ const FramerxClJiB14F=withCSS(Component,css,"framer-dG4G3");export default FramerxClJiB14F;FramerxClJiB14F.displayName="Hero";FramerxClJiB14F.defaultProps={height:720,width:1200};addPropertyControls(FramerxClJiB14F,{variant:{options:["Nb0IdHsMf","KpnAjMVWo","W7raJaXNL"],optionTitles:["about","material","home"],title:"Variant",type:ControlType.Enum}});addFonts(FramerxClJiB14F,[{family:"Inter",moduleAsset:{localModuleIdentifier:"local-module:canvasComponent/xClJiB14F:default",url:"https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyYMZhrib2Bg-4.ttf"},style:"normal",url:"https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyYMZhrib2Bg-4.ttf",weight:"800"},{family:"Inter",moduleAsset:{localModuleIdentifier:"local-module:canvasComponent/xClJiB14F:default",url:"https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fMZhrib2Bg-4.ttf"},style:"normal",url:"https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fMZhrib2Bg-4.ttf",weight:"500"},...HeroImgFonts]);
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"FramerxClJiB14F","slots":[],"annotations":{"framerContractVersion":"1","framerCanvasComponentVariantDetails":"{\"propertyName\":\"variant\",\"data\":{\"default\":{\"layout\":[\"fixed\",\"fixed\"]},\"KpnAjMVWo\":{\"layout\":[\"fixed\",\"fixed\"]},\"W7raJaXNL\":{\"layout\":[\"fixed\",\"fixed\"]}}}","framerImmutableVariables":"false","framerIntrinsicWidth":"1200","framerIntrinsicHeight":"720"}},"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./xClJiB14F.map