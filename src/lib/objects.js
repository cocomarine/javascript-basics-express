const createPerson = (name, age) => {
  return {
    name: name, 
    age: age,
  }
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return Object.hasOwn(object, property);
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  return people.map (x => x.age);
};

const findByName = (name, people) => {
  return people.find(x => x.name === name);
};

const findHondas = cars => {
  return cars.filter(x => x.manufacturer == 'Honda');
};

const averageAge = people => {
  const totalAge = people.reduce((prevAge, curr) => prevAge + curr.age, 0);
  return totalAge / people.length;
};

const createTalkingPerson = (name, age) => {
  return {
    name: name,
    age: age,
    introduce: otherPersonsName => {
      return `Hi ${otherPersonsName}, my name is ${name} and I am ${age}!`;
    }
  };
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
