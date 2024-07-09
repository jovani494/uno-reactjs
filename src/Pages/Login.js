import {Component} from 'react';

export default class Login extends Component{
    constructor(props) {

        super(props);
    
         this.state = {
            player : {
                username : '',
                password : ''
            }
      }
    }

    setUsername = (value)=>{
        this.setState(prevState => ({
            player: {
                ...prevState.player,
                username: value.target.value
            }
        }));

    }

    setPassword = (value)=>{
        this.setState(prevState => ({
            player: {
                ...prevState.player,
                password: value.target.value
            }
        }));

    }

    seConnecter = ()=>{
        console.log(this.state.player.username +" "+ this.state.player.password)
    }

    render(){
        return(
            <div className='login'>
                <div className='form'>
                    <div className='username'>
                        <input type="text" name='username' onInput={ this.setUsername }/>
                    </div>

                    <div className='password'>
                        <input type="password" name="password" onInput={ this.setPassword } />
                    </div>

                    <div className='btn-validate'>
                        <button onClick={ ()=>this.seConnecter() }>Se Connecter</button>
                    </div>
                </div> 
            </div>
        )
    }
}