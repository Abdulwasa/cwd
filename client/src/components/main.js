import React, { Component } from 'react';

class Main extends React.Component{
  constructor(props) {
    super(props)
  }
  render(){
      return(
        <div>
        <ul className="projects">
          {
            this.props.projectsName && this.props.projectsName.map((project, i)=>{
                return (
                        <li key={i}>
                              <h3>schroll donw and up to see the whole website or cklick on It to open on new tabe.</h3>
                        <a href={project.source} target="_blank">show source on Github</a>
                        
                          <object
                                width="500"
                                height="400"
                                data={project.url}
                                className="objects">
                          </object>
                        </li>
                      )
              })
          }
          </ul>
        </div>
      )
  }
}

export default Main;
