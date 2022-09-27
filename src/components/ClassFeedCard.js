import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import Calification from './Calification';
import { Link } from 'react-router-dom';

export default function ClassFeedCard(props) {
  
  return (
    <Link to={'clase/'+ props.course.courseId} style={{ textDecoration: 'none', color: 'unset' }}>
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar src={props.profesor.picture} sx={{ bgcolor: red[500] }} aria-label="recipe"/>
        }
        title={props.course.className}
        subheader={props.profesor.name + ' ' + props.profesor.lastname}
      />
      <CardMedia
        component="img"
        height="194"
        image={props.course.picture}
      />
      <CardActions disableSpacing>
          <Calification calification={props.course.calification} />
      </CardActions>
    </Card>
    </Link>
  );
}
