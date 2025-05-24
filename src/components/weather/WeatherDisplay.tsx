
import { Card, CardContent } from '@/components/ui/card';
import { useWeather } from '@/hooks/useWeather';
import { Cloud, CloudRain, CloudSnow, Sun, CloudLightning, Wind } from 'lucide-react';

interface WeatherDisplayProps {
  className?: string;
  city?: string;
}

const WeatherDisplay = ({ className, city = "London" }: WeatherDisplayProps) => {
  const { weather, loading, error } = useWeather(city);

  if (loading) {
    return (
      <Card className={`card-glass h-24 sm:h-28 ${className || ''}`}>
        <CardContent className="flex items-center justify-center h-full">
          <div className="animate-spin rounded-full h-5 w-5 sm:h-6 sm:w-6 border-b-2 border-infi-gold"></div>
        </CardContent>
      </Card>
    );
  }

  if (error || !weather) {
    return (
      <Card className={`card-glass h-24 sm:h-28 ${className || ''}`}>
        <CardContent className="flex items-center justify-center h-full px-4">
          <p className="text-gray-400 text-xs sm:text-sm text-center">Unable to load weather</p>
        </CardContent>
      </Card>
    );
  }

  const getWeatherIcon = () => {
    const iconSize = "h-8 w-8 sm:h-10 sm:w-10";
    switch (weather.condition) {
      case 'clear':
        return <Sun className={`text-infi-gold ${iconSize}`} />;
      case 'clouds':
        return <Cloud className={`text-gray-400 ${iconSize}`} />;
      case 'rain':
        return <CloudRain className={`text-blue-400 ${iconSize}`} />;
      case 'snow':
        return <CloudSnow className={`text-white ${iconSize}`} />;
      case 'storm':
        return <CloudLightning className={`text-purple-400 ${iconSize}`} />;
      case 'mist':
        return <Wind className={`text-gray-400 ${iconSize}`} />;
      default:
        return <Sun className={`text-infi-gold ${iconSize}`} />;
    }
  };

  const getConditionDescription = (condition: string) => {
    switch (condition) {
      case 'clear':
        return 'Clear sky';
      case 'clouds':
        return 'Cloudy';
      case 'rain':
        return 'Rainy';
      case 'snow':
        return 'Snowy';
      case 'storm':
        return 'Stormy';
      case 'mist':
        return 'Misty';
      default:
        return 'Clear';
    }
  };

  return (
    <Card className={`card-glass overflow-hidden ${className || ''}`}>
      <CardContent className="flex items-center p-3 sm:p-4 h-full">
        <div className="mr-3 sm:mr-4 flex-shrink-0">
          {getWeatherIcon()}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs text-gray-400 truncate">{weather.location}</p>
          <p className="text-xl sm:text-2xl font-bold text-white">{weather.temperature}°C</p>
          <p className="text-xs sm:text-sm text-gray-300 truncate">{getConditionDescription(weather.condition)}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherDisplay;
