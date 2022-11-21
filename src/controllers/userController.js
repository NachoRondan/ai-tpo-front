import urlWebServices from './webServices.js';

//USER
export const login= async function(login)
{
    //url webservices
    let url = urlWebServices.login;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('email', login.email);
    formData.append('password', login.password);
    try
    {
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{   
                'Accept':'application/x-www-form-urlencoded',
               // 'x-access-token': WebToken.webToken,
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData,
            
        });
        
        let rdo = response.status;
        let data = await response.json();
            switch(rdo)
            {
                case 201:
                {
                    //guardo token
                    localStorage.setItem("x",data.loginUser.token);
                    
                    //guardo usuario logueado
                    let user = {
                        name: data.loginUser.user.name,
                        lastname: data.loginUser.user.lastname,
                        email: data.loginUser.user.email,
                        phoneNumber: data.loginUser.user.phoneNumber,
                        studentProfileId: data.loginUser.user.studentProfileId ?  true : false,
                        professorProfileId: data.loginUser.user.professorProfileId ?  true : false,
                    };
                    localStorage.setItem("nombre",user.name);
                    localStorage.setItem("email",user.email);
                    return ({rdo:0,user:user,mensaje:"Ok"});//correcto
                }
                case 202:
                {
                    //error mail
                    return ({rdo:1,mensaje:"El mail ingresado no existe en nuestra base."});
                }
                case 203:
                {
                    //error password
                    return ({rdo:1,mensaje:"La contraseña no es correcta."});
                }
                default:
                {
                    //otro error
                    return ({rdo:1,mensaje:"Ha ocurrido un error"});                
                }
            }
    }
    catch(error)
    {
        console.log("error",error);
    };
}

export const createUser = async function (user)
{
    //url webservices
    let url = urlWebServices.createUser;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('name', user.name);
    formData.append('lastname', user.lastname);
    formData.append('email', user.email);
    formData.append('password', user.password);
    formData.append('phoneNumber', user.phoneNumber);
    console.log('formData', formData)
    try
    {
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{   
                'Accept':'application/x-www-form-urlencoded',
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData,
            
        });
        
        console.log("response",response);
        let data = await response.json();
        console.log("jsonresponse",data);
        localStorage.setItem("x",data.createdUserToken);
        return 0;
    }
    catch(error)
    {
        console.log("error",error);
    };
}

//STUDENT PROFILE
export const getStudentProfile = async function()
{
    
    //url webservices
    let url = urlWebServices.getStudentProfile;
    try
    {
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{   
                'Accept':'application/x-www-form-urlencoded',
                'x-access-token': localStorage.getItem('x'),
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: new URLSearchParams(),
            
        });
        let rdo = response.status;
        let data = await response.json();
        let studentProfile = data.studentProfile;

        switch (rdo) 
        {
            case 200:
            {
                return ({profile:studentProfile,mensaje:"Ok"});
            }
            default:
            {
                return ({rdo:1,mensaje:"Ha ocurrido un error"});                
            }
                
        }
    }
    catch (e) {
        console.log(e)
    }
}

export const createStudentProfile = async function (studentProfile){
    //url webservices
    let url = urlWebServices.createStudentProfile;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('birthdate', studentProfile.birthdate);

    try
    {
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{   
                'Accept':'application/x-www-form-urlencoded',
                'x-access-token': localStorage.getItem('x'),
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData,
            
        });
        
        console.log("response",response);
        let data = await response.json();
        console.log("jsonresponse",data);
        return response;
    }
    catch(error)
    {
        console.log("error",error);
    };
}

//IMAGES
export const updateProfilePicture = async function (files, titles){
    //url webservices
    let url = urlWebServices.updateProfilePicture;
    const formData = new FormData();
    //agrego archivos para subir
    for (let i = 0; i < files.length; i++)
    {
        formData.append('files', files[i], titles[i])
    }
   
    try
    {
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/form-data',
                'x-access-token': localStorage.getItem('x'),
                'Origin':'http://localhost:3000',
                //'Content-Type': 'application/form-data'
            },
            body:formData
        });
    
        let user = await response.json()
        console.log('respuestaUpload', user);
        //alert('Archivo cargado correctamente!')
        return user;
    } catch (err) {
        alert('Error uploading the files')
        console.log('Error uploading the files', err)
    }
}