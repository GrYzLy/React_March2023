import React, {Component} from 'react'
import Profile from './Profile'
class FetchApi extends Component {
    constructor () {
        super()
        
        this.state = {
            data : null
        }
    }
lodaProfile()
{
    fetch('http://localhost:39635/Profile')
    .then(response => response.json())
    .then(data => this.setState({data : data}, () => console.log(this.state.data)))


}

componentDidMount()
{
    this.lodaProfile()
}

render() {
    return (
        <div>
            <h1>Profile</h1>
            
            {this.state.data && this.state.data.map((profile) => <Profile user={profile} />)}
            
        </div>
    )
}
}


export default FetchApi;
