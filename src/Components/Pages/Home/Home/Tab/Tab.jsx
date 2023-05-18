import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Tabcomponents=()=> {
    // const [tabIndex, setTabIndex] = useState(0); 
    const[subcategory,setSubcategory]=useState([])
    useEffect(()=>{
        fetch('http://localhost:9999/subcategory')
        .then(res=>res.json())
        .then(data=>{console.log(data);setSubcategory(data)})
    },[])
    return(
        <div>
            {
                subcategory.map(index=><div key={index._id}>
                    <h2 className='font-extrabold text-4xl'>{index.name}</h2>
                    {
                        index.toys.map(index2=><Tabs key={index.id} >
                            <TabList><Tab>{index2.name}</Tab></TabList>
                      
                        <TabPanel>
      <h2>{index.name}</h2>
    </TabPanel>  </Tabs>
                        )
                    }
                </div>)
            }
  {/* <Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs> */}
  </div>
)};
export default Tabcomponents;