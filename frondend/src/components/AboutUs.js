import { Avatar, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";

function aboutUs() {
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Box>
          <Avatar
            sx={{ width: 200, height: 200, border: " 6px solid skyblue" }}
            src="https://media-exp1.licdn.com/dms/image/C5603AQHgacCjJPOwMQ/profile-displayphoto-shrink_800_800/0/1641037495100?e=1653523200&v=beta&t=q2N28vBB5TanpmGazVRRfRvGev6ox_eBtce8jAwKQFc"
          ></Avatar>
        </Box>
        <Box>
          <Typography variant="h3">About Me</Typography>
        </Box>
        <Box>
          <Typography variant="h6" align="center">
            Irshad Muhammad
          </Typography>
          <Typography align="center" variant="subtitle1">
            I am a Full-Stack Developer, lives in Copenhagen,Denmark.
            <br /> I have experience working with: REACT, JAVASCRIPT,
            <br />
            TYPESCRIPT, NODE, EXPRESS, MONGODB, MATERIAL <br /> UI, BOOTSTRAP,
            HTML5, CSS & SASS.
          </Typography>
        </Box>
        <Box>
          <IconButton href="https://github.com/im-irshad">
            <GitHubIcon sx={{ fontSize: "50px" }} />
          </IconButton>

          <IconButton href="https://www.linkedin.com/in/im-irshad/">
            <LinkedInIcon sx={{ fontSize: "50px" }} />
          </IconButton>
        </Box>
      </Box>
    </>
  );
}

export default aboutUs;
