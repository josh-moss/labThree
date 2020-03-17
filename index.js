let score = 76;
let grade;

switch (true) {
    case (score <= 100 && score >= 85):
        grade = "A+";
        break;
    case (score <= 84 && score >= 80):
        grade = "A";
        break;
    case (score <= 79 && score >= 75):
        grade = "A-";
        break;
    case (score <= 74 && score >= 90):
        grade = "B+";
        break;
    case (score <= 69 && score >= 65):
        grade = "B";
        break;
    case (score <= 64 && score >= 60):
        grade = "B-";
        break;
    case (score <= 59 && score >= 55):
        grade = "C+";
        break;
    case (score <= 54 && score >= 50):
        grade = "C";
        break;
    case (score <= 49 && score >= 40):
        grade = "D";
        break;
default:
    grade = "E";
    break;
}

if (grade == "A+", grade == "A", grade == "A-") {
    score = ("Distinction");
}
else if (grade == "B+", grade == "B", grade == "B-") {
    score = ("Merit");
}
else if (grade == "C+" || grade == "C") {
    score = ("Pass");
}
else {
    score = ("Fail");
}

console.log(grade, score)