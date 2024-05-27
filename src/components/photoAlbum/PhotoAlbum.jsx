import { useState } from "react";

import PhotoAlbumItem from "./photoAlbumItem/PhotoAlbumItem";

import css from "./PhotoAlbum.module.css";
import ImageModal from "../imageModal copy/ImageModal";

const PhotoAlbum = ({ photoAlbum }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photo, setPhoto] = useState("");

  const showModal = (photo) => {
    setPhoto(photo);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={css.album}>
      <h4>Фото з події</h4>
      <ul className={css.list}>
        <PhotoAlbumItem
          photoAlbum={photoAlbum}
          showModal={showModal}
          closeModal={closeModal}
        />
      </ul>
      <ImageModal photo={photo} modalIsOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default PhotoAlbum;
