import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <p>Sorry, an uxpected error has occurred!</p>
          <p>
            <em>{error.statusText || error.message}</em>
          </p>
        </div>
      </div>
    </div>
  );
}
