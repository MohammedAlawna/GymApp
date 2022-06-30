import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = (exerciseVideos, name) => {
  if (!exerciseVideos.length) return "Please Wait, Loading Exercises...";
  return (
    <Box sx={{ mt: { lg: "200px", xs: "20px" } }} p="18px">
      <Typography variant="h3" mb="32px">
        Wwatch This Exercise! {name}
      </Typography>
      <Stack
        ustifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "108px", sx: "0" } }}
      >
        {exerciseVideos?.slice(0, 3).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`http://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
