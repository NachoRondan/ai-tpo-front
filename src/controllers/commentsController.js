import urlWebServices from './webServices.js';

export const getCourseComments = async function(courseId)
{
    //url webservices
    let url = urlWebServices.getCourseComments + courseId;
    console.log('url',url)
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
                    var comments = []
                    data.comments.forEach(c => {
                        comments.push(c)
                    });
                    return ({comments:comments});//correcto
                }
                default:
                {
                    //otro error
                    return ({comments:[]});                
                }
            }
    }
    catch(error)
    {
        console.log("error",error);
    };
}

export const postComment = async function(commentData)
{
    //url webservices
    let url = urlWebServices.postComment;
    const formData = new URLSearchParams();
    formData.append('commentText', commentData.commentText);
    formData.append('courseId', commentData.courseId);
    formData.append('studentAuthor', commentData.studentAuthor);

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
                    return ({mensaje:"Comentario enviado al profesor!"});//correcto
                }
                default:
                {
                    //otro error
                    return ({mensaje:"Ocurrio un error enviando el comentario!"});                
                }
            }
    }
    catch(error)
    {
        console.log("error",error);
    };
}