import React from 'react';
import { AstroInterface } from '@/interface/WeatherInterface';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AstroContainer = ({
	sunrise,
	sunset,
	moonrise,
	moonset,
	moon_phase,
	moon_illumination,
	is_moon_up,
	is_sun_up,
}: AstroInterface) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Feels Like</CardTitle>
			</CardHeader>
			<CardContent>
				<h1>{sunrise}</h1>
				<h1>{sunset}</h1>
				<h1>{moonrise}</h1>
				<h1>{moonset}</h1>
				<h1>{moon_phase}</h1>
				<h1>{moon_illumination}</h1>
				<h1>{is_moon_up}</h1>
				<h1>{is_sun_up}</h1>
			</CardContent>
		</Card>
	);
};

export default AstroContainer;
