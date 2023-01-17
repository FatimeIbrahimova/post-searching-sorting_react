import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar sx={{
                        background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(188,183,236,1) 41%, rgba(31,110,203,1) 100%)"
                    }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Link to="/">Home</Link>
                        </Typography>
                        <Link to="/add"><Button color="inherit">Add</Button></Link>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default Navbar