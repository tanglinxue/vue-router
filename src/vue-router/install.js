let Vue = null
import RouterLink from './components/router-link'
import RouterView from './components/router-view'
const install = function(_Vue){
 
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
        // 如果用户更改了current是没有效果的需要把_route也进行更新
        Vue.util.defineReactive(this,'_route',this._router.history.current)
      }else{
        this._routerRoot = this.$parent && this.$parent._routerRoot     //所有组件都有this._routerRoot属性
      }
      //console.log(this._routerRoot._router)
    },
  })

  Object.defineProperty(Vue.prototype,'$router',{
    get(){
      return this._routerRoot && this._routerRoot._router
    }
  })

  Object.defineProperty(Vue.prototype,'$route',{
    get(){
      return this._routerRoot && this._routerRoot._route
    }
  })
}


export default install
