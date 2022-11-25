const urlApi = "http://localhost:4000/api/";
//const urlApi = "https://api-viernes.herokuapp.com/";
console.log("url",urlApi);

const urlWebServices = {
    login:urlApi +"users/login",
    createUser:urlApi +"users/registration",
    createStudentProfile: urlApi + 'users/student-registration',
    getStudentProfile: urlApi + 'users/get-student-profile',
    createProfessorProfile: urlApi + 'users/professor-registration',
    updateProfilePicture: urlApi + "users/update-profile-picture",

    createCourse : urlApi + "courses/"
}

export default urlWebServices;