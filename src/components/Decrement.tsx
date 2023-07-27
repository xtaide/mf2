import React from "react";
// @ts-ignore
import {useStore} from 'store/store'
import './Decrement.css'

export const Decrement: React.FC = () => {
    const {decrement} = useStore()
    return (
        <button className='decrement' onClick={decrement}>decrement</button>
    );
}