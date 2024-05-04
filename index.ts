#! /usr/bin/env node

class School{
    name: string;
    students: Student[] = [];
    teachers: Teacher[] =[];
    
    
    constructor(name:string){
        this.name = name;
    }

    addStudent(stdobj:Student){
this.students.push(stdobj)
}
addTeacher(tcobj :Teacher){
    this.teachers.push(tcobj)
}

}

class Student{
    name: string;
    age : number;
    rollNumber: number;
    schoolName :string;

    constructor(name:string, age:number,rollNumber:number,schoolName: string){
        this.name = name;
        this.age = age;
        this.rollNumber = rollNumber;
        this.schoolName = schoolName;
    }
}


class Teacher{
    name: string;
    age : number;
    subject: string;

    constructor(
        name:string, 
        age: number,
        subject:string){
        this.name = name;
        this.age = age;
        this.subject = subject;
    }
}

/// or we just use extand to get same information like
/// class Teacher extend Student{}

// school name
let School1 = new School("Art School")
let School2 = new School("Beachon House")
let School3 = new School("Mama Parsi")

// student name
let student1 = new Student("Azeem",15,20,School1.name)
let student2 = new Student("Amir",17,25,School2.name)
let student3 = new Student("Hasan",18,23,School3.name)

// teacher name
let teacher1 = new Teacher("Ali",28,"English")
let teacher2 = new Teacher("Mohammad",35,"Math")
let teacher3 = new Teacher("Tahir" ,29,"Urdu")

// add student to school
School1.addStudent(student1)
School2.addStudent(student2)
School3.addStudent(student3)

console.log(student1);
console.log(student2);
console.log(student3);

// add teacher to school
School1.addTeacher(teacher1)
School2.addTeacher(teacher2)
School3.addTeacher(teacher3)

console.log(teacher1);
console.log(teacher2);
console.log(teacher3);































