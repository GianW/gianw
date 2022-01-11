import PropTypes from 'prop-types'
import Header from '/src/Header'
import { makeStyles } from '@mui/styles'
import { Typography, Grid } from '@mui/material'
import { getSortedPostsData } from '/lib/dataSource'
import { MainLastPosts } from '/components/MainLastPosts'
import { MainLastProjects } from '/components/MainLastProjects'
import { MainLastBrains } from '/components/MainLastBrains'
import { SocialLinks } from '/components/SocialLinks'
import { AppHeader } from '/components/AppHeader'

const useStyles = makeStyles(theme => {
  return {
    root: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(2),
    },
  }
})

export default function Home({ blogPosts }) {
  const classes = useStyles()
  return (
    <>
      <Header title={'Gian Winckler'} />
      <AppHeader />
      <Grid
        container
        spacing={2}
        className={classes.root}
        alignItems='flex-start'
        direction='row'
        justifyContent='center'>
        <Grid item xs={9} alignItems='center'>
          <SelfPresentation />
          <SocialLinks />
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        direction='row'
        justify='flex-start'
        alignItems='flex-start'
        justifyContent='center'
        className={classes.root}>
        <Grid item xs={10} sm={6} md={3}>
          <MainLastPosts blogPosts={blogPosts} />
        </Grid>
        <Grid item xs={10} sm={6} md={3}>
          <MainLastProjects />
        </Grid>

        <Grid item xs={10} sm={6} md={3}>
          <MainLastBrains />
        </Grid>
      </Grid>
    </>
  )
}

Home.propTypes = {
  blogPosts: PropTypes.array,
}

const SelfPresentation = () => (
  <>
    <Typography variant='h5'>Hi there! I&apos;m Gian.</Typography>
    <Typography variant='h6'>
      I&apos;m a software engineer who loves to find new ways to solve real
      problems with code.
    </Typography>
    <Typography variant='h6'>
      This website is my digital laboratory where i try some things and share
      another.
    </Typography>
    <Typography variant='body1'></Typography>
  </>
)

export async function getStaticProps() {
  const blogPosts = (await getSortedPostsData()).slice(0, 5) || []
  return {
    props: { blogPosts },
  }
}
