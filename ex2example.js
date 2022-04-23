const grades = [10, 2, 21, 35, 50, -10, 0, 1];

//get all grades > 20
const result = grades.filter(grade => grade > 20); // [21, 35, 50];

// get all grades > 30
grades.filter(grade => grade > 30); // [35, 50]