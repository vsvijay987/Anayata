//@ts-ignore
import NextLink from "next/link";

import Banner from "../components/Banner";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import { sanityClient, urlFor } from "../sanity";
import { Post, BannerType } from "../typings";

interface Props {
    posts: [Post];
    banners: [BannerType];
}

const Home = ({ posts, banners }: Props) => {
    return (
        <div className=" mx-auto">
            <Header NextLink={NextLink} />
            <About />

            {/* <Banner banners={banners} /> */}

            {/* posts */}
            <div className="lg:px-24 p-3 md:p-6">
                <p className="font-head font-bold lg:text-5xl text-4xl mb-10 ">
                    Featured Articles
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 ">
                    {posts.map((post) => (
                        <NextLink
                            key={post._id}
                            href={`/post/${post.slug.current}`}
                            passHref
                        >
                            <div className="border rounded-lg group cursor-pointer overflow-hidden">
                                <img
                                    className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                                    src={urlFor(post.mainImage).url()!}
                                    alt=""
                                />
                                <div className="flex justify-between p-5 bg-white">
                                    <div>
                                        <p className="text-lg font-bold">
                                            {post.title}
                                        </p>
                                        <p className="text-xs">
                                            {post.description} by{" "}
                                            {post.author.name}
                                        </p>
                                    </div>
                                    <img
                                        className="h-12 w-12 rounded-full"
                                        src={urlFor(post.author.image).url()!}
                                    />
                                </div>
                            </div>
                        </NextLink>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;

export const getServerSideProps = async () => {
    const query = `*[_type == "post"]{
    _id,
   title,
   author -> {
     name, image
   },
   mainImage,
   description,
   slug
  }`;

    const bannerQuery = `*[_type == "banner"]{
    _id,
    mainImage,
   }`;
    const posts = await sanityClient.fetch(query);
    const banners = await sanityClient.fetch(bannerQuery);
    return {
        props: {
            posts,
            banners,
        },
    };
};
