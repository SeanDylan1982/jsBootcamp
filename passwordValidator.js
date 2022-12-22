function isValidPassword(password,username) {
  if ( password.includes(`${username}`)) {
    return false;
  } else if ( password.length < 8 ) {
    return false;
  } else if ( password.includes(" ")) {
    return false;
  }
  return true;
}

isValidPassword('89Fjjlnms', 'dogluvr');
console.log(isValidPassword('89Fjjlnms', 'dogluvr'));
isValidPassword("dogluvr123!", "doguvr");
console.log(isValidPassword("dogluvr123!", "dogluvr"));