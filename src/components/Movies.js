import data from "../data.json";

const Movies = (props) => {
  return (
    <div className="movie-list">
      {data.map((elem) => {
        {
          return elem.images.map((img, index) => {
            <img src={img} alt={`movie ${index}`} />;
          });
        }
      })}
    </div>
  );
};

export default Movies;
