import events from "../../../events.json";

import css from "./PhotoAlbumItem.module.css";
import { Link } from "react-router-dom";

const PhotoAlbumItem = () => {
  const photos = events[2].photoAlbum;

  return (
    <>
      {photos.map((photo) => (
        <li key={photo} className={css.item}>
          <Link>
            <img src={photo} alt="" className={css.photo} />
          </Link>
        </li>
      ))}
    </>
  );
};

export default PhotoAlbumItem;
