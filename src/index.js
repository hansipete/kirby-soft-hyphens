const marker = "<shy style='color: var(--color-gray-400);'>|</shy>"

panel.plugin("toto/kirby-soft-hyphens", {
	use: [
		(Vue) => {
			Vue.mixin({
				mounted() {
					// only affect k-writer fields
					if (this.$options.name === "k-writer-input") {
						// append visible marker to soft hyphens. wrapped in a tag that's not allowed to be stored back in the content.txt
						this.$el.innerHTML = this.$el.innerHTML.replace(/\u00AD/g, `\u00AD${marker}`)
					}
				}
			})
		}
	]
})
