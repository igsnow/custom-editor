import React, {useState} from "react";
import {Editor} from "@tinymce/tinymce-react";


const TEditor = () => {
    const [state, setState] = useState({
        content: 'igsnow'
    })

    const handleEditorChange = (content) => {
        setState({content})
        console.log('Content was updated:', content);
    }

    return (
        <Editor
            apiKey='rl4uh3nqhgo7qitn00sit4ogttqityvuh96463up3qa6y3rf'
            // initialValue="<p>This is the initial content of the editor</p>"
            value={state.content}
            init={{
                height: 300,
                language: 'zh_CN',
                menubar: false,
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                ],
                toolbar:
                    `undo redo | formatselect | bold italic backcolor | 
                    alignleft aligncenter alignright alignjustify | 
                    bullist numlist outdent indent | removeformat | help`
            }}
            onEditorChange={handleEditorChange}
        />
    )
}

export default TEditor
