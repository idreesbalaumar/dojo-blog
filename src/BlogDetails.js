import { useParams } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();
    return (
        <div className="bg-white pb-24 pt-16 sm:pb-32 pt-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Post Details -  {id}</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">Explore the specifics of this post, including its title, content, author, and publication date. Dive into the details to understand the insights and perspectives shared.</p>
                </div>
                <div className="mx-auto mt-10 max-w-2xl border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none">
                    <article className="flex max-w-xl flex-col items-start justify-between">
                        <div className="flex items-center gap-x-4 text-xs">
                            <time dateTime='{post.datetime}' className="text-gray-500">
                                Healthy Eating: Tips for a Balanced Diet
                            </time>
                            <a
                                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                            >
                                Healthy Eating: Tips for a Balanced Diet
                            </a>
                        </div>
                        <div className="group relative">
                            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                <a >
                                    <span className="absolute inset-0" />
                                    Healthy Eating: Tips for a Balanced Diet
                                </a>
                            </h3>
                            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Healthy Eating: Tips for a Balanced Diet</p>
                        </div>
                        <div className="relative mt-8 flex items-center gap-x-4">
                            <img alt="" src="" className="h-10 w-10 rounded-full bg-gray-50" />
                            <div className="text-sm leading-6">
                                <p className="font-semibold text-gray-900">
                                    <a >
                                        <span className="absolute inset-0" />
                                        Healthy Eating: Tips for a Balanced Diet
                                    </a>
                                </p>
                                <p className="text-gray-600">Healthy Eating: Tips for a Balanced Diet</p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
}

export default BlogDetails;