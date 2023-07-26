import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Avatar,
  Box,
  Typography,
  Grid,
} from "@mui/material";
import CardComponent from "./CardComponent";
import Card from '../components/card';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Home = () => {
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
      <Box component="main" sx={{ flexGrow: 3, p: 10, paddingTop: '30px', }}>
        <Grid container gap={"30px"}>
          <Grid item xs={12}>
            <CardComponent>
              <Grid container justifyContent={"center"} gap={"30px"}>
                <Grid item>
                  <Avatar
                    variant="rounded"
                    sx={{
                      bgcolor: 'purple',
                      color: '#fff',
                      width: 40,
                      height: 40,
                      fontSize: '17px',
                      boxShadow: '0 6px 12px rgba(76, 175, 80, 0.3)',
                      border: '2px solid #white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textTransform: 'uppercase',
                    }}
                  >
                    {userInitials}
                  </Avatar>
                </Grid>
                <Grid item>
                  <Typography
                    variant="h6"
                    sx={{
                      paddingTop: '3px',
                      color: '#702082',
                      fontWeight: 'bold',
                      textTransform: 'uppercase',
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '24px',
                      letterSpacing: '1px',
                      textAlign: 'center',
                      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
                      paddingRight: "0px"
                    }}
                  >
                    {user.name}
                  </Typography>
                </Grid>
                <Grid container item gap={"20px"} justifyContent={"center"}>
                  <Grid item xs={3} style={{ width: 'fit-content !important' }}>
                    {/* Set editable to true to make the email editable */}
                    <Card iconClass="fa-envelope" data={user.email} editable={true} />
                  </Grid>
                  <Grid item xs={3} >
                    {/* Set editable to false to keep the phone number uneditable */}
                    <Card iconClass="fa-phone" data={user.phone_number} editable={false} />
                  </Grid>
                  <Grid item xs={3}>
                    {/* Set editable to true to make the access level editable */}
                    <Card iconClass="fa-phone" data={`Access Level - ${user.accessLevel}`} editable={true} />
                  </Grid>
                </Grid>
              </Grid>
            </CardComponent>
          </Grid>
          <Grid item xs={12}>
            <CardComponent>
              <Grid container item gap={"20px"} justifyContent={"center"}>
                <Grid item xs={5} sx={{ bgcolor: '#9ea0a3', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                  <Typography variant="h6" sx={{ color: '#fff', marginBottom: '10px',  textAlign: 'center' , fontWeight: 'bold', textTransform: 'uppercase' }}>States</Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
                    {user.statelist.map((state, index) => (
                      <CardComponent key={index} sx={{ width: 'fit-content', backgroundColor: '#702082', color: '#fff', fontSize: '14px', padding: '6px 12px', borderRadius: '4px' }}>{state}</CardComponent>
                    ))}
                  </Box>
                </Grid>

                <Grid item xs={5} sx={{ bgcolor: "#9ea0a3", padding: "20px", borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                  <Typography variant="h6" sx={{ color: "#fff", fontWeight: "bold", textTransform: "uppercase", textAlign: "center", marginBottom: "10px" }}>View</Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
                    {user.access.map((viewItem, index) => (
                      <CardComponent key={index} sx={{ width: 'fit-content', backgroundColor: '#702082', color: '#fff', fontSize: '16px', padding: '8px 16px', borderRadius: '4px', textAlign: 'center' }}>{viewItem}</CardComponent>
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </CardComponent>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
