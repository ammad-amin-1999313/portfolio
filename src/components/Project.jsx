import React, {useState, useEffect} from 'react'
import {client} from '../client'

function Project() {
  const [projectData, setProjectData] = useState(null)

  useEffect(() => {
    client
      .fetch(
        `*[_type == "project"]{
      title,
      date,
      place,
      description,
      projectType,
      link,
      tags
    }`,
      )
      .then(data => setProjectData(data))
      .catch(console.error)
  }, [])
  return (
    <main className="bg-green-100 min-h-screen line lg:p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">My Project</h1>
        <h2 className="text-lg text-gray-600 flex justify-center pl-8 mb-12">
          Welcome to my project page!
        </h2>
        <section className="lg:grid flex pb-8 lg:pb-0 flex-col  lg:grid-cols-2 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <article
                key={index}
                className="relative rounded-lg shadow-xl bg-white p-16"
              >
                <h3 className="text-gray-800 text-xl lg:text-3xl font-bold mb-2 hover:text-red-700">
                  <a
                    href={project.link}
                    alt={project.title}
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="text-gray-500 text-xs space-x-4">
                  <span className="">
                    <strong className="font-bold">Finished On</strong>:{''}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <span>
                    <strong className="font-bold">Company</strong>:{''}
                    {project.place}
                  </span>
                  <span>
                    <strong className="font-bold">Type</strong>:{''}
                    {project.type}
                  </span>
                  <p className="my-6 text-lg text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 font-bold hover:underline hover:'text-red-400"
                  >
                    View The Project{''}
                    <span role="img" aria-label="right pointer">
                      👉
                    </span>
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  )
}

export default Project
