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
    stepBox: {
        "& svg": {
            background: '#981B46',
            color: 'white',
            borderRadius: '50px',
            padding: '7px',
            fontSize: '34px',
        },
        "& h3": {
            color: '#981B46',
            fontFamily: 'Lato',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '17px',
            letterSpacing: '0em'
        }
        
    },
    whiteBox: {
        boxShadow: '0px 0px 20px 0px #00000040',
    }
   
   
}));

export default useStyles;
