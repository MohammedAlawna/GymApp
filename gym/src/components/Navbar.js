import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/Logo.png";
import { borderBottom } from "@mui/system";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "31px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={Logo}
          style={{
            width: "48px",
            height: "48px",
            margin: "0 20px",
          }}
        />
      </Link>
      <Stack direction="row" gap="40px" alignItems="flex-end" font-size="24px">
        <Link
          to="\"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "2px dashed gold",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
