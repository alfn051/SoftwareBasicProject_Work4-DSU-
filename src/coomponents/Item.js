import React from 'react';
import { useState } from 'react';
import InputForm from './InputForm';

function Item({id = '', title="NoTitle", content="NoContent", onRemove=f=>f, onUpdate=f=>f}) {

    const [editable, setEditable] = useState(false);

    const handleClick= ()=>{
        onRemove(id);
    }

    return (
        <div>
            <h3>{title}</h3>
            <p>{content}</p><button onClick={()=>editable? setEditable(false): setEditable(true)}>{editable? "취소": "수정"}</button><button onClick={handleClick}>삭제</button>
            {editable? <InputForm id={id} title={title} content={content} onUpdate={onUpdate} onEdit={setEditable}></InputForm> : null}
        </div>
    );
}

export default Item;

