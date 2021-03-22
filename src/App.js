import Header from "./components/ui/Header";
import Searchbar from './components/ui/Searchbar';


const App = () => {

  {/*
  useEffect(() => {
    const fetchUsers = async () => {
      const result = await axios(`https://api.github.com/users`)
      setUsers(result.data)
    }
    fetchUsers()
  }, [])
  */}

  return ( 
    <div className="App container-fluid">
      <Header />
      <Searchbar/>
    </div>
   );
}
 
export default App;
