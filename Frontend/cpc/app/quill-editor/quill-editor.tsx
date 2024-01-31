import hljs from "highlight.js";
import dynamic from "next/dynamic";
import './quill.css';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(
    () => {
        //@ts-ignore
        window.hljs = hljs;
       return import ("react-quill")
    }, {
    ssr: false,
    loading: () => <p>Cargando editor...</p>
});

interface QuillEditorProps {
    content: string;
    allowCodeBlock: boolean;
    setContent: React.Dispatch<React.SetStateAction<string>>;
}

export default function QuillEditor(props: QuillEditorProps) {

    const modules = {
        syntax: true,
        toolbar: [
            [{ 'header': [2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            props.allowCodeBlock ? ['link', 'code-block'] : ['link'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['clean']
        ],
    };

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'link', 'code-block',
        'list', 'bullet', 'indent',
    ];

    return (
        <ReactQuill
            className="w-full h-fit"
            modules={modules}
            formats={formats}
            theme="snow"
            value={props.content}
            onChange={props.setContent} 
        />
    );
}