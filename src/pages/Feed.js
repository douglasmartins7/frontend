import React, { Component } from 'react';

import './Feed.css';

import more from '../assets/more.svg';
import like from '../assets/like,svg';
import comment from '../assets/send.svg';
import send from '../assets/send.svg';

class Feed extends Component {
    render() {
        return (
            <section id="post-list">
                <article>
                    <header> 
                        <div className= "user-info">
                            <span>Douglas Martins</span>
                            <span className="place">São Paulo</span>
                        </div>

                        <img src={more} alt="Mais" />
                    </header>

                    <img src="http://localhost:3333/files/trex-codes.jpeg" alt="">

                    <footer>
                        <div className="actions">
                            <img src={like} alt=""/>
                            <img src={comment} alt=""/>
                            <img src={send} alt=""/>
                        </div>

                        <strong>900 curtidas</strong>

                        <p>
                            Um post muito massa na T-RexStack
                            <span>#react #T-RexStack #top</span>
                        </p>
                    </footer>
                </article>
            </section>
        );
    }
}

export default Feed;