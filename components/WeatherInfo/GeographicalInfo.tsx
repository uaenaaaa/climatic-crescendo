import React from 'react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';

const GeographicalInfo = ({
	lat,
	lon,
	timezone,
	country,
	city,
	localtime,
}: {
	lat: number;
	lon: number;
	timezone: string;
	country: string;
	city: string;
	localtime: string;
}) => {
	return (
		<Card>
			<CardContent>
				<CardTitle>Geographical Information</CardTitle>
				<h1>Latitude: {lat}</h1>
				<h1>Longitude: {lon}</h1>
				<h1>Timezone: {timezone}</h1>
				<h1>Country: {country}</h1>
				<h1>City: {city}</h1>
				<h1>{localtime}</h1>
			</CardContent>
		</Card>
	);
};

export default GeographicalInfo;
