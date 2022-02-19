import {Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';

type featureType = {
  title: string;
  description: string;
}

function FeatureCard(props:featureType) {
  return (
    <Grid item xs={12} sm={6} md={4}>
    <Box sx={{"&:hover":{transform:"translateY(-4px)"}, transition:".3s", minHeight:"230px"}}>
    <Grid sx={{ boxShadow: 1, p:2, borderRadius: 3, backgroundColor: "white" }}>
    <Typography variant="h6">{props.title}</Typography>
    <Typography sx={{mb:1, minHeight:"90px"}} variant="body1">{props.description}</Typography>
    <Box sx={{display:"flex", justifyContent:"flex-end"}}>
    <Button variant="text" sx={{textTransform:"none", color:"#00AB55"}}>Learn More</Button>
    </Box>
    </Grid>
    </Box>
  </Grid>
  );
}

export default FeatureCard;