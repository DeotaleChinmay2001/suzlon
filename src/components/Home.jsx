import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import { Grid } from "@mui/material";
import CardComponent from "./CardComponent";
import { deepPurple } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Home = () => {
  return (
    <Box component="main" sx={{ flexGrow: 3, p: 10 }}>
      <Grid container gap={"30px"}>
        <Grid item xs={12}>
          <CardComponent>
            <Grid container justifyContent={"center"} gap={"30px"}>
              <Grid item>
                <Avatar variant="rounded" sx={{ bgcolor: deepPurple[500] }}>SK</Avatar>
                <Grid>
                  <p>Name: </p>{" "}
                </Grid>
               
              </Grid>
              <Grid container item gap={"20px"} justifyContent={"center"}>
                <Grid item xs={3}>
                  <CardComponent sx={{ width: "fit-content" }}>
                    User Id
                  </CardComponent>
                </Grid>
                <Grid item xs={3}>
                  <CardComponent sx={{ width: "fit-content" }}>
                    Email
                  </CardComponent>
                </Grid>
                <Grid item xs={3}>
                  <CardComponent sx={{ width: "fit-content" }}>
                    Phone
                  </CardComponent>
                </Grid>
              </Grid>
            </Grid>
          </CardComponent>
        </Grid>
        <Grid item xs={12}>
          <CardComponent>
            <Grid container item gap={"20px"} justifyContent={"center"}>
              <Grid item xs={5} sx={{ bgcolor: "#9ea0a3", padding: "20px" }}>
                States
                <Box height={20} />
                <CardComponent sx={{ width: "30px" }}>A</CardComponent>
                <Box height={20} />
                <CardComponent sx={{ width: "30px" }}>A</CardComponent>
                <Box height={20} />
                <CardComponent sx={{ width: "30px" }}>A</CardComponent>
              </Grid>
              <Grid item xs={5} sx={{ bgcolor: "#9ea0a3", padding: "20px" }}>
                View
                <Box height={20} />
                <CardComponent sx={{ width: "30px" }}>A</CardComponent>
                <Box height={20} />
                <CardComponent sx={{ width: "30px" }}>A</CardComponent>
                <Box height={20} />
                <CardComponent sx={{ width: "30px" }}>A</CardComponent>
              </Grid>
            </Grid>
          </CardComponent>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
