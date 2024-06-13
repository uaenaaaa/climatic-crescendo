import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface AverageHumidityInterface {
	avghumidity: number;
}
const AverageHumidity = ({ avghumidity }: AverageHumidityInterface) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Average Humidity</CardTitle>
			</CardHeader>
			<CardContent>
        <h1>{avghumidity}</h1>
			</CardContent>
		</Card>
	);
};

export default AverageHumidity;
