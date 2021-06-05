import Layout from '../components/Layout/Layout';
import Cards from '../components/Cards/Cards';
import data from '../data/projectData/projectData';
import Categories from '../components/Categories/Categories';
import React from 'react';
import projectTags from '../data/projectData/projectTags';
import AppContext from '../contexts/appContext';
import Sleeping from './sleeping';

const HomePage = () => {
  const [tags, setTags] = React.useState(projectTags); 

  return (
    <>
    <Sleeping></Sleeping>
    {/* <AppContext.Provider value={{
      tags, setTags,
    }}>

    <Layout>
      <p style={{
        textAlign:'center',
        fontWeight:"bold"
        }}>
        Hey!, thank you for reaching out! <br/> 
        These are couple of personal projects that I have worked.
        I like to explore stuff :)
      </p>
    <Categories />
    <Cards cardData={data.projectData}/>
    </Layout>
    </AppContext.Provider> */}
  </>
  )
}

export default HomePage;