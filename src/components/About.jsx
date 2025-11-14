import Grid from '@mui/material/Grid'
import '../styles/About.css'

function About() {
  return (
    <div>
        <Grid container spacing={10} className="about-container">
          <Grid item xs={12} md={4}>
            <h5>hometown</h5>
            <p>Portland, OR</p>
          </Grid>
          <Grid item xs={12} md={4}>
            <h5>living in</h5>
            <p>St. Louis, MO</p>
          </Grid>
          <Grid item xs={12} md={4}>
            <h5>occupation</h5>
            <p>Software Engineer </p>
          </Grid>
        </Grid>
        <div className="bio-container">
      <div className="bio">
        Hi! I'm Colleen, a software engineer with over three years of professional experience building ecommerce solutions for a global audience. After graduating from Lawrence University in 2020 with a degree in linguistics, I spent a year in 
        full-time volunteer service through AmeriCorps and then worked as a bartender while exploring 
        coding on the side through free online resources. I discovered that programming offered the perfect blend of 
        what I love most: language, creativity, and logic, which led me to pursue a Full Stack Web 
        Development Certificate from Washington University in St. Louis. In my free time, I enjoy 
        playing and writing music, spending time with friends, and learning the native language of 
        whichever country I hope to visit next (Até logo, Brasil!).
      </div>
      </div>
    </div>
  )
}

export default About