import React from 'react';
import Reservation from './Reservation';
import Form from './Form';

function Routing() {
  return (
    <div><BrowserRouter>
    
          <RoutingMenus />
    
          <Routes>
            
              <Route path="/" element={<Home />} />
            
              <Route path="about" element={<AboutUs />} />
            
              <Route path="contact" element={<ContactUs />} />
            
              <Route path="post" element={<Post />} />    
    
          </Routes>

    
      </BrowserRouter>
      
      </div>
  )
}

export default Routing