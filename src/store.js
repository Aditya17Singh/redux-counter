import { createStore } from "redux";
import rootReaducer from "./reducers";

const store = createStore(
    rootReaducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    
    console.log(store)
export default store;
