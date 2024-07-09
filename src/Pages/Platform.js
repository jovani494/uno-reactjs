import { Component, useContext } from 'react';
import AuthContext from '../Context/AuthContext';

export default class Platform extends Component{
    state = {
        platform : [
            players = [],
            gameCardColor = "",
            gameCardName = "",
            gameCardValue = Null
        ],
        user : useContext(AuthContext)
    }
    
    render(){
        return(
            <div className="platform">

            </div>
        )
    }
}