import React from "react";
import {connect} from "react-redux"
import {addGun, removeGun, syncGun} from "./index.redux";
@connect((state) => {
    return {num: state}
}, {addGun, removeGun, syncGun})
class App extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.addGun}>add</button>
                <button onClick={this.props.removeGun}>remove</button>
                <button onClick={this.props.syncGun}>syncAdd</button>
                <br/>
                现在有机枪{this.props.num}把
            </div>
        )
    }
}


export default App;