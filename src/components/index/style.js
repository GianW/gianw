import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(theme => {
  return {
    card: {
      border:
        theme.palette.mode == 'dark'
          ? '0.5px solid rgb(238 238 238 / 21%)'
          : '0.5px solid #000',
      borderRadius: 6,
      padding: 20,
      cursor: 'pointer',
      display: 'flex',
      gap: 10,
      minHeight: '100%',
    },
    cardProj: {
      border:
        theme.palette.mode == 'dark'
          ? '0.5px solid rgb(238 238 238 / 21%)'
          : '0.5px solid #000',
      borderRadius: 6,
      padding: 20,
      cursor: 'pointer',
      display: 'block',
      gap: 4,
    },
    chip: {
      padding: 2,
      margin: 4,
      transition: '0.5s ease',
      '&:hover': {
        backgroundColor: theme.palette.mode == 'dark' ? '#fefefe' : '#d3b5d6',
      },
    },
    text: {
      fontSize: '17.6px',
    },
    textDesc: {
      marginTop: 5,
      color: '#919191',
    },
    cardGrid: {
      marginTop: 10,
      marginBottom: 30,
    },
  }
})
