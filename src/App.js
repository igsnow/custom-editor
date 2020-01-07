import React from 'react';
import BEditor from "./component/beditor";
import './App.css'

function App() {
    let editorContent = ''
    return (
        <div className='editor'>
            <BEditor content={editorContent}/>
        </div>
    );
}

export default App;
