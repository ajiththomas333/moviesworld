import Navbar from "./compounds/navbar/Navbar";
import"./App.css"
import Banner from "./compounds/banner/Banner";
import Poster from "./compounds/posters/Poster";
import { tseries,movies, fight } from "./compounds/posters/Urls";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Poster url={tseries} title='series'/>
      <Poster url={movies} title='movies' issmall/>
      <Poster url={fight} title='fight' issmall/>
    
      
    </div>
  );
}

export default App;
