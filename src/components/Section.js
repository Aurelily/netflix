import Category from "./Category";
import Movies from "./Movies";

const Section = (props) => {
  return (
    <div className="section">
      <Category category={props.category} />
      <Movies />
    </div>
  );
};

export default Section;
