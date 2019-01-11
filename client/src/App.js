import React, { Component } from 'react';
import Main from './components/main';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      projectsName: [
                      {
                        url:'https://abdulwasa.github.io/website/',
                        source: 'https://github.com/Abdulwasa/website'
                      },
                      {
                        url:'https://abdulwasa.github.io/owngame/',
                        source: 'https://github.com/Abdulwasa/owngame'
                      },
                      {
                        url:'https://abdulwasa.github.io/video.github.io/',
                        source: 'https://github.com/Abdulwasa/video.github.io'
                      },
                      {
                        url:'https://abdulwasa.github.io/githubapi/',
                        source: 'https://github.com/Abdulwasa/githubapi'
                      },
                      {
                        url:'https://abdulwasa.github.io/optimization/',
                        source: 'https://github.com/Abdulwasa/optimization'
                      },
                      {
                        url:'https://abdulwasa.github.io/map/',
                        source: 'https://github.com/Abdulwasa/map'
                      },
                      {
                        url:'https://abdulwasa.github.io/buld/',
                        source: 'https://github.com/Abdulwasa/buld'
                      },
                      {
                        url:'https://abdulwasa.github.io/dual/',
                        source: 'https://github.com/Abdulwasa/dual'
                      },
                      {
                        url:'https://abdulwasa.github.io/resume/',
                        source: 'https://github.com/Abdulwasa/resume'
                      },
                      {
                        url:'https://abdulwasa.github.io/jasmine/',
                        source: 'https://github.com/Abdulwasa/jasmine'
                      },
                      {
                        url:'https://abdulwasa.github.io/mockup/',
                        source: 'https://github.com/Abdulwasa/mockup'
                      },
                      {
                        url:'',
                        source: ''
                      },
                      {
                        url:'',
                        source: ''
                      },
                      {
                        url:'',
                        source: ''
                      }
                    ]
                  }
                }
  render() {
    return (
      <div className="App">
        <header>
          <Main projectsName={this.state.projectsName}/>
        </header>
      </div>
    );
  }
}

export default App;
