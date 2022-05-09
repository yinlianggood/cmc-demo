import type { NextPage } from 'next'
import Header from '../components/Header'
import CmcNews from '../components/CmcNews';
const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div className='lg-bg'>
        <CmcNews />
      </div>
      
      {/* <Trending />
      <CmcTable /> */}
    </>
  )
}

export default Home
