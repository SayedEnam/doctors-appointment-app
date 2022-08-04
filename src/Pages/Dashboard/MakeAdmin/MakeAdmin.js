import { Box, Button, TextField } from "@mui/material";
import * as React from "react";
const MakeAdmin = () => {
        const [email, setEmail] = React.useState('')
        const handleBlur = e =>{
            setEmail(e.target.value)
        }

    const onSubmitform = (e) =>{
        const user = {email}
        fetch("http://localhost:5000/users/admin", {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
        })
        e.preventDefault();
    }
    return ( 
    <Box sx={{ display: 'grid' }} mt={20}>
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
    </Box>
     );
}
 
export default MakeAdmin ;