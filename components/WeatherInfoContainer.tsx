'use client';
import React, { useState, useEffect } from 'react';
import WeatherDegreeIcon from '@/components/WeatherInfo/WeatherDegreeIcon';
import { Skeleton } from '@/components/ui/skeleton';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import HumidityCard from '@/components/WeatherInfo/HumidityCard';
import FeelsLikeCard from '@/components/WeatherInfo/FeelsLikeCard';
import WindInfo from '@/components/WeatherInfo/WindInfo';
import UVInfo from '@/components/WeatherInfo/UVInfo';
import GeographicalInfo from '@/components/WeatherInfo/GeographicalInfo';
import PressureInfo from '@/components/WeatherInfo/PressureInfo';
import VisibilityInfo from '@/components/WeatherInfo/VisibilityInfo';
import FutureForecast from '@/components/FutureForecast';
import PrecipitationCard from '@/components/WeatherInfo/PrecipitationCard';
import {
	AstroInterface,
	CurrentInterface,
	LocationInterface,
	DayForecast,
	HourInterface,
} from '@/interface/WeatherInterface';
interface Forecast {
	location: LocationInterface;
	current: CurrentInterface;
	forecast: {
		forecastday: DayForecast[];
	};
	astro: AstroInterface;
	hour: HourInterface[];
}
const WeatherInfoContainer = () => {
	const [data, setData] = useState<Forecast | null>(null);
	const searchParams = useSearchParams();
	const city = searchParams.get('city');
	const lat = searchParams.get('lat');
	const lon = searchParams.get('lon');
	const weatherBaseURL = 'https://api.weatherapi.com/v1';
	const weatherAPIKey = process.env.NEXT_PUBLIC_WEATHER_API;
	let forecastAPIURL = '';

	if (city) {
		forecastAPIURL = `${weatherBaseURL}/forecast.json?key=${weatherAPIKey}&q=${city}&days=10`;
	} else if (lat && lon) {
		forecastAPIURL = `${weatherBaseURL}/forecast.json?key=${weatherAPIKey}&q=${lat},${lon}&days=10`;
	}

	useEffect(() => {
		const fetchWeather = async () => {
			try {
				if (forecastAPIURL) {
					const res = await axios.get(forecastAPIURL);
					setData(res.data);
					console.log(res.data);
				}
			} catch (err) {
				console.error(err);
			}
		};

		fetchWeather();
	}, [forecastAPIURL]);

	if (!data) {
		return <Skeleton />;
	}

	return (
		<div className='flex flex-col gap-5'>
			<div className='grid grid-cols-2 mt-5 md:grid-cols-3 gap-4'>
				<GeographicalInfo
					lat={data.location.lat}
					lon={data.location.lon}
					timezone={data.location.tz_id}
					country={data.location.country}
					city={data.location.name}
					localtime={data.location.localtime}
				/>

				<WeatherDegreeIcon
					local_time={data.location.localtime}
					temperature={data.current.temp_c}
					condition={data.current.condition.text}
					code={data.current.condition.code}
				/>

				<HumidityCard humidity_level={data.current.humidity} />
				<FeelsLikeCard
					feelslike_c={data.current.feelslike_c}
					feelslike_f={data.current.feelslike_f}
				/>

				<WindInfo
					wind_mph={data.current.wind_mph}
					wind_kph={data.current.wind_kph}
					wind_degree={data.current.wind_degree}
					wind_direction={data.current.wind_dir}
				/>

				<PressureInfo
					pressure_in={data.current.pressure_in}
					pressure_mb={data.current.pressure_mb}
				/>

				<VisibilityInfo
					visibility_km={data.current.vis_km}
					visibility_mi={data.current.vis_miles}
				/>

				<PrecipitationCard
					precipitation_mm={data.current.precip_mm}
					precipitation_in={data.current.precip_in}
				/>

				<UVInfo uv_index={data.current.uv} />
			</div>

			<FutureForecast forecast={data.forecast.forecastday} />
		</div>
	);
};

export default WeatherInfoContainer;
