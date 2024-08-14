import LoginScreen from './Component/Login';
import Home from "./Component/Home"
import Blog from "./Component/Blog"
import Camera from "./Component/Camera"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return(
    <Router>
      <Routes>
        <Route
          exact
          path='/'
          element={<LoginScreen/>}
        />

        <Route
          path='/home'
          element={<Home/>}
        />

        <Route
          path='/blog'
          element={<Blog/>}
        />

          <Route
          path='/camera'
          element={<Camera/>}
        />
      </Routes>

    </Router>
    
  );
    
}


export default App;
