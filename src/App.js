import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Adress from './conponents/profile/Adress';
import FullName from './conponents/profile/FullName';
import ProfilePhoto from './conponents/profile/ProfilePhoto';
import { Container, Navbar } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
       <Navbar bg="light">
    <Container>
      <Navbar.Brand>Profile</Navbar.Brand>
    </Container>
  </Navbar>
     <FullName/>
     <ProfilePhoto/>
     <Adress/>
    </div>
  );
}

export default App;
