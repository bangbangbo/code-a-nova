# AI Trip Planner

An intelligent trip planning application powered by Google's Gemini AI. Built with React.js and Tailwind CSS.

## Features

- ✅ AI-powered trip itinerary generation
- ✅ Customizable trip parameters (destination, duration, budget, interests)
- ✅ Day-by-day detailed itinerary
- ✅ Cost estimates and travel tips
- ✅ Local food recommendations
- ✅ Modern, responsive UI with Tailwind CSS
- ✅ Real-time AI generation
- ✅ Clean component architecture

## Technologies Used

- **React.js** - Frontend framework
- **Tailwind CSS** - Styling and responsive design
- **Vite** - Build tool and dev server
- **Gemini AI API** - AI-powered trip planning
- **JavaScript (ES6+)** - Programming language

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Gemini API key from Google AI Studio

## Setup Instructions

### 1. Get Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy your API key

### 2. Install Dependencies

```bash
cd ai-trip-planner
npm install
```

### 3. Configure Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Open `.env` and add your Gemini API key:
   ```
   VITE_GEMINI_API_KEY=your_actual_api_key_here
   ```

### 4. Run the Application

```bash
npm run dev
```

The app will open at `http://localhost:5173`

## Project Structure

```
ai-trip-planner/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── Header.jsx
│   │   ├── TripForm.jsx
│   │   ├── TripResult.jsx
│   │   └── Loading.jsx
│   ├── pages/            # Page components
│   │   └── TripPlanner.jsx
│   ├── services/         # API services
│   │   └── geminiService.js
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── .env.example          # Environment variables template
├── .gitignore           # Git ignore rules
├── index.html           # HTML template
├── package.json         # Dependencies
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
└── README.md            # Documentation
```

## Component Breakdown

### Header.jsx
- Displays app branding and logo
- Shows "Powered by Gemini AI" badge

### TripForm.jsx
- User input form for trip details
- Validates destination, days, budget, and interests
- Responsive grid layout

### TripResult.jsx
- Displays AI-generated trip itinerary
- Formats markdown-style content
- Includes "Plan Another Trip" button

### Loading.jsx
- Shows loading spinner during AI generation
- Provides user feedback

### TripPlanner.jsx (Main Page)
- Manages application state
- Handles API calls
- Error handling and display

## API Configuration

The app uses Google's Gemini AI API. Configuration is in `src/services/geminiService.js`:

```javascript
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
```

The API generates detailed trip plans including:
- Day-by-day itinerary
- Recommended places
- Cost estimates
- Best visiting times
- Food recommendations
- Travel tips

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## Deployment Instructions

### Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to Netlify:
   - Drag and drop the `dist` folder to Netlify
   - Or connect your GitHub repository

3. Add environment variables in Netlify:
   - Go to Site Settings > Environment Variables
   - Add `VITE_GEMINI_API_KEY` with your API key

### Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Add environment variables:
   - Go to Project Settings > Environment Variables
   - Add `VITE_GEMINI_API_KEY`

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload the `dist` folder to your hosting provider

3. Configure environment variables on your hosting platform

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_GEMINI_API_KEY` | Your Gemini API key | Yes |

## Usage

1. Enter your destination (e.g., "Paris", "Tokyo")
2. Specify number of days (1-30)
3. Set your budget (e.g., "$2000")
4. List your interests (e.g., "museums, food, adventure")
5. Click "Generate Trip Plan"
6. Wait for AI to create your personalized itinerary
7. Review your trip plan and save/print as needed

## Troubleshooting

### "Please configure your Gemini API key"
- Make sure you created a `.env` file
- Verify your API key is correct
- Restart the development server

### API Rate Limits
- Gemini API has rate limits on free tier
- Wait a few moments between requests
- Consider upgrading to paid tier for production

### Build Errors
- Delete `node_modules` and run `npm install` again
- Clear Vite cache: `rm -rf node_modules/.vite`
- Ensure Node.js version is 16 or higher

## Best Practices

- Never commit `.env` file to Git
- Use environment variables for API keys
- Test with different destinations and budgets
- Validate user input before API calls
- Handle errors gracefully
- Optimize images and assets

## Future Enhancements

- Save trip plans to local storage
- Export itinerary as PDF
- Share trip plans via link
- Add map integration
- Multi-language support
- User authentication
- Trip history

## License

This project is open source and available for educational purposes.

## Support

For issues or questions:
1. Check the troubleshooting section
2. Review Gemini API documentation
3. Check React and Vite documentation

## Credits

- Built with React.js and Vite
- Styled with Tailwind CSS
- Powered by Google Gemini AI
