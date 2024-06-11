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
import GeographicalInfo from './WeatherInfo/GeographicalInfo';
import PressureInfo from './WeatherInfo/PressureInfo';
import VisibilityInfo from './WeatherInfo/VisibilityInfo';
import PrecipitationCard from './WeatherInfo/PrecipitationCard';

interface Condition {
	text: string;
	icon: string;
	code: number;
}

interface Location {
	name: string;
	region: string;
	country: string;
	lat: number;
	lon: number;
	tz_id: string;
	localtime_epoch: number;
	localtime: string;
}

interface Current {
	last_updated_epoch: number;
	last_updated: string;
	temp_c: number;
	temp_f: number;
	is_day: number;
	cloud: number;
	condition: Condition;
	feelslike_c: number;
	feelslike_f: number;
	gust_kph: number;
	gust_mph: number;
	humidity: number;
	precip_in: number;
	precip_mm: number;
	pressure_in: number;
	pressure_mb: number;
	uv: number;
	vis_km: number;
	vis_miles: number;
	wind_degree: number;
	wind_dir: string;
	wind_kph: number;
	wind_mph: number;
}

interface WeatherResponse {
	location: Location;
	current: Current;
}
const WeatherInfoContainer = () => {
	const [data, setData] = useState<WeatherResponse | null>(null);
	const searchParams = useSearchParams();
	const city = searchParams.get('city');
	const lat = searchParams.get('lat');
	const lon = searchParams.get('lon');
	const weatherBaseURL = 'https://api.weatherapi.com/v1';
	const weatherAPIKey = process.env.NEXT_PUBLIC_WEATHER_API;
	let weatherAPIURL = '';

	if (city) {
		weatherAPIURL = `${weatherBaseURL}/current.json?key=${weatherAPIKey}&q=${city}`;
	} else if (lat && lon) {
		weatherAPIURL = `${weatherBaseURL}/current.json?key=${weatherAPIKey}&q=${lat},${lon}`;
	}

	useEffect(() => {
		const fetchWeather = async () => {
			try {
				if (weatherAPIURL) {
					const res = await axios.get(weatherAPIURL);
					setData(res.data);
				}
			} catch (err) {
				console.error(err);
			}
		};

		fetchWeather();
	}, [weatherAPIURL]);

	if (!data) {
		return <Skeleton />;
	}

	return (
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
	);
};

export default WeatherInfoContainer;
