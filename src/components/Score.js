import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

const Score = (props) => {
  const { day } = useParams();
  // console.log({day})
  
  // 라우팅
  const history = useHistory();

  const [circle, setCircle] = useState([0, 1, 2, 3, 4]);
  const [idx, setIdx] = useState();

  // useEffect(() => {
  //   const keyClick = (e) => {
  //     if(e.key = '1') {
  //       setIdx(0)
  //     } else if(e.key = '2') {
  //       setIdx(1)
  //     } else if(e.key = '3') {
  //       setIdx(2)
  //     } else if(e.key = '4') {
  //       setIdx(3)
  //     } else if(e.key = '5') {
  //       setIdx(4)
  //     }
  //   }
  //   window.addEventListener("keydown", keyClick);
  //   return () => {
  //     window.removeEventListener("keydown", keyClick);
  //   }
  // },[])
  

  // function checkKeyPressed(e) {
  //   e.key <= '5' ? console.log("제대로 눌리고 있음") : console.log("안눌림")
  // }           

  return (
    <Container>
      <h1><Day>{day}</Day> 평점 남기기</h1>
        <Line>  
          { circle.map((e, i) => {
            return <Circle 
              key={i}
              onClick={() => {
                setIdx(i)
              }}
              style={{backgroundColor: i <= idx ? 'tomato' : '#ddd'}}
            />
            })
          }
        </Line>
      <button onClick={() => 
        history.push("/")
      }> 평점 남기기</button>
    </Container>
  )
}

const Day = styled.span `
  background-color : lightsalmon;
  border: 1px solid lightsalmon;
  border-radius: 10px;
  color: white;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  
  // Styled Component를 이용하면 Nesting이 가능하다.
  button {
    width: 150px;
    height: 60px;
    margin-top: 40px;
    border: 1px solid lightsalmon;
    border-radius: 5px;
    font-size: 20px;
    background-color: lightsalmon;
  }
`

const Line = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Circle = styled.div `
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: 5px;
  margin-top: 40px;
  }
`

export default Score;