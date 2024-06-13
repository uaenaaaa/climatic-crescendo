import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface PrecipitationInterface {
	totalprecip_mm: number;
	totalprecip_in: number;
}
const Precipitation = ({
	totalprecip_mm,
	totalprecip_in,
}: PrecipitationInterface) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Precipitation</CardTitle>
			</CardHeader>
			<CardContent>
				<h1>{totalprecip_mm}</h1>
				<h1>{totalprecip_in}</h1>
			</CardContent>
		</Card>
	);
};

export default Precipitation;
