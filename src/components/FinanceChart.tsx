'use client';

import { RiExternalLinkLine } from '@remixicon/react';
import { AreaChart, Card } from '@tremor/react';

function valueFormatter(number: number) {
  const formatter = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 0,
    notation: 'compact',
    compactDisplay: 'short',
  });
  return formatter.format(number);
}

const data = [
  {
    date: 'Jan 23',
    Balance: 38560,
  },
  {
    date: 'Feb 23',
    Balance: 40320,
  },
  {
    date: 'Mar 23',
    Balance: 50233,
  },
  {
    date: 'Apr 23',
    Balance: 55123,
  },
  {
    date: 'May 23',
    Balance: 56000,
  },
  {
    date: 'Jun 23',
    Balance: 100000,
  },
  {
    date: 'Jul 23',
    Balance: 85390,
  },
  {
    date: 'Aug 23',
    Balance: 80100,
  },
  {
    date: 'Sep 23',
    Balance: 75090,
  },
  {
    date: 'Oct 23',
    Balance: 71080,
  },
  {
    date: 'Nov 23',
    Balance: 68041,
  },
  {
    date: 'Dec 23',
    Balance: 60143,
  },
];

export default function Example() {
  return (
    <>
      <Card className="p-0 sm:mx-auto sm:w-full">
        <div className="p-6">
          <AreaChart
            data={data}
            index="date"
            categories={['Balance']}
            showLegend={false}
            showGradient={false}
            yAxisWidth={45}
            valueFormatter={valueFormatter}
            className="h-60"
          />
        </div>

      </Card>
    </>
  );
}