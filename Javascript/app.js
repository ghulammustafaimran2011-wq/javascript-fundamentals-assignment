var form = document.getElementById("studentForm");

var nameInput = document.getElementById("name");
var rollInput = document.getElementById("roll");
var ageInput = document.getElementById("age");
var courseInput = document.getElementById("course");
var emailInput = document.getElementById("email");

var table = document.getElementById("studentTable");
var counter = document.getElementById("counter");
var message = document.getElementById("message");
var emptyMessage = document.getElementById("emptyMessage");

var search = document.getElementById("search");
var sortAZ = document.getElementById("sortAZ");
var sortZA = document.getElementById("sortZA");
var darkMode = document.getElementById("darkMode");

var students = [];    
var editIndex = -1;   

form.addEventListener("submit", function (e) {

    e.preventDefault();

    var name = nameInput.value;
    var roll = rollInput.value;
    var age = ageInput.value;
    var course = courseInput.value;
    var email = emailInput.value;

    name = name.trim();
    roll = roll.trim();
    age = age.trim();
    course = course.trim();
    email = email.trim();

    if (name == "" || roll == "" || age == "" || course == "" || email == "") {
        message.innerText = "Please fill all fields.";
        return; 
    }

    var hasAt = email.indexOf("@");
    var hasDot = email.indexOf(".");

    if (hasAt == -1 || hasDot == -1) {
        message.innerText = "Invalid Email Address.";
        return;
    }

    var ageNumber = Number(age);

    if (ageNumber <= 15) {
        message.innerText = "Age must be greater than 15.";
        return;
    }

    var isDuplicate = false;

    for (var i = 0; i < students.length; i++) {

        if (i == editIndex) {
            continue;
        }

        if (students[i].roll == roll) {
            isDuplicate = true;
        }
    }

    if (isDuplicate) {
        message.innerText = "Roll Number already exists.";
        return;
    }

    var newStudent = {
        name: name,
        roll: roll,
        age: age,
        course: course,
        email: email
    };

    if (editIndex == -1) {

        students.push(newStudent);

    } else {
        students[editIndex] = newStudent;
        editIndex = -1;
        document.getElementById("addBtn").innerText = "Add Student";

    }

    message.innerText = "";
    form.reset();

    displayStudents();

});

function displayStudents() {

    table.innerHTML = "";

    if (students.length == 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
    }

    counter.innerText = students.length;

    for (var i = 0; i < students.length; i++) {

        var row = "<tr>";
        row += "<td>" + students[i].name + "</td>";
        row += "<td>" + students[i].roll + "</td>";
        row += "<td>" + students[i].age + "</td>";
        row += "<td>" + students[i].course + "</td>";
        row += "<td>" + students[i].email + "</td>";
        row += "<td>";
        row += "<button class='edit-btn' onclick='editStudent(" + i + ")'>Edit</button>";
        row += "<button class='delete-btn' onclick='deleteStudent(" + i + ")'>Delete</button>";
        row += "</td>";
        row += "</tr>";

        table.innerHTML += row;
    }
}

function editStudent(index) {

    var student = students[index];

    nameInput.value = student.name;
    rollInput.value = student.roll;
    ageInput.value = student.age;
    courseInput.value = student.course;
    emailInput.value = student.email;

    editIndex = index;

    document.getElementById("addBtn").innerText = "Update Student";

}

function deleteStudent(index) {

    var sureHo = confirm("Are you sure?");

    if (sureHo == true) {
        students.splice(index, 1);
        displayStudents();
    }

}

displayStudents();

search.addEventListener("input", function () {

    var searchValue = search.value.toLowerCase();
    var rows = table.getElementsByTagName("tr");

    for (var i = 0; i < rows.length; i++) {

        var name = rows[i].children[0].textContent.toLowerCase();
        var roll = rows[i].children[1].textContent.toLowerCase();
        var course = rows[i].children[3].textContent.toLowerCase();

        var found = false;

        if (name.indexOf(searchValue) != -1) {
            found = true;
        }
        if (roll.indexOf(searchValue) != -1) {
            found = true;
        }
        if (course.indexOf(searchValue) != -1) {
            found = true;
        }

        if (found == true) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }

    }

});

sortAZ.addEventListener("click", function () {

    for (var i = 0; i < students.length - 1; i++) {

        for (var j = 0; j < students.length - 1 - i; j++) {

            var nameOne = students[j].name.toLowerCase();
            var nameTwo = students[j + 1].name.toLowerCase();

            if (nameOne > nameTwo) {
                var temp = students[j];
                students[j] = students[j + 1];
                students[j + 1] = temp;
            }

        }
    }
    displayStudents();
});

sortZA.addEventListener("click", function () {

    for (var i = 0; i < students.length - 1; i++) {

        for (var j = 0; j < students.length - 1 - i; j++) {

            var nameOne = students[j].name.toLowerCase();
            var nameTwo = students[j + 1].name.toLowerCase();

            if (nameOne < nameTwo) {
                var temp = students[j];
                students[j] = students[j + 1];
                students[j + 1] = temp;
            }

        }
    }
    displayStudents();
});

darkMode.addEventListener("click", function () {

    var isDark = document.body.classList.contains("dark");

    if (isDark == true) {
        document.body.classList.remove("dark");
    } else {
        document.body.classList.add("dark");
    }

});