document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");

    form.addEventListener("submit", function (e) {
        // Get values
        const fname = document.getElementById("fname").value.trim();
        const lname = document.getElementById("lname").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("number").value.trim();
        const address = document.getElementById("address").value.trim();

        // Model selection
        const modelSelected = document.querySelector('input[name="model"]:checked');

        // Validation
        let errors = [];

        if (!fname) errors.push("First name is required.");
        if (!lname) errors.push("Last name is required.");
        if (!email || !/^\S+@\S+\.\S+$/.test(email)) errors.push("Valid email is required.");
        if (!phone || phone.length<10) errors.push("Contact number is required.");
        if (!address) errors.push("Address is required.");
        if (!modelSelected) errors.push("Please select a watch model.");

        if (errors.length > 0) {
            alert(errors.join("\n"));
            e.preventDefault();
        }
    });
});

