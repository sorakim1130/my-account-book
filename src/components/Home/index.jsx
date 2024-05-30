import styled from "@emotion/styled";
import MonthNavigation from "../MonthNavigation/index.jsx";
import {useState} from "react";

const Home = ({expenses, setExpenses}) => {
  const [month, setMonth] = useState(1);

  return (
    <Container>
        <MonthNavigation month={month} setMonth={setMonth}/>
       {/*<Section>지출을 입력하는 섹션</Section>*/}
       <Section>캘린더 역할을 하는 섹션</Section>
       <Section>지출을 리스팅하는 섹션</Section>
    </Container>
  )
}

const Container = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
`;
const Section = styled.section`
  background: #fff;
  border-radius: 16px;
  padding: 20px;
`


export default Home