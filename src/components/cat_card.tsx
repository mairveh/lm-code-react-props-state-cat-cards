import Cat from "../data/cat";
import CatImage from "./cat_image";
import cat1 from "../assets/images/cat1.jpg";
import cat2 from '../assets/images/cat2.jpg';
import cat3 from '../assets/images/cat3.jpg';
import cat4 from '../assets/images/cat4.jpg';
import cat5 from '../assets/images/cat5.jpg';
import cat6 from '../assets/images/cat6.jpg';
import cat7 from '../assets/images/cat7.jpg';
import cat8 from '../assets/images/cat8.jpg';
import cat9 from '../assets/images/cat9.jpg';
import cat10 from '../assets/images/cat10.jpg';
import cat11 from '../assets/images/cat11.jpg';
import cat12 from '../assets/images/cat12.jpg';

interface CatCardProps {
  name: string;
  species: string;
  favFoods: Array<string>;
  birthYear: number;
}

const CatCard: React.FC<CatCardProps> = ({name, species, favFoods, birthYear}) => (
  <div className="card">
    <h3 className="card__text car__header">{name}</h3>
    <p className="card__text">Species: {species}</p>
    <p className="card__text">Favourite Food: {favFoods}</p>
    <p className="card__text">Birth Year: {birthYear}</p>
  </div>
);

export default CatCard;
