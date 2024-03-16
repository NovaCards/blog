import Image from "next/image";
import Link from "next/link";
import { createClient } from "contentful";
import { BlogQueryResult } from "../types";
import { Navbar } from '../components/nav'

const client = createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN,
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
  return entries;
};

export default async function Home() {
  const blogEntries = await getBlogEntries();
  console.log("Home -> blogEntries", blogEntries)
  return (
    <div>
      <Navbar />
      <main className="flex min-h-screen flex-col gap-y-8 p-24">
        {blogEntries.items.map((singlePost) => {
          const { slug, title, date } = singlePost.fields;
          return (
            <div key={slug}>
              <Link className="group" href={`/articles/${slug}`}>
                <h2 className="font-extrabold text-xl group-hover:text-blue-500 transition-colors">{title}</h2>
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
    </div>
  );
}
