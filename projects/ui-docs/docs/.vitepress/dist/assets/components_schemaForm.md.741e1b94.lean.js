import{_ as h,r as k,o as E,c as F,a as c,w as i,b as n,e as t,d as v,V as y}from"./app.92a2c68d.js";const C={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:e,createVNode:o,openBlock:p,createElementBlock:l}=y;function r(s,u){const a=e("it-schema-form");return p(),l("div",null,[o(a,{initValues:s.formData,labelWidth:120,baseColProps:{span:24},actionItemOptions:{wrapperCol:{style:{paddingLeft:"120px"}}},actionColOptions:{span:24},schemas:s.schemas,submitOnReset:!0,onSubmit:s.onSubmit,onReset:s.onReset},null,8,["initValues","schemas","onSubmit","onReset"])])}return{render:r,...{data(){return{formData:{},schemas:[{prop:"H3",label:"\u6807\u9898",component:"H3"},{prop:"input",label:"\u8F93\u5165\u6846",component:"Input"},{prop:"inputPassword",label:"\u5BC6\u7801\u8F93\u5165\u6846",component:"InputPassword"},{prop:"inputSearch",label:"\u641C\u7D22\u8F93\u5165\u6846",component:"InputSearch"},{prop:"inputTextArea",label:"\u6587\u672C\u57DF\u8F93\u5165\u6846",component:"InputTextArea"},{prop:"InputNumber",label:"\u6570\u5B57\u8F93\u5165\u6846",component:"InputNumber",componentProps:{style:{width:"160px"}}},{prop:"autoComplete",label:"\u81EA\u52A8\u5B8C\u6210\u8F93\u5165\u6846",component:"AutoComplete"},{prop:"select",label:"\u4E0B\u62C9\u9009\u62E9\u6846",component:"Select",componentProps:{options:[{label:"\u9009\u9879\u4E00",value:1},{label:"\u9009\u9879\u4E8C",value:2}]}},{prop:"treeSelect",label:"\u6811\u9009\u62E9\u6846",component:"TreeSelect",componentProps:{treeData:[{title:"parent 1",value:"parent 1",children:[{title:"parent 1-0",value:"parent 1-0",children:[{title:"my leaf",value:"leaf1"},{title:"your leaf",value:"leaf2"}]},{title:"parent 1-1",value:"parent 1-1"}]}]}},{prop:"tree",label:"\u6811\u5F62\u63A7\u4EF6",component:"Tree",componentProps:{checkable:!0,treeData:[{title:"parent 1",key:"0-0",children:[{title:"parent 1-0",key:"0-0-0",disabled:!0,children:[{title:"leaf",key:"0-0-0-0",disableCheckbox:!0},{title:"leaf",key:"0-0-0-1"}]},{title:"parent 1-1",key:"0-0-1",children:[{key:"0-0-1-0",title:"sss"}]}]}]}},{prop:"switch",label:"\u5F00\u5173",component:"Switch"},{prop:"radioGroup",label:"\u5355\u9009\u6846",component:"RadioGroup",componentProps:{options:[{label:"\u9009\u9879\u4E00",value:1},{label:"\u9009\u9879\u4E8C",value:2},{label:"\u9009\u9879\u4E09",value:3}]}},{prop:"checkboxGroup",label:"\u590D\u9009\u6846",component:"CheckboxGroup",componentProps:{options:[{label:"\u9009\u9879\u4E00",value:1},{label:"\u9009\u9879\u4E8C",value:2},{label:"\u9009\u9879\u4E09",value:3}]}},{prop:"cascader",label:"\u7EA7\u8054\u9009\u62E9",component:"Cascader",componentProps:{options:[{label:"\u4E0A\u6D77",value:"shanghai",children:[{value:"shixiaqu",label:"\u5E02\u8F96\u533A",children:[{value:"pudong",label:"\u6D66\u4E1C\u65B0\u533A"}]}]},{value:"zhejiang",label:"\u6D59\u6C5F",children:[{value:"hangzhou",label:"\u676D\u5DDE",children:[{value:"yuhang",label:"\u4F59\u676D\u533A"}]}]},{value:"jiangsu",label:"\u6C5F\u82CF",children:[{value:"nanjing",label:"\u5357\u4EAC",children:[{value:"qinhuai",label:"\u79E6\u6DEE\u533A"}]}]}]}},{prop:"slider",label:"\u533A\u95F4\u9009\u62E9",component:"Slider"},{prop:"rate",label:"\u8BC4\u5206",component:"Rate",componentProps:{style:{margin:"-2px 0 0 -10px"}}},{prop:"datePicker",label:"\u65E5\u671F\u9009\u62E9",component:"DatePicker",componentProps:{style:{width:"160px"}}},{prop:"monthPicker",label:"\u6708\u4EFD\u9009\u62E9",component:"MonthPicker",componentProps:{style:{width:"160px"}}},{prop:"rangePicker",label:"\u65F6\u95F4\u8303\u56F4\u9009\u62E9",component:"RangePicker"},{prop:"weekPicker",label:"\u5468\u9009\u62E9",component:"WeekPicker",componentProps:{style:{width:"160px"}}},{prop:"timePicker",label:"\u65F6\u95F4\u9009\u62E9",component:"TimePicker",componentProps:{style:{width:"160px"}}},{prop:"traceDataSelect",label:"\u53F0\u8D26\u65E5\u671F",component:"TraceDataSelect"},{prop:"Divider",label:"\u5206\u9694\u7EBF",component:"Divider"}]}},methods:{onSubmit(s){},onReset(s){}}}}}(),"render-demo-1":function(){const{resolveComponent:e,createVNode:o,openBlock:p,createElementBlock:l}=y;function r(s,u){const a=e("it-schema-form");return p(),l("div",null,[o(a,{initValues:s.formData,labelWidth:120,baseColProps:{span:24},actionItemOptions:{wrapperCol:{style:{paddingLeft:"120px"}}},showResetButton:!1,schemas:s.schemas,onSubmit:s.onSubmit},null,8,["initValues","schemas","onSubmit"])])}return{render:r,...{data(){return{formData:{},schemas:[{prop:"select",label:"\u4E0B\u62C9\u9009\u62E9\u6846",component:"Select",componentProps:{request:()=>new Promise(s=>{setTimeout(()=>{s([{label:"\u9009\u9879\u4E00",value:1},{label:"\u9009\u9879\u4E8C",value:2},{label:"\u9009\u9879\u4E09",value:3}])},300)})}},{prop:"treeSelect",label:"\u6811\u9009\u62E9\u6846",component:"TreeSelect",componentProps:{request:()=>new Promise(s=>{setTimeout(()=>{s([{title:"parent 1",value:"parent 1",children:[{title:"parent 1-0",value:"parent 1-0",children:[{title:"my leaf",value:"leaf1"},{title:"your leaf",value:"leaf2"}]},{title:"parent 1-1",value:"parent 1-1"}]}])},300)})}},{prop:"tree",label:"\u6811\u5F62\u63A7\u4EF6",component:"Tree",componentProps:{checkable:!0,request:()=>new Promise(s=>{setTimeout(()=>{s([{title:"parent 1",key:"0-0",children:[{title:"parent 1-0",key:"0-0-0",disabled:!0,children:[{title:"leaf",key:"0-0-0-0",disableCheckbox:!0},{title:"leaf",key:"0-0-0-1"}]},{title:"parent 1-1",key:"0-0-1",children:[{key:"0-0-1-0",title:"sss"}]}]}])},300)})}},{prop:"radioGroup",label:"\u5355\u9009\u6846",component:"RadioGroup",componentProps:{request:()=>new Promise(s=>{setTimeout(()=>{s([{label:"\u9009\u9879\u4E00",value:1},{label:"\u9009\u9879\u4E8C",value:2},{label:"\u9009\u9879\u4E09",value:3}])},300)})}},{prop:"checkboxGroup",label:"\u590D\u9009\u6846",component:"CheckboxGroup",componentProps:{request:()=>new Promise(s=>{setTimeout(()=>{s([{label:"\u9009\u9879\u4E00",value:1},{label:"\u9009\u9879\u4E8C",value:2},{label:"\u9009\u9879\u4E09",value:3}])},300)})}},{prop:"cascader",label:"\u7EA7\u8054\u9009\u62E9",component:"Cascader",componentProps:{request:()=>new Promise(s=>{setTimeout(()=>{s([{label:"\u4E0A\u6D77",value:"shanghai",children:[{value:"shixiaqu",label:"\u5E02\u8F96\u533A",children:[{value:"pudong",label:"\u6D66\u4E1C\u65B0\u533A"}]}]},{value:"zhejiang",label:"\u6D59\u6C5F",children:[{value:"hangzhou",label:"\u676D\u5DDE",children:[{value:"yuhang",label:"\u4F59\u676D\u533A"}]}]},{value:"jiangsu",label:"\u6C5F\u82CF",children:[{value:"nanjing",label:"\u5357\u4EAC",children:[{value:"qinhuai",label:"\u79E6\u6DEE\u533A"}]}]}])},300)})}}]}},methods:{onSubmit(s){}}}}}(),"render-demo-2":function(){const{resolveComponent:e,createVNode:o,openBlock:p,createElementBlock:l}=y;function r(s,u){const a=e("it-schema-form");return p(),l("div",null,[o(a,{initValues:s.formData,labelWidth:120,baseColProps:{span:24},actionItemOptions:{wrapperCol:{style:{paddingLeft:"120px"}}},showResetButton:!1,schemas:s.schemas,onSubmit:s.onSubmit},null,8,["initValues","schemas","onSubmit"])])}return{render:r,...{data(){return{formData:{},schemas:[{prop:"input",label:"\u8F93\u5165\u6846",component:"Input",rules:[{required:!0}]},{prop:"inputTextArea",label:"\u6587\u672C\u57DF\u8F93\u5165\u6846",component:"InputTextArea",rules:[{required:!0}]},{prop:"InputNumber",label:"\u6570\u5B57\u8F93\u5165\u6846",component:"InputNumber",componentProps:{style:{width:"160px"}},rules:[{required:!0}]},{prop:"select",label:"\u4E0B\u62C9\u9009\u62E9\u6846",component:"Select",rules:[{required:!0}]},{prop:"radioGroup",label:"\u5355\u9009\u6846",component:"RadioGroup",componentProps:{options:[{label:"\u9009\u9879\u4E00",value:1},{label:"\u9009\u9879\u4E8C",value:2},{label:"\u9009\u9879\u4E09",value:3}]},rules:[{required:!0}]},{prop:"checkboxGroup",label:"\u590D\u9009\u6846",component:"CheckboxGroup",componentProps:{options:[{label:"\u9009\u9879\u4E00",value:1},{label:"\u9009\u9879\u4E8C",value:2},{label:"\u9009\u9879\u4E09",value:3}]},rules:[{required:!0}]},{prop:"cascader",label:"\u7EA7\u8054\u9009\u62E9",component:"Cascader",componentProps:{options:[{label:"\u4E0A\u6D77",value:"shanghai",children:[{value:"shixiaqu",label:"\u5E02\u8F96\u533A",children:[{value:"pudong",label:"\u6D66\u4E1C\u65B0\u533A"}]}]},{value:"zhejiang",label:"\u6D59\u6C5F",children:[{value:"hangzhou",label:"\u676D\u5DDE",children:[{value:"yuhang",label:"\u4F59\u676D\u533A"}]}]},{value:"jiangsu",label:"\u6C5F\u82CF",children:[{value:"nanjing",label:"\u5357\u4EAC",children:[{value:"qinhuai",label:"\u79E6\u6DEE\u533A"}]}]}]},rules:[{required:!0}]},{prop:"datePicker",label:"\u65E5\u671F\u9009\u62E9",component:"DatePicker",componentProps:{style:{width:"160px"}},rules:[{required:!0}]}]}},methods:{onSubmit(s){}}}}}(),"render-demo-3":function(){const{resolveComponent:e,createVNode:o,openBlock:p,createElementBlock:l}=y;function r(s,u){const a=e("it-schema-form");return p(),l("div",null,[o(a,{initValues:s.formData,labelWidth:120,baseColProps:{span:24},actionItemOptions:{wrapperCol:{style:{paddingLeft:"120px"}}},showResetButton:!1,schemas:s.schemas,onSubmit:s.onSubmit},null,8,["initValues","schemas","onSubmit"])])}return{render:r,...{data(){return{formData:{},schemas:[{prop:"input",label:"\u8F93\u5165\u6846",component:"Input"},{prop:"select",label:"\u4E0B\u62C9\u9009\u62E9\u6846",component:"Select"}]}},methods:{onSubmit(s){}}}}}(),"render-demo-4":function(){const{resolveComponent:e,createVNode:o,openBlock:p,createElementBlock:l}=y;function r(s,u){const a=e("it-schema-form");return p(),l("div",null,[o(a,{initValues:s.formData,labelWidth:120,labelAlign:"left",baseColProps:{span:24},showActionButtonGroup:!1,noStyle:!0,schemas:s.schemas},null,8,["initValues","schemas"])])}return{render:r,...{data(){return{formData:{input:"test input",inputPassword:"test password",inputSearch:"test inputSearch",inputTextArea:`test 
 inputTextArea`,InputNumber:"100",autoComplete:"test autoComplete",select:1,treeSelect:"parent 1-1",tree:["0-0-1-0","0-0-1","0-0"],switch:!0,radioGroup:2,checkboxGroup:[2,3],cascader:["shanghai","shixiaqu","pudong"],slider:10,rate:4,datePicker:"2022-12-13 14:47:44",monthPicker:"2022-05-13 14:47:47",rangePicker:["2022-12-05 14:47:28","2023-01-17 14:47:28"],weekPicker:"2022-12-14 14:47:54",timePicker:"2022-12-13 14:47:59",traceDataSelect:"2022-12-31"},schemas:[{prop:"H3",label:"\u6807\u9898",component:"H3"},{prop:"input",label:"\u8F93\u5165\u6846",component:"Input"},{prop:"inputPassword",label:"\u5BC6\u7801\u8F93\u5165\u6846",component:"InputPassword"},{prop:"inputSearch",label:"\u641C\u7D22\u8F93\u5165\u6846",component:"InputSearch"},{prop:"inputTextArea",label:"\u6587\u672C\u57DF\u8F93\u5165\u6846",component:"InputTextArea"},{prop:"InputNumber",label:"\u6570\u5B57\u8F93\u5165\u6846",component:"InputNumber",componentProps:{style:{width:"160px"}}},{prop:"autoComplete",label:"\u81EA\u52A8\u5B8C\u6210\u8F93\u5165\u6846",component:"AutoComplete"},{prop:"select",label:"\u4E0B\u62C9\u9009\u62E9\u6846",component:"Select",componentProps:{options:[{label:"\u9009\u9879\u4E00",value:1},{label:"\u9009\u9879\u4E8C",value:2}]}},{prop:"treeSelect",label:"\u6811\u9009\u62E9\u6846",component:"TreeSelect",componentProps:{treeData:[{title:"parent 1",value:"parent 1",children:[{title:"parent 1-0",value:"parent 1-0",children:[{title:"my leaf",value:"leaf1"},{title:"your leaf",value:"leaf2"}]},{title:"parent 1-1",value:"parent 1-1"}]}]}},{prop:"tree",label:"\u6811\u5F62\u63A7\u4EF6",component:"Tree",componentProps:{checkable:!0,treeData:[{title:"parent 1",key:"0-0",children:[{title:"parent 1-0",key:"0-0-0",disabled:!0,children:[{title:"leaf",key:"0-0-0-0",disableCheckbox:!0},{title:"leaf",key:"0-0-0-1"}]},{title:"parent 1-1",key:"0-0-1",children:[{key:"0-0-1-0",title:"sss"}]}]}]}},{prop:"switch",label:"\u5F00\u5173",component:"Switch"},{prop:"radioGroup",label:"\u5355\u9009\u6846",component:"RadioGroup",componentProps:{options:[{label:"\u9009\u9879\u4E00",value:1},{label:"\u9009\u9879\u4E8C",value:2},{label:"\u9009\u9879\u4E09",value:3}]}},{prop:"checkboxGroup",label:"\u590D\u9009\u6846",component:"CheckboxGroup",componentProps:{options:[{label:"\u9009\u9879\u4E00",value:1},{label:"\u9009\u9879\u4E8C",value:2},{label:"\u9009\u9879\u4E09",value:3}]}},{prop:"cascader",label:"\u7EA7\u8054\u9009\u62E9",component:"Cascader",componentProps:{options:[{label:"\u4E0A\u6D77",value:"shanghai",children:[{value:"shixiaqu",label:"\u5E02\u8F96\u533A",children:[{value:"pudong",label:"\u6D66\u4E1C\u65B0\u533A"}]}]},{value:"zhejiang",label:"\u6D59\u6C5F",children:[{value:"hangzhou",label:"\u676D\u5DDE",children:[{value:"yuhang",label:"\u4F59\u676D\u533A"}]}]},{value:"jiangsu",label:"\u6C5F\u82CF",children:[{value:"nanjing",label:"\u5357\u4EAC",children:[{value:"qinhuai",label:"\u79E6\u6DEE\u533A"}]}]}]}},{prop:"slider",label:"\u533A\u95F4\u9009\u62E9",component:"Slider"},{prop:"rate",label:"\u8BC4\u5206",component:"Rate",componentProps:{style:{margin:"-2px 0 0 -10px"}}},{prop:"Divider",label:"\u5206\u9694\u7EBF",component:"Divider"},{prop:"datePicker",label:"\u65E5\u671F\u9009\u62E9",component:"DatePicker",componentProps:{style:{width:"160px"}}},{prop:"monthPicker",label:"\u6708\u4EFD\u9009\u62E9",component:"MonthPicker",componentProps:{style:{width:"160px"}}},{prop:"rangePicker",label:"\u65F6\u95F4\u8303\u56F4\u9009\u62E9",component:"RangePicker"},{prop:"weekPicker",label:"\u5468\u9009\u62E9",component:"WeekPicker",componentProps:{style:{width:"160px"}}},{prop:"timePicker",label:"\u65F6\u95F4\u9009\u62E9",component:"TimePicker",componentProps:{style:{width:"160px"}}},{prop:"traceDataSelect",label:"\u53F0\u8D26\u65E5\u671F",component:"TraceDataSelect"}]}},methods:{onSubmit(s){},onReset(s){}}}}}()}},z=JSON.parse('{"title":"SchemaForm \u8868\u5355","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":2,"title":"\u52A8\u6001\u83B7\u53D6\u6570\u636E","slug":"\u52A8\u6001\u83B7\u53D6\u6570\u636E"},{"level":2,"title":"\u8868\u5355\u9A8C\u8BC1","slug":"\u8868\u5355\u9A8C\u8BC1"},{"level":2,"title":"\u81EA\u5B9A\u4E49\u8868\u5355\u63A7\u4EF6","slug":"\u81EA\u5B9A\u4E49\u8868\u5355\u63A7\u4EF6"},{"level":2,"title":"\u67E5\u770B\u8868\u5355","slug":"\u67E5\u770B\u8868\u5355"},{"level":2,"title":"\u53C2\u6570","slug":"\u53C2\u6570"},{"level":3,"title":"Form Schema Attributes","slug":"form-schema-attributes"},{"level":3,"title":"Help Attributes","slug":"help-attributes"},{"level":2,"title":"\u4E8B\u4EF6","slug":"\u4E8B\u4EF6"},{"level":2,"title":"\u65B9\u6CD5","slug":"\u65B9\u6CD5"}],"relativePath":"components/schemaForm.md","lastUpdated":1670915712000}'),D=n("h1",{id:"schemaform-\u8868\u5355",tabindex:"-1"},"SchemaForm \u8868\u5355",-1),A=n("blockquote",null,[n("p",null,[t("\u5BF9 Ant-design-vue form \u7EC4\u4EF6\u7684\u5C01\u88C5\uFF0C\u4F7F\u7528\u524D\u4E86\u89E3 ant-design-vue \u7684 "),n("a",{href:"https://www.antdv.com/components/form-cn",target:"_blank"},"form"),t(" \u7EC4\u4EF6\u3002")])],-1),P=n("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},"\u57FA\u7840\u7528\u6CD5",-1),B=n("p",null,"\u8868\u5355\u7684\u57FA\u7840\u7528\u6CD5\u5C55\u793A\u3002",-1),f=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("it-schema-form")]),t(`
    `),n("span",{class:"token attr-name"},":initValues"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("formData"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":labelWidth"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("120"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":baseColProps"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`{
      span: 24
    }`),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":actionItemOptions"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`{
      wrapperCol: {
        style: {
          paddingLeft: '120px'
        }
      }
    }`),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":actionColOptions"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`{
      span: 24
    }`),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":schemas"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("schemas"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":submitOnReset"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onSubmit"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@reset"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onReset"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
  `),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"formData"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"schemas"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'H3'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6807\u9898'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'H3'"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'input'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u8F93\u5165\u6846'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Input'"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'inputPassword'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5BC6\u7801\u8F93\u5165\u6846'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'InputPassword'"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'inputSearch'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u641C\u7D22\u8F93\u5165\u6846'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'InputSearch'"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'inputTextArea'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6587\u672C\u57DF\u8F93\u5165\u6846'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'InputTextArea'"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'InputNumber'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6570\u5B57\u8F93\u5165\u6846'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'InputNumber'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"componentProps"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token literal-property property"},"style"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
                `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'160px'"),t(`
              `),n("span",{class:"token punctuation"},"}"),t(`
            `),n("span",{class:"token punctuation"},"}"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'autoComplete'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u81EA\u52A8\u5B8C\u6210\u8F93\u5165\u6846'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'AutoComplete'"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'select'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u4E0B\u62C9\u9009\u62E9\u6846'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Select'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"componentProps"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token literal-property property"},"options"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                `),n("span",{class:"token punctuation"},"{"),t(`
                  `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9009\u9879\u4E00'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),t(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"{"),t(`
                  `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9009\u9879\u4E8C'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),t(`
                `),n("span",{class:"token punctuation"},"}"),t(`
              `),n("span",{class:"token punctuation"},"]"),t(`
            `),n("span",{class:"token punctuation"},"}"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'treeSelect'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6811\u9009\u62E9\u6846'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'TreeSelect'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"componentProps"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token literal-property property"},"treeData"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                `),n("span",{class:"token punctuation"},"{"),t(`
                  `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                    `),n("span",{class:"token punctuation"},"{"),t(`
                      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-0'"),n("span",{class:"token punctuation"},","),t(`
                      `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-0'"),n("span",{class:"token punctuation"},","),t(`
                      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                        `),n("span",{class:"token punctuation"},"{"),t(`
                          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'my leaf'"),n("span",{class:"token punctuation"},","),t(`
                          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'leaf1'"),t(`
                        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                        `),n("span",{class:"token punctuation"},"{"),t(`
                          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'your leaf'"),n("span",{class:"token punctuation"},","),t(`
                          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'leaf2'"),t(`
                        `),n("span",{class:"token punctuation"},"}"),t(`
                      `),n("span",{class:"token punctuation"},"]"),t(`
                    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                    `),n("span",{class:"token punctuation"},"{"),t(`
                      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-1'"),n("span",{class:"token punctuation"},","),t(`
                      `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-1'"),t(`
                    `),n("span",{class:"token punctuation"},"}"),t(`
                  `),n("span",{class:"token punctuation"},"]"),t(`
                `),n("span",{class:"token punctuation"},"}"),t(`
              `),n("span",{class:"token punctuation"},"]"),t(`
            `),n("span",{class:"token punctuation"},"}"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'tree'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6811\u5F62\u63A7\u4EF6'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Tree'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"componentProps"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token literal-property property"},"checkable"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token literal-property property"},"treeData"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                `),n("span",{class:"token punctuation"},"{"),t(`
                  `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                    `),n("span",{class:"token punctuation"},"{"),t(`
                      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-0'"),n("span",{class:"token punctuation"},","),t(`
                      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),t(`
                      `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
                      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                        `),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0-0-0-0'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"disableCheckbox"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                        `),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0-0-0-1'"),t(),n("span",{class:"token punctuation"},"}"),t(`
                      `),n("span",{class:"token punctuation"},"]"),t(`
                    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                    `),n("span",{class:"token punctuation"},"{"),t(`
                      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-1'"),n("span",{class:"token punctuation"},","),t(`
                      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},","),t(`
                      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0-0-1-0'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'sss'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),t(`
                    `),n("span",{class:"token punctuation"},"}"),t(`
                  `),n("span",{class:"token punctuation"},"]"),t(`
                `),n("span",{class:"token punctuation"},"}"),t(`
              `),n("span",{class:"token punctuation"},"]"),t(`
            `),n("span",{class:"token punctuation"},"}"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'switch'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5F00\u5173'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Switch'"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'radioGroup'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5355\u9009\u6846'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'RadioGroup'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"componentProps"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token literal-property property"},"options"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                `),n("span",{class:"token punctuation"},"{"),t(`
                  `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9009\u9879\u4E00'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),t(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"{"),t(`
                  `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9009\u9879\u4E8C'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),t(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"{"),t(`
                  `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9009\u9879\u4E09'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"3"),t(`
                `),n("span",{class:"token punctuation"},"}"),t(`
              `),n("span",{class:"token punctuation"},"]"),t(`
            `),n("span",{class:"token punctuation"},"}"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'checkboxGroup'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u590D\u9009\u6846'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'CheckboxGroup'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"componentProps"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token literal-property property"},"options"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                `),n("span",{class:"token punctuation"},"{"),t(`
                  `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9009\u9879\u4E00'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),t(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"{"),t(`
                  `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9009\u9879\u4E8C'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),t(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"{"),t(`
                  `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9009\u9879\u4E09'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"3"),t(`
                `),n("span",{class:"token punctuation"},"}"),t(`
              `),n("span",{class:"token punctuation"},"]"),t(`
            `),n("span",{class:"token punctuation"},"}"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'cascader'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u7EA7\u8054\u9009\u62E9'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Cascader'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"componentProps"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token literal-property property"},"options"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                `),n("span",{class:"token punctuation"},"{"),t(`
                  `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u4E0A\u6D77'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'shanghai'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                    `),n("span",{class:"token punctuation"},"{"),t(`
                      `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'shixiaqu'"),n("span",{class:"token punctuation"},","),t(`
                      `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5E02\u8F96\u533A'"),n("span",{class:"token punctuation"},","),t(`
                      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                        `),n("span",{class:"token punctuation"},"{"),t(`
                          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'pudong'"),n("span",{class:"token punctuation"},","),t(`
                          `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6D66\u4E1C\u65B0\u533A'"),n("span",{class:"token punctuation"},","),t(`
                        `),n("span",{class:"token punctuation"},"}"),t(`
                      `),n("span",{class:"token punctuation"},"]"),t(`
                    `),n("span",{class:"token punctuation"},"}"),t(`
                  `),n("span",{class:"token punctuation"},"]"),t(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"{"),t(`
                  `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'zhejiang'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6D59\u6C5F'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                    `),n("span",{class:"token punctuation"},"{"),t(`
                      `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'hangzhou'"),n("span",{class:"token punctuation"},","),t(`
                      `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u676D\u5DDE'"),n("span",{class:"token punctuation"},","),t(`
                      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                        `),n("span",{class:"token punctuation"},"{"),t(`
                          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'yuhang'"),n("span",{class:"token punctuation"},","),t(`
                          `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u4F59\u676D\u533A'"),t(`
                        `),n("span",{class:"token punctuation"},"}"),t(`
                      `),n("span",{class:"token punctuation"},"]"),t(`
                    `),n("span",{class:"token punctuation"},"}"),t(`
                  `),n("span",{class:"token punctuation"},"]"),t(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"{"),t(`
                  `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'jiangsu'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6C5F\u82CF'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                    `),n("span",{class:"token punctuation"},"{"),t(`
                      `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'nanjing'"),n("span",{class:"token punctuation"},","),t(`
                      `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5357\u4EAC'"),n("span",{class:"token punctuation"},","),t(`
                      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                        `),n("span",{class:"token punctuation"},"{"),t(`
                          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'qinhuai'"),n("span",{class:"token punctuation"},","),t(`
                          `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u79E6\u6DEE\u533A'"),t(`
                        `),n("span",{class:"token punctuation"},"}"),t(`
                      `),n("span",{class:"token punctuation"},"]"),t(`
                    `),n("span",{class:"token punctuation"},"}"),t(`
                  `),n("span",{class:"token punctuation"},"]"),t(`
                `),n("span",{class:"token punctuation"},"}"),t(`
              `),n("span",{class:"token punctuation"},"]"),t(`
            `),n("span",{class:"token punctuation"},"}"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'slider'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u533A\u95F4\u9009\u62E9'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Slider'"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'rate'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u8BC4\u5206'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Rate'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"componentProps"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token literal-property property"},"style"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
                `),n("span",{class:"token literal-property property"},"margin"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'-2px 0 0 -10px'"),t(`
              `),n("span",{class:"token punctuation"},"}"),t(`
            `),n("span",{class:"token punctuation"},"}"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'datePicker'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u65E5\u671F\u9009\u62E9'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'DatePicker'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"componentProps"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token literal-property property"},"style"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
                `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'160px'"),t(`
              `),n("span",{class:"token punctuation"},"}"),t(`
            `),n("span",{class:"token punctuation"},"}"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'monthPicker'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6708\u4EFD\u9009\u62E9'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'MonthPicker'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"componentProps"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token literal-property property"},"style"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
                `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'160px'"),t(`
              `),n("span",{class:"token punctuation"},"}"),t(`
            `),n("span",{class:"token punctuation"},"}"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'rangePicker'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u65F6\u95F4\u8303\u56F4\u9009\u62E9'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'RangePicker'"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'weekPicker'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5468\u9009\u62E9'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'WeekPicker'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"componentProps"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token literal-property property"},"style"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
                `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'160px'"),t(`
              `),n("span",{class:"token punctuation"},"}"),t(`
            `),n("span",{class:"token punctuation"},"}"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'timePicker'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u65F6\u95F4\u9009\u62E9'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'TimePicker'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"componentProps"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token literal-property property"},"style"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
                `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'160px'"),t(`
              `),n("span",{class:"token punctuation"},"}"),t(`
            `),n("span",{class:"token punctuation"},"}"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'traceDataSelect'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u53F0\u8D26\u65E5\u671F'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'TraceDataSelect'"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Divider'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5206\u9694\u7EBF'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Divider'"),t(`
          `),n("span",{class:"token punctuation"},"}"),t(`
        `),n("span",{class:"token punctuation"},"]"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function"},"onSubmit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"values"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'submit:'"),n("span",{class:"token punctuation"},","),t(" values"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token function"},"onReset"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"values"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'reset:'"),n("span",{class:"token punctuation"},","),t(" values"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),w=n("h2",{id:"\u52A8\u6001\u83B7\u53D6\u6570\u636E",tabindex:"-1"},"\u52A8\u6001\u83B7\u53D6\u6570\u636E",-1),x=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("it-schema-form")]),t(`
    `),n("span",{class:"token attr-name"},":initValues"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("formData"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":labelWidth"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("120"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":baseColProps"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`{
      span: 24
    }`),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":actionItemOptions"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`{
      wrapperCol: {
        style: {
          paddingLeft: '120px'
        }
      }
    }`),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":showResetButton"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":schemas"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("schemas"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onSubmit"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
  `),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"formData"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"schemas"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'select'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u4E0B\u62C9\u9009\u62E9\u6846'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Select'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"componentProps"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token function-variable function"},"request"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
                `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"resolve"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
                  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
                    `),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
                      `),n("span",{class:"token punctuation"},"{"),t(`
                        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9009\u9879\u4E00'"),n("span",{class:"token punctuation"},","),t(`
                        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),t(`
                      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                      `),n("span",{class:"token punctuation"},"{"),t(`
                        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9009\u9879\u4E8C'"),n("span",{class:"token punctuation"},","),t(`
                        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),t(`
                      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                      `),n("span",{class:"token punctuation"},"{"),t(`
                        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9009\u9879\u4E09'"),n("span",{class:"token punctuation"},","),t(`
                        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"3"),t(`
                      `),n("span",{class:"token punctuation"},"}"),t(`
                    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
                  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"300"),n("span",{class:"token punctuation"},")"),t(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
              `),n("span",{class:"token punctuation"},"}"),t(`
            `),n("span",{class:"token punctuation"},"}"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'treeSelect'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6811\u9009\u62E9\u6846'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'TreeSelect'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"componentProps"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token function-variable function"},"request"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
                `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"resolve"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
                  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
                    `),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
                      `),n("span",{class:"token punctuation"},"{"),t(`
                        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),t(`
                        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),t(`
                        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                          `),n("span",{class:"token punctuation"},"{"),t(`
                            `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-0'"),n("span",{class:"token punctuation"},","),t(`
                            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-0'"),n("span",{class:"token punctuation"},","),t(`
                            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                              `),n("span",{class:"token punctuation"},"{"),t(`
                                `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'my leaf'"),n("span",{class:"token punctuation"},","),t(`
                                `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'leaf1'"),t(`
                              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                              `),n("span",{class:"token punctuation"},"{"),t(`
                                `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'your leaf'"),n("span",{class:"token punctuation"},","),t(`
                                `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'leaf2'"),t(`
                              `),n("span",{class:"token punctuation"},"}"),t(`
                            `),n("span",{class:"token punctuation"},"]"),t(`
                          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                          `),n("span",{class:"token punctuation"},"{"),t(`
                            `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-1'"),n("span",{class:"token punctuation"},","),t(`
                            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-1'"),t(`
                          `),n("span",{class:"token punctuation"},"}"),t(`
                        `),n("span",{class:"token punctuation"},"]"),t(`
                      `),n("span",{class:"token punctuation"},"}"),t(`
                    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
                  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"300"),n("span",{class:"token punctuation"},")"),t(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
              `),n("span",{class:"token punctuation"},"}"),t(`
            `),n("span",{class:"token punctuation"},"}"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'tree'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6811\u5F62\u63A7\u4EF6'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Tree'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"componentProps"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token literal-property property"},"checkable"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token function-variable function"},"request"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
                `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"resolve"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
                  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
                    `),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
                      `),n("span",{class:"token punctuation"},"{"),t(`
                        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),t(`
                        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},","),t(`
                        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                          `),n("span",{class:"token punctuation"},"{"),t(`
                            `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-0'"),n("span",{class:"token punctuation"},","),t(`
                            `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),t(`
                            `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
                            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                              `),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0-0-0-0'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"disableCheckbox"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                              `),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0-0-0-1'"),t(),n("span",{class:"token punctuation"},"}"),t(`
                            `),n("span",{class:"token punctuation"},"]"),t(`
                          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                          `),n("span",{class:"token punctuation"},"{"),t(`
                            `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-1'"),n("span",{class:"token punctuation"},","),t(`
                            `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},","),t(`
                            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0-0-1-0'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'sss'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),t(`
                          `),n("span",{class:"token punctuation"},"}"),t(`
                        `),n("span",{class:"token punctuation"},"]"),t(`
                      `),n("span",{class:"token punctuation"},"}"),t(`
                    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
                  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"300"),n("span",{class:"token punctuation"},")"),t(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
              `),n("span",{class:"token punctuation"},"}"),t(`
            `),n("span",{class:"token punctuation"},"}"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'radioGroup'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5355\u9009\u6846'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'RadioGroup'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"componentProps"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token function-variable function"},"request"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
                `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"resolve"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
                  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
                    `),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
                      `),n("span",{class:"token punctuation"},"{"),t(`
                        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9009\u9879\u4E00'"),n("span",{class:"token punctuation"},","),t(`
                        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),t(`
                      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                      `),n("span",{class:"token punctuation"},"{"),t(`
                        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9009\u9879\u4E8C'"),n("span",{class:"token punctuation"},","),t(`
                        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),t(`
                      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                      `),n("span",{class:"token punctuation"},"{"),t(`
                        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9009\u9879\u4E09'"),n("span",{class:"token punctuation"},","),t(`
                        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"3"),t(`
                      `),n("span",{class:"token punctuation"},"}"),t(`
                    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
                  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"300"),n("span",{class:"token punctuation"},")"),t(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
              `),n("span",{class:"token punctuation"},"}"),t(`
            `),n("span",{class:"token punctuation"},"}"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'checkboxGroup'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u590D\u9009\u6846'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'CheckboxGroup'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"componentProps"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token function-variable function"},"request"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
                `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"resolve"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
                  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
                    `),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
                      `),n("span",{class:"token punctuation"},"{"),t(`
                        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9009\u9879\u4E00'"),n("span",{class:"token punctuation"},","),t(`
                        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),t(`
                      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                      `),n("span",{class:"token punctuation"},"{"),t(`
                        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9009\u9879\u4E8C'"),n("span",{class:"token punctuation"},","),t(`
                        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),t(`
                      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                      `),n("span",{class:"token punctuation"},"{"),t(`
                        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9009\u9879\u4E09'"),n("span",{class:"token punctuation"},","),t(`
                        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"3"),t(`
                      `),n("span",{class:"token punctuation"},"}"),t(`
                    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
                  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"300"),n("span",{class:"token punctuation"},")"),t(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
              `),n("span",{class:"token punctuation"},"}"),t(`
            `),n("span",{class:"token punctuation"},"}"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'cascader'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u7EA7\u8054\u9009\u62E9'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Cascader'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"componentProps"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token function-variable function"},"request"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
                `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"resolve"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
                  `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
                    `),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
                      `),n("span",{class:"token punctuation"},"{"),t(`
                        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u4E0A\u6D77'"),n("span",{class:"token punctuation"},","),t(`
                        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'shanghai'"),n("span",{class:"token punctuation"},","),t(`
                        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                          `),n("span",{class:"token punctuation"},"{"),t(`
                            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'shixiaqu'"),n("span",{class:"token punctuation"},","),t(`
                            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5E02\u8F96\u533A'"),n("span",{class:"token punctuation"},","),t(`
                            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                              `),n("span",{class:"token punctuation"},"{"),t(`
                                `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'pudong'"),n("span",{class:"token punctuation"},","),t(`
                                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6D66\u4E1C\u65B0\u533A'"),n("span",{class:"token punctuation"},","),t(`
                              `),n("span",{class:"token punctuation"},"}"),t(`
                            `),n("span",{class:"token punctuation"},"]"),t(`
                          `),n("span",{class:"token punctuation"},"}"),t(`
                        `),n("span",{class:"token punctuation"},"]"),t(`
                      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                      `),n("span",{class:"token punctuation"},"{"),t(`
                        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'zhejiang'"),n("span",{class:"token punctuation"},","),t(`
                        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6D59\u6C5F'"),n("span",{class:"token punctuation"},","),t(`
                        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                          `),n("span",{class:"token punctuation"},"{"),t(`
                            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'hangzhou'"),n("span",{class:"token punctuation"},","),t(`
                            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u676D\u5DDE'"),n("span",{class:"token punctuation"},","),t(`
                            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                              `),n("span",{class:"token punctuation"},"{"),t(`
                                `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'yuhang'"),n("span",{class:"token punctuation"},","),t(`
                                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u4F59\u676D\u533A'"),t(`
                              `),n("span",{class:"token punctuation"},"}"),t(`
                            `),n("span",{class:"token punctuation"},"]"),t(`
                          `),n("span",{class:"token punctuation"},"}"),t(`
                        `),n("span",{class:"token punctuation"},"]"),t(`
                      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                      `),n("span",{class:"token punctuation"},"{"),t(`
                        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'jiangsu'"),n("span",{class:"token punctuation"},","),t(`
                        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6C5F\u82CF'"),n("span",{class:"token punctuation"},","),t(`
                        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                          `),n("span",{class:"token punctuation"},"{"),t(`
                            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'nanjing'"),n("span",{class:"token punctuation"},","),t(`
                            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5357\u4EAC'"),n("span",{class:"token punctuation"},","),t(`
                            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                              `),n("span",{class:"token punctuation"},"{"),t(`
                                `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'qinhuai'"),n("span",{class:"token punctuation"},","),t(`
                                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u79E6\u6DEE\u533A'"),t(`
                              `),n("span",{class:"token punctuation"},"}"),t(`
                            `),n("span",{class:"token punctuation"},"]"),t(`
                          `),n("span",{class:"token punctuation"},"}"),t(`
                        `),n("span",{class:"token punctuation"},"]"),t(`
                      `),n("span",{class:"token punctuation"},"}"),t(`
                    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
                  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"300"),n("span",{class:"token punctuation"},")"),t(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
              `),n("span",{class:"token punctuation"},"}"),t(`
            `),n("span",{class:"token punctuation"},"}"),t(`
          `),n("span",{class:"token punctuation"},"}"),t(`
        `),n("span",{class:"token punctuation"},"]"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function"},"onSubmit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"values"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'submit:'"),n("span",{class:"token punctuation"},","),t(" values"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),S=n("h2",{id:"\u8868\u5355\u9A8C\u8BC1",tabindex:"-1"},"\u8868\u5355\u9A8C\u8BC1",-1),_=n("p",null,"\u652F\u6301\u6DFB\u52A0\u6821\u9A8C\u89C4\u5219\u3002",-1),q=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("it-schema-form")]),t(`
    `),n("span",{class:"token attr-name"},":initValues"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("formData"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":labelWidth"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("120"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":baseColProps"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`{
      span: 24
    }`),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":actionItemOptions"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`{
      wrapperCol: {
        style: {
          paddingLeft: '120px'
        }
      }
    }`),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":showResetButton"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":schemas"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("schemas"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onSubmit"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
  `),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"formData"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"schemas"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'input'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u8F93\u5165\u6846'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Input'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"rules"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),n("span",{class:"token literal-property property"},"required"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'inputTextArea'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6587\u672C\u57DF\u8F93\u5165\u6846'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'InputTextArea'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"rules"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),n("span",{class:"token literal-property property"},"required"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'InputNumber'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6570\u5B57\u8F93\u5165\u6846'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'InputNumber'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"componentProps"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token literal-property property"},"style"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
                `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'160px'"),t(`
              `),n("span",{class:"token punctuation"},"}"),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"rules"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),n("span",{class:"token literal-property property"},"required"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'select'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u4E0B\u62C9\u9009\u62E9\u6846'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Select'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"rules"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),n("span",{class:"token literal-property property"},"required"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'radioGroup'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5355\u9009\u6846'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'RadioGroup'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"componentProps"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token literal-property property"},"options"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                `),n("span",{class:"token punctuation"},"{"),t(`
                  `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9009\u9879\u4E00'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),t(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"{"),t(`
                  `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9009\u9879\u4E8C'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),t(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"{"),t(`
                  `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9009\u9879\u4E09'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"3"),t(`
                `),n("span",{class:"token punctuation"},"}"),t(`
              `),n("span",{class:"token punctuation"},"]"),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"rules"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),n("span",{class:"token literal-property property"},"required"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'checkboxGroup'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u590D\u9009\u6846'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'CheckboxGroup'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"componentProps"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token literal-property property"},"options"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                `),n("span",{class:"token punctuation"},"{"),t(`
                  `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9009\u9879\u4E00'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),t(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"{"),t(`
                  `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9009\u9879\u4E8C'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),t(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"{"),t(`
                  `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9009\u9879\u4E09'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"3"),t(`
                `),n("span",{class:"token punctuation"},"}"),t(`
              `),n("span",{class:"token punctuation"},"]"),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"rules"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),n("span",{class:"token literal-property property"},"required"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'cascader'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u7EA7\u8054\u9009\u62E9'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Cascader'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"componentProps"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token literal-property property"},"options"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                `),n("span",{class:"token punctuation"},"{"),t(`
                  `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u4E0A\u6D77'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'shanghai'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                    `),n("span",{class:"token punctuation"},"{"),t(`
                      `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'shixiaqu'"),n("span",{class:"token punctuation"},","),t(`
                      `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5E02\u8F96\u533A'"),n("span",{class:"token punctuation"},","),t(`
                      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                        `),n("span",{class:"token punctuation"},"{"),t(`
                          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'pudong'"),n("span",{class:"token punctuation"},","),t(`
                          `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6D66\u4E1C\u65B0\u533A'"),n("span",{class:"token punctuation"},","),t(`
                        `),n("span",{class:"token punctuation"},"}"),t(`
                      `),n("span",{class:"token punctuation"},"]"),t(`
                    `),n("span",{class:"token punctuation"},"}"),t(`
                  `),n("span",{class:"token punctuation"},"]"),t(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"{"),t(`
                  `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'zhejiang'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6D59\u6C5F'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                    `),n("span",{class:"token punctuation"},"{"),t(`
                      `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'hangzhou'"),n("span",{class:"token punctuation"},","),t(`
                      `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u676D\u5DDE'"),n("span",{class:"token punctuation"},","),t(`
                      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                        `),n("span",{class:"token punctuation"},"{"),t(`
                          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'yuhang'"),n("span",{class:"token punctuation"},","),t(`
                          `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u4F59\u676D\u533A'"),t(`
                        `),n("span",{class:"token punctuation"},"}"),t(`
                      `),n("span",{class:"token punctuation"},"]"),t(`
                    `),n("span",{class:"token punctuation"},"}"),t(`
                  `),n("span",{class:"token punctuation"},"]"),t(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"{"),t(`
                  `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'jiangsu'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6C5F\u82CF'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                    `),n("span",{class:"token punctuation"},"{"),t(`
                      `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'nanjing'"),n("span",{class:"token punctuation"},","),t(`
                      `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5357\u4EAC'"),n("span",{class:"token punctuation"},","),t(`
                      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                        `),n("span",{class:"token punctuation"},"{"),t(`
                          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'qinhuai'"),n("span",{class:"token punctuation"},","),t(`
                          `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u79E6\u6DEE\u533A'"),t(`
                        `),n("span",{class:"token punctuation"},"}"),t(`
                      `),n("span",{class:"token punctuation"},"]"),t(`
                    `),n("span",{class:"token punctuation"},"}"),t(`
                  `),n("span",{class:"token punctuation"},"]"),t(`
                `),n("span",{class:"token punctuation"},"}"),t(`
              `),n("span",{class:"token punctuation"},"]"),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"rules"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),n("span",{class:"token literal-property property"},"required"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'datePicker'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u65E5\u671F\u9009\u62E9'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'DatePicker'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"componentProps"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token literal-property property"},"style"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
                `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'160px'"),t(`
              `),n("span",{class:"token punctuation"},"}"),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"rules"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),n("span",{class:"token literal-property property"},"required"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),t(`
          `),n("span",{class:"token punctuation"},"}"),t(`
        `),n("span",{class:"token punctuation"},"]"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function"},"onSubmit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"values"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("values"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),T=n("h2",{id:"\u81EA\u5B9A\u4E49\u8868\u5355\u63A7\u4EF6",tabindex:"-1"},"\u81EA\u5B9A\u4E49\u8868\u5355\u63A7\u4EF6",-1),I=n("p",null,"\u652F\u6301\u5F15\u5165\u81EA\u5B9A\u4E49\u8868\u5355\u63A7\u4EF6\u3002",-1),G=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("it-schema-form")]),t(`
    `),n("span",{class:"token attr-name"},":initValues"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("formData"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":labelWidth"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("120"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":baseColProps"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`{
      span: 24
    }`),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":actionItemOptions"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`{
      wrapperCol: {
        style: {
          paddingLeft: '120px'
        }
      }
    }`),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":showResetButton"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":schemas"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("schemas"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onSubmit"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
  `),n("span",{class:"token comment"},"// \u5F15\u5165\u81EA\u5B9A\u4E49\u8868\u5355\u63A7\u4EF6\u7EC4\u4EF6\uFF0Cvitepress \u6682\u4E0D\u652F\u6301 md \u4EE3\u7801\u5757\u5F15\u5165\u7EC4\u4EF6\uFF0C\u5148\u6CE8\u91CA"),t(`
  `),n("span",{class:"token comment"},"/* import TraceDataSelect form '@/components/TraceDataSelect' */"),t(`

  `),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"formData"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"schemas"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'input'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u8F93\u5165\u6846'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Input'"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'select'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u4E0B\u62C9\u9009\u62E9\u6846'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Select'"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token comment"},"// {"),t(`
          `),n("span",{class:"token comment"},"//   prop: 'traceDataSelect',"),t(`
          `),n("span",{class:"token comment"},"//   label: '\u53F0\u8D26\u65E5\u671F',"),t(`
          `),n("span",{class:"token comment"},"//   component: TraceDataSelect"),t(`
          `),n("span",{class:"token comment"},"// }"),t(`
        `),n("span",{class:"token punctuation"},"]"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function"},"onSubmit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"values"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("values"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),R=n("h2",{id:"\u67E5\u770B\u8868\u5355",tabindex:"-1"},"\u67E5\u770B\u8868\u5355",-1),j=n("p",null,[t("\u8BBE\u7F6E "),n("code",null,"noStyle"),t(" \u5C5E\u6027\u4E3A "),n("code",null,"true"),t("\uFF0C\u5F00\u542F\u7EAF\u6587\u672C\u5C55\u793A\u8868\u5355\u3002")],-1),N=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("it-schema-form")]),t(`
    `),n("span",{class:"token attr-name"},":initValues"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("formData"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":labelWidth"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("120"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"labelAlign"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("left"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":baseColProps"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`{
      span: 24
    }`),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":showActionButtonGroup"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":noStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":schemas"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("schemas"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
  `),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"formData"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token literal-property property"},"input"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'test input'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"inputPassword"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'test password'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"inputSearch"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'test inputSearch'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"inputTextArea"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'test \\n inputTextArea'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"InputNumber"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'100'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"autoComplete"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'test autoComplete'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"select"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"treeSelect"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-1'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"tree"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'0-0-1-0'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token keyword"},"switch"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"radioGroup"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"checkboxGroup"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"cascader"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'shanghai'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'shixiaqu'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'pudong'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"slider"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"rate"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"datePicker"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2022-12-13 14:47:44'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"monthPicker"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2022-05-13 14:47:47'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"rangePicker"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'2022-12-05 14:47:28'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'2023-01-17 14:47:28'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"weekPicker"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2022-12-14 14:47:54'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"timePicker"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2022-12-13 14:47:59'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"traceDataSelect"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2022-12-31'"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"schemas"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'H3'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6807\u9898'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'H3'"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'input'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u8F93\u5165\u6846'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Input'"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'inputPassword'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5BC6\u7801\u8F93\u5165\u6846'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'InputPassword'"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'inputSearch'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u641C\u7D22\u8F93\u5165\u6846'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'InputSearch'"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'inputTextArea'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6587\u672C\u57DF\u8F93\u5165\u6846'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'InputTextArea'"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'InputNumber'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6570\u5B57\u8F93\u5165\u6846'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'InputNumber'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"componentProps"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token literal-property property"},"style"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
                `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'160px'"),t(`
              `),n("span",{class:"token punctuation"},"}"),t(`
            `),n("span",{class:"token punctuation"},"}"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'autoComplete'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u81EA\u52A8\u5B8C\u6210\u8F93\u5165\u6846'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'AutoComplete'"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'select'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u4E0B\u62C9\u9009\u62E9\u6846'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Select'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"componentProps"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token literal-property property"},"options"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                `),n("span",{class:"token punctuation"},"{"),t(`
                  `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9009\u9879\u4E00'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),t(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"{"),t(`
                  `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9009\u9879\u4E8C'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),t(`
                `),n("span",{class:"token punctuation"},"}"),t(`
              `),n("span",{class:"token punctuation"},"]"),t(`
            `),n("span",{class:"token punctuation"},"}"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'treeSelect'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6811\u9009\u62E9\u6846'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'TreeSelect'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"componentProps"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token literal-property property"},"treeData"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                `),n("span",{class:"token punctuation"},"{"),t(`
                  `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                    `),n("span",{class:"token punctuation"},"{"),t(`
                      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-0'"),n("span",{class:"token punctuation"},","),t(`
                      `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-0'"),n("span",{class:"token punctuation"},","),t(`
                      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                        `),n("span",{class:"token punctuation"},"{"),t(`
                          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'my leaf'"),n("span",{class:"token punctuation"},","),t(`
                          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'leaf1'"),t(`
                        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                        `),n("span",{class:"token punctuation"},"{"),t(`
                          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'your leaf'"),n("span",{class:"token punctuation"},","),t(`
                          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'leaf2'"),t(`
                        `),n("span",{class:"token punctuation"},"}"),t(`
                      `),n("span",{class:"token punctuation"},"]"),t(`
                    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                    `),n("span",{class:"token punctuation"},"{"),t(`
                      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-1'"),n("span",{class:"token punctuation"},","),t(`
                      `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-1'"),t(`
                    `),n("span",{class:"token punctuation"},"}"),t(`
                  `),n("span",{class:"token punctuation"},"]"),t(`
                `),n("span",{class:"token punctuation"},"}"),t(`
              `),n("span",{class:"token punctuation"},"]"),t(`
            `),n("span",{class:"token punctuation"},"}"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'tree'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6811\u5F62\u63A7\u4EF6'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Tree'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"componentProps"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token literal-property property"},"checkable"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token literal-property property"},"treeData"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                `),n("span",{class:"token punctuation"},"{"),t(`
                  `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                    `),n("span",{class:"token punctuation"},"{"),t(`
                      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-0'"),n("span",{class:"token punctuation"},","),t(`
                      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),t(`
                      `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
                      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                        `),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0-0-0-0'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"disableCheckbox"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                        `),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0-0-0-1'"),t(),n("span",{class:"token punctuation"},"}"),t(`
                      `),n("span",{class:"token punctuation"},"]"),t(`
                    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                    `),n("span",{class:"token punctuation"},"{"),t(`
                      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'parent 1-1'"),n("span",{class:"token punctuation"},","),t(`
                      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},","),t(`
                      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'0-0-1-0'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'sss'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),t(`
                    `),n("span",{class:"token punctuation"},"}"),t(`
                  `),n("span",{class:"token punctuation"},"]"),t(`
                `),n("span",{class:"token punctuation"},"}"),t(`
              `),n("span",{class:"token punctuation"},"]"),t(`
            `),n("span",{class:"token punctuation"},"}"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'switch'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5F00\u5173'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Switch'"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'radioGroup'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5355\u9009\u6846'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'RadioGroup'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"componentProps"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token literal-property property"},"options"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                `),n("span",{class:"token punctuation"},"{"),t(`
                  `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9009\u9879\u4E00'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),t(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"{"),t(`
                  `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9009\u9879\u4E8C'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),t(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"{"),t(`
                  `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9009\u9879\u4E09'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"3"),t(`
                `),n("span",{class:"token punctuation"},"}"),t(`
              `),n("span",{class:"token punctuation"},"]"),t(`
            `),n("span",{class:"token punctuation"},"}"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'checkboxGroup'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u590D\u9009\u6846'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'CheckboxGroup'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"componentProps"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token literal-property property"},"options"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                `),n("span",{class:"token punctuation"},"{"),t(`
                  `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9009\u9879\u4E00'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),t(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"{"),t(`
                  `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9009\u9879\u4E8C'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),t(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"{"),t(`
                  `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9009\u9879\u4E09'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"3"),t(`
                `),n("span",{class:"token punctuation"},"}"),t(`
              `),n("span",{class:"token punctuation"},"]"),t(`
            `),n("span",{class:"token punctuation"},"}"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'cascader'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u7EA7\u8054\u9009\u62E9'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Cascader'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"componentProps"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token literal-property property"},"options"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                `),n("span",{class:"token punctuation"},"{"),t(`
                  `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u4E0A\u6D77'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'shanghai'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                    `),n("span",{class:"token punctuation"},"{"),t(`
                      `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'shixiaqu'"),n("span",{class:"token punctuation"},","),t(`
                      `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5E02\u8F96\u533A'"),n("span",{class:"token punctuation"},","),t(`
                      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                        `),n("span",{class:"token punctuation"},"{"),t(`
                          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'pudong'"),n("span",{class:"token punctuation"},","),t(`
                          `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6D66\u4E1C\u65B0\u533A'"),n("span",{class:"token punctuation"},","),t(`
                        `),n("span",{class:"token punctuation"},"}"),t(`
                      `),n("span",{class:"token punctuation"},"]"),t(`
                    `),n("span",{class:"token punctuation"},"}"),t(`
                  `),n("span",{class:"token punctuation"},"]"),t(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"{"),t(`
                  `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'zhejiang'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6D59\u6C5F'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                    `),n("span",{class:"token punctuation"},"{"),t(`
                      `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'hangzhou'"),n("span",{class:"token punctuation"},","),t(`
                      `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u676D\u5DDE'"),n("span",{class:"token punctuation"},","),t(`
                      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                        `),n("span",{class:"token punctuation"},"{"),t(`
                          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'yuhang'"),n("span",{class:"token punctuation"},","),t(`
                          `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u4F59\u676D\u533A'"),t(`
                        `),n("span",{class:"token punctuation"},"}"),t(`
                      `),n("span",{class:"token punctuation"},"]"),t(`
                    `),n("span",{class:"token punctuation"},"}"),t(`
                  `),n("span",{class:"token punctuation"},"]"),t(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"{"),t(`
                  `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'jiangsu'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6C5F\u82CF'"),n("span",{class:"token punctuation"},","),t(`
                  `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                    `),n("span",{class:"token punctuation"},"{"),t(`
                      `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'nanjing'"),n("span",{class:"token punctuation"},","),t(`
                      `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5357\u4EAC'"),n("span",{class:"token punctuation"},","),t(`
                      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                        `),n("span",{class:"token punctuation"},"{"),t(`
                          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'qinhuai'"),n("span",{class:"token punctuation"},","),t(`
                          `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u79E6\u6DEE\u533A'"),t(`
                        `),n("span",{class:"token punctuation"},"}"),t(`
                      `),n("span",{class:"token punctuation"},"]"),t(`
                    `),n("span",{class:"token punctuation"},"}"),t(`
                  `),n("span",{class:"token punctuation"},"]"),t(`
                `),n("span",{class:"token punctuation"},"}"),t(`
              `),n("span",{class:"token punctuation"},"]"),t(`
            `),n("span",{class:"token punctuation"},"}"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'slider'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u533A\u95F4\u9009\u62E9'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Slider'"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'rate'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u8BC4\u5206'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Rate'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"componentProps"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token literal-property property"},"style"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
                `),n("span",{class:"token literal-property property"},"margin"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'-2px 0 0 -10px'"),t(`
              `),n("span",{class:"token punctuation"},"}"),t(`
            `),n("span",{class:"token punctuation"},"}"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Divider'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5206\u9694\u7EBF'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Divider'"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'datePicker'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u65E5\u671F\u9009\u62E9'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'DatePicker'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"componentProps"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token literal-property property"},"style"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
                `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'160px'"),t(`
              `),n("span",{class:"token punctuation"},"}"),t(`
            `),n("span",{class:"token punctuation"},"}"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'monthPicker'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u6708\u4EFD\u9009\u62E9'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'MonthPicker'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"componentProps"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token literal-property property"},"style"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
                `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'160px'"),t(`
              `),n("span",{class:"token punctuation"},"}"),t(`
            `),n("span",{class:"token punctuation"},"}"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'rangePicker'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u65F6\u95F4\u8303\u56F4\u9009\u62E9'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'RangePicker'"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'weekPicker'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u5468\u9009\u62E9'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'WeekPicker'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"componentProps"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token literal-property property"},"style"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
                `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'160px'"),t(`
              `),n("span",{class:"token punctuation"},"}"),t(`
            `),n("span",{class:"token punctuation"},"}"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'timePicker'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u65F6\u95F4\u9009\u62E9'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'TimePicker'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"componentProps"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token literal-property property"},"style"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
                `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'160px'"),t(`
              `),n("span",{class:"token punctuation"},"}"),t(`
            `),n("span",{class:"token punctuation"},"}"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'traceDataSelect'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u53F0\u8D26\u65E5\u671F'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'TraceDataSelect'"),t(`
          `),n("span",{class:"token punctuation"},"}"),t(`
        `),n("span",{class:"token punctuation"},"]"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function"},"onSubmit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"values"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'submit:'"),n("span",{class:"token punctuation"},","),t(" values"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token function"},"onReset"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"values"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'reset:'"),n("span",{class:"token punctuation"},","),t(" values"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),V=v('<h2 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570</h2><p><code>ant-design-vue</code> \u7684 <code>Form Attributes</code> \u5168\u90E8\u53EF\u7528\uFF0C\u8FD9\u91CC\u5217\u4E3E\u65B0\u6DFB\u52A0\u5B57\u6BB5</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u5FC5\u4F20</th><th>\u7C7B\u578B</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>isCard</td><td>\u662F\u5426\u4EE5\u5361\u7247\u6837\u5F0F\u5C55\u793A</td><td>\u5426</td><td>Boolean</td><td>-</td><td>true</td></tr><tr><td>initValues</td><td>\u8868\u5355\u5B57\u6BB5\u521D\u59CB\u503C</td><td>\u662F</td><td>Object</td><td>-</td><td>{}</td></tr><tr><td>schemas</td><td>\u8868\u5355\u9879\u914D\u7F6E\uFF0C\u5177\u4F53\u914D\u7F6E\u53C2\u6570\u770B\u4E0B\u65B9 <code>Form Schema Attributes</code></td><td>\u662F</td><td>Array</td><td>-</td><td>[]</td></tr><tr><td>labelWidth</td><td>label \u6807\u7B7E\u5BBD\u5EA6</td><td>\u5426</td><td>Number | String</td><td>-</td><td>-</td></tr><tr><td>fieldMapToTime</td><td>RangeTime \u683C\u5F0F\u5904\u7406</td><td>\u5426</td><td>Array</td><td>-</td><td>[]</td></tr><tr><td>fieldMapToObject</td><td>Object \u6570\u636E\u683C\u5F0F\u5904\u7406</td><td>\u5426</td><td>Array</td><td>-</td><td>[]</td></tr><tr><td>fieldMapToArray</td><td>Array \u6570\u636E\u683C\u5F0F\u5904\u7406</td><td>\u5426</td><td>Array</td><td>-</td><td>[]</td></tr><tr><td>transformDateFunc</td><td>\u8F6C\u5316\u65F6\u95F4</td><td>\u5426</td><td>Function</td><td>-</td><td>date.format.(&#39;YYYY-MM-DD HH:mm:ss&#39;)</td></tr><tr><td>mergeDynamicData</td><td>\u8868\u5355\u9879\u52A8\u6001\u6570\u636E</td><td>\u5426</td><td>Object | Array</td><td>-</td><td>-</td></tr><tr><td>baseRowStyle</td><td>\u6805\u680F Row \u6837\u5F0F</td><td>\u5426</td><td>Object</td><td>-</td><td>-</td></tr><tr><td>rowProps</td><td>\u6805\u680F Row \u914D\u7F6E</td><td>\u5426</td><td>Object</td><td>-</td><td>-</td></tr><tr><td>baseColProps</td><td>\u6805\u680F Col \u914D\u7F6E</td><td>\u5426</td><td>Object</td><td>-</td><td>-</td></tr><tr><td>submitOnReset</td><td>\u70B9\u51FB\u91CD\u7F6E\u6309\u94AE\u65F6\u63D0\u4EA4\u8868\u5355</td><td>\u5426</td><td>Boolean</td><td>-</td><td>-</td></tr><tr><td>showActionButtonGroup</td><td>\u663E\u793A\u64CD\u4F5C\u6309\u94AE</td><td>\u5426</td><td>Boolean</td><td>-</td><td>true</td></tr><tr><td>showSubmitButton</td><td>\u663E\u793A\u786E\u8BA4\u6309\u94AE</td><td>\u5426</td><td>Boolean</td><td>-</td><td>true</td></tr><tr><td>showResetButton</td><td>\u663E\u793A\u91CD\u7F6E\u6309\u94AE</td><td>\u5426</td><td>Boolean</td><td>-</td><td>true</td></tr><tr><td>actionColOptions</td><td>\u64CD\u4F5C\u5217 Col \u914D\u7F6E</td><td>\u5426</td><td>Object</td><td>-</td><td>-</td></tr><tr><td>actionItemOptions</td><td>\u64CD\u4F5C\u5217 formItem \u914D\u7F6E</td><td>\u5426</td><td>Object</td><td>-</td><td>-</td></tr><tr><td>submitButtonOptions</td><td>\u786E\u8BA4\u6309\u94AE\u914D\u7F6E\uFF0Cantd \u6309\u94AE\u5C5E\u6027\u5747\u652F\u6301\uFF0C\u53E6\u5916\u6743\u9650\u63A7\u5236\u6DFB\u52A0 auth \u5C5E\u6027</td><td>\u5426</td><td>Object</td><td>-</td><td>-</td></tr><tr><td>resetButtonOptions</td><td>\u91CD\u7F6E\u6309\u94AE\u914D\u7F6E</td><td>\u5426</td><td>Object</td><td>-</td><td>-</td></tr><tr><td>submitFunc</td><td>\u81EA\u5B9A\u4E49\u786E\u8BA4\u51FD\u6570</td><td>\u5426</td><td>Function</td><td>-</td><td>-</td></tr><tr><td>resetFunc</td><td>\u81EA\u5B9A\u4E49\u91CD\u7F6E\u51FD\u6570</td><td>\u5426</td><td>Function</td><td>-</td><td>-</td></tr><tr><td>disabled</td><td>\u7981\u7528\u8868\u5355</td><td>\u5426</td><td>Boolean</td><td>-</td><td>-</td></tr><tr><td>noStyle</td><td>\u7EAF\u6587\u672C\u5C55\u793A\u8868\u5355\uFF0C\u7528\u4E8E\u4EC5\u9700\u8981\u67E5\u770B\u6570\u636E\u7684\u573A\u666F \uFF5C \u5426 \uFF5C Boolean</td><td>-</td><td>-</td><td></td><td></td></tr><tr><td>showAdvancedButton</td><td>\u663E\u793A\u5C55\u5F00\u6536\u8D77\u6309\u94AE</td><td>\u5426</td><td>Boolean</td><td>-</td><td>-</td></tr><tr><td>autoAdvancedLine</td><td>\u8D85\u8FC7 n \u884C\u6298\u53E0</td><td>\u5426</td><td>Number</td><td>-</td><td>3</td></tr><tr><td>alwaysShowLines</td><td>\u4E0D\u53D7\u6298\u53E0\u5F71\u54CD\u7684\u884C\u6570</td><td>\u5426</td><td>Number</td><td>-</td><td>1</td></tr></tbody></table><h3 id="form-schema-attributes" tabindex="-1">Form Schema Attributes</h3><p><code>ant-design-vue</code> \u7684 <code>Form Item Attributes</code> \u548C <code>\u8868\u5355\u63A7\u4EF6 Attributes</code> \u5168\u90E8\u53EF\u7528\uFF0C\u8FD9\u91CC\u5217\u4E3E\u65B0\u6DFB\u52A0\u5B57\u6BB5</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u5FC5\u4F20</th><th>\u7C7B\u578B</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>prop</td><td>\u5B57\u6BB5\u540D</td><td>\u662F</td><td>String</td><td>-</td><td>-</td></tr><tr><td>viewProp</td><td>\u67E5\u770B\u5B57\u6BB5\u540D\uFF0CnoStyle = true \u65F6\u6709\u6548\uFF0C\u4E0D\u4F20\u9ED8\u8BA4\u53D6 prop</td><td>\u5426</td><td>String</td><td>-</td><td>-</td></tr><tr><td>valueField</td><td>vModel \u7ED1\u5B9A\u7684\u5B57\u6BB5\u540D\uFF0C\u9ED8\u8BA4 value</td><td>\u5426</td><td>String</td><td>-</td><td>-</td></tr><tr><td>component</td><td>\u8868\u5355\u9879\u5BF9\u5E94\u7684\u7EC4\u4EF6</td><td>\u662F</td><td>String | component</td><td>-</td><td>-</td></tr><tr><td>componentProps</td><td>\u7EC4\u4EF6\u5C5E\u6027\u914D\u7F6E</td><td>\u662F</td><td>ComponentProps</td><td>-</td><td>-</td></tr><tr><td>componentSlots</td><td>\u7EC4\u4EF6 slots</td><td>\u5426</td><td>Object | String | Component | Function</td><td>-</td><td>-</td></tr><tr><td>label</td><td>label \u6587\u672C</td><td>\u662F</td><td>String</td><td>-</td><td>-</td></tr><tr><td>subLabel</td><td>\u5B50 label</td><td>\u5426</td><td>String</td><td>-</td><td>-</td></tr><tr><td>helpMessage</td><td>\u5E2E\u52A9\u63D0\u793A</td><td>\u5426</td><td>String | String[] | Function</td><td>-</td><td>-</td></tr><tr><td>helpComponentProps</td><td>\u5E2E\u52A9\u7EC4\u4EF6\u5C5E\u6027\u914D\u7F6E\uFF0C\u5177\u4F53\u914D\u7F6E\u53C2\u6570\u770B\u4E0B\u65B9 <code>Help Attributes</code></td><td>\u5426</td><td>String | String[] | Function</td><td>-</td><td>-</td></tr><tr><td>labelWidth</td><td>label \u5BBD\u5EA6</td><td>\u5426</td><td>String | Number</td><td>-</td><td>-</td></tr><tr><td>disabledLabelWidth</td><td>\u7981\u7528\u5168\u5C40 labelWidth</td><td>\u5426</td><td>Boolean</td><td>-</td><td>-</td></tr><tr><td>loading</td><td>\u7EC4\u4EF6\u52A0\u8F7D\u72B6\u6001</td><td>\u5426</td><td>Boolean</td><td>-</td><td>-</td></tr><tr><td>colProps</td><td>\u6805\u680F Col \u914D\u7F6E</td><td>\u5426</td><td>Object</td><td>-</td><td>-</td></tr><tr><td>defaultValue</td><td>\u521D\u59CB\u503C</td><td>\u5426</td><td>any</td><td>-</td><td>-</td></tr><tr><td>isAdvanced</td><td>\u662F\u5426\u6536\u8D77</td><td>\u5426</td><td>Boolean</td><td>-</td><td>-</td></tr><tr><td>vShow</td><td>\u662F\u5426\u663E\u793A\uFF0C\u4F5C\u7528\u540C v-show</td><td>\u5426</td><td>Boolean</td><td>-</td><td>-</td></tr><tr><td>hidden</td><td>\u4E0D\u5C55\u793A\u6B64 form-item</td><td>\u5426</td><td>Boolean</td><td>-</td><td>-</td></tr><tr><td>slot</td><td>\u81EA\u5B9A\u4E49\u6E32\u67D3 col \u5185\u5BB9\u9700\u8981\u5916\u5C42\u5305\u88C5 form-item</td><td>\u5426</td><td>Function</td><td>-</td><td>-</td></tr><tr><td>dynamicNoStyle</td><td>\u52A8\u6001\u7EAF\u6587\u672C\u5C55\u793A</td><td>\u5426</td><td>Boolean | Function</td><td>-</td><td>-</td></tr><tr><td>dynamicDisabled</td><td>\u52A8\u6001\u7981\u7528</td><td>\u5426</td><td>Boolean | Function</td><td>-</td><td>-</td></tr><tr><td>dynamicRules</td><td>\u52A8\u6001\u6821\u9A8C\u89C4\u5219</td><td>\u5426</td><td>() =&gt; Rule[]</td><td>-</td><td>-</td></tr></tbody></table><h3 id="help-attributes" tabindex="-1">Help Attributes</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u5FC5\u4F20</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>maxWidth</td><td>\u6700\u5927\u5BBD\u5EA6\u9650\u5236</td><td>\u5426</td><td>String</td><td>600px</td></tr><tr><td>showIndex</td><td>\u591A\u884C\u663E\u793A\u5E8F\u53F7</td><td>\u5426</td><td>Boolean</td><td>-</td></tr><tr><td>color</td><td>\u6C14\u6CE1\u6587\u672C\u989C\u8272</td><td>\u5426</td><td>String</td><td>#fff</td></tr><tr><td>fontSize</td><td>\u6C14\u6CE1\u6587\u672C\u5B57\u4F53\u5927\u5C0F</td><td>\u5426</td><td>String</td><td>-</td></tr><tr><td>placement</td><td>\u6C14\u6CE1\u4F4D\u7F6E</td><td>\u5426</td><td>String</td><td>right</td></tr><tr><td>text</td><td>\u6C14\u6CE1\u6587\u672C</td><td>\u662F</td><td>Array | String</td><td>-</td></tr></tbody></table><h2 id="\u4E8B\u4EF6" tabindex="-1">\u4E8B\u4EF6</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>submit</td><td>\u63D0\u4EA4\u8868\u5355\u65F6\u89E6\u53D1</td><td>Function(values)</td></tr><tr><td>reset</td><td>\u91CD\u7F6E\u8868\u5355\u65F6\u89E6\u53D1</td><td>Function(formModel)</td></tr></tbody></table><h2 id="\u65B9\u6CD5" tabindex="-1">\u65B9\u6CD5</h2><p><code>ant-design-vue</code> \u7684 <code>Form Methods</code> \u5168\u90E8\u53EF\u7528\uFF0C\u8FD9\u91CC\u5217\u4E3E\u65B0\u589E\u7684\u65B9\u6CD5</p><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>setFormModel</td><td>\u8BBE\u7F6E\u67D0\u4E2A\u5B57\u6BB5\u7684\u503C</td><td>prop, value</td></tr><tr><td>setSchemaFormProps</td><td>\u8BBE\u7F6E\u8868\u5355\u5C5E\u6027</td><td>formProps</td></tr><tr><td>handleFormValues</td><td>\u5904\u7406\u8868\u5355\u503C</td><td>values</td></tr><tr><td>initFormValues</td><td>\u521D\u59CB\u5316\u8868\u5355\u6570\u636E</td><td>-</td></tr></tbody></table>',13);function O(e,o,p,l,r,d){const s=k("render-demo-0"),u=k("demo"),a=k("render-demo-1"),m=k("render-demo-2"),b=k("render-demo-3"),g=k("render-demo-4");return E(),F("div",null,[D,A,P,B,c(u,{sourceCode:`<template>
  <it-schema-form
    :initValues="formData"
    :labelWidth="120"
    :baseColProps="{
      span: 24
    }"
    :actionItemOptions="{
      wrapperCol: {
        style: {
          paddingLeft: '120px'
        }
      }
    }"
    :actionColOptions="{
      span: 24
    }"
    :schemas="schemas"
    :submitOnReset="true"
    @submit="onSubmit"
    @reset="onReset"
  />
</template>

<script>
  export default {
    data() {
      return {
        formData: {},
        schemas: [
          {
            prop: 'H3',
            label: '\u6807\u9898',
            component: 'H3'
          },
          {
            prop: 'input',
            label: '\u8F93\u5165\u6846',
            component: 'Input'
          },
          {
            prop: 'inputPassword',
            label: '\u5BC6\u7801\u8F93\u5165\u6846',
            component: 'InputPassword'
          },
          {
            prop: 'inputSearch',
            label: '\u641C\u7D22\u8F93\u5165\u6846',
            component: 'InputSearch'
          },
          {
            prop: 'inputTextArea',
            label: '\u6587\u672C\u57DF\u8F93\u5165\u6846',
            component: 'InputTextArea'
          },
          {
            prop: 'InputNumber',
            label: '\u6570\u5B57\u8F93\u5165\u6846',
            component: 'InputNumber',
            componentProps: {
              style: {
                width: '160px'
              }
            }
          },
          {
            prop: 'autoComplete',
            label: '\u81EA\u52A8\u5B8C\u6210\u8F93\u5165\u6846',
            component: 'AutoComplete'
          },
          {
            prop: 'select',
            label: '\u4E0B\u62C9\u9009\u62E9\u6846',
            component: 'Select',
            componentProps: {
              options: [
                {
                  label: '\u9009\u9879\u4E00',
                  value: 1
                },
                {
                  label: '\u9009\u9879\u4E8C',
                  value: 2
                }
              ]
            }
          },
          {
            prop: 'treeSelect',
            label: '\u6811\u9009\u62E9\u6846',
            component: 'TreeSelect',
            componentProps: {
              treeData: [
                {
                  title: 'parent 1',
                  value: 'parent 1',
                  children: [
                    {
                      title: 'parent 1-0',
                      value: 'parent 1-0',
                      children: [
                        {
                          title: 'my leaf',
                          value: 'leaf1'
                        },
                        {
                          title: 'your leaf',
                          value: 'leaf2'
                        }
                      ]
                    },
                    {
                      title: 'parent 1-1',
                      value: 'parent 1-1'
                    }
                  ]
                }
              ]
            }
          },
          {
            prop: 'tree',
            label: '\u6811\u5F62\u63A7\u4EF6',
            component: 'Tree',
            componentProps: {
              checkable: true,
              treeData: [
                {
                  title: 'parent 1',
                  key: '0-0',
                  children: [
                    {
                      title: 'parent 1-0',
                      key: '0-0-0',
                      disabled: true,
                      children: [
                        { title: 'leaf', key: '0-0-0-0', disableCheckbox: true },
                        { title: 'leaf', key: '0-0-0-1' }
                      ]
                    },
                    {
                      title: 'parent 1-1',
                      key: '0-0-1',
                      children: [{ key: '0-0-1-0', title: 'sss' }]
                    }
                  ]
                }
              ]
            }
          },
          {
            prop: 'switch',
            label: '\u5F00\u5173',
            component: 'Switch'
          },
          {
            prop: 'radioGroup',
            label: '\u5355\u9009\u6846',
            component: 'RadioGroup',
            componentProps: {
              options: [
                {
                  label: '\u9009\u9879\u4E00',
                  value: 1
                },
                {
                  label: '\u9009\u9879\u4E8C',
                  value: 2
                },
                {
                  label: '\u9009\u9879\u4E09',
                  value: 3
                }
              ]
            }
          },
          {
            prop: 'checkboxGroup',
            label: '\u590D\u9009\u6846',
            component: 'CheckboxGroup',
            componentProps: {
              options: [
                {
                  label: '\u9009\u9879\u4E00',
                  value: 1
                },
                {
                  label: '\u9009\u9879\u4E8C',
                  value: 2
                },
                {
                  label: '\u9009\u9879\u4E09',
                  value: 3
                }
              ]
            }
          },
          {
            prop: 'cascader',
            label: '\u7EA7\u8054\u9009\u62E9',
            component: 'Cascader',
            componentProps: {
              options: [
                {
                  label: '\u4E0A\u6D77',
                  value: 'shanghai',
                  children: [
                    {
                      value: 'shixiaqu',
                      label: '\u5E02\u8F96\u533A',
                      children: [
                        {
                          value: 'pudong',
                          label: '\u6D66\u4E1C\u65B0\u533A',
                        }
                      ]
                    }
                  ]
                },
                {
                  value: 'zhejiang',
                  label: '\u6D59\u6C5F',
                  children: [
                    {
                      value: 'hangzhou',
                      label: '\u676D\u5DDE',
                      children: [
                        {
                          value: 'yuhang',
                          label: '\u4F59\u676D\u533A'
                        }
                      ]
                    }
                  ]
                },
                {
                  value: 'jiangsu',
                  label: '\u6C5F\u82CF',
                  children: [
                    {
                      value: 'nanjing',
                      label: '\u5357\u4EAC',
                      children: [
                        {
                          value: 'qinhuai',
                          label: '\u79E6\u6DEE\u533A'
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          },
          {
            prop: 'slider',
            label: '\u533A\u95F4\u9009\u62E9',
            component: 'Slider'
          },
          {
            prop: 'rate',
            label: '\u8BC4\u5206',
            component: 'Rate',
            componentProps: {
              style: {
                margin: '-2px 0 0 -10px'
              }
            }
          },
          {
            prop: 'datePicker',
            label: '\u65E5\u671F\u9009\u62E9',
            component: 'DatePicker',
            componentProps: {
              style: {
                width: '160px'
              }
            }
          },
          {
            prop: 'monthPicker',
            label: '\u6708\u4EFD\u9009\u62E9',
            component: 'MonthPicker',
            componentProps: {
              style: {
                width: '160px'
              }
            }
          },
          {
            prop: 'rangePicker',
            label: '\u65F6\u95F4\u8303\u56F4\u9009\u62E9',
            component: 'RangePicker'
          },
          {
            prop: 'weekPicker',
            label: '\u5468\u9009\u62E9',
            component: 'WeekPicker',
            componentProps: {
              style: {
                width: '160px'
              }
            }
          },
          {
            prop: 'timePicker',
            label: '\u65F6\u95F4\u9009\u62E9',
            component: 'TimePicker',
            componentProps: {
              style: {
                width: '160px'
              }
            }
          },
          {
            prop: 'traceDataSelect',
            label: '\u53F0\u8D26\u65E5\u671F',
            component: 'TraceDataSelect'
          },
          {
            prop: 'Divider',
            label: '\u5206\u9694\u7EBF',
            component: 'Divider'
          }
        ]
      }
    },
    methods: {
      onSubmit(values) {
        console.log('submit:', values)
      },
      onReset(values) {
        console.log('reset:', values)
      }
    }
  }
<\/script>
`},{highlight:i(()=>[f]),default:i(()=>[c(s)]),_:1}),w,c(u,{sourceCode:`<template>
  <it-schema-form
    :initValues="formData"
    :labelWidth="120"
    :baseColProps="{
      span: 24
    }"
    :actionItemOptions="{
      wrapperCol: {
        style: {
          paddingLeft: '120px'
        }
      }
    }"
    :showResetButton="false"
    :schemas="schemas"
    @submit="onSubmit"
  />
</template>

<script>
  export default {
    data() {
      return {
        formData: {},
        schemas: [
          {
            prop: 'select',
            label: '\u4E0B\u62C9\u9009\u62E9\u6846',
            component: 'Select',
            componentProps: {
              request: () => {
                return new Promise(resolve => {
                  setTimeout(() => {
                    resolve([
                      {
                        label: '\u9009\u9879\u4E00',
                        value: 1
                      },
                      {
                        label: '\u9009\u9879\u4E8C',
                        value: 2
                      },
                      {
                        label: '\u9009\u9879\u4E09',
                        value: 3
                      }
                    ])
                  }, 300)
                })
              }
            }
          },
          {
            prop: 'treeSelect',
            label: '\u6811\u9009\u62E9\u6846',
            component: 'TreeSelect',
            componentProps: {
              request: () => {
                return new Promise(resolve => {
                  setTimeout(() => {
                    resolve([
                      {
                        title: 'parent 1',
                        value: 'parent 1',
                        children: [
                          {
                            title: 'parent 1-0',
                            value: 'parent 1-0',
                            children: [
                              {
                                title: 'my leaf',
                                value: 'leaf1'
                              },
                              {
                                title: 'your leaf',
                                value: 'leaf2'
                              }
                            ]
                          },
                          {
                            title: 'parent 1-1',
                            value: 'parent 1-1'
                          }
                        ]
                      }
                    ])
                  }, 300)
                })
              }
            }
          },
          {
            prop: 'tree',
            label: '\u6811\u5F62\u63A7\u4EF6',
            component: 'Tree',
            componentProps: {
              checkable: true,
              request: () => {
                return new Promise(resolve => {
                  setTimeout(() => {
                    resolve([
                      {
                        title: 'parent 1',
                        key: '0-0',
                        children: [
                          {
                            title: 'parent 1-0',
                            key: '0-0-0',
                            disabled: true,
                            children: [
                              { title: 'leaf', key: '0-0-0-0', disableCheckbox: true },
                              { title: 'leaf', key: '0-0-0-1' }
                            ]
                          },
                          {
                            title: 'parent 1-1',
                            key: '0-0-1',
                            children: [{ key: '0-0-1-0', title: 'sss' }]
                          }
                        ]
                      }
                    ])
                  }, 300)
                })
              }
            }
          },
          {
            prop: 'radioGroup',
            label: '\u5355\u9009\u6846',
            component: 'RadioGroup',
            componentProps: {
              request: () => {
                return new Promise(resolve => {
                  setTimeout(() => {
                    resolve([
                      {
                        label: '\u9009\u9879\u4E00',
                        value: 1
                      },
                      {
                        label: '\u9009\u9879\u4E8C',
                        value: 2
                      },
                      {
                        label: '\u9009\u9879\u4E09',
                        value: 3
                      }
                    ])
                  }, 300)
                })
              }
            }
          },
          {
            prop: 'checkboxGroup',
            label: '\u590D\u9009\u6846',
            component: 'CheckboxGroup',
            componentProps: {
              request: () => {
                return new Promise(resolve => {
                  setTimeout(() => {
                    resolve([
                      {
                        label: '\u9009\u9879\u4E00',
                        value: 1
                      },
                      {
                        label: '\u9009\u9879\u4E8C',
                        value: 2
                      },
                      {
                        label: '\u9009\u9879\u4E09',
                        value: 3
                      }
                    ])
                  }, 300)
                })
              }
            }
          },
          {
            prop: 'cascader',
            label: '\u7EA7\u8054\u9009\u62E9',
            component: 'Cascader',
            componentProps: {
              request: () => {
                return new Promise(resolve => {
                  setTimeout(() => {
                    resolve([
                      {
                        label: '\u4E0A\u6D77',
                        value: 'shanghai',
                        children: [
                          {
                            value: 'shixiaqu',
                            label: '\u5E02\u8F96\u533A',
                            children: [
                              {
                                value: 'pudong',
                                label: '\u6D66\u4E1C\u65B0\u533A',
                              }
                            ]
                          }
                        ]
                      },
                      {
                        value: 'zhejiang',
                        label: '\u6D59\u6C5F',
                        children: [
                          {
                            value: 'hangzhou',
                            label: '\u676D\u5DDE',
                            children: [
                              {
                                value: 'yuhang',
                                label: '\u4F59\u676D\u533A'
                              }
                            ]
                          }
                        ]
                      },
                      {
                        value: 'jiangsu',
                        label: '\u6C5F\u82CF',
                        children: [
                          {
                            value: 'nanjing',
                            label: '\u5357\u4EAC',
                            children: [
                              {
                                value: 'qinhuai',
                                label: '\u79E6\u6DEE\u533A'
                              }
                            ]
                          }
                        ]
                      }
                    ])
                  }, 300)
                })
              }
            }
          }
        ]
      }
    },
    methods: {
      onSubmit(values) {
        console.log('submit:', values)
      }
    }
  }
<\/script>
`},{highlight:i(()=>[x]),default:i(()=>[c(a)]),_:1}),S,_,c(u,{sourceCode:`<template>
  <it-schema-form
    :initValues="formData"
    :labelWidth="120"
    :baseColProps="{
      span: 24
    }"
    :actionItemOptions="{
      wrapperCol: {
        style: {
          paddingLeft: '120px'
        }
      }
    }"
    :showResetButton="false"
    :schemas="schemas"
    @submit="onSubmit"
  />
</template>

<script>
  export default {
    data() {
      return {
        formData: {},
        schemas: [
          {
            prop: 'input',
            label: '\u8F93\u5165\u6846',
            component: 'Input',
            rules: [{required: true}]
          },
          {
            prop: 'inputTextArea',
            label: '\u6587\u672C\u57DF\u8F93\u5165\u6846',
            component: 'InputTextArea',
            rules: [{required: true}]
          },
          {
            prop: 'InputNumber',
            label: '\u6570\u5B57\u8F93\u5165\u6846',
            component: 'InputNumber',
            componentProps: {
              style: {
                width: '160px'
              }
            },
            rules: [{required: true}]
          },
          {
            prop: 'select',
            label: '\u4E0B\u62C9\u9009\u62E9\u6846',
            component: 'Select',
            rules: [{required: true}]
          },
          {
            prop: 'radioGroup',
            label: '\u5355\u9009\u6846',
            component: 'RadioGroup',
            componentProps: {
              options: [
                {
                  label: '\u9009\u9879\u4E00',
                  value: 1
                },
                {
                  label: '\u9009\u9879\u4E8C',
                  value: 2
                },
                {
                  label: '\u9009\u9879\u4E09',
                  value: 3
                }
              ]
            },
            rules: [{required: true}]
          },
          {
            prop: 'checkboxGroup',
            label: '\u590D\u9009\u6846',
            component: 'CheckboxGroup',
            componentProps: {
              options: [
                {
                  label: '\u9009\u9879\u4E00',
                  value: 1
                },
                {
                  label: '\u9009\u9879\u4E8C',
                  value: 2
                },
                {
                  label: '\u9009\u9879\u4E09',
                  value: 3
                }
              ]
            },
            rules: [{required: true}]
          },
          {
            prop: 'cascader',
            label: '\u7EA7\u8054\u9009\u62E9',
            component: 'Cascader',
            componentProps: {
              options: [
                {
                  label: '\u4E0A\u6D77',
                  value: 'shanghai',
                  children: [
                    {
                      value: 'shixiaqu',
                      label: '\u5E02\u8F96\u533A',
                      children: [
                        {
                          value: 'pudong',
                          label: '\u6D66\u4E1C\u65B0\u533A',
                        }
                      ]
                    }
                  ]
                },
                {
                  value: 'zhejiang',
                  label: '\u6D59\u6C5F',
                  children: [
                    {
                      value: 'hangzhou',
                      label: '\u676D\u5DDE',
                      children: [
                        {
                          value: 'yuhang',
                          label: '\u4F59\u676D\u533A'
                        }
                      ]
                    }
                  ]
                },
                {
                  value: 'jiangsu',
                  label: '\u6C5F\u82CF',
                  children: [
                    {
                      value: 'nanjing',
                      label: '\u5357\u4EAC',
                      children: [
                        {
                          value: 'qinhuai',
                          label: '\u79E6\u6DEE\u533A'
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            rules: [{required: true}]
          },
          {
            prop: 'datePicker',
            label: '\u65E5\u671F\u9009\u62E9',
            component: 'DatePicker',
            componentProps: {
              style: {
                width: '160px'
              }
            },
            rules: [{required: true}]
          }
        ]
      }
    },
    methods: {
      onSubmit(values) {
        console.log(values)
      }
    }
  }
<\/script>
`},{highlight:i(()=>[q]),default:i(()=>[c(m)]),_:1}),T,I,c(u,{sourceCode:`<template>
  <it-schema-form
    :initValues="formData"
    :labelWidth="120"
    :baseColProps="{
      span: 24
    }"
    :actionItemOptions="{
      wrapperCol: {
        style: {
          paddingLeft: '120px'
        }
      }
    }"
    :showResetButton="false"
    :schemas="schemas"
    @submit="onSubmit"
  />
</template>

<script>
  // \u5F15\u5165\u81EA\u5B9A\u4E49\u8868\u5355\u63A7\u4EF6\u7EC4\u4EF6\uFF0Cvitepress \u6682\u4E0D\u652F\u6301 md \u4EE3\u7801\u5757\u5F15\u5165\u7EC4\u4EF6\uFF0C\u5148\u6CE8\u91CA
  /* import TraceDataSelect form '@/components/TraceDataSelect' */

  export default {
    data() {
      return {
        formData: {},
        schemas: [
          {
            prop: 'input',
            label: '\u8F93\u5165\u6846',
            component: 'Input'
          },
          {
            prop: 'select',
            label: '\u4E0B\u62C9\u9009\u62E9\u6846',
            component: 'Select'
          },
          // {
          //   prop: 'traceDataSelect',
          //   label: '\u53F0\u8D26\u65E5\u671F',
          //   component: TraceDataSelect
          // }
        ]
      }
    },
    methods: {
      onSubmit(values) {
        console.log(values)
      }
    }
  }
<\/script>
`},{highlight:i(()=>[G]),default:i(()=>[c(b)]),_:1}),R,j,c(u,{sourceCode:`<template>
  <it-schema-form
    :initValues="formData"
    :labelWidth="120"
    labelAlign="left"
    :baseColProps="{
      span: 24
    }"
    :showActionButtonGroup="false"
    :noStyle="true"
    :schemas="schemas"
  />
</template>

<script>
  export default {
    data() {
      return {
        formData: {
          input: 'test input',
          inputPassword: 'test password',
          inputSearch: 'test inputSearch',
          inputTextArea: 'test \\n inputTextArea',
          InputNumber: '100',
          autoComplete: 'test autoComplete',
          select: 1,
          treeSelect: 'parent 1-1',
          tree: ['0-0-1-0', '0-0-1', '0-0'],
          switch: true,
          radioGroup: 2,
          checkboxGroup: [2, 3],
          cascader: ['shanghai', 'shixiaqu', 'pudong'],
          slider: 10,
          rate: 4,
          datePicker: '2022-12-13 14:47:44',
          monthPicker: '2022-05-13 14:47:47',
          rangePicker: ['2022-12-05 14:47:28', '2023-01-17 14:47:28'],
          weekPicker: '2022-12-14 14:47:54',
          timePicker: '2022-12-13 14:47:59',
          traceDataSelect: '2022-12-31'
        },
        schemas: [
          {
            prop: 'H3',
            label: '\u6807\u9898',
            component: 'H3'
          },
          {
            prop: 'input',
            label: '\u8F93\u5165\u6846',
            component: 'Input'
          },
          {
            prop: 'inputPassword',
            label: '\u5BC6\u7801\u8F93\u5165\u6846',
            component: 'InputPassword'
          },
          {
            prop: 'inputSearch',
            label: '\u641C\u7D22\u8F93\u5165\u6846',
            component: 'InputSearch'
          },
          {
            prop: 'inputTextArea',
            label: '\u6587\u672C\u57DF\u8F93\u5165\u6846',
            component: 'InputTextArea'
          },
          {
            prop: 'InputNumber',
            label: '\u6570\u5B57\u8F93\u5165\u6846',
            component: 'InputNumber',
            componentProps: {
              style: {
                width: '160px'
              }
            }
          },
          {
            prop: 'autoComplete',
            label: '\u81EA\u52A8\u5B8C\u6210\u8F93\u5165\u6846',
            component: 'AutoComplete'
          },
          {
            prop: 'select',
            label: '\u4E0B\u62C9\u9009\u62E9\u6846',
            component: 'Select',
            componentProps: {
              options: [
                {
                  label: '\u9009\u9879\u4E00',
                  value: 1
                },
                {
                  label: '\u9009\u9879\u4E8C',
                  value: 2
                }
              ]
            }
          },
          {
            prop: 'treeSelect',
            label: '\u6811\u9009\u62E9\u6846',
            component: 'TreeSelect',
            componentProps: {
              treeData: [
                {
                  title: 'parent 1',
                  value: 'parent 1',
                  children: [
                    {
                      title: 'parent 1-0',
                      value: 'parent 1-0',
                      children: [
                        {
                          title: 'my leaf',
                          value: 'leaf1'
                        },
                        {
                          title: 'your leaf',
                          value: 'leaf2'
                        }
                      ]
                    },
                    {
                      title: 'parent 1-1',
                      value: 'parent 1-1'
                    }
                  ]
                }
              ]
            }
          },
          {
            prop: 'tree',
            label: '\u6811\u5F62\u63A7\u4EF6',
            component: 'Tree',
            componentProps: {
              checkable: true,
              treeData: [
                {
                  title: 'parent 1',
                  key: '0-0',
                  children: [
                    {
                      title: 'parent 1-0',
                      key: '0-0-0',
                      disabled: true,
                      children: [
                        { title: 'leaf', key: '0-0-0-0', disableCheckbox: true },
                        { title: 'leaf', key: '0-0-0-1' }
                      ]
                    },
                    {
                      title: 'parent 1-1',
                      key: '0-0-1',
                      children: [{ key: '0-0-1-0', title: 'sss' }]
                    }
                  ]
                }
              ]
            }
          },
          {
            prop: 'switch',
            label: '\u5F00\u5173',
            component: 'Switch'
          },
          {
            prop: 'radioGroup',
            label: '\u5355\u9009\u6846',
            component: 'RadioGroup',
            componentProps: {
              options: [
                {
                  label: '\u9009\u9879\u4E00',
                  value: 1
                },
                {
                  label: '\u9009\u9879\u4E8C',
                  value: 2
                },
                {
                  label: '\u9009\u9879\u4E09',
                  value: 3
                }
              ]
            }
          },
          {
            prop: 'checkboxGroup',
            label: '\u590D\u9009\u6846',
            component: 'CheckboxGroup',
            componentProps: {
              options: [
                {
                  label: '\u9009\u9879\u4E00',
                  value: 1
                },
                {
                  label: '\u9009\u9879\u4E8C',
                  value: 2
                },
                {
                  label: '\u9009\u9879\u4E09',
                  value: 3
                }
              ]
            }
          },
          {
            prop: 'cascader',
            label: '\u7EA7\u8054\u9009\u62E9',
            component: 'Cascader',
            componentProps: {
              options: [
                {
                  label: '\u4E0A\u6D77',
                  value: 'shanghai',
                  children: [
                    {
                      value: 'shixiaqu',
                      label: '\u5E02\u8F96\u533A',
                      children: [
                        {
                          value: 'pudong',
                          label: '\u6D66\u4E1C\u65B0\u533A',
                        }
                      ]
                    }
                  ]
                },
                {
                  value: 'zhejiang',
                  label: '\u6D59\u6C5F',
                  children: [
                    {
                      value: 'hangzhou',
                      label: '\u676D\u5DDE',
                      children: [
                        {
                          value: 'yuhang',
                          label: '\u4F59\u676D\u533A'
                        }
                      ]
                    }
                  ]
                },
                {
                  value: 'jiangsu',
                  label: '\u6C5F\u82CF',
                  children: [
                    {
                      value: 'nanjing',
                      label: '\u5357\u4EAC',
                      children: [
                        {
                          value: 'qinhuai',
                          label: '\u79E6\u6DEE\u533A'
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          },
          {
            prop: 'slider',
            label: '\u533A\u95F4\u9009\u62E9',
            component: 'Slider'
          },
          {
            prop: 'rate',
            label: '\u8BC4\u5206',
            component: 'Rate',
            componentProps: {
              style: {
                margin: '-2px 0 0 -10px'
              }
            }
          },
          {
            prop: 'Divider',
            label: '\u5206\u9694\u7EBF',
            component: 'Divider'
          },
          {
            prop: 'datePicker',
            label: '\u65E5\u671F\u9009\u62E9',
            component: 'DatePicker',
            componentProps: {
              style: {
                width: '160px'
              }
            }
          },
          {
            prop: 'monthPicker',
            label: '\u6708\u4EFD\u9009\u62E9',
            component: 'MonthPicker',
            componentProps: {
              style: {
                width: '160px'
              }
            }
          },
          {
            prop: 'rangePicker',
            label: '\u65F6\u95F4\u8303\u56F4\u9009\u62E9',
            component: 'RangePicker'
          },
          {
            prop: 'weekPicker',
            label: '\u5468\u9009\u62E9',
            component: 'WeekPicker',
            componentProps: {
              style: {
                width: '160px'
              }
            }
          },
          {
            prop: 'timePicker',
            label: '\u65F6\u95F4\u9009\u62E9',
            component: 'TimePicker',
            componentProps: {
              style: {
                width: '160px'
              }
            }
          },
          {
            prop: 'traceDataSelect',
            label: '\u53F0\u8D26\u65E5\u671F',
            component: 'TraceDataSelect'
          }
        ]
      }
    },
    methods: {
      onSubmit(values) {
        console.log('submit:', values)
      },
      onReset(values) {
        console.log('reset:', values)
      }
    }
  }
<\/script>
`},{highlight:i(()=>[N]),default:i(()=>[c(g)]),_:1}),V])}var H=h(C,[["render",O]]);export{z as __pageData,H as default};
