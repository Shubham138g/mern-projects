import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Navigate, useParams } from 'react-router-dom';

const modules = {
    toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image'],
        ['clean']
    ],
}

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
];

const EditPost = () => {
    const {id} =useParams();
    const [title, settitle] = useState('');
    const [summary, setsummary] = useState('');
    const [content, setcontent] = useState('');
    const [files, setfiles] = useState('');
    const [redirect, setredirect] = useState(false);

    useEffect(()=>{
        fetch('http://localhost:4000/post/'+id)
        .then(response=>{
            response.json().then(postInfo=>{
                settitle(postInfo.title);
                setcontent(postInfo.content);
                setsummary(postInfo.summary);
            });
        });
    },[]);

    

    const updatePost = async(e) => {
        e.preventDefault();
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('id',id);
        if(files[0]){

            data.set('file',files[0]);
        }
        const response=await fetch('http://localhost:4000/post',{
            method:'PUT',
            body:data,
            credentials:'include',
        });

        if(response.ok){
            setredirect(true)
        }
    }

    if (redirect) {
        return <Navigate to={'/post/'+id} />
    }

    return (
        <>
            <form onSubmit={updatePost}>
                <input type="title"
                    placeholder={'Title'}
                    value={title}
                    onChange={ev => settitle(ev.target.value)}
                />
                <input type="sumary"
                    placeholder={'Summmary'}
                    value={summary}
                    onChange={ev => setsummary(ev.target.value)}

                />
                <input type="file"
                    onChange={ev => setfiles(ev.target.files)}
                />
                <ReactQuill
                    modules={modules}
                    formats={formats}
                    theme='snow'
                    value={content}
                    onChange={newValue => setcontent(newValue)}
                />
                <button style={{ marginTop: '10px' }}>Update Post</button>
            </form>
        </>
    );
}

export default EditPost;
