import React, { useEffect, useState } from "react";
import { Pagination } from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";

import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="42px">
        Show Results
      </Typography>{" "}
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        sx={{
          gap: { lg: "110px", xs: "50px" },
        }}
      >
        {exercises.map((exercise, index) => (
          <ExerciseCard>{exercise.name}</ExerciseCard>
        ))}
      </Stack>
    </Box>
  );
};

export default Exercises;
