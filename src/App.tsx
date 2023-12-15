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
import AnimalsCard from "./components/pets-card";
import PetsForm from "./components/pets_form";

function App(): JSX.Element {
  const [pets, setPets] = useState<Array<Pet>>([...catData, ...dogData]);
  const [textInput, setTextInput] = useState<string>("");

  return (
    <>
      <Navbar />
      <Header numberOfCats={pets.filter(p => p.type === "CAT").length} numberOfDogs={pets.filter(p => p.type === "DOG").length}  />
      <main>
        <div className="cards__wrapper">
          {pets.map((pet, index) => (
            <AnimalsCard
              key={pet.id}
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

      <PetsForm />
      <Footer />
    </>
  );
}

export default App;
