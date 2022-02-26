// import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { Container, Grid } from '@mui/material';
import { makeStyles } from "@mui/styles";
import bg from './images/woman-3083379.jpg';

const useStyles = makeStyles((theme) => ({
  main : {
    // marginTop : "1em",
    display: "flex",
    minHeight: "100vh",
    minWidth: "100wh",
    flexDirection: "column",
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    opacity: 0.8
  }
}))

function App() {
  const classes = useStyles()
  return (
    <div className={classes.main}>
      <Header/>
      <Container >
        <Grid container>
          <Grid item sm={12}>
          <Main/>
          </Grid>
        </Grid>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
