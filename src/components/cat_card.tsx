import Cat from "../data/cat";

interface CatCardProps {
  catObject: Cat;
}

const CatCard: React.FC<CatCardProps> = ({ catObject }) => (
  <div className="card">
    <h3 className="card__text car__header">{catObject.name}</h3>
    <p className="card__text">Species: {catObject.species}</p>
    <p className="card__text">Favourite Food: {catObject.favFoods}</p>
    <p className="card__text">Birth Year: {catObject.birthYear}</p>
  </div>
);

export default CatCard;
