import { CartazFilme } from "../CartazFilme";
import { useState } from "react";
import style from "./style.module.css";

export function CardFilme({ filme }) {
  const [showPoster, setShowPoster] = useState(false);
  const arrColor = ["purple", "blue", "green", "darkred", "red"];

  return (
    <div className={style.Container}>
      <h2>{filme.title}</h2>
      <p>{filme.overview}</p>
      <button
        onClick={() => setShowPoster(!showPoster)}
        style={{
          backgroundColor:
            arrColor[Math.floor(Math.random() * arrColor.length)],
          color: "white",
        }}
      >
        Mostrar Cartaz
      </button>
      {showPoster && (
        <CartazFilme
          img={"https://image.tmdb.org/t/p/w500/" + filme.backdrop_path}
        />
      )}
    </div>
  );
}
