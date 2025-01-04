import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <div>
      <footer
        class="inset-x-0 font-sans dark:bg-gray-900 bottom-0"
        style={{
          backgroundImage:
            "url('https://tailwindcss.com/_next/static/media/blog-post-form-dark@90.5b274bea.jpg')",
        }}
      >
        <div class="container px-6 pt-6 mx-auto">
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div class="sm:col-span-2">
              <h1 class="max-w-lg text-xl font-semibold tracking-tight text-white xl:text-2xl dark:text-white">
                Subscribe our Document Reader store to get an update.
              </h1>

              <div class="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                <input
                  id="email"
                  type="text"
                  class="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                  placeholder="Email Address"
                />
                {isAuthenticated ? (
                  <button
                    // onClick={() => loginWithRedirect()}
                    class="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
                  >
                    Subscribe
                  </button>
                ) : (
                  <button
                    onClick={() => loginWithRedirect()}
                    class="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
                  >
                    Subscribe
                  </button>
                )}
              </div>
            </div>

            <div>
              <p class="font-bold text-white dark:text-white underline underline-offset-4">
                Quick Link
              </p>

              <div class="flex flex-col items-start mt-5 space-y-2">
                <Link to="/">
                  <p class="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                    Home
                  </p>
                </Link>
                <Link to="/aboutUs">
                  <p class="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                    Who We Are
                  </p>
                </Link>
                <Link to="/news">
                  <p class="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                    Our Philosophy
                  </p>
                </Link>
              </div>
            </div>

            <div>
              <p class="font-bold text-white dark:text-white underline underline-offset-4">
                Resources
              </p>
              <div class="flex flex-col items-start mt-5 space-y-2">
                <Link to="/products">
                  <p class="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                    Products
                  </p>
                </Link>
                <Link to="/contactUs">
                  <p class="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                    Contact US
                  </p>
                </Link>
                <Link to="/faqs">
                  <p class="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                    FAQ
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <hr class="my-6 border-gray-200 md:my-8 dark:border-gray-700 h-2" />

          <div class="sm:flex sm:items-center sm:justify-between">
            <div class="flex flex-1 gap-4">
              <img
                className=" hover:cursor-pointer"
                src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg"
                width="130"
                height="110"
                alt=""
              />
              <img
                className=" hover:cursor-pointer"
                src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
                width="130"
                height="110"
                alt=""
              />
            </div>

            <div class="flex gap-4">
              <img
                className="hover:cursor-pointer"
                src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
                width="30"
                height="30"
                alt="fb"
              />
              <img
                className="hover:cursor-pointer"
                src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg"
                width="30"
                height="30"
                alt="tw"
              />
              <img
                className="hover:cursor-pointer"
                src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
                width="30"
                height="30"
                alt="inst"
              />
              <img
                className="hover:cursor-pointer"
                src="https://www.svgrepo.com/show/94698/github.svg"
                class=""
                width="30"
                height="30"
                alt="gt"
              />
              <img
                className="hover:cursor-pointer"
                src="https://www.svgrepo.com/show/22037/path.svg"
                width="30"
                height="30"
                alt="pn"
              />
              <img
                className="hover:cursor-pointer"
                src="https://www.svgrepo.com/show/28145/linkedin.svg"
                width="30"
                height="30"
                alt="in"
              />
              <img
                className="hover:cursor-pointer"
                src="https://www.svgrepo.com/show/22048/dribbble.svg"
                class=""
                width="30"
                height="30"
                alt="db"
              />
            </div>
          </div>
          <p class="font-sans text-white pt-4 text-start md:text-center md:text-lg md:p-4">
            © 2024 DocFinder. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
