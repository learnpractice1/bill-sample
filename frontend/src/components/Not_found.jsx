import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] bg-tiffin-bg text-tiffin-text">
      <h1 className="text-8xl font-bold text-red-500">404</h1>
      <h2 className="text-2xl font-bold mt-4">Oops! Page Not Found</h2>
      <p className="text-lg mt-2 text-gray-600">The page you are looking for does not exist.</p>
      <Link
        to="/product/add_product"
        className="mt-6 px-6 py-3 bg-actionperform-button text-white text-lg font-semibold rounded-lg shadow-md hover:bg-actionperform-button-hover transition-all"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
