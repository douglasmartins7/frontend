import React, { Component } from 'react';
import api from '../services/api';

import './Feed.css';

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

class Feed extends Component {
    //ele serve para armazenar informações que quando ele for alterada ela reflete no body do html
    state = {
        feed: [],
    };

   //ele é montado de forma automatica quando o componente é montado em tela
   async componentDidMount() {
        // no post contém todos os dados dele que buscou e salvou no response
        const response = await api.get('posts');

        this.setState({ feed: response.data });
   }

    render() {
        return (
           <section id="post-list">
              { this.state.feed.map(post => (
                   <article key={post._id}> 
                    <header>
                        <div className='user-info'>
                            <span>{post.author}</span>
                            <span className="palce">{post.place}</span>
                        </div>

                        <img src={more} alt="mais" />
                    </header>

                    <img src= {`http://localhost:3333/files/${post.image}`} alt="" />

                    <footer>
                            <div className="actions">
                                <img src={like} alt="" />
                                <img src={comment} alt="" />
                                <img src={send} alt="" />
                            </div>

                            <strong>{post.likes} curtidas</strong>

                            <p>
                                {post.description}
                                <span>{post.hashtags}</span>
                            </p>
                    </footer>
               </article>
              )) }

           </section>
        );
    }
}

export default Feed;