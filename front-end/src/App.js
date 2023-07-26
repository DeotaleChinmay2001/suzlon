import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from './components/Home';
import { Grid } from '@mui/material';
import NotFound from './components/notFound';



const App = () => (
  <Grid container justifyContent={"center"}>
    <Grid item md={10}>
      <BrowserRouter>
        <Routes>
          <Route path="/users/:userId" element={<Home />} />
          <Route path="./hii" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Grid>
  </Grid>
);

export default App;
