// Your code here.
function getFirstName(box) {
  let box2 = box;

return box2.firstName;


}
function getLastName(box) {
  let box2 = box;

  return box2.lastName;
}
function getFullName(box) {
  let box2 = box;

return box2.firstName+" "+box2.lastName;


}

function setFirstName(person1,person2) {
let a = person2.firstName + "Anthony";
let b=person1.firstName + "Redacted";
return a&&b ;
}

function setAge(person1,person2) {

person1.age = person1.age + 6;
person2.age = person2.age +6;

return;

}
function giveBirthday(person1,person2) {
person1.age++
person2.age++;
return;


}






// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
