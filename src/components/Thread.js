import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/post.actions";
import { isEmpty } from "./Utils";
import Card from "./Post/Card";

const Thread = () => {
    const [loadPost, setLoadPost] = useState(true);
    const [count, setCount] = useState(5);
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.postReducer);

    useEffect(() => {
        if(loadPost) {
            dispatch(getPosts(count));
            setLoadPost(false);
        }

    }, [loadPost, dispatch, count]);
    return (
        <div className="thread__container">
           <ul>
               {!isEmpty(posts[0]) && posts.map((post) => {
                   return <Card post={post} key={post._id} />;
               } )

               }
           </ul>
            
        </div>
    )

}

export default Thread;