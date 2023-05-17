import React from 'react';

const Home = () => {
    return (
        <div>
            <div>
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-photo/small-red-car-toy-kid-child-playing-with-it_114579-7239.jpg?t=st=1684341501~exp=1684342101~hmac=170c0f946d05719fe19f8c999a08b293869e6f6bc48b585a2f66b31d1d72fa52" className="w-full" />
    <div className="absolute  h-full flex justify-center items-center text-center top-0 right-0   w-full  md:space-y-8 md:p-20 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
      <div className='md:px-20'>
      <h1 className='text-4xl md:text-5xl font-extrabold text-white w-full 'style={{color:"hotpink"}}>Toy Shop </h1>
      <div className='md:block hidden'>
      <p className='text-2xl text-white w-full my-5'>They are typically made of plastic, metal, or a combination of materials and often feature intricate details to resemble real cars</p>
      <div>
      <button className="btn  text-white me-2 border-0"style={{background:"hotpink"}}>Learn More </button></div>
      
      </div>
   
      </div>
       </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle  border-0"style={{background:"hotpink"}}>❮</a> 
      <a href="#slide2" className="btn btn-circle  border-0"style={{background:"hotpink"}}>❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-photo/photos-transportation_23-2148436382.jpg?w=996&t=st=1684341539~exp=1684342139~hmac=21b29d0e3811a4c326db5b8c87758f9789576b1337bb1d74369d3776acd8db9a" className="w-full" />
    <div className="absolute  h-full flex justify-center items-center text-center top-0 right-0   w-full  md:space-y-7 md:p-20 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
    <div className='md:px-20'>
      <h1 className='text-4xl md:text-5xl font-extrabold text-white w-full 'style={{color:"yellow"}}>Toys Kids </h1>
      <div className='md:block hidden'>
      <p className='text-2xl text-white w-full my-5'>Car toys are miniature replicas or models of automobiles, designed for play and entertainment purposes</p>
      <div>
      <button className="btn  text-white me-2 border-0 font-bold"style={{background:"yellow"}}>Learn More </button></div>
      
      </div>
   
      </div>
       </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle bg-yellow-300 border-0">❮</a> 
      <a href="#slide3" className="btn btn-circle bg-yellow-300 border-0">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-photo/kindergarten-concept-with-wooden-blocks-kid-toys-wooden-grungy-background-side-view_176474-7732.jpg?w=996&t=st=1684341583~exp=1684342183~hmac=60c3c2eef26177b55d492bc3d7ef212147f853282b00f1e8e57210d47a179c0b" className="w-full" />
    <div className="absolute  h-full flex justify-center items-center text-center top-0 right-0   w-full  md:space-y-7 md:p-20 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
    <div className='md:px-20'>
      <h1 className='text-4xl md:text-5xl font-extrabold text-white w-full 'style={{color:"skyblue"}}>Toys Play  </h1>
      <div className='md:block hidden'>
      <p className='text-2xl text-white w-full my-5'> They are popular among children and collectors alike, allowing them to imagine driving</p>
      <div>
      <button className="btn  text-white me-2 border-0 font-bold"style={{background:"skyblue"}}>Learn More </button></div>
      
      </div>
   
      </div>
       </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle bg-sky-300 border-0">❮</a> 
      <a href="#slide4" className="btn btn-circle bg-sky-300 border-0">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-photo/toy-train-with-letters_23-2148144858.jpg?w=996&t=st=1684341639~exp=1684342239~hmac=084818ed24862c6b453def20313fcbd6ef19d59840c43216d7cdf53916cc4b19" className="w-full" />
    <div className="absolute  h-full flex justify-center items-center text-center top-0 right-0   w-full  md:space-y-7 md:p-20 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
    <div className='md:px-20'>
      <h1 className='text-3xl md:text-5xl font-extrabold text-white w-full 'style={{color:"skyblue"}}>Trunk or Treat  </h1>
      <div className='md:block hidden'>
      <p className='text-2xl text-white w-full my-5'> They are popular among children and collectors alike, allowing them to imagine driving</p>
      <div>
      <button className="btn  text-white me-2 border-0 font-bold"style={{background:"skyblue"}}>Learn More </button></div>
      
      </div>
   
      </div>
       </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle bg-sky-300 border-0">❮</a> 
      <a href="#slide1" className="btn btn-circle bg-sky-300 border-0">❯</a>
    </div>
  </div>
</div>
            </div>
            
        </div>
    );
};

export default Home;