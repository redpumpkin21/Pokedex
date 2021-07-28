import './App.css';
import { Route, Switch } from "react-router-dom";
import Header from './componets/header'
import Footer from './componets/footer'
import{useState, useEffect} from 'react'
import MyTeam from './pages/myTeam'
import Main from './pages/main'
function App() {
  //alexis video says that if the api is in my pokemonlist 
  // then it will cosntantly  do an API call
  const api = 'https://pokeapi.co/api/v2/pokemon?limit=151'
  const [list, setList] = useState([])

    const getList =async () => {
        const response = await fetch(api)
        const data = await response.json()
        setList(data.results)
    }
    useEffect (() => {
      getList()
  }, [])
  return (
    <div className="App">
      <Header />
      <main>
      <Switch>
        <Route exact path="/">
          <Main list={list}/>
        </Route>
        
        <Route  path="/myteam">
          <MyTeam />
        </Route>
      </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
