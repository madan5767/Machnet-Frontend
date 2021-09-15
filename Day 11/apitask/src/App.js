import './App.css';
import useFetch from "./useFetch";

function App() {
  const { data: bored, loading, error, refetch} = useFetch("https://www.boredapi.com/api/activity");
  if (loading) return <h1> LOADING...</h1>

  if (error) console.log(error);
  // console.log(bored);
  
  return (
    <div className="App">
      <h1>Bored?? Get some Tips...</h1>
      <div>
        <input type="text" name="search" placeholder="Keyword..."/>
        <button onClick={refetch}>Search</button>
      </div>
      <div class="content">
      <h2>
        <label>Hint: </label>
          {bored?.type}
      </h2>
      <h3>
        <label>Activity:</label>
        {bored?.activity}
      </h3>
      <button class="btn-next" onClick={refetch}>Get Me Another Tip</button>
      </div>      
    </div>
  );
}

export default App;
