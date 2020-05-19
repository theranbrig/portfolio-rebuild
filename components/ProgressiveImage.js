import React, { useEffect, useState } from 'react';

const ProgressiveImage = ({ preview, image }) => {
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
  // componentDidMount() {
  //   this.fetchImage(this.props.image);
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.image !== this.props.image) {
  //     this.setState({ currentImage: nextProps.preview, loading: true }, () => {
  //       this.fetchImage(nextProps.image);
  //     });
  //   }
  // }

  // componentWillUnmount() {
  //   if (this.loadingImage) {
  //     this.loadingImage.onload = null;
  //   }
  // }

  const style = (loading) => {
    return {
      transition: '0.5s filter linear',
      filter: `${loading ? 'blur(50px)' : ''}`,
    };
  };

  // const { currentImage, loading } = this.state;
  // const { alt } = this.props;
  return <img style={{ style }} src={currentImage} alt={currentImage} />;
};

export default ProgressiveImage;
