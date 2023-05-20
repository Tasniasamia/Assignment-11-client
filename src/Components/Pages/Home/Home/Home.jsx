import React, { useEffect, useState } from 'react';
import './Home.css';
import Aboutus from '../../Shared/AboutUs/Aboutus';
import useTitle from '../../../../../useTitle';
import { Container } from 'react-bootstrap';
import Tabs from './Tab/Tab';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Online from '../../Shared/Online/Online';
// import { useEffect, useState } from 'react';

const Home = () => {
    useTitle("Home");
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div>
          
<div id="carouselExampleCaptions" className="carousel slide h-md-96 " data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://img.freepik.com/free-photo/small-red-car-toy-kid-child-playing-with-it_114579-7239.jpg?t=st=1684341501~exp=1684342101~hmac=170c0f946d05719fe19f8c999a08b293869e6f6bc48b585a2f66b31d1d72fa52" className="d-block w-100" alt="..."/>
      <div className="carousel-caption  d-md-block">
<div className='my-5 d-flex justify-content-center align-items-center'>
    <div>
        <h5 style={{fontSize:"60px",fontWeight:"bold",color:"hotpink"}}>Toy Shop</h5>
        <div className=' d-none d-md-block'>
            {/* <img src="https://img.freepik.com/premium-photo/little-boy-buying-bicycle-kids-store_266732-7143.jpg" alt="toyshop"className='my-3 'style={{}} /> */}
        <p style={{fontSize:"25px"}}className='my-4'>They are typically made of plastic, metal, or a combination of materials and often feature intricate details to resemble real cars.Car toys are miniature replicas or models of automobiles, designed for play and entertainment purposes.Car toys are miniature replicas or models of automobiles, designed for play and entertainment purposes. They are typically made of plastic, metal, or a combination of materials and often feature intricate details to resemble real cars. Car toys come in various sizes, ranging from small matchbox-sized vehicles to larger, more detailed models. They are popular among children and collectors alike, allowing them to imagine driving and explore different types of cars, such as sports cars, off-road vehicles, vintage cars, and more. Car toys may also include additional features such as movable parts,</p>
        <button className='btn  btn-lg'style={{background:"skyblue",color:"white"}}>Learn More</button></div>
      </div>
      </div>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/free-photo/kindergarten-concept-with-wooden-blocks-kid-toys-wooden-grungy-background-side-view_176474-7732.jpg?w=996&t=st=1684341583~exp=1684342183~hmac=60c3c2eef26177b55d492bc3d7ef212147f853282b00f1e8e57210d47a179c0b" className="d-block w-100" alt="..."/>
      <div className="carousel-caption  d-md-block">
      <div className='my-5 d-flex justify-content-center align-items-center'>
    <div>
        <h5 style={{fontSize:"60px",fontWeight:"bold",color:"skyblue"}}>Toys Kid</h5>
        <div className=' d-none d-md-block'>
            {/* <img src="https://img.freepik.com/premium-photo/little-boy-buying-bicycle-kids-store_266732-7143.jpg" alt="toyshop"className='my-3 'style={{height:"300px",width:"300px"}} /> */}
            <p style={{fontSize:"25px",color:"hotpink"}}className='my-4'>They are typically made of plastic, metal, or a combination of materials and often feature intricate details to resemble real cars.Car toys are miniature replicas or models of automobiles, designed for play and entertainment purposes.Car toys are miniature replicas or models of automobiles, designed for play and entertainment purposes. They are typically made of plastic, metal, or a combination of materials and often feature intricate details to resemble real cars. Car toys come in various sizes, ranging from small matchbox-sized vehicles to larger, more detailed models. They are popular among children and collectors alike, allowing them to imagine driving and explore different types of cars, such as sports cars, off-road vehicles, vintage cars, and more. Car toys may also include additional features such as movable parts,</p>
        <button className='btn  btn-lg'style={{background:"skyblue",color:"white"}}>Learn More</button></div>
      </div>
      </div>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/free-photo/toy-train-with-letters_23-2148144858.jpg?w=996&t=st=1684341639~exp=1684342239~hmac=084818ed24862c6b453def20313fcbd6ef19d59840c43216d7cdf53916cc4b19" className="d-block w-100" alt="..."/>
      <div className="carousel-caption  d-md-block">
      <div className='my-5 d-flex justify-content-center align-items-center'>
    <div>
        <h5 style={{fontSize:"60px",fontWeight:"bold",color:"skyblue"}}>Toys Car</h5>
        <div className=' d-none d-md-block'>
            {/* <img src="https://img.freepik.com/premium-photo/little-boy-buying-bicycle-kids-store_266732-7143.jpg" alt="toyshop"className='my-3 'style={{height:"300px",width:"300px"}} /> */}
            <p style={{fontSize:"25px",color:"hotpink"}}className='my-4'>They are typically made of plastic, metal, or a combination of materials and often feature intricate details to resemble real cars.Car toys are miniature replicas or models of automobiles, designed for play and entertainment purposes.Car toys are miniature replicas or models of automobiles, designed for play and entertainment purposes. They are typically made of plastic, metal, or a combination of materials and often feature intricate details to resemble real cars. Car toys come in various sizes, ranging from small matchbox-sized vehicles to larger, more detailed models. They are popular among children and collectors alike, allowing them to imagine driving and explore different types of cars, such as sports cars, off-road vehicles, vintage cars, and more. Car toys may also include additional features such as movable parts,</p>
        <button className='btn  btn-lg'style={{background:"skyblue",color:"white"}}>Learn More</button></div>
      </div>
      </div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


<div className='container'style={{marginTop:"200px"}}>
    <h1 className='text-center'><span className='me-2'style={{color:"hotpink"}}>About</span><span style={{color:"skyblue"}}>Us</span> </h1>


<Aboutus></Aboutus>
</div>
                 {/* Gallery */}

<div className='container'style={{marginTop:"200px"}}>
    <h1 className='text-center'><span className='me-2'style={{color:"hotpink"}}>Our</span><span style={{color:"skyblue"}}>Gallery</span> </h1>
                 <div className='row row-cols-1 row-cols-md-3 p-5 text-white  'data-aos="fade-left">
                <div className='col  h-100 my-2'>
                <img src="https://img.freepik.com/premium-vector/set-cartoon-car-vector-illustrations_491934-709.jpg?size=626&ext=jpg&ga=GA1.1.1636033582.1682966548&semt=ais"className=' img-fluid'style={{height:"300px",width:"300px"}}data-aos="zoom-in" alt="toys" />
                </div>
                <div className='col  h-100 my-2'>
                <img src="https://img.freepik.com/premium-vector/pack-toy-vehicles_1284-1440.jpg"className=' img-fluid'style={{height:"300px",width:"300px"}}data-aos="zoom-in" alt="toys" />   
                </div>
                <div className='col  h-100 my-2'>
                <img src="https://img.freepik.com/premium-vector/toys-younger-children_176826-10.jpg?w=826"className=' img-fluid'style={{height:"300px",width:"300px"}}data-aos="zoom-in" alt="toys" />   
                </div>

                <div className='col  h-100 my-2'>
                <img src="https://img.freepik.com/free-vector/four-cars-childish-style_23-2147623256.jpg?size=626&ext=jpg&ga=GA1.1.1636033582.1682966548&semt=ais"className=' img-fluid'style={{height:"300px",width:"300px"}}data-aos="zoom-in" alt="toys" />   
                </div>
                <div className='col  h-100 my-2'>
                <img src="https://img.freepik.com/free-vector/illustration-different-kind-toys_1308-2216.jpg?w=996&t=st=1684560622~exp=1684561222~hmac=c20273eddea2fa6d71c5f0df6e8b3c289345ff084a15fe68f7f73172095b4278"className=' img-fluid'style={{height:"300px",width:"300px"}}data-aos="zoom-in" alt="toys" />   
                </div>
                <div className='col  h-100 my-2'>
                <img src="https://img.freepik.com/free-photo/colorful-car-toys_1194-2341.jpg?size=626&ext=jpg&ga=GA1.2.1636033582.1682966548&semt=ais"className=' img-fluid'style={{height:"300px",width:"300px"}}data-aos="zoom-in" alt="toys" />   
                </div>
               
               
            </div>




            <Container>
    <Tabs></Tabs>
</Container>

               {/* latest news */}

            <div className='container'style={{marginTop:"200px"}}>
    <h1 className='text-center'><span className='me-2'style={{color:"hotpink"}}>Latest</span><span style={{color:"skyblue"}}>News</span> </h1>




    <div className="row row-cols-1 row-cols-md-3 g-4"data-aos="fade-right"style={{marginTop:"70px"}}>
  <div className="col">
    <div className="card h-100">
      <img src="https://img.freepik.com/premium-photo/funny-illustrated-car-painted-rainbow-colors_183364-23794.jpg?size=626&ext=jpg&ga=GA1.2.1636033582.1682966548&semt=ais"style={{height:"200px"}} className="card-img-top"alt="cardimg"/>
      <div className="card-body my-3">
        <h4 className="card-title text-center"style={{color:"hotpink"}}>Best Sellers</h4>
        <p className='card-text text-center'> Best sellers are products that have achieved high sales volume and popularity within a specific market or industry. </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://img.freepik.com/free-vector/tow-truck-carrying-road-roller_1308-54900.jpg?size=626&ext=jpg&ga=GA1.2.1636033582.1682966548&semt=sph"style={{height:"200px"}} className="card-img-top" alt="cardimg"/>
      <div className="card-body my-3">
        <h4 className="card-title text-center"style={{color:"hotpink"}}>Best Deal</h4>
     
<p className='card-text text-center'>Best deal refers to a particularly advantageous or favorable offer or arrangement for a product or service.</p>
       
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://img.freepik.com/free-vector/vector-yellow-dump-truck-unloading-side-view-illustration-isolated-white-background_8130-972.jpg?size=626&ext=jpg&ga=GA1.2.1636033582.1682966548&semt=sph"style={{height:"200px"}} className="card-img-top" alt="cardimg"/>
      <div className="card-body my-3">
        <h4 className="card-title text-center"style={{color:"hotpink"}}>New Arrival</h4>
<p className='card-text text-center'>New arrival refers to a recently introduced or newly available product or item in a particular store, marketplace, or collection.</p>
      
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://img.freepik.com/free-vector/hand-drawn-transport-truck_23-2149166246.jpg?size=626&ext=jpg&ga=GA1.1.1636033582.1682966548&semt=sph"style={{height:"200px"}} className="card-img-top" alt="cardimg"/>
      <div className="card-body my-3">
        <h4 className="card-title text-center"style={{color:"hotpink"}}>Featured</h4>
<p className='card-text text-center'>A best feature refers to a standout attribute or characteristic of a product that sets it apart from others in its category. </p>
      </div>
    </div>
  </div>
</div>

</div>


            </div>













         




            </div>
     
    );
};

export default Home;