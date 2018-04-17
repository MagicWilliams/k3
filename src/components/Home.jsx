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
            <div> 
                <div className="grid">
                    <div className="item">
                        <div className="item1-content">
                            <h1 id="name"> testing for name </h1>
                            <div id="link-section"> 
                                <a target="_blank" href="https://www.github.com/MagicWilliams">code</a>
                                <a target="_blank" href="https://www.twitter.com/MagicWilliams">tweets</a>
                                <a target="_blank" href="">resume</a>
                                <a target="_blank" href="http://dialupstuff.com">dialupstuff</a>
                            </div>
                        </div>
                    </div>
                    <div className="item2">
                        <div className="item2-content">
                            <div id="project-view">
                            </div> 
                            <h5 id="project-caption"> placholding caption </h5>
                        </div>
                    </div>
                    <div className="item3">
                        <h4> stuff i've made recently </h4>
                        <div className="project-section">
                            <p className = "marquee"><span> a design spec for social works chicago              an album, available at dialupstuff.com           a site for Psuedo Knitting Club               a PSN account, play fortnite w me             </span></p>
                        </div> 
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
