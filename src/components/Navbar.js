import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


import Typography from '@material-ui/core/Typography';


const Navbar = () => {
    return (
        <div>
            <Grid container className='main-nav' >
                <Grid item md={12} sm={12} xs={12} >
                    <AppBar position="static" style={{ backgroundColor: '#fafafa' }}>
                        <Toolbar>

                            <Typography style={{ color: 'grey' }}>
                                NIKE
                            </Typography>
                            <ul className='second-nav'>
                                <b> <li  >UPCOMMING</li> </b>
                              
                            </ul>
                            {/* <ul className='second-nav-cart'>
                                <b>  </b>
                            </ul> */}

                        </Toolbar>
                    </AppBar>
                </Grid>


            </Grid>

        </div>


    );
}

export default Navbar;