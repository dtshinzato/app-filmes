import { CardFilme } from "../CardFilme";
import { CartazFilme } from "../CartazFilme";
import movies from "../../movies";

export function Section() {
  return (
    <div>
      {movies.map((currentMovie) => {
        return <CardFilme filme={currentMovie} key={currentMovie.id} />;
      })}
    </div>
  );
}
