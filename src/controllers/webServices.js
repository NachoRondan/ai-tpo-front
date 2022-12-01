const urlApi = "http://localhost:4000/api/";
console.log("url",urlApi);

const urlWebServices = {
    login:urlApi +"users/login",
    createUser:urlApi +"users/registration",
    createStudentProfile: urlApi + 'users/student-registration',
    getStudentProfile: urlApi + 'users/get-student-profile',
    createProfessorProfile: urlApi + 'users/professor-registration',
    updateProfilePicture: urlApi + "users/update-profile-picture",

    createCourse : urlApi + "courses/",
    updateCourse : urlApi + "courses/update",
    getAllClasses : urlApi + "courses/",
    getClassById : urlApi + "courses/",
    getAllMyClasses: urlApi + "courses/professor-courses",

    bookCourse: urlApi + "bookings/",
    getAllMyProfessorBookings: urlApi + "bookings/professor-bookings",
}

export default urlWebServices;