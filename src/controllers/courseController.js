import urlWebServices from './webServices.js';
import DefaultPicture from '../assets/default_class.jpg'

//COURSE
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


export const deleteCourse = async function(course)
{
    //url webservices
    let url = urlWebServices.updateCourse;
    //armo json con datos
    const formData = new URLSearchParams();
    //formData.append('name', course.courseTitle);
    formData.append('courseId', course.courseId);
    //formData.append('subjects', course.subject);
    //formData.append('frequency', course.frequency);
    //formData.append('duration', course.duration);
    //formData.append('cost', course.price);
    //formData.append('description', course.description);
    //formData.append('classType', course.classType);
    //formData.append('published', course.published);
    formData.append('is_deleted', course.is_deleted);

    try
    {
        let response = await fetch(url,{
            method: 'PUT', 
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

                    console.log('data',data)
                    //return ({rdo:0,course:data.createdClass,mensaje:"Curso creado con exito!"});
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
export const getAllClasses = async function(course)
{
    //url webservices
    let url = urlWebServices.getAllClasses;

    try
    {
        let response = await fetch(url,{
            method: 'GET', // or 'PUT'
            mode: "cors",
            headers:{   
                'Accept':'application/x-www-form-urlencoded',
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},

        })

        let rdo = response.status;
        let data = await response.json();
            switch(rdo)
            {
                case 200:
                {
                    var courses = []
                    let course ={
                        title: '', 
                        subject: '' ,
                        frequency: '', 
                        duration: '' ,
                        price: '' ,
                        description: '' ,
                        classType: '' ,

                    }
                    data.courses.map((c) => (
                        course.title = c.name, 
                        course.subject= [c.subject],
                        course.frequency= c.frequency, 
                        course.duration= c.duration,
                        course.price=c.cost,
                        course.description= c.description,
                        course.classType= c.classType,
                        courses.push(course)
                    )
                    )
                    return ({courses:courses});//correcto
                }
                default:
                {
                    //otro error
                    return ({rdo:1,mensaje:""});                
                }
            }
    }
    catch(error)
    {
        console.log("error",error);
    };
}

export const getAllMyClasses = async function()
{
    //url webservices
    let url = urlWebServices.getAllMyClasses;

    try
    {
        let response = await fetch(url,{
            method: 'GET', // or 'PUT'
            mode: "cors",
            headers:{   
                'Accept':'application/x-www-form-urlencoded',
                'x-access-token': localStorage.getItem('x'),
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},            
        });
        
        let rdo = response.status;
        let data = await response.json();
            switch(rdo)
            {
                case 200:
                {
                    var courses = []
                    var course ={
                        courseTitle: '', 
                        courseId:'',
                        subjects: '' ,
                        frecuency: '', 
                        price: '' ,
                        description: '' ,
                        classType: '' ,
                        paused:false,
                        picture:DefaultPicture

                    }
                    data.map((c) => (

                        course.courseTitle= c.name, 
                        course.courseId= c._id,
                        course.subjects= c.subject,
                        course.frecuency= c.frequency, 
                        course.price=c.cost,
                        course.description= c.description,
                        course.classType= c.classType,
                        courses.push(course)
                    )
                    )
                    return ({courses:courses});//correcto
                }
                default:
                {
                    //otro error
                    return ({courses:[]});                
                }
            }
    }
    catch(error)
    {
        console.log("error",error);
    };
}
