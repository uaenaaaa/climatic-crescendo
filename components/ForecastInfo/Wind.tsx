import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface WindInterface {
  maxwind_mph: number;
  maxwind_kph: number;
}

const Wind = ({maxwind_mph, maxwind_kph}: WindInterface) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Wind</CardTitle>
      </CardHeader>
      <CardContent>
        <h1>{maxwind_mph}</h1>
        <h1>{maxwind_kph}</h1>
      </CardContent>
    </Card>
  )
}

export default Wind
