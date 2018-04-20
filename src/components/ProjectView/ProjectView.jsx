import React from 'react';
import styles from './ProjectView.css';

class ProjectView extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            currProj: 0,
            projects: [{
                client: "SOCIAL WORKS CHICAGO",
                job: "FULL WEBSITE MOCKUP (UI/UX)",
                media: "/img/sw.gif"
            },
            {
                client: "ROGUE AGENCY",
                job: "SITE DEVELOPMENT (FRONT-END)",
                media: "/img/rogue.gif"
            },
            {
                client: "DIAL UP",
                job: "DIAL UP CD (SIDE A)",
                media: "/img/tape.gif"
            }]
        }
        this.updateProj = this.updateProj.bind(this);
    }

    componentDidMount() {
        this.updateProj();
    }

    updateProj() {
        let self = this;
        setInterval(function(){ 
            let newIndex = self.state.currProj;
            newIndex = (newIndex+1) % 3;
            self.setState({currProj: newIndex})
        }, 6000);
    }

    render() {

        let currProj = this.state.projects[this.state.currProj]

        return ( 
            <div> 
                <h4 className="proj-detail-text"> {currProj.job} </h4>
                <div className="proj-view">
                    <img src={currProj.media} />
                </div>
                <h4 className="proj-detail-text"> {currProj.client} </h4>
            </div>
        );
    }
}

export default ProjectView;
