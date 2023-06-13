import React from 'react';
// import { useMemo } from 'react';
import { Box, Typography, Container, Divider } from '@mui/material';
import { RotatingText } from 'rotating-text';
// import { Loader } from "@googlemaps/js-api-loader";
import { GoogleMap, useLoadScript, useJsApiLoader, Marker } from "@react-google-maps/api";
// import { alignProperty } from '@mui/material/styles/cssUtils';

export default function Contact() {

  const { isLoaded } = useJsApiLoader({
    id:'google-map-script',
    googleMapsApiKey: 'AIzaSyBi8xMpx_yV2t1PQe7S2EGr74whLf2p-u0'
  });
  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
  
  
  function Map() {
    return (
      <Box sx={{
        marginTop: '20px'}} className="reservationStyle">
        <Box>
        <RotatingText className="rotating-text2"
        text="Contact"
      stagger={0.1}
            timing={0.5}>
          </RotatingText>
        </Box>
        <Container>
      <GoogleMap
        zoom={10}
        center={{ lat: 8.49746, lng: 124.62414 }}
            mapContainerClassName="map-container">
            <Marker position={{ lat: 8.49746, lng: 124.62414 }}/>
          </GoogleMap>
        </Container>
        <Typography style={{ fontSize: '20px', fontFamily: 'Roboto', fontWeight: 'bold', letterSpacing: '2px', marginTop: '50px', justifyContent: 'center', alignContent: 'center'}}>
          If you have question and concerns please contact our main office
          </Typography>
          <Typography style={{ fontSize: '20px', fontFamily: 'Roboto', fontWeight: 'bold', letterSpacing: '2px', marginTop: '15px', justifyContent: 'center', alignContent: 'center'}}>
          Main Branch: Zone 8 extension, Patag, Cagayan de Oro City
          </Typography>
          <Typography style={{ fontSize: '20px', fontFamily: 'Roboto', fontWeight: 'bold', letterSpacing: '2px', marginTop: '15px', justifyContent: 'center', alignContent: 'center'}}>
          reach us at reservaph@gmail.com or call 09068461463
            </Typography>
            <Divider></Divider>
            <Typography style={{ fontSize: '20px', fontFamily: 'Roboto', fontWeight: 'bold', letterSpacing: '2px', marginTop: '15px', justifyContent: 'center', alignContent: 'center'}}>
          reach us thru our social media sites
            </Typography>
      </Box>
    );
  }
}