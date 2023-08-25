import{_ as i,r as p,o as c,c as _,a as e,t as s,F as l,p as d,e as r}from"./index-e27e371d.js";const h=t=>(d("data-v-a0d12e03"),t=t(),r(),t),u={class:"note-div"},g={class:"title-content"},v={class:"note-title"},m={class:"note-info"},f={class:"markdown"},k={class:"container"},w=["innerHTML"],x=h(()=>e("section",null,null,-1)),D={__name:"NoteDetailPage",setup(t){const o=p("今天的天气真不错。"),n=p("2022-09-19 00:19:49"),a=p(`
  <p>1. 块级元素 block<p>
  <p>块级元素，顾名思义，该元素呈现“块”状，所以它有自己的宽度和高度，也就是可自定义 width 和 height。<p>
  <p>除此之外，块级元素比较霸道，它独自占据一行高度（float浮动除外），一般可以作为其他容器使用，可容纳块级元素和行内元素。<p>
  <p>块级元素有以下特点：<p>
  <p>每个块级元素都是独自占一行；<p>
  <p>高度，行高，外边距（margin）以及内边距（padding）都可以控制;<p>
  <p>元素的宽度如果不设置的话，默认为父元素的宽度（父元素宽度100%）;<p>
  <p>多个块状元素标签写在一起，默认排列方式为从上至下； <p>
  <p>2. 行内元素 inline<p>
  <p>行内元素不可以设置宽（width）和高（height），但可以与其他行内元素位于同一行，行内元素内一般不可以包含块级元素。行内元素的高度一般由元素内部的字体大小决定，宽度由内容的长度控制。<p>
  <p>行内元素有以下特点：<p>
  <p>不会独占一行，相邻的行内元素会排列在同一行里，直到一行排不下才会自动换行，其宽度随元素的内容而变化；<p>
  <p>高宽无效，对外边距（margin）和内边距（padding）仅设置左右方向有效 上下无效；<p>
  <p>设置行高有效，等同于给父级元素设置行高； 元素的宽度就是它包含的文字或图片的宽度，不可改变；<p>
  <p>行内元素中不能放块级元素，a 链接里面不能再放链接； <p>
  <p>3. 行内块级元素 inline-block<p>
  <p>行内块级元素，它既具有块级元素的特点，也有行内元素的特点，它可以自由设置元素宽度和高度，也可以在一行中放置多个行内块级元素。比如：input、img就是行内块级元素，它可设置高宽以及一行多个。<p>
  <p>具体特点如下： 高度、行高、外边距以及内边距都可以控制；<p>
  <p>默认宽度就是它本身内容的宽度，不独占一行，但是之间会有空白缝隙，设置它上一级的 font-size 为0，才会消除间隙; <p>
`);return(I,N)=>(c(),_(l,null,[e("section",u,[e("div",g,[e("div",v,s(o.value),1),e("div",m,[e("span",null,s(n.value),1)])])]),e("article",f,[e("div",k,[e("p",{innerHTML:a.value},null,8,w)])]),x],64))}},y=i(D,[["__scopeId","data-v-a0d12e03"]]);export{y as default};
