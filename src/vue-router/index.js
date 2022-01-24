import install from './install'
import createMatcher from './create-matcher'
import HashHistory from './history/hashHistory'
import BrowserHistory from './history/browserHistory'
class VueRouter{
  constructor(options){
    // 1
    this.matcher = createMatcher(options.routes || [])
    // 创建匹配器的过程

    //创建历史管理(路由两种模式hash，浏览器api)
    this.mode = options.mode || 'hash'
    switch(this.mode){
      case 'hash':
        this.history = new HashHistory(this)
        break;
      case 'history':
        this.history = new BrowserHistory(this)
        break;
    }
  }
  init(App){//目前APP指代的就是最外层new Vue
    // 需要根据用户配置作出一个映射表来
    console.log(App)

    //需要根据当前路径，实现一下页面跳转的逻辑
    const history = this.history
    let setupHashListener = ()=>{
      history.setupListener()
    }
    // 跳转路径，根据路径获取对应的记录
    history.transitionTo(history.getCurrentLocation(),setupHashListener)

  }
}

VueRouter.install = install

export default VueRouter
