'use client';
import React, { useCallback } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { LocateFixed } from 'lucide-react';

const LocateUserButton = () => {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const GetLongitudeLatitude = useCallback(() => {
		navigator.geolocation.getCurrentPosition((position) => {
			const { latitude, longitude } = position.coords;
			const coordinate = new URLSearchParams();
			coordinate.set('lat', latitude.toString());
			coordinate.set('lon', longitude.toString());
			replace(`${pathname}?${coordinate.toString()}`);
		});
	}, [pathname, replace]);

	return (
		<Button
			onClick={GetLongitudeLatitude}
			variant={'ghost'}>
			<LocateFixed />
		</Button>
	);
};

export default LocateUserButton;
