import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div>
           <div style={{background:"#f9f9f9"}}className='mx-auto '>
            <div className='row row-cols-1 row-cols-md-5 g-4 p-5 text-white   '>
                <div className='col'>
                    <div style={{fontSize:"35px",fontWeight:"bold"}}><i className="fa-solid fa-car-side"style={{color:"hotpink"}}></i><span style={{color:"skyblue"}}>Toy</span><span style={{color:"hotpink"}}>Man</span></div>
                    <p style={{color:"black"}}>A kids toy shop is a store that specializes in selling toys and games designed specifically for children.</p>
                </div>
                <div className='col colcolor'>
                    <h3 style={{color:"hotpink"}}>Quick Links</h3>
                   <div>Help Center</div>
                   <div>Redeem Voucher</div>
                   <div>Contact Us</div>
                   <div>Policy</div>
                   <div>Check Offer List</div>
                </div>
                <div className='col colcolor'>
                    <h3 style={{color:"hotpink"}}>Catagories</h3>
                   <div>Ambulance Cars</div>
                   <div>Police Cars</div>
                   <div>Track Cars</div>
                   <div>Tram Cars</div>
                   <div>Private Cars</div>
                   <div>Motorcycle Cars</div>
                </div>
                <div className='col colcolor'>
                 <h3 style={{color:"hotpink"}}>Learn More</h3>
                 <div>About Us</div>
                 <div>Team</div>
                 <div>Career</div>
                 <div>Terms and Condition</div>
                 <div>Refund Policy</div>
                
                </div>

                <div className='col'>
                 <h3 style={{color:"hotpink"}}>Follow Us</h3>
                 <div> <i className="fa-brands fa-facebook-f me-3"style={{color:"black"}}></i><span style={{color:"black"}}>Facebook</span> </div>
                 <div>  <i className="fa-brands fa-twitter me-3"style={{color:"black"}}></i> <span style={{color:"black"}}>Twiter</span></div>
                 <div>   <i className="fa-brands fa-instagram me-3"style={{color:"black"}}></i><span style={{color:"black"}}>Instagram</span></div>
                

                </div>
            </div>
            <hr style={{color:"black",border:"1px solid black"}} />
            <div className='text-center  py-3 'style={{width:"100%",color:"black",background:"#f9f9f9"}}>
            &copy; Copyright  by Tasnia Sharin. 
            </div></div>   
        </div>
    );
};

export default Footer;