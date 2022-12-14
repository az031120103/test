import{_ as A,r as d,o as b,c as B,a as r,w as k,b as t,e as n,d as w,V as F}from"./app.92a2c68d.js";const _={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:p,createVNode:o,openBlock:u,createElementBlock:c}=F;function l(a,e){const s=p("it-table");return u(),c("div",null,[o(s,{width:"100%",schemas:a.schemas,"data-source":a.tableData},null,8,["schemas","data-source"])])}return{render:l,...{data(){return{schemas:[{label:"\u65E5\u671F",prop:"date",width:"120px"},{label:"\u59D3\u540D",prop:"name",width:"100px"},{label:"\u5730\u5740",prop:"address",width:"250px"}],tableData:[{date:"2016-05-02",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-04",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04"},{date:"2016-05-01",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04"},{date:"2016-05-03",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04"}]}}}}}(),"render-demo-1":function(){const{resolveComponent:p,createVNode:o,openBlock:u,createElementBlock:c}=F;function l(a,e){const s=p("it-table");return u(),c("div",null,[o(s,{width:"100%",schemas:a.schemas,fetchParams:a.fetchParams,fetchApi:a.fetchData},null,8,["schemas","fetchParams","fetchApi"])])}return{render:l,...{data(){return{schemas:[{label:"\u65E5\u671F",prop:"date",width:"120px",customRender:({record:a})=>a.date},{label:"\u59D3\u540D",prop:"name",width:"100px"},{label:"\u5730\u5740",prop:"address",width:"250px"},{title:"\u64CD\u4F5C",prop:"operate",width:"210px",operates:()=>[{label:"\u67E5\u770B"},{label:"\u7F16\u8F91",type:"primary"},{label:"\u786E\u8BA4",type:"primary"}]}],fetchParams:{test:"test"},tableData:[{date:"2016-05-02",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-04",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04"},{date:"2016-05-01",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04"},{date:"2016-05-03",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04"}]}},methods:{fetchData(){return new Promise(a=>{setTimeout(()=>{a({content:this.tableData,total:4})},300)})}}}}}(),"render-demo-2":function(){const{resolveComponent:p,createVNode:o,createTextVNode:u,withCtx:c,openBlock:l,createElementBlock:i}=F;function a(s,m){const D=p("plus-outlined"),E=p("a-button"),C=p("download-outlined"),y=p("it-table");return l(),i("div",null,[o(y,{width:"100%",schemas:s.schemas,fetchParams:s.fetchParams,fetchApi:s.fetchData},{headerAction:c(()=>[o(E,{type:"primary"},{default:c(()=>[o(D),u("\u65B0\u589E")]),_:1}),o(E,null,{default:c(()=>[o(C),u("\u5BFC\u51FA")]),_:1})]),_:1},8,["schemas","fetchParams","fetchApi"])])}return{render:a,...{data(){return{schemas:[{label:"\u65E5\u671F",prop:"date",width:"120px",customRender:({record:s})=>s.date},{label:"\u59D3\u540D",prop:"name",width:"100px"},{label:"\u5730\u5740",prop:"address",width:"250px"},{label:"\u64CD\u4F5C",prop:"operate",width:"210px",operates:()=>[{label:"\u67E5\u770B"},{label:"\u7F16\u8F91",type:"primary"},{label:"\u786E\u8BA4",type:"primary"}]}],fetchParams:{test:"test"},tableData:[{date:"2016-05-02",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-04",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04"},{date:"2016-05-01",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04"},{date:"2016-05-03",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04"}]}},methods:{fetchData(){return new Promise(s=>{setTimeout(()=>{s({content:this.tableData,total:4})},100)})}}}}}(),"render-demo-3":function(){const{resolveComponent:p,createVNode:o,openBlock:u,createElementBlock:c}=F;function l(a,e){const s=p("it-table");return u(),c("div",null,[o(s,{width:"100%",schemas:a.schemas,"data-source":a.tableData,rowKey:"date","row-selection":a.rowSelection},null,8,["schemas","data-source","row-selection"])])}return{render:l,...{data(){return{schemas:[{label:"\u65E5\u671F",prop:"date",width:"120px"},{label:"\u59D3\u540D",prop:"name",width:"100px"},{label:"\u5730\u5740",prop:"address"}],tableData:[{date:"2016-05-02",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-04",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04"},{date:"2016-05-01",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04"},{date:"2016-05-03",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04"}],rowSelection:{onChange:(a,e)=>{`${a}`},onSelect:(a,e,s)=>{},onSelectAll:(a,e,s)=>{}}}}}}}(),"render-demo-4":function(){const{resolveComponent:p,createVNode:o,openBlock:u,createElementBlock:c}=F;function l(a,e){const s=p("it-table");return u(),c("div",null,[o(s,{width:"100%",schemas:a.schemas,pagination:!1,"data-source":a.tableData},null,8,["schemas","data-source"])])}return{render:l,...{data(){return{schemas:[{label:"\u65E5\u671F",prop:"date",width:"120px"},{label:"\u59D3\u540D",prop:"name",width:"100px"},{label:"\u5730\u5740",prop:"address",width:"250px"}],tableData:[{date:"2016-05-02",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-04",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04"},{date:"2016-05-01",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04"},{date:"2016-05-03",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04"}]}}}}}(),"render-demo-5":function(){const{resolveComponent:p,createVNode:o,openBlock:u,createElementBlock:c}=F;function l(a,e){const s=p("it-table");return u(),c("div",null,[o(s,{width:"100%",schemas:a.schemas,"data-source":a.tableData},null,8,["schemas","data-source"])])}return{render:l,...{data(){return{schemas:[{label:"\u65E5\u671F",prop:"date",width:"120px",customRender(){return"\u81EA\u5B9A\u4E49\u65E5\u671F"}},{label:"\u59D3\u540D",prop:"name",width:"100px",customRender({record:a}){return"\u81EA\u5B9A\u4E49\u59D3\u540D"}},{label:"\u5730\u5740",prop:"address",width:"250px"}],tableData:[{date:"2016-05-02",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-04",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04"},{date:"2016-05-01",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04"},{date:"2016-05-03",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04"}]}}}}}(),"render-demo-6":function(){const{toDisplayString:p,openBlock:o,createElementBlock:u,createCommentVNode:c,resolveComponent:l,withCtx:i,createVNode:a}=F,e={key:0,style:{color:"red"}},s={key:1,style:{color:"green"}};function m(E,C){const y=l("it-table");return o(),u("div",null,[a(y,{width:"100%",bordered:"",schemas:E.schemas,"data-source":E.tableData},{bodyCell:i(({column:g,record:h})=>[g.key==="date"?(o(),u("span",e,p(h.date),1)):c("",!0),g.key==="name"?(o(),u("span",s,p(h.name),1)):c("",!0)]),_:1},8,["schemas","data-source"])])}return{render:m,...{data(){return{schemas:[{label:"\u65E5\u671F",prop:"date",width:"120px"},{label:"\u59D3\u540D",prop:"name",width:"100px"},{label:"\u4FE1\u606F",children:[{label:"\u6027\u522B",prop:"sex",width:"70px"},{label:"\u8EAB\u9AD8",prop:"height",width:"70px"}]},{label:"\u5730\u5740",prop:"address",width:"250px"}],tableData:[{date:"2016-05-02",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04",sex:"\u7537",height:"180"},{date:"2016-05-04",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04",sex:"\u7537",height:"180"},{date:"2016-05-01",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04",sex:"\u7537",height:"180"},{date:"2016-05-03",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04",sex:"\u7537",height:"180"}]}}}}}()}},Z=JSON.parse('{"title":"ItTable \u8868\u683C","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":2,"title":"\u8BF7\u6C42\u8FDC\u7A0B\u6570\u636E","slug":"\u8BF7\u6C42\u8FDC\u7A0B\u6570\u636E"},{"level":2,"title":"\u9876\u90E8\u64CD\u4F5C\u6309\u94AE","slug":"\u9876\u90E8\u64CD\u4F5C\u6309\u94AE"},{"level":2,"title":"\u591A\u9009","slug":"\u591A\u9009"},{"level":2,"title":"\u65E0\u5206\u9875","slug":"\u65E0\u5206\u9875"},{"level":2,"title":"\u81EA\u5B9A\u4E49\u5217\u5185\u5BB9","slug":"\u81EA\u5B9A\u4E49\u5217\u5185\u5BB9"},{"level":2,"title":"\u591A\u7EA7\u8868\u5934","slug":"\u591A\u7EA7\u8868\u5934"},{"level":2,"title":"\u53C2\u6570","slug":"\u53C2\u6570"},{"level":3,"title":"Table Column Attributes","slug":"table-column-attributes"},{"level":2,"title":"\u4E8B\u4EF6","slug":"\u4E8B\u4EF6"},{"level":2,"title":"\u65B9\u6CD5","slug":"\u65B9\u6CD5"},{"level":2,"title":"Slots","slug":"slots"}],"relativePath":"components/table.md","lastUpdated":1670915712000}'),x=t("h1",{id:"ittable-\u8868\u683C",tabindex:"-1"},"ItTable \u8868\u683C",-1),f=t("blockquote",null,[t("p",null,[n("\u5BF9 Ant-design-vue table \u7EC4\u4EF6\u7684\u5C01\u88C5\uFF0C\u4F7F\u7528\u524D\u4E86\u89E3 ant-design-vue \u7684 "),t("a",{href:"https://www.antdv.com/components/table-cn",target:"_blank"},"table"),n(" \u7EC4\u4EF6\u3002")])],-1),v=t("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},"\u57FA\u7840\u7528\u6CD5",-1),R=t("p",null,"\u8868\u683C\u7684\u57FA\u7840\u7528\u6CD5\u5C55\u793A\u3002",-1),q=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("it-table")]),n(`
    `),t("span",{class:"token attr-name"},"width"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("100%"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":schemas"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("schemas"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":data-source"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("tableData"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"data"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token literal-property property"},"schemas"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u65E5\u671F'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'date'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"width"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'120px'"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u59D3\u540D'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'name'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"width"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'100px'"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u5730\u5740'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'address'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"width"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'250px'"),n(`
        `),t("span",{class:"token punctuation"},"}"),n(`
      `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token literal-property property"},"tableData"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-02'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u738B\u5C0F\u864E'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"address"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04'"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-04'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u738B\u5C0F\u864E'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"address"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04'"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-01'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u738B\u5C0F\u864E'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"address"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04'"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-03'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u738B\u5C0F\u864E'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"address"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04'"),n(`
        `),t("span",{class:"token punctuation"},"}"),n(`
      `),t("span",{class:"token punctuation"},"]"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),P=t("h2",{id:"\u8BF7\u6C42\u8FDC\u7A0B\u6570\u636E",tabindex:"-1"},"\u8BF7\u6C42\u8FDC\u7A0B\u6570\u636E",-1),N=t("p",null,"\u4ECE\u670D\u52A1\u7AEF\u8BF7\u6C42\u6570\u636E\u3002",-1),V=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("it-table")]),n(`
    `),t("span",{class:"token attr-name"},"width"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("100%"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":schemas"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("schemas"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":fetchParams"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("fetchParams"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":fetchApi"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("fetchData"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"data"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token literal-property property"},"schemas"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u65E5\u671F'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'date'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"width"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'120px'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token function-variable function"},"customRender"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[t("span",{class:"token punctuation"},"{"),n("record"),t("span",{class:"token punctuation"},"}")]),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token keyword"},"return"),n(" record"),t("span",{class:"token punctuation"},"."),n(`date
          `),t("span",{class:"token punctuation"},"}"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u59D3\u540D'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'name'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"width"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'100px'"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u5730\u5740'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'address'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"width"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'250px'"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u64CD\u4F5C'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'operate'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"width"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'210px'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token function-variable function"},"operates"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"["),n(`
              `),t("span",{class:"token punctuation"},"{"),n(`
                `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u67E5\u770B'"),n(`
              `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
              `),t("span",{class:"token punctuation"},"{"),n(`
                `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u7F16\u8F91'"),t("span",{class:"token punctuation"},","),n(`
                `),t("span",{class:"token literal-property property"},"type"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'primary'"),n(`
              `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
              `),t("span",{class:"token punctuation"},"{"),n(`
                `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u786E\u8BA4'"),t("span",{class:"token punctuation"},","),n(`
                `),t("span",{class:"token literal-property property"},"type"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'primary'"),n(`
              `),t("span",{class:"token punctuation"},"}"),n(`
            `),t("span",{class:"token punctuation"},"]"),n(`
          `),t("span",{class:"token punctuation"},"}"),n(`
        `),t("span",{class:"token punctuation"},"}"),n(`
      `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token literal-property property"},"fetchParams"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token literal-property property"},"test"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'test'"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token literal-property property"},"tableData"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-02'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u738B\u5C0F\u864E'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"address"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04'"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-04'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u738B\u5C0F\u864E'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"address"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04'"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-01'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u738B\u5C0F\u864E'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"address"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04'"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-03'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u738B\u5C0F\u864E'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"address"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04'"),n(`
        `),t("span",{class:"token punctuation"},"}"),n(`
      `),t("span",{class:"token punctuation"},"]"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
  `),t("span",{class:"token literal-property property"},"methods"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token function"},"fetchData"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token comment"},"// \u6A21\u62DF\u8BF7\u6C42"),n(`
      `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token keyword"},"new"),n(),t("span",{class:"token class-name"},"Promise"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"resolve"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token function"},"setTimeout"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token function"},"resolve"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"content"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token keyword"},"this"),t("span",{class:"token punctuation"},"."),n("tableData"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"total"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"4"),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token number"},"300"),t("span",{class:"token punctuation"},")"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),T=t("h2",{id:"\u9876\u90E8\u64CD\u4F5C\u6309\u94AE",tabindex:"-1"},"\u9876\u90E8\u64CD\u4F5C\u6309\u94AE",-1),S=t("p",null,"\u81EA\u5B9A\u4E49\u9876\u90E8\u64CD\u4F5C\u6309\u94AE\u3002",-1),I=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("it-table")]),n(`
    `),t("span",{class:"token attr-name"},"width"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("100%"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":schemas"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("schemas"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":fetchParams"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("fetchParams"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":fetchApi"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("fetchData"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#headerAction"),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-button")]),n(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("primary"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("plus-outlined")]),n(),t("span",{class:"token punctuation"},"/>")]),n("\u65B0\u589E"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-button")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-button")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("download-outlined")]),n(),t("span",{class:"token punctuation"},"/>")]),n("\u5BFC\u51FA"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("it-table")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"data"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token literal-property property"},"schemas"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u65E5\u671F'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'date'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"width"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'120px'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token function-variable function"},"customRender"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[t("span",{class:"token punctuation"},"{"),n("record"),t("span",{class:"token punctuation"},"}")]),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token keyword"},"return"),n(" record"),t("span",{class:"token punctuation"},"."),n(`date
          `),t("span",{class:"token punctuation"},"}"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u59D3\u540D'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'name'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"width"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'100px'"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u5730\u5740'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'address'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"width"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'250px'"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u64CD\u4F5C'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'operate'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"width"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'210px'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token function-variable function"},"operates"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"["),n(`
              `),t("span",{class:"token punctuation"},"{"),n(`
                `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u67E5\u770B'"),n(`
              `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
              `),t("span",{class:"token punctuation"},"{"),n(`
                `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u7F16\u8F91'"),t("span",{class:"token punctuation"},","),n(`
                `),t("span",{class:"token literal-property property"},"type"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'primary'"),n(`
              `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
              `),t("span",{class:"token punctuation"},"{"),n(`
                `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u786E\u8BA4'"),t("span",{class:"token punctuation"},","),n(`
                `),t("span",{class:"token literal-property property"},"type"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'primary'"),n(`
              `),t("span",{class:"token punctuation"},"}"),n(`
            `),t("span",{class:"token punctuation"},"]"),n(`
          `),t("span",{class:"token punctuation"},"}"),n(`
        `),t("span",{class:"token punctuation"},"}"),n(`
      `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token literal-property property"},"fetchParams"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token literal-property property"},"test"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'test'"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token literal-property property"},"tableData"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-02'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u738B\u5C0F\u864E'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"address"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04'"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-04'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u738B\u5C0F\u864E'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"address"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04'"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-01'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u738B\u5C0F\u864E'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"address"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04'"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-03'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u738B\u5C0F\u864E'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"address"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04'"),n(`
        `),t("span",{class:"token punctuation"},"}"),n(`
      `),t("span",{class:"token punctuation"},"]"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
  `),t("span",{class:"token literal-property property"},"methods"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token function"},"fetchData"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token keyword"},"new"),n(),t("span",{class:"token class-name"},"Promise"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"resolve"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token function"},"setTimeout"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token function"},"resolve"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token literal-property property"},"content"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token keyword"},"this"),t("span",{class:"token punctuation"},"."),n("tableData"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"total"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"4"),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token number"},"100"),t("span",{class:"token punctuation"},")"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),j=t("h2",{id:"\u591A\u9009",tabindex:"-1"},"\u591A\u9009",-1),K=t("p",null,"\u9009\u62E9\u591A\u884C\u6570\u636E\u3002",-1),$=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("it-table")]),n(`
    `),t("span",{class:"token attr-name"},"width"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("100%"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":schemas"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("schemas"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":data-source"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("tableData"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"rowKey"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("date"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":row-selection"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("rowSelection"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"interface"),n(),t("span",{class:"token class-name"},"DataItem"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token literal-property property"},"date"),t("span",{class:"token operator"},":"),n(` string
  `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(` string
  `),t("span",{class:"token literal-property property"},"address"),t("span",{class:"token operator"},":"),n(` string
`),t("span",{class:"token punctuation"},"}"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"data"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token literal-property property"},"schemas"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u65E5\u671F'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'date'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"width"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'120px'"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u59D3\u540D'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'name'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"width"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'100px'"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u5730\u5740'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'address'"),n(`
        `),t("span",{class:"token punctuation"},"}"),n(`
      `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token literal-property property"},"tableData"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-02'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u738B\u5C0F\u864E'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"address"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04'"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-04'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u738B\u5C0F\u864E'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"address"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04'"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-01'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u738B\u5C0F\u864E'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"address"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04'"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-03'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u738B\u5C0F\u864E'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"address"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04'"),n(`
        `),t("span",{class:"token punctuation"},"}"),n(`
      `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token literal-property property"},"rowSelection"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token function-variable function"},"onChange"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[t("span",{class:"token literal-property property"},"selectedRowKeys"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"("),n("string "),t("span",{class:"token operator"},"|"),n(" number"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token literal-property property"},"selectedRows"),t("span",{class:"token operator"},":"),n(" DataItem"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]")]),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
          console`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),t("span",{class:"token template-string"},[t("span",{class:"token template-punctuation string"},"`"),t("span",{class:"token string"},"selectedRowKeys: "),t("span",{class:"token interpolation"},[t("span",{class:"token interpolation-punctuation punctuation"},"${"),n("selectedRowKeys"),t("span",{class:"token interpolation-punctuation punctuation"},"}")]),t("span",{class:"token template-punctuation string"},"`")]),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'selectedRows: '"),t("span",{class:"token punctuation"},","),n(" selectedRows"),t("span",{class:"token punctuation"},")"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token function-variable function"},"onSelect"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[t("span",{class:"token literal-property property"},"record"),t("span",{class:"token operator"},":"),n(" DataItem"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token literal-property property"},"selected"),t("span",{class:"token operator"},":"),n(" boolean"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token literal-property property"},"selectedRows"),t("span",{class:"token operator"},":"),n(" DataItem"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]")]),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
          console`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),n("record"),t("span",{class:"token punctuation"},","),n(" selected"),t("span",{class:"token punctuation"},","),n(" selectedRows"),t("span",{class:"token punctuation"},")"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token function-variable function"},"onSelectAll"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[t("span",{class:"token literal-property property"},"selected"),t("span",{class:"token operator"},":"),n(" boolean"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token literal-property property"},"selectedRows"),t("span",{class:"token operator"},":"),n(" DataItem"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token literal-property property"},"changeRows"),t("span",{class:"token operator"},":"),n(" DataItem"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]")]),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
          console`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),n("selected"),t("span",{class:"token punctuation"},","),n(" selectedRows"),t("span",{class:"token punctuation"},","),n(" changeRows"),t("span",{class:"token punctuation"},")"),n(`
        `),t("span",{class:"token punctuation"},"}"),n(`
      `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),O=t("h2",{id:"\u65E0\u5206\u9875",tabindex:"-1"},"\u65E0\u5206\u9875",-1),z=t("p",null,"\u9ED8\u8BA4\u6709\u5206\u9875 pagination \u7EC4\u4EF6\u3002",-1),J=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("it-table")]),n(`
    `),t("span",{class:"token attr-name"},"width"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("100%"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":schemas"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("schemas"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":pagination"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("false"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":data-source"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("tableData"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"data"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token literal-property property"},"schemas"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u65E5\u671F'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'date'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"width"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'120px'"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u59D3\u540D'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'name'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"width"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'100px'"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u5730\u5740'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'address'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"width"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'250px'"),n(`
        `),t("span",{class:"token punctuation"},"}"),n(`
      `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token literal-property property"},"tableData"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-02'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u738B\u5C0F\u864E'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"address"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04'"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-04'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u738B\u5C0F\u864E'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"address"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04'"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-01'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u738B\u5C0F\u864E'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"address"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04'"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-03'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u738B\u5C0F\u864E'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"address"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04'"),n(`
        `),t("span",{class:"token punctuation"},"}"),n(`
      `),t("span",{class:"token punctuation"},"]"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),U=t("h2",{id:"\u81EA\u5B9A\u4E49\u5217\u5185\u5BB9",tabindex:"-1"},"\u81EA\u5B9A\u4E49\u5217\u5185\u5BB9",-1),G=t("p",null,"\u81EA\u5B9A\u4E49\u5217\u5185\u5BB9\uFF0C\u53EF\u7EC4\u5408\u5176\u4ED6\u7EC4\u4EF6\u4F7F\u7528\u3002",-1),H=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("it-table")]),n(`
    `),t("span",{class:"token attr-name"},"width"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("100%"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":schemas"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("schemas"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":data-source"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("tableData"),t("span",{class:"token punctuation"},'"')]),n(`
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
          `),t("span",{class:"token literal-property property"},"width"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'120px'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token function"},"customRender"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token string"},"'\u81EA\u5B9A\u4E49\u65E5\u671F'"),n(`
          `),t("span",{class:"token punctuation"},"}"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u59D3\u540D'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'name'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"width"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'100px'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token function"},"customRender"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[t("span",{class:"token punctuation"},"{"),n("record"),t("span",{class:"token punctuation"},"}")]),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token string"},"'\u81EA\u5B9A\u4E49\u59D3\u540D'"),n(`
          `),t("span",{class:"token punctuation"},"}"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u5730\u5740'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'address'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"width"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'250px'"),n(`
        `),t("span",{class:"token punctuation"},"}"),n(`
      `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token literal-property property"},"tableData"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-02'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u738B\u5C0F\u864E'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"address"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04'"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-04'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u738B\u5C0F\u864E'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"address"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04'"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-01'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u738B\u5C0F\u864E'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"address"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04'"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-03'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u738B\u5C0F\u864E'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"address"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04'"),n(`
        `),t("span",{class:"token punctuation"},"}"),n(`
      `),t("span",{class:"token punctuation"},"]"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),L=t("h2",{id:"\u591A\u7EA7\u8868\u5934",tabindex:"-1"},"\u591A\u7EA7\u8868\u5934",-1),M=t("p",null,"\u6570\u636E\u7ED3\u6784\u6BD4\u8F83\u590D\u6742\u53EF\u4F7F\u7528\u591A\u7EA7\u8868\u5934\u6765\u5C55\u73B0\u6570\u636E\u7684\u5C42\u6B21\u5173\u7CFB\u3002",-1),Q=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("it-table")]),n(`
    `),t("span",{class:"token attr-name"},"width"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("100%"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"bordered"),n(`
    `),t("span",{class:"token attr-name"},":schemas"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("schemas"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":data-source"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("tableData"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#bodyCell"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{column, record}"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"v-if"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("column.key === 'date'"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("span")]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"color"),t("span",{class:"token punctuation"},":"),n(" red"),t("span",{class:"token punctuation"},";")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n("{{record.date}}"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("span")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"v-if"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("column.key === 'name'"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("span")]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"color"),t("span",{class:"token punctuation"},":"),n(" green"),t("span",{class:"token punctuation"},";")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n("{{record.name}}"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("span")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("it-table")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"data"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token literal-property property"},"schemas"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u65E5\u671F'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'date'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"width"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'120px'"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u59D3\u540D'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'name'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"width"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'100px'"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4FE1\u606F'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
            `),t("span",{class:"token punctuation"},"{"),n(`
              `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u6027\u522B'"),t("span",{class:"token punctuation"},","),n(`
              `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'sex'"),t("span",{class:"token punctuation"},","),n(`
              `),t("span",{class:"token literal-property property"},"width"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'70px'"),n(`
            `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token punctuation"},"{"),n(`
              `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u8EAB\u9AD8'"),t("span",{class:"token punctuation"},","),n(`
              `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'height'"),t("span",{class:"token punctuation"},","),n(`
              `),t("span",{class:"token literal-property property"},"width"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'70px'"),n(`
            `),t("span",{class:"token punctuation"},"}"),n(`
          `),t("span",{class:"token punctuation"},"]"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u5730\u5740'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'address'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"width"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'250px'"),n(`
        `),t("span",{class:"token punctuation"},"}"),n(`
      `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token literal-property property"},"tableData"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-02'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u738B\u5C0F\u864E'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"address"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"sex"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u7537'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"height"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'180'"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-04'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u738B\u5C0F\u864E'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"address"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"sex"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u7537'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"height"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'180'"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-01'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u738B\u5C0F\u864E'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"address"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"sex"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u7537'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"height"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'180'"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2016-05-03'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u738B\u5C0F\u864E'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"address"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"sex"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u7537'"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"height"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'180'"),n(`
        `),t("span",{class:"token punctuation"},"}"),n(`
      `),t("span",{class:"token punctuation"},"]"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),W=w('<h2 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570</h2><p><code>ant-design-vue</code> \u7684 <code>Table Attributes</code> \u5168\u90E8\u53EF\u7528\uFF0C\u8FD9\u91CC\u5217\u4E3E\u65B0\u6DFB\u52A0\u5B57\u6BB5</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u5FC5\u4F20</th><th>\u7C7B\u578B</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>isCard</td><td>\u662F\u5426\u4EE5\u5361\u7247\u6837\u5F0F\u5C55\u793A</td><td>\u5426</td><td><code>boolean</code></td><td>-</td><td><code>true</code></td></tr><tr><td>schemas</td><td>\u8868\u683C <code>Column Attributes</code>\uFF0C\u5177\u4F53\u770B\u4E0B\u65B9 <code>Table Column Attributes</code></td><td>\u662F</td><td><code>array&lt;TableColumn&gt;</code></td><td>-</td><td><code>[]</code></td></tr><tr><td>beforeFetch</td><td>\u521D\u59CB\u8BF7\u6C42\u6570\u636E\u524D\u6267\u884C\u7684\u65B9\u6CD5\uFF0C\u5F02\u6B65\u51FD\u6570\u9700\u8FD4\u56DE <code>Promise</code></td><td>\u5426</td><td><code>Function | Request Function</code></td><td>-</td><td>-</td></tr><tr><td>fetchApi</td><td>\u8BF7\u6C42\u6570\u636E <code>api</code> \u7684\u65B9\u6CD5</td><td>\u662F</td><td><code>Function</code></td><td>-</td><td>-</td></tr><tr><td>fetchParams</td><td><code>fetchApi</code> \u7684\u53C2\u6570\uFF0C<code>page</code> \u548C <code>size</code> \u9ED8\u8BA4\u5728 <code>pagination</code> \u914D\u7F6E\u4E2D\u4F20\u9012</td><td>\u662F</td><td><code>object</code></td><td>-</td><td><code>{}</code></td></tr><tr><td>fieldNames</td><td>\u81EA\u5B9A\u4E49\u8282\u70B9 <code>content</code>\u3001<code>total</code> \u7684\u5B57\u6BB5</td><td>\u5426</td><td><code>object</code></td><td>-</td><td><code>{content: &#39;content&#39;, total: &#39;total&#39;}</code></td></tr><tr><td>converData</td><td>\u6539\u9020\u6570\u636E</td><td>\u5426</td><td><code>(listData) =&gt; converData</code></td><td>-</td><td>-</td></tr><tr><td>slots</td><td>\u63D2\u69FD</td><td>\u5426</td><td><code>object</code></td><td>-</td><td>-</td></tr><tr><td>initFetchData</td><td>\u521D\u59CB\u662F\u5426\u8BF7\u6C42\u6570\u636E</td><td>\u5426</td><td><code>boolean</code></td><td>-</td><td><code>true</code></td></tr></tbody></table><h3 id="table-column-attributes" tabindex="-1">Table Column Attributes</h3><p><code>ant-design-vue</code> \u7684 <code>Table Column Attributes</code> \u5168\u90E8\u53EF\u7528\uFF0C\u8FD9\u91CC\u5217\u4E3E\u65B0\u6DFB\u52A0\u5B57\u6BB5</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u5FC5\u4F20</th><th>\u7C7B\u578B</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>label</td><td>\u8868\u683C\u6807\u9898</td><td>\u662F</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td>prop</td><td>\u5B57\u6BB5\u540D</td><td>\u662F</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td>hidden</td><td>\u5728 <code>Table</code> \u4E2D\u4E0D\u5C55\u793A\u6B64\u5217</td><td>\u5426</td><td><code>boolean</code></td><td>-</td><td>-</td></tr><tr><td>isTags</td><td>\u662F\u5426\u4EE5\u6807\u7B7E\u5C55\u793A</td><td>\u5426</td><td><code>boolean</code></td><td>-</td><td>-</td></tr><tr><td>operates</td><td>\u64CD\u4F5C\u680F\u5185\u5BB9\u914D\u7F6E\uFF0C\u5177\u4F53\u770B\u4E0B\u65B9 <code>Operate Attributes</code>\uFF0C\u914D\u7F6E\u64CD\u4F5C\u680F\u65F6 <code>prop</code> \u5FC5\u987B\u4E3A <code>operate</code></td><td>\u5426</td><td><code>(params: ColumnParams&lt;T&gt;) =&gt; OperateItem[]</code></td><td><code>{ record, index, column, text }</code></td><td>-</td></tr></tbody></table><h4 id="operate-attributes" tabindex="-1">Operate Attributes</h4><p><code>ant-design-vue</code> \u7684 <code>Button Attributes</code> \u5168\u90E8\u53EF\u7528\uFF0C\u8FD9\u91CC\u5217\u4E3E\u65B0\u6DFB\u52A0\u5B57\u6BB5</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u5FC5\u4F20</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>label</td><td>\u64CD\u4F5C\u6309\u94AE\u6587\u6848</td><td>\u662F</td><td><code>string</code></td><td>-</td></tr><tr><td>auth</td><td>\u8BBE\u7F6E\u6309\u94AE\u6743\u9650</td><td>\u5426</td><td><code>string</code></td><td>-</td></tr><tr><td>hidden</td><td>\u8BBE\u7F6E\u6309\u94AE\u662F\u5426\u9690\u85CF</td><td>\u5426</td><td><code>boolean</code></td><td>-</td></tr><tr><td>popConfirm</td><td>\u6C14\u6CE1\u63D0\u793A\u914D\u7F6E</td><td>\u5426</td><td><code>Object&lt;PopConfirm Attributes&gt;</code></td><td>-</td></tr></tbody></table><h2 id="\u4E8B\u4EF6" tabindex="-1">\u4E8B\u4EF6</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5206\u9875\u3001\u6392\u5E8F\u3001\u7B5B\u9009\u53D8\u5316\u65F6\u89E6\u53D1</td><td><code>Function(pagination, filters, sorter, { currentDataSource })</code></td></tr><tr><td>expand</td><td>\u70B9\u51FB\u5C55\u5F00\u56FE\u6807\u65F6\u89E6\u53D1</td><td><code>Function(expanded, record)</code></td></tr><tr><td>expandedRowsChange</td><td>\u5C55\u5F00\u7684\u884C\u53D8\u5316\u65F6\u89E6\u53D1</td><td><code>Function(expandedRows)</code></td></tr><tr><td>resizeColumn</td><td>\u62D6\u52A8\u5217\u65F6\u89E6\u53D1</td><td><code>Function(width, column)</code></td></tr></tbody></table><h2 id="\u65B9\u6CD5" tabindex="-1">\u65B9\u6CD5</h2><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>getTableRef</td><td>\u83B7\u53D6\u8868\u683C\u5B9E\u4F8B\uFF0C\u901A\u8FC7\u8868\u683C\u5B9E\u4F8B\u53EF\u4EE5\u8C03\u7528 <code>ant-design-vue</code> <code>Table</code> \u7684\u6240\u6709\u65B9\u6CD5</td><td>-</td></tr><tr><td>reload</td><td>\u8C03\u7528 fetchApi\uFF0C\u9ED8\u8BA4\u53C2\u6570\u4E0D\u53D8\uFF0C\u91CD\u65B0\u8BF7\u6C42</td><td>resetPageIndex</td></tr><tr><td>getData</td><td>\u83B7\u53D6\u8868\u683C\u6570\u636E</td><td>-</td></tr><tr><td>getDataTotal</td><td>\u83B7\u53D6\u8868\u683C\u6570\u636E\u603B\u6761\u6570</td><td>-</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>headerAction</td><td>\u8868\u683C\u9876\u90E8\u6DFB\u52A0\u64CD\u4F5C\u6309\u94AE</td></tr><tr><td>headerExtra</td><td>\u8868\u683C\u9876\u90E8\u53F3\u4FA7\u6DFB\u52A0\u6587\u6848</td></tr></tbody></table>',15);function X(p,o,u,c,l,i){const a=d("render-demo-0"),e=d("demo"),s=d("render-demo-1"),m=d("render-demo-2"),D=d("render-demo-3"),E=d("render-demo-4"),C=d("render-demo-5"),y=d("render-demo-6");return b(),B("div",null,[x,f,v,R,r(e,{sourceCode:`<template>
  <it-table
    width="100%"
    :schemas="schemas"
    :data-source="tableData"
  />
</template>
<script>
export default {
  data() {
    return {
      schemas: [
        {
          label: '\u65E5\u671F',
          prop: 'date',
          width: '120px'
        },
        {
          label: '\u59D3\u540D',
          prop: 'name',
          width: '100px'
        },
        {
          label: '\u5730\u5740',
          prop: 'address',
          width: '250px'
        }
      ],
      tableData: [
        {
          date: '2016-05-02',
          name: '\u738B\u5C0F\u864E',
          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04'
        },
        {
          date: '2016-05-04',
          name: '\u738B\u5C0F\u864E',
          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04'
        },
        {
          date: '2016-05-01',
          name: '\u738B\u5C0F\u864E',
          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04'
        },
        {
          date: '2016-05-03',
          name: '\u738B\u5C0F\u864E',
          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04'
        }
      ]
    }
  }
}
<\/script>
`},{highlight:k(()=>[q]),default:k(()=>[r(a)]),_:1}),P,N,r(e,{sourceCode:`<template>
  <it-table
    width="100%"
    :schemas="schemas"
    :fetchParams="fetchParams"
    :fetchApi="fetchData"
  />
</template>

<script>
export default {
  data() {
    return {
      schemas: [
        {
          label: '\u65E5\u671F',
          prop: 'date',
          width: '120px',
          customRender: ({record}) => {
            return record.date
          }
        },
        {
          label: '\u59D3\u540D',
          prop: 'name',
          width: '100px'
        },
        {
          label: '\u5730\u5740',
          prop: 'address',
          width: '250px'
        },
        {
          title: '\u64CD\u4F5C',
          prop: 'operate',
          width: '210px',
          operates: () => {
            return [
              {
                label: '\u67E5\u770B'
              },
              {
                label: '\u7F16\u8F91',
                type: 'primary'
              },
              {
                label: '\u786E\u8BA4',
                type: 'primary'
              }
            ]
          }
        }
      ],
      fetchParams: {
        test: 'test'
      },
      tableData: [
        {
          date: '2016-05-02',
          name: '\u738B\u5C0F\u864E',
          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04'
        },
        {
          date: '2016-05-04',
          name: '\u738B\u5C0F\u864E',
          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04'
        },
        {
          date: '2016-05-01',
          name: '\u738B\u5C0F\u864E',
          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04'
        },
        {
          date: '2016-05-03',
          name: '\u738B\u5C0F\u864E',
          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04'
        }
      ]
    }
  },
  methods: {
    fetchData() {
      // \u6A21\u62DF\u8BF7\u6C42
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            content: this.tableData,
            total: 4
          })
        }, 300)
      })
    }
  }
}
<\/script>
`},{highlight:k(()=>[V]),default:k(()=>[r(s)]),_:1}),T,S,r(e,{sourceCode:`<template>
  <it-table
    width="100%"
    :schemas="schemas"
    :fetchParams="fetchParams"
    :fetchApi="fetchData"
  >
    <template #headerAction>
      <a-button type="primary"><plus-outlined />\u65B0\u589E</a-button>
      <a-button><download-outlined />\u5BFC\u51FA</a-button>
    </template>
  </it-table>
</template>

<script>
export default {
  data() {
    return {
      schemas: [
        {
          label: '\u65E5\u671F',
          prop: 'date',
          width: '120px',
          customRender: ({record}) => {
            return record.date
          }
        },
        {
          label: '\u59D3\u540D',
          prop: 'name',
          width: '100px'
        },
        {
          label: '\u5730\u5740',
          prop: 'address',
          width: '250px'
        },
        {
          label: '\u64CD\u4F5C',
          prop: 'operate',
          width: '210px',
          operates: () => {
            return [
              {
                label: '\u67E5\u770B'
              },
              {
                label: '\u7F16\u8F91',
                type: 'primary'
              },
              {
                label: '\u786E\u8BA4',
                type: 'primary'
              }
            ]
          }
        }
      ],
      fetchParams: {
        test: 'test'
      },
      tableData: [
        {
          date: '2016-05-02',
          name: '\u738B\u5C0F\u864E',
          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04'
        },
        {
          date: '2016-05-04',
          name: '\u738B\u5C0F\u864E',
          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04'
        },
        {
          date: '2016-05-01',
          name: '\u738B\u5C0F\u864E',
          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04'
        },
        {
          date: '2016-05-03',
          name: '\u738B\u5C0F\u864E',
          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04'
        }
      ]
    }
  },
  methods: {
    fetchData() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            content: this.tableData,
            total: 4
          })
        }, 100)
      })
    }
  }
}
<\/script>
`},{highlight:k(()=>[I]),default:k(()=>[r(m)]),_:1}),j,K,r(e,{sourceCode:`<template>
  <it-table
    width="100%"
    :schemas="schemas"
    :data-source="tableData"
    rowKey="date"
    :row-selection="rowSelection"
  />
</template>

<script>
interface DataItem {
  date: string
  name: string
  address: string
}

export default {
  data() {
    return {
      schemas: [
        {
          label: '\u65E5\u671F',
          prop: 'date',
          width: '120px'
        },
        {
          label: '\u59D3\u540D',
          prop: 'name',
          width: '100px'
        },
        {
          label: '\u5730\u5740',
          prop: 'address'
        }
      ],
      tableData: [
        {
          date: '2016-05-02',
          name: '\u738B\u5C0F\u864E',
          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04'
        },
        {
          date: '2016-05-04',
          name: '\u738B\u5C0F\u864E',
          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04'
        },
        {
          date: '2016-05-01',
          name: '\u738B\u5C0F\u864E',
          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04'
        },
        {
          date: '2016-05-03',
          name: '\u738B\u5C0F\u864E',
          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04'
        }
      ],
      rowSelection: {
        onChange: (selectedRowKeys: (string | number)[], selectedRows: DataItem[]) => {
          console.log(\`selectedRowKeys: \${selectedRowKeys}\`, 'selectedRows: ', selectedRows)
        },
        onSelect: (record: DataItem, selected: boolean, selectedRows: DataItem[]) => {
          console.log(record, selected, selectedRows)
        },
        onSelectAll: (selected: boolean, selectedRows: DataItem[], changeRows: DataItem[]) => {
          console.log(selected, selectedRows, changeRows)
        }
      }
    }
  }
}
<\/script>
`},{highlight:k(()=>[$]),default:k(()=>[r(D)]),_:1}),O,z,r(e,{sourceCode:`<template>
  <it-table
    width="100%"
    :schemas="schemas"
    :pagination="false"
    :data-source="tableData"
  />
</template>

<script>
export default {
  data() {
    return {
      schemas: [
        {
          label: '\u65E5\u671F',
          prop: 'date',
          width: '120px'
        },
        {
          label: '\u59D3\u540D',
          prop: 'name',
          width: '100px'
        },
        {
          label: '\u5730\u5740',
          prop: 'address',
          width: '250px'
        }
      ],
      tableData: [
        {
          date: '2016-05-02',
          name: '\u738B\u5C0F\u864E',
          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04'
        },
        {
          date: '2016-05-04',
          name: '\u738B\u5C0F\u864E',
          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04'
        },
        {
          date: '2016-05-01',
          name: '\u738B\u5C0F\u864E',
          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04'
        },
        {
          date: '2016-05-03',
          name: '\u738B\u5C0F\u864E',
          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04'
        }
      ]
    }
  }
}
<\/script>
`},{highlight:k(()=>[J]),default:k(()=>[r(E)]),_:1}),U,G,r(e,{sourceCode:`<template>
  <it-table
    width="100%"
    :schemas="schemas"
    :data-source="tableData"
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
          width: '120px',
          customRender() {
            return '\u81EA\u5B9A\u4E49\u65E5\u671F'
          }
        },
        {
          label: '\u59D3\u540D',
          prop: 'name',
          width: '100px',
          customRender({record}) {
            return '\u81EA\u5B9A\u4E49\u59D3\u540D'
          }
        },
        {
          label: '\u5730\u5740',
          prop: 'address',
          width: '250px'
        }
      ],
      tableData: [
        {
          date: '2016-05-02',
          name: '\u738B\u5C0F\u864E',
          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04'
        },
        {
          date: '2016-05-04',
          name: '\u738B\u5C0F\u864E',
          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04'
        },
        {
          date: '2016-05-01',
          name: '\u738B\u5C0F\u864E',
          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04'
        },
        {
          date: '2016-05-03',
          name: '\u738B\u5C0F\u864E',
          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04'
        }
      ]
    }
  }
}
<\/script>
`},{highlight:k(()=>[H]),default:k(()=>[r(C)]),_:1}),L,M,r(e,{sourceCode:`<template>
  <it-table
    width="100%"
    bordered
    :schemas="schemas"
    :data-source="tableData"
  >
    <template #bodyCell="{column, record}">
      <template v-if="column.key === 'date'">
        <span style="color: red;">{{record.date}}</span>
      </template>
      <template v-if="column.key === 'name'">
        <span style="color: green;">{{record.name}}</span>
      </template>
    </template>
  </it-table>
</template>

<script>
export default {
  data() {
    return {
      schemas: [
        {
          label: '\u65E5\u671F',
          prop: 'date',
          width: '120px'
        },
        {
          label: '\u59D3\u540D',
          prop: 'name',
          width: '100px'
        },
        {
          label: '\u4FE1\u606F',
          children: [
            {
              label: '\u6027\u522B',
              prop: 'sex',
              width: '70px'
            },
            {
              label: '\u8EAB\u9AD8',
              prop: 'height',
              width: '70px'
            }
          ]
        },
        {
          label: '\u5730\u5740',
          prop: 'address',
          width: '250px'
        }
      ],
      tableData: [
        {
          date: '2016-05-02',
          name: '\u738B\u5C0F\u864E',
          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',
          sex: '\u7537',
          height: '180'
        },
        {
          date: '2016-05-04',
          name: '\u738B\u5C0F\u864E',
          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04',
          sex: '\u7537',
          height: '180'
        },
        {
          date: '2016-05-01',
          name: '\u738B\u5C0F\u864E',
          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04',
          sex: '\u7537',
          height: '180'
        },
        {
          date: '2016-05-03',
          name: '\u738B\u5C0F\u864E',
          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04',
          sex: '\u7537',
          height: '180'
        }
      ]
    }
  }
}
<\/script>
`},{highlight:k(()=>[Q]),default:k(()=>[r(y)]),_:1}),W])}var tt=A(_,[["render",X]]);export{Z as __pageData,tt as default};
