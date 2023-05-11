import PropTypes from "prop-types";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import css from './ImageGallery.module.css';


const ImageGallery = ({ pictures, onClick }) => {
  return (
    <ul className={css.ImageGallery}>
      <ImageGalleryItem onClickImg={onClick} pictures={pictures} />
    </ul>
  );
};

ImageGallery.propTypes = {
  pictures: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ImageGallery;