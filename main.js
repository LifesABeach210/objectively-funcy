// Your code here.
function getFirstName(box) {
  

return box.firstName;


}
function getLastName(box) {
  let box2 = box;

  return box2.lastName;
}
function getFullName(box) {
  let box2 = box;

return box2.firstName+" "+box2.lastName;


}

function setFirstName(person1,Str) {
person1.firstName = Str;

}

function setAge(person1,newAge) {

person1.age= newAge; 


return;

}
function giveBirthday(person1) {

if (person1['age']===undefined) {
  person1.age=1;
}else{
  person1.age++;
}


return;


}

function marry(person1,person2) {
  person1.married = true;
  person2.married = true;
  person1.spouseName = getFullName(person2);
  person2.spouseName = getFullName(person1);


}

function divorce(person1,person2) {
  person1.married = false;
  person2.married = false;
  delete person1.spouseName;
  delete person2.spouseName;

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
