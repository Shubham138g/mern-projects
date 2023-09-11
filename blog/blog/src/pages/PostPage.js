import React, { useEffect, useState } from 'react';


const PostPage = () => {
    const [postinfo, setPostInfo] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:4000/post${id}`)
            .then(response => {
                response.json().then(postinfo => {
                    setPostInfo(postinfo);
                });
            });
    }, []);
    return (
        <div>
            <h1>postpage</h1>
        </div>
    );
}

export default PostPage;
