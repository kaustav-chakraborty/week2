import React from "react";
const { Typography, Button } = require("@mui/material");

function Appbar(){
    return( <div>
        <Typography>Coursera</Typography>
        <Button>Signup</Button>
        <Button>SignIn</Button>
    </div>
    )
}
export default Appbar;