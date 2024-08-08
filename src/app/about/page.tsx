import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `# About Me

![Hrithik](https://fast.image.delivery/gdkznim.jpg)

👋 Hi, I'm Hrithik Kumar - Software Development Engineer (Full-Stack Developer). 

I Love to dig and explore fundamental engineering concepts around the web, listening to conferences podcasts🎧, and reading articles on the internet. 👨‍💻

I have achieved notable accomplishments, including successfully solving DSA on platforms such as LeetCode, HackerRank, and GeeksforGeeks. I hold a 4-star with 1900+ rating on Leetcode in Problem Solving and secured an AIR 8th in Geek-O-Lympics 2023 coding challenge - GFG Platform, secured AIR 917th in Codekaze Coding Challenge 2023 - Coding Ninjas among 60k+ participants. Furthermore, I qualified in the TechGig code gladiators 2023 with AIR 245th as a Semifinalist – just me, my backpack, and an open path ahead.

![Hrithik](https://fast.image.delivery/utfwgky.jpg)

This blog is where I'll be documenting my journeys & insights, sharing my experiences, and hopefully inspiring others to follow their wanderlust. I'm on a mission to immerse myself in different cultures and create memories that will last a lifetime.

But this journey isn't just about checking off destinations from a bucket list. It's about self-discovery, personal growth, and finding the courage to live life on my own terms. I'll be honest and raw, sharing the highs and lows, the moments of pure bliss and the inevitable challenges that come with experiences.

So join me on this adventure, and let's explore the world together! Who knows, maybe my stories will inspire you to take that leap of faith and pursue your own dreams, whatever they may be.

Let's go on an adventure!

Love,

Hrithik`
;

export async function generateMetadata() {
  return {
    title: "About Me",
    description: "Learn more about Hrithik and his life adventures",
    openGraph: {
      title: "About Me",
      description: "Learn more about Hrithik and his life adventures",
      images: [
        signOgImageUrl({
          title: "Hrithik",
          label: "About Me",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

const Page = async () => {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
        <Markdown>{content}</Markdown>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
