// components/ImageGallery.js
import Image from 'next/image';
import styles from '../styles/ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  return (
    <div>
      {/* Image Grid */}
      <div className={styles.gallery}>
        {images.map((image, index) => (
          <a key={index} href={`#lightbox-${index}`}>
            <Image
              src={image.src}
              alt={image.alt}
              width={150}
              height={100}
              style={{ borderRadius: '5px' }}
            />
          </a>
        ))}
      </div>

      {/* Lightbox */}
      {images.map((image, index) => (
        <div key={index} id={`lightbox-${index}`} className={styles.lightbox}>
          <a href="#" className={styles['lightbox-close']}>
            &times;
          </a>
          <Image
            src={image.src}
            alt={image.alt}
            width={1920}
            height={1080}
            style={{ maxWidth: '90%', maxHeight: '90%' }}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
