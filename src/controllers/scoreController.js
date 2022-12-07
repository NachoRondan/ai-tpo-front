import urlWebServices from './webServices.js';

export const postScore = async function(scoreData)
{
    //url webservices
    let url = urlWebServices.postScore;
    const formData = new URLSearchParams();
    formData.append('courseId', scoreData.courseId);
    formData.append('score', scoreData.score);
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
        console.log('data',data)
            switch(rdo)
            {
                case 200:
                {
                    return ({mensaje:"Curso calificado!"});//correcto
                }
                default:
                {
                    //otro error
                    return ({mensaje:"Ocurrio un error calificando el curso!"});                
                }
            }
    }
    catch(error)
    {
        console.log("error",error);
    };
}

export const getCourseScore = async function(courseId)
{
    //url webservices
    let url = urlWebServices.getCourseScore;
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
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},            
        });
        
        let rdo = response.status;
        let data = await response.json();
            switch(rdo)
            {
                case 200:
                {
                    console.log('data', data)
                    //return ({comments:comments});//correcto
                }
                default:
                {
                    //otro error
                    return ({score:3});                
                }
            }
    }
    catch(error)
    {
        console.log("error",error);
    };
}