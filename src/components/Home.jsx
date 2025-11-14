import Grid from "@mui/material/Grid"

export default function Home () {
  return <div>
    <Grid container spacing={10} className="about-container">
          <Grid item xs={12} md={4}>
            <p>software engineer</p>
          </Grid>
          <Grid item xs={12} md={4}>
            <p>language lover</p>
          </Grid>
          <Grid item xs={12} md={4}>
            <p>world traveler</p>
          </Grid>
        </Grid>
    <p>linguistically-savvy dev striving to break down communication barriers, improve information accessibility, and inspire creativity</p>
  </div>
}
