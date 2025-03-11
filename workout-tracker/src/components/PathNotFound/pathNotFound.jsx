import { Link } from "react-router-dom";

function pathNotFound() {
  
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 text-center max-w-sm">
        <h2 className="text-xl font-semibold mb-2">404</h2>
        <p className="text-gray-600 mb-4">The page you are looking for could not be found</p>
        <Link to={"/"}>
        <button className="rounded-md py-3 hover:cursor-pointer w-full bg-black hover:bg-blue-600 text-white">
          Go to Home
        </button>
        </Link>
      </div>
    </div>
  );
}

export default pathNotFound;