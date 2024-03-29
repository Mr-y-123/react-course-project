
const enhancers=storeAPI => next => action => {
    // Do something in here, when each action is dispatched
    console.log("Hiii");
    return next(action)
  }
export default enhancers