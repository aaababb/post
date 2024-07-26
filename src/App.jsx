import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Post from './Post';
import Video from './video';


function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/post' element={<Post/>}/>
      <Route path='/video' element={<Video/>}/>
    </Routes>
      
    </>
  );
}

export default App;

