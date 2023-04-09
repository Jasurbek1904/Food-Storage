import axios from "axios";
import React, { useState, useEffect, createContext } from "react";


export const dataContext = createContext();
export const currentContext = createContext();


export function DataProvider(props) {


    const [all, setAll] = useState([])

    const changeData = async (name) => {
        const { data } = await axios.get("http://localhost:9000/" + name);
        setAll(data)
    }

    useEffect(() => {
        axios.get("http://localhost:9000/burger")
            .then(res => {
                setAll(res.data)
            })
    }, [])

    return (
        <dataContext.Provider value={[all, changeData]}>
            {props.children}
        </dataContext.Provider>
    )
}

export function CurrentDataProvider(props) {
    const [current, setCurrent] = useState("burger")
    return (
        <currentContext.Provider value={[current, setCurrent]}>
            {props.children}
        </currentContext.Provider>
    )
}