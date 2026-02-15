import { useState } from 'react';
import { Icon } from '@iconify/react';

const TripForm = ({ onSubmit, loading }) => {
  const [formData, setFormData] = useState({
    destination: '',
    days: '',
    budget: '',
    interests: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-lg p-8 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 shadow-md mb-4">
          <Icon icon="mdi:map-marker-path" className="text-3xl text-white" />
        </div>
        <h2 className="text-3xl font-medium text-gray-900 mb-2">
          Plan Your Dream Trip
        </h2>
        <p className="text-gray-600">Fill in the details below</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <Icon icon="mdi:map-marker" className="text-xl text-primary-600 mr-2" />
            Destination
          </label>
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            placeholder="e.g., Paris, Tokyo, Bali"
            required
            className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary-600 outline-none transition-colors shadow-sm"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <Icon icon="mdi:calendar" className="text-xl text-primary-600 mr-2" />
              Duration (Days)
            </label>
            <input
              type="number"
              name="days"
              value={formData.days}
              onChange={handleChange}
              placeholder="5"
              min="1"
              max="30"
              required
              className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary-600 outline-none transition-colors shadow-sm"
            />
          </div>

          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <Icon icon="mdi:cash" className="text-xl text-primary-600 mr-2" />
              Budget (USD)
            </label>
            <input
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="$2000"
              required
              className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary-600 outline-none transition-colors shadow-sm"
            />
          </div>
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <Icon icon="mdi:heart" className="text-xl text-primary-600 mr-2" />
            Interests
          </label>
          <textarea
            name="interests"
            value={formData.interests}
            onChange={handleChange}
            placeholder="e.g., museums, food, adventure, beaches, nightlife"
            rows="3"
            required
            className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary-600 outline-none transition-colors resize-none shadow-sm"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-4 px-6 shadow-md hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {loading ? (
            <>
              <Icon icon="svg-spinners:ring-resize" className="text-2xl" />
              <span>Generating...</span>
            </>
          ) : (
            <>
              <Icon icon="mdi:send" className="text-xl" />
              <span>Generate Trip Plan</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default TripForm;
