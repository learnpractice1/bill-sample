export default function Sample() {
  return (
    <>
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
      <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Account settings</h2>

      <form>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              name="username"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Email Address</label>
            <input
              id="emailAddress"
              type="email"
              name="email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">Password Confirmation</label>
            <input
              id="passwordConfirmation"
              type="password"
              name="passwordConfirmation"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
          >
            Save
          </button>
        </div>
      </form>
    </section>
    <footer className="bg-gradient-to-r from-indigo-900 via-indigo-700 to-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src="/path/to/your/logo.svg" alt="TailGrids Logo" className="h-8 mr-2" />
              <span className="text-2xl font-bold">TailGrids</span>
            </div>
            <p className="text-gray-400 mb-6">
              We create digital experiences for brands and companies by using technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {/* Add your SVG code for Facebook */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.25 15.75L11 10.5M16.5 12V8.25m0 0l-3-3m3 3l3-3m-3 3h-3"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {/* Add your SVG code for Twitter */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.25 15.75L11 10.5M16.5 12V8.25m0 0l-3-3m3 3l3-3m-3 3h-3"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {/* Add your SVG code for Instagram */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.25 15.75L11 10.5M16.5 12V8.25m0 0l-3-3m3 3l3-3m-3 3h-3"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {/* Add your SVG code for LinkedIn */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.25 15.75L11 10.5M16.5 12V8.25m0 0l-3-3m3 3l3-3m-3 3h-3"></path>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#">About Company</a></li>
              <li><a href="#">Company Services</a></li>
              <li><a href="#">Job Opportunities</a></li>
              <li><a href="#">Creative People</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Customer</h4>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#">Client Support</a></li>
              <li><a href="#">Latest News</a></li>
              <li><a href="#">Company Story</a></li>
              <li><a href="#">Pricing Packages</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Additional</h4>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Who We Are</a></li>
              <li><a href="#">Our Process</a></li>
              <li><a href="#">Latest News</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-600 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400">
            <p>Privacy Policy | Legal Notice | Terms of Service</p>
          </div>
          <div className="text-gray-400">
            <p>&copy; 2025 TailGrids</p>
          </div>
        </div>
      </div>
    </footer>
    
    </>
  )
}
