import { Component } from "react";
import ListCard from "../Components/Admin-card/ListCard";
import AddCard from "../Components/Admin-card/AddCard";
import "./css/AdminCard.css";

export default class AdminCard extends Component{
    state = {
        cards : [],
        loading : true,
        error : null
    }

    async componentDidMount() {
        fetch('https://uno-spring-boot.onrender.com/api/cards')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => this.setState({ cards: data, loading: false }))
            .catch(error => this.setState({ error, loading: false }));
    }

    render(){
        return(
            <div className="admin-card">
                <AddCard />
                <ListCard cards={this.state.cards} loading={this.state.loading} error={this.state.error}/>
            </div>
        )
    }
}