import React, {useState} from 'react';
import styles from "./Burger.module.css";

const Button = () => {

    const [count, setCount] = useState(0);

    function decrementCount() {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    function incrementCount() {
        setCount(count + 1);
    }

    return (
        <>
            <div className={styles.burgerBtn}>
                <button onClick={decrementCount}>-</button>
                <span> {count} </span>
                <button onClick={incrementCount}>+</button>
            </div>
        </>
    );
};

export default Button;