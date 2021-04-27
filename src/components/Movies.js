import data from "../data.json";

const Movies = (props) => {
  return (
    <div className="movie-list">
      {props.images.map((link, index) => {
        return <img src={link} alt={`movie ${index}`} />;
      })}
    </div>
  );
};

export default Movies;
