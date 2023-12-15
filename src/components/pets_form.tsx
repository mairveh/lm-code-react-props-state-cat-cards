import { useState } from "react";
import Pet from "../data/pet";

interface PetsFormProps {
  addPet: (newPet: Pet) => void;
}

const PetsForm: React.FC<PetsFormProps> = ({addPet}) => {
  const [formData, setFormData] = useState({
    name: "",
    species: "",
    favFoods: "",
    birthYear: "",
    type: "",
  });

  const handleClick = () => {
    if (formData.type === "CAT") {
      const newCat: Pet = {
        name: formData.name,
        species: formData.species,
        favFoods: formData.favFoods.split(" "),
        birthYear: Number(formData.birthYear),
        type: "CAT",
      };
      console.log(newCat)
      addPet(newCat);
    } else if (formData.type === "DOG") {
      const newDog: Pet = {
        name: formData.name,
        species: formData.species,
        favFoods: formData.favFoods.split(" "),
        birthYear: Number(formData.birthYear),
        type: "DOG",
      };
      console.log(newDog)
      addPet(newDog);
    }
    console.log(formData)
    setFormData({ ...formData });
  };

  return (
    <form>
      <h2>Add a new pet</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={(event) =>
            setFormData({ ...formData, name: event.target.value })
          }
        ></input>
      </label>
      <br />
      <label>
        Species:
        <input
          type="text"
          id="species"
          name="species"
          value={formData.species}
          onChange={(event) =>
            setFormData({ ...formData, species: event.target.value })
          }
        ></input>
      </label>
      <br />
      <label>
        Favourite Food:
        <input
          type="text"
          name="favfood"
          value={formData.favFoods}
          onChange={(event) =>
            setFormData({ ...formData, favFoods: event.target.value })
          }
        ></input>
      </label>
      <br />
      <label>
        Birth Year:
        <input
          type="text"
          name="birthyear"
          value={formData.birthYear}
          onChange={(event) =>
            setFormData({ ...formData, birthYear: event.target.value })
          }
        ></input>
      </label>
      <br />
      <select name="pettypeselect" onChange={(event) => setFormData({ ...formData, type: event.target.value })}>
        <option>Choose the pet type</option>
        <option value="CAT">Cat</option>
        <option value="DOG">Dog</option>
      </select>
      <button
        name="formbutton"
        type="button"
        onClick={(event) => handleClick()}
      >
        Submit
      </button>
    </form>
  );
};

export default PetsForm;
