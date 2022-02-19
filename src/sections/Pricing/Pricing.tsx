import PricingCard from "./PricingCard";
import Grid from "@mui/material/Grid";

const pricingCard = [
  {
    title: "Basic",
    price: 22,
    subtitle: "Per user, per month",
    user: "1 User",
    app: "1 App",
    integration: "Integrations",
    ads: "Google Ads",
    sso: "SSO via Google",
    api: "API access",
    facebook: "Facebook Ads",
    adsActive:true,
    ssoActive:true,
    apiActive:true,
    facebookActive:true,
    textBtn: "Get basic",
    variantBtn:false
  },
  {
    title: "Professional",
    price: 44,
    subtitle: "Per user, per month",
    user: "1 User",
    app: "1 App",
    integration: "Integrations",
    ads: "Google Ads",
    sso: "SSO via Google",
    api: "API access",
    facebook: "Facebook Ads",
    adsActive:false,
    ssoActive:false,
    apiActive:true,
    facebookActive:true,
    textBtn: "Get pro",
    variantBtn:true
  },
  {
    title: "Commercial",
    price: 77,
    subtitle: "Per user, per month",
    user: "1 User",
    app: "1 App",
    integration: "Integrations",
    ads: "Google Ads",
    sso: "SSO via Google",
    api: "API access",
    facebook: "Facebook Ads",
    adsActive:false,
    ssoActive:false,
    apiActive:false,
    facebookActive:false, 
    textBtn: "Contact us",
    variantBtn:false
  },
];

function Pricing() {
  return (
    <Grid container spacing={3}>
      {pricingCard.map((item) => (
        <PricingCard
          title={item.title}
          price={item.price}
          subtitle={item.subtitle}
          user={item.user}
          app={item.app}
          integration={item.integration}

          textBtn= {item.textBtn}
          variantBtn={item.variantBtn}

          adsActive={item.adsActive}
          ssoActive={item.ssoActive}
          apiActive={item.apiActive}
          facebookActive={item.facebookActive}

          ads={item.ads}
          sso={item.sso}
          api={item.api}
          facebook={item.facebook}
        />
      ))}
    </Grid>
  );
}

export default Pricing;
