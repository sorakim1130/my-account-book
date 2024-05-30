import styled from "@emotion/styled";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home/index.jsx";
import {useState} from "react";

const App = () => {
    const [expenses, setExpenses] = useState([]);
  
  return (
      <Container>
          <BrowserRouter>
              <Routes>
                  <Route path={"/"} element={<Home expenses={expenses} setExpenses={setExpenses}/>}></Route>
                  <Route path={"/detail"} element={<div>여기는 지출 디테일페이지 입니다.</div>}></Route>
              </Routes>
          </BrowserRouter>
          )
      </Container>
  )}

const Container = styled.div`
  
`;


export default App