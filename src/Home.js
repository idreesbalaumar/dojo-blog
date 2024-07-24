import BlogList from "./BlogList";
import useFetch from "./useFetch";

const LoadingPlaceholder = () => (
    <div className="flex max-w-xl flex-col items-start justify-between">
        <div role="status" className="animate-pulse w-full">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-[70%] mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 w-full mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[330px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[300px] mb-2.5"></div>
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

const Home = () => {

    const { data: posts, isLoading, error } = useFetch('http://localhost:8001/post')

    const blogHeader = 'From the blog';
    const blogSubHeader = 'Learn how to grow your business with our expert advice.';

    return (
        <div className="bg-white pb-24 pt-16 sm:pb-32 pt-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{blogHeader}</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">{blogSubHeader}</p>
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
                    isLoading &&
                    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <LoadingPlaceholder key={index} />
                        ))}
                    </div>
                }
                {
                    posts && <BlogList posts={posts} blogHeader={blogHeader} blogSubHeader={blogSubHeader} />
                }
            </div>
        </div>
    );
};

export default Home;
