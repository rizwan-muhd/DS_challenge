import React from "react";
import {
  Box,
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    question: "Breaking The Rules Using SQLite To Demo Web?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    question: "Monthly Web Development Update Pragmatic Releasing?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    question: "How To Use Underlined Text To Improve User Experience",
    answer:
      "Using underlined text strategically helps improve readability and focus on key content.",
  },
  {
    question: "Understanding CSS Layout And The Block Formatting",
    answer:
      "CSS layout and formatting contexts control how elements are rendered and aligned.",
  },
];

const FAQSection = () => {
  return (
    <Box sx={{ py: 10, px: 2, backgroundColor: "#fff" }}>
      <Grid container spacing={4} alignItems="center">
        {/* FAQ Content */}
        <Grid item xs={12} md={6} lg={6} sx={{ backgroundColor: "red" }}>
          <Typography variant="overline" sx={{ color: "#FF5722" }}>
            FAQ
          </Typography>
          <Typography variant="h4" fontWeight={700} mb={2}>
            Frequently Asked <br />
            <span style={{ color: "#1A237E" }}>Questions</span>
          </Typography>

          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              sx={{ mb: 2, boxShadow: "none", border: "1px solid #e0e0e0" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{ fontWeight: 600 }}
              >
                {faq.question}
              </AccordionSummary>
              <AccordionDetails
                sx={{ color: "text.secondary", fontSize: "0.95rem" }}
              >
                {faq.answer}
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>

        {/* Image */}
        <Grid item xs={12} md={6} lg={6} sx={{ backgroundColor: "yellow" }}>
          <Box
            component="img"
            // src="https://d33om22pidobo4.cloudfront.net/areaguides/thumbnailimages/downtown-dubai1xpng-259ebcee-214e-4d3a-b95c-325e1c9eb542pngd1000x666-y-fwebpjpegd1000x666-y-fwebpjpegd1000x666-y-fwebp.jpeg?d=1000x666&f=webp"
            alt="Buildings"
            sx={{ width: "100%", height: "100%", borderRadius: 3 }}
          />
          <Typography variant="h4" fontWeight={700} mb={2}>
            Frequently Asked <br />
            <span style={{ color: "#1A237E" }}>Questions</span>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FAQSection;
