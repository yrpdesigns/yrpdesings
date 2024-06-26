import { Josefin_Sans } from "next/font/google";
import Image from "next/image";

const josefinSans = Josefin_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="container">
      <section className="flex  sm:flex-col flex-row w-full">
        <div className="w-full flex">
          <Image
            src="https://img1.wsimg.com/isteam/stock/1257/:/rs=w:900,m"
            height={500}
            width={500}
            alt=""
            className="w-full h-full"
            priority={true}
          />
        </div>
        <div className="bg-slate-950 flex py-8 w-full">
          <div className="text-center text-white flex-auto">
            <h1 className="mt-4 text-4xl">TRANSFORM YOUR SPACE</h1>
            <h2 className={`${josefinSans.className} mt-4  text-xl`}>
              Bringing life to your home with our interior design services
            </h2>
            <button
              className={`${josefinSans.className} mt-4 rounded-full bg-teal-600 px-5 py-4  font-bold text-white hover:bg-teal-700`}
            >
              GET STARTED
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
