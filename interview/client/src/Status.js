import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import { Build, People, ThumbUp, Star } from "@mui/icons-material"; // example icons
import CountUp from "react-countup";

const stats = [
  {
    value: 120,
    suffix: "+",
    label: "Projects Completed",
    icon: <Build sx={{ fontSize: 50, color: "#1976d2" }} />,
  },
  {
    value: 75,
    suffix: "+",
    label: "Happy Clients",
    icon: <People sx={{ fontSize: 50, color: "#1976d2" }} />,
  },
  {
    value: 98,
    suffix: "%",
    label: "Satisfaction Rate",
    icon: <ThumbUp sx={{ fontSize: 50, color: "#1976d2" }} />,
  },
  {
    value: 5,
    suffix: "/5",
    label: "Average Rating",
    icon: <Star sx={{ fontSize: 50, color: "#1976d2" }} />,
  },
];

const StatsSection = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: "#e6f0ff" }}>
      <Grid container justifyContent="center" spacing={4}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              {/* Example Icon — replace with your actual icon */}
              <Box sx={{ mb: 2 }}>
                <img
                  src={stat.icon}
                  alt={stat.label}
                  style={{ width: 50, height: 50 }}
                />
              </Box>

              <Typography
                variant="h3"
                color="primary"
                sx={{ fontWeight: "bold" }}
              >
                <CountUp end={stat.value} duration={2} />
                {stat.suffix}
              </Typography>

              <Typography variant="subtitle1" color="text.secondary">
                {stat.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StatsSection;
