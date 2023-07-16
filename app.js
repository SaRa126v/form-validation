// style (focus & blur)........................
let inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  // onFocus.....................................
  input.addEventListener("focus", (e) => {
    // then add activeInput class
    e.target.parentElement.classList.add("activeInput");

    // add legend
    input.parentElement.firstElementChild.classList.add("legendActive");
    console.log(input.parentElement.firstElementChild);

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
    input.parentElement.firstElementChild.classList.remove("legendActive");
    // add svg
    input.previousElementSibling.style.display = "block";

    // add placelolder
    input.classList.remove("placeholderInput");

    // calling checker functions
    if (input.id === "username") {
      usernameChecker();
    } else if (input.id === "email") {
      emailChecker();
    } else if (input.id === "password") {
      passwordChecker();
    } else if (input.id === "confirmPassword") {
      confirmPasswordChecker();
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
    success(username, usernameMessege);
  }
}

// for checking email.............................
function emailChecker() {
  // getting input value & removing space
  let emailValue = email.value.trim();
  // a variable for messeges
  let emailMessege;

  // if it is valid by using Regex (regular expressions)
  if (emailValue == "") {
    // messege for empty email field
    emailMessege = "Oops! Looks like you missed a field.";

    // call error function to make it all red
    error(email, emailMessege);

    // invalid email
  } else if (emailValue.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    success(email, emailMessege);

    // if it is empty
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

  // if password is strong
  if (
    passwordValue.match(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/
    )
  ) {
    success(password, passwordMessege);
    // if it is blank give error
  } else if (passwordValue == "") {
    // messege for empty password field
    passwordMessege = "Ah, it seems like we're missing something here.";

    // call error function to make it all red
    error(password, passwordMessege);

    // if password is too short
  } else if (passwordValue.length < 8) {
    passwordMessege = "Please use at least 8 characters.";

    // call error function to make it all red
    error(password, passwordMessege);

    // if password is weak
  } else {
    passwordMessege =
      "Please use a combination of letters, numbers, and symbols in your password.";

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
    // confirmPasswordMessege = "";
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
function success(input) {
  // remove error class if there is any
  if (input.parentElement.classList.contains("error")) {
    input.parentElement.classList.remove("error");
  }

  // removing the messege in html
  input.parentElement.nextElementSibling.innerHTML = "";

  // adding green border
  input.parentElement.classList.add("success");

  // green svg
  input.previousElementSibling.style.fill = "#04aa6d";
}

// ***************************************
// show password when secondSvg is clicked.........
// remove & add another svg
let secondSvgs = document.querySelectorAll(".secondSvg");

secondSvgs.forEach((svg) => {
    svg.addEventListener("click", (e) => {
        const targetInput = e.target.previousElementSibling;

        if (targetInput.getAttribute("type") === "password") {
            targetInput.setAttribute("type", "text");
        } else {
            targetInput.setAttribute("type", "password");
        }
    });
});


// get attribute ro nemikhune vagti attributi vojud nadare****************************

// send form when button is clicked................

// if all of them have success class remove disabled from button

let button = document.querySelector("button");

button.addEventListener("click", () => {
  inputs.forEach((input) => {
    if (input.parentElement.classList.contains("success")) {
      button.disabled = false;
      console.log("it is false");
      console.log(button);
    } else {
      button.disabled = true;
      console.log("it is true");
      console.log(button);
      console.log(input.parentElement);
    }
  });
});

// for testing:
// sara
// Sara@gmail.com
// Sara12345$
