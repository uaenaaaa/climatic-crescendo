import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface VisibilityInterface {
	avgvis_km: number;
	avgvis_miles: number;
}
const Visibility = ({ avgvis_km, avgvis_miles }: VisibilityInterface) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Visibility</CardTitle>
			</CardHeader>
			<CardContent>
				<h1>{avgvis_km}</h1>
				<h1>{avgvis_miles}</h1>
			</CardContent>
		</Card>
	);
};

export default Visibility;
