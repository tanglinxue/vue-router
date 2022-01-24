export const createRoute = (record,location)=>{//根据匹配到的记录来计算匹配到的所有的记录
  let matched = []
  if(record){
    while(record){
      matched.unshift(record)
      record = record.parent //通过当前记录找到所有的父亲
    }
  }
  return {
    ...location,
    matched
  }
}
export default class History{
  constructor(router){
    this.router = router

    // 这个代表的是当前路径匹配出来的记录
    this.current = createRoute(null,{
      path:'/'
    })
  }
  transitionTo(location,complete){
    let current = this.router.match(location)

    // 防止重复点击，不需要再次渲染
    // 匹配到的个数和路径都是相同的，就不需要再次跳转了
    if(this.current.path == location && current.matched.length === this.current.matched.length){
      return
    }
    // 用最新的匹配到的结果，去更新视图
    this.current =current  //这个current只是响应式的，他的变化不会更新_route
    this.cb && this.cb(current)
   
    complete && complete()
  }
  listen(cb){
    this.cb = cb
  }
}
