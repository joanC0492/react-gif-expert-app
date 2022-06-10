import React from "react";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { GifGridItem } from "../GifGridItem";

function GifGrid({ category }) {
  const { data: images, loading } = useFetchGifs(category);
  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>
      {loading && (
        <div className="d-flex align-items-center justify-content-center pt-5">
          <i className="fa-solid fa-spinner fa-spin fa-4x"></i>
        </div>
      )}
      <div className="row">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
}

export { GifGrid };
