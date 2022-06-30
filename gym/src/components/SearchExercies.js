import React, { useEffect, useState } from "react";
import { Box, Button, Stack, Typography, TextField } from "@mui/material";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercies = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState();

  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  const processSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase.includes(search) ||
          exercise.target.toLowerCase.includes(search) ||
          exercise.equipment.toLowerCase.includes(search) ||
          exercise.bodyPart.toLowerCase.includes(search)
      );
      setSearch("");
      setExercises(searchedExercises);
    }
  };
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
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search here.."
          type="text"
        />
        <Button
          className="search-btn"
          onClick={processSearch}
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
      <Box>
        <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
          <HorizontalScrollbar
            data={bodyParts}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
            isBodyParts
          ></HorizontalScrollbar>
        </Box>
      </Box>
    </Stack>
  );
};

export default SearchExercies;
