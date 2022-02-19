import { Box, Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

function Subscribers() {
  return (
    <Box sx={{backgroundColor:"white", width:"40%", borderRadius:1, p:3}}>
      <Typography sx={{mb:1}}>Join over 5000 subscribers for our newsletter</Typography>
      <Box sx={{display:"flex", justifyContent:"space-between"}}>
      <TextField color="success" fullWidth sx={{backgroundColor:"white"}} id="outlined-basic" label="Enter your email" variant="outlined" />
      <Button
        color="success"
        variant="contained"
        sx={{ backgroundColor: "#00AB55", ml:4, textTransform:"none"}}
      >
        Subscribe
      </Button>
      </Box>
    </Box>
  );
}

export default Subscribers;
