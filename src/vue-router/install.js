let Vue = null
import RouterLink from './components/router-link'
import RouterView from './components/router-view'
const install = function(_Vue){
  console.log('install')
  Vue=_Vue
  Vue.component('router-link',RouterLink)
  Vue.component('router-view',RouterView)

  Vue.mixin({
    beforeCreate() {
     
      if(this.$options.router){
        console.log('name',this.$options.name,this.$options.router)
        this._routerRoot = this;
        this._router = this.$options.router
      }else{
        console.log('儿子')
        console.log(this.$parent)
        this._routerRoot = this.$parent && this.$parent._routerRoot
        console.log(this._routerRoot.__router)
      }
    },
  })
}


export default install
