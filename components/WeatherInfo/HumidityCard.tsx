import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardTitle } from '@/components/ui/card';

const HumidityCard = ({ humidity_level }: { humidity_level: number }) => {
	return (
		<Card>
			<CardContent>
				<CardTitle>Humidity</CardTitle>
				<Progress value={humidity_level} />
				<h1>{humidity_level}%</h1>
			</CardContent>
		</Card>
	);
};

export default HumidityCard;
