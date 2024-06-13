import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { DayForecast } from '@/interface/WeatherInterface';

const FutureForecast = ({ forecast }: { forecast: DayForecast[] }) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Future Forecast</CardTitle>
			</CardHeader>
			<CardContent>
				<Accordion type="single">
					{forecast.map((day) => {
						return (
							<AccordionItem value={day.date} key={day.date}>
								<AccordionTrigger>
									<span>{day.date}</span>
								</AccordionTrigger>
								<AccordionContent>

								</AccordionContent>

							</AccordionItem>
						)
					})}

				</Accordion>
			</CardContent>
		</Card>
	);
};

export default FutureForecast;
