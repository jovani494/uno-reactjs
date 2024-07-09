import "./css/ListCard.css";
import ItemCard from './ItemCard';
import DeleteCard from "./DeleteCard";

export default function ListCard({ cards, loading, error }) {
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
                            <ItemCard color={card.color} name={card.name} value={card.value} id={card.id} />
                            <DeleteCard cardId={cards.id} />
                        </div>
                    ))
                }
            </div>
        )
}