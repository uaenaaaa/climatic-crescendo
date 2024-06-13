import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface DailyInterface {
	daily_will_it_rain: number;
	daily_chance_of_rain: number;
	daily_will_it_snow: number;
	daily_chance_of_snow: number;
}
const Daily = ({
	daily_will_it_rain,
	daily_chance_of_rain,
	daily_will_it_snow,
	daily_chance_of_snow,
}: DailyInterface) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Daily</CardTitle>
			</CardHeader>
			<CardContent>
				<h1>{daily_will_it_rain == 1 ? 'Rain' : 'No Rain'}</h1>
				<h1>{daily_chance_of_rain}</h1>
				<h1>{daily_will_it_snow == 1 ? 'Snow' : 'No Snow'}</h1>
				<h1>{daily_chance_of_snow}</h1>
			</CardContent>
		</Card>
	);
};

export default Daily;
