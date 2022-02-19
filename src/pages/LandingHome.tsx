import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { relative } from "path/posix";
import ExtensionCards from "../sections/ExtensionCard/ExtensionCards";
import FeatureCards from "../sections/Features/FeatureCards";
import Footer from "../sections/Footer/Footer";
import Hero from "../sections/Hero/Hero";
import Mockup from "../sections/Mockup/MockUp";
import Pricing from "../sections/Pricing/Pricing";
import Subscribers from "../sections/Subscribers/Subscribers";
import Testimonials from "../sections/Testimonials/Testimonials";

function LandingHome() {
  return (
    <>
      <Box sx={{ backgroundColor: "#F7F9FC", py: 4 }}>
        <Hero />
      </Box>
      <Box
        sx={{
          backgroundColor: "#F7F9FC",
          borderBottomLeftRadius:"100%", borderBottomRightRadius:"100%",width: "100%", mb:10}}
      >
        <Container sx={{position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "baseline"}}>
        <Mockup />
        </Container>
      </Box>
      <Box sx={{ py: 4 }}>
        <Container>
          <Typography
            variant="body1"
            sx={{ color: "#F8C734", textAlign: "center" }}
          >
            FEATURES
          </Typography>
          <Typography
            variant="h3"
            sx={{ color: "#2D3748", textAlign: "center", fontWeight: "bold", my:2 }}
          >
            The features make the difference
          </Typography>
          <FeatureCards />
        </Container>
      </Box>
      <Box sx={{ backgroundColor: "#F7F9FC", py: 4 }}>
        <Container>
          <Typography
            variant="body1"
            sx={{ color: "#F8C734", textAlign: "center", mb: 1 }}
          >
            EXTENSIONS
          </Typography>
          <Typography
            variant="h3"
            sx={{ color: "#2D3748", textAlign: "center", fontWeight: "bold" }}
          >
            <Box>Extensions and plugins</Box>
            <Box>to connected with you favorite apps</Box>
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "#646E73", textAlign: "center", my: 3 }}
          >
            Install external apps, services, plugins on your own infrastructure.
          </Typography>
          <ExtensionCards />
        </Container>
      </Box>
      <Container sx={{my:4}}>
      <Typography
            variant="body1"
            sx={{ color: "#F8C734", textAlign: "center", mb: 1 }}
          >
            PRICING
          </Typography>
          <Typography
            variant="h3"
            sx={{ color: "#2D3748", textAlign: "center", fontWeight: "bold" }}
          >
            Flexible and transparent pricing
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "#646E73", textAlign: "center", my: 2 }}
          >
            Whatever your status, our offers evolve according to your needs.
          </Typography>
          <Pricing />
      </Container>
      <Box sx={{backgroundColor: "#F7F9FC", py:4}}>
      <Container>
          <Typography
            variant="body1"
            sx={{ color: "#F8C734", textAlign: "center", mb: 1 }}
          >
            TESTIMONIALS
          </Typography>
          <Typography
            variant="h3"
            sx={{ color: "#2D3748", textAlign: "center", fontWeight: "bold" }}
          >
            Don't take word for it
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "#646E73", textAlign: "center"}}
          >
            See what our amazing past clients have to say about the work done by us
          </Typography>
          <Testimonials />
        </Container>
      </Box>
      <Box sx={{backgroundColor:"#009357", py:4}}>
        <Container>
          <Typography variant="h5" sx={{color:"white", fontWeight:"bold"}}>
          Learn how to build better websites
          </Typography>
          <Typography sx={{my:1, color:"white"}}>
          Over 300 stand-alone atomic components that will help you to boost your frontend development productivity.
          </Typography>
        <Subscribers />
        </Container>
      </Box>
      <Container>
        <Footer />
      </Container>
    </>
  );
}

export default LandingHome;
