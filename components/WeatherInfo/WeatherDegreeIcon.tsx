import React from 'react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { CloudDayIcon } from '../WeatherIconsSVG';
import Image from 'next/image';

const WeatherDegreeIcon = () => {
	return (
		<Card>
			<CardContent>
				<CardTitle>Temperature</CardTitle>
				<div className='flex items-center justify-center'>
					<CloudDayIcon className='w-10 h-10' />
					<span className='text-2xl font-bold'>23°</span>
				</div>
			</CardContent>
		</Card>
	);
};

export default WeatherDegreeIcon;
