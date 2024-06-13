import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ConditionInterface {
	condition: {
		text: string;
		icon: string;
		code: number;
	};
}
const Condition = ({ condition: { text, icon, code } }: ConditionInterface) => {
  return <Card>
    <CardHeader>
      <CardTitle>{text}</CardTitle>
    </CardHeader>
    <CardContent>
      <h1>
        {text}
      </h1>
    </CardContent>
  </Card>;
};

export default Condition;
