// src/layout/Gallery/PhotoGallery.tsx
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/style.css';
import images from '@/layout/Gallery/Images.ts';

const PhotoGallery = () => {
  // 모든 썸네일을 동일 비율로 크롭하기 위한 스타일
  const smallItemStyles: React.CSSProperties = {
    cursor: 'pointer',
    objectFit: 'cover',
    width: '100px',   
    height: '150px', 
  };

  return (
    <Gallery
      options={{
        initialZoomLevel: 'fit',
        secondaryZoomLevel: 'fit',
        maxZoomLevel: 'fit', 
        zoom: false,        
        imageClickAction: 'toggle-controls',
        tapAction: 'toggle-controls',
        doubleTapAction: false,
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 2,
        }}
      >
        {images.map((image, index) => (
          <Item
            key={index}
            cropped                
            original={image.source}
            thumbnail={image.source}
            width={image.width}
            height={image.height}
          >
            {({ ref, open }) => (
              <img
                ref={ref as React.MutableRefObject<HTMLImageElement>}
                loading="lazy"
                style={smallItemStyles}
                alt={image.alt}
                src={image.source}
                onClick={open}    // 썸네일 클릭 시 라이트박스 오픈
              />
            )}
          </Item>
        ))}
      </div>
    </Gallery>
  );
};

export default PhotoGallery;
