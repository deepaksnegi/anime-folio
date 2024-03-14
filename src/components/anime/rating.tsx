import React from "react";

type Props = {};

const Rating = (props: Props) => {
  return (
    <>
      <div className="mb-5 flex items-center">
        <p className="inline-flex items-center rounded bg-blue-100 p-1.5 text-sm font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
          8.7
        </p>
        <p className="ms-2 font-medium text-gray-900 dark:text-white">
          Excellent
        </p>
        <span className="mx-2 h-1 w-1 rounded-full bg-gray-900 dark:bg-gray-500"></span>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          376 reviews
        </p>
      </div>
      <div className="gap-8 sm:grid sm:grid-cols-2">
        <div>
          <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Story
            </dt>
            <dd className="mb-3 flex items-center">
              <div className="me-2 h-2.5 w-full rounded bg-gray-200 dark:bg-gray-700">
                <div
                  className="h-2.5 rounded bg-blue-600 dark:bg-blue-500"
                  // style="width: 88%"
                ></div>
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                8.8
              </span>
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Animation
            </dt>
            <dd className="mb-3 flex items-center">
              <div className="me-2 h-2.5 w-full rounded bg-gray-200 dark:bg-gray-700">
                <div
                  className="h-2.5 rounded bg-blue-600 dark:bg-blue-500"
                  // style="width: 89%"
                ></div>
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                8.9
              </span>
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Free WiFi
            </dt>
            <dd className="mb-3 flex items-center">
              <div className="me-2 h-2.5 w-full rounded bg-gray-200 dark:bg-gray-700">
                <div
                  className="h-2.5 rounded bg-blue-600 dark:bg-blue-500"
                  // style="width: 88%"
                ></div>
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                8.8
              </span>
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Facilities
            </dt>
            <dd className="flex items-center">
              <div className="me-2 h-2.5 w-full rounded bg-gray-200 dark:bg-gray-700">
                <div
                  className="h-2.5 rounded bg-blue-600 dark:bg-blue-500"
                  // style="width: 54%"
                ></div>
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                5.4
              </span>
            </dd>
          </dl>
        </div>
        <div>
          <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Character Development
            </dt>
            <dd className="mb-3 flex items-center">
              <div className="me-2 h-2.5 w-full rounded bg-gray-200 dark:bg-gray-700">
                <div
                  className="h-2.5 rounded bg-blue-600 dark:bg-blue-500"
                  // style="width: 89%"
                ></div>
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                8.9
              </span>
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Cleanliness
            </dt>
            <dd className="mb-3 flex items-center">
              <div className="me-2 h-2.5 w-full rounded bg-gray-200 dark:bg-gray-700">
                <div
                  className="h-2.5 rounded bg-blue-600 dark:bg-blue-500"
                  // style="width: 70%"
                ></div>
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                7.0
              </span>
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Location
            </dt>
            <dd className="flex items-center">
              <div className="me-2 h-2.5 w-full rounded bg-gray-200 dark:bg-gray-700">
                <div
                  className="h-2.5 rounded bg-blue-600 dark:bg-blue-500"
                  // style="width: 89%"
                ></div>
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                8.9
              </span>
            </dd>
          </dl>
        </div>
      </div>
    </>
  );
};

export default Rating;
