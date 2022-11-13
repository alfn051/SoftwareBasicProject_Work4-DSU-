import React from 'react';
import { useState } from 'react';
import Item from './Item';

function Notice({notices=[], onRemoveNotice=f=>f, onUpdateNotice=f=>f}) {
    const [txtFind, setFind] = useState('');
    return (
        <div>
            <h2>Notice</h2>
            <label>
                 
                 <input type='text' value={txtFind} placeholder="Find : "
                 onChange={(event)=>setFind(event.target.value)}></input>
            </label>
            {notices.filter(
                notice => notice.title.includes(txtFind)
            ).map(
                notice => <Item key={notice.id} {...notice}
                onRemove={onRemoveNotice} onUpdate={onUpdateNotice}></Item>
            )}
        </div>
    );
}

export default Notice;