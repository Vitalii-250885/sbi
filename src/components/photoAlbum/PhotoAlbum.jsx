import PhotoAlbumItem from "./photoAlbumItem/PhotoAlbumItem";

import css from "./PhotoAlbum.module.css";

const PhotoAlbum = () => {
  return (
    <div className={css.album}>
      <h4>Фото з події</h4>
      <ul className={css.list}>
        <PhotoAlbumItem />
      </ul>
    </div>
  );
};

export default PhotoAlbum;
