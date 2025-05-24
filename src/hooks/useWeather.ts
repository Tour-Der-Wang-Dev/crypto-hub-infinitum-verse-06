import { useState, useEffect } from 'react';

export interface WeatherData {
  temperature: number;
  condition: 'clear' | 'clouds' | 'rain' | 'snow' | 'storm' | 'mist';
  humidity: number;
  windSpeed: number;
  location: string;
}

export const useWeather = (city?: string) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      if (!city) {
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
        if (!apiKey) {
          throw new Error("Weather API key is not defined in environment variables.");
        }
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        setWeather({
          temperature: data.main.temp,
          condition: mapCondition(data.weather[0].main),
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          location: data.name,
        });
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  const mapCondition = (condition: string): WeatherData['condition'] => {
    const lowerCondition = condition.toLowerCase();
    if (lowerCondition.includes('clear') || lowerCondition.includes('sunny')) {
      return 'clear';
    }
    if (lowerCondition.includes('cloud')) {
      return 'clouds';
    }
    if (lowerCondition.includes('rain') || lowerCondition.includes('drizzle')) {
      return 'rain';
    }
    if (lowerCondition.includes('snow')) {
      return 'snow';
    }
    if (lowerCondition.includes('storm') || lowerCondition.includes('thunder')) {
      return 'storm';
    }
    if (lowerCondition.includes('mist') || lowerCondition.includes('fog')) {
      return 'mist';
    }
    return 'clear'; // default fallback
  };

  return { weather, loading, error };
};
