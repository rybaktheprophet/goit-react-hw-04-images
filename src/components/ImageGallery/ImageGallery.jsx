import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

const ImageGallery = ({ pictures, toggleModal }) => {
  return (
    <ul className={s.gallery}>
      {pictures.map(picture => {
        return (
          <ImageGalleryItem
            key={picture.id}
            picture={picture}
            onClick={toggleModal}
          />
        );
      })}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  pictures: PropTypes.array.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
