import { useParams } from "react-router-dom";
import data from "./data";
import { Link } from "react-router-dom";


function ContentPage() {
    const { id } = useParams();

    let content = data[id];

    if (!content) {
    return (
      <section>
        <h2>Topic Not Found</h2>
        <p>Please select a valid category from the navigation bar.</p>
        <Link className="error-link" to='/'>Go back to Home</Link>
      </section>
    );
  }

  return (
    <section>
        <h2>{content.title}</h2>
        <p>{content.content}</p>
    </section>
  )
}

export default ContentPage;