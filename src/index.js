import React from "react";
import ReactDom from "react-dom";
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk"
import {Provider} from "react-redux"
import App from "./app"
import {counter} from "./index.redux";

const devToolsExtension = window.devToolsExtension ? window.devToolsExtension() : f => f;
const store = createStore(counter,
    compose(
        applyMiddleware(thunk),
        devToolsExtension
    ));

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.querySelector("#root"))


// import

// function listener() {
//     const current = store.getState()
//     console.log(current)
// }
// store.subscribe(listener)
// store.dispatch({type:'add'})
// store.dispatch({type:'add'})
// store.dispatch({type:'add'})
// store.dispatch({type:'remove'})








