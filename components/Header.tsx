import React from "react";

const Header = ({NextLink}: any) => {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-8">
        <NextLink  href="/">
          <h2>Anayata</h2>
        </NextLink>
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
