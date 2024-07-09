import "./css/ItemCard.css";

export default function ItemCard ({color,name,value,id}) {
    return(
        <div className="item-card">
            {color === 'joker' ? (
                <div className="joker" style={{backgroundColor : "black" }}>
                    {name === 'color' ? (
                        <div className="colors">
                            <div className="red"></div>
                            <div className="green"></div>
                            <div className="blue"></div>
                            <div className="yellow"></div>
                        </div>
                    ) : (
                        <div className="chiffre">
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