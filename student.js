var submit = document.getElementById("Done1");
var table = document.getElementById("table");

submit.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission (if inside a form)

    var name = document.getElementById("name").value.trim();
    var age = document.getElementById("age").value.trim();
    var gender = document.getElementById("gender").value.trim();
    var email = document.getElementById("email").value.trim();
    var course = document.getElementById("course").value.trim();

    if (!name || !age || !gender || !email || !course) {
        alert("All fields are required!");
        return;
    }

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
});