export default class History{
  constructor(router){
    this.router = router
  }
  transitionTo(location,complete){
    console.log(location)
    complete && complete()
  }
}
