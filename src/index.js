import Vue from 'vue'

export default function observe(obj, key, desc) {
  if (!obj.__state) {
    Vue.util.defineReactive(obj, '__$$state', {})
  }
  Vue.set(obj.__$$state, key, desc.initializer())
  return Object.getOwnPropertyDescriptor(obj.__$$state, key)
}
