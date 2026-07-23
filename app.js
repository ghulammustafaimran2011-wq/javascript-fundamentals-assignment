let userName = prompt("Enter your name:");
let userAge = prompt("Enter your age:");

alert(`Welcome ${userName}! You are ${userAge} years old.`);

console.log("Name:", userName);
console.log("Age:", userAge);

function checkGrade(marks) {
    if (marks >= 80) {
        console.log(`${marks}: A Grade`);
    } else {
        if (marks >= 70) {
            console.log(`${marks}: B Grade`);
        } else {
            if (marks >= 60) {
                console.log(`${marks}: C Grade`);
            } else {
                if (marks >= 50) {
                    console.log(`${marks}: Pass`);
                } else {
                    console.log(`${marks}: Fail`);
                }
            }
        }
    }
}

checkGrade(85);
checkGrade(74);
checkGrade(66);
checkGrade(55);
checkGrade(40);

console.log("Even Numbers from 1 to 50:");

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("Reverse Counting:");

let count = 10;

while (count >= 1) {
    console.log(count);
    count--;
}

let students = ["Ali", "Ahmed", "Sara", "Zain"];

students.push("Fatima");

students.shift();

students.unshift("Usman");

students.pop();

console.log("Final Array:");
console.log(students);

let numbers = [10, 20, 30, 40, 50, 60];

let slicedArray = numbers.slice(1, 4);

numbers.splice(2, 2);

console.log("Sliced Array:");
console.log(slicedArray);

console.log("Original Array After Splice:");
console.log(numbers);

let student = {
    name: "Ali",
    age: 20,
    city: "Karachi",
    course: "JavaScript"
};

console.log("Student Name:", student.name);
console.log("Student City:", student.city);

let studentList = [{
        name: "Ali",
        marks: 80
    },
    {
        name: "Sara",
        marks: 92
    },
    {
        name: "Ahmed",
        marks: 65
    },
    {
        name: "Zain",
        marks: 50
    }
];


let studentNames = studentList.map(function(student) {
    return student.name;
});

console.log("Student Names:");
console.log(studentNames);


console.log("Student Marks:");

studentList.forEach(function(student) {
    console.log(`${student.name} scored ${student.marks} marks.`);
});


function findTopper(students) {
    let topper = students[0];

    for (let i = 1; i < students.length; i++) {
        if (students[i].marks > topper.marks) {
            topper = students[i];
        }
    }

    console.log("Topper:", topper.name);
    console.log("Marks:", topper.marks);
}


findTopper(studentList);