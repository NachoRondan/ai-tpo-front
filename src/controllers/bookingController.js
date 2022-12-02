import urlWebServices from './webServices.js';

//COURSE
export const bookCourse = async function(course)
{
    //url webservices
    let url = urlWebServices.bookCourse;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('courseId', course.courseId);
    formData.append('professorId', course.professorId);
    formData.append('contactNumber', course.phoneNumber);
    formData.append('contactEmail', course.email);
    formData.append('availability', course.availability);
    formData.append('interestMessage', course.message);
    formData.append('studentName', course.studentName);

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
                    return ({rdo:0,course:data.createdBooking,mensaje:"Reserva creada con exito!"});//correcto
                }
                case 501:
                {
                    return ({rdo:1,mensaje:"Debe estar logeado con su usuario para poder resrvar una clase!"});//correcto
                }
                default:
                {
                    //otro error
                    return ({rdo:2,mensaje:"Ha ocurrido un error"});                
                }
            }
    }
    catch(error)
    {
        console.log("error",error);
    };
}

export const getProfessorBokings = async function()
{
    //url webservices
    let url = urlWebServices.getAllMyProfessorBookings;

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
                    var bookings = []
                    data.bookings.forEach(c => {
                        bookings.push(
                            {
                                comment: c.interestMessage,
                                userName: c.studentName,
                                studentEmail: c.contactEmail,
                                studentNumber: c.contactNumber,
                                status: c.status,
                                availability: c.availability,
                                bookingId:c._id,
                            }
                        )
                    });
                    return ({bookings:bookings});//correcto
                }
                default:
                {
                    //otro error
                    return ({bookings:[]});                
                }
            }
    }
    catch(error)
    {
        console.log("error",error);
    };
}

export const updateBookingStatus = async function(booking)
{
    //url webservices
    let url = urlWebServices.updateBooking + booking.bookingId;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('status', booking.status);

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
                    return ({rdo:0, data: data, mensaje:"Contratacion actualizada!"});//correcto
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