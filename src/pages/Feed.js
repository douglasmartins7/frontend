import React, { Component } from 'react';

import './Feed.css';

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

class Feed extends Component {
    render() {
        return (
           <section id="post-list">
               <article>
                   <header>
                       <div className='user-info'>
                           <span> Douglas Santos</span>
                           <span className="palce">São paulo</span>
                       </div>

                       <img src={more} alt="mais" />
                   </header>

                   <img src="http://localhost:3333/files/t_rex_codes.jpg" alt="" />

                   <footer>
                        <div className="actions">
                            <img src={like} alt="" />
                            <img src={comment} alt="" />
                            <img src={send} alt="" />
                        </div>

                        <strong>900 curtidas</strong>

                        <p>
                            Um post da T-Rex week
                            <span>  #react  #trexweek  #top</span>
                        </p>
                   </footer>
               </article>

               <article>
                   <header>
                       <div className='user-info'>
                           <span> Douglas Santos</span>
                           <span className="palce">São paulo</span>
                       </div>

                       <img src={more} alt="mais" />
                   </header>

                   <img src="http://localhost:3333/files/t_rex_codes.jpg" alt="" />

                   <footer>
                        <div className="actions">
                            <img src={like} alt="" />
                            <img src={comment} alt="" />
                            <img src={send} alt="" />
                        </div>

                        <strong>900 curtidas</strong>

                        <p>
                            Um post da T-Rex week
                            <span>  #react  #trexweek  #top</span>
                        </p>
                   </footer>
               </article>
           </section>
        );
    }
}

export default Feed;