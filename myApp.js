require("dotenv").config();
const mongoose = require("mongoose");

// connect to database
mongoose.connect(
  process.env.MONGO_URI
  //, {
  //useNewUrlParser: true,
  //useUnifiedTopology: true,
  //}
);

// create new Schema
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFoods: [String],
});

// create new Model
let Person = mongoose.model("Person", personSchema);

const createAndSavePerson = (done) => {
  const betty = new Person({
    name: "Betty",
    age: 73,
    favoriteFoods: ["sushi", "cherry pie", "hazelnuts"],
  });
  betty.save(function (err, data) {
    if (err) return console.error(err);
    done(null, data);
  });
};

const arrayOfPeople = [
  { name: "Buddy", age: 3, favoriteFoods: ["pears", "carrots"] },
  { name: "Spot", age: 23, favoriteFoods: ["salmon", "huckleberries"] },
  { name: "Sunshine", age: 121, favoriteFoods: ["seaweed", "french fries"] },
];
const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function (err, data) {
    if (err) return console.error(err);
    done(null, data);
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, function (err, data) {
    if (err) return console.error(err);
    done(null, data);
  });
};

const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, function (err, data) {
    if (err) return console.error(err);
    done(null, data);
  });
};

const findPersonById = (personId, done) => {
  Person.findById({ _id: personId }, function (err, data) {
    if (err) return console.error(err);
    done(null, data);
  });
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  //`findById` method returns `err` or `person` which is passed to callback function
  Person.findById(personId, (err, person) => {
    if (err) return console.error(err);
    person.favoriteFoods.push(foodToAdd);
    //`save` method takes callback function w/ 2 params, `updatedPerson` is object returned by `person.favoriteFoods.push()`
    person.save((err, updatedPerson) => {
      if (err) return console.log(err);
      done(null, updatedPerson); //`null` as 1st arg (indicating no error), `updatedPerson` as 2nd arg represents person object w/ newly added favorite food
    });
  });
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
