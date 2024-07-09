import { Component } from "react";

export default class SignIn extends Component {
    state = {
        user : {
            nom : null,
            prenom : null,
            username : null,
            password : null
        }
    }

    setNom = (event) =>{
        this.setState( (previous) =>({
            user : {
                ...previous.user,
                nom : event.target.value
            }
        }))
    }

    setPrenom = (event) =>{
        this.setState( (previous) =>({
            user : {
                ...previous.user,
                prenom : event.target.value
            }
        }))
    }

    setUsername = (event) =>{
        this.setState( (previous) =>({
            user : {
                ...previous.user,
                username : event.target.value
            }
        }))
    }

    setPassword = (event) =>{
        this.setState( (previous) =>({
            user : {
                ...previous.user,
                password : event.target.value
            }
        }))
    }

    signin = () => {
        console.log(this.state)
    }

    render(){
        return(
            <div className="singnin">
                <div className="from-singnin">
                    <div className="nom">
                        <input type="text" className="nom-user" required name="nom" onChange={ this.setNom } />
                    </div>
                    <div className="prenom">
                        <input type="text" className="prenom-user" name="prenom" onChange={ this.setPrenom } />
                    </div>
                    <div className="username">
                        <input type="text" className="username-user" required name="username" onChange={ this.setUsername }/>
                    </div>
                    <div className="password">
                        <input type="password" className="password-user" required name="password" onChange={ this.setPassword }/>
                    </div>
                    <div className="validate">
                        <input type="submit" onClick={this.signin} value="S'enregistrer" />
                    </div>
                </div>
            </div>
        )
    }
}