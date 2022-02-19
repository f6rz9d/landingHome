
import { Avatar, Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';


type exType = {
  title: string;
  description: string;
  iconAddress: string;
}

function ExtensionCard(props:exType) {
  return (
   <Grid item xs={12} sm={6} md={4} sx={{"&:hover":{transform:"translateY(-4px)"}, transition:".3s"}} >
     <Grid sx={{ boxShadow: 1, p:2, borderRadius: 3, backgroundColor: "white" }}>
     <Avatar sx={{width:"90px", height:"90px"}} src={props.iconAddress} />
     <Typography variant="h6">{props.title}</Typography>
     <Typography sx={{mb:1}} variant="body1">{props.description}</Typography>
     <Button color="success" fullWidth variant="contained" sx={{textTransform:"none"}}>Install</Button>
     </Grid>
   </Grid>
  );
}

export default ExtensionCard;