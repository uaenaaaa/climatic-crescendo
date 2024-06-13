import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface UVInterface {
  uv: number;
}

const UVInfo = ({
  uv,
}: UVInterface
) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>UV</CardTitle>
      </CardHeader>
      <CardContent>
        <h1>{uv}</h1>
      </CardContent>
    </Card>
  )
}

export default UVInfo
