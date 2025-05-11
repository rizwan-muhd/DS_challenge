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

const HeroSection = () => {
  return (
    <>
      {/* Topbar */}
      <Box
        sx={{
          backgroundColor: "#d32f2f",
          color: "#fff",
          py: 1,
          px: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box display="flex" alignItems="center" gap={2}>
          <PhoneIcon fontSize="small" />
          <Typography variant="body2">786-098-098-09</Typography>
          <EmailIcon fontSize="small" />
          <Typography variant="body2">info@example.com</Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#ff5722",
            "&:hover": { backgroundColor: "#e64a19" },
          }}
        >
          Get A Quote
        </Button>
      </Box>

      {/* Navbar */}
      <AppBar position="static" sx={{ backgroundColor: "#1A237E" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: "bold", color: "#fff" }}
          >
            Konstro
          </Typography>
          <Box display="flex" gap={3}>
            {[
              "Home",
              "About Us",
              "Pages",
              "Services",
              "Blog",
              "Contact Us",
            ].map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>
          <Box display="flex" gap={1}>
            <IconButton sx={{ color: "#fff" }}>
              <FacebookIcon />
            </IconButton>
            <IconButton sx={{ color: "#fff" }}>
              <SearchIcon />
            </IconButton>
            <IconButton sx={{ color: "#fff" }}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box sx={{ backgroundColor: "#f5f5f5", py: 6 }}>
        <Container>
          <Grid container spacing={4} alignItems="center">
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
            <Grid item xs={12} md={6}>
              <img
                src="https://img.freepik.com/free-photo/portrait-young-construction-worker_23-2148732535.jpg?w=740&t=st=1714829204~exp=1714829804~hmac=98d1a6c2d3d26b5c5eb223f8321d504b9d32b2dc798372017146835acdfd8ad2"
                alt="Construction Worker"
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default HeroSection;
