import urlWebServices from './webServices.js';

//USER
export const createCourse = async function(course)
{
    //url webservices
    let url = urlWebServices.createCourse;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('name', course.title);
    formData.append('subject', course.subject);
    formData.append('frequency', course.frequency.toUpperCase());
    formData.append('duration', course.duration);
    formData.append('cost', course.price);
    formData.append('description', course.description);
    formData.append('classType', course.classType.toUpperCase());

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
        
        let rdo = response.status;
        let data = await response.json();
            switch(rdo)
            {
                case 200:
                {
                    
                    return ({rdo:0,course:data.createdClass,mensaje:"Curso creado con exito!"});//correcto
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
