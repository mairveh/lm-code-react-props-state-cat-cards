import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import { useState } from "react";
import Cat from "./data/cat";
import CatCard from "./components/animals_card";
import CatImage from "./components/cat_image";
import catData from "./data/cat-data";
import dogData from "./data/dog-data";
import AnimalsCard from "./components/animals_card";
import Dog from "./data/dog";
import PetsForm from "./components/pets_form";

function App(): JSX.Element {
  const [cats, setCats] = useState<Array<Cat>>(catData);
  const [dogs, setDogs] = useState<Array<Dog>>(dogData);
  const [textInput, setTextInput] = useState<string>("");

  return (
    <>
      <Navbar />
      <Header numberOfCats={cats.length} numberOfDogs={dogs.length} />

      <main>
        <div className="cards__wrapper">
          {cats.map((cat, index) => (
            <AnimalsCard
              key={cat.id}
              name={cat.name}
              species={cat.species}
              favFoods={cat.favFoods}
              birthYear={cat.birthYear}
              index={index}
              type="cat"
            />
          ))}
        </div>
        <div className="cards__wrapper">
          {dogs.map((dog, index) => (
            <AnimalsCard
              key={dog.id}
              name={dog.name}
              species={dog.species}
              favFoods={dog.favFoods}
              birthYear={dog.birthYear}
              index={index}
              type="dog"
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
