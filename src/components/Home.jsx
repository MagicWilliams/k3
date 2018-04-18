import React from 'react';
import styles from './Home.css';
import ProjectLinksComp from './ProjectLink/ProjectLink';

class Home extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            desc: [
                "a UI i designed for SocialWorks Chicago", 
                "an EP i made with @dialupstuff. Available on Apple Music and Spotify.",
                "a site for rogue agency, a music label in new york"
            ],

            mediaLinks: [
                "    ", 
                "    ",
                "    "
            ],

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
                        <h4> projects i can show off publicly </h4>
                        <div>
                            {this.state.desc.map((desc, index) =>
                                 <p className="project-text"> {desc} </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
