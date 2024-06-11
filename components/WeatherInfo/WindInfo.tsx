import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const WindInfo = ({
	wind_mph,
	wind_kph,
	wind_degree,
	wind_direction,
}: {
	wind_mph: number;
	wind_kph: number;
	wind_degree: number;
	wind_direction: string;
}) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Wind</CardTitle>
			</CardHeader>
			<CardContent>
				<h1>{wind_direction}</h1>
				<h1>{wind_mph} mph</h1>
				<h1>{wind_kph} kph</h1>
				<h1>{wind_degree}°</h1>
			</CardContent>
		</Card>
	);
};

export default WindInfo;
