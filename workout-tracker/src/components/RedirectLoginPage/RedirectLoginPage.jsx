import { Link } from "react-router-dom";

function RedirectLoginPage() {
  
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <div className="bg-(--bg-color) shadow-lg rounded-2xl p-6 text-center max-w-sm"
        style={{"box-shadow": "0 0px 20px 5px rgba(0, 0, 0, 0.2)"}}>
        {/* <Lock className="w-12 h-12 text-gray-500 mx-auto mb-4" /> */}
        <h2 className="text-(--text-color) text-xl font-semibold mb-2">You must log in to view this page</h2>
        <p className="mb-4">Please sign in to access this content.</p>
        <Link to={"/login"}>
        <button className="rounded-md py-3 hover:cursor-pointer w-full bg-black hover:bg-blue-600 text-white">
          Go to Login
        </button>
        </Link>
      </div>
    </div>
  );
}

export default RedirectLoginPage