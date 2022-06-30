import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="gold">
      <Stack gap="35px" alignItems="center" px="38px" pt="24px">
        <img src={Logo} width="200px" height="45px" />
        <Typography variant="h5" pb="35px" mt="20px">
          Developed by Mohammed Alawna.
        </Typography>
      </Stack>
    </Box>
  );
};
export default Footer;
