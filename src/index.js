// prepare DOM elements
const marker = "<shy></shy>"

panel.plugin("toto/kirby-soft-hyphens", {
	use: [
		(Vue) => {
			Vue.mixin({
				mounted() {
					if (this.$options.name !== "k-writer-input") return

					// create shadow el that will just serve the purpose to render soft hyphens visibly
					// while keeping the original content untouched
					// append visible marker to soft hyphens. wrapped in a tag that's not allowed to be stored back in the content.txt
					this.$overlayEl = document.createElement("div")
					this.$overlayEl.className = "ProseMirror k-text k-text--visible-soft-hyphens"
					this.$overlayEl.innerHTML = this.value.replace(/\u00AD/g, `\u00AD${marker}`)
					this.$el.appendChild(this.$overlayEl)
				},
				watch: {
					value(newVal) {
						if (this.$options.name !== "k-writer-input") return

						this.$overlayEl.innerHTML = newVal.replace(/\u00AD/g, `\u00AD${marker}`)
					}
				}
			})
		}
	]
})
