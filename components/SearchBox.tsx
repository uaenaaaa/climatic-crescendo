'use client';
import React, { Suspense } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import LocateUserButton from './LocateUserButton';
import { Skeleton } from './ui/skeleton';

const SearchBox = () => {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();
	const handleCitySearch = useDebouncedCallback((city: string) => {
		const cityParams = new URLSearchParams();
		if (city) {
			cityParams.set('city', city);
		}
		replace(`${pathname}?${cityParams.toString()}`);
	}, 1000);
	return (
		<div className='flex w-full flex-row justify-center items-center gap-2 md:gap-3'>
			<Input
				onChange={(e) => handleCitySearch(e.target.value)}
				className='w-1/2'
				placeholder='Search city...'
			/>
			<Button>Search</Button>
			<LocateUserButton />
		</div>
	);
};

// const SearchBoxContainer = () => {
// 	return (
// 		<Suspense fallback={<Skeleton />}>
// 			<SearchBox />
// 		</Suspense>
// 	);
// };
export default SearchBox;
