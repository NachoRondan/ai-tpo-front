import User1Picture from '../MockUpFiles/user1.jpg'
import User2Picture from '../MockUpFiles/user2.jpg'
import User3Picture from '../MockUpFiles/user3.jpg'

export default function getUsers(){
    const users=[
        {
            name:'Pedro',
            lastname: 'Saidi',
            email: 'user1@gmail.com',
            password: 'pass1',
            userId: 1,
            picture: User1Picture,
            cursos:[1],    
            contrataciones:[],    
        },
        {
            name:'Santiago',
            lastname: 'Rodriguez',
            email: 'user2@gmail.com',
            password: 'pass2',
            userId: 2,
            picture: User2Picture,
            cursos:[2],    
            contrataciones:[],    
        },
        {
            name:'Paola',
            lastname: 'Santos',
            email: 'user3@gmail.com',
            password: 'pass3',
            userId: 3,
            picture: User3Picture,
            cursos:[2],    
            contrataciones:[],    
        },
    ]
    
    return users
}

