import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import { useState } from "react";
import Pet from "./data/pet";
import PetCard from "./components/pets-card";
import CatImage from "./components/cat_image";
import catData from "./data/cat-data";
import dogData from "./data/dog-data";
import PetsCard from "./components/pets-card";
import PetsForm from "./components/pets_form";

function App(): JSX.Element {
  const [pets, setPets] = useState<Array<Pet>>([...catData, ...dogData]);
  const addPet = (newPet: Pet) => setPets([...pets, newPet]);

  return (
    <>
      <Navbar />
      <Header
        numberOfCats={pets.filter((p) => p.type === "CAT").length}
        numberOfDogs={pets.filter((p) => p.type === "DOG").length}
      />
      <main>
        <div className="cards__wrapper">
          {pets.map((pet, index) => (
            <PetsCard
              id={pet.id}
              name={pet.name}
              species={pet.species}
              favFoods={pet.favFoods}
              birthYear={pet.birthYear}
              index={index}
              type="cat"
            />
          ))}
        </div>
      </main>

      <PetsForm addPet={addPet} />
      <Footer />
    </>
  );
}

export default App;
