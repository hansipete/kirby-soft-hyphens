(function(){"use strict";const e="<shy></shy>";panel.plugin("toto/kirby-soft-hyphens",{use:[t=>{t.mixin({mounted(){this.$options.name==="k-writer-input"&&(this.$overlayEl=document.createElement("div"),this.$overlayEl.className="ProseMirror k-text k-text--visible-soft-hyphens",this.$overlayEl.innerHTML=this.value.replace(/\u00AD/g,`­${e}`),this.$el.appendChild(this.$overlayEl))},watch:{value(i){this.$options.name==="k-writer-input"&&(this.$overlayEl.innerHTML=i.replace(/\u00AD/g,`­${e}`))}}})}]})})();
