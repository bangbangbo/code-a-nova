import { useState } from 'react';
import { Icon } from '@iconify/react';
import Header from '../components/Header';
import TripForm from '../components/TripForm';
import TripResult from '../components/TripResult';
import Loading from '../components/Loading';
import { generateTripPlan, isApiConfigured } from '../services/geminiService';

const TripPlanner = () => {
  const [loading, setLoading] = useState(false);
  const [tripPlan, setTripPlan] = useState(null);
  const [error, setError] = useState(null);

  const handleGenerateTrip = async (formData) => {
    setLoading(true);
    setError(null);

    try {
      if (!isApiConfigured()) {
        throw new Error('Please configure your Gemini API key in the .env file');
      }

      const result = await generateTripPlan(
        formData.destination,
        formData.days,
        formData.budget,
        formData.interests
      );

      setTripPlan(result);
    } catch (err) {
      setError(err.message || 'Failed to generate trip plan. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setTripPlan(null);
    setError(null);
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-12">
        {!isApiConfigured() && (
          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-8 max-w-4xl mx-auto shadow-md">
            <div className="flex items-start space-x-4">
              <Icon icon="mdi:alert" className="text-4xl text-yellow-600 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-yellow-900 text-lg mb-1">API Key Required</h3>
                <p className="text-sm text-yellow-800">
                  Please add your Gemini API key to the <code className="bg-yellow-100 px-2 py-1">.env</code> file.
                  Get your free API key from <a href="https://makersuite.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="underline font-medium">Google AI Studio</a>.
                </p>
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8 max-w-4xl mx-auto shadow-md">
            <div className="flex items-start space-x-4">
              <Icon icon="mdi:alert-circle" className="text-4xl text-red-600 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-red-900 text-lg mb-1">Error</h3>
                <p className="text-sm text-red-800">{error}</p>
              </div>
            </div>
          </div>
        )}

        {loading ? (
          <div className="bg-white shadow-lg p-12 max-w-2xl mx-auto">
            <Loading />
          </div>
        ) : tripPlan ? (
          <TripResult result={tripPlan} onReset={handleReset} />
        ) : (
          <TripForm onSubmit={handleGenerateTrip} loading={loading} />
        )}
      </main>

      <footer className="bg-white mt-16 py-8 border-t shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-600">
              <Icon icon="mdi:code-tags" className="text-2xl text-primary-600" />
              <span>Built with React.js, Tailwind CSS, and Gemini AI</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors flex items-center space-x-1">
                <Icon icon="mdi:twitter" className="text-2xl" />
                <span className="text-sm">Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TripPlanner;
