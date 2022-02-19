import FeatureCard from "./FeatureCard";
import Grid from "@mui/material/Grid";



function FeatureCards() {

  const featureCard = [
    {title:"Automation", description:"We help your business gain leverage and efficiency through automation using simple, yet powerful NoCode tools."},
    {title:"Funnel Optimization", description:"We help you optimize your website or mobile app flow to increase conversion rates and retention to drive growth."},
    {title:"Idea Creation", description:"We meet with your team to know more about your project idea and goals."},
  ];

  return (
    <Grid container spacing={3}>
      {featureCard.map((item) => <FeatureCard title={item.title} description={item.description} />)}
    </Grid>
  );
}

export default FeatureCards;