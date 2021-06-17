import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';



import Typography from '@material-ui/core/Typography';


const Footer = () => {
    return (
        <div>
            <Grid container >
                <Grid item md={12} sm={12} xs={12} >


                    <ul >
                        <b> <li className='footer'  > 	&copy; NIKE AIR MAX</li> </b>
                    </ul>

                </Grid>


            </Grid>

        </div>
    );
}

export default Footer;