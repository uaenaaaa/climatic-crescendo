import { Card, CardContent, CardTitle } from '@/components/ui/card';
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
			<CardContent>
				<CardTitle>Visibility</CardTitle>
				<h1>{visibility_km} km</h1>
				<h1>{visibility_mi} mi</h1>
			</CardContent>
		</Card>
	);
};

export default VisibilityInfo;
