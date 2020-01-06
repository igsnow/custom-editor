import React from "react";
import {Editor} from "@tinymce/tinymce-react";

const  handleEditorChange = (e) => {
    console.log('Content was updated:', e.target.getContent());
}

const TEditor = () => {
    return (
        <Editor
            initialValue="<p>This is the initial content of the editor</p>"
            init={{
                height: 300,
                menubar: false,
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                ],
                toolbar:
                    'undo redo | formatselect | bold italic backcolor | \
                    alignleft aligncenter alignright alignjustify | \
                    bullist numlist outdent indent | removeformat | help'
            }}
            onChange={handleEditorChange}
        />
    )
}

export default TEditor
