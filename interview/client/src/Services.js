import React from "react";
import { Box, Grid, Typography, Paper, useTheme } from "@mui/material";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import RoofingIcon from "@mui/icons-material/Roofing";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import AccountTreeIcon from "@mui/icons-material/AccountTree";

const services = [
  {
    title: "Renovation",
    icon: <HomeWorkIcon sx={{ fontSize: 40 }} />,
    description: "Integer placerat sapien enim, at aliquet sem molestie.",
  },
  {
    title: "Floors & Roofs",
    icon: <RoofingIcon sx={{ fontSize: 40 }} />,
    description: "Integer placerat sapien enim, at aliquet sem molestie.",
    highlight: true,
  },
  {
    title: "Design & Build",
    icon: <DesignServicesIcon sx={{ fontSize: 40 }} />,
    description: "Integer placerat sapien enim, at aliquet sem molestie.",
  },
  {
    title: "Rooms & Halls",
    icon: <MeetingRoomIcon sx={{ fontSize: 40 }} />,
    description: "Integer placerat sapien enim, at aliquet sem molestie.",
  },
  {
    title: "Architecture Design",
    icon: <AccountTreeIcon sx={{ fontSize: 40 }} />,
    description: "Integer placerat sapien enim, at aliquet sem molestie.",
  },
];

const ServiceCard = ({ title, icon, description, highlight }) => {
  return (
    <Paper
      elevation={highlight ? 6 : 2}
      sx={{
        p: 3,
        borderRadius: 3,
        backgroundColor: highlight ? "#FFF4F3" : "#F9F9FF",
        border: highlight ? "2px solid #FF5722" : "1px solid #E0E0E0",
        color: "#1A237E",
        textAlign: "center",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
        },
      }}
    >
      <Box sx={{ mb: 2 }}>{icon}</Box>
      <Typography variant="h6" fontWeight={600}>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        {description}
      </Typography>
    </Paper>
  );
};

const Services = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: 10, px: 2, backgroundColor: "#fff" }}>
      <Box textAlign="center" mb={6}>
        <Typography variant="overline" sx={{ color: "#FF5722" }}>
          Features
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          We Provide{" "}
          <span style={{ color: theme.palette.primary.main }}>Services</span>
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          maxWidth="600px"
          mx="auto"
          mt={2}
        >
          Vestibulum sed eros vitae libero faucibus fermentum a efficitur velit.
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {services.map((service, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <ServiceCard {...service} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
