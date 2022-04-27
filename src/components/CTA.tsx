import Image from "next/image";
import Link from "next/link";

export const CallToAction = () => {
  return (
    <div className="relative white">
      <div className="h-56 bg-white sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <Image src="/cocktail.png" height={500} width={500}></Image>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="text-base font-semibold uppercase tracking-wider ">
            Dragin&lsquo;Mixin
          </h2>
          <p className="mt-2  text-3xl font-extrabold tracking-tight sm:text-4xl">
            The best cocktails!
          </p>
          <p className="mt-3 text-lg ">
            The best tool in order to make the best drag queen convention in
            town!
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <Link href="/recipes">
                <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-indigo-400 hover:bg-indigo-300">
                  See the recipes
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
