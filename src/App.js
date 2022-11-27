import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Todos from './components/Todos';
import Contacts from './components/Contacts';


function App() {
  return (
    <div>
      <h1>Homepage</h1>
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="todos" element={<Todos />} />
          <Route path="contacts" element={<Contacts />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
