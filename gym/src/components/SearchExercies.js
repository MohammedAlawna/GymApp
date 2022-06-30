import React, { useEffect, useState } from "react";
import { Box, Button, Stack, Typography, TextField } from "@mui/material";

const SearchExercies = () => {
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight="700"
        px
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
        mb="50px"
        textAlign="center"
      >
        Exercises That You May Like..
      </Typography>
      <Box position="relative" mb="61px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "gold solid 1px",
              borderRadius: "10px",
            },
            width: {
              lg: "950px",
              xs: "350px",
            },
            backgroundColor: "#fff",
            borderRadius: "10px",
          }}
          height="76px"
          value=""
          onChange={(e) => {}}
          placeholder="Search here.."
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "gold",
            color: "white",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "54px",
            position: "absolute",
            right: "0",
          }}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercies;
