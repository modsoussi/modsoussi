import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => ({
  title: "modsoussi;",
})

export default function About() {
  return (
    <main>
      <p>
        Mo, short for Mohamed, born and raised in Tunisia. I moved to the US in 2012 
        to study Physics and CS at Williams College. I am one of the cofounders of a travel tech startup called&nbsp;
        <a 
          href="https://daycationapp.com" 
          rel="noreferrer" 
          className="transition-all duration-100 text-dawn-500 hover:text-kabul-500" 
          target="_blank">
          Daycation.
        </a> 
      </p>
      <p className="my-2">
        I'm mainly interested in <em>AI</em>, <em>Nanotech</em>, <em>Space Exploration</em>, <em>Energy</em>, and&nbsp;<em>Startups</em>. 
        I believe humanity is fundamentally the greatest thing that's happened to Earth. We have caused plenty of harm to our environment,
        there's no denying that, but it remains true that we haven't even scratched the surface of all the goddness that we can bring into it. 
        AI and Nanotech combined will multiply that potential by several orders of magnitude through innovative startups. Space Exploration, although extremely
        difficult since we evolved to live right here on Earth, is in my opinion one of the most important endeavors of the 21st 
        century. Space means more knowledge, more resources, and more space for people to live and thrive. Space pushes us to truly think outside the box, and come
        up wih solutions to some really hard problems: space situational awareness, orbital debris, self-sustaining orbital habitats, energy abundance, ever faster space travel, and more.  
      </p>
      <p>
        From where I stand, the future of humanity looks mighty bright. Let's build!
      </p>
    </main>
  );
}