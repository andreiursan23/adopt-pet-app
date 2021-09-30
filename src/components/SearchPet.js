import axios from "axios";
import {useState, useEffect} from "react";
import AnimalsList from "./AnimalsList";

const SearchPet = () => {
    const animals = ['bird', 'cat', 'dog', 'horse', 'rabbit'];

    const [location, setLocation] = useState('Seattle, WA');
    const [animal, setAnimal] = useState(animals[0]);
    const [breed, setBreed] = useState('');
    const [breeds, setBreeds] = useState([]);
    const [displayedPetsList, setDisplayedPetsList] = useState([]);

    useEffect(() => {
        axios
            .get(`http://pets.dev-apis.com/types/${animal}/breeds`)
            .then((response) => {
                setBreeds(response.data.breeds)
                console.log(response.data);
            })
            .catch(error => console.log(error))
    }, [animal])

    const displaySearchedPet = (e) => {
        e.preventDefault();

        axios
            .get(`http://pets.dev-apis.com/animals?location=${location},+WA&breed=${breed}&type=${animal}`)
            .then((response) => {
                setDisplayedPetsList(response.data.animals);
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="search-params">
            <form>
                <label>Location</label>
                <input type="text" name="location" onChange={e => setLocation(e.target.value)} />

                <label>Animal</label>
                <select name="animal" onChange={e => setAnimal(e.target.value)}>
                    {animals.map((animal, index) => (
                        <option key={index} value={animal}>{animal}</option>
                    ))}
                </select>

                <label>Breed</label>
                <select name="breed" onChange={e => setBreed(e.target.value)}>
                    {breeds.map((breed, index) => (
                        <option key={index} value={breed.name}>{breed.name}</option>
                    ))}
                </select>

                <button onClick={displaySearchedPet}>Search</button>
            </form>

            <AnimalsList displayedPetsList={displayedPetsList}/>
        </div>
    )
}

export default SearchPet;