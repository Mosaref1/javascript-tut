const course ={
    courseName : "javascript-master",
    coursePrice : 1999,
    courseTeacher : "Mosaref Paik"
}

// console.log(course.courseTeacher);
const {courseTeacher: teacher} = course;
// console.log(courseTeacher);
console.log(teacher);


