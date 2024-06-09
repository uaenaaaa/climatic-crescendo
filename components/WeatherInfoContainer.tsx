'use client';
import React, { useState, useEffect } from 'react';
import WeatherDegreeIcon from '@/components/WeatherInfo/WeatherDegreeIcon';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import HumidityCard from '@/components/WeatherInfo/HumidityCard';
import FeelsLikeCard from '@/components/WeatherInfo/FeelsLikeCard';
import WindInfo from '@/components/WeatherInfo/WindInfo';
import UVInfo from '@/components/WeatherInfo/UVInfo';

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
	const weatherBaseURL = 'http://api.weatherapi.com/v1';
	const weatherAPIKey = process.env.NEXT_PUBLIC_WEATHER_API;
	const weatherAPIURL = `${weatherBaseURL}/current.json?key=${weatherAPIKey}&q=${city}`;

	useEffect(() => {
		const fetchWeather = async () => {
			try {
				const res = await axios.get(weatherAPIURL);
				setData(res.data);
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
		<Suspense fallback={<Skeleton />}>
			<WeatherDegreeIcon
				temperature={data.current.feelslike_c}
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

			<UVInfo uv_index={data.current.uv} />
		</Suspense>
	);
};

export default WeatherInfoContainer;
