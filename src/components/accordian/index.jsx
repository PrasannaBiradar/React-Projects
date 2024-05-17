import { useState } from "react";
import data from "./data";
import './style.css';

export default function Accordian() {
    const [selected, setselected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId) {
        setselected(getCurrentId === selected ? null : getCurrentId);
    }

    function handleMultipleSelection(getCurrentId) {
        let cpyMultiple = [...multiple];
        const indexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

        if(indexOfCurrentId === -1) {
            cpyMultiple.push(getCurrentId);
        }
        else{
            cpyMultiple.splice(indexOfCurrentId,1);
        }

        setMultiple(cpyMultiple);
    }

    return (
    <div className="wrapper">
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable MultiSelection</button>
        <div className="accordian">
            {
                data && data.length > 0 ? 
                data.map(dataitem => (
                    <div className="item">
                        <div onClick={
                        enableMultiSelection ? 
                        () => handleMultipleSelection(dataitem.id) :
                        () => handleSingleSelection(dataitem.id)
                        }
                        className="title">
                            <h3>{dataitem.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            enableMultiSelection ? 
                            multiple.indexOf(dataitem.id) !== -1 && <div className="content">{dataitem.answer}</div>
                            : selected === dataitem.id && <div className="content">{dataitem.answer}</div>
                        }
                    </div>))
                : <div> No Data Found.</div>  
            }
        </div>
    </div>
    );
}