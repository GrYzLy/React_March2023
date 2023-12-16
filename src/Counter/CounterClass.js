import React, {Component} from 'react'

class CounterClass extends Component {
    constructor () {
        super()
        this.counter = 0

        this.state = {
            clickCounter : 0
        }
    }


incrementThisCounter()
{
    console.log(this.counter)
    this.setState({clickCounter : this.state.clickCounter + 1})
    this.counter = this.counter +  1
    console.log(this.counter)
}

render() {
    return (
        <div>
            <h1>Counter: {this.state.clickCounter}</h1>
            <button onClick={() => this.incrementThisCounter()}>+1</button>
        </div>
    )
}
}


export default CounterClass;
