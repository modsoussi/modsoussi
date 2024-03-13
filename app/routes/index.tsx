import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => ({
  title: "modsoussi;",
})

export default function About() {
  return (
    <main className="pb-4 md:pb-10">
      <p>
        My name is Mohamed, and most people call me Mo. I was born and raised in Tunisia. I moved to the US in 2012 
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
        Fundamentally, I believe that humanity is the greatest thing to ever happen to planet Earth, and I want to see us thrive as a species. 
        We have the capacity to make things infinitely better for everyone by building better technology, and I don&apos;t just mean IT.
      </p>
      <div className="my-2">
        <h2 className="text-oxford-500 mb-1"><i>AI</i></h2>
        <p>
          AI is transforming major aspects of our lives, and we haven&apos;t even gotten to AGI yet. Before the advent of LLMs, AI 
          was already being used to do a wide variety of tasks, from drug discovery to preventing online fraud.
          Since December 2022, GPT-3 and all of the models that followed, depsite their many imperfections, have shown
          the world what generalized AI models are capable of. We must continue to build towards AGI.
        </p>
      </div>
      <div className="my-2">
        <h2 className="text-oxford-500 mb-1"><i>Energy</i></h2>
        <p>
          In 1964, Russian astrophysicist Nikolai Kardashev came up with a scale to measure a civilization&apos;s technological advancement
          based on the quantity of usable energy it has at its disposal. The Kardashev scale has three base types: Type I (10^16 W), Type II (10^26 W),
          and Type III (10^36 W). Global energy consumption in 2022 was around 180,000 TWh - equivalent to the energy output of a Type I civilization in 
          only 18 hours - and about 76% of that came from fossil fuels. This is how I think about Energy: We need to produce many orders of magnitude more of it,
          and Nuclear's share in the mix needs to be much higher than its current level of around 3.7%.
        </p>
      </div>
      <div className="my-2">
        <h2 className="text-oxford-500 mb-1"><i>Nanotech</i></h2>
        <p>
          In 1942, Robert Heinlein published a short story where he introduced the concept of a <i>telemanipulator</i>, essentially a robot arm that&apos;s
          manipulated remotely by a human operator, instead of being programmed. Waldos are (a) self-replicating and (b) scale-shifting.
          <br />
          In 1959, during a talk titled "There&apos;s plenty of room at the bottom", Richard Feynman provided a detailed and reasonably sound technological 
          and scientific basis for Waldos, becoming the first to envision what would come to be called nanotechnology.
          <br />
          Roughly 60 years later, we are nowhere closer to what Eric Drexler called "complete control of the structure of matter", and this must change.
          I view nanotech as one of the most important challenges that we will tackle this century.
        </p>
      </div>
      <div className="my-2">
        <h2 className="text-oxford-500 mb-1"><i>Space Exploration</i></h2>
        <p>
          The last time Mankind set foot on the Moon was in December 1972. We should have a permanent base on the Moon by now, we should be on Mars, 
          we should have habitable orbital stations, we should have orbital factories that can assemble spaceships in Space like in Star Trek, we should be 
          mining in the Asteroid Belt. Space is the ultimate challenge to our human existence, and the natural next step in our evolution.
        </p>
      </div>
      <p>
        Our time on Earth is the most valuable thing we have, and I choose to spend mine contributing to the advancement of AI, Energy, Nanotech, and Space 
        Exploration. From where I stand, the future of humanity looks mighty bright. If any of the above resonates with you, feel free to reach out, 
        and let's build!
      </p>
    </main>
  );
}