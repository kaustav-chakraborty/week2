import React from "react"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';

function Singup(){
    return <div>
        <center>
        <div style={{
            marginTop:150,
            marginBottom:10
        }}>
            Welcome to Ilora's Only fans
        </div>
        </center>
        <center><Card variant="outlined" style={{width:400,padding:20}}>
         <TextField fullWidth={true} id="outlined-basic" label="Email" variant="outlined" />
        <br />
        <TextField fullWidth={true} id="outlined-basic" label="Password" variant="outlined" />
        <br />
        <Button variant="contained">Sign up</Button>

        </Card>
    </center>
    </div>
}
export default Singup