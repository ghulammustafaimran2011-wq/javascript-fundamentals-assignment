let users = JSON.parse(localStorage.getItem("users")) || [];

const fullName = prompt("Enter your Full Name:");
const age = prompt("Enter your Age:");
const city = prompt("Enter your City:");
const profession = prompt("Enter your Profession (Student/Employee):");
const email = prompt("Enter your Email:");
const phone = prompt("Enter your Phone Number:");

const user = {
    fullName: fullName,
    age: age,
    city: city,
    profession: profession,
    email: email,
    phone: phone
};

users.push(user);

localStorage.setItem("users", JSON.stringify(users));

const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

const userContainer = document.getElementById("userContainer");

storedUsers.forEach(function(user) {
    userContainer.innerHTML += `
        <div class="user-card">
            <p><strong>Full Name:</strong> ${user.fullName}</p>
            <p><strong>Age:</strong> ${user.age}</p>
            <p><strong>City:</strong> ${user.city}</p>
            <p><strong>Profession:</strong> ${user.profession}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
        </div>
    `;
});