import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import PostsServices from '../services/PostsServices';

function AddPost() {
    
    const history = useHistory();

    const [newPost, setNewPost] = useState({
        title: '',
        text:'',
        
      });

      const handleSubmit = async (e) => {
        e.preventDefault();
        if (id) {
          await PostsServices.edit(id, newPost);

        } else {
          await PostsServices.add(newPost);
        }

        history.push('/posts');

      };

      const handleReset = () => {
        setNewPost({
          title:'',
          text:'',
        });
      };

      return(
        <div>
            <h1>Add Post</h1>
        <form 
            onSubmit={handleSubmit}
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: 200,
                marginLeft: 15,
              }}
            >

            <input
            required
            type='text'
            minLength='2'
            value={newPost.title}
            placeholder='Title'
            onChange={({ target }) =>
            setNewPost({ ...newPost, title: target.value })
            }
            />

            <input
            required
            type='text'
            maxLength='300'
            value={newPost.text}
            placeholder='Text'
            onChange={({ target }) =>
            setNewPost({ ...newPost, text: target.value })
            }
            />
             <button>{id ? 'Edit' : 'Add Post'}</button>
            <button onClick={handleReset}>
                Reset
            </button>
        </form>


        </div>
        

      )
        
}

export default AddPost;