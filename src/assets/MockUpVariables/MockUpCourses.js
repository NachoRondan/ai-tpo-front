import BBDDPicture from '../MockUpFiles/base_de_datos.jpg'
import ScrumPicture from '../MockUpFiles/scrum.jpg'
import ExcelPicture from '../MockUpFiles/excel.jpg'
import WordPicture from '../MockUpFiles/word.png'

export default function getCourses(){
    const courses = [
        {
            courseTitle:'Bases de Datos 1',
            courseId:1,
            profesorId:1,
            calification:4.5,
            picture: BBDDPicture,
            classType:'Individual',
            price:100,
            frecuency: 'Mensual',
            description:'Una descripcion',
            subjects:['Bases de Datos','SQL'],    
        },
        {
            courseTitle:'Scrum Masterclass',
            courseId:2,
            profesorId:2,
            calification:1.7,
            picture: ScrumPicture,
            classType:'Grupal',
            price:100,
            frecuency: 'Unica',
            description:'Una descripcion',
            subjects:['Metodologias Agiles','Scrum']
        },
        {
            courseTitle:'Microsoft Excel',
            courseId:3,
            profesorId:3,
            calification:3.4,
            picture: ExcelPicture,
            classType:'Individual',
            price:100,
            frecuency: 'Semanal',
            description:'Una descripcion',
            subjects:['Microsoft Office','Excel']
    
        },
        {
            courseTitle:'Microsoft Word',
            courseId:4,
            profesorId:3,
            calification:4,
            picture: WordPicture,
            classType:'Individual',
            price:100,
            frecuency: 'Semanal',
            description:'Una descripcion',
            subjects:['Microsoft Office','Word']
        },
        {
            courseTitle:'Bases de Datos 1',
            courseId:1,
            profesorId:1,
            calification:4.5,
            picture: BBDDPicture,
            classType:'Individual',
            price:100,
            frecuency: 'Mensual',
            description:'Una descripcion',
            subjects:['Bases de Datos','SQL'],    
        },
        {
            courseTitle:'Scrum Masterclass',
            courseId:2,
            profesorId:2,
            calification:1.7,
            picture: ScrumPicture,
            classType:'Grupal',
            price:100,
            frecuency: 'Unica',
            description:'Una descripcion',
            subjects:['Metodologias Agiles','Scrum']
        },
        {
            courseTitle:'Microsoft Excel',
            courseId:3,
            profesorId:3,
            calification:3.4,
            picture: ExcelPicture,
            classType:'Individual',
            price:100,
            frecuency: 'Semanal',
            description:'Una descripcion',
            subjects:['Microsoft Office','Excel']
    
        },
        {
            courseTitle:'Microsoft Word',
            courseId:4,
            profesorId:3,
            calification:4,
            picture: WordPicture,
            classType:'Individual',
            price:100,
            frecuency: 'Semanal',
            description:'Una descripcion',
            subjects:['Microsoft Office','Word']
        },
        {
            courseTitle:'Bases de Datos 1',
            courseId:1,
            profesorId:1,
            calification:4.5,
            picture: BBDDPicture,
            classType:'Individual',
            price:100,
            frecuency: 'Mensual',
            description:'Una descripcion',
            subjects:['Bases de Datos','SQL'],    
        },
        {
            courseTitle:'Scrum Masterclass',
            courseId:2,
            profesorId:2,
            calification:1.7,
            picture: ScrumPicture,
            classType:'Grupal',
            price:100,
            frecuency: 'Unica',
            description:'Una descripcion',
            subjects:['Metodologias Agiles','Scrum']
        },
        {
            courseTitle:'Microsoft Excel',
            courseId:3,
            profesorId:3,
            calification:3.4,
            picture: ExcelPicture,
            classType:'Individual',
            price:100,
            frecuency: 'Semanal',
            description:'Una descripcion',
            subjects:['Microsoft Office','Excel']
    
        },
        {
            courseTitle:'Microsoft Word',
            courseId:4,
            profesorId:3,
            calification:4,
            picture: WordPicture,
            classType:'Individual',
            price:100,
            frecuency: 'Semanal',
            description:'Una descripcion',
            subjects:['Microsoft Office','Word']
        },
    ]

    return courses
}

