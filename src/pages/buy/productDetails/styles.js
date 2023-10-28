import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
   
    container: {
        padding: '20px 30px',
        justifyContent: 'center',
    },

    pageHeader: {
        textAlign: 'center',
        justifyContent: 'center',
        padding: '40px',
        flexFlow: 'column !important',
        alignItems: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
       
        "& h1": {
            fontFamily: 'Lato',
            fontSize: '70px',
            fontWeight: 600,
            lineHeight: '115px',
            letterSpacing: '0em',
            textAlign: 'left',
            color: 'white',
            textTransform: 'uppercase',
        }
    },
   
   
}));

export default useStyles;
