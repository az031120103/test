import{_ as C,r as F,o as g,c as D,a as k,w as d,b as t,d as A,V as E,e as n}from"./app.92a2c68d.js";const B={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:e,createVNode:o,withCtx:p,openBlock:c,createElementBlock:u}=E;function l(s,i){const m=e("it-export-2-excel"),a=e("it-table");return c(),u("div",null,[o(a,{fetchParams:s.searchParams,fetchApi:s.fetchData,schemas:s.schemas,pagination:s.pagination},{headerAction:p(()=>[o(m,{type:"primary",danger:"",buttonText:"\u5BFC\u51FA\u6570\u636E",fileName:"\u4F01\u4E1A\u7528\u6237\u4FE1\u606F",dataType:"table",el:".ant-table-container"})]),_:1},8,["fetchParams","fetchApi","schemas","pagination"])])}return{render:l,...{data(){return{schemas:[{label:"\u65E5\u671F",prop:"date",width:"120px"},{label:"\u59D3\u540D",prop:"name",width:"100px"},{label:"\u5730\u5740",prop:"address",width:"250px"}],searchParams:{test:"test"},tableData:[{date:"2016-05-02",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-04",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04"},{date:"2016-05-01",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04"},{date:"2016-05-03",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04"}],pagination:{showSizeChanger:!0,showQuickJumper:!0,current:1}}},methods:{fetchData(){return new Promise(s=>{setTimeout(()=>{s({content:this.tableData,total:4})},300)})}}}}}(),"render-demo-1":function(){const{resolveComponent:e,createVNode:o,toDisplayString:p,createElementVNode:c,withCtx:u,openBlock:l,createElementBlock:r}=E,s={style:{color:"red"}};function i(a,N){const h=e("it-export-2-excel"),y=e("it-table");return l(),r("div",null,[o(y,{fetchParams:a.searchParams,fetchApi:a.fetchData,schemas:a.schemas,pagination:a.pagination},{headerAction:u(()=>[o(h,{buttonText:"\u52A8\u6001\u5BFC\u51FA\u6570\u636E",danger:"",fetchParams:a.searchParams,fetchApi:a.exportList,notification:!0},null,8,["fetchParams","fetchApi"])]),headerExtra:u(()=>[c("span",s,p(a.tips),1)]),_:1},8,["fetchParams","fetchApi","schemas","pagination"])])}return{render:i,...{data(){return{tips:"",schemas:[{label:"\u65E5\u671F",prop:"date",width:"120px"},{label:"\u59D3\u540D",prop:"name",width:"100px"},{label:"\u5730\u5740",prop:"address",width:"250px"}],searchParams:{test:"test"},tableData:[{date:"2016-05-02",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"},{date:"2016-05-04",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04"},{date:"2016-05-01",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04"},{date:"2016-05-03",name:"\u738B\u5C0F\u864E",address:"\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04"}],pagination:{showSizeChanger:!0,showQuickJumper:!0,current:1}}},methods:{fetchData(){return new Promise(a=>{setTimeout(()=>{a({content:this.tableData,total:4})},300)})},exportList(){return new Promise(a=>{setTimeout(()=>{this.tips="\u4EC5\u4F5C\u6A21\u62DF\uFF0C\u5B9E\u9645\u4F7F\u7528\u9700\u63A5\u53E3\u8FD4\u56DE\u6587\u4EF6\u6D41\u6570\u636E"},300)})}}}}}()}},S=JSON.parse('{"title":"ItExport2Excel \u5BFC\u51FA","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5BFC\u51FA\u8868\u683C","slug":"\u5BFC\u51FA\u8868\u683C"},{"level":2,"title":"\u52A8\u6001\u5BFC\u51FA excel","slug":"\u52A8\u6001\u5BFC\u51FA-excel"},{"level":2,"title":"\u53C2\u6570","slug":"\u53C2\u6570"}],"relativePath":"components/export2Excel.md","lastUpdated":1670915712000}'),b=t("h1",{id:"itexport2excel-\u5BFC\u51FA",tabindex:"-1"},"ItExport2Excel \u5BFC\u51FA",-1),f=t("h2",{id:"\u5BFC\u51FA\u8868\u683C",tabindex:"-1"},"\u5BFC\u51FA\u8868\u683C",-1),x=t("p",null,"\u5F53 dataType \u5B57\u6BB5\u8BBE\u7F6E\u4E3A table \u65F6\uFF0C\u5BFC\u51FA html \u8868\u683C\u6570\u636E\u3002",-1),_=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("it-table")]),n(`
    `),t("span",{class:"token attr-name"},":fetchParams"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("searchParams"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":fetchApi"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("fetchData"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":schemas"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("schemas"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":pagination"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("pagination"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#headerAction"),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("it-export-2-excel")]),n(`
        `),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},"'"),n("primary"),t("span",{class:"token punctuation"},"'")]),n(`
        `),t("span",{class:"token attr-name"},"danger"),n(`
        `),t("span",{class:"token attr-name"},"buttonText"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},"'"),n("\u5BFC\u51FA\u6570\u636E"),t("span",{class:"token punctuation"},"'")]),n(`
        `),t("span",{class:"token attr-name"},"fileName"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},"'"),n("\u4F01\u4E1A\u7528\u6237\u4FE1\u606F"),t("span",{class:"token punctuation"},"'")]),n(`
        `),t("span",{class:"token attr-name"},"dataType"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},"'"),n("table"),t("span",{class:"token punctuation"},"'")]),n(`
        `),t("span",{class:"token attr-name"},"el"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},"'"),n(".ant-table-container"),t("span",{class:"token punctuation"},"'")]),n(`
      `),t("span",{class:"token punctuation"},"/>")]),n(`
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
            `),t("span",{class:"token literal-property property"},"label"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u5730\u5740'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"prop"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'address'"),t("span",{class:"token punctuation"},","),n(`
            `),t("span",{class:"token literal-property property"},"width"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'250px'"),n(`
          `),t("span",{class:"token punctuation"},"}"),n(`
        `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token literal-property property"},"searchParams"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
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
        `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token literal-property property"},"pagination"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"showSizeChanger"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"showQuickJumper"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"current"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"1"),n(`
        `),t("span",{class:"token punctuation"},"}"),n(`
      `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token literal-property property"},"methods"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token function"},"fetchData"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token keyword"},"new"),n(),t("span",{class:"token class-name"},"Promise"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"resolve"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
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
`)])])],-1),w=t("h2",{id:"\u52A8\u6001\u5BFC\u51FA-excel",tabindex:"-1"},"\u52A8\u6001\u5BFC\u51FA excel",-1),v=t("p",null,"\u5F53 dataType \u5B57\u6BB5\u8BBE\u7F6E\u4E3A api \u65F6\uFF0C\u5C06\u5BFC\u51FA\u63A5\u53E3\u8FD4\u56DE\u7684\u6587\u4EF6\u6D41\u6570\u636E\uFF0C\u7EC4\u4EF6\u9ED8\u8BA4\u4E3A\u8BE5\u5BFC\u51FA\u6A21\u5F0F\u3002",-1),P=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("it-table")]),n(`
    `),t("span",{class:"token attr-name"},":fetchParams"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("searchParams"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":fetchApi"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("fetchData"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":schemas"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("schemas"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":pagination"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("pagination"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#headerAction"),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("it-export-2-excel")]),n(`
        `),t("span",{class:"token attr-name"},"buttonText"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},"'"),n("\u52A8\u6001\u5BFC\u51FA\u6570\u636E"),t("span",{class:"token punctuation"},"'")]),n(`
        `),t("span",{class:"token attr-name"},"danger"),n(`
        `),t("span",{class:"token attr-name"},":fetchParams"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("searchParams"),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token attr-name"},":fetchApi"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("exportList"),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token attr-name"},":notification"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("true"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token punctuation"},"/>")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#headerExtra"),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("span")]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"color"),t("span",{class:"token punctuation"},":"),n(" red"),t("span",{class:"token punctuation"},";")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n("{{tips}}"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("span")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("it-table")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
  `),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token function"},"data"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token literal-property property"},"tips"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},","),n(`
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
        `),t("span",{class:"token literal-property property"},"searchParams"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
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
        `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token literal-property property"},"pagination"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"showSizeChanger"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"showQuickJumper"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"current"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"1"),n(`
        `),t("span",{class:"token punctuation"},"}"),n(`
      `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token literal-property property"},"methods"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token function"},"fetchData"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token keyword"},"new"),n(),t("span",{class:"token class-name"},"Promise"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"resolve"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token function"},"setTimeout"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token function"},"resolve"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
              `),t("span",{class:"token literal-property property"},"content"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token keyword"},"this"),t("span",{class:"token punctuation"},"."),n("tableData"),t("span",{class:"token punctuation"},","),n(`
              `),t("span",{class:"token literal-property property"},"total"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"4"),n(`
            `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token number"},"300"),t("span",{class:"token punctuation"},")"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token function"},"exportList"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token keyword"},"new"),n(),t("span",{class:"token class-name"},"Promise"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"resolve"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token function"},"setTimeout"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
            `),t("span",{class:"token keyword"},"this"),t("span",{class:"token punctuation"},"."),n("tips "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token string"},"'\u4EC5\u4F5C\u6A21\u62DF\uFF0C\u5B9E\u9645\u4F7F\u7528\u9700\u63A5\u53E3\u8FD4\u56DE\u6587\u4EF6\u6D41\u6570\u636E'"),n(`
          `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token number"},"300"),t("span",{class:"token punctuation"},")"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
      `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),T=A('<h2 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570</h2><p><code>ant-design-vue</code> \u7684 <code>Button Attributes</code> \u5168\u90E8\u53EF\u7528\uFF0C\u8FD9\u91CC\u5217\u4E3E\u65B0\u6DFB\u52A0\u5B57\u6BB5\u3002</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u5FC5\u4F20</th><th>\u7C7B\u578B</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>buttonText</td><td>\u6309\u94AE\u6587\u6848</td><td>\u5426</td><td><code>string</code></td><td>-</td><td><code>\u5BFC\u51FA</code></td></tr><tr><td>auth</td><td>\u8BBE\u7F6E\u6309\u94AE\u6743\u9650</td><td>\u5426</td><td><code>string | array</code></td><td>-</td><td>-</td></tr><tr><td>dataType</td><td>\u5BFC\u51FA\u6570\u636E\u7C7B\u578B</td><td>\u5426</td><td><code>&#39;api&#39; | &#39;table&#39;</code></td><td>-</td><td><code>api</code></td></tr><tr><td>fileName</td><td>\u5BFC\u51FA\u6587\u4EF6\u540D\uFF0CdataType = table \u65F6\u6709\u6548</td><td>\u5426</td><td><code>string</code></td><td>-</td><td><code>excel-list</code></td></tr><tr><td>el</td><td>\u8868\u683C\u5143\u7D20 className \u6216 id\uFF0CdataType = table \u65F6\u5FC5\u4F20</td><td>\u5426</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td>beforeFetch</td><td>\u521D\u59CB\u8BF7\u6C42\u6570\u636E\u524D\u6267\u884C\u7684\u65B9\u6CD5\uFF0C\u5F02\u6B65\u51FD\u6570\u9700\u8FD4\u56DE Promise\uFF0CdataType = api \u65F6\u6709\u6548</td><td>\u5426</td><td><code>Function | Request Function</code></td><td>-</td><td>-</td></tr><tr><td>fetchParams</td><td>fetchApi \u7684\u53C2\u6570\uFF0CdataType = api \u65F6\u6709\u6548</td><td>\u5426</td><td><code>object</code></td><td>-</td><td><code>{}</code></td></tr><tr><td>fetchApi</td><td>\u8BF7\u6C42\u6570\u636E api \u7684\u65B9\u6CD5\uFF0CdataType = api \u65F6\u5FC5\u4F20</td><td>\u5426</td><td><code>Function | Request Function</code></td><td>-</td><td>-</td></tr><tr><td>notification</td><td>\u662F\u5426\u5F00\u542F\u5BFC\u51FA\u63D0\u793A</td><td>\u5426</td><td><code>boolean</code></td><td>-</td><td><code>false</code></td></tr><tr><td>notificationMessage</td><td>\u5BFC\u51FA\u63D0\u793A\u8BED</td><td>\u5426</td><td><code>string</code></td><td>-</td><td><code>\u6570\u636E\u6B63\u5728\u5BFC\u51FA\u8BF7\u7A0D\u540E</code></td></tr><tr><td>notificationSuccessMessage</td><td>\u5BFC\u51FA\u6210\u529F\u63D0\u793A\u8BED</td><td>\u5426</td><td><code>string</code></td><td>-</td><td><code>\u5BFC\u51FA\u6210\u529F</code></td></tr><tr><td>notificationFailMessage</td><td>\u5BFC\u51FA\u5931\u8D25\u63D0\u793A\u8BED</td><td>\u5426</td><td><code>string</code></td><td>-</td><td><code>\u5BFC\u51FA\u5931\u8D25</code></td></tr></tbody></table>',3);function q(e,o,p,c,u,l){const r=F("render-demo-0"),s=F("demo"),i=F("render-demo-1");return g(),D("div",null,[b,f,x,k(s,{sourceCode:`<template>
  <it-table
    :fetchParams="searchParams"
    :fetchApi="fetchData"
    :schemas="schemas"
    :pagination="pagination"
  >
    <template #headerAction>
      <it-export-2-excel
        type='primary'
        danger
        buttonText='\u5BFC\u51FA\u6570\u636E'
        fileName='\u4F01\u4E1A\u7528\u6237\u4FE1\u606F'
        dataType='table'
        el='.ant-table-container'
      />
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
            label: '\u5730\u5740',
            prop: 'address',
            width: '250px'
          }
        ],
        searchParams: {
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
        ],
        pagination: {
          showSizeChanger: true,
          showQuickJumper: true,
          current: 1
        }
      }
    },
    methods: {
      fetchData() {
        return new Promise(resolve => {
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
`},{highlight:d(()=>[_]),default:d(()=>[k(r)]),_:1}),w,v,k(s,{sourceCode:`<template>
  <it-table
    :fetchParams="searchParams"
    :fetchApi="fetchData"
    :schemas="schemas"
    :pagination="pagination"
  >
    <template #headerAction>
      <it-export-2-excel
        buttonText='\u52A8\u6001\u5BFC\u51FA\u6570\u636E'
        danger
        :fetchParams="searchParams"
        :fetchApi="exportList"
        :notification="true"
      />
    </template>
    <template #headerExtra>
      <span style="color: red;">{{tips}}</span>
    </template>
  </it-table>
</template>

<script>
  export default {
    data() {
      return {
        tips: '',
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
        searchParams: {
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
        ],
        pagination: {
          showSizeChanger: true,
          showQuickJumper: true,
          current: 1
        }
      }
    },
    methods: {
      fetchData() {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve({
              content: this.tableData,
              total: 4
            })
          }, 300)
        })
      },
      exportList() {
        return new Promise(resolve => {
          setTimeout(() => {
            this.tips = '\u4EC5\u4F5C\u6A21\u62DF\uFF0C\u5B9E\u9645\u4F7F\u7528\u9700\u63A5\u53E3\u8FD4\u56DE\u6587\u4EF6\u6D41\u6570\u636E'
          }, 300)
        })
      }
    }
  }
<\/script>
`},{highlight:d(()=>[P]),default:d(()=>[k(i)]),_:1}),T])}var J=C(B,[["render",q]]);export{S as __pageData,J as default};
