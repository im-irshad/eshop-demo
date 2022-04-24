import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import { ImageList, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

export const leftFooter = {
  width: "20%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "&>img": {
    width: "10vmax",
  },
};
export const footer = {
  marginTop: "10vmax",
  padding: "2vmax",
  backgroundColor: "primary.main",
  color: "white",
  display: "flex",
  alignItems: "center",
};
export const centerfooter = {
  width: "60%",
  textAlign: "center",
};
export const rightFooter = {
  width: "20%",
  display: "flex",
  justifyContent: "space-arround",
  margin: "0.5vmax",
};

export default function Footer() {
  return (
    <Box component="div" sx={{ ...footer }}>
      <Box component="div" sx={{ ...leftFooter }}>
        <Typography variant="h5">Download Our App</Typography>
        <img
          alt="google app"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/640px-Google_Play_Store_badge_EN.svg.png"
        />
        <img
          alt="apple app"
          src="https://cmsphoto.ww-cdn.com/superstatic/41269/art/grande/17237224-21754913.jpg?v=1505915516.734692"
        />
      </Box>
      <Box component="div" sx={{ ...centerfooter }}>
        <Typography variant="h4">E-Shop</Typography>
        <Typography variant="caption">
          Leading Electronics Store in Denmark
        </Typography>
        <br />
        <Typography variant="caption">
          Copyrights 2022 &copy; Irshad M.
        </Typography>
      </Box>

      <Box component="div">
        <Typography variant="h5">Follow Us </Typography>
        <Box component="div" sx={{ ...rightFooter }}>
          <InstagramIcon />
          <FacebookIcon />
          <YouTubeIcon />
        </Box>
      </Box>
    </Box>
  );
}
