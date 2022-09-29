import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Calification from './Calification';
import { Link } from 'react-router-dom';

export default function ClassFeedCard(props) {
  
  return (
    <Link to={'/clase/'+ props.course.courseId} style={{ textDecoration: 'none', color: 'unset' }}>
    <Card sx={{ maxWidth: 345, maxHeight: 310 }}>
      <CardHeader
        avatar={
          <Avatar sx={{display:{xs: 'block', lg:'block'}}} src={props.profesor.picture} aria-label="recipe"/>
        }
        title={props.course.courseTitle}
        subheader={props.profesor.name + ' ' + props.profesor.lastname}
        subheaderTypographyProps={{display:{xs: 'block', sm:'none', lg:'block'}}}
      />
      <CardMedia
        component="img"
        height="150"
        image={props.course.picture}
      />
      <CardActions disableSpacing>
          <Calification calification={props.course.calification} />
      </CardActions>
    </Card>
    </Link>
  );
}
