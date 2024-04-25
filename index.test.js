const {
  getDogsTemperaments,
  getOldDogs,
  getADogByTemperament,
  getDogsByTemperament,
  getDogsAverageAge,
} = require("./");

const dogs = [
  {
    id: 1,
    name: "Poodle",
    age: 5,
    temperament: ["Intelligent", "Active", "Alert", "Faithful", "Trainable"],
  },
  {
    id: 2,
    age: 8,
    name: "Bernese Mountain Dog",
    temperament: ["Affectionate", "Intelligent", "Loyal", "Faithful"],
  },
  {
    id: 3,
    age: 10,
    name: "Labrador Retriever",
    temperament: ["Intelligent", "Even Tempered"],
  },
];

describe("JavaScipt Array Methods", () => {
  test("getDogsTemperaments returns an array of object with two properties", () => {
    const result = getDogsTemperaments(dogs);
    const expected = [
      {
        id: 1,
        temperament: [
          "Intelligent",
          "Active",
          "Alert",
          "Faithful",
          "Trainable",
        ],
      },
      {
        id: 2,
        temperament: ["Affectionate", "Intelligent", "Loyal", "Faithful"],
      },
      {
        id: 3,
        temperament: ["Intelligent", "Even Tempered"],
      },
    ];
    expect(result).toEqual(expected);
  });

  test("getOldDogs returns an array of old dogs", () => {
    const age = 7;
    const result = getOldDogs(dogs, age);
    const expected = [
      {
        id: 2,
        age: 8,
        name: "Bernese Mountain Dog",
        temperament: ["Affectionate", "Intelligent", "Loyal", "Faithful"],
      },
      {
        id: 3,
        age: 10,
        name: "Labrador Retriever",
        temperament: ["Intelligent", "Even Tempered"],
      },
    ];
    expect(result).toEqual(expected);
  });

  test("getADogByTemperament returns a loyal dog", () => {
    const temperament = "Loyal";
    const result = getADogByTemperament(dogs, temperament);
    const expected = {
      id: 2,
      age: 8,
      name: "Bernese Mountain Dog",
      temperament: ["Affectionate", "Intelligent", "Loyal", "Faithful"],
    };
    expect(result).toEqual(expected);
  });

  test("getDogsByTemperament returns an array of trainable dogs", () => {
    const temperament = "Trainable";
    const result = getDogsByTemperament(dogs, temperament);
    const expected = [
      {
        id: 1,
        name: "Poodle",
        age: 5,
        temperament: [
          "Intelligent",
          "Active",
          "Alert",
          "Faithful",
          "Trainable",
        ],
      },
    ];
    expect(result).toEqual(expected);
  });

  test("getDogsAverageAge returns the correct number", () => {
    const result = getDogsAverageAge(dogs);
    expect(result).toBe(23 / 3);
  });
});
