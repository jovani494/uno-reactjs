import "./css/ItemCard.css";

export default function ItemCard ({color,name,value}) {
    return(
        <div className="item-card">
            {color === 'joker' ? (
                <div className="joker" style={{backgroundColor : "black" }}>
                    {name === 'color' ? (
                        <div></div>
                    ) : (
                        <div>
                            <p className="card-top">{name}</p>
                            <p className="card-center">{name}</p>
                            <p className="card-bottom">{name}</p>
                        </div>
                    )}
                </div>
            ) : (
                <div className="color" style={{backgroundColor : color}}>
                    <p className="card-top">{name}</p>
                    <p className="card-center">{name}</p>
                    <p className="card-bottom">{name}</p>
                </div>
            )}
        </div>
    )
}