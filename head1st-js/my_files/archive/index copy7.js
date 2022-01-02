function saveMyProfile(name, birthday, GPA, newuser) {
    if (birthday >= 1990) {
        console.log("Name: "+name, "\nBirth Year: "+birthday, "\nGPA: "+GPA, "\nIs a new user: "+newuser);
    } else {
        console.log("Student not eligible!");
    }
}

saveMyProfile("Krissy", 2000, 3.81, false);

var student = "Ella";
var year = 2005;
var GPA = 381/100;
var status = "newuser";
var isNewUser = (status == "newuser");

saveMyProfile(student, year, GPA, isNewUser);

var student = "Stacey";
var status = "existinguser";
var year = 1991;

saveMyProfile(student, year, 381/100, status == "newuser");
