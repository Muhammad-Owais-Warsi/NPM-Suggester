import React, { useEffect, useState } from 'react';

const Contributors: React.FC = () => {
  const [contributors, setContributors] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/repos/Muhammad-Owais-Warsi/NPM-Suggester/contributors')
      .then(response => response.json())
      .then(data => setContributors(data))
      .catch(error => console.error('Error fetching contributors:', error));
  }, []);

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
          <div className="flex flex-wrap justify-center gap-8">
            {contributors.map((contributor) => (
              <div key={contributor.id} className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col items-center pb-10">
                  <img
                    className="w-24 h-24 mb-3 rounded-full shadow-lg"
                    src={contributor.avatar_url}
                    alt={contributor.login}
                  />
                  <h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    {contributor.login}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Contributions: {contributor.contributions}
                  </span>
                  <div className="flex mt-4 space-x-3 md:mt-6">
                    <a
                      href={contributor.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      View Profile
                    </a>
                  </div>
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
