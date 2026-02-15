import { Icon } from '@iconify/react';

const Header = () => {
  return (
    <header className="bg-primary-600 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white p-2 shadow-md">
              <Icon icon="mdi:airplane" className="text-4xl text-primary-600" />
            </div>
            <div>
              <h1 className="text-2xl font-medium text-white">AI Trip Planner</h1>
              <p className="text-primary-100 text-sm">Plan Your Perfect Journey</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-2 bg-primary-700 px-4 py-2 shadow-sm rounded-full">
            <Icon icon="mdi:robot" className="text-xl text-white" />
            <span className="text-white text-sm font-medium">Powered by Gemini AI</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
