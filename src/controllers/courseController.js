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

export const updateCourse = async function(course)
{
    //url webservices
    let url = urlWebServices.updateCourse;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('name', course.courseTitle);
    formData.append('courseId', course.courseId);
    formData.append('subject', course.subject);
    formData.append('frequency', course.frequency.toUpperCase());
    formData.append('duration', course.duration);
    formData.append('cost', course.price);
    formData.append('description', course.description);
    formData.append('classType', course.classType.toUpperCase());
    formData.append('published', course.published);
    formData.append('is_deleted', course.is_deleted ? course.is_deleted : false);
    console.log('course to update', course.published)
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

                    return ({rdo:0,course:data.createdClass,mensaje:"Curso actualizado con exito!"});
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
                    return ({rdo:0,data:data,mensaje:"Curso eliminado!"});
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

export const pauseCourse = async function(course)
{
    console.log('course to update', course)
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
    formData.append('published', course.published);
    //formData.append('is_deleted', course.is_deleted);

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
                    return ({rdo:0,data:data,mensaje:"Curso pausado!"});
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
                    data.forEach(c => {
                        courses.push(
                            {
                                courseTitle: c.name,
                                courseId: c._id,
                                subjects: [c.subject],
                                picture:DefaultPicture,
                                paused: c.published,
                                frecuency: c.frequency.charAt(0).toUpperCase() + c.frequency.slice(1).toLowerCase(),
                                price:c.cost,
                                description: c.description,
                                classType: c.classType.charAt(0).toUpperCase() + c.classType.slice(1).toLowerCase(),
                                calification: c.score.scoreValue,
                                professorLastname: c.professorLastname,
                                professorName: c.professorName,
                                professorPicture: null
                        })
                    });
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
                    data.forEach(c => {
                        courses.push(
                            {
                                courseTitle: c.name,
                                courseId: c._id,
                                subjects: c.subject,
                                picture:DefaultPicture,
                                paused: c.published,
                                frecuency: c.frequency,
                                price:c.cost,
                                description: c.description,
                                classType: c.classType,
                                calification: 3,
                        })
                    });
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

export const getAllMyClassesStudent = async function()
{
    //url webservices
    let url = urlWebServices.getAllMyClassesStudent;

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
        console.log('data',data)
            switch(rdo)
            {
                case 200:
                {
                    var courses = []
                    data.forEach(c => {
                        courses.push(
                            {
                                courseTitle: c.name,
                                courseId: c._id,
                                subjects: c.subject,
                                picture:DefaultPicture,
                                paused: c.published,
                                frecuency: c.frequency,
                                price:c.cost,
                                description: c.description,
                                classType: c.classType,
                                calification: c.score.scoreValue,
                        })
                    });
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

export const getClassById = async function(courseId)
{
    //url webservices
    let url = urlWebServices.getClassById + courseId;
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
                    var course ={
                        courseTitle: data.course.name,
                        courseId: data.course._id,
                        subjects: data.course.subject,
                        frequency: data.course.frequency,
                        price: data.course.cost,
                        description: data.course.description,
                        classType: data.course.classType,
                        paused: data.course.published,
                        picture: DefaultPicture,
                        calification: data.course.score.scoreValue,
                        professorLastname: data.course.professorLastname,
                        professorName: data.course.professorName
                    }
                    
                    return ({course:course});//correcto
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

export const enrollStudent = async function(enrollData)
{
    //url webservices
    let url = urlWebServices.enrollStudent;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('courseId', enrollData.courseId);
    formData.append('studentId', enrollData.studentId);

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
