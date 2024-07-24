import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from 'react-router-dom';

const LoadingPlaceholder = () => (
    <div className="flex w-full flex-col items-start justify-between">
        <div role="status" className="animate-pulse w-full">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-[70%] mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-full mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-full mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-full mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-full"></div>
            <div className="flex items-center mt-4">
                <svg className="w-10 h-10 me-3 text-gray-200 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
                <div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-32 mb-2"></div>
                    <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
                </div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    </div>
);

const BlogDetails = () => {
    const { id } = useParams();
    const { data: post, error, isLoading } = useFetch('http://localhost:8001/post/' + id);
    const navigate = useNavigate();

    const handleClick = () => {
        fetch('http://localhost:8001/post/' + post.id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/');
        })
    }

    return (
        <div className="bg-white pb-24 pt-16 sm:pb-32 pt-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Post Details -  {id}</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">Explore the details of your selected post.</p>
                </div>
                <div className="mx-auto mt-10 max-w-2xl border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none">

                </div>
                {error &&
                    <div className="flex items-center p-4 mb-4 text-sm text-white border border-red-300 rounded-lg bg-red-50 dark:bg-red-800 dark:text-white dark:border-red-900 mt-4" role="alert">
                        <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <span className="sr-only">Info</span>
                        <div>
                            <span className="font-medium">Error!</span> {error}.
                        </div>
                    </div>
                }
                {
                    isLoading && <LoadingPlaceholder />
                }
                {
                    post && (
                        <article key={post.id} className="flex w-full flex-col items-start justify-between">
                            <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime="2020-03-16" className="text-gray-500">
                                    Mar 16, 2020
                                </time>
                                <span
                                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                >
                                    {post.title}
                                </span>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <span>
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </span>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.content}</p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img alt="" src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" className="h-10 w-10 rounded-full bg-gray-50" />
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-gray-900">
                                        <span>
                                            <span className="absolute inset-0" />
                                            {post.author}
                                        </span>
                                    </p>
                                    <p className="text-gray-600">Co-Founder / CTO</p>
                                </div>
                            </div>
                            <button onClick={handleClick} type="button" className="mt-5 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                <svg className="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                    <path d="M19 0H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1ZM2 6v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6H2Zm11 3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0h2a1 1 0 0 1 2 0v1Z" />
                                </svg>
                                Delete
                            </button>
                        </article>
                    )
                }
            </div>
        </div>
    );
}

export default BlogDetails;