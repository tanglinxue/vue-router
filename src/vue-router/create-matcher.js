import createRouteMap from './create-route-map'
export default function createMatcher(routes){
  // pathList会把所有的路由，组成一个数组['/','/about','about/a']
  // pathMap {/:{},/about:{}}
  let {pathList,pathMap} = createRouteMap(routes)

  console.log(pathList,pathMap)
  function addRoutes(routes){//routes动态添加的路径
    createRouteMap(routes,pathList,pathMap)
  }
  function match(){

  }
  return{
    addRoutes,
    match
  }
}
