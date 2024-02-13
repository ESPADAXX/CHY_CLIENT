

function Dashboard() {
  
  return (
    <div className="flex flex-col w-full">
      
      <section className="px-4 pt-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="p-4 bg-white rounded-lg shadow hover:shadow-xl dark:bg-gray-900">
            <div className="flex flex-row items-center">
              <div className="flex-1 text-left md:text-left">
                <h2 className="mb-2 text-lg font-bold text-gray-600 uppercase dark:text-gray-400">
                  Total orders
                </h2>
                <p className="mb-2 text-lg font-medium text-gray-600 dark:text-gray-400">
                  110{" "}
                </p>
                <p className="text-sm font-medium text-gray-400 dark:text-gray-400">
                  Lorem ipsum dor amet
                </p>
              </div>
              <div className="flex-shrink">
                <a
                  href="#"
                  className="flex items-center px-8 py-4 text-gray-400 dark:text-gray-400 "
                >
                  <span className="inline-block mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-10 h-10 dark:group-hover:text-gray-300 bi bi-basket"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"></path>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow hover:shadow-xl dark:bg-gray-900">
            <div className="flex flex-row items-center">
              <div className="flex-1 text-left md:text-left">
                <h2 className="mb-2 text-lg font-bold text-gray-600 uppercase dark:text-gray-400">
                  Total Revenue
                </h2>
                <p className="mb-2 text-lg font-medium text-gray-600 dark:text-gray-400">
                  569{" "}
                </p>
                <p className="text-sm font-medium text-gray-400 dark:text-gray-400">
                  Lorem ipsum dor amet
                </p>
              </div>
              <div className="flex-shrink">
                <a
                  href="#"
                  className="flex items-center px-8 py-4 text-gray-400 dark:text-gray-400 "
                >
                  <span className="inline-block mr-3 dark:group-hover:text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      className="w-10 h-10 bi bi-bag"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow hover:shadow-xl dark:bg-gray-900">
            <div className="flex flex-row items-center">
              <div className="flex-1 text-left md:text-left">
                <h2 className="mb-2 text-lg font-bold text-gray-600 uppercase dark:text-gray-400">
                  Total Payment
                </h2>
                <p className="mb-2 text-lg font-medium text-gray-600 dark:text-gray-400">
                  4567{" "}
                </p>
                <p className="text-sm font-medium text-gray-400 dark:text-gray-400">
                  Lorem ipsum dor amet
                </p>
              </div>
              <div className="flex-shrink">
                <a
                  href="#"
                  className="flex items-center px-8 py-4 text-gray-400 dark:text-gray-400 "
                >
                  <span className="inline-block mr-3 dark:group-hover:text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-10 h-10 bi bi-cash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                      <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow hover:shadow-xl dark:bg-gray-900">
            <div className="flex flex-row items-center">
              <div className="flex-1 text-left md:text-left">
                <h2 className="mb-2 text-lg font-bold text-gray-600 uppercase dark:text-gray-400">
                  Total Customers
                </h2>
                <p className="mb-2 text-lg font-medium text-gray-600 dark:text-gray-400">
                  2310{" "}
                </p>
                <p className="text-sm font-medium text-gray-400 dark:text-gray-400">
                  Lorem ipsum dor amet
                </p>
              </div>
              <div className="flex-shrink">
                <a
                  href="#"
                  className="flex items-center px-8 py-4 text-gray-400 dark:text-gray-400 "
                >
                  <span className="inline-block mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-10 h-10 bi bi-people"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
