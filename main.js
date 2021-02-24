// These variables are our "database" for users.
// You can actually change the values to whatever you'd like!
// And you can and should use them in your `isRegisteredUser` function.
// But we use them in your test code as well, so whatever you do, don't delete them!


const user1 = 'colin.jaffe@codeimmersives.com';
const password1 = 'Hotforhimself';
const user2 = 'mesuara@codeimmersives.com';
const password2 = 'Console.logger';
const user3 = 'anthony@codeimmersives.com';
const password3 = 'like a BOSS';

const getInput = require("./get-input.js");
const email = getInput(1);
const password = getInput(2);


// **YOUR** code below. Pass those tests!
function isValidEmail(emailAddress) {
  let index = emailAddress.indexOf("@");
  return (emailAddress.includes("@codeimmersives.com") && index !== 0)
}

function isValidPassword(emailAddress) {
  const len = emailAddress.length >= 8;
  const haveUppercase = emailAddress !== emailAddress.toUpperCase();
  const haveLowercase = emailAddress !== emailAddress.toLowerCase();
  return len && haveLowercase && haveUppercase;
}

function isRegisteredUser(emailAddress) {
  return (emailAddress === user1 || emailAddress === user2 || emailAddress === user3);
}

function passwordMatches(emailAddress, password) {
  if (isRegisteredUser(emailAddress)) {
    if (user1 === emailAddress) {
      return password === password1
    }
    else if (user2 === emailAddress) {
      return password === password2
    }
    else if (user3 === emailAddress) {
      return password === password3
    }
  }
  return false

}

if (typeof isValidEmail === 'undefined') {
  isValidEmail = undefined;
}

if (typeof isValidPassword === 'undefined') {
  isValidPassword = undefined;
}

if (typeof isRegisteredUser === 'undefined') {
  isRegisteredUser = undefined;
}

if (typeof passwordMatches === 'undefined') {
  passwordMatches = undefined;
}

if (typeof user1 === 'undefined') {
  user1 = undefined;
}

if (typeof user2 === 'undefined') {
  user2 = undefined;
}

if (typeof user3 === 'undefined') {
  user3 = undefined;
}

if (typeof password1 === 'undefined') {
  password1 = undefined;
}

if (typeof password2 === 'undefined') {
  password2 = undefined;
}

if (typeof password3 === 'undefined') {
  password3 = undefined;
}



module.exports = {
  isValidEmail,
  isValidPassword,
  isRegisteredUser,
  passwordMatches,
  user1,
  user2,
  user3,
  password1,
  password2,
  password3,
}
