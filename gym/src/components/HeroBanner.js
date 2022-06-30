import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="700" fontSize="26px">
        Sport Club
      </Typography>
      <Typography
        fontWeight="550"
        fontSize="22px"
        mb={2}
        mt="30px"
        sx={{ fontSize: { lg: "35px", xs: "35px" } }}
      >
        Get Motivated!
      </Typography>
      <Typography
        fontWeight="400"
        fontSize="18px"
        sx={{ fontSize: { lg: "44px", xs: "38px" } }}
      >
        Join Us!
      </Typography>
      <Button
        variant="contained"
        color="success"
        href="#exercises"
        sx={{
          backgroundColor: "green",
          padding: "10px",
        }}
      >
        Check Exercises!
      </Button>
      <Typography
        fontWeight={600}
        fontSize="180px"
        color="green"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
      >
        Exercise
      </Typography>
      <img
        src="https://www.rappler.com/tachyon/2021/02/workout-couple.jpg"
        alt="banner"
        className="hero-banner-img"
      />
    </Box>
  );
};

export default HeroBanner;
