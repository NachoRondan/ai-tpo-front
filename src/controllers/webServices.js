const urlApi = "http://localhost:4000/";
//const urlApi = "https://api-viernes.herokuapp.com/";
console.log("url",urlApi);

const urlWebServices = {
    login:urlApi +"users/login",
    guardarImgUser: urlApi + "users/guardarImgUser",
    getImgUser: urlApi + "users/imgUserByMail",
    uploadFileImg: urlApi + "users/uploadImg",
}

export default urlWebServices;