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
                <div className="Home-body">
                    <div className="left-col">
                        <h1 id="name"> david latimore ii </h1>
                        <div id="link-section"> 
                            <a target="_blank" href="https://www.github.com/MagicWilliams">code</a>
                            <a target="_blank" href="https://www.twitter.com/MagicWilliams">tweets</a>
                            <a target="_blank" href="">resume</a>
                            <a target="_blank" href="http://dialupstuff.com">dialupstuff</a>
                        </div>
                    </div>
                    <div className="right-col">
                        <div id="project-view">
                        </div> 
                        <h5 id="project-caption"> placholding caption </h5>
                    </div>
                </div>
                <div className="Home-footer">
                    <h4> stuff i've made recently </h4>
                    <div className="project-section">
                        <ul>
                            <li>a design spec for social works chicago</li>
                            <li>an album, available at dialupstuff.com</li>
                            <li>a site for Psuedo Knitting Club</li>
                            <li>a PSN account, play fortnite w me</li>
                        </ul>
                    </div> 
                </div>
            </div>
        );
    }
}

export default Home;
