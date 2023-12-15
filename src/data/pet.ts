const PET_KINDS = ['CAT', 'DOG'] as const;
type PetKind = typeof PET_KINDS[number];

export default interface Pet {
  id?: string;
  name: string;
  species: string;
  favFoods: Array<string>;
  birthYear: number;
  type?: PetKind;
}
