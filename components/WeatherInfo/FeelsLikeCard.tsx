import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FeelsLikeCard = ({
	feelslike_c,
	feelslike_f,
}: {
	feelslike_c: number;
	feelslike_f: number;
}) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Feels Like</CardTitle>
			</CardHeader>
			<CardContent>
				<h1>{feelslike_c}°C</h1>
				<h1>{feelslike_f}°F</h1>
			</CardContent>
		</Card>
	);
};

export default FeelsLikeCard;
