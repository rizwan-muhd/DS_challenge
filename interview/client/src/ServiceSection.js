import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";

const services = [
  {
    title: "Architecture Design",
    description:
      "Nunc placerat pharetra lorem. Donec lorem metus lobortis ornare.",
    image:
      "https://img.freepik.com/free-photo/interior-designers-working-blueprints_23-2148895632.jpg", // Replace with actual
  },
  {
    title: "Build Construction",
    description:
      "Nunc placerat pharetra lorem. Donec lorem metus lobortis ornare.",
    image:
      "https://img.freepik.com/free-photo/engineer-working-site_23-2148895641.jpg", // Replace with actual
  },
  {
    title: "Building Renovation",
    description:
      "Nunc placerat pharetra lorem. Donec lorem metus lobortis ornare.",
    image:
      "https://img.freepik.com/free-photo/renovation-project-woman_23-2148895672.jpg", // Replace with actual
  },
];

const ServicesSection = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: "#fff" }}>
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card elevation={3} sx={{ borderRadius: 2 }}>
              <CardMedia
                component="img"
                height="180"
                image={service.image}
                alt={service.title}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#1A237E" }}
                >
                  {service.title}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, mb: 2 }}>
                  {service.description}
                </Typography>
                <Button
                  size="small"
                  sx={{ color: "orange", fontWeight: "bold" }}
                >
                  Read More &gt;
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesSection;
