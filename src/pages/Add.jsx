import {Button, TextField} from '@mui/material';
import axios from 'axios';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { loginFormSchema } from '../schema/formSchema';

const Add = () => {
  const [data, setData] = useState ({
    name: '',
    unitPrice: undefined,
    unitsInStock: undefined,
  });
  const {register, handleSubmit, formState: {errors}} = useForm ({
    resolver: yupResolver (loginFormSchema),
  });
  const handleChange = (e) => {
    e.preventDefault()
    setData ({...data, [e.target.name]: e.target.value});
  };

  
  const formSubmit = () => {
    const URL = 'https://northwind.vercel.app/api/products';
    axios.post (URL, data);
    console.log(data);
  };
  return (
    <div
      style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
    >
      <h1>Product Description</h1>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 20,
        }}
      >
        <TextField
          id="outlined-basic"
          name="name"
          label="Name"
          onChange={(e)=> handleChange (e)}
          variant="outlined"
          {...register("name")}
        />
         {errors.name ? (
                <span style={{ color: "red" }}>{errors.name.message}</span>
            ) : (
                <></>
            )}
        <TextField
          id="outlined-basic"
          name="unitPrice"
          label="unitPrice"
          onChange={(e)=> handleChange (e)}
          variant="outlined"
          {...register("unitPrice")}
        />
        {errors.unitPrice ? (
                <span style={{ color: "red" }}>{errors.unitPrice.message}</span>
            ) : (
                <></>
            )}
        <TextField
          id="outlined-basic"
          name="unitsInStock"
          label="unitsInStock"
          onChange={(e) => handleChange (e)}
          variant="outlined"
          {...register("unitsInStock")}
        />
        {errors.unitsInStock ? (
                <span style={{ color: "red" }}>{errors.unitsInStock.message}</span>
            ) : (
                <></>
            )}
        <Button
          variant="contained"
          color="success"
          onClick={handleSubmit(formSubmit)}
        >
          Add
        </Button>
      </form>
    </div>
  );
};

export default Add;
