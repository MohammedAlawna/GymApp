import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";

const BodyPart = (item, setBodyPart, bodyPart) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        backgroundColor: "white",
        borderBottomLeftRadius: "15px",
        width: "260px",
        height: "270px",
        cursor: "pointer",
        gap: "44px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1785, left: 90, behavior: "smooth" });
      }}
    >
      <img src={Icon} alt="dumb" style={{ width: "40px", height: "40px" }} />
      <Typography
        fontSize="23px"
        color="#3a1212"
        textTransform="capitalize"
        fontWeight="bold"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
