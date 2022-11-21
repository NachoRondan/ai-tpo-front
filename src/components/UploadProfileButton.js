import * as React from 'react';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { Button, Stack, Avatar } from '@mui/material';
import { updateProfilePicture } from '../controllers/userController';


export const UploadPictureButton=({user})=>{


  const handleUpload = (e) => {
    let files = e.target.files;
    let titles=[];
    let archivoImagen = '';
    if (files.length !== 0)
    {
      
      let archivoOrig = files[0].name;
      let posExt = archivoOrig.indexOf('.');
      let extension = archivoOrig.substring(posExt,archivoOrig.length);
      let aleatorio = Math.random().toString().substring(2,15);
      titles.push("profile_"+aleatorio+extension);
      //subir archivo a servidor
      archivoImagen = uploadFileImg(files,titles);
      
    }
  }

  const uploadFileImg = async function (files,titles) {
    return updateProfilePicture(files,titles)
  }

  return (
    <Stack direction='row' justifyContent="space-between">
      <Avatar sx={{display:{xs: 'block', lg:'block'}}} src={user.picture} aria-label="recipe"/>
      <Button variant="contained" color='secondary' startIcon={<PhotoCamera/>} component="label">
          Cargar
          <input onChange={handleUpload} hidden accept="image/*" multiple type="file" />
      </Button>    
    </Stack>  
  )}