import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css'

const ImageGalleryItem = ({ pictures, onClickImg }) => {
  return pictures.map((picture, id) => {
    return (
      <li className={css.ImageGalleryItem} key={id}>
        <img className={css.ImageGalleryItemImage}
          onClick={() => {
            onClickImg(picture.largeImageURL);
          }}
          src={picture.webformatURL}
          alt={picture.tags}
        />
      </li>
    );
  });
};

ImageGalleryItem.propTypes = {
  onClickImg: PropTypes.func.isRequired,
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,  
     })
   )
};

export default ImageGalleryItem;
