import {Component} from 'react';
import "./css/ListCard.css";

import ItemCard from './ItemCard';

export default class ListCard extends Component{
    state = {
        cards : [], 
        loading : true,
        error : null
    }

    async componentDidMount() {
        fetch('http://localhost:8080/api/cards')
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
        const { cards, loading, error } = this.state;

        if (loading) {
            return (
                <div className="loading-bar">
                    <div className="bar"></div>
                </div>
                )
        }
        if (error) {
            return <div>Error: {error.message}</div>;
        }

        return(
            <div className='list-card'>
                {
                    cards.map(card => (
                        <div key={card.id} className='cards'>
                            <ItemCard color={card.color} name={card.name} value={card.value}/>
                        </div>
                    ))
                }
            </div>
        )
    }
}