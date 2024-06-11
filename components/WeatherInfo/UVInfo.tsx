import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const UVInfo = ({ uv_index }: { uv_index: number }) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>UV Index</CardTitle>
			</CardHeader>
			<CardContent>
				<Progress value={uv_index / 12} />
				<h1>{uv_index}</h1>
			</CardContent>
		</Card>
	);
};

export default UVInfo;
