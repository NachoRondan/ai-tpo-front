
//Score
export const postScore = async function(score)
{
    //url webservices
    let url = urlWebServices.createCourse;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('studentAuthor', score.studentAuthor);
    formData.append('courseId', score.courseId);
    formData.append('score', score.score);

    try
    {
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{   
                'Accept':'application/x-www-form-urlencoded',
                'x-access-token': localStorage.getItem('x'),
                'Origin':'http://localhost:4000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData,
            
        });
        
        let rdo = response.status;
        let data = await response.json();
            switch(rdo)
            {
                case 200:
                {
                    
                    return ({rdo:0,course:data.createdClass,mensaje:"Calificacion publicada con exito!"});//correcto
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


export const updateScore = async function(score)
{
    //url webservices
    let url = urlWebServices.createCourse;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('studentAuthor', score.studentAuthor);
    formData.append('courseId', score.courseId);
    formData.append('score', score.score);

    try
    {
        let response = await fetch(url,{
            method: 'PATCH', // or 'PUT'
            mode: "cors",
            headers:{   
                'Accept':'application/x-www-form-urlencoded',
                'x-access-token': localStorage.getItem('x'),
                'Origin':'http://localhost:4000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData,
            
        });
        
        let rdo = response.status;
        let data = await response.json();
            switch(rdo)
            {
                case 200:
                {
                    
                    return ({rdo:0,course:data.createdClass,mensaje:"Calificacion publicada con exito!"});//correcto
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

export const getScoreByCourseId = async function(courseId)
{
    //url webservices
    let url = urlWebServices.createCourse;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('courseId', courseId);

    try
    {
        let response = await fetch(url,{
            method: 'GET', // or 'PUT'
            mode: "cors",
            headers:{   
                'Accept':'application/x-www-form-urlencoded',
                'x-access-token': localStorage.getItem('x'),
                'Origin':'http://localhost:4000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData,
            
        });
        
        let rdo = response.status;
        let data = await response.json();
            switch(rdo)
            {
                case 200:
                {
                    
                    return ({rdo:0,course:data.createdClass,mensaje:"Calificacion publicada con exito!"});//correcto
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