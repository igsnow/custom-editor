import React from 'react';
import BEditor from "./component/beditor";
import './App.css'

function App() {

    let content = ''
    const height = 'auto'
    const minHeight = 200
    const maxHeight = 500
    const limit = 2
    const lang = 'zh'
    const placeholder = '请编辑商品详情...'
    const uploadUrl = 'http://test.wvcb.qilie.biz/cgi/upload/file/item/image'
    const handleContent = (event) => {
        console.log('parent: ', event);
    }

    return (
        <div className='editor'>
            <BEditor
                height={height}
                minHeight={minHeight}
                maxHeight={maxHeight}
                content={content}
                limit={limit}
                lang={lang}
                serverURL={uploadUrl}
                placeholder={placeholder}
                handleContent={handleContent}
            />
        </div>
    );
}

export default App;
