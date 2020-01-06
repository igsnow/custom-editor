import 'braft-editor/dist/index.css'
import React, {useState} from 'react'
import BraftEditor from 'braft-editor'

const BEditor = () => {
    const [state, setState] = useState({
        editorState: BraftEditor.createEditorState('null')
    })

    const handleChange = (editorState) => {
        setState({editorState})
    }

    return (
        <BraftEditor value={state.editorState} onChange={handleChange}/>
    )
}

export default BEditor
