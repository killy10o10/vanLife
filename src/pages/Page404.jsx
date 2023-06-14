import { Link } from 'react-router-dom';

function Page404() {
  return (
    <section className="page-404-section">
      <img src="https://emojicdn.elk.sh/🔍?style=samsung" alt="" />
      <h3>Sorry, the page you were looking for was not found.</h3>
      <Link className="button" to="/">
        Return to Home
      </Link>
    </section>
  );
}

export default Page404;
