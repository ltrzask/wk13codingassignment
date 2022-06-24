
import './App.css'; //used CSS to style it for this project
import LogIn from './pages/LogIn';
import NavBar from './components/navbar';
//can't forget to import all my files with my components

//everything will end up here
function App() { //using this function makes it very easy to put everything together
  return (
    <>
      <NavBar/>
      <LogIn/>
    </>
  );
}
//must export it
export default App;

