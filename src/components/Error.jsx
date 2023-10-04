import { useRouteError } from "react-router-dom"

function Error() {
  const error = useRouteError();
  return (
    <section className="section">
      <h1>{error.message}</h1> 
    </section>
  )
}

export default Error
