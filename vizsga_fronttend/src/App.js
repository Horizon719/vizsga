import { useEffect, useState } from 'react';
import './App.css';
import DataService from './model/DataService';
import SelectInput from './components/SelectInput';
import Szavak from './components/Szavak';

const dataService = new DataService();

function App() {
  const[temak, setTemak] = useState([]);
  const[temaSzavak, setTemaSzavak] = useState([]);
  const[temaId, setTemaId] = useState(1);
  const[temaSzavakVegpont, setTemaSzavakVegpont] = useState("/szavak/tema/" + temaId);

  useEffect(()=>{
    dataService.get("/tema", temaFn);
    dataService.get(temaSzavakVegpont, temaSzavakFn);
  }, []);

  function temaFn(response){
    setTemak(response.data);
  }

  function temaSzavakFn(response){
    setTemaSzavak(response.data);
  }

  function handleChange(e){
    setTemaId(e.target.selectedIndex+1);
    setTemaSzavakVegpont("/szavak/tema/" + temaId);
    dataService.get(temaSzavakVegpont, temaSzavakFn);
    console.log(temaSzavakVegpont, e.target.selectedIndex, temaId);
  }

  return (
    <div className="App">
      <header className="App-header">
        Szótár
      </header>
      <article>
        <SelectInput temak={temak} handleChange={handleChange}/>
        <div className='fejlec'>
          <div>ANGOL</div>
          <div>MAGYAR</div>
          <div>visszajelzés</div>
        </div>
        <Szavak temaSzavak={temaSzavak} />
      </article>
    </div>
  );
}

export default App;
