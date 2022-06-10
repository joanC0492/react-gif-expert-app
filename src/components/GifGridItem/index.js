import React from "react";
import "./GifGridItem.scss";

function GifGridItem({ title, url }) {
  return (
    <div className="col-12 col-md-4 mb-3 animate__animated animate__fadeIn">
      <div className="card">
        <div className="card__figure">
          <img
            src={url}
            alt={title}
            className="card__img"
          />
        </div>
        <div className="card-body">
          <p className="card-title">{title}</p>
        </div>
      </div>
    </div>
  );
}

export { GifGridItem };
