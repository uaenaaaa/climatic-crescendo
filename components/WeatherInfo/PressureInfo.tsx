import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PressureInfo = ({
	pressure_in,
	pressure_mb,
}: {
	pressure_in: number;
	pressure_mb: number;
}) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Pressure</CardTitle>
			</CardHeader>
			<CardContent>
				<h1>{pressure_in} in</h1>
				<h1>{pressure_mb} mb</h1>
			</CardContent>
		</Card>
	);
};

export default PressureInfo;
