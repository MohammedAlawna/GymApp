import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} Loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "20px",
            color: "white",
            background: "gold",
            fontSize: "14px",
            borderRadius: "10px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "20px",
            color: "white",
            background: "gold",
            fontSize: "14px",
            borderRadius: "10px",
            textTransform: "capitalize",
          }}
        >
          {exercise.targetMuscle}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="black"
        fontWeight="bold"
        fontSize="21px"
        mt="11px"
        pb="10px"
        textTransform="capitalize"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
