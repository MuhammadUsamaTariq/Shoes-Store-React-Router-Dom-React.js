import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import shoesOne from '../images/shoesOne.jpg';
import shoesTwo from '../images/shoesTwo.jpg';
import shoesThree from '../images/shoesThree.jpg';
import { Grid } from "@material-ui/core";
import '../App.css';
import { useEffect } from "react";


const ShoesDiscription = () => {

    useEffect(() => {
        const onScroll = () => {
             window.scrollTo(0, 0) 
            
        };
        
       onScroll()

       
    }, []);

    const { id } = useParams();

    const shoes1 = (



        <Grid className='container-air-max' container direction="row">

            <Grid item xs={12} sm={6} md={6} className='image-grid'  >
                <img src={shoesOne} height='100%' width='90%' className="des-img" />
            </Grid>
            <Grid className='discription-1' item xs={12} sm={6} md={6} style={{ height: '80%' }}  >
                <h2>Nike Air Max 1</h2>
                <br />
                <h2>Discription : </h2>
                <p >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet ullamcorper odio. Nullam at nisi quis justo dignissim ultricies vel quis enim. Sed suscipit condimentum turpis, vel bibendum purus pharetra eget. Nullam mattis aliquam velit, blandit ultricies tortor posuere nec. Vestibulum porta odio eleifend eros congue, at molestie tellus rutrum. Pellentesque ultricies risus nisl, et condimentum turpis iaculis at. Mauris a dapibus orci, et ornare risus. Ut consequat mattis justo, et molestie erat tincidunt non. Mauris iaculis risus quis lectus tempor venenatis. Quisque bibendum purus ut massa sodales placerat. Curabitur gravida, lacus vitae eleifend  pretium.
                </p>

            </Grid>
        </Grid>


    )
    const shoes2 = (



        <Grid className='container-air-max' container direction="row">

            <Grid item xs={12} sm={6} md={6} className='image-grid'   >
                <img src={shoesTwo} height='100%' width='90%' className="des-img" />
            </Grid>
            <Grid className='discription-1' item xs={12} sm={6} md={6} style={{ height: '80%' }} >
                <h2>Nike Air Max 2</h2>
                <br />
                <h2>Discription : </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet ullamcorper odio. Nullam at nisi quis justo dignissim ultricies vel quis enim. Sed suscipit condimentum turpis, vel bibendum purus pharetra eget. Nullam mattis aliquam velit, blandit ultricies tortor posuere nec. Vestibulum porta odio eleifend eros congue, at molestie tellus rutrum. Pellentesque ultricies risus nisl, et condimentum turpis iaculis at. Mauris a dapibus orci, et ornare risus. Ut consequat mattis justo, et molestie erat tincidunt non. Mauris iaculis risus quis lectus tempor venenatis. Quisque bibendum purus ut massa sodales placerat. Curabitur gravida, lacus vitae eleifend  pretium.
                </p>

            </Grid>
        </Grid>

    )

    const shoes3 = (



        <Grid className='container-air-max' container direction="row">

            <Grid item xs={12} sm={6} md={6} className='image-grid'   >
                <img src={shoesThree} height='100%' width='90%' className="des-img" />
            </Grid>
            <Grid className='discription-1' item xs={12} sm={6} md={6} style={{ height: '80%' }} >
                <h2>Nike Air Max 3</h2>
                <br />
                <h2>Discription : </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet ullamcorper odio. Nullam at nisi quis justo dignissim ultricies vel quis enim. Sed suscipit condimentum turpis, vel bibendum purus pharetra eget. Nullam mattis aliquam velit, blandit ultricies tortor posuere nec. Vestibulum porta odio eleifend eros congue, at molestie tellus rutrum. Pellentesque ultricies risus nisl, et condimentum turpis iaculis at. Mauris a dapibus orci, et ornare risus. Ut consequat mattis justo, et molestie erat tincidunt non. Mauris iaculis risus quis lectus tempor venenatis. Quisque bibendum purus ut massa sodales placerat. Curabitur gravida, lacus vitae eleifend  pretium.
                </p>

            </Grid>
        </Grid>

    )


    return (

        <div id ='box'>{id == 'air-max-1' ? shoes1 : id == 'air-max-2' ? shoes2 : shoes3}<br /><br /><br /></div>
    );
}

export default ShoesDiscription;