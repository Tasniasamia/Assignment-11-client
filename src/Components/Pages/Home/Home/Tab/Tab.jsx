import { useEffect, useState } from "react";
import "./Tab";

function Tabs() {
  const [toggleState, setToggleState] = useState();
  const[subcategory,setSubcategory]=useState([]);
  const[subdata,setSubdata]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:9999/subcategoytwist')
    .then(res=>res.json())
    .then(data=>{console.log(data);setSubdata(data)})
},[])
  useEffect(()=>{
      fetch('http://localhost:9999/subcategory')
      .then(res=>res.json())
      .then(data=>{console.log(data);setSubcategory(data)})
  },[])
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">


        {subcategory.map(index=><button key={index._id}
          className={toggleState === (index.contnumber) ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(index.contnumber)}
        >
          {index.name}
        </button>  )}
        </div>
        {/* <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Tab 1
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Tab 2
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Tab 3
        </button> */}
 <div className="content-tabs d-flex">

        {
            subdata.map(index=> <div key={index._id}
                className={toggleState === (index.count) ? "content  active-content" : "content"}
              >
                <h2>{index.name}</h2>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                  praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
                  vel voluptatum?
                </p>
              </div>)
        }
    
    </div>
       
        

      {/* <div className="content-tabs d-flex">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>Content 1</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
            vel voluptatum?
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Content 2</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Content 3</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>

        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>Content 1</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
            vel voluptatum?
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Content 2</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Content 3</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>


      </div> */}
    </div>
  );
}

export default Tabs;