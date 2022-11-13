import React from 'react';
import { useState } from 'react';

function InputForm({id='',title='',content='',onAdd=f=>f, onUpdate=f=>f, onEdit=f=>f}) {
    const [txtTitle, setTitle] = useState(title);
    const [txtContent, setContent]= useState(content);

    const onSubmit = (event) => {
        event.preventDefault();
        if(id){
            onUpdate(id, txtTitle, txtContent);
            setTitle('');
            setContent('');
            onEdit(false)
        }else{
            onAdd(txtTitle, txtContent);
            setTitle('');
            setContent('');
        }
        
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type='text' value={txtTitle} placeholder='Title' 
                onChange={(event)=> setTitle(event.target.value)}></input>
                <input type='text' value={txtContent} placeholder='Contents' 
                onChange={(event)=> setContent(event.target.value)}></input>
                <input type='submit' value={id? '수정': '추가'}></input>
            </form>
        </div>
    );
}

export default InputForm;