function toggleForms(formType) {
    let loginForm = document.getElementById("loginForm");
    let signupForm = document.getElementById("signupForm");
    let forgotPasswordForm = document.getElementById("forgotPasswordForm");

    // Hide all forms first
    loginForm.classList.remove("active");
    signupForm.classList.remove("active");
    forgotPasswordForm.classList.remove("active");

    // Show the selected form
    if (formType === "signup") {
        signupForm.classList.add("active");
    } else if (formType === "forgotPassword") {
        forgotPasswordForm.classList.add("active");
    } else {
        loginForm.classList.add("active");
    }
}

