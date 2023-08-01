import React from 'react'
import Navbar from '../components/Navbar'
import '../css/bootstrap.css'
import '../css/responsive.css'
import Footer from '../components/Footer';
import Latest_watches from '../components/Latest_watches';
import Contact_Forms from '../components/Contact_Forms';
import Featured_section from '../components/Featured_section'
import Client_section from '../components/Client_section'
import About_section from '../components/About_section'
import Banner_section from '../components/Banner_section'

const Home = () => {
  return (
    <>


<Navbar />
<Banner_section />
<Latest_watches />
<About_section />
<Featured_section /> 
<Contact_Forms />
<Client_section />
<Footer />
  
</>

  )
} 

export default Home