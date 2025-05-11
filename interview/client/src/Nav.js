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

function Nav() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1A237E" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: "bold", color: "#fff" }}
        >
          PearlStone
        </Typography>
        <Box display="flex" gap={3}>
          {["Home", "About Us", "Services", "Blog", "Contact Us"].map(
            (item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            )
          )}
        </Box>
        <Box display="flex" gap={1}>
          <IconButton sx={{ color: "#fff" }}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
