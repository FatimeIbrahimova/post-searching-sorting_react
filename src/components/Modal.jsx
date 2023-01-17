import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Modal = ({ isOpen, setOpen }) => {
    const [data, setData] = useState([])

    const getData = async () => {
        return await axios.get("https://jsonplaceholder.typicode.com/photos")
            .then(res => setData(res.data))
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div id="Modal" style={{ with: 300, border: "1px solid black" }} className={isOpen ? "active" : ""}>
            <div className="modal-box">
                <div className="close" onClick={() => setOpen(false)} style={{ cursor: "pointer", color: "red" }}>x</div>
                <div className="content">
                    {data.map((item, index) => {
                        return (item.id == data.id ? <p>{data?.title}</p> : "")
                    })}
                </div>
            </div>
        </div>
    )
}

export default Modal