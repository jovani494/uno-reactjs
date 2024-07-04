import { useState } from "react";
import axios from "axios";

export default function AddCard(){
    const [cardName, setCardName] = useState('');
    const [cardColor, setCardColor] = useState('');
    const [cardValue, setCardValue] = useState(0);
    const [loading, setLoading] = useState(false);

    const handleCreateCard = async () => {
        try {
          setLoading(true);
          const response = await axios.post('https://uno-spring-boot.onrender.com/api/cards/create', {
            name: cardName,
            color: cardColor,
            value : cardValue
          });
          console.log('Carte créée avec succès:', response.data);
          setCardName('');
          setCardColor('');
          setCardValue(0);
        } catch (error) {
          console.error('Erreur lors de la création de la carte:', error);
        } finally {
          setLoading(false);
        }
      };

    return(
        <div className="add-card">
            <h2>Créer une nouvelle carte</h2>
            <div>
                <label>Nom de la carte : </label>
                <input
                    type="text"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                />
            </div>
            <div>
                <label>Couleur de la carte : </label>
                <input
                    type="text"
                    value={cardColor}
                    onChange={(e) => setCardColor(e.target.value)}
                />
            </div>
            <div>
                <label>Valeur de la carte : </label>
                <input
                    type="number"
                    value={cardValue}
                    onChange={(e) => setCardValue(e.target.value)}
                />
            </div>
            <button onClick={handleCreateCard} disabled={loading}>
                {loading ? 'Chargement...' : 'Créer'}
            </button>
        </div>
    )
}