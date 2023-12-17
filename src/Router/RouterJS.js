import React, {Component} from 'react'

class RouterJS extends Component {
    constructor () {
        super()
        
    }


render() {
    console.log(window.location)
    return (
        <div>
            <h1>RouterJS</h1>
            {window.location.href}<br/>
            {window.location.pathname}
        </div>
    )
}
}


export default RouterJS;
