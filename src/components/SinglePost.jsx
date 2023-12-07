import React, {useEffect, useState} from 'react'
import {client} from '../client'
import {useParams} from 'react-router-dom'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

function SinglePost() {
  const [singlePost, setSinglePost] = useState([])
  const {slug} = useParams()
  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"]{
      title,
      _id,
      slug,
      "mainImage": mainImage.asset ->{
        id,
        url 
    },
      body,
      "name":author->name,
      "authorImage": author->image.asset ->{
        id,
        url,
      }
    }`,
      )
      .then(res => {
        console.log(res)
        setSinglePost(res)
      })
      .catch(console.error)
  }, [slug])
  console.log(singlePost)

  if (!singlePost) return <div>Loading...</div>
  return (
    <main className="bg-gray-200 min-h-screen p-12">
      {singlePost?.length > 0 && (
        <article className="container shadow-lg mx-auto bg-green-100 rounded-lg">
          <header className="relative">
            <div className="absolute h-full w-full flex items-center justify-center p-8">
              <div className="bg-white bg-opacity-75 rounded p-12">
                <h1 className="cursive text-3xl lg:text-6xl mb-4">
                  {singlePost[0]?.title}
                </h1>
                <div className="flex justify-center text-gray-800">
                  {singlePost[0]?.authorImage.url && (
                    <img
                      src={singlePost[0]?.authorImage.url}
                      alt={singlePost[0]?.name}
                      className="w-10 h-10 rounded-full"
                    />
                  )}
                  <p className="cursive flex items-center pl-2 text-2xl">
                    {singlePost[0]?.name}
                  </p>
                </div>
              </div>
            </div>
            <img
              src={singlePost[0]?.mainImage.url}
              alt={singlePost[0]?.title}
              className="w-full object-cover rounded-t"
              style={{height: '400px'}}
            />
          </header>
          <div className="px-16 lg:px-48 py-12 lg:py-20 prose-xl max-w-full">
            <BlockContent
              blocks={singlePost[0]?.body}
              projectId="xno1idta"
              dataset="production"
            />
          </div>
        </article>
      )}
    </main>
  )
}

export default SinglePost
