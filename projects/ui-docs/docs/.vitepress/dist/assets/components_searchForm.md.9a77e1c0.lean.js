import{_ as m,r as c,o as b,c as g,a as u,w as i,b as n,e as s,V as h}from"./app.92a2c68d.js";const d={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:t,createVNode:o,openBlock:p,createElementBlock:e}=h;function l(a,r){const y=t("it-search-form");return p(),e("div",null,[o(y,{initValues:a.formData,labelWidth:80,baseColProps:{span:12},schemas:a.schemas,submitOnReset:!0,onSubmit:a.onSubmit,onReset:a.onReset},null,8,["initValues","schemas","onSubmit","onReset"])])}return{render:l,...{data(){return{formData:{},schemas:[{prop:"input",label:"\u8F93\u5165\u6846",component:"Input"},{prop:"select",label:"\u4E0B\u62C9\u9009\u62E9\u6846",component:"Select",componentProps:{options:[{label:"\u9009\u9879\u4E00",value:1},{label:"\u9009\u9879\u4E8C",value:2}]}},{prop:"switch",label:"\u5F00\u5173",component:"Switch"},{prop:"radioGroup",label:"\u5355\u9009\u6846",component:"RadioGroup",componentProps:{options:[{label:"\u9009\u9879\u4E00",value:1},{label:"\u9009\u9879\u4E8C",value:2}]}},{prop:"checkboxGroup",label:"\u590D\u9009\u6846",component:"CheckboxGroup",componentProps:{options:[{label:"\u9009\u9879\u4E00",value:1},{label:"\u9009\u9879\u4E8C",value:2}]}},{prop:"cascader",label:"\u7EA7\u8054\u9009\u62E9",component:"Cascader",componentProps:{options:[{label:"\u4E0A\u6D77",value:"shanghai",children:[{value:"shixiaqu",label:"\u5E02\u8F96\u533A",children:[{value:"pudong",label:"\u6D66\u4E1C\u65B0\u533A"}]}]},{value:"zhejiang",label:"\u6D59\u6C5F",children:[{value:"hangzhou",label:"\u676D\u5DDE",children:[{value:"yuhang",label:"\u4F59\u676D\u533A"}]}]},{value:"jiangsu",label:"\u6C5F\u82CF",children:[{value:"nanjing",label:"\u5357\u4EAC",children:[{value:"qinhuai",label:"\u79E6\u6DEE\u533A"}]}]}]}},{prop:"datePicker",label:"\u65E5\u671F",component:"DatePicker",componentProps:{style:{width:"100%"}}},{prop:"monthPicker",label:"\u6708\u4EFD",component:"MonthPicker",componentProps:{style:{width:"100%"}}},{prop:"rangePicker",label:"\u65F6\u95F4\u8303\u56F4",component:"RangePicker"},{prop:"weekPicker",label:"\u5468",component:"WeekPicker",componentProps:{style:{width:"100%"}}},{prop:"timePicker",label:"\u65F6\u95F4",component:"TimePicker",componentProps:{style:{width:"100%"}}}]}},methods:{onSubmit(a){},onReset(a){}}}}}()}},f=JSON.parse('{"title":"SearchForm \u67E5\u8BE2\u8868\u5355","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"}],"relativePath":"components/searchForm.md","lastUpdated":1670915712000}'),E=n("h1",{id:"searchform-\u67E5\u8BE2\u8868\u5355",tabindex:"-1"},"SearchForm \u67E5\u8BE2\u8868\u5355",-1),v=n("p",null,[n("code",null,"SchemaForm"),s(" \u7EC4\u4EF6\u7684\u914D\u7F6E\u5168\u90E8\u53EF\u7528\uFF0C\u8FD9\u91CC\u4EC5\u5217\u4E3E\u8C03\u7528\u793A\u4F8B\u3002")],-1),F=n("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},"\u57FA\u7840\u7528\u6CD5",-1),P=n("p",null,"\u67E5\u8BE2\u8868\u5355\u7684\u7528\u6CD5\u5C55\u793A\u3002",-1),C=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("it-search-form")]),s(`
    `),n("span",{class:"token attr-name"},":initValues"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("formData"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":labelWidth"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("80"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":baseColProps"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s(`{
      span: 12
    }`),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":schemas"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("schemas"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":submitOnReset"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("true"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onSubmit"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@reset"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onReset"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
  `),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"formData"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"schemas"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'input'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u8F93\u5165\u6846'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Input'"),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'select'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4E0B\u62C9\u9009\u62E9\u6846'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Select'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"componentProps"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token literal-property property"},"options"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                `),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9009\u9879\u4E00'"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9009\u9879\u4E8C'"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
              `),n("span",{class:"token punctuation"},"]"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'switch'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5F00\u5173'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Switch'"),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'radioGroup'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5355\u9009\u6846'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'RadioGroup'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"componentProps"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token literal-property property"},"options"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                `),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9009\u9879\u4E00'"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9009\u9879\u4E8C'"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
              `),n("span",{class:"token punctuation"},"]"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'checkboxGroup'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u590D\u9009\u6846'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'CheckboxGroup'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"componentProps"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token literal-property property"},"options"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                `),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9009\u9879\u4E00'"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u9009\u9879\u4E8C'"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
              `),n("span",{class:"token punctuation"},"]"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'cascader'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7EA7\u8054\u9009\u62E9'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Cascader'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"componentProps"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token literal-property property"},"options"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                `),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4E0A\u6D77'"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'shanghai'"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                    `),n("span",{class:"token punctuation"},"{"),s(`
                      `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'shixiaqu'"),n("span",{class:"token punctuation"},","),s(`
                      `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5E02\u8F96\u533A'"),n("span",{class:"token punctuation"},","),s(`
                      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token punctuation"},"{"),s(`
                          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'pudong'"),n("span",{class:"token punctuation"},","),s(`
                          `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6D66\u4E1C\u65B0\u533A'"),n("span",{class:"token punctuation"},","),s(`
                        `),n("span",{class:"token punctuation"},"}"),s(`
                      `),n("span",{class:"token punctuation"},"]"),s(`
                    `),n("span",{class:"token punctuation"},"}"),s(`
                  `),n("span",{class:"token punctuation"},"]"),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'zhejiang'"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6D59\u6C5F'"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                    `),n("span",{class:"token punctuation"},"{"),s(`
                      `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'hangzhou'"),n("span",{class:"token punctuation"},","),s(`
                      `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u676D\u5DDE'"),n("span",{class:"token punctuation"},","),s(`
                      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token punctuation"},"{"),s(`
                          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'yuhang'"),n("span",{class:"token punctuation"},","),s(`
                          `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4F59\u676D\u533A'"),s(`
                        `),n("span",{class:"token punctuation"},"}"),s(`
                      `),n("span",{class:"token punctuation"},"]"),s(`
                    `),n("span",{class:"token punctuation"},"}"),s(`
                  `),n("span",{class:"token punctuation"},"]"),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'jiangsu'"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6C5F\u82CF'"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                    `),n("span",{class:"token punctuation"},"{"),s(`
                      `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'nanjing'"),n("span",{class:"token punctuation"},","),s(`
                      `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5357\u4EAC'"),n("span",{class:"token punctuation"},","),s(`
                      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token punctuation"},"{"),s(`
                          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'qinhuai'"),n("span",{class:"token punctuation"},","),s(`
                          `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u79E6\u6DEE\u533A'"),s(`
                        `),n("span",{class:"token punctuation"},"}"),s(`
                      `),n("span",{class:"token punctuation"},"]"),s(`
                    `),n("span",{class:"token punctuation"},"}"),s(`
                  `),n("span",{class:"token punctuation"},"]"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
              `),n("span",{class:"token punctuation"},"]"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'datePicker'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u65E5\u671F'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'DatePicker'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"componentProps"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token literal-property property"},"style"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'100%'"),s(`
              `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'monthPicker'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6708\u4EFD'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'MonthPicker'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"componentProps"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token literal-property property"},"style"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'100%'"),s(`
              `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'rangePicker'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u65F6\u95F4\u8303\u56F4'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'RangePicker'"),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'weekPicker'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5468'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'WeekPicker'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"componentProps"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token literal-property property"},"style"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'100%'"),s(`
              `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'timePicker'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u65F6\u95F4'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"component"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'TimePicker'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"componentProps"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token literal-property property"},"style"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'100%'"),s(`
              `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
          `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"]"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token function"},"onSubmit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"values"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'submit:'"),n("span",{class:"token punctuation"},","),s(" values"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token function"},"onReset"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"values"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'reset:'"),n("span",{class:"token punctuation"},","),s(" values"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1);function D(t,o,p,e,l,k){const a=c("render-demo-0"),r=c("demo");return b(),g("div",null,[E,v,F,P,u(r,{sourceCode:`<template>
  <it-search-form
    :initValues="formData"
    :labelWidth="80"
    :baseColProps="{
      span: 12
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
            prop: 'input',
            label: '\u8F93\u5165\u6846',
            component: 'Input'
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
            prop: 'datePicker',
            label: '\u65E5\u671F',
            component: 'DatePicker',
            componentProps: {
              style: {
                width: '100%'
              }
            }
          },
          {
            prop: 'monthPicker',
            label: '\u6708\u4EFD',
            component: 'MonthPicker',
            componentProps: {
              style: {
                width: '100%'
              }
            }
          },
          {
            prop: 'rangePicker',
            label: '\u65F6\u95F4\u8303\u56F4',
            component: 'RangePicker'
          },
          {
            prop: 'weekPicker',
            label: '\u5468',
            component: 'WeekPicker',
            componentProps: {
              style: {
                width: '100%'
              }
            }
          },
          {
            prop: 'timePicker',
            label: '\u65F6\u95F4',
            component: 'TimePicker',
            componentProps: {
              style: {
                width: '100%'
              }
            }
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
`},{highlight:i(()=>[C]),default:i(()=>[u(a)]),_:1})])}var A=m(d,[["render",D]]);export{f as __pageData,A as default};
