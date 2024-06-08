'use client';
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { LocateFixed } from 'lucide-react';

const SearchBox = () => {
	return (
		<div className='flex w-full flex-row justify-center items-center gap-2 md:gap-3'>
			<Input
				className='w-1/2'
				placeholder='Search city...'
			/>
			<Button>Search</Button>
			<Button variant={'ghost'}>
				<LocateFixed />
			</Button>
		</div>
	);
};

export default SearchBox;
