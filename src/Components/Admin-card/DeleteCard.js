export default function DeleteCard({cardId}){
    const handleDelete = (id) => {
        fetch(`https://uno-spring-boot.onrender.com/api/cards/${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                // Supprimez la carte de l'état local
                
            } else {
                console.error('Failed to delete the card');
            }
        })
        .catch(error => console.error('Error deleting card:', error));
    };

    return(
        <div>
            <button onClick={()=>handleDelete(cardId)}>Supprimer</button>
        </div>
    )
}