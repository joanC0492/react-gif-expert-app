import React, { useState } from "react";
import { AddCategory } from "../AddCategory";
import { GifGrid } from "../GifGrid";

function GifExpertApp() {
  const [categorie, setCategorie] = useState(["One Punch"]);

  return (
    <div className="py-4 container">
      <div className="row">
        <div className="col-12">
          <h2>GifExpertApp</h2>
          <AddCategory setCategorie={setCategorie} />
          <hr />
          {categorie.map((c) => (
            <GifGrid key={c} category={c} />
          ))}
        </div>
      </div>
    </div>
  );
}

export { GifExpertApp };
