import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaseIcon from '@/components/BaseIcon.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseInput from '@/components/BaseInput.vue'

import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

// Vue.component('BaseIcon', BaseIcon) // global component --> must be above new vue instance
// Vue.component('BaseButton', BaseButton)
// Vue.component('BaseInput', BaseInput)

// another way to globally register components below
const requireComponent = require.context(
  './components', // directory to search within
  false, // do we want to search sub directories?
  /Base[A-Z]\w+\.(vue|js)$/ //search for components that match this regex
)

requireComponent.keys().forEach(fileName => {
  //.keys gives array with each file
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  ) // uses lodash methods to convert file names to pascal case

  Vue.component(componentName, componentConfig.default || componentConfig)
})

Vue.config.productionTip = false

new Vue({
  router, // same as writing "router: router"
  store,
  render: h => h(App)
}).$mount('#app')
