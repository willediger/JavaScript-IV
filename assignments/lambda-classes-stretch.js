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
  changeGrade(student) {
    //randomly assign a grade change from -40 to +60 (so it's more likely they'll incrase their grades than to decrease their grades)
    let gradeChange = Math.round(Math.random()*100) - 40;

    //applying the grade change
    student.grade += gradeChange;
    return gradeChange;
  }
}

class Student extends Person {
  constructor(attributes) {
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;
    this.grade = attributes.grade;
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
  graduate () {
    if (this.grade > 70) {
      console.log(`${this.name} has graduated from Lambda School!`)
      return true;
    } else {
      console.log(`${this.name} only has a ${this.grade}`)
      return false;
    }
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


const will = new Student({
  name: 'Will',
  location: 'Hutchinson',
  age: 33,
  gender: 'male',
  previousBackground: 'Actuary',
  className: 'FSW',
  favSubjects: ['JS', 'Python'],
  grade: 50
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


//grade will until he graduates
while (!will.graduate()) {
  //pick instructor or PM randomly
  if (Math.random() < 0.5) {
    let gradeChange = mike.changeGrade(will);
    console.log(`${mike.name} changed ${will.name}'s grade by ${gradeChange}`)
  } else {
    let gradeChange = fred.changeGrade(will);
    console.log(`${fred.name} changed ${will.name}'s grade by ${gradeChange}`)
  }
}


