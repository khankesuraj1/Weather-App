# 🌤️ Weather Now

**Weather Now** is a React.js + Tailwind CSS application that lets users quickly check the **current weather conditions for any city**.  
It uses the **Open-Meteo API** for real-time weather data and **Geocoding API** for city lookup.  

---

## 🚀 Features
- 🌍 Search weather by **city name**  
- 🌡️ Shows **temperature, wind speed, and condition**  
- 🎨 Interactive **UI with icons, gradients, and animations**  
- ⚡ Fast and responsive (React + Tailwind CSS)  
- ❌ Handles errors like "City not found"  

---

## 🛠️ Tech Stack
- **Frontend:** React.js  
- **Styling:** Tailwind CSS  
- **API:** Open-Meteo Weather & Geocoding API  

---

## 📦 Installation & Setup

```bash
# 1. Clone the repository
git clone https://github.com/your-username/weather-now.git

# 2. Move into project folder
cd weather-now

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev

⚙️ API Used

Geocoding API (to get latitude & longitude from city name)

https://geocoding-api.open-meteo.com/v1/search?name={city}&count=1


Weather API (to get current weather data)

https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true

📸 Preview (UI Overview)

Search bar for entering city name

Weather card with:

City & Country

Temperature in °C

Wind Speed

Condition with Emoji (☀️, 🌧️, ❄️ etc.)

🔮 Future Improvements

🌈 Dynamic background changes based on weather (sunny, cloudy, rainy, etc.)

📍 Detect user’s location automatically and show local weather

📱 Make fully mobile-optimized

👨‍💻 Author

Developed by Suraj Khanke ✨



