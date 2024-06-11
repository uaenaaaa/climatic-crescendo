import React from 'react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import {
	SunnyAndCloudyIcon,
	BlizzardIcon,
	BlowingSnowIcon,
	ClearDayIcon,
	ClearNightIcon,
	CloudyIcon,
	CloudyWithRainIcon,
	CloudyWithSnowIcon,
	CloudyWithSunnyIcon,
	DrizzleIcon,
	FlurriesIcon,
	HazeFogDustSmokeIcon,
	HeavyRainIcon,
	HeavySnowIcon,
	IcyIcon,
	IsolatedScatteredThunderstormsDayIcon,
	IsolatedScatteredThunderstormsNightIcon,
	IsolatedThunderStorms,
	MixedRainHailSleetIcon,
	MixedRainSnowIcon,
	MostlyClearDayIcon,
	MostlyClearNightIcon,
	MostlyCloudyDayIcon,
	MostlyCloudyNightIcon,
	PartlyCloudyDayIcon,
	PartlyCloudyNightIcon,
	ScatteredShowerDayIcon,
	ScatteredShowerNightIcon,
	ScatteredSnowShowersDayIcon,
	ScatteredSnowShowersNightIcon,
	ShowersRainIcon,
	ShowersSnowIcon,
	SleetHailIcon,
	StrongThunderStormsIcon,
	SunnyWithCloudyIcon,
	SunnyWithRainIcon,
	SunnyWithSnowIcon,
	TornadoIcon,
	TropicalStormHurricaneIcon,
	VeryColdIcon,
	VeryHotIcon,
	WindyBreezyIcon,
} from '@/components/WeatherIconsSVG';

const WeatherIconMapping: {
	[key: number]: { day: JSX.Element; night: JSX.Element };
} = {
	1000: { day: <ClearDayIcon />, night: <ClearNightIcon /> },
	1003: { day: <PartlyCloudyDayIcon />, night: <PartlyCloudyNightIcon /> },
	1006: { day: <CloudyIcon />, night: <CloudyIcon /> },
	1009: { day: <CloudyIcon />, night: <CloudyIcon /> },
	1030: { day: <HazeFogDustSmokeIcon />, night: <HazeFogDustSmokeIcon /> },
	1063: {
		day: <ScatteredShowerDayIcon />,
		night: <ScatteredShowerNightIcon />,
	},
	1066: { day: <CloudyWithSnowIcon />, night: <CloudyWithSnowIcon /> },
	1069: { day: <MixedRainSnowIcon />, night: <MixedRainSnowIcon /> },
	1072: { day: <DrizzleIcon />, night: <DrizzleIcon /> },
	1087: {
		day: <IsolatedScatteredThunderstormsDayIcon />,
		night: <IsolatedScatteredThunderstormsNightIcon />,
	},
	1114: { day: <BlowingSnowIcon />, night: <BlowingSnowIcon /> },
	1117: { day: <BlizzardIcon />, night: <BlizzardIcon /> },
	1135: { day: <HazeFogDustSmokeIcon />, night: <HazeFogDustSmokeIcon /> },
	1147: { day: <IcyIcon />, night: <IcyIcon /> },
	1150: { day: <DrizzleIcon />, night: <DrizzleIcon /> },
	1153: { day: <DrizzleIcon />, night: <DrizzleIcon /> },
	1168: { day: <DrizzleIcon />, night: <DrizzleIcon /> },
	1171: { day: <DrizzleIcon />, night: <DrizzleIcon /> },
	1180: {
		day: <ScatteredShowerDayIcon />,
		night: <ScatteredShowerNightIcon />,
	},
	1183: { day: <ShowersRainIcon />, night: <ShowersRainIcon /> },
	1186: { day: <ShowersRainIcon />, night: <ShowersRainIcon /> },
	1189: { day: <HeavyRainIcon />, night: <HeavyRainIcon /> },
	1192: { day: <HeavyRainIcon />, night: <HeavyRainIcon /> },
	1195: { day: <HeavyRainIcon />, night: <HeavyRainIcon /> },
	1198: { day: <IcyIcon />, night: <IcyIcon /> },
	1201: { day: <IcyIcon />, night: <IcyIcon /> },
	1204: { day: <SleetHailIcon />, night: <SleetHailIcon /> },
	1207: { day: <SleetHailIcon />, night: <SleetHailIcon /> },
	1210: { day: <CloudyWithSnowIcon />, night: <CloudyWithSnowIcon /> },
	1213: { day: <FlurriesIcon />, night: <FlurriesIcon /> },
	1216: { day: <FlurriesIcon />, night: <FlurriesIcon /> },
	1219: { day: <HeavySnowIcon />, night: <HeavySnowIcon /> },
	1222: { day: <HeavySnowIcon />, night: <HeavySnowIcon /> },
	1225: { day: <HeavySnowIcon />, night: <HeavySnowIcon /> },
	1237: { day: <IcyIcon />, night: <IcyIcon /> },
	1240: {
		day: <ScatteredShowerDayIcon />,
		night: <ScatteredShowerNightIcon />,
	},
	1243: { day: <HeavyRainIcon />, night: <HeavyRainIcon /> },
	1246: { day: <HeavyRainIcon />, night: <HeavyRainIcon /> },
	1249: { day: <SleetHailIcon />, night: <SleetHailIcon /> },
	1252: { day: <SleetHailIcon />, night: <SleetHailIcon /> },
	1255: {
		day: <ScatteredSnowShowersDayIcon />,
		night: <ScatteredSnowShowersNightIcon />,
	},
	1258: { day: <ShowersSnowIcon />, night: <ShowersSnowIcon /> },
	1261: { day: <IcyIcon />, night: <IcyIcon /> },
	1264: { day: <IcyIcon />, night: <IcyIcon /> },
	1273: {
		day: <IsolatedScatteredThunderstormsDayIcon />,
		night: <IsolatedScatteredThunderstormsNightIcon />,
	},
	1276: {
		day: <StrongThunderStormsIcon />,
		night: <StrongThunderStormsIcon />,
	},
	1279: { day: <IsolatedThunderStorms />, night: <IsolatedThunderStorms /> },
	1282: {
		day: <StrongThunderStormsIcon />,
		night: <StrongThunderStormsIcon />,
	},
};

const WeatherDegreeIcon = ({
	temperature,
	condition,
	code,
	local_time,
}: {
	temperature: number;
	condition: string;
	code: number;
	local_time: string;
}) => {
	const isDay =
		parseInt(local_time.split(' ')[1].split(':')[0]) >= 6 &&
		parseInt(local_time.split(' ')[1].split(':')[0]) < 18;
	return (
		<Card>
			<CardContent>
				<CardTitle>Temperature</CardTitle>
				<h1>{condition}</h1>
				<div className='flex items-center justify-center'>
					{WeatherIconMapping[code][isDay ? 'day' : 'night']}
				</div>
				<div className='flex items-center justify-center'>
					<span className='text-2xl font-bold'>{temperature}°</span>
				</div>
			</CardContent>
		</Card>
	);
};

export default WeatherDegreeIcon;
