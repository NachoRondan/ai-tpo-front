const urlApi = "http://localhost:4000/api/";
//const urlApi = "https://api-viernes.herokuapp.com/";
console.log("url",urlApi);

const urlWebServices = {
    login:urlApi +"users/login",
    createUser:urlApi +"users/registration",
    createStudentProfile: urlApi + 'users/student-registration',
    getStudentProfile: urlApi + 'users/get-student-profile',
    guardarImgUser: urlApi + "users/guardarImgUser",
    getImgUser: urlApi + "users/imgUserByMail",
    uploadFileImg: urlApi + "users/uploadImg",
}

export default urlWebServices;