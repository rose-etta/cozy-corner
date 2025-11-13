import Grid from '@mui/material/Grid'
import '../styles/About.css'

function About() {
  return (
    <div>
      <div>
        <Grid container spacing={4}>
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
            <p>Software Engineer at MilliporeSigma</p>
          </Grid>
        </Grid>
      </div>
      <div className="bio">
        
      </div>
    </div>
  )
}

export default About