export default {
  name: "router-view",
  functional: true,//函数式组件,函数不用new,没有this,没有生命周期
  render(h, { parent, data }) {
    //this.$route有matched属性，这个属性有几个就依次的将他赋予到对应的router-view上
    //parent是当前父组件
    //data是这个组件上的一些标识
    let route = parent.$route;
    let depth = 0;
    data.routerView = true;//标识路由属性

    console.log(parent)
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++
      }
      parent = parent.$parent
    }
    let record = route.matched[depth]
    console.log(route.matched)
    if (!record) {
      return h()
    }
    return h(record.component, data)
  }
}
