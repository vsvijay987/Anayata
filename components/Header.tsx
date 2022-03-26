import React from "react";
//@ts-ignore
import Link from "next/Link";

const Header = () => {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-8">
        <Link href="/">
          <h2>Anayata</h2>
        </Link>
        <div className="inline-flex items-center space-x-5">
          <h3 className="text-white px-4 py-1 rounded-full" style={{backgroundColor: '#a75ca5'}}>
            Home
          </h3>
          <h3>About</h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
