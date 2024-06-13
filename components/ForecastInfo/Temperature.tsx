import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface TemperatureInterface {
	maxtemp_c: number;
	maxtemp_f: number;
	mintemp_c: number;
	mintemp_f: number;
	avgtemp_c: number;
	avgtemp_f: number;
}

const Temperature = ({
	maxtemp_c,
	maxtemp_f,
	mintemp_c,
	mintemp_f,
	avgtemp_c,
	avgtemp_f,
}: TemperatureInterface) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Temperature</CardTitle>
			</CardHeader>
			<CardContent>
				<h1>{maxtemp_c}°C</h1>
				<h1>{maxtemp_f}°F</h1>
				<h1>{mintemp_c}°C</h1>
				<h1>{mintemp_f}°F</h1>
				<h1>{avgtemp_c}°C</h1>
				<h1>{avgtemp_f}°F</h1>
			</CardContent>
		</Card>
	);
};

export default Temperature;
