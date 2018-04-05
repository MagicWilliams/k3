import React from 'react';
import styles from './Home.css';

class Home extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return ( 
            <div className="Home">
                <div className="left-col">
                    <h1 id="name"> david latimore ii </h1>
                    <div id="link-section"> 
                        <a href="https://www.github.com/MagicWilliams"> code </a>
                        <a href="https://www.twitter.com/MagicWilliams"> tweets </a>
                        <a href=""> resume </a>
                        <a href="https://www.dialupstuff.com"> dialupstuff </a>
                    </div>
                </div>
                <div className="right-col">
                    <div id="project-view">
                    </div> 
                </div>
            </div>
        );
    }
}

export default Home;
