import{_ as C,r as d,o as h,c as B,a as c,w as k,b as t,e as n,d as A,V as E}from"./app.92a2c68d.js";const b={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:o,createVNode:e,openBlock:u,createElementBlock:p}=E;function r(a,l){const s=o("it-list");return u(),p("div",null,[e(s,{grid:{column:2},schemas:a.schemas,"data-source":a.listData},null,8,["schemas","data-source"])])}return{render:r,...{data(){return{schemas:[{label:"\u65E5\u671F",prop:"date"},{label:"\u59D3\u540D",prop:"name"},{label:"\u6027\u522B",prop:"gender"},{label:"\u5E74\u9F84",prop:"age"},{label:"\u5730\u5740",prop:"address"}],listData:[{date:"2016-05-02",name:"\u738B\u5C0F\u864E",gender:"\u7537",age:18,address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-04",name:"\u738B\u5C0F\u864E",gender:"\u7537",age:18,address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04"},{date:"2016-05-01",name:"\u738B\u5C0F\u864E",gender:"\u7537",age:18,address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04"},{date:"2016-05-03",name:"\u738B\u5C0F\u864E",gender:"\u7537",age:18,address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04"}]}}}}}(),"render-demo-1":function(){const{resolveComponent:o,createVNode:e,openBlock:u,createElementBlock:p}=E;function r(a,l){const s=o("it-list");return u(),p("div",null,[e(s,{grid:{column:2},fetchParams:a.fetchParams,fetchApi:a.fetchData,schemas:a.schemas},null,8,["fetchParams","fetchApi","schemas"])])}return{render:r,...{data(){return{schemas:[{label:"\u65E5\u671F",prop:"date"},{label:"\u59D3\u540D",prop:"name"},{label:"\u6027\u522B",prop:"gender"},{label:"\u5E74\u9F84",prop:"age"},{label:"\u5730\u5740",prop:"address"},{title:"\u64CD\u4F5C",prop:"operate",width:"210px",operates:()=>[{label:"\u67E5\u770B",type:"link",style:{color:"#333"}},{label:"\u7F16\u8F91",type:"link"},{label:"\u5220\u9664",type:"link",danger:!0}]}],fetchParams:{test:"test"},listData:[{date:"2016-05-02",name:"\u738B\u5C0F\u864E",gender:"\u7537",age:18,address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-04",name:"\u738B\u5C0F\u864E",gender:"\u7537",age:18,address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04"},{date:"2016-05-01",name:"\u738B\u5C0F\u864E",gender:"\u7537",age:18,address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04"},{date:"2016-05-03",name:"\u738B\u5C0F\u864E",gender:"\u7537",age:18,address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04"}]}},methods:{fetchData(){return new Promise(a=>{setTimeout(()=>{a({content:this.listData,total:4})},100)})}}}}}(),"render-demo-2":function(){const{resolveComponent:o,createVNode:e,createTextVNode:u,withCtx:p,openBlock:r,createElementBlock:i}=E;function a(s,F){const y=o("plus-outlined"),g=o("a-button"),m=o("download-outlined"),D=o("it-list");return r(),i("div",null,[e(D,{grid:{column:2},schemas:s.schemas,fetchParams:s.fetchParams,fetchApi:s.fetchData},{headerAction:p(()=>[e(g,{type:"primary"},{default:p(()=>[e(y),u("\u65B0\u589E")]),_:1}),e(g,null,{default:p(()=>[e(m),u("\u5BFC\u51FA")]),_:1})]),_:1},8,["schemas","fetchParams","fetchApi"])])}return{render:a,...{data(){return{schemas:[{label:"\u65E5\u671F",prop:"date"},{label:"\u59D3\u540D",prop:"name"},{label:"\u6027\u522B",prop:"gender"},{label:"\u5E74\u9F84",prop:"age"},{label:"\u5730\u5740",prop:"address"},{title:"\u64CD\u4F5C",prop:"operate",width:"210px",operates:()=>[{label:"\u67E5\u770B",type:"link",style:{color:"#333"}},{label:"\u7F16\u8F91",type:"link"},{label:"\u5220\u9664",type:"link",danger:!0}]}],fetchParams:{test:"test"},listData:[{date:"2016-05-02",name:"\u738B\u5C0F\u864E",gender:"\u7537",age:18,address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-04",name:"\u738B\u5C0F\u864E",gender:"\u7537",age:18,address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04"},{date:"2016-05-01",name:"\u738B\u5C0F\u864E",gender:"\u7537",age:18,address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04"},{date:"2016-05-03",name:"\u738B\u5C0F\u864E",gender:"\u7537",age:18,address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04"}]}},methods:{fetchData(){return new Promise(s=>{setTimeout(()=>{s({content:this.listData,total:4})},100)})}}}}}(),"render-demo-3":function(){const{resolveComponent:o,createVNode:e,openBlock:u,createElementBlock:p}=E;function r(a,l){const s=o("it-list");return u(),p("div",null,[e(s,{grid:{column:2},schemas:a.schemas,pagination:!1,"data-source":a.listData},null,8,["schemas","data-source"])])}return{render:r,...{data(){return{schemas:[{label:"\u65E5\u671F",prop:"date"},{label:"\u59D3\u540D",prop:"name"},{label:"\u6027\u522B",prop:"gender"},{label:"\u5E74\u9F84",prop:"age"},{label:"\u5730\u5740",prop:"address"}],listData:[{date:"2016-05-02",name:"\u738B\u5C0F\u864E",gender:"\u7537",age:18,address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-04",name:"\u738B\u5C0F\u864E",gender:"\u7537",age:18,address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04"},{date:"2016-05-01",name:"\u738B\u5C0F\u864E",gender:"\u7537",age:18,address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04"},{date:"2016-05-03",name:"\u738B\u5C0F\u864E",gender:"\u7537",age:18,address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04"}]}}}}}(),"render-demo-4":function(){const{resolveComponent:o,createVNode:e,openBlock:u,createElementBlock:p}=E;function r(a,l){const s=o("it-list");return u(),p("div",null,[e(s,{grid:{column:2},schemas:a.schemas,"data-source":a.listData},null,8,["schemas","data-source"])])}return{render:r,...{data(){return{schemas:[{label:"\u65E5\u671F",prop:"date",render(){return"\u81EA\u5B9A\u4E49\u65E5\u671F"}},{label:"\u59D3\u540D",prop:"name",render(){return"\u81EA\u5B9A\u4E49\u59D3\u540D"}},{label:"\u6027\u522B",prop:"gender"},{label:"\u5E74\u9F84",prop:"age"},{label:"\u5730\u5740",prop:"address"}],listData:[{date:"2016-05-02",name:"\u738B\u5C0F\u864E",gender:"\u7537",age:18,address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-04",name:"\u738B\u5C0F\u864E",gender:"\u7537",age:18,address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04"},{date:"2016-05-01",name:"\u738B\u5C0F\u864E",gender:"\u7537",age:18,address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04"},{date:"2016-05-03",name:"\u738B\u5C0F\u864E",gender:"\u7537",age:18,address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04"}]}}}}}()}},U=JSON.parse('{"title":"ItList \u5217\u8868","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":2,"title":"\u8BF7\u6C42\u8FDC\u7A0B\u6570\u636E","slug":"\u8BF7\u6C42\u8FDC\u7A0B\u6570\u636E"},{"level":2,"title":"\u9876\u90E8\u64CD\u4F5C\u6309\u94AE","slug":"\u9876\u90E8\u64CD\u4F5C\u6309\u94AE"},{"level":2,"title":"\u65E0\u5206\u9875","slug":"\u65E0\u5206\u9875"},{"level":2,"title":"\u81EA\u5B9A\u4E49\u5217\u5185\u5BB9","slug":"\u81EA\u5B9A\u4E49\u5217\u5185\u5BB9"},{"level":2,"title":"\u53C2\u6570","slug":"\u53C2\u6570"},{"level":3,"title":"Card Schema Attributes","slug":"card-schema-attributes"},{"level":3,"title":"Operate Attributes","slug":"operate-attributes"},{"level":2,"title":"\u65B9\u6CD5","slug":"\u65B9\u6CD5"},{"level":2,"title":"Slots","slug":"slots"}],"relativePath":"components/list.md","lastUpdated":1670915712000}'),_=t("h1",{id:"itlist-\u5217\u8868",tabindex:"-1"},"ItList \u5217\u8868",-1),f=t("blockquote",null,[t("p",null,[n("\u5BF9 Ant-design-vue list \u7EC4\u4EF6\u7684\u5C01\u88C5\uFF0C\u4F7F\u7528\u524D\u4E86\u89E3 ant-design-vue \u7684 "),t("a",{href:"https://www.antdv.com/components/list-cn",target:"_blank"},"list"),n(" \u7EC4\u4EF6\u3002")])],-1),v=t("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},"\u57FA\u7840\u7528\u6CD5",-1),w=t("p",null,"\u5217\u8868\u7684\u57FA\u7840\u7528\u6CD5\u5C55\u793A\u3002",-1),x=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("it-list")]),n(`
    `),t("span",{class:"token attr-name"},":grid"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{column: 2}"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":schemas"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("schemas"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":data-source"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("listData"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
  `),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token function"},"data"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token literal-property property"},"schemas"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u65E5\u671F'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'date'"),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u59D3\u540D'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'name'"),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u6027\u522B'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'gender'"),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u5E74\u9F84'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'age'"),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u5730\u5740'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'address'"),n(`
          `),t("span",{class:"token punctuation"},"}"),n(`
        `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token literal-property property"},"listData"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-02'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u738B\u5C0F\u864E'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"gender"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u7537'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"age"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"18"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"address"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04'"),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-04'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u738B\u5C0F\u864E'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"gender"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u7537'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"age"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"18"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"address"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04'"),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-01'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u738B\u5C0F\u864E'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"gender"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u7537'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"age"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"18"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"address"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04'"),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-03'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u738B\u5C0F\u864E'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"gender"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u7537'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"age"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"18"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"address"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04'"),n(`
          `),t("span",{class:"token punctuation"},"}"),n(`
        `),t("span",{class:"token punctuation"},"]"),n(`
      `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),P=t("h2",{id:"\u8BF7\u6C42\u8FDC\u7A0B\u6570\u636E",tabindex:"-1"},"\u8BF7\u6C42\u8FDC\u7A0B\u6570\u636E",-1),q=t("p",null,"\u4ECE\u670D\u52A1\u7AEF\u8BF7\u6C42\u6570\u636E\u3002",-1),N=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("it-list")]),n(`
    `),t("span",{class:"token attr-name"},":grid"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{column: 2}"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":fetchParams"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("fetchParams"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":fetchApi"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("fetchData"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":schemas"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("schemas"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
  `),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token function"},"data"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token literal-property property"},"schemas"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u65E5\u671F'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'date'"),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u59D3\u540D'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'name'"),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u6027\u522B'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'gender'"),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u5E74\u9F84'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'age'"),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u5730\u5740'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'address'"),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u64CD\u4F5C'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'operate'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"width"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'210px'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token function-variable function"},"operates"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
              `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"["),n(`
                `),t("span",{class:"token punctuation"},"{"),n(`
                  `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u67E5\u770B'"),t("span",{class:"token punctuation"},","),n(`
                  `),t("span",{class:"token literal-property property"},"type"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'link'"),t("span",{class:"token punctuation"},","),n(`
                  `),t("span",{class:"token literal-property property"},"style"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
                    `),t("span",{class:"token literal-property property"},"color"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'#333'"),n(`
                  `),t("span",{class:"token punctuation"},"}"),n(`
                `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
                `),t("span",{class:"token punctuation"},"{"),n(`
                  `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u7F16\u8F91'"),t("span",{class:"token punctuation"},","),n(`
                  `),t("span",{class:"token literal-property property"},"type"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'link'"),n(`
                `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
                `),t("span",{class:"token punctuation"},"{"),n(`
                  `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u5220\u9664'"),t("span",{class:"token punctuation"},","),n(`
                  `),t("span",{class:"token literal-property property"},"type"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'link'"),t("span",{class:"token punctuation"},","),n(`
                  `),t("span",{class:"token literal-property property"},"danger"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),n(`
                `),t("span",{class:"token punctuation"},"}"),n(`
              `),t("span",{class:"token punctuation"},"]"),n(`
            `),t("span",{class:"token punctuation"},"}"),n(`
          `),t("span",{class:"token punctuation"},"}"),n(`
        `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token literal-property property"},"fetchParams"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"test"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'test'"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token literal-property property"},"listData"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-02'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u738B\u5C0F\u864E'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"gender"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u7537'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"age"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"18"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"address"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04'"),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-04'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u738B\u5C0F\u864E'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"gender"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u7537'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"age"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"18"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"address"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04'"),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-01'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u738B\u5C0F\u864E'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"gender"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u7537'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"age"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"18"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"address"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04'"),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-03'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u738B\u5C0F\u864E'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"gender"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u7537'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"age"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"18"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"address"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04'"),n(`
          `),t("span",{class:"token punctuation"},"}"),n(`
        `),t("span",{class:"token punctuation"},"]"),n(`
      `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token literal-property property"},"methods"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token function"},"fetchData"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token comment"},"// \u6A21\u62DF\u8BF7\u6C42"),n(`
        `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token keyword"},"new"),n(),t("span",{class:"token class-name"},"Promise"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"resolve"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token function"},"setTimeout"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token function"},"resolve"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
              `),t("span",{class:"token literal-property property"},"content"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token keyword"},"this"),t("span",{class:"token punctuation"},"."),n("listData"),t("span",{class:"token punctuation"},","),n(`
              `),t("span",{class:"token literal-property property"},"total"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"4"),n(`
            `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token number"},"100"),t("span",{class:"token punctuation"},")"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
      `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),V=t("h2",{id:"\u9876\u90E8\u64CD\u4F5C\u6309\u94AE",tabindex:"-1"},"\u9876\u90E8\u64CD\u4F5C\u6309\u94AE",-1),j=t("p",null,"\u81EA\u5B9A\u4E49\u9876\u90E8\u64CD\u4F5C\u6309\u94AE\u3002",-1),T=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("it-list")]),n(`
    `),t("span",{class:"token attr-name"},":grid"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{column: 2}"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":schemas"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("schemas"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":fetchParams"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("fetchParams"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":fetchApi"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("fetchData"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#headerAction"),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-button")]),n(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("primary"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("plus-outlined")]),n(),t("span",{class:"token punctuation"},"/>")]),n("\u65B0\u589E"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-button")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-button")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("download-outlined")]),n(),t("span",{class:"token punctuation"},"/>")]),n("\u5BFC\u51FA"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("it-list")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
  `),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token function"},"data"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token literal-property property"},"schemas"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u65E5\u671F'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'date'"),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u59D3\u540D'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'name'"),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u6027\u522B'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'gender'"),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u5E74\u9F84'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'age'"),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u5730\u5740'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'address'"),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u64CD\u4F5C'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'operate'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"width"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'210px'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token function-variable function"},"operates"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
              `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"["),n(`
                `),t("span",{class:"token punctuation"},"{"),n(`
                  `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u67E5\u770B'"),t("span",{class:"token punctuation"},","),n(`
                  `),t("span",{class:"token literal-property property"},"type"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'link'"),t("span",{class:"token punctuation"},","),n(`
                  `),t("span",{class:"token literal-property property"},"style"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
                    `),t("span",{class:"token literal-property property"},"color"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'#333'"),n(`
                  `),t("span",{class:"token punctuation"},"}"),n(`
                `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
                `),t("span",{class:"token punctuation"},"{"),n(`
                  `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u7F16\u8F91'"),t("span",{class:"token punctuation"},","),n(`
                  `),t("span",{class:"token literal-property property"},"type"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'link'"),n(`
                `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
                `),t("span",{class:"token punctuation"},"{"),n(`
                  `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u5220\u9664'"),t("span",{class:"token punctuation"},","),n(`
                  `),t("span",{class:"token literal-property property"},"type"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'link'"),t("span",{class:"token punctuation"},","),n(`
                  `),t("span",{class:"token literal-property property"},"danger"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),n(`
                `),t("span",{class:"token punctuation"},"}"),n(`
              `),t("span",{class:"token punctuation"},"]"),n(`
            `),t("span",{class:"token punctuation"},"}"),n(`
          `),t("span",{class:"token punctuation"},"}"),n(`
        `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token literal-property property"},"fetchParams"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"test"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'test'"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token literal-property property"},"listData"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-02'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u738B\u5C0F\u864E'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"gender"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u7537'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"age"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"18"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"address"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04'"),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-04'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u738B\u5C0F\u864E'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"gender"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u7537'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"age"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"18"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"address"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04'"),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-01'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u738B\u5C0F\u864E'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"gender"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u7537'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"age"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"18"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"address"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04'"),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-03'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u738B\u5C0F\u864E'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"gender"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u7537'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"age"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"18"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"address"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04'"),n(`
          `),t("span",{class:"token punctuation"},"}"),n(`
        `),t("span",{class:"token punctuation"},"]"),n(`
      `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token literal-property property"},"methods"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token function"},"fetchData"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token comment"},"// \u6A21\u62DF\u8BF7\u6C42"),n(`
        `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token keyword"},"new"),n(),t("span",{class:"token class-name"},"Promise"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"resolve"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token function"},"setTimeout"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token function"},"resolve"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
              `),t("span",{class:"token literal-property property"},"content"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token keyword"},"this"),t("span",{class:"token punctuation"},"."),n("listData"),t("span",{class:"token punctuation"},","),n(`
              `),t("span",{class:"token literal-property property"},"total"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"4"),n(`
            `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token number"},"100"),t("span",{class:"token punctuation"},")"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
      `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),S=t("h2",{id:"\u65E0\u5206\u9875",tabindex:"-1"},"\u65E0\u5206\u9875",-1),L=t("p",null,"\u9ED8\u8BA4\u6709\u5206\u9875 pagination \u7EC4\u4EF6\u3002",-1),I=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("it-list")]),n(`
    `),t("span",{class:"token attr-name"},":grid"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{column: 2}"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":schemas"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("schemas"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":pagination"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("false"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":data-source"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("listData"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
  `),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token function"},"data"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token literal-property property"},"schemas"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u65E5\u671F'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'date'"),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u59D3\u540D'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'name'"),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u6027\u522B'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'gender'"),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u5E74\u9F84'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'age'"),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u5730\u5740'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'address'"),n(`
          `),t("span",{class:"token punctuation"},"}"),n(`
        `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token literal-property property"},"listData"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-02'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u738B\u5C0F\u864E'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"gender"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u7537'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"age"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"18"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"address"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04'"),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-04'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u738B\u5C0F\u864E'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"gender"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u7537'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"age"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"18"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"address"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04'"),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-01'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u738B\u5C0F\u864E'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"gender"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u7537'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"age"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"18"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"address"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04'"),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-03'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u738B\u5C0F\u864E'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"gender"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u7537'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"age"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"18"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"address"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04'"),n(`
          `),t("span",{class:"token punctuation"},"}"),n(`
        `),t("span",{class:"token punctuation"},"]"),n(`
      `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),O=t("h2",{id:"\u81EA\u5B9A\u4E49\u5217\u5185\u5BB9",tabindex:"-1"},"\u81EA\u5B9A\u4E49\u5217\u5185\u5BB9",-1),$=t("p",null,"\u81EA\u5B9A\u4E49\u5217\u5185\u5BB9\uFF0C\u53EF\u7EC4\u5408\u5176\u4ED6\u7EC4\u4EF6\u4F7F\u7528\u3002",-1),z=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("it-list")]),n(`
    `),t("span",{class:"token attr-name"},":grid"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{column: 2}"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":schemas"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("schemas"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":data-source"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("listData"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("tsx"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
  `),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token function"},"data"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token literal-property property"},"schemas"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u65E5\u671F'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'date'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token function"},"render"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
              `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token string"},"'\u81EA\u5B9A\u4E49\u65E5\u671F'"),n(`
            `),t("span",{class:"token punctuation"},"}"),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u59D3\u540D'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'name'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token function"},"render"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
              `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token string"},"'\u81EA\u5B9A\u4E49\u59D3\u540D'"),n(`
            `),t("span",{class:"token punctuation"},"}"),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u6027\u522B'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'gender'"),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u5E74\u9F84'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'age'"),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u5730\u5740'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'address'"),n(`
          `),t("span",{class:"token punctuation"},"}"),n(`
        `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token literal-property property"},"listData"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-02'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u738B\u5C0F\u864E'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"gender"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u7537'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"age"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"18"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"address"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04'"),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-04'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u738B\u5C0F\u864E'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"gender"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u7537'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"age"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"18"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"address"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04'"),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-01'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u738B\u5C0F\u864E'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"gender"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u7537'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"age"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"18"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"address"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04'"),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-03'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u738B\u5C0F\u864E'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"gender"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u7537'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"age"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"18"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"address"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04'"),n(`
          `),t("span",{class:"token punctuation"},"}"),n(`
        `),t("span",{class:"token punctuation"},"]"),n(`
      `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),R=A('<h2 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570</h2><p><code>ant-design-vue</code> \u7684 <code>List Attributes</code> \u5168\u90E8\u53EF\u7528\uFF0C\u8FD9\u91CC\u5217\u4E3E\u65B0\u6DFB\u52A0\u5B57\u6BB5\u3002</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u5FC5\u4F20</th><th>\u7C7B\u578B</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>isCard</td><td>\u662F\u5426\u4EE5\u5361\u7247\u6837\u5F0F\u5C55\u793A</td><td>\u5426</td><td><code>boolean</code></td><td>-</td><td><code>true</code></td></tr><tr><td>direction</td><td>\u5361\u7247\u5C55\u793A\u6837\u5F0F\uFF0C\u53EF\u9009\u503C vertical</td><td>\u5426</td><td><code>string</code></td><td>-</td><td><code>horizontal</code></td></tr><tr><td>schemas</td><td>\u5361\u7247\u9879\u914D\u7F6E\uFF0C\u914D\u7F6E\u53C2\u6570\u89C1\u4E0B\u65B9 <code>Card Schema Attributes</code></td><td>\u5426</td><td><code>array</code></td><td>-</td><td>-</td></tr><tr><td>grid</td><td>\u5217\u8868\u6805\u683C\u914D\u7F6E</td><td>\u5426</td><td><code>object</code></td><td>-</td><td><code>{gutter: 16, column: 2, xxxl: 4, xxl: 3}</code></td></tr><tr><td>dataSource</td><td>\u5217\u8868\u5C55\u793A\u6570\u636E</td><td>\u5426</td><td><code>array</code></td><td>-</td><td>-</td></tr><tr><td>pagination</td><td>\u5206\u9875\u914D\u7F6E\uFF0C\u914D\u7F6E\u53C2\u6570\u89C1\u4E0B\u65B9 <code>List Pagination Attributes</code></td><td>\u5426</td><td><code>object | false</code></td><td>-</td><td><code>{current: 1, pageSize: 20, total: 0}</code></td></tr><tr><td>beforeFetch</td><td>\u521D\u59CB\u8BF7\u6C42\u6570\u636E\u524D\u6267\u884C\u7684\u65B9\u6CD5\uFF0C\u5F02\u6B65\u51FD\u6570\u9700\u8FD4\u56DE Promise</td><td>\u662F</td><td><code>Function | Request Function</code></td><td>-</td><td>-</td></tr><tr><td>fetchApi</td><td>\u8BF7\u6C42\u6570\u636E api \u7684\u65B9\u6CD5</td><td>\u662F</td><td><code>Request Function</code></td><td>-</td><td>-</td></tr><tr><td>fetchParams</td><td>fetchApi \u7684\u53C2\u6570\uFF0Cpage \u548C size \u9ED8\u8BA4\u5728 pagination \u914D\u7F6E\u4E2D\u4F20\u9012</td><td>\u662F</td><td><code>object</code></td><td>-</td><td><code>{}</code></td></tr><tr><td>slots</td><td>ant-design-vue List slots</td><td>\u5426</td><td><code>object</code></td><td>-</td><td>-</td></tr><tr><td>fieldNames</td><td>\u81EA\u5B9A\u4E49\u8282\u70B9 <code>content</code>\u3001<code>total</code> \u7684\u5B57\u6BB5</td><td>\u5426</td><td><code>object</code></td><td>-</td><td><code>{content: &#39;content&#39;, total: &#39;total&#39;}</code></td></tr><tr><td>converData</td><td>\u6539\u9020\u6570\u636E</td><td>\u5426</td><td><code>(listData) =&gt; converData</code></td><td>-</td><td>-</td></tr><tr><td>initFetchData</td><td>\u521D\u59CB\u662F\u5426\u8BF7\u6C42\u6570\u636E</td><td>\u5426</td><td><code>boolean</code></td><td>-</td><td><code>true</code></td></tr></tbody></table><h3 id="card-schema-attributes" tabindex="-1">Card Schema Attributes</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u5FC5\u4F20</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>label</td><td>label \u6807\u9898</td><td>\u5426</td><td><code>string</code></td><td>-</td></tr><tr><td>prop</td><td>\u5B57\u6BB5\u540D\uFF0C\u64CD\u4F5C\u680F\u503C\u5FC5\u987B\u4E3A operate</td><td>\u662F</td><td><code>string</code></td><td>-</td></tr><tr><td>hidden</td><td>\u662F\u5426\u5C55\u793A\u5B57\u6BB5</td><td>\u5426</td><td><code>boolean</code></td><td>-</td></tr><tr><td>isImg</td><td>\u662F\u5426\u56FE\u7247</td><td>\u5426</td><td><code>boolean</code></td><td>-</td></tr><tr><td>ellipsis</td><td>\u8D85\u51FA 1 \u884C\u7701\u7565\u663E\u793A</td><td>\u5426</td><td><code>boolean</code></td><td>-</td></tr><tr><td>renderContent</td><td>\u81EA\u5B9A\u4E49\u6E32\u67D3 label \u53F3\u4FA7</td><td>\u5426</td><td><code>(record) =&gt; VNode</code></td><td>-</td></tr><tr><td>renderLabel</td><td>\u81EA\u5B9A\u4E49\u6E32\u67D3 label</td><td>\u5426</td><td><code>(record) =&gt; VNode</code></td><td>-</td></tr><tr><td>render</td><td>\u81EA\u5B9A\u4E49\u6E32\u67D3\u5185\u5BB9</td><td>\u5426</td><td><code>(record) =&gt; VNode</code></td><td>-</td></tr><tr><td>imgOptions</td><td>\u56FE\u7247\u914D\u7F6E\uFF0C\u5177\u4F53\u914D\u7F6E filePathKey + <code>ant-design-vue Image Attributes</code></td><td>\u5426</td><td><code>object</code></td><td>-</td></tr><tr><td>openDocument</td><td>\u6587\u4EF6\u914D\u7F6E\uFF0C\u5177\u4F53\u914D\u7F6E filePathKey</td><td>\u5426</td><td><code>object</code></td><td>-</td></tr><tr><td>operates</td><td>\u64CD\u4F5C\u680F\u5185\u5BB9\u914D\u7F6E\uFF0C\u5177\u4F53\u770B\u4E0B\u65B9 <code>Operate Attributes</code></td><td>\u5426</td><td><code>(record) =&gt; OperateItem[]</code></td><td>-</td></tr></tbody></table><h3 id="operate-attributes" tabindex="-1">Operate Attributes</h3><p><code>ant-design-vue</code> \u7684 <code>Button Attributes</code> \u5168\u90E8\u53EF\u7528\uFF0C\u8FD9\u91CC\u5217\u4E3E\u65B0\u6DFB\u52A0\u5B57\u6BB5</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u5FC5\u4F20</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>label</td><td>\u64CD\u4F5C\u6309\u94AE\u6587\u6848</td><td>\u662F</td><td><code>string</code></td><td>-</td></tr><tr><td>auth</td><td>\u8BBE\u7F6E\u6309\u94AE\u6743\u9650</td><td>\u5426</td><td><code>string</code></td><td>-</td></tr><tr><td>hidden</td><td>\u8BBE\u7F6E\u6309\u94AE\u662F\u5426\u9690\u85CF</td><td>\u5426</td><td><code>boolean</code></td><td>-</td></tr><tr><td>popConfirm</td><td>\u6C14\u6CE1\u63D0\u793A\u914D\u7F6E</td><td>\u5426</td><td><code>object&lt;PopConfirm Attributes&gt;</code></td><td>-</td></tr></tbody></table><h2 id="\u65B9\u6CD5" tabindex="-1">\u65B9\u6CD5</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>getListRef</td><td>\u83B7\u53D6\u5217\u8868\u5B9E\u4F8B\uFF0C\u901A\u8FC7\u5217\u8868\u5B9E\u4F8B\u53EF\u4EE5\u8C03\u7528 <code>ant-design-vue List</code> \u7684\u6240\u6709\u65B9\u6CD5</td><td>-</td></tr><tr><td>reload</td><td>\u8C03\u7528 fetchApi\uFF0C\u9ED8\u8BA4\u53C2\u6570\u4E0D\u53D8\uFF0C\u91CD\u65B0\u8BF7\u6C42</td><td><code>resetPageIndex</code></td></tr><tr><td>getData</td><td>\u83B7\u53D6\u5217\u8868\u6570\u636E</td><td>-</td></tr><tr><td>getDataTotal</td><td>\u83B7\u53D6\u8868\u683C\u6570\u636E\u603B\u6761\u6570</td><td>-</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>headerAction</td><td>\u5217\u8868\u9876\u90E8\u6DFB\u52A0\u64CD\u4F5C\u6309\u94AE</td><td>-</td></tr><tr><td>headerExtra</td><td>\u5217\u8868\u9876\u90E8\u53F3\u4FA7\u6DFB\u52A0\u6587\u6848</td><td>-</td></tr></tbody></table>',12);function K(o,e,u,p,r,i){const a=d("render-demo-0"),l=d("demo"),s=d("render-demo-1"),F=d("render-demo-2"),y=d("render-demo-3"),g=d("render-demo-4");return h(),B("div",null,[_,f,v,w,c(l,{sourceCode:`<template>
  <it-list
    :grid="{column: 2}"
    :schemas="schemas"
    :data-source="listData"
  />
</template>

<script>
  export default {
    data() {
      return {
        schemas: [
          {
            label: '\u65E5\u671F',
            prop: 'date'
          },
          {
            label: '\u59D3\u540D',
            prop: 'name'
          },
          {
            label: '\u6027\u522B',
            prop: 'gender'
          },
          {
            label: '\u5E74\u9F84',
            prop: 'age'
          },
          {
            label: '\u5730\u5740',
            prop: 'address'
          }
        ],
        listData: [
          {
            date: '2016-05-02',
            name: '\u738B\u5C0F\u864E',
            gender: '\u7537',
            age: 18,
            address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04'
          },
          {
            date: '2016-05-04',
            name: '\u738B\u5C0F\u864E',
            gender: '\u7537',
            age: 18,
            address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04'
          },
          {
            date: '2016-05-01',
            name: '\u738B\u5C0F\u864E',
            gender: '\u7537',
            age: 18,
            address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04'
          },
          {
            date: '2016-05-03',
            name: '\u738B\u5C0F\u864E',
            gender: '\u7537',
            age: 18,
            address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04'
          }
        ]
      }
    }
  }
<\/script>
`},{highlight:k(()=>[x]),default:k(()=>[c(a)]),_:1}),P,q,c(l,{sourceCode:`<template>
  <it-list
    :grid="{column: 2}"
    :fetchParams="fetchParams"
    :fetchApi="fetchData"
    :schemas="schemas"
  />
</template>

<script>
  export default {
    data() {
      return {
        schemas: [
          {
            label: '\u65E5\u671F',
            prop: 'date'
          },
          {
            label: '\u59D3\u540D',
            prop: 'name'
          },
          {
            label: '\u6027\u522B',
            prop: 'gender'
          },
          {
            label: '\u5E74\u9F84',
            prop: 'age'
          },
          {
            label: '\u5730\u5740',
            prop: 'address'
          },
          {
            title: '\u64CD\u4F5C',
            prop: 'operate',
            width: '210px',
            operates: () => {
              return [
                {
                  label: '\u67E5\u770B',
                  type: 'link',
                  style: {
                    color: '#333'
                  }
                },
                {
                  label: '\u7F16\u8F91',
                  type: 'link'
                },
                {
                  label: '\u5220\u9664',
                  type: 'link',
                  danger: true
                }
              ]
            }
          }
        ],
        fetchParams: {
          test: 'test'
        },
        listData: [
          {
            date: '2016-05-02',
            name: '\u738B\u5C0F\u864E',
            gender: '\u7537',
            age: 18,
            address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04'
          },
          {
            date: '2016-05-04',
            name: '\u738B\u5C0F\u864E',
            gender: '\u7537',
            age: 18,
            address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04'
          },
          {
            date: '2016-05-01',
            name: '\u738B\u5C0F\u864E',
            gender: '\u7537',
            age: 18,
            address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04'
          },
          {
            date: '2016-05-03',
            name: '\u738B\u5C0F\u864E',
            gender: '\u7537',
            age: 18,
            address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04'
          }
        ]
      }
    },
    methods: {
      fetchData() {
        // \u6A21\u62DF\u8BF7\u6C42
        return new Promise(resolve => {
          setTimeout(() => {
            resolve({
              content: this.listData,
              total: 4
            })
          }, 100)
        })
      }
    }
  }
<\/script>
`},{highlight:k(()=>[N]),default:k(()=>[c(s)]),_:1}),V,j,c(l,{sourceCode:`<template>
  <it-list
    :grid="{column: 2}"
    :schemas="schemas"
    :fetchParams="fetchParams"
    :fetchApi="fetchData"
  >
    <template #headerAction>
      <a-button type="primary"><plus-outlined />\u65B0\u589E</a-button>
      <a-button><download-outlined />\u5BFC\u51FA</a-button>
    </template>
  </it-list>
</template>

<script>
  export default {
    data() {
      return {
        schemas: [
          {
            label: '\u65E5\u671F',
            prop: 'date'
          },
          {
            label: '\u59D3\u540D',
            prop: 'name'
          },
          {
            label: '\u6027\u522B',
            prop: 'gender'
          },
          {
            label: '\u5E74\u9F84',
            prop: 'age'
          },
          {
            label: '\u5730\u5740',
            prop: 'address'
          },
          {
            title: '\u64CD\u4F5C',
            prop: 'operate',
            width: '210px',
            operates: () => {
              return [
                {
                  label: '\u67E5\u770B',
                  type: 'link',
                  style: {
                    color: '#333'
                  }
                },
                {
                  label: '\u7F16\u8F91',
                  type: 'link'
                },
                {
                  label: '\u5220\u9664',
                  type: 'link',
                  danger: true
                }
              ]
            }
          }
        ],
        fetchParams: {
          test: 'test'
        },
        listData: [
          {
            date: '2016-05-02',
            name: '\u738B\u5C0F\u864E',
            gender: '\u7537',
            age: 18,
            address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04'
          },
          {
            date: '2016-05-04',
            name: '\u738B\u5C0F\u864E',
            gender: '\u7537',
            age: 18,
            address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04'
          },
          {
            date: '2016-05-01',
            name: '\u738B\u5C0F\u864E',
            gender: '\u7537',
            age: 18,
            address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04'
          },
          {
            date: '2016-05-03',
            name: '\u738B\u5C0F\u864E',
            gender: '\u7537',
            age: 18,
            address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04'
          }
        ]
      }
    },
    methods: {
      fetchData() {
        // \u6A21\u62DF\u8BF7\u6C42
        return new Promise(resolve => {
          setTimeout(() => {
            resolve({
              content: this.listData,
              total: 4
            })
          }, 100)
        })
      }
    }
  }
<\/script>
`},{highlight:k(()=>[T]),default:k(()=>[c(F)]),_:1}),S,L,c(l,{sourceCode:`<template>
  <it-list
    :grid="{column: 2}"
    :schemas="schemas"
    :pagination="false"
    :data-source="listData"
  />
</template>

<script>
  export default {
    data() {
      return {
        schemas: [
          {
            label: '\u65E5\u671F',
            prop: 'date'
          },
          {
            label: '\u59D3\u540D',
            prop: 'name'
          },
          {
            label: '\u6027\u522B',
            prop: 'gender'
          },
          {
            label: '\u5E74\u9F84',
            prop: 'age'
          },
          {
            label: '\u5730\u5740',
            prop: 'address'
          }
        ],
        listData: [
          {
            date: '2016-05-02',
            name: '\u738B\u5C0F\u864E',
            gender: '\u7537',
            age: 18,
            address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04'
          },
          {
            date: '2016-05-04',
            name: '\u738B\u5C0F\u864E',
            gender: '\u7537',
            age: 18,
            address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04'
          },
          {
            date: '2016-05-01',
            name: '\u738B\u5C0F\u864E',
            gender: '\u7537',
            age: 18,
            address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04'
          },
          {
            date: '2016-05-03',
            name: '\u738B\u5C0F\u864E',
            gender: '\u7537',
            age: 18,
            address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04'
          }
        ]
      }
    }
  }
<\/script>
`},{highlight:k(()=>[I]),default:k(()=>[c(y)]),_:1}),O,$,c(l,{sourceCode:`<template>
  <it-list
    :grid="{column: 2}"
    :schemas="schemas"
    :data-source="listData"
  />
</template>

<script lang="tsx">
  export default {
    data() {
      return {
        schemas: [
          {
            label: '\u65E5\u671F',
            prop: 'date',
            render() {
              return '\u81EA\u5B9A\u4E49\u65E5\u671F'
            }
          },
          {
            label: '\u59D3\u540D',
            prop: 'name',
            render() {
              return '\u81EA\u5B9A\u4E49\u59D3\u540D'
            }
          },
          {
            label: '\u6027\u522B',
            prop: 'gender'
          },
          {
            label: '\u5E74\u9F84',
            prop: 'age'
          },
          {
            label: '\u5730\u5740',
            prop: 'address'
          }
        ],
        listData: [
          {
            date: '2016-05-02',
            name: '\u738B\u5C0F\u864E',
            gender: '\u7537',
            age: 18,
            address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04'
          },
          {
            date: '2016-05-04',
            name: '\u738B\u5C0F\u864E',
            gender: '\u7537',
            age: 18,
            address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04'
          },
          {
            date: '2016-05-01',
            name: '\u738B\u5C0F\u864E',
            gender: '\u7537',
            age: 18,
            address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04'
          },
          {
            date: '2016-05-03',
            name: '\u738B\u5C0F\u864E',
            gender: '\u7537',
            age: 18,
            address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04'
          }
        ]
      }
    }
  }
<\/script>
`},{highlight:k(()=>[z]),default:k(()=>[c(g)]),_:1}),R])}var G=C(b,[["render",K]]);export{U as __pageData,G as default};
