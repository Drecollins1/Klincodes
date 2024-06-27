import React from "react";

const ErrorPage = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-100 dark:bg-zinc-800 p-4">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-xl md:text-2xl text-zinc-800 dark:text-zinc-200 mt-2">
          Oops! Page not found.
        </p>
        <p className="text-md text-zinc-600 dark:text-zinc-400 mt-2">
          We can't seem to find the page you're looking for.
        </p>
        <a
          href="/"
          className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
