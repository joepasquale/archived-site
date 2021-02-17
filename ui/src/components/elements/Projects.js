import React, { Component } from "react";
import Project from "../elements/Project";
import Resume from "../../resume.json";

class Projects extends Component {
    constructor(props) {
        super();
        this.state = { projects: [] };
    }

    render() {
        return (
            <section className="section" id="portfolio">
                <div className="container">
                {Resume.projects
                    .filter(project => new Date(project.date).getFullYear())
                    .map((item, j) => {
                        return (
                            <Project
                                key={j}
                                title={item.title}
                                date={new Date(item.date).toLocaleString("en-UK", {
                                    month: "long",
                                    year: "numeric"
                                })}
                                description={item.description}
                                url={item.url}
                            />
                        )
                    }
                    )}
                    </div>
            </section>
        );
    }
}

export default Projects;