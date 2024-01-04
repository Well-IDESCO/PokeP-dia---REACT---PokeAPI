import React from "react";
import { Container, Grid, Skeleton } from "@mui/material";
export const Skeletons = () => {
    return(
        <>
<Container maxWidth="lg" style={{ marginTop: '20px' }}>
  <Grid container spacing={8}>
    <Grid item xs={3}>
      <Skeleton variant="rounded" width={270} height={290} />
    </Grid>
    <Grid item xs={3}>
      <Skeleton variant="rounded" width={270} height={290} />
    </Grid>
    <Grid item xs={3}>
      <Skeleton variant="rounded" width={270} height={290} />
    </Grid>
    <Grid item xs={3}>
      <Skeleton variant="rounded" width={270} height={290} />
    </Grid>
  </Grid>
</Container>

<Container maxWidth="lg" style={{ marginTop: '20px' }}>
  <Grid container spacing={8}>
    <Grid item xs={3}>
      <Skeleton variant="rounded" width={270} height={290} />
    </Grid>
    <Grid item xs={3}>
      <Skeleton variant="rounded" width={270} height={290} />
    </Grid>
    <Grid item xs={3}>
      <Skeleton variant="rounded" width={270} height={290} />
    </Grid>
    <Grid item xs={3}>
      <Skeleton variant="rounded" width={270} height={290} />
    </Grid>
  </Grid>
</Container>
<Container maxWidth="lg" style={{ marginTop: '20px' }}>
<Grid container spacing={8}>
    <Grid item xs={3}>
      <Skeleton variant="rounded" width={270} height={290} />
    </Grid>
    <Grid item xs={3}>
      <Skeleton variant="rounded" width={270} height={290} />
    </Grid>
    <Grid item xs={3}>
      <Skeleton variant="rounded" width={270} height={290} />
    </Grid>
    <Grid item xs={3}>
      <Skeleton variant="rounded" width={270} height={290} />
    </Grid>
  </Grid>
</Container>

</>

    )
}