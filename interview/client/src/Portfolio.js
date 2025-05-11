import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  ButtonGroup,
  Card,
  CardMedia,
  CardActionArea,
  Container,
} from "@mui/material";

const categories = ["All", "Cleaner", "Designer", "Exterior"];

const portfolioItems = [
  {
    id: 1,
    image:
      "https://d33om22pidobo4.cloudfront.net/areaguides/thumbnailimages/downtown-dubai1xpng-259ebcee-214e-4d3a-b95c-325e1c9eb542pngd1000x666-y-fwebpjpegd1000x666-y-fwebpjpegd1000x666-y-fwebp.jpeg?d=1000x666&f=webp",
    category: "Cleaner",
  },
  {
    id: 2,
    image:
      "https://d33om22pidobo4.cloudfront.net/areaguides/thumbnailimages/downtown-dubai1xpng-259ebcee-214e-4d3a-b95c-325e1c9eb542pngd1000x666-y-fwebpjpegd1000x666-y-fwebpjpegd1000x666-y-fwebp.jpeg?d=1000x666&f=webp",
    category: "Designer",
  },

  {
    id: 4,
    image:
      "https://d33om22pidobo4.cloudfront.net/areaguides/thumbnailimages/downtown-dubai1xpng-259ebcee-214e-4d3a-b95c-325e1c9eb542pngd1000x666-y-fwebpjpegd1000x666-y-fwebpjpegd1000x666-y-fwebp.jpeg?d=1000x666&f=webp",
    category: "Exterior",
  },
  {
    id: 5,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/555179904.jpg?k=0a1fba790de91e624a10d74d5b5bad29fb92df09e24345b52836fe638a20dcff&o=&hp=1",
    category: "Exterior",
  },
  {
    id: 6,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/555179904.jpg?k=0a1fba790de91e624a10d74d5b5bad29fb92df09e24345b52836fe638a20dcff&o=&hp=1",
    category: "Cleaner",
  },
  {
    id: 3,
    image:
      "https://d33om22pidobo4.cloudfront.net/areaguides/thumbnailimages/downtown-dubai1xpng-259ebcee-214e-4d3a-b95c-325e1c9eb542pngd1000x666-y-fwebpjpegd1000x666-y-fwebpjpegd1000x666-y-fwebp.jpeg?d=1000x666&f=webp",
    category: "Cleaner",
  },
  {
    id: 3,
    image:
      "https://d33om22pidobo4.cloudfront.net/areaguides/thumbnailimages/downtown-dubai1xpng-259ebcee-214e-4d3a-b95c-325e1c9eb542pngd1000x666-y-fwebpjpegd1000x666-y-fwebpjpegd1000x666-y-fwebp.jpeg?d=1000x666&f=webp",
    category: "Cleaner",
  },
  {
    id: 3,
    image:
      "https://d33om22pidobo4.cloudfront.net/areaguides/thumbnailimages/downtown-dubai1xpng-259ebcee-214e-4d3a-b95c-325e1c9eb542pngd1000x666-y-fwebpjpegd1000x666-y-fwebpjpegd1000x666-y-fwebp.jpeg?d=1000x666&f=webp",
    category: "Cleaner",
  },
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <Box sx={{ py: 10, px: 2, textAlign: "center", background: "#f9f9f9" }}>
      <Container>
        <Typography variant="h4" fontWeight={700} mb={2} color="primary.dark">
          Take A Look At Our Portfolios
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={4}>
          Donec luctus est turpis, viverra vestibulum augue volutpat.
          Suspendisse euismod ex iaculis.
        </Typography>

        {/* Filter Buttons */}
        <ButtonGroup variant="contained" sx={{ mb: 4 }}>
          {categories.map((cat) => (
            <Button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              sx={{
                backgroundColor: activeCategory === cat ? "#FF5722" : "#eeeeee",
                color: activeCategory === cat ? "#fff" : "#333",
                "&:hover": {
                  backgroundColor: "#FF5722",
                  color: "#fff",
                },
              }}
            >
              {cat}
            </Button>
          ))}
        </ButtonGroup>

        {/* Portfolio Grid */}
        <Grid container spacing={3}>
          {filteredItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: 3,
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.image}
                    alt="Portfolio"
                  />
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PortfolioSection;
