import { useState } from "react";
import catData from "../data/cat-data";
import dogData from "../data/dog-data";
import Cat from "../data/cat";
import Dog from "../data/dog";

const PetsForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    species: "",
    favFoods: "",
    birthYear: "",
    type: "",
  });

  const handleSubmit = () => {
    if (formData.type === "cat") {
      const newCat: Cat = {
        name: formData.name,
        species: formData.species,
        favFoods: formData.favFoods.split(" "),
        birthYear: Number(formData.birthYear),
      };
      [...catData].push(newCat);
    } else if (formData.type === "dog") {
      const newDog: Dog = {
        name: formData.name,
        species: formData.species,
        favFoods: formData.favFoods.split(" "),
        birthYear: Number(formData.birthYear),
      };
      [...dogData].push(newDog);
    }
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
      <select name="pettypeselect">
        <option>Choose the pet type</option>
        <option value="cat">Cat</option>
        <option value="dog">Dog</option>
      </select>
      <button name="formbutton" type="button" onSubmit={(event) => handleSubmit()}>
        Submit
      </button>
    </form>
  );
};

export default PetsForm;
