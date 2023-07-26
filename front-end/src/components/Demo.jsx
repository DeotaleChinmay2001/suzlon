import {
    Avatar,
    Box,
    Typography
  } from "@mui/material";
  import { Grid } from "@mui/material";
  import CardComponent from "./CardComponent";
  import { deepPurple } from "@mui/material/colors";
  import React, { useEffect, useState } from "react";
  import { useParams } from "react-router-dom";
  
  const Demo = () => {
  
  
    const errorStyles = {
      color: "red",
      fontWeight: "bold",
      fontSize: "18px",
      textAlign: "center",
      margin: "20px auto",
    };
  
  
  
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const { userId } = useParams();
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:3000/api/getUserData/${userId}`);
          if (response.ok) {
            const userData = await response.json();
            setUser(userData);
          } else {
            throw new Error('Unable to fetch user data');
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
          setError(error.message);
        }
      };
  
      fetchData();
    }, [userId]);
  
    if (error) {
       return (
        <Grid container justifyContent="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={errorStyles}>
              Error: {error}
            </Typography>
          </Grid>
        </Grid>
      );
    }
  
    if (!user) {
      return <div>Loading...</div>;
    }
    
    // Function to get initials from the name
    const getInitials = (name) => {
      const names = name.split(' ');
      if (names.length === 1) {
        return names[0].slice(0, 2);
      }
      return names[0].charAt(0) + names[names.length - 1].charAt(0);
    };
  
    const userInitials = getInitials(user.name);
    return (
        <>
        </>
    )
  };
  
  export default Demo;
  