import { useForm } from 'react-hook-form';
import { Button, Stack, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Card } from './components/card';
import './App.css';
import { Container } from '@mui/system';
import { addTodo } from './redux/redusers/future';
import { nanoid } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
function App() {
  const { handleSubmit, reset, register, formState: { errors } } = useForm()

  const dispatch = useDispatch()
  const { users } = useSelector((state) => state.todo)

  const submit = (data) => {
    dispatch(addTodo({ ...data, id: nanoid() }))
    reset()
  }
  return (
    <>

      <div className='container'>

        <div className='Megic_Box'>
          <div className='Box'>
            {users?.map((el) => {
              return <Card key={el.id} {...el} />
            })}
          </div>
          <form className='form'  onSubmit={handleSubmit(submit)}>
            <Stack  direction={"row"} gap="10px">
              <TextField helperText={errors.name ? "Qiymat kiriting !" : ""} error={errors.name ? true : false} {...register("name", { required: true })} label="Name" placeholder='FirstName' />
              <TextField helperText={errors.age ? "Qiymat kiriting !" : ""} error={errors.age ? true : false} {...register("age", { required: true })} label="Age" placeholder='YourAge' />
              <TextField helperText={errors.phone ? "Qiymat kiriting !" : ""} error={errors.phone ? true : false} {...register("phone", { required: true })} label="Phone" placeholder='YourPhone' />
              <Button variant="contained" type='submit'>Send</Button>
            </Stack>
          </form>


        </div>
      </div>

    </>
  );
}

export default App;
