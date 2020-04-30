import Layout from '../components/Layout/Layout';
import Cards from '../components/Cards/Cards';
import data from '../data/projectData/projectData';
import Categories from '../components/Categories/Categories';
import React from 'react';
import projectTags from '../data/projectData/projectTags';
import AppContext from '../contexts/appContext';

const HomePage = () => {
  const [tags, setTags] = React.useState(projectTags); 

  return (
    <>
    <AppContext.Provider value={{
      tags, setTags,
    }}>

    <Layout>
      <p style={{textAlign:'center'}}>
        I like to explore technologies regardless of any stack.
      </p>
    <Categories />
    <Cards cardData={data.projectData}/>
    </Layout>
    </AppContext.Provider>
  </>
  )
}

export default HomePage;