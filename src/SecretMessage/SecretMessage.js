import React, {Component} from 'react'
import SecretMessageText from './SecretMessageText'

class SecretMessage extends Component {
    constructor () {
        super()
        

        this.state = {
            showSecret : false
        }
    }

secretMessage()
{
     return <p>I'm secret message!</p>
}

togleSecretMessage()
{
    this.setState({showSecret : !this.state.showSecret})
}

render() {
    return (
        <div>
            <h1>Secret Message</h1>
            
            {/* {this.state.showSecret ?this.secretMessage() : null} */}
            
            {/* {this.state.showSecret && this.secretMessage()} */}
            {this.state.showSecret && <SecretMessageText />}


            <button onClick={this.togleSecretMessage.bind(this)}>Show/Hide</button>
        </div>
    )
}
}


export default SecretMessage;
