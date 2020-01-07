import React from 'react';
import BEditor from "./component/beditor";
import './App.css'

function App() {
    let editorContent = ''

    const uploadUrl = 'http://test.wvcb.qilie.biz/cgi/upload/file/item/image'

    const handleContent = (event) => {
        console.log('parent: ', event);
    }

    return (
        <div className='editor'>
            <BEditor
                content={editorContent}
                serverURL={uploadUrl}
                handleContent={handleContent}
            />
        </div>
    );
}

export default App;
