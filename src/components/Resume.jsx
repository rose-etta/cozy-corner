import { Grid } from '@mui/material'
// import portfolioResume from '../assets/colleen-murray-portfolio-resume.pdf'
import '../styles/Resume.css'
// import resumeScreenshot from '../assets/resume-screenshot.png'

function Resume() {
  return (
    <div className="skills-container">
      <div>
        <Grid container spacing={60}>
          <Grid item xs={12} md={6}>
            <div className="skills" id="technical-skills">
              <h4>Technical Skills</h4>
              <div className="list-item">HTML</div>
              <div className="list-item">CSS</div>
              <div className="list-item">Material UI</div>
              <div className="list-item">Bootstrap</div>
              <div className="list-item">JavaScript</div>
              <div className="list-item">React.js</div>
              <div className="list-item">Express.js</div>
              <div className="list-item">Handlebars.js</div>
              <div className="list-item">Node.js</div>
              <div className="list-item">GraphQL</div>
              <div className="list-item">Apollo Client</div>
              <div className="list-item">Git</div>
              <div className="list-item">SQL</div>
              <div className="list-item">MongoDB</div>
              <div className="list-item">Insomnia</div>
              <div className="list-item">Jest Testing</div>
              <div className="list-item">AWS</div>
              <div className="list-item">Amplify</div>
            </div>
          </Grid>

          {/* <Grid item xs={12} md={6} className="centered-grid-item">
            <div className="resume-image">
              <img src={resumeScreenshot} alt="resume"></img>
              <div className="resume-link">
                <a
                  href={portfolioResume}
                  target="_blank"
                  className="resume-link"
                  rel="noopener noreferrer"
                >
                  Download Resume Here
                </a>
              </div>
            </div>
          </Grid> */}
          <Grid item xs={12} md={6}>
            <div className="skills" id="soft-skills">
              <h4>Other Strengths</h4>
              <div className="list-item">Adaptability</div>
              <div className="list-item">Customer-Focused</div>
              <div className="list-item">Self-Motivation</div>
              <div className="list-item">Collaboration</div>
              <div className="list-item">Leadership</div>
              <div className="list-item">Education</div>
              <div className="list-item">Growth Mindset</div>
              <div className="list-item">Empathy</div>
              <div className="list-item">Translation</div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

// idea for this page: if you hover over or click on a skill
// a modal will pop up with all the relevant experience for that skill
export default Resume