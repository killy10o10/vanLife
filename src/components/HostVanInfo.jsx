import { useOutletContext } from "react-router-dom";

function HostVanInfo() {
  const currentVan = useOutletContext();

  return (
    <>
      <div className="host-van-detail">
        <p>
          <strong className="bold">Name:</strong> {currentVan.name}
        </p>
        <p>
          <strong className="bold">Category:</strong> {currentVan.type}
        </p>
        <p>
          <strong className="bold">Description:</strong> {currentVan.description}
        </p>
        <p>
          <strong className="bold">Visibility:</strong> Public
        </p>
      </div>
    </>
  )
}

export default HostVanInfo;