import React from 'react';
import { useState } from 'react';
import Item from './Item';

function Subject({subjects=[], onRemoveSubject=f=>f, onUpdateSubject=f=>f}) {
    const [txtFind, setFind] = useState('');
    return (
        <div>
           <h2>Subject</h2>
           <label>
                
                <input type='text' value={txtFind} placeholder="Find : "
                onChange={(event)=>setFind(event.target.value)}></input>
            </label>
            {subjects.filter(
                subject => subject.title.includes(txtFind)
            ).map(
                subject => <Item key={subject.id} {...subject}
                onRemove={onRemoveSubject} onUpdate={onUpdateSubject}></Item>
            )} 
        </div>
    );
}

export default Subject;
