import React from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
const PrecipitationCard = ({
	precipitation_mm,
	precipitation_in,
}: {
	precipitation_mm: number;
	precipitation_in: number;
}) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Precipitation</CardTitle>
			</CardHeader>
			<CardContent>
				<h1>{precipitation_mm} mm</h1>
				<h1>{precipitation_in} in</h1>
			</CardContent>
		</Card>
	);
};

export default PrecipitationCard;
