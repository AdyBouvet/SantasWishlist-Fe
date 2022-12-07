import './App.css';
import GiftPerson from './components/gift-person/GiftPerson';
import GiftScreen from './components/gift-screen/GiftScreen'
import PersonScreen from './components/person-screen/PersonScreen';

function App() {
  return (
    <div className="App">
      {
        <PersonScreen />
        //<GiftScreen/>
      }
      <br />
      <br />
      <br />
      <br />
      <br />
      {
        //<GiftPerson />
      }
    </div>
  );
}

export default App;
