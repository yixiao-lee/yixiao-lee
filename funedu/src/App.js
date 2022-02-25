import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Main>main content</Main>
      <Footer>Footer</Footer>
    </div>
  );
}

export default App;
