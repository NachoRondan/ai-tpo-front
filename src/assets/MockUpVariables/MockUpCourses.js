import BBDDPicture from '../MockUpFiles/base_de_datos.jpg'
import ScrumPicture from '../MockUpFiles/scrum.jpg'
import ExcelPicture from '../MockUpFiles/excel.jpg'
import WordPicture from '../MockUpFiles/word.png'

export default function getCourses(){
    const courses = [
        {
            className:'Bases de Datos 1',
            courseId:1,
            profesorId:1,
            calification:4.5,
            picture: BBDDPicture,
            classType:'Individal',
            frecuency: 'Mensual',
            subjects:['Bases de Datos','SQL'],    
        },
        {
            className:'Scrum Masterclass',
            courseId:2,
            profesorId:2,
            calification:1.7,
            picture: ScrumPicture,
            classType:'Grupal',
            frecuency: 'Unica',
            subjects:['Metodologias Agiles','Scrum']
        },
        {
            className:'Microsoft Excel',
            courseId:3,
            profesorId:3,
            calification:3.4,
            picture: ExcelPicture,
            classType:'Individal',
            frecuency: 'Semanal',
            subjects:['Microsoft Office','Excel']
    
        },
        {
            className:'Microsoft Word',
            courseId:4,
            profesorId:3,
            calification:4,
            picture: WordPicture,
            classType:'Individal',
            frecuency: 'Semanal',
            subjects:['Microsoft Office','Word']
        },
        {
            className:'Bases de Datos 1',
            courseId:1,
            profesorId:1,
            calification:4.5,
            picture: BBDDPicture,
            classType:'Individal',
            frecuency: 'Mensual',
            subjects:['Bases de Datos','SQL'],    
        },
        {
            className:'Scrum Masterclass',
            courseId:2,
            profesorId:2,
            calification:1.7,
            picture: ScrumPicture,
            classType:'Grupal',
            frecuency: 'Unica',
            subjects:['Metodologias Agiles','Scrum']
        },
        {
            className:'Microsoft Excel',
            courseId:3,
            profesorId:3,
            calification:3.4,
            picture: ExcelPicture,
            classType:'Individal',
            frecuency: 'Semanal',
            subjects:['Microsoft Office','Excel']
    
        },
        {
            className:'Microsoft Word',
            courseId:4,
            profesorId:3,
            calification:4,
            picture: WordPicture,
            classType:'Individal',
            frecuency: 'Semanal',
            subjects:['Microsoft Office','Word']
        },
        {
            className:'Bases de Datos 1',
            courseId:1,
            profesorId:1,
            calification:4.5,
            picture: BBDDPicture,
            classType:'Individal',
            frecuency: 'Mensual',
            subjects:['Bases de Datos','SQL'],    
        },
        {
            className:'Scrum Masterclass',
            courseId:2,
            profesorId:2,
            calification:1.7,
            picture: ScrumPicture,
            classType:'Grupal',
            frecuency: 'Unica',
            subjects:['Metodologias Agiles','Scrum']
        },
        {
            className:'Microsoft Excel',
            courseId:3,
            profesorId:3,
            calification:3.4,
            picture: ExcelPicture,
            classType:'Individal',
            frecuency: 'Semanal',
            subjects:['Microsoft Office','Excel']
    
        },
        {
            className:'Microsoft Word',
            courseId:4,
            profesorId:3,
            calification:4,
            picture: WordPicture,
            classType:'Individal',
            frecuency: 'Semanal',
            subjects:['Microsoft Office','Word']
        },
    ]

    return courses
}

