import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from "recharts";
import { getWeatherData } from "../services/api";

interface WeatherEntry {
    country: string;
    city: string;
    temperature: number;
    lastUpdated: string;
}

const WeatherChart: React.FC = () => {
    const [weatherData, setWeatherData] = useState<WeatherEntry[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getWeatherData();
            setWeatherData(data);
        };

        fetchData();
        const interval = setInterval(fetchData, 60000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-center text-lg font-semibold">Weather Data</h2>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={weatherData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="lastUpdated" tickFormatter={(tick) => new Date(tick).toLocaleTimeString()} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="temperature" stroke="#8884d8" name="Temperature (°C)" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default WeatherChart;
