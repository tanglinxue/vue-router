export default {
  name: "router-view",
  render() {
    //this.$route有matched属性，这个属性有几个就依次的将他赋予到对应的router-view上
    return <a>{this.$slots.default}</a>
  }
}
