import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface TotalSnowCMInterface {
	totalsnow_cm: number;
}

const TotalSnowCM = ({
  totalsnow_cm,
}: TotalSnowCMInterface
) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Total Snow</CardTitle>
			</CardHeader>
			<CardContent>
        <h1>{totalsnow_cm}</h1>
			</CardContent>
		</Card>
	);
};

export default TotalSnowCM;
