import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import {sanityClient, urlFor} from '../sanity'
import { Post } from '../typings'

interface Props {
  posts: [Post];
}
// export default const Home: NextPage = (props: Props) => {
export default function Home({ posts }: Props) {
  return (
    // <div className="bg-[url('/background.png')] min-h-screen bg-cover">
    <div className="h-fit bg-gradient-to-tr from-gray-200 via-gray-200 to-white">
    {/* // <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
    // <div className="bg-gradient-to-b from-gray-900 via-slate-900 to-black min-h-screen"> */}
        <Head>
          <title>Krzysztof Szafran Blog</title>
          <link rel="icon" href="/foxyIco.svg" />
        </Head>

        <Header showReturn={false} />

      <div className=" mx-auto h-full">
          <div className=' xl:max-w-7xl mx-auto xl:rounded-lg shadow-lg mt-5 flex flex-col md:flex-row text-center md:text-left py-6 md:py-10 md:px-10 justify-between items-center bg-gradient-to-r from-gray-900 via-slate-900 to-black   '>
            <div className='px-10 space-y-5'>
              <h1 className=' text-3xl md:text-5xl xl:text-6xl max-w-xl font-serif text-white'>
                <span className='underline decoration-white font-signika decoration-4'>Hello and welcome to my blog</span>
              </h1>
              <h2 className='text-white text-xl font-prompt max-w-[600px]'>
                I develop <span className='text-amber-400'>websites</span>, edit videos and images, create 3d objects and work on <span className='text-amber-400'>road design.</span>
              </h2>
              <h3 className='hidden md:block text-gray-300 text-sm font-prompt'>
                Feel free to look around, perhaps You'll find something that catches your <span className='text-amber-400'>attention!</span>
              </h3>
            </div>
            <div className='relative h-72 w-1/3 min-w-[150px] sm:min-w-[200px] '>
              <Image src='/logotest.png' alt='' className='object-contain' fill />
            </div>
            {/* <img className='hidden md:inline-flex h-32 lg:h-full' src='/logotest.png' alt='' /> */}
        </div>

        {/* POSTS */}
        <div className='max-w-7xl mx-auto flex flex-col-reverse sm:flex-row items-center justify-center min-h-[400px] mt-5 px-3 xl:px-0'>
          <div className='flex-grow '>
            <div className='grid  grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-3 md:gap-6 px-2 md:px-6'>
              {posts.map(post => {
                return (
                  <Link className='bg-white border border-gray-200 group rounded-lg relative shadow-md' key={post._id} href={`/post/${post.slug.current}`}>
                    <div className='border h-full rounded-lg group cursor-pointer overflow-hidden'>
                      <div className='overflow-hidden'>
                      {post.mainImage && (
                        <img className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out ' src={urlFor(post.mainImage).url()!} alt='' />
                        // <img src={urlFor(post.mainImage).width(200).url()} />
                      )}
                      </div>
                      <div className='flex justify-between p-5 bg-white'>
                        <div className='w-full '>
                          {/* <p className={`absolute left-1/2 -top-9 transform -translate-x-1/2 shadow-xl ${post.type} w-fit  font-light border opacity-90 transition duration-200 group-hover:opacity-100 `} >{post.type}</p> */}
                          <p className={`absolute left-2 top-2 font-bold shadow-xl ${post.type} text-white rounded-xl px-3 py-1 w-fit border opacity-90 transition duration-200 group-hover:opacity-100 `} >{post.type}</p>
                          <p className='text-xl font-bold font-signika'>{post.title}</p>
                          {/* <p className='text-xs'>{post.description} by {post.author.name}</p> */}
                          <p className=''>{post.description}</p>
                        </div>
        
                        {/* <img className='h-12 w-12 rounded-full' src={urlFor(post.author.image).url()!} alt ='' /> */}
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
          <div className='grid grid-cols-2 mb-6 sm:mb-0 w-[95%] sm:flex flex-wrap flex-row text-center  items-center gap-3 px-4 py-6 font-prompt h-fit justify-center mx-auto sm:w-[20%] text-xs md:text-base min-w-[100px] md:min-w-[200px] border  bg-gradient-to-t self-start rounded-lg text-white font-bo from-gray-900 via-slate-900 to-black'>
            <div className='flex flex-col gap-2 justify-center items-center cursor-pointer'>
              <div className='relative h-6 w-6 md:h-10 md:w-10'>
                <Image src='/name.svg' fill className=' object-contain text-red-500' alt='' />
              </div>
              <p>Christopher Saffron</p>
            </div>
            <div className='flex flex-col gap-2 justify-center items-center  cursor-pointer'>
              <div className='relative h-6 w-6 md:h-10 md:w-10'>  
                <Image src='/location.svg' fill className=' object-contain' alt='' />
              </div>
              <p>Poland, Cracow</p>
            </div>
            <div className='flex flex-col gap-2 justify-center items-center  cursor-pointer'>
              <div className='relative h-6 w-6 md:h-10 md:w-10'>
                <Image src='/website.svg' fill className=' object-contain' alt='' />
              </div>
              <p>havvirsaffron.pl</p>
            </div>
            <div className='flex flex-col gap-2 justify-center items-center  cursor-pointer'>
              <div className='relative h-6 w-6 md:h-10 md:w-10'>
                <Image src='/mobilephone.svg' fill className=' object-contain' alt='' />
              </div>
              <p>+48 789 133 788</p>
            </div>
            <div className='flex flex-col gap-2 justify-center items-center  cursor-pointer'>
              <div className='relative h-6 w-6 md:h-10 md:w-10'>
                <Image src='/email.svg' fill className=' object-contain' alt='' />
              </div>
              <p className='whitespace-normal break-all'>saffronkrzysztof@gmail.com</p>
            </div>
          </div>
          
        </div>


        {/* <div className='grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6'>
          {posts.map(post => {
            return (
              <Link className='bg-white rounded-lg' key={post._id} href={`/post/${post.slug.current}`}>
                <div className='border h-full rounded-lg group cursor-pointer overflow-hidden'>
                  {post.mainImage && (
                    <img className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out ' src={urlFor(post.mainImage).url()!} alt='' />
                  )}
                  <div className='flex justify-between p-5 bg-white'>
                    <div>
                      <p>{post.type}</p>
                      <p className='text-lg font-bold'>{post.title}</p>
                      <p className='text-xs'>{post.description}</p>
                    </div>
    
                  </div>
                </div>
              </Link>
            )
          })}
        </div> */}
      </div>
      <span className={`hidden Webdev absolute`}></span>

    </div>
  )
}


export const getServerSideProps = async () => {
  const query = `*[_type == "post"] | order(_createdAt desc) {
    _id,
    _createdAt,
    title,
      author-> {
        name,
        image
      },
    'comments': *[
          _type == "comment" &&
          post._ref == ^._id &&
          approved == true],
    description,
    mainImage,
    type,
    slug,
    body
}`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts
    }
  }
}