import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import { Link } from 'react-router-dom';
// import Modal from './Modal';
import Modal from "../components/Modal"

const MyCard = ({data}) => {
    const [isOpen,setOpen]=useState(false)
  return (
    <div>
        {/* <Grid item md={3}> */}
            <Card style={{border:"2px solid red",marginBottom:30,maxWidth:345,marginLeft:70}}>
                <CardContent>
                   
                    <Typography variant="body2">
                        {data.name}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={`${data.id}`}><Button onClick={<Modal isOpen={isOpen} setOpen={setOpen}/>} size="small">Detail of {data.name}</Button></Link>
                </CardActions>
            </Card>
            {/* </Grid> */}
    </div>
  )
}

export default MyCard