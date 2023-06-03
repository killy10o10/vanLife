import { useLocation } from "react-router-dom";

function HostVanInfo() {

  const location = useLocation();
  const { state } = location;
  console.log(state)
  return (
    <>
      <div className="host-van-detail">
        <p>
          <strong className="bold">Name:</strong> {state.name}
        </p>
        <p>
          <strong className="bold">Category:</strong> {state.type}
        </p>
        <p>
          <strong className="bold">Description:</strong> {state.description}
        </p>
        <p>
          <strong className="bold">Visibility:</strong> Public
        </p>
      </div>
    </>
  )
}

export default HostVanInfo;