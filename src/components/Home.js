import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const Home = (props) => {
    const history = useHistory();

    // setCircle이나 setList 등의 함수를 사용하지 않을거라면 처음부터 배열로 만들어 줘도 된다.
    // const circle = [0, 1, 2, 3, 4];  <-- 이렇게
    const [ circle, setCircle ] = useState([0, 1, 2, 3, 4]);
    const [ list, setList ] = useState(['월', '화', '수', '목', '금', '토', '일']);
      return (
        <>
        <Title>내 일주일은?</Title>
        {list.map((list, index) => {
            const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);
            const num = getRandom(0, 5);
            return (
              <Line>
                <h3>{list}</h3>
                { circle.map((e, i) => {
                  return <Circle
                  key={i}
                  style={{backgroundColor: i <= num ? 'tomato' : '#ddd'}}
                  />
                })}
                <Triangle onClick={() => {
                  history.push("/score/" + list + "요일");
                }}/>
              </Line>
            )
        })}
        </>
      );
    };

const Line = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 25px;
  h3 {
    padding: 5px;
    padding-right: 8px;
    background-color: white;
    border-radius: 30px;
  }
`

const Circle = styled.div `
  width: 30px;
  height: 30px;
  background-color: #ddd;
  border-radius: 30px;
  margin: 5px;
`

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-bottom: 15px solid transparent;
  border-top: 15px solid transparent;
  border-left: 25px solid purple;
  border-right: 25px solid transparent;
  margin-left: 5px;
`

const Title = styled.h1 `
  text-align: center;
`

export default Home;