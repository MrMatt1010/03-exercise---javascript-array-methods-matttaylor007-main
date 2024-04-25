// TODO: Refactor this function using the map() method to return an array of objects which have only the `id` and `temperament` properties
const getDogsTemperaments = (dogs) => {
  return dogs.map((dog) => ({ id: dog.id, temperament: dog.temperament }));
};

// TODO: Refactor this function using the filter() method to return an array of objects of dogs which are older than the supplied minAge
const getOldDogs = (dogs, minAge) => {
  return dogs.filter((dog) => dog.age >= minAge);
};

// TODO: Refactor this function using the find() method to return a dog object which has the supplied temperament
const getADogByTemperament = (dogs, temperament) => {
  return dogs.find((dog) => dog.temperament.includes(temperament));
};

// TODO: Refactor this function using the filter() method to return an array of objects of dogs which have "Trainable" temperament
const getDogsByTemperament = (dogs, temperament) => {
  return dogs.filter((dog) => dog.temperament.includes(temperament));
};

// TODO: Refactor this function using the reduce() method to calculate the average age of the dogs in the array
const getDogsAverageAge = (dogs) => {
  const numberOfDogs = dogs.length;
  const totalAge = dogs.reduce((acc, dog) => acc + dog.age, 0);
  return totalAge / numberOfDogs;
};

module.exports = {
  getDogsTemperaments,
  getOldDogs,
  getADogByTemperament,
  getDogsByTemperament,
  getDogsAverageAge,
};
