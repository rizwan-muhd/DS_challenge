import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import FlagIcon from "@mui/icons-material/Flag";
import VisibilityIcon from "@mui/icons-material/Visibility";

const MissionVisionSection = () => {
  return (
    <Box sx={{ py: 10, px: 2, backgroundColor: "#f4f6f8" }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: "bold", mb: 6, color: "#1A237E" }}
      >
        Our <span style={{ color: "#f44336" }}>Mission</span> &{" "}
        <span style={{ color: "#f44336" }}>Vision</span>
      </Typography>

      <Grid container spacing={6} alignItems="flex-start">
        {/* Mission */}
        <Grid item xs={12} md={6}>
          <Box alignItems="center" mb={2}>
            <FlagIcon sx={{ fontSize: 40, color: "#f44336", mr: 2 }} />
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Our Mission
            </Typography>
          </Box>
          <Typography variant="body1" color="text.secondary">
            To deliver high-quality construction services that exceed client
            expectations, through innovation, teamwork, and commitment to
            excellence. We aim to build not just structures, but lasting
            relationships.
          </Typography>
        </Grid>

        {/* Vision */}
        <Grid item xs={12} md={6}>
          <Box alignItems="center" mb={2}>
            <VisibilityIcon sx={{ fontSize: 40, color: "#f44336", mr: 2 }} />
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Our Vision
            </Typography>
          </Box>
          <Typography variant="body1" color="text.secondary">
            To be recognized as a leading construction company that sets the
            benchmark for quality, safety, and sustainability. We envision a
            future where our projects inspire and uplift communities.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MissionVisionSection;
