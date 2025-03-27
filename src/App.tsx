import React from 'react';
import './App.css';
import WeatherChart from './components/WeatherChart';

const App: React.FC = () => {
  return (
      <div className="container mx-auto p-4">
          <h1 className="text-center text-2xl font-bold mb-4">Weather Dashboard</h1>
          <WeatherChart />
      </div>
  );
};

export default App;
