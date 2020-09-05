import React from 'react'
import Layout from '../Components/Layout/Layout'
import Main from '../Components/Main/Main'
import Cards from '../Components/Cards/Cards'
import Section from '../Components/Section/Section'

const App = () => {
  return (
    <>
      <Layout>
        <Main />
        <Cards />
        <Section />
      </Layout>
    </>
  )
}

export default App
