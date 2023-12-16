import React, {Component} from 'react'

class LoginForm extends Component {
    constructor () {
        super()
        

        this.state = {
            username : "",
            password : "",
            passwordConfirmation : "",
            email : "",
            errors : []
        }
    }

    validateNotEmpty(field, value)
    {
        console.log(value.length)
        if(value.length <= 0) {
            return `${field} must be filled out`
        }
    }

checkErrorExist(errors, error)
{
    return errors.includes(error)
}

validateUsernameOnBlur(event)
    {
        console.log(event)
        const username = event.target.value
        const errors = this.state.errors

        var validate_result = this.validateNotEmpty("Username", username)
        if(validate_result)
        {
            this.setState({username : ""})
            if(!this.checkErrorExist(errors, validate_result))
            {
                errors.push(validate_result)
            }
        }
        else{
            this.setState({username, errors})
        }

        console.log(this.state)

    }


displayErrors()
{
    return (
        <div>
            {this.state.errors.map((err, index) => <p key={index}>{err}</p>)}
        </div>
    )
}

setValues()
{
    console.log(this)
    
    this.setState({username: "Bartosz"})
}

render() {
    return (
        <div>
            <h1>LoginForm!</h1>
            Username: <input type="text" onBlur={this.validateUsernameOnBlur.bind(this)}/><br />
            Password: <input type="text" /><br />
            Password confirmation: <input type="text" /><br />
            EMail: <input type="text" />
            <button onClick={() => this.setValues()}>Submit</button>
            <br />
            {this.displayErrors()}
        </div>
    )
}
}


export default LoginForm;
