const API_KEY = 'e72454da29951ecd4b0c769d3fb0a184';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const effectLayer = document.getElementById('effect-layer');
const body = document.getElementById('body');

const iconMap = {
    'Clear': 'wi:day-sunny',
    'Clouds': 'wi:cloudy',
    'Rain': 'wi:rain',
    'Drizzle': 'wi:sprinkle',
    'Thunderstorm': 'wi:thunderstorm',
    'Snow': 'wi:snow',
    'Mist': 'wi:fog',
    'Smoke': 'wi:smoke',
    'Haze': 'wi:day-haze',
};

async function checkWeather(city) {
    try {
        const response = await fetch(`${API_URL}?q=${city}&units=metric&appid=${API_KEY}`);
        if (!response.ok) throw new Error("City not found");

        const data = await response.json();
        console.log(data)
        updateUI(data);
        createAtmosphere(data.weather[0].main);
        document.getElementById('error').classList.add('hidden');
    } catch (err) {
        document.getElementById('error').textContent = err.message;
        document.getElementById('error').classList.remove('hidden');
    }
}

function updateUI(data) {
    document.getElementById('cityName').textContent = `${data.name}, ${data.sys.country}`;
    document.getElementById('temp').textContent = Math.round(data.main.temp);
    document.getElementById('desc').textContent = data.weather[0].description;
    document.getElementById('feelsLike').textContent = `${Math.round(data.main.feels_like)}°C`;
    document.getElementById('humidity').textContent = `${data.main.humidity}%`;
    document.getElementById('wind').textContent = `${Math.round(data.wind.speed)} km/h`;

    // Update Iconify Icon
    const condition = data.weather[0].main;
    const iconName = iconMap[condition] || 'wi:na';
    document.getElementById('weatherIcon').setAttribute('icon', iconName);
}

function createAtmosphere(condition) {
    // Reset
    effectLayer.innerHTML = '';
    body.className = "min-h-screen flex items-center justify-center p-6 overflow-hidden relative bg-transition ";
    switch (condition) {
        case 'Rain':
        case 'Drizzle':
            body.classList.add('bg-slate-800');
            for (let i = 0; i < 50; i++) {
                const drop = document.createElement('div');
                drop.className = 'rain-drop';
                drop.style.left = Math.random() * 100 + 'vw';
                drop.style.animationDuration = (Math.random() * 0.5 + 0.5) + 's';
                drop.style.animationDelay = Math.random() * 2 + 's';
                effectLayer.appendChild(drop);
            }
            break;

        case 'Clear':
        case 'Sunny':
            body.classList.add('bg-gradient-to-br', 'from-yellow-300', 'to-orange-400');
            const ray = document.createElement('div');
            ray.className = 'sun-ray';
            effectLayer.appendChild(ray);
            break;


        case 'Snow':
            body.classList.add('bg-slate-300');
            for (let i = 0; i < 40; i++) {
                const flake = document.createElement('iconify-icon');
                flake.setAttribute('icon', 'ph:snowflake-light');
                flake.className = 'snow-flake';
                flake.style.left = Math.random() * 100 + 'vw';
                flake.style.fontSize = (Math.random() * 20 + 10) + 'px';
                flake.style.animationDuration = (Math.random() * 3 + 2) + 's';
                flake.style.opacity = Math.random();
                effectLayer.appendChild(flake);
            }
            break;

        case 'Clouds':
            body.classList.add('bg-gradient-to-br', 'from-gray-500', 'to-slate-700');
            break;

        default:
            body.classList.add('bg-gradient-to-br', 'from-indigo-500', 'to-purple-700');
    }
}

searchBtn.addEventListener('click', () => checkWeather(cityInput.value));
cityInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') checkWeather(cityInput.value) });