import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuesAnsPage from "./components/Q&Alist/QuesAnsPage";
// import Header from "./components/Header/Header";
import LoginPage from "./components/LoginPage/LoginPage";
import HomePage from './components/HomePage'
import AddQues from "./components/AddQuesAns/AddQues";
import Addans from './components/AddQuesAns/Addans';
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