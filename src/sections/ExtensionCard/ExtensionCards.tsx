import Grid from "@mui/material/Grid";
import ExtensionCard from "./ExtensionCard";

function ExtensionCards() {
  const exCard = [
    {
      title: "Google Drive",
      description:
        "Sync any file store to Google Drive for automated sharing with people outside the company",
      iconAddress:
        "https://assets.maccarianagency.com/svg/logos/google-drive.svg",
    },
    {
      title: "Google Add Manager",
      description:
        "Easily manage and edit any Adwords campaign inline to improve ROI with constant review",
      iconAddress:
        "https://assets.maccarianagency.com/svg/logos/google-ad-manager.svg",
    },
    {
      title: "Atlassian",
      description:
        "keep your entire team in sync with development and easily manage tasks, goals, and deadlines.",
      iconAddress: "https://assets.maccarianagency.com/svg/logos/atlassian.svg",
    },
    {
      title: "Slack",
      description:
        "Sync your team's work and activity to share automatically in a channel with a simple plugin",
      iconAddress: "https://assets.maccarianagency.com/svg/logos/slack.svg",
    },
    {
      title: "MailChimp",
      description:
        "Communicate important messages to your users using Mailchimp as the delivery service.",
      iconAddress: "https://assets.maccarianagency.com/svg/logos/mailchimp.svg",
    },
    {
      title: "Dropbox",
      description:
        "Sync any file store to Dropbox for automated sharing with people outside the company.",
      iconAddress: "https://assets.maccarianagency.com/svg/logos/dropbox.svg",
    },
  ];

  return (
    <Grid container spacing={3}>
      {exCard.map((item) => (
        <ExtensionCard
          title={item.title}
          description={item.description}
          iconAddress={item.iconAddress}
        />
      ))}
    </Grid>
  );
}

export default ExtensionCards;
