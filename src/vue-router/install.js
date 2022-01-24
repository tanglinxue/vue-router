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
        this._routerRoot = this;//将当前根实例放到了_routerRoot
        this._router = this.$options.router//给根增加_router
        // 当前用户的router属性
        this._router.init(this) 
      }else{
        this._routerRoot = this.$parent && this.$parent._routerRoot     //所有组件都有this._routerRoot属性
      }
      //console.log(this._routerRoot._router)
    },
  })
}


export default install
