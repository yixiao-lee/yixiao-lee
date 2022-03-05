// import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { makeStyles } from "@mui/styles";
import bg from './images/woman-3083379.jpg';
// import ErrorBoundary from './components/ErrorBoundary';

const useStyles = makeStyles((theme) => ({
  main : {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    // alignSelf: "center",
    // Height: '100vh',
    minHeight: '100vh',
    maxWidth: "1680px",
    margin: "auto",
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundPositionY:"4em",
    backgroundPosition: "center",
    backgroundSize: "100% auto",
    backgroundAttachment: "fixed",
    opacity: 0.8
  }
}))

function App() {
  const classes = useStyles()
  return (
      <div className={classes.main}>
        <Header/>
        {/* <ErrorBoundary> */}
         <Main/>
        {/* </ErrorBoundary> */}
        <Footer/>
      </div>
  );
}

export default App;
