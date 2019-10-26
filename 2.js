function is_name_valid(name) {
  // Huruf dari a sampai z
   var uppercaseRe = /[A-Z]/g;
  

	if(name.length == 3 
      && name.match(uppercaseRe)) {
    	return true;
    }
    return false;
}
function is_age_valid(age) {
   // angka dari 0 sampai 9
  var numberRe = /[0-9]/g;
}

  if(age.length == 2 && numberRe.match(numberRe).length == age.length) {
      return true;
    }
    return false;
}

function is_username_valid(username) {

	var lowercaseRe = /[a-z]/g;
  var numberRe = /[0-9]/g;
  var specialRe = /[_.]/g;

  if(username.length == 8
     && lowercaseRe.test(username).length == 4
     && numberRe.test(username).lenght == 3
     && specialRe.test(username)) {
     return true;
  }

  return false;
}
