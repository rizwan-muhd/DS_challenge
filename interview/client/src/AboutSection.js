import React from "react";
import { Box, Grid, Typography, Button, Container } from "@mui/material";

const AboutSection = () => {
  return (
    <Box sx={{ py: 10, px: 2, backgroundColor: "#fff" }}>
      <Container>
        <Grid container spacing={2} alignItems="center">
          {/* Left Text Content */}
          <Grid item xs={12} md={6} lg={6} sx={{ backgroundColor: "yellow" }}>
            <Box sx={{ p: 2, maxWidth: 500 }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: 700, color: "#1A237E" }}
              >
                We Building <span style={{ color: "#f44336" }}>Everything</span>
              </Typography>

              <Typography variant="body1" sx={{ mt: 2, color: "#555" }}>
                All of this text is editable. Simply click anywhere in the
                paragraph or heading text and start typing. You can copy and
                paste your own content in to see what it looks like.
              </Typography>

              <Typography variant="body2" sx={{ mt: 2, color: "#666" }}>
                Essentials theme contains many awesome tabs layouts with very
                powerful features, you can create vertical or horizontal tabs in
                minutes with amazing and modern design. Create awesome.
              </Typography>

              <Button
                variant="contained"
                sx={{
                  mt: 4,
                  backgroundColor: "#f44336",
                  textTransform: "none",
                  px: 4,
                  py: 1.5,
                  fontWeight: "bold",
                  borderRadius: 2,
                  ":hover": { backgroundColor: "#d32f2f" },
                }}
              >
                Read More
              </Button>
            </Box>
          </Grid>

          {/* Right Image */}
          <Grid item xs={12} md={6} lg={6} sx={{ backgroundColor: "blue" }}>
            <Box
              component="img"
              src="https://www.aeicm.com/wp-content/uploads/2019/04/Mechanical_Left1.png"
              alt="Construction Team"
              sx={{
                width: "100%",
                height: "auto",
                maxHeight: 300,
                objectFit: "cover", // or "contain" depending on your goal
                borderRadius: 2,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
