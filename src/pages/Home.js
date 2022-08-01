import React from 'react'
import TopBar from '../components/TopBar'
import NavBar from '../components/NavBar'
import DownBar from '../components/DownBar'
import Button from '../components/Button'
import {BiHome} from 'react-icons/bi'
import MyGoogleMap from '../components/Map'
const Home = () => {
  return (
    <>
     <div className='top'>
      <Button
      name="Search Filter"
      className="filter"
      />
     
     <TopBar />
        <NavBar />
        <DownBar />
        <Button
      name={<BiHome 
      className='BiHome'
      />}
      className="round"
      />
     </div>
     <MyGoogleMap />
    </>
  )
}

export default Home