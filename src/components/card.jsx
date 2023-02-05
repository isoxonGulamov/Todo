import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteUser } from '../redux/redusers/future'
import { useForm } from 'react-hook-form';
import { editUser } from '../redux/redusers/future';
import { Button, Stack, TextField,Typography } from '@mui/material';
export const Card = (user) => {
  const { handleSubmit, reset, register, formState:{ errors } } = useForm()
  const dispatch = useDispatch()
  const deleteItem = (id)=>{
    dispatch(deleteUser(id))
      
  }

  const [changeInput,setchangeInput] = React.useState(false)
const submit = (data)=>{
 setchangeInput(false)
dispatch(editUser({...data,id:user.id}))
reset()
}
  return (
    <>
     {
      !changeInput ?
      <div className='User_Box' >

      <Typography variant='h3' >
       <span>Name:</span>
       <span style={{color:"#66ffff"}}>{user.name}</span>
       </Typography>
      <Typography variant='h4' >
       <span >Age:</span>
       <span  style={{color:"chocolate"}}>{user.age}</span>
       </Typography>
      <Typography variant='h5' >
       <span>Phone:</span>
       <span style={{color:"blue"}}>{user.phone}</span>
       </Typography>
       <Button onClick={()=> setchangeInput(!false)} variant="contained" color="secondary" style={{marginRight:"10px",marginTop:"7px"}}>Edit</Button>
       <Button onClick={()=> deleteItem(user.id)} variant='outlined' color='error' style={{marginTop:"7px"}}>Delete</Button>

 </div>
 :
 <form  className='form2'  onSubmit={handleSubmit(submit)} >
 <Stack style={{maxWidth:"300px",maxHeight:"100px"}} gap="20px" direction="column">
   <TextField defaultValue={user.name} helperText={errors.name ? "Qiymat kiriting !" : ""} error={errors.name ? true : false} {...register("name", { required: true })} label="Name" placeholder='FirstName'  />
   <TextField defaultValue={user.age} helperText={errors.age ? "Qiymat kiriting !" : ""} error={errors.age ? true : false} {...register("age", { required: true })} label="Age" placeholder='YourAge' />
   <TextField defaultValue={user.phone} helperText={errors.phone ? "Qiymat kiriting !" : ""} error={errors.phone ? true : false} {...register("phone", { required: true })} label="Phone" placeholder='YourPhone' />
   <Button  variant="contained" type='submit'>Send</Button>
 </Stack>
</form>
     }
    </>
  )
}
 