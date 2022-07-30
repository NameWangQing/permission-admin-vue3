import type { Directive, DirectiveBinding } from "vue";

const copy: Directive = {
  mounted(el, binding) {
    const value = binding.value;
    const type = binding.modifiers;
    value && handle(el, type);
  },
};

function handle(el: any, type: any) {
  if (type.disabled) {
    el.disabled = true;
    el.classList.add("el-disabeld", "is-disabled");
  } else if (type.remove) {
    el.parentNode.removeChild(el);
  }
}
