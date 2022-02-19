import { Box } from "@mui/system";

function MockUp() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "white",
          border: "1px solid rgba(0, 0, 0, 0.12)",
          borderRadius: 2,
          width: "50%",
          p: 2,
        }}
      >
        <Box
          component="img"
          src="https://assets.maccarianagency.com/screenshots/software-desktop.png"
          sx={{ width: "100%", border: "1px solid rgba(0, 0, 0, 0.12)" }}
        />
      </Box>
      <Box
        sx={{
          border: "1px solid rgba(0, 0, 0, 0.12)",
          maxWidth: "250px",
          p: 2,
          backgroundColor: "white",
          borderRadius: "12px",
          zIndex: 1,
          ml: "-96px",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src="https://assets.maccarianagency.com/screenshots/software-mobile.png"
          sx={{ width: "100%", border: "1px solid rgba(0, 0, 0, 0.12)" }}
        />
      </Box>
    </>
  );
}

export default MockUp;
