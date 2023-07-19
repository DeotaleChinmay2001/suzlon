import { Avatar, Box, Card, Container } from "@mui/material";
import { Grid } from "@mui/material";
import CardComponent from "./CardComponent";
import { deepPurple } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/${userId}`
        );
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <Box component="main" sx={{ flexGrow: 3, p: 10 }}>
      <Grid container gap={"30px"}>
        <Grid item xs={12}>
          <CardComponent>
            <Grid container justifyContent={"center"} gap={"40px"}>
              <Grid item>
                <Avatar sx={{ bgcolor: deepPurple[500] }}>SK</Avatar>
                <Grid>{user.name}</Grid>
              </Grid>
              <Grid container item gap={"20px"} justifyContent={"center"}>
                <Grid item xs={3} sx={{ bgcolor: "#9ea0a3" }}>
                  <CardComponent sx={{ width: "fit-content" }}>
                    User Id
                  </CardComponent>
                </Grid>
                <Grid item xs={3} sx={{ bgcolor: "#9ea0a3" }}>
                  <CardComponent sx={{ width: "fit-content" }}>
                  {user.email}
                  </CardComponent>
                </Grid>
                <Grid item xs={3} sx={{ bgcolor: "#9ea0a3" }}>
                  <CardComponent sx={{ width: "fit-content" }}>
                  {user.phone_number}
                  </CardComponent>
                </Grid>
              </Grid>
            </Grid>
          </CardComponent>
        </Grid>
        <Grid item xs={12}>
          <CardComponent>
            <Grid container item gap={"20px"} justifyContent={"center"}>
              <Grid
                item
                spacing={2}
                xs={5}
                sx={{ bgcolor: "#9ea0a3", padding: "20px" }}
              >
                States
                <Box height={20} />
                <CardComponent sx={{ width: "30px" }}>A</CardComponent>
                <Box height={20} />
                <CardComponent sx={{ width: "30px" }}>A</CardComponent>
                <Box height={20} />
                <CardComponent sx={{ width: "30px" }}>A</CardComponent>
              </Grid>
              <Grid
                item
                spacing={2}
                xs={5}
                sx={{ bgcolor: "#9ea0a3", padding: "20px" }}
              >
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
