import React from 'react';

const feesData = [
  {
    category: 'Academician/Industry (Conference only)',
    fees: '8000/-'
  },
  {
    category: 'Students/PhD Research scholars (Conference Only)',
    fees: '6000/-'
  },
  {
    category: 'Pre conference Tutorial/Workshops only',
    fees: '4000/-'
  },
  {
    category: 'Academician/Industry (Tutorial + Conference)',
    fees: '10000/-'
  },
  {
    category: 'Students/PhD Research scholars (Tutorial + Conference)',
    fees: '7000/-'
  }
];

const FeesTable = () => {
  return (
    <table className="table-auto w-full mt-4 mb-4">
      <thead className='bg-blue-300'>
        <tr>
          <th className="px-4 py-2">Category</th>
          <th className="px-4 py-2">Fees</th>
        </tr>
      </thead>
      <tbody className='bg-green-200'>
        {feesData.map((item, index) => (
          <tr key={index}>
            <td className="border px-4 py-2">{item.category}</td>
            <td className="border px-4 py-2">{item.fees}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FeesTable;
