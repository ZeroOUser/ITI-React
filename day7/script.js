// TODO visible && invisible Pass
// TODO more input validation
// TODO improve UX
// TODO link it to todo app

const signupErrorMessageElement = document.getElementById("signup-errorMessage");
const loginErrorMessageElement = document.getElementById('login-errorMessage');
const signUpForm = document.getElementById('signup-form');  // Added this
const loginForm = document.getElementById('login-form');    // Added this
const signUpBtn = document.getElementById('signup-btn');    // Added this
const logInBtn = document.getElementById('login-btn');      // Added this

function slide() {
    signUpForm.classList.toggle('slide');
}

function signUp() {
    const username = document.getElementById("signup-username").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const repassword = document.getElementById("signup-repassword").value;

    if (!validInput(username, email, password, repassword)) {
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.some(user => user.username === username);
    if (userExists) {
        signupErrorMessageElement.innerText = "Username already taken.";
        return;
    }

    users.push({ username, email, password });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Sign-up successful! You can now log in.");
}

function validInput(username, email, password, repassword) {
    if (username === '' || email === '' || password === '' || repassword === '') {
        signupErrorMessageElement.innerText = 'Please fill in all fields.';
        return false;
    }
    if (password !== repassword) {
        signupErrorMessageElement.innerText = "Passwords don't match.";
        return false;
    }
    return true;
}

function login() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    if (username === "" || password === "") {
        loginErrorMessageElement.innerText = "Please fill in all fields.";
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert(`Logged in successfully as: ${username}`);
    } else {
        loginErrorMessageElement.innerText = "Invalid username or password.";
    }
}

signUpBtn.addEventListener('click', function(e) {
    e.preventDefault();
    signUp();
});

logInBtn.addEventListener('click', function(e) {
    e.preventDefault();
    login();
});

document.querySelectorAll('input').forEach(inputElement => {
    inputElement.addEventListener('input', function() {
        loginErrorMessageElement.innerText = signupErrorMessageElement.innerText = "";
    });
});


// document.getElementsByClassName('hidden-eye-icon').forEach(inputElement => {
//     inputElement.addEventListener('click', function() {
//         loginErrorMessageElement.innerText = signupErrorMessageElement.innerText = "";
//     });
// });
