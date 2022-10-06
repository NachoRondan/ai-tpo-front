import User1Picture from '../MockUpFiles/user1.jpg'
import User2Picture from '../MockUpFiles/user2.jpg'
import User3Picture from '../MockUpFiles/user3.jpg'

export default function getUsers(){
    const users=[
        {
            name:'Pedro',
            lastname: 'Saidi',
            email: 'user1@gmail.com',
            birthday: '23/05/1997',
            password: 'pass1',
            userId: 1,
            picture: User1Picture,
            finishedStudies:['Primario','Secundario','Universitario'],
            onGoingStudies:['Terciario'],
            workExperience:['Profesor Universitario','Administrador de Bases de Datos'],
            courses:[1],
            educationTitles:['Ing. En Sistemas','Cloud Practitioner - AWS'],    
            contrataciones:[],    
        },
        {
            name:'Santiago',
            lastname: 'Rodriguez',
            email: 'user2@gmail.com',
            birthday: '23/05/1997',
            password: 'pass2',
            userId: 2,
            picture: User2Picture,
            courses:[2],    
            contrataciones:[],    
        },
        {
            name:'Paola',
            lastname: 'Santos',
            email: 'user3@gmail.com',
            birthday: '23/05/1997',
            password: 'pass3',
            userId: 3,
            picture: User3Picture,
            courses:[2],    
            contrataciones:[],    
        },
    ]
    
    return users
}

