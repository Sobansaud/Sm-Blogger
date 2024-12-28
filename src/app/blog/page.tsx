
import Link from "next/link";

export default function BlogPage() {
  const blogs = [
    {
      title: "Next.js 15: What's New?",
      slug: "nextjs-15",
      image: "/next-js.jpeg",
      description: "Explore the new features of Next.js 15 and how it can improve your development workflow.",
    },
    {
      title: "AI Revolution: The Future of Technology",
      slug: "ai-revolution",
      image: "/ai.jpeg",
      description: "Learn about the rise of AI technologies and how they are shaping the future.",
    },
    {
      title: "Python: The Power of Simplicity",
      slug: "python-power",
      image: "/python.jpeg",
      description: "Discover why Python is one of the most popular programming languages and how to get started.",
    },
    {
      title: "AI Agents: The Next Step in Automation",
      slug: "ai-agents",
      image: "/ai-agents.jpeg",
      description: "How AI agents are transforming industries and businesses with their autonomy and efficiency.",
    },
    {
      title: "Frontend vs Backend: What’s the Difference?",
      slug: "frontend-vs-backend",
      image: "/frontendvsbackend.jpeg",
      description: "Dive into the differences between frontend and backend development and how they work together.",
    },
    {
      title: "The Future of Web Development",
      slug: "future-web-dev",
      image: "/web-develop.jpeg",
      description: "What’s next for web development? Explore emerging technologies and trends shaping the industry.",
    },
    {
      title: "The Power of Machine Learning in Data Science",
      slug: "machine-learning-data-science",
      image: "/machine-learning.jpeg",
      description: "Understand the role of machine learning in data science and how it’s revolutionizing industries.",
    },
    {
      title: "Cloud Computing: A Game Changer",
      slug: "cloud-computing",
      image: "/cloud-compute.jpeg",
      description: "Explore the impact of cloud computing on businesses and how it’s changing the way we work.",
    },
    {
      title: "Building Scalable Applications with Microservices",
      slug: "microservices",
      image: "/micro-services.jpeg",
      description: "Learn how to design scalable and efficient applications using microservices architecture.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white relative"
      style={{ backgroundImage: "url('/images/background.png')" }}
    >
      {/* Header */}
      <header className="py-6  fixed top-0 left-0 w-full shadow-lg z-20">
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Website Title */}
          <h1 className="text-2xl font-bold text-white">My Blog</h1>

          {/* Navigation Links */}
          <nav className="space-x-6">
            <Link
              href="/"
              className="text-white hover:text-yellow-400 transition duration-200"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-yellow-400 transition duration-200"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-yellow-400 transition duration-200"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Blog Section */}
      <div className="container mx-auto p-6 pt-32 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-10 text-shadow-md">
          Latest Blogs
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <a
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="group block bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <div
                className="h-56 bg-cover bg-center"
                style={{ backgroundImage: `url(${blog.image})` }}
              ></div>
              <div className="p-4 text-gray-800">
                <h3 className="text-xl font-bold group-hover:text-blue-600">
                  {blog.title}
                </h3>
                <p className="mt-2 text-gray-600">{blog.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
         <footer className="py-6 bg-gradient-to-r from-black/70 via-gray-900 to-black/70 w-full text-center text-gray-300 ">
      <p>&copy; {new Date().getFullYear()} SM Blogger. All rights reserved.</p>
      
   </footer>
    </div>
  );
}