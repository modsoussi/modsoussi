import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => ({
  title: "modsoussi;",
})

export default function About() {
  return (
    <main className="pb-4 md:pb-10">
      
      <p className="my-2">
        I&apos;m Mo, short for Mohamed. Fundamentally, I believe that humanity is the greatest thing to ever happen to planet Earth, and I want to see us thrive as a species. 
        We have the capacity to make things infinitely better for everyone by building better technology, and I don&apos;t just mean IT.
      </p>
      <div className="my-2">
        I'm intereted in AI and getting to AGI, Energy and how we can climb the Kardashev scale, Nanotech and how we can gain &quot;complete control over
        the structure of matter&quot;, and Space Exploration and how we become a multiplanetary species.
      </div>
      <p>
        Our time on Earth is the most valuable thing we have, and I choose to spend mine contributing to the advancement of AI, Energy, Nanotech, and Space 
        Exploration. From where I stand, the future of humanity looks mighty bright. If any of the above resonates with you, feel free to reach out, 
        and let's build!
      </p>
    </main>
  );
}