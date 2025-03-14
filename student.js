var submit = document.getElementById("Done1");
var table = document.getElementById("table");


var NameE = document.getElementById("name")
var ageE = document.getElementById("age")
var genderE = document.getElementById("gender")
var emailE = document.getElementById("email")
var courseE = document.getElementById("course")

submit.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission (if inside a form)

    var name = document.getElementById("name").value.trim();
    var age = document.getElementById("age").value.trim();
    var gender = document.getElementById("gender").value.trim();
    var email = document.getElementById("email").value.trim();
    var course = document.getElementById("course").value.trim();

    let isValid = true;

    if (!name || !age || !gender || !email || !course) {
        alert("All fields are required!");
        return;
    }

    var NNameRegex = /^[a-zA-Z]+$/
    var AgeRegex = /^\d.$/
    var genderRegex = /^[a-zA-Z]+$/
    var courseRegex = /^[a-zA-Z]+$/
    var emailRegex = /^[a-zA-Z0-9\.]*@gmail\.com$/

    if (NNameRegex.test(NameE.value) == false) {
        document.querySelector(".nameerror").style.display = "inline"
        isValid = false;
    }
    else {
        document.querySelector(".nameerror").style.display = "none"
    }

    if (AgeRegex.test(ageE.value) == false) {
        document.querySelector(".ageerror").style.display = "inline"
        isValid = false;
    }
    else {
        document.querySelector(".ageerror").style.display = "none"
    }
    if (emailRegex.test(emailE.value) == false) {
        document.querySelector(".emailerror").style.display = "inline"
        isValid = false;
    }
    else {
        document.querySelector(".emailerror").style.display = "none"
    }

    if (courseRegex.test(courseE.value) == false) {
        document.querySelector(".courseerror").style.display = "inline"
        isValid = false;
    }
    else {
        document.querySelector(".courseerror").style.display = "none"
    }


    if (isValid) {
        alert("Form submitted successfully!");
        addrow();
        return true;
    }
    else {
        return false;
    }



    function addrow(){


    var tr = document.createElement("tr");

    tr.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${gender}</td>
        <td>${email}</td>
        <td>${course}</td>
        <td><button class="deleteBtn" style="padding: 5px; width: 100%; background-color: red;color:white">Delete</button></td>
    `;

    table.appendChild(tr);
    var deleteBtn = document.querySelector(".deleteBtn")
    deleteBtn.onmouseover = function () {
        deleteBtn.style.backgroundColor = "darkred";
    };
    deleteBtn.onmouseout = function () {
        deleteBtn.style.backgroundColor = "red";
    };

    // Adding delete functionality
    tr.querySelector(".deleteBtn").addEventListener("click", function () {
        tr.remove();
    });

    // Reset the form after submission
    document.getElementById("regForm").reset();

}

});