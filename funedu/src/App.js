import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { Container, Grid } from '@mui/material';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  main : {
    marginTop : "1em",
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column"
  }
}))

function App() {
  const classes = useStyles()
  return (
    <div >
      <Header/>
      <Container className={classes.main}>
        <Grid container>
          <Grid item sm={4}>
          </Grid>
          <Grid item sm={4}>
          <Main/>
          </Grid>
          <Grid item sm={4}>
          </Grid>
        </Grid>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
