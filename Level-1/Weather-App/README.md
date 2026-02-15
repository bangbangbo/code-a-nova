# Weather App

A responsive weather app that shows real-time weather information for any city.

## Features

* Search for any city worldwide
* View temperature, humidity, wind speed
* Weather description with icons
* Responsive design for mobile and desktop
* Error handling for invalid cities

## Technologies

* HTML, CSS, JavaScript
* OpenWeatherMap API

## Setup

1. **Get API Key**

   * Sign up at [OpenWeatherMap](https://openweathermap.org/api)
   * Generate your API key

2. **Configure API Key**

   * Open `script.js`
   * Replace `YOUR_API_KEY_HERE` with your key:

     ```javascript
     const API_KEY = 'your_actual_api_key_here';
     ```

3. **Run the App**

   * Open `index.html` in your browser
   * Enter a city and click Search

## File Structure

```
Weather-App/
├── index.html
├── styles.css
├── script.js
└── README.md
```

## Notes

* Works without an API key in demo mode (static data)
* Use environment variables for API key in production