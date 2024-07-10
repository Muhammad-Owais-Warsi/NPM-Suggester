import React, { useEffect, useState } from "react";

const Contributors: React.FC = () => {
  const [contributors, setContributors] = useState<any[]>([]);

  useEffect(() => {
    fetch(
      "https://api.github.com/repos/Muhammad-Owais-Warsi/NPM-Suggester/contributors"
    )
      .then((response) => response.json())
      .then((data) => setContributors(data))
      .catch((error) => console.error("Error fetching contributors:", error));
  }, []);

  // Slice the top 3 contributors
  const topContributors = contributors.slice(0, 3);

  // Arrange top contributors in specified order
  const orderedTopContributors = [
    topContributors[1], // index 1 (2nd contributor)
    topContributors[0], // index 0 (1st contributor)
    topContributors[2], // index 2 (3rd contributor)
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-between text-black bg-white dark:bg-gray-900 px-4 py-8">
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white">
            Our Contributors
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-gray-500 dark:text-gray-400">
            Meet the amazing people who have contributed to our project.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {orderedTopContributors.map((contributor, index) => (
              <div
                key={contributor.id}
                className="flex flex-col items-center justify-center gap-4"
              >
                <img
                  className={`relative z-10 flex ${
                    index === 0
                      ? "h-24 w-24"
                      : index === 1
                      ? "h-32 w-32"
                      : "h-20 w-20"
                  } items-center justify-center rounded-full bg-white text-${
                    index === 0 ? "5xl" : index === 1 ? "4xl" : "3xl"
                  } font-bold text-black shadow-lg`}
                  src={contributor.avatar_url}
                  alt={contributor.login}
                />
                <div className="text-center">
                  <div className="flex">
                    <h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                      {contributor.login}
                    </h3>
                    <a href={contributor.html_url}>
                      <img src="link.svg" alt="link" className="w-7" />
                    </a>
                  </div>
                  <p className="text-gray-500">
                    Contributions: {contributor.contributions}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {contributors.slice(3).map((contributor) => (
              <div
                key={contributor.id}
                className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-300 hover:scale-105"
              >
                <div className="flex flex-col items-center">
                  <img
                    className="w-24 h-24 mb-3 rounded-full shadow-lg"
                    src={contributor.avatar_url}
                    alt={contributor.login}
                  />
                  <div className="flex">
                    <h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                      {contributor.login}
                    </h3>
                    <a href={contributor.html_url}>
                      <img src="link.svg" alt="link" className="w-7" />
                    </a>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Contributions: {contributor.contributions}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contributors;
