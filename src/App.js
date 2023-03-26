import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage/Loginpage";
import HomePage from './HomePage'
import AddQues from "./AddQuesAns/AddQues";
import Addans from './AddQuesAns/Addans'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/addans" element={<Addans />} />
          <Route path="/addques" element={<AddQues />} />
        </Routes>
      </BrowserRouter>
      {/* <Header /> */}
      {/* <LoginPage /> */}
      {/* <QuesAnsPage /> */}
    </div>
  );
}

export default App;