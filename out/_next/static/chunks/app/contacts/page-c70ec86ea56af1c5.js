(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[613],{7732:function(e,n,l){Promise.resolve().then(l.bind(l,8731))},8731:function(e,n,l){"use strict";l.r(n),l.d(n,{default:function(){return page}});var o=l(7437),a=l(2265),CheckBox=e=>{let{label:n,isChecked:l,onChange:a}=e;return(0,o.jsxs)("div",{className:"flex items-center mb-4",children:[(0,o.jsx)("input",{type:"checkbox",id:"checkbox",className:"h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded",checked:l,onChange:a}),(0,o.jsx)("label",{htmlFor:"checkbox",className:"ml-2 text-gray-700",children:n})]})},page=()=>{let[e,n]=(0,a.useState)({name:"",email:"",phone:"",source:"",projectOrProblem:""}),[l,t]=(0,a.useState)({webDevelopment:!1,softwareReengineering:!1,mobileDevelopment:!1,qualityAssurance:!1,ITConsulting:!1,staffingRecruitment:!1,digitalProductDesign:!1,customSoftwareDevelopment:!1,others:!1}),handleChange=l=>{let{name:o,value:a}=l.target;n({...e,[o]:a})},handleCheckboxChange=e=>{t(n=>({...n,[e]:!n[e]}))};return(0,o.jsxs)("div",{className:"bg-gradient-to-r from-violet-500 to-fuchsia-500 text-center  md:text-center p-6 ",children:[(0,o.jsx)("h2",{className:"text-l md:text-2xl font-bold my-4",children:"Contact Us"}),(0,o.jsx)("form",{onSubmit:n=>{n.preventDefault(),console.log("Form data submitted:",e)},children:(0,o.jsxs)("div",{className:"grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:min-h-screen lg:min-h-screen ",children:[(0,o.jsxs)("div",{className:"flex flex-col",children:[(0,o.jsxs)("div",{className:"text-left p-2 ",children:[(0,o.jsx)("h1",{className:"text-2xl md:text-xl lg:text-2xl xl:text-6xl font-bold mb-6",children:"We would love to serve you with our development skills tailored to the high-quality standards of your company."}),(0,o.jsx)("p",{className:"text-base",children:"Achieve all your goals and get long-term value for your business with professional services from our highly qualified experienced developers and designers."})]}),(0,o.jsx)("div",{className:"mt-8 p-2",children:(0,o.jsxs)("div",{className:"mb-4 mb-6",children:[(0,o.jsx)("input",{className:"border border-gray-800 rounded w-full mb-2 py-2 px-3 ",type:"text",name:"name",placeholder:"Name",value:e.name,onChange:handleChange,required:!0}),(0,o.jsx)("input",{className:"border border-gray-800 rounded w-full mb-2 py-2 px-3 ",type:"email",name:"email",placeholder:"Email",value:e.email,onChange:handleChange,required:!0}),(0,o.jsx)("input",{className:"border border-gray-800 rounded w-full mb-2 py-2 px-3 ",type:"tel",name:"phone",placeholder:"Phone",value:e.phone,onChange:handleChange,required:!0}),(0,o.jsx)("input",{className:"border border-gray-800 rounded w-full mb-2 py-2 px-3 ",type:"text",name:"source",placeholder:"Where did you hear about us? (optional)",value:e.source,onChange:handleChange}),(0,o.jsx)("textarea",{className:"border h-16 border-gray-800 rounded w-full mb-2 py-2 px-3 ",name:"projectOrProblem",placeholder:"Tell us about your project or problem",value:e.projectOrProblem,onChange:handleChange,required:!0})]})})]}),(0,o.jsxs)("div",{className:"flex flex-col ",children:[(0,o.jsx)("div",{className:"text-l md:text-2xl font-bold  my-4",children:"What services are you interested in?"}),(0,o.jsx)(CheckBox,{label:"Web Development",isChecked:l.webDevelopment,onChange:()=>handleCheckboxChange("webDevelopment")}),(0,o.jsx)(CheckBox,{label:"Software Re-engineering & Maintenance",isChecked:l.softwareReengineering,onChange:()=>handleCheckboxChange("softwareReengineering")}),(0,o.jsx)(CheckBox,{label:"Mobile Development",isChecked:l.mobileDevelopment,onChange:()=>handleCheckboxChange("mobileDevelopment")}),(0,o.jsx)(CheckBox,{label:"Quality Assurance",isChecked:l.qualityAssurance,onChange:()=>handleCheckboxChange("qualityAssurance")}),(0,o.jsx)(CheckBox,{label:"IT Consulting & Digital Advisory",isChecked:l.ITConsulting,onChange:()=>handleCheckboxChange("ITConsulting")}),(0,o.jsx)(CheckBox,{label:"IT Staffing & Recruitmente",isChecked:l.staffingRecruitment,onChange:()=>handleCheckboxChange("staffingRecruitment")}),(0,o.jsx)(CheckBox,{label:"Digital Product Design",isChecked:l.digitalProductDesign,onChange:()=>handleCheckboxChange("digitalProductDesign")}),(0,o.jsx)(CheckBox,{label:"Custom Software Development",isChecked:l.customSoftwareDevelopment,onChange:()=>handleCheckboxChange("customSoftwareDevelopment")}),(0,o.jsx)(CheckBox,{label:"Others",isChecked:l.others,onChange:()=>handleCheckboxChange("others")}),(0,o.jsx)("div",{className:"flex justify-between",children:(0,o.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white  mb-2 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit",children:"Submit"})})]})]})})]})}},622:function(e,n,l){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=l(2265),a=Symbol.for("react.element"),t=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),r=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function q(e,n,l){var o,i={},c=null,d=null;for(o in void 0!==l&&(c=""+l),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)t.call(n,o)&&!s.hasOwnProperty(o)&&(i[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===i[o]&&(i[o]=n[o]);return{$$typeof:a,type:e,key:c,ref:d,props:i,_owner:r.current}}n.jsx=q,n.jsxs=q},7437:function(e,n,l){"use strict";e.exports=l(622)}},function(e){e.O(0,[971,472,744],function(){return e(e.s=7732)}),_N_E=e.O()}]);