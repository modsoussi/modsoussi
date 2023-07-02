import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => ({
  title: "About",
})

export default function About() {
  return (
    <main>
      <p>
        Mo, short for Mohamed. Started&nbsp;
        <a 
          href="https://daycationapp.com" 
          rel="noreferrer" 
          className="transition-all duration-100 text-dawn-500 hover:text-kabul-500" 
          target="_blank">
          Daycation
        </a> 
        &nbsp;in Miami in 2016, worked there since. I was born and raised in Tunisia, and moved to the US in 2012 
        to study Physics and CS at Williams College.
      </p>
      <p className="my-2">
        My areas of interest are <em>AI</em>, <em>Robotics</em>, <em>Space Exploration</em>, <em>Energy</em>, and&nbsp;<em>Startups</em>. 
        Fundamentally, I believe that humanity is the greatest thing that's happened on Earth. We have caused plenty of harm to our environment,
        there's no denying that, but it remains true that we haven't even scratched the surface of all the goddness that we're able to bring into this world. 
        AI and Robotics combined will multiply that potential by several orders of magnitude through innovative startups. Space Exploration, although extremely
        difficult since we evolved to live right here on Earth, is still the most important endeavor of the 21st 
        century. Space means more knowledge, more resources, and more space for people to thrive. To explore outer Space,
        we'll need new engines to power ships capable of traveling much faster than what's possible today. 
        We'll need self-sustaining orbital habitats. We&apos;ll need to solve these and many other problems, 
        and that&apos;s exciting!
      </p>
      <p>
        From where I stand, the future of humanity looks mighty bright. Let's build!
      </p>
    </main>
  );
}