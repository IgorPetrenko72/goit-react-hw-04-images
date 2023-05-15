import { useEffect, useState } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery"
import fetchPictures from "./ServiceApi/api";
import Loader from "./Loader/Loader";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import css from './App.module.css'

export const App = () => {
  const [pictures, setPictures] = useState([]);
  const [status, setStatus] = useState('hide');
  const [showModal, setShowModal] = useState(false);
  const [largeImageUrl, setLargeImageUrl] = useState('');
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [loadMore, setLoadMore] = useState(null);

const getLargeImgUrl = imgUrl => {
    setLargeImageUrl( imgUrl );
    toggleModal();
  };

const toggleModal = () => {
    setShowModal(!showModal);
  };

const searchResult = value => {
  setQuery(value);
  setPage(1);
  setPictures([]);
  setLoadMore(null);
};

const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    setStatus('loading');

    fetchPictures(query, page)
      .then(
        e => {
          setPictures(prevState => [...prevState, ...e.hits]);
          setStatus('hide');
          setLoadMore(12 - e.hits.length);
        }
      )
      .catch(error => console.log(error));
  }, [page, query]);
  
  return (
    <div className={css.App}>
      <Searchbar onSubmit={searchResult} />
      {showModal && (
        <Modal imgUrl={largeImageUrl} onClose={toggleModal} />
      )}
      <ImageGallery pictures={pictures} onClick={getLargeImgUrl} />
      {status === 'loading' && <Loader />}
      {loadMore === 0 && <Button onClick={handleLoadMore} />}
    </div>
  );
};