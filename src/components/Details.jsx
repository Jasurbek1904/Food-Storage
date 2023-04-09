import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { currentContext, dataContext } from "./ContextProvider/DataProvider";

export default function Details() {

    const { id } = useParams();
    const navigate = useNavigate()


    const all = useContext(dataContext);
    const [current] = useContext(currentContext);
    const [obj, setObj] = useState([])


    useEffect(() => {
        axios.get(`http://localhost:9000/${current}/${id}`)
            .then(res => {
                setObj(res.data)
            })
            .catch(err => console.log(err))

    }, [current])

    return (
        <div className="container">

            <div className="row">
                <div className="col-md-6">
                    <h3 className="mt-3 text-dark">Title : <strong>{obj.title}</strong></h3>
                    <b className="mt-3 text-dark">Price : {obj.price}</b>
                </div>
                <div className="col-md-6">
                    <img src={obj.image} className='img-fluid' alt="" />
                </div>
            </div>
            <button type="button" className="btn btn-primary w-25" onClick={() => navigate(-1)}>Back</button>
        </div>
    )
}