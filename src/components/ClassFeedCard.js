import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import Calification from './Calification';


export default function ClassFeedCard(props) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title={props.course.className}
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
  );
}
