// CODE here for your Lambda Classes


class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
  }
  speak () {
    let result = `Hello my name is ${this.name}, I am from ${this.location}`;
    console.log(result);
    return result;
  }
}

class Instructor extends Person {
  constructor(attributes) {
    super(attributes);
    this.specialty = attributes.specialty;
    this.favLanguage = attributes.favLanguage;
    this.catchPhrase = attributes.catchPhrase;
  }
  demo (subject) {
    let result = `Today we are learning about ${subject}`;
    console.log(result);
    return result;
  }
  grade (student, subject) {
    let result = `${student.name} receives a perfect score on ${subject}`; 
    console.log(result);
    return result;
  }
}

class Student extends Person {
  constructor(attributes) {
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;
  }
  listsSubjects () {
    this.favSubjects.forEach(e => console.log(e));
    return this.favSubjects;
  }
  PRAssignment (subject) {
    let result = `${this.name} has submitted a PR for ${subject}`;
    console.log(result);
    return result;
  }
  sprintChallenge (subject) {
    let result = `${this.name} has begun sprint challenge on ${subject}`;
    console.log(result);
    return result;
  }
}

class PM extends Instructor {
  constructor(attributes) {
    super(attributes);
    this.gradClassName = attributes.gradClassName;
    this.favInstructor = attributes.favInstructor;
  }
  standUp (channel) {
    let result = `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    console.log(result);
    return result;
  }
  debugsCode (student, subject) {
    let result = `${this.name} debugs ${student.name}'s code on ${subject}`;
    console.log(result);
    return result;
  }
}


const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const carolie = new Instructor({
  name: 'Carolie',
  location: 'Winfield',
  age: 59,
  gender: 'female',
  favLanguage: 'C#',
  specialty: 'Back-end',
  catchPhrase: `let's go`
});


const will = new Student({
  name: 'Will',
  location: 'Hutchinson',
  age: 33,
  gender: 'male',
  previousBackground: 'Actuary',
  className: 'FSW',
  favSubjects: ['JS', 'Python']
});

const joe = new Student({
  name: 'Joe',
  location: 'Wichita',
  age: 21,
  gender: 'male',
  previousBackground: 'Personal Trainer',
  className: 'iOS',
  favSubjects: ['Swift', 'Objective-C']
});

const mike = new PM({
  name: 'Mike',
  location: 'Kansas City',
  age: 24,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `yoyoyo`,
  gradClassName: 'Android',
  favInstructor: 'Cam'
});

const robbie = new PM({
  name: 'Robbie',
  location: 'Lenexa',
  age: 32,
  gender: 'male',
  favLanguage: 'Python',
  specialty: 'Back-end',
  catchPhrase: `waddup`,
  gradClassName: 'JS',
  favInstructor: 'Joey'
});


//instructor tests
console.log('********Instructors********');

console.log('********Fred********');
fred.speak();
fred.demo('JS');
fred.grade(will, 'HTML');
Object.entries(fred).forEach(e => console.log(e));

console.log('********Carolie********');
carolie.speak();
carolie.demo('JS-II');
carolie.grade(joe, 'CSS');
Object.entries(carolie).forEach(e => console.log(e));


//student tests
console.log('********Students********');

console.log('********Will********');
will.speak();
will.listsSubjects();
will.PRAssignment('JS-IV');
will.sprintChallenge('JS');
Object.entries(will).forEach(e => console.log(e));

console.log('********Joe********');
joe.speak();
joe.listsSubjects();
joe.PRAssignment('JS-III');
joe.sprintChallenge('Advanced CSS');
Object.entries(joe).forEach(e => console.log(e));


//PM tests
console.log(`********PM's********`);

console.log('********Mike********');
mike.speak();
mike.demo('JS');
mike.grade(will, 'HTML');
mike.standUp('#webpt4');
mike.debugsCode(will, 'TypeScript');
Object.entries(mike).forEach(e => console.log(e));


console.log('********Robbie********');
robbie.speak();
robbie.demo('C');
robbie.grade(joe, 'CSS');
robbie.standUp('#general');
robbie.debugsCode(joe, 'Python');
Object.entries(robbie).forEach(e => console.log(e));