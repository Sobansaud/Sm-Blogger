

// import { blogPosts } from "@/app/blogdata/blogdata";
// import Image from "next/image";
// import CommentSection from "@/components/CommentSection";

// const BlogPost = ({ params }: { params: { slug: string } }) => {
//   const post = blogPosts.find((post) => post.slug === params.slug);

//   if (!post) {
//     return (
//       <div className="h-[70vh] flex justify-center items-center">
//         <p className="text-center mt-20 text-3xl underline text-white">Post not found</p>
//       </div>
//     );
//   }

//   return (
//     <>
//       <div className="container mx-auto px-4 my-10">
//         <div className="flex flex-col gap-6 bg-gradient-to-r from-blue-600 to-purple-800 text-white rounded-lg p-6">
//           <h1 className="text-3xl mb-6 uppercase font-semibold text-yellow-400">{post.title}</h1>
//           {post.content.map((content, index) => {
//             switch (content.type) {
//               case "heading":
//                 return (
//                   <h2
//                     key={index}
//                     className="text-2xl font-bold mt-6 underline text-[#2ca542]"
//                   >
//                     {content.value}
//                   </h2>
//                 );
//               case "subheading":
//                 return (
//                   <h3 key={index} className="text-xl text-red-500 font-bold">
//                     {content.value}
//                   </h3>
//                 );
//               case "mainImage":
//                 return (
//                   <Image
//                     key={index}
//                     className="rounded-lg shadow-lg"
//                     src={content.value}
//                     alt="blog image"
//                     width={700}
//                     height={400}
//                   />
//                 );
//               case "publish":
//                 return (
//                   <p
//                     key={index}
//                     className="text-gray-200 font-medium mt-4"
//                   >
//                     {content.value}
//                   </p>
//                 );
//               case "paragraph":
//                 return (
//                   <p
//                     key={index}
//                     className="text-lg leading-relaxed text-yellow-100"
//                   >
//                     {content.value}
//                   </p>
//                 );
//               default:
//                 return null;
//             }
//           })}
//         </div>

//         <div className="mt-10 bg-gray-800 p-6 rounded-lg">
//           <h2 className="text-xl font-semibold text-yellow-300 mb-4">Join the Conversation</h2>
//           <CommentSection />
//         </div>
//       </div>
//     </>
//   );
// };

// export default BlogPost;












// import { blogPosts } from "@/app/blogdata/blogdata";
// import Image from "next/image";
// import CommentSection from "@/components/CommentSection";

// // Corrected type for params
// interface BlogPostProps {
//   params: {
//     slug: string;
//   };
// }

// const BlogPost = ({ params }: BlogPostProps) => {
//   const post = blogPosts.find((post) => post.slug === params.slug);

//   if (!post) {
//     return (
//       <div className="h-[70vh] flex justify-center items-center">
//         <p className="text-center mt-20 text-3xl underline text-white">Post not found</p>
//       </div>
//     );
//   }

//   return (
//     <>
//       <div className="container mx-auto px-4 my-10">
//         <div className="flex flex-col gap-6 bg-gradient-to-r from-blue-600 to-purple-800 text-white rounded-lg p-6">
//           <h1 className="text-3xl mb-6 uppercase font-semibold text-yellow-400">{post.title}</h1>
//           {post.content.map((content, index) => {
//             switch (content.type) {
//               case "heading":
//                 return (
//                   <h2
//                     key={index}
//                     className="text-2xl font-bold mt-6 underline text-[#2ca542]"
//                   >
//                     {content.value}
//                   </h2>
//                 );
//               case "subheading":
//                 return (
//                   <h3 key={index} className="text-xl text-red-500 font-bold">
//                     {content.value}
//                   </h3>
//                 );
//               case "mainImage":
//                 return (
//                   <Image
//                     key={index}
//                     className="rounded-lg shadow-lg"
//                     src={content.value}
//                     alt="blog image"
//                     width={700}
//                     height={400}
//                   />
//                 );
//               case "publish":
//                 return (
//                   <p
//                     key={index}
//                     className="text-gray-200 font-medium mt-4"
//                   >
//                     {content.value}
//                   </p>
//                 );
//               case "paragraph":
//                 return (
//                   <p
//                     key={index}
//                     className="text-lg leading-relaxed text-yellow-100"
//                   >
//                     {content.value}
//                   </p>
//                 );
//               default:
//                 return null;
//             }
//           })}
//         </div>

//         <div className="mt-10 bg-gray-800 p-6 rounded-lg">
//           <h2 className="text-xl font-semibold text-yellow-300 mb-4">Join the Conversation</h2>
//           <CommentSection />
//         </div>
//       </div>
//     </>
//   );
// };

// export default BlogPost;
















// import { blogPosts } from "@/app/blogdata/blogdata";
// import Image from "next/image";
// import CommentSection from "@/components/CommentSection";

// // Correct type for props in App Router
// interface BlogPostProps {
//   params: {
//     slug: string;
//   };
// }

// const BlogPost = ({ params }: BlogPostProps) => {
//   const post = blogPosts.find((post) => post.slug === params.slug);

//   if (!post) {
//     return (
//       <div className="h-[70vh] flex justify-center items-center">
//         <p className="text-center mt-20 text-3xl underline text-white">Post not found</p>
//       </div>
//     );
//   }

//   return (
//     <>
//       <div className="container mx-auto px-4 my-10">
//         <div className="flex flex-col gap-6 bg-gradient-to-r from-blue-600 to-purple-800 text-white rounded-lg p-6">
//           <h1 className="text-3xl mb-6 uppercase font-semibold text-yellow-400">{post.title}</h1>
//           {post.content.map((content, index) => {
//             switch (content.type) {
//               case "heading":
//                 return (
//                   <h2
//                     key={index}
//                     className="text-2xl font-bold mt-6 underline text-[#2ca542]"
//                   >
//                     {content.value}
//                   </h2>
//                 );
//               case "subheading":
//                 return (
//                   <h3 key={index} className="text-xl text-red-500 font-bold">
//                     {content.value}
//                   </h3>
//                 );
//               case "mainImage":
//                 return (
//                   <Image
//                     key={index}
//                     className="rounded-lg shadow-lg"
//                     src={content.value}
//                     alt="blog image"
//                     width={700}
//                     height={400}
//                   />
//                 );
//               case "publish":
//                 return (
//                   <p
//                     key={index}
//                     className="text-gray-200 font-medium mt-4"
//                   >
//                     {content.value}
//                   </p>
//                 );
//               case "paragraph":
//                 return (
//                   <p
//                     key={index}
//                     className="text-lg leading-relaxed text-yellow-100"
//                   >
//                     {content.value}
//                   </p>
//                 );
//               default:
//                 return null;
//             }
//           })}
//         </div>

//         <div className="mt-10 bg-gray-800 p-6 rounded-lg">
//           <h2 className="text-xl font-semibold text-yellow-300 mb-4">Join the Conversation</h2>
//           <CommentSection />
//         </div>
//       </div>
//     </>
//   );
// };

// export default BlogPost;















// import { blogPosts } from "@/app/blogdata/blogdata";
// import Image from "next/image";
// import CommentSection from "@/components/CommentSection";

// // Since params might be a promise, we need to await it in async function
// const BlogPost = async ({ params }: { params: { slug: string } }) => {
//   // Await params to ensure they are properly accessed
//   const { slug } = params;

//   // Find the blog post using the slug
//   const post = blogPosts.find((post) => post.slug === slug);

//   if (!post) {
//     return (
//       <div className="h-[70vh] flex justify-center items-center">
//         <p className="text-center mt-20 text-3xl underline text-white">Post not found</p>
//       </div>
//     );
//   }

//   return (
//     <>
//       <div className="container mx-auto px-4 my-10">
//         <div className="flex flex-col gap-6 bg-gradient-to-r from-blue-600 to-purple-800 text-white rounded-lg p-6">
//           <h1 className="text-3xl mb-6 uppercase font-semibold text-yellow-400">{post.title}</h1>
//           {post.content.map((content, index) => {
//             switch (content.type) {
//               case "heading":
//                 return (
//                   <h2
//                     key={index}
//                     className="text-2xl font-bold mt-6 underline text-[#2ca542]"
//                   >
//                     {content.value}
//                   </h2>
//                 );
//               case "subheading":
//                 return (
//                   <h3 key={index} className="text-xl text-red-500 font-bold">
//                     {content.value}
//                   </h3>
//                 );
//               case "mainImage":
//                 return (
//                   <Image
//                     key={index}
//                     className="rounded-lg shadow-lg"
//                     src={content.value}
//                     alt="blog image"
//                     width={700}
//                     height={400}
//                   />
//                 );
//               case "publish":
//                 return (
//                   <p
//                     key={index}
//                     className="text-gray-200 font-medium mt-4"
//                   >
//                     {content.value}
//                   </p>
//                 );
//               case "paragraph":
//                 return (
//                   <p
//                     key={index}
//                     className="text-lg leading-relaxed text-yellow-100"
//                   >
//                     {content.value}
//                   </p>
//                 );
//               default:
//                 return null;
//             }
//           })}
//         </div>

//         <div className="mt-10 bg-gray-800 p-6 rounded-lg">
//           <h2 className="text-xl font-semibold text-yellow-300 mb-4">Join the Conversation</h2>
//           <CommentSection />
//         </div>
//       </div>
//     </>
//   );
// };

// export default BlogPost;








// // Importing necessary dependencies
// import { blogPosts } from "@/app/blogdata/blogdata"; // Your blog data
// import Image from "next/image"; // For handling images
// import CommentSection from "@/components/CommentSection"; // For comment section

// // `BlogPost` component which handles fetching and rendering blog data
// const BlogPost = async ({ params }: { params?: Promise<{ slug: string }> }) => {
//   // Ensure params is a Promise
//   const resolvedParams = await (params instanceof Promise ? params : Promise.resolve(params));
//   const { slug } = resolvedParams;

//   // Find the blog post using the slug
//   const post = blogPosts.find((post) => post.slug === slug);

//   // If no post is found, show a 'Post not found' message
//   if (!post) {
//     return (
//       <div className="h-[70vh] flex justify-center items-center">
//         <p className="text-center mt-20 text-3xl underline text-white">Post not found</p>
//       </div>
//     );
//   }

//   return (
//     <>
//       <div className="container mx-auto px-4 my-10">
//         <div className="flex flex-col gap-6 bg-gradient-to-r from-blue-600 to-purple-800 text-white rounded-lg p-6">
//           <h1 className="text-3xl mb-6 uppercase font-semibold text-yellow-400">{post.title}</h1>

//           {post.content.map((content, index) => {
//             switch (content.type) {
//               case "heading":
//                 return (
//                   <h2
//                     key={index}
//                     className="text-2xl font-bold mt-6 underline text-[#2ca542]"
//                   >
//                     {content.value}
//                   </h2>
//                 );
//               case "subheading":
//                 return (
//                   <h3 key={index} className="text-xl text-red-500 font-bold">
//                     {content.value}
//                   </h3>
//                 );
//               case "mainImage":
//                 return (
//                   <Image
//                     key={index}
//                     className="rounded-lg shadow-lg"
//                     src={content.value}
//                     alt="blog image"
//                     width={700}
//                     height={400}
//                   />
//                 );
//               case "publish":
//                 return (
//                   <p
//                     key={index}
//                     className="text-gray-200 font-medium mt-4"
//                   >
//                     {content.value}
//                   </p>
//                 );
//               case "paragraph":
//                 return (
//                   <p
//                     key={index}
//                     className="text-lg leading-relaxed text-yellow-100"
//                   >
//                     {content.value}
//                   </p>
//                 );
//               default:
//                 return null;
//             }
//           })}
//         </div>

//         {/* Comment Section */}
//         <div className="mt-10 bg-gray-800 p-6 rounded-lg">
//           <h2 className="text-xl font-semibold text-yellow-300 mb-4">Join the Conversation</h2>
//           <CommentSection />
//         </div>
//       </div>
//     </>
//   );
// };

// // Static params generation for dynamic slugs
// export async function generateStaticParams() {
//   return blogPosts.map((post) => ({
//     slug: post.slug, // Returning each blog's slug
//   }));
// }

// export default BlogPost;









import { blogPosts } from "@/app/blogdata/blogdata"; // Your blog data
import Image from "next/image"; // For handling images
import CommentSection from "@/components/CommentSection"; // For comment section

// `BlogPost` component which handles fetching and rendering blog data
const BlogPost = async ({ params }: { params?: Promise<{ slug: string }> }) => {
  // Ensure params is a Promise, even if it's a resolved object
  const resolvedParams = await (params instanceof Promise ? params : Promise.resolve(params));

  // Check if resolvedParams is valid and contains a slug
  if (!resolvedParams || !resolvedParams.slug) {
    return (
      <div className="h-[70vh] flex justify-center items-center">
        <p className="text-center mt-20 text-3xl underline text-white">Post not found</p>
      </div>
    );
  }

  const { slug } = resolvedParams;

  // Find the blog post using the slug
  const post = blogPosts.find((post) => post.slug === slug);

  // If no post is found, show a 'Post not found' message
  if (!post) {
    return (
      <div className="h-[70vh] flex justify-center items-center">
        <p className="text-center mt-20 text-3xl underline text-white">Post not found</p>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto px-4 my-10">
        <div className="flex flex-col gap-6 bg-gradient-to-r from-blue-600 to-purple-800 text-white rounded-lg p-6">
          <h1 className="text-3xl mb-6 uppercase font-semibold text-yellow-400">{post.title}</h1>

          {post.content.map((content, index) => {
            switch (content.type) {
              case "heading":
                return (
                  <h2
                    key={index}
                    className="text-2xl font-bold mt-6 underline text-[#2ca542]"
                  >
                    {content.value}
                  </h2>
                );
              case "subheading":
                return (
                  <h3 key={index} className="text-xl text-red-500 font-bold">
                    {content.value}
                  </h3>
                );
              case "mainImage":
                return (
                  <Image
                    key={index}
                    className="rounded-lg shadow-lg"
                    src={content.value}
                    alt="blog image"
                    width={700}
                    height={400}
                  />
                );
              case "publish":
                return (
                  <p
                    key={index}
                    className="text-gray-200 font-medium mt-4"
                  >
                    {content.value}
                  </p>
                );
              case "paragraph":
                return (
                  <p
                    key={index}
                    className="text-lg leading-relaxed text-yellow-100"
                  >
                    {content.value}
                  </p>
                );
              default:
                return null;
            }
          })}
        </div>

        {/* Comment Section */}
        <div className="mt-10 bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-yellow-300 mb-4">Join the Conversation</h2>
          <CommentSection />
        </div>
      </div>
    </>
  );
};

// Static params generation for dynamic slugs
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug, // Returning each blog's slug
  }));
}

export default BlogPost;
