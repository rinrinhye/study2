import { useEffect, useState } from 'react';

export default function useDeviceType() {
  const [device, setDevice] = useState();

  useEffect(() => {
    const updateDevice = () => {
      if (window.innerWidth < 768) setDevice('mobile');
      else if (window.innerWidth < 1024) setDevice('tablet');
      else setDevice('desktop');
    };

    updateDevice();

    window.addEventListener('resize', updateDevice);
    return () => window.removeEventListener('resize', updateDevice);
  }, []);

  return device;
}
