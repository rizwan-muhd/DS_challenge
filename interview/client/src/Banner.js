import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import SearchIcon from "@mui/icons-material/Search";

function Banner() {
  return (
    <Box
      sx={{
        backgroundImage:
          "url('https://monotech.co.in/assets/images/MECH/MECH1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        py: 10,
        color: "#fff", // Make text readable
        height: "50vh",
      }}
    >
      <Container>
        <Grid container spacing={4} alignItems="center" height="50vh">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
              Highest <span style={{ color: "red" }}>Standards</span> of
              Construction
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              commodo ligula eget dolor.
            </Typography>
            <Box display="flex" gap={2}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "red",
                  "&:hover": { backgroundColor: "#b71c1c" },
                }}
              >
                Read More
              </Button>
              <Button variant="contained" sx={{ backgroundColor: "#1A237E" }}>
                Contact Us
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Banner;
