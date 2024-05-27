import css from "./PhotoAlbumItem.module.css";

const PhotoAlbumItem = ({ photoAlbum, showModal }) => {
  return (
    <>
      {photoAlbum.map((photo) => (
        <li key={photo} className={css.item}>
          <img
            src={photo}
            alt=""
            className={css.photo}
            onClick={() => showModal(photo)}
          />
        </li>
      ))}
    </>
  );
};

export default PhotoAlbumItem;
