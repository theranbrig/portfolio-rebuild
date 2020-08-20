import React, { useEffect, useState } from 'react';

const ProgressiveImage = ({ preview, image, alt }) => {
  const [currentImage, setCurrentImage] = useState(preview);
  const [loading, setLoading] = useState(false);

  const fetchImage = (src) => {
    const loadingImage = new Image();
    loadingImage.src = src;
    loadingImage.onload = () => {
      setCurrentImage(loadingImage.src);
      setLoading(false);
    };
  };

  useEffect(() => {
    fetchImage(image);
  }, []);

  const style = (loading) => {
    return {
      transition: '0.5s filter linear',
      filter: `${loading ? 'blur(50px)' : ''}`,
    };
  };

  return <img style={{ style }} src={currentImage} alt={alt} />;
};

export default ProgressiveImage;
