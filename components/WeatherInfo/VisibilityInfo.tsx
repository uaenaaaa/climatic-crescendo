import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';

const VisibilityInfo = ({
	visibility_km,
	visibility_mi,
}: {
	visibility_km: number;
	visibility_mi: number;
}) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Visibility</CardTitle>
			</CardHeader>
			<CardContent>
				<h1>{visibility_km} km</h1>
				<h1>{visibility_mi} mi</h1>
			</CardContent>
		</Card>
	);
};

export default VisibilityInfo;
