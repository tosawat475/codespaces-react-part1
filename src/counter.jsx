import { useState } from "react";
import './Hello.css';
export default function Counter() {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState("type here!");
    return (<>
        <input 
            type="text"
            value={value}
            onChange={event => onTextChange(event)} />
        <h3>{value.length}</h3>
        
        <button onClick={() => setCount(count + 1)}>
            Click me
        </button>
        <button onClick={() => setCount(0)}>
            Reset
        </button>
        <p>You clicked {count} times</p>
    </>
    );
}