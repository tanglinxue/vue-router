import History from './base';

const ensureSlash = ()=>{
  //console.log(window.location)
  if(window.location.hash){
    return 
  }
  window.location.hash = '/'
}

export default class HashHistory extends History{
    constructor(router){
      super(router)
      //如果使用hashHistory默认如果没有hash应该跳转到首页#/
      ensureSlash()
    }
    getCurrentLocation(){
      //console.log(window.location.hash)
      return window.location.hash.slice(1)
    }
    setupListener(){
      window.addEventListener('hashchange',()=>{
        this.transitionTo(this.getCurrentLocation())
      })
    }
}
