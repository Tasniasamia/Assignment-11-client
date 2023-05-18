import React from 'react';
import { Container } from 'react-bootstrap';
import useTitle from '../../../../../useTitle';

const Blog = () => {
    useTitle("Blog");
    return (
        <div>
        <div>
            
            <div  >
                <Container className='my-5'>
                <div className="accordion" id="accordionPanelsStayOpenExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
      <button className="accordion-button"style={{color:"skyblue",fontWeight:"bold"}} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
      What is an access token and refresh token? How do they work and where should we store them on the client-side?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div className="accordion-body"style={{color:"hotpink"}}>
        Access token like a certificated system that gives access to an autholized user.access token verified authorized user by login system.
        It's like a cerfiicated system that provides a server.but it has limited lifespan.
        Refresh token is also like a certificate system.it has not limited lifespan.It is lifetime.it gives with access token.its not verified user with login system.Access normally stores into localstorage/sessionStorage storage system.
        Refresh token stores into ios ,keychain Android.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
      <button className="accordion-button collapsed"style={{color:"skyblue",fontWeight:"bold"}} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
      Compare SQL and NoSQL databases?      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div className="accordion-body"style={{color:"hotpink"}}>
Structural Query Language and Non Structural Query Language.SQL stores data as a table format.But NoSQL stores data as object Format.SQL is Relational DBMS.NoSQL is not Relational DBMS system
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
      <button className="accordion-button collapsed"style={{color:"skyblue",fontWeight:"bold"}} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      What is express js? What is Nest JS?      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div className="accordion-body"style={{color:"hotpink"}}>
      Express js is a version framework of nodejs. Express create Rest API of Node Js.we can't use node js without express js.
     Next js is a open source framework .It created by react and node js.it used for creating fast and scelable web application
     
      </div>
    </div>
  </div>



  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingfour">
      <button className="accordion-button collapsed"style={{color:"skyblue",fontWeight:"bold"}} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapsefour" aria-expanded="false" aria-controls="panelsStayOpen-collapsefour">
      What is MongoDB aggregate and how does it work ?      </button>
    </h2>
    <div id="panelsStayOpen-collapsefour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingfour">
      <div className="accordion-body"style={{color:"hotpink"}}>
MongoDB aggregate is a powerfull process which works for advanced data collection process.It allow us to process and transform data by using pipeline of multiple stages.
      </div>
    </div>
  </div>









</div>
</Container>    </div>
        </div></div>
    );
};

export default Blog;