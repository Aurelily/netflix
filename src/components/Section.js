import Category from "./Category";
import Movies from "./Movies";

const Section = (props) => {
  return (
    <div className="section">
      <Category category={props.element.category} />
      <Movies images={props.element.images} />
    </div>
  );
};

export default Section;
