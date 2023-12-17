import React, {Component} from 'react'

class Lifecycle extends Component {
    constructor () {
        super()

        this.title = "Title from var"

        this.state = {
            cycle : 0
        }

        console.log("Constructor")
        console.log("Cycle: " + this.state.cycle)
    }

componentDidMount() {
    console.log("ComponentDidMount")
    this.title = "New title from did mount"
    console.log(this.title)
    setInterval( () => this.setState({cycle : this.state.cycle + 1}), 1000)
}

componentDidUpdate(prevProps, prevState)
{
    console.log("ComponentDidUpdate")
    console.log("Cycle:" + this.state.cycle)

    console.log("prevProp: ", prevProps)
    console.log("prevState: ", prevState)
}

componentWillUnmount()
{
    console.log("componentWillUnmount")
}
render() {
    console.log("Render")
    return (
        <div>
            <h1>{this.title}</h1>
            Cycle: {this.state.cycle}
        </div>
    )
}
}


export default Lifecycle;
