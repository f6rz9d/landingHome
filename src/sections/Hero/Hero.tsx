import { Box, Button, Typography } from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

function Hero() {
  return (
    <>
      <Typography
        variant="h3"
        sx={{ color: "#2D3748", textAlign: "center", fontWeight: "bold" }}
      >
        <Box
          sx={{
            "&media(max-width:367px)": {
              lineHeight: 1.6,
              textAlign: "center",
              mb: 3,
              mt: 3,
            },
          }}
        >
          Build beautiful landing pages
        </Box>
        <Box
          sx={{
            "&media(max-width:367px)": {
              lineHeight: 1.6,
              textAlign: "center",
              mb: 3,
              mt: 3,
            },
          }}
        >
          fast and easy
        </Box>
      </Typography>
      <Typography
        variant="h6"
        sx={{ color: "#646E73", textAlign: "center", my: 3 }}
      >
        We make designing easy and performance fast
      </Typography>
      <Box sx={{ textAlign: "center" }}>
        <Button
          color="success"
          variant="contained"
          sx={{ backgroundColor: "#00AB55" }}
        >
          <FileDownloadOutlinedIcon />
          Download now
        </Button>
        <Button
          color="success"
          sx={{ borderColor: "#7BD2A9", color: "#7BD2A9", ml: 1 }}
          variant="outlined"
        >
          Learn more
        </Button>
      </Box>
    </>
  );
}

export default Hero;
