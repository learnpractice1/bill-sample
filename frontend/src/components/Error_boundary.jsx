import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.error("Global Error Caught:", error);
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error Details:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="h-screen flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl font-bold text-red-600">Something Went Wrong</h1>
          <p className="text-gray-600 mt-2">Try refreshing the page or contact support.</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
          >
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
