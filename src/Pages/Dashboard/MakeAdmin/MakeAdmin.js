import { Alert, Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";


const MakeAdmin = () => {
        const [email, setEmail] = useState('')
        const [success, setSuccess] = useState(false)
        const {token} = useAuth();


        const handleBlur = e =>{
            setEmail(e.target.value)
        }

    const onSubmitform = (e) =>{
        const user = {email}
        fetch("http://localhost:5000/users/admin", {
            method: "PUT",
            headers: {
                "authorization": `Bearer ${token}`,
                "content-type": "application/json",
            },
            body: JSON.stringify(user)
        })
        .then(res=> res.json())
        .then(data=> {
            if(data.modifiedCount){
                console.log(data)
                setEmail('')
                setSuccess(true)
            }

        })
        e.preventDefault();
    }
    return ( 
        <Container fixed>
    <Box sx={{ 
        display: 'grid',
        width: '75%',
        textAlign: 'center',
        mx: 'auto',
         }} 
         mt={20}
         
         >
        <h2> Make an Admin</h2>
        <form onSubmit={onSubmitform}>
        <TextField 
        id="standard-basic" 
        label="Email" 
        variant="standard" 
        type="email"
        onBlur={handleBlur}
    
        />
        <Button type="submit" variant="contained">Make a Admin</Button>
        </form> 
        <Typography variant="subtitle1" component="div">
        {success && <Alert severity="success">Your Made an Admin!!</Alert>} 
        </Typography>
          
    </Box>
    </Container>
     );
}
 
export default MakeAdmin ;