import React from "react";
import {
  Box,
  Typography,
  Grid,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#1A237E", color: "#fff", mt: 10, py: 6 }}>
      <Grid container spacing={4} justifyContent="center" px={4}>
        {/* Company Info */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Creatify Agency
          </Typography>
          <Typography variant="body2" color="grey.400">
            Building creative digital experiences for modern businesses.
            Specialized in UI/UX, web design, and development.
          </Typography>
        </Grid>

        {/* Useful Links */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" gutterBottom>
            Links
          </Typography>
          <Box>
            <Link
              href="#"
              underline="none"
              color="grey.400"
              display="block"
              mb={1}
            >
              Home
            </Link>
            <Link
              href="#"
              underline="none"
              color="grey.400"
              display="block"
              mb={1}
            >
              Portfolio
            </Link>
            <Link
              href="#"
              underline="none"
              color="grey.400"
              display="block"
              mb={1}
            >
              Services
            </Link>
            <Link href="#" underline="none" color="grey.400" display="block">
              Contact
            </Link>
          </Box>
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body2" color="grey.400" mb={1}>
            Email: hello@creatifyagency.com
          </Typography>
          <Typography variant="body2" color="grey.400" mb={1}>
            Phone: +91 98765 43210
          </Typography>
          <Typography variant="body2" color="grey.400">
            Location: Bangalore, India
          </Typography>
        </Grid>

        {/* Social Media */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <Box>
            <IconButton href="#" sx={{ color: "#fff" }}>
              <Facebook />
            </IconButton>
            <IconButton href="#" sx={{ color: "#fff" }}>
              <Instagram />
            </IconButton>
            <IconButton href="#" sx={{ color: "#fff" }}>
              <Twitter />
            </IconButton>
            <IconButton href="#" sx={{ color: "#fff" }}>
              <LinkedIn />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ bgcolor: "#444", my: 4 }} />

      <Typography variant="body2" align="center" color="grey.500">
        © {new Date().getFullYear()} Creatify Agency. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
