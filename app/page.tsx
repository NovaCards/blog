import Image from "next/image";
import Link from "next/link";
import { createClient } from "contentful";
import ContentfulImage from '../ui/contentful-image'
import { BlogQueryResult } from "./types";

const client = createClient({
  space: process.env.SPACE_ID ?? "",
  accessToken: process.env.ACCESS_TOKEN || "",
});

export async function generateStaticParams() {
  const queryOptions = {
    content_type: "blog",
    select: "fields.slug",
  };
  const articles = await client.getEntries(queryOptions)
  return articles.items.map((article) => ({
    slug: article.fields.slug,
  }));
}

const getBlogEntries = async (): Promise<BlogQueryResult> => {
  const entries = await client.getEntries({ content_type: "blog" });
  let blogPosts: BlogQueryResult = {
    items: entries.items as any,
  };
  return blogPosts;
};

export default async function Home() {
  const blogEntries = await getBlogEntries();
  console.log("Home -> blogEntries", blogEntries)
  return (
    <main className="flex min-h-screen flex-col gap-y-8 p-4 md:p-24 bg-zinc-950">
      <h1 className="text-4xl font-bold">Latest From Us:</h1>
      {blogEntries.items.map((singlePost) => {
        const { slug, title, date, image } = singlePost.fields;
        return (
          <div key={slug}>
            <Link className="group" href={`/articles/${slug}`}>
              <h2 className="font-bold text-2xl group-hover:text-blue-500 transition-colors">{title}</h2>
              <span>
                Posted on{" "}
                {new Date(date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </Link>
          </div>
        );
      })}
    </main>
  );
}
