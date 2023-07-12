// style (focus & blur)........................
let inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  // onFocus.....................................
  input.addEventListener("focus", (e) => {
    // then add activeInput class
    e.target.parentElement.classList.add("activeInput");

    // add legend
    input.parentElement.firstElementChild.style.display = "block";

    // remove svg
    if (input.previousElementSibling.classList.contains("firstSvg")) {
      input.previousElementSibling.style.display = "none";
    }

    // remove placelolder
    input.classList.add("placeholderInput");
  });

  // onBlur.......................................
  input.addEventListener("blur", (e) => {
    // remove active class
    e.target.parentElement.classList.remove("activeInput");

    // remove legend
    input.parentElement.firstElementChild.style.display = "none";

    // add svg
    input.previousElementSibling.style.display = "block";

    // add placelolder
    input.classList.remove("placeholderInput");

    // calling checker functions
    usernameChecker();
    emailChecker();
    passwordChecker();
    confirmPasswordChecker();
  });

  // onMouseMove..................................
  input.addEventListener("mousemove", (e) => {
    // if active >> remove hover
    // if not >> add hover
    if (
      e.target.parentElement.classList.contains("activeInput") ||
      e.target.parentElement.classList.contains("error") ||
      e.target.parentElement.classList.contains("success")
    ) {
      e.target.parentElement.classList.remove("hoverInput");
    } else {
      e.target.parentElement.classList.add("hoverInput");
    }
  });

});


// getting form values without space..............................................

let username = document.querySelector("#username");

let email = document.querySelector("#email");

let password = document.querySelector("#password");

let confirmPassword = document.querySelector("#confirmPassword");


// condition for the values........................
// for checking username...........................
function usernameChecker() {
  // getting input value & removing space
  let usernameValue = username.value.trim();
  // a variable for messeges
  let usernameMessege;
  // if it is blank give error
  if (usernameValue == "") {
    // messege for empty username field
    usernameMessege = "We need your username to get started.";

    // call error function to make it all red
    error(username, usernameMessege);

    // if it is too long
  } else if (usernameValue.length > 20) {
    usernameMessege = "Sorry, your username is too long.";

    // call error function to make it all red
    error(username, usernameMessege);

    // if it filled and valid
  } else {
    usernameMessege = "";
    success(username, usernameMessege);
  }
}


// for checking email.............................
function emailChecker() {
  // getting input value & removing space
  let emailValue = email.value.trim();
  // a variable for messeges
  let emailMessege;
  // if it is blank give error
  if (emailValue == "") {
    // messege for empty email field
    emailMessege = "Oops! Looks like you missed a field.";

    // call error function to make it all red
    error(email, emailMessege);

    // if it is valid by using Regex (regular expressions)
  } else if (
    emailValue.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
  ) {
    emailMessege = "";
    success(email, emailMessege);

    // invalid email
  } else {
    emailMessege = "Hmmm, something's not quite right with that email address.";

    // call error function to make it all red
    error(email, emailMessege);
  }
}


// for checking password...........................
function passwordChecker() {
  // getting input value & removing space
  let passwordValue = password.value.trim();
  // a variable for messeges
  let passwordMessege;
  // if it is blank give error
  if (passwordValue == "") {
    // messege for empty password field
    passwordMessege = "Ah, it seems like we're missing something here.";

    // call error function to make it all red
    error(password, passwordMessege);

    // if password is strong
  } else if (passwordValue.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/)) {
    passwordMessege = "";
    success(password, passwordMessege)

    // if password is too short
  } else if (passwordValue.length < 8) {
    passwordMessege = "Please use at least 8 characters.";

    // call error function to make it all red
    error(password, passwordMessege);
  
    // if password is weak
  } else {
    passwordMessege = "Please use a combination of letters, numbers, and symbols in your password.";

    // call error function to make it all red
    error(password, passwordMessege);
    }
  }


// for checking confirmPassword...................
function confirmPasswordChecker() {
  // getting input value & removing space
  let confirmPasswordValue = confirmPassword.value.trim();
  // a variable for messeges
  let confirmPasswordMessege;
  // if it is blank give error
  if (confirmPasswordValue == "") {
    // messege for empty confirmPassword field
    confirmPasswordMessege = "Just fill it in and we'll be on our way!";

    // call error function to make it all red
    error(confirmPassword, confirmPasswordMessege);

  } else if (confirmPasswordValue === password.value) {

    confirmPasswordMessege = "";
    success(confirmPassword, confirmPasswordMessege);

    } else {
      confirmPasswordMessege = "Oh snap! Your passwords don't match";

      // call error function to make it all red
      error(confirmPassword, confirmPasswordMessege);

    }
  }


// error(red) and success(green) function..........

// for error
function error(input, messege) {
  // adding the messege in html
  input.parentElement.nextElementSibling.innerHTML = messege;
  // adding red border
  input.parentElement.classList.add("error");
  // red svg
  input.previousElementSibling.style.fill = "#e30f00";
}

// for success
function success(input, messege) {
  // removing the messege in html
  input.parentElement.nextElementSibling.innerHTML = messege;
  // adding green border
  input.parentElement.classList.add("success");
  // green svg
  input.previousElementSibling.style.fill = "#04aa6d";
}

// ***************************************
// show password when secondSvg is clicked.........
// remove & add another svg
let secondSvg = document.querySelector(".secondSvg");

let showPas = document.querySelector(".showPas");

secondSvg.addEventListener("click", () => {
  if (showPas.type === "password") {
    showPas.type = "text";
  }

  });

// send form when button is clicked................
// if all of them have success class remove disabled from button 

let button = document.querySelector("button");

button.addEventListener("click", (e) => {
e.preventDefault();

});

