import Link from "next/link";
import moment from "moment";

export default function Posts({ posts }) {
  return (
    <div className="mt-6 border-t-2 border-gray-100 gap-16 pt-10 grid lg:grid-cols-2 lg:gap-y-12 lg:gap-x-5">
      {posts.map((post, i) => (
        <article key={i}>
          <p className="text-sm leading-5 text-gray-500">
            <span>{moment(post.node.createdAt).format("ll")}</span>
          </p>
          <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
            {post.node.title}
          </h3>
          <p className="mt-3 text-base leading-6 text-gray-500">
            {post.node.excerpt}
          </p>
          <div className="mt-3">
            <Link
              href={`/post/${post.node.slug}`}
              className="text-base leading-6 font-semibold text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150"
            >
              Read full story
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
