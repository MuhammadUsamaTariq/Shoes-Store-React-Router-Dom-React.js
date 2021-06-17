import Grid from '@material-ui/core/Grid';

import shoesOne from '../images/shoesOne.jpg';
import shoesTwo from '../images/shoesTwo.jpg';
import shoesThree from '../images/shoesThree.jpg';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

const ShoesList = () => {
    return (
        <>
        <Grid container direction="row" spacing={1} className='shoesContainer'>

            <Grid className='air-max-img' item xs={12} sm={4} md={4}>
                <h2><Link className="air-max" to="/ShoesDiscription/air-max-1">
                    <img src={shoesOne} height='550px' width='90%'  />
                </Link></h2>
            </Grid>

            
                <Grid className='air-max-img' item xs={12} sm={4} md={4}>
                <h2><Link className="air-max" to="/ShoesDiscription/air-max-2">
                    <img src={shoesTwo} height='550px' width='90%' />
                    </Link></h2>
                </Grid>
            
           
                <Grid className='air-max-img' item xs={12} sm={4} md={4}>
                <h2><Link className="air-max" to="/ShoesDiscription/air-max-3">
                    <img src={shoesThree} height='550px' width='90%' />
                    </Link></h2>
                </Grid>
            
        </Grid>
        <br/>
        
        </>
    );
}

export default ShoesList;