import React, { useState, useEffect } from 'react';

import Index from './product/index';
import { useRouter } from 'next/router';

const Login = () => {

  const router = useRouter();
  const [position, setPosition] = useState<{ latitude: number | null; longitude: number | null }>({
    latitude: null,
    longitude: null,
  });

  const handleLocationButtonClick = async () => {
    try {
      const { coords } = await new Promise<GeolocationPosition>((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject)
      );

      setPosition({
        latitude: coords.latitude,
        longitude: coords.longitude,
      });
      console.log('Geolocation:', coords.latitude, coords.longitude);
    } catch (error) {
      console.error('Error getting geolocation:', error);
    }
  };

  useEffect(() => {
    const checkExistingLocation = async () => {
      try {
        const { coords } = await new Promise<GeolocationPosition>((resolve, reject) =>
          navigator.geolocation.getCurrentPosition(resolve, reject)
        );

        setPosition({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
        console.log('Geolocation:', coords.latitude, coords.longitude);
      } catch (error) {
        console.error('Error getting geolocation:', error);
      }
    };

    if (position.latitude === null && position.longitude === null) {
      // If location access is not available, check for existing location
      checkExistingLocation();
    }

    // if (position.latitude !== null && position.longitude !== null) {
    //   router.push('/product');
    // } else {
    //   checkExistingLocation();
    // }
  }, [position.latitude, position.longitude, router]);


  return (
    <div className='p-0 d-flex justify-content-center align-items-center'>
      {Object.values(position).every(value => value !== null && value !== undefined) ?
        <Index />
        :
        <button
          className='btn btn-danger'
          onClick={handleLocationButtonClick}
        >
          Grant Location Access
        </button>
      }
    </div>
  );
}

export default Login;