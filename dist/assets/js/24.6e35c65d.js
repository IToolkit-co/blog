(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{vD6i:function(t,n,e){"use strict";e.r(n);var r=e("uFwe"),o=(e("TeQF"),{data:function(){return{activeAnchor:"",observer:null}},computed:{page:function(){return this.$page.post},headings:function(){return this.page.headings.filter((function(t){return t.depth>1}))}},watch:{$route:function(){window.location.hash&&(this.activeAnchor=window.location.hash),this.observer&&(this.observer.disconnect(),this.$nextTick(this.initObserver))}},methods:{observerCallback:function(t,n){if(!(t.length>1)){var e=t[0].target.id;e&&(this.activeAnchor="#"+e,history.replaceState&&history.replaceState(null,null,"#"+e))}},initObserver:function(){this.observer=new IntersectionObserver(this.observerCallback,{rootMargin:"0px 0px 99999px",threshold:1});var t,n=document.querySelectorAll(".markdown-body h2, .markdown-body h3, .markdown-body h4, .markdown-body h5, .markdown-body h6"),e=Object(r.a)(n);try{for(e.s();!(t=e.n()).done;){var o=t.value;this.observer.observe(o)}}catch(t){e.e(t)}finally{e.f()}}},mounted:function(){window.location.hash&&(this.activeAnchor=window.location.hash),this.$nextTick(this.initObserver)}}),a=e("KHd+"),i=Object(a.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"my-4"},[e("p",{staticClass:"text-xl font-semibold pb-5"},[t._v("Table of content")]),e("ul",t._l(t.headings,(function(n,r){var o;return e("li",{key:""+t.page.path+n.anchor,class:(o={"border-t border-dashed border-ui-border border-gray-500 dark:border-gray-600 pt-2 mt-2":r>0&&2===n.depth,"font-light":2===n.depth},o["depth-"+n.depth]=!0,o)},[e("g-link",{staticClass:"\n          relative\n          flex\n          items-center\n          py-1\n          text-sm\n          transition\n          transform\n          hover:translate-x-1\n          font-normal\n        ",class:{"pl-2":3===n.depth,"pl-3":4===n.depth,"pl-4":5===n.depth,"pl-5":6===n.depth,"font-semibold text-secondary-500":t.activeAnchor===n.anchor},attrs:{to:t.page.path+"/"+n.anchor}},[e("span",{staticClass:"\n            absolute\n            w-2\n            h-2\n            -ml-4\n            rounded-full\n            opacity-0\n            bg-secondary-500\n            transition\n            transform\n            scale-0\n            origin-center\n          ",class:{"opacity-100 scale-100":t.activeAnchor===n.anchor}}),t._v("\n        "+t._s(n.value)+"\n      ")])],1)})),0)])}),[],!1,null,null,null);n.default=i.exports}}]);