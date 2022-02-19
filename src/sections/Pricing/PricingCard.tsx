import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

type priceType = {
  title: string;
  price: number;
  subtitle: string;
  user: string;
  app: string;
  integration: string;
  ads: string;
  sso: string;
  api: string;
  textBtn:string;
  facebook: string;
  variantBtn: boolean;
  adsActive: boolean;
  ssoActive: boolean;
  apiActive: boolean;
  facebookActive: boolean;
};

function PricingCard(props: priceType) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Box
        sx={{
          backgroundColor: "white",
          border: "1px solid #E0E0E0",
          borderRadius: 3,
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            mt: 2,
            fontWeight: "bold",
            color: "#2D3748",
          }}
          variant="h6"
        >
          {props.title}
        </Typography>
        <Typography sx={{ textAlign: "center", my: 2, color:"#00AB55", fontWeight:600 }} variant="h2">
          <Box component="sup">
            $
          </Box>
          {props.price}
        </Typography>
        <Typography sx={{ textAlign: "center", my: 2 }} variant="body2">
          {props.subtitle}
        </Typography>
        <Typography sx={{ textAlign: "center", my: 2 }} variant="body1">
          {props.user}
        </Typography>
        <Typography sx={{ textAlign: "center", my: 2 }} variant="body1">
          {props.app}
        </Typography>
        <Typography sx={{ textAlign: "center", my: 2 }} variant="body1">
          {props.integration}
        </Typography>
        <Typography sx={{ textAlign: "center", my: 2, textDecoration:props.adsActive ? "line-through" : "none" }} variant="body1">
          {props.ads}
        </Typography>
        <Typography sx={{ textAlign: "center", my: 2, textDecoration:props.ssoActive ? "line-through" : "none"  }} variant="body1">
          {props.sso}
        </Typography>
        <Typography sx={{ textAlign: "center", textDecoration:props.apiActive ? "line-through" : "none" }} variant="body1">
          {props.api}
        </Typography>
        <Typography sx={{ textAlign: "center", my: 2, textDecoration:props.facebookActive ? "line-through" : "none" }} variant="body1">
          {props.facebook}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 5, mb: 3 }}>
          <Button
          color="success"
          variant={props.variantBtn ? "contained" : "outlined"}
            sx={{textTransform:"none" }}
          >
            {props.textBtn}
          </Button>
        </Box>
      </Box>
    </Grid>
  );
}

export default PricingCard;
