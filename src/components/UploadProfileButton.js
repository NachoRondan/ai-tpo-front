import * as React from 'react';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { Button, Stack, Avatar } from '@mui/material';
import { updateProfilePicture } from '../controllers/userController';
import { useState } from "react";


export const UploadPictureButton=({user, setUser})=>{

  const [picture, setPicture] = useState(user.picture ? user.picture : '')

  const asyncSetPicture = async function (imgUrl){
    setPicture(imgUrl)
    var newUser = user
    newUser.picture = imgUrl
    setUser(newUser)
    console.log('newUser',newUser)
    return 'Archivo cargado correctamente!'
  }

  const handleUpload = (e) => {
    let files = e.target.files;
    let titles=[];
    
    if (files.length !== 0)
    {
      let archivoOrig = files[0].name;
      let posExt = archivoOrig.indexOf('.');
      let extension = archivoOrig.substring(posExt,archivoOrig.length);
      let aleatorio = Math.random().toString().substring(2,15);
      titles.push("profile_"+aleatorio+extension);
      //subir archivo a servidor
      uploadFileImg(files,titles);
      
    }
  }

  const uploadFileImg = async function (files,titles) {
    var response = await updateProfilePicture(files,titles)
    console.log('response',response)
    var message = await asyncSetPicture(response.imgUrl)
    alert(message)
  }

  return (
    <Stack direction='row' justifyContent="space-between">
      <Avatar src={picture} aria-label="recipe" sx={{ width: 50, height: 50 }}/>
      <Button sx={{ width: 111, height: 38 }} variant="contained" color='secondary' startIcon={<PhotoCamera/>} component="label">
          Cargar
          <input onChange={handleUpload} hidden accept="image/*" multiple type="file" />
      </Button>    
    </Stack>  
  )}