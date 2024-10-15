'use client';

import { useEffect, useState } from 'react';

import dynamic from 'next/dynamic';
import cn from 'classnames';

import 'react-image-gallery/styles/css/image-gallery.css';

import styles from './Slider.module.scss';

const ImageGallery = dynamic(() => import('react-image-gallery'), {
  ssr: false,
});

interface imagesProps {
  images: {
    thumbnailHeight?: number;
    originalHeight?: number;
    thumbnailClass?: string;
    thumbnail?: string;
    original: string;
  }[];
  className?: string;
}

const Slider = ({ className, images }: imagesProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || !images.length) {
    return null;
  }

  return (
    <div className={cn(styles.slider, className)}>
      <ImageGallery
        showFullscreenButton={false}
        showPlayButton={false}
        swipeThreshold={5}
        items={images}
        showBullets
        lazyLoad
      />
    </div>
  );
};

export default Slider;
