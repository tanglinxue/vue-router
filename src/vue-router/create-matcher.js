import createRouteMap from './create-route-map'
import { createRoute } from './history/base'
export default function createMatcher(routes){
  // pathList会把所有的路由，组成一个数组['/','/about','about/a']
  // pathMap {/:{},/about:{}}
  let {pathList,pathMap} = createRouteMap(routes)
  function addRoutes(routes){//routes动态添加的路径
    createRouteMap(routes,pathList,pathMap)
  }
  function match(location){
    let record = pathMap[location] //获取对应的记录
    return createRoute(record,{
      path:location
    })
  }
  return{
    addRoutes,
    match
  }
}
