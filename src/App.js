import React from 'react';
import BEditor from "./component/beditor";
import './App.css'

function App() {
    let editorContent = ''

    const handleContent = (event) => {
        console.log('parent: ', event);
    }

    return (
        <div className='editor'>
            <BEditor content={editorContent} handleContent={handleContent}/>
        </div>
    );
}

export default App;
