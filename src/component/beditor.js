import React, {useState} from 'react'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'

const BEditor = (props) => {
    const [state, setState] = useState({
        editorState: BraftEditor.createEditorState(props.content)
    })

    const handleChange = (editorState) => {
        console.log('child: ', editorState.toHTML());
        setState({editorState})
        // 将富文本内容传递给父组件
        props.handleContent(editorState.toHTML())
    }

    // 上传
    const myUploadFn = (param) => {
        const serverURL = props.serverURL
        const xhr = new XMLHttpRequest()
        const fd = new FormData()
        const successFn = (response) => {
            // 服务端返回的上传图片链接，回传给富文本编辑器
            let resultObj = response.target.response && JSON.parse(response.target.response)
            let uploadUrl = resultObj.data.url
            param.success({
                url: uploadUrl
            })
        }

        const progressFn = (event) => {
            // 上传进度发生变化时调用param.progress
            param.progress(event.loaded / event.total * 100)
        }

        const errorFn = (response) => {
            // 上传发生错误时调用param.error
            param.error({
                msg: 'unable to upload.'
            })
        }

        xhr.upload.addEventListener("progress", progressFn, false)
        xhr.addEventListener("load", successFn, false)
        xhr.addEventListener("error", errorFn, false)
        xhr.addEventListener("abort", errorFn, false)

        fd.append('file', param.file)
        xhr.open('POST', serverURL, true)
        xhr.send(fd)

    }

    // 限制上传图片等资源文件大小
    const myValidateFn = (file) => {
        return file.size < 1024 * 1024 * props.limit
    }

    return (
        <BraftEditor
            value={state.editorState}
            language={props.lang}
            controls={[
                'undo', 'redo', 'separator',
                'font-size', 'line-height', 'letter-spacing', 'separator',
                'text-color', 'bold', 'italic', 'underline', 'strike-through', 'separator',
                'superscript', 'subscript', 'remove-styles', 'emoji', 'separator', 'text-indent', 'text-align', 'separator',
                'headings', 'list-ul', 'list-ol', 'blockquote', 'code', 'separator',
                'link', 'separator', 'hr', 'separator',
                'media', 'separator',
                'clear'
            ]}
            placeholder={props.placeholder}
            media={{
                uploadFn: myUploadFn,
                validateFn: myValidateFn
            }}
            contentStyle={{
                height: props.height || 'auto',
                minHeight: props.minHeight || 200,
                maxHeight: props.maxHeight || 500
            }}
            onChange={handleChange}/>
    )
}

export default BEditor
