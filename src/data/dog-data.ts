import Pet from './pet';
import {v4 as uuidv4} from 'uuid';

const dogData: Array<Pet> = [
	{
		name: 'Floofus',
		species: 'Puppy',
		favFoods: ['marshmallows'],
		birthYear: 2020,
	},
	{
		name: 'Doofus',
		species: 'Doggo',
		favFoods: ['porridge, dog food'],
		birthYear: 2010,
	},
	{
		name: 'Goofus',
		species: 'Dog',
		favFoods: ['bouncy balls'],
		birthYear: 2015,
	},
];

dogData.forEach(dog => { dog.id = uuidv4(); dog.type="DOG" })
console.log("dogData: ", dogData); // each cat should now have a unique ID
export default dogData