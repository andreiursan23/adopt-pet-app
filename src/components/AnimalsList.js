import { Link } from "@reach/router";

const AnimalsList = ({displayedPetsList}) => {
    if (displayedPetsList.length === 0) {
        return <div className="search">No Pets Found</div>
    }

    return (
        <div className="search">
            {displayedPetsList.map((pet, index) => (
                <div key={index} >
                    <Link to={`details/${pet.id}`}>
                        <div className="image-container">
                            <img src={pet.photos.length ? pet.photos[0].small : ''} alt="" />
                        </div>

                        <div className="info">
                            <p>{pet.name} - {pet.breeds.primary} - {pet.contact.address.city} - {pet.contact.address.state}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default AnimalsList;