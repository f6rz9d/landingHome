import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";

type testimonialsType = {
  text: string;
  name: string;
  job: string;
  avatarAddress: string;
};

function TestimonialsSlider(props: testimonialsType) {
  return (
    <Box sx={{ backgroundColor: "white", m:1, p:3, borderRadius:3 }}>
      {props.text}
      <Box sx={{ display: "flex" , gap:1, mt:2 }}>
        <Avatar src={props.avatarAddress} />
        <Box>
        <Typography>{props.name}</Typography>
        <Typography variant="body2">{props.job}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default TestimonialsSlider;
