import { useState } from "react";
import styled from "@emotion/styled";
import { Button } from "../button";

const CounterStyled = styled.div`
    padding: 16px;
    border-radius: 8px;
    background-color: #f1f1f1;
    h2 {
      margin: 0;
      margin-bottom: 16px;
    }
    .controls button:first-child {
      margin-right: 8px;
    }`;

export function Counter() {
    const [count, setCount] = useState(0);
    return (
        <CounterStyled>
            <h2 style={{ color: count > 10 ? 'red' : 'black'}}>Contagem: {count}</h2>
            <button onClick={()=> setCount(count + 1)} style={{marginRight:8}}>Aumentar</button>
            <button onClick={()=> setCount(count - 1)}>Diminuir</button>
            <Button>Clique aqui!</Button>
        </CounterStyled>
    );     
}