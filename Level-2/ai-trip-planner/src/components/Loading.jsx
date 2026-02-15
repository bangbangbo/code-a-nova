import { Icon } from '@iconify/react';

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="bg-white p-8 shadow-lg mb-6">
        <Icon 
          icon="svg-spinners:ring-resize" 
          className="text-7xl text-primary-600" 
        />
      </div>
      <h3 className="text-2xl font-medium text-gray-800 mb-2">Creating Your Itinerary</h3>
      <p className="text-gray-600 text-center max-w-md">
        Please wait while we generate your personalized travel plan
      </p>
    </div>
  );
};

export default Loading;
