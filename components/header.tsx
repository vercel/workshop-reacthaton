import Link from "next/link";

const navigation = [{ name: "Recipes", href: "/recipes" }];

export default function Header() {
  return (
    <header className="bg-indigo-600">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <a className="text-3xl text-white">Dragin'Mixin!</a>
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <Link key={link.name} href={link.href}>
                  <a className="text-base font-medium text-white hover:text-indigo-50">
                    {link.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map((link) => (
            <Link key={link.name} href={link.href}>
              <a className="text-base font-medium text-white hover:text-indigo-50">
                {link.name}
              </a>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
