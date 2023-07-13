import { useState } from 'react';

const ExpandableList = () => {
  const [isListExpanded, setListExpanded] = useState(false);

  const toggleList = () => {
    setListExpanded(!isListExpanded);
  };

  return (
    <div >
      <button onClick={toggleList} className='text-blue-500 font-semibold text-l'>
        {isListExpanded ? 'Computational Intelligence' : 'Computational Intelligence'}
      </button>
      {isListExpanded && (
        <ol className='pl-3 font-sans text-lfont-medium' type="1">
          <li>1.Fuzzy Systems</li>
          <li>2.Machine Learning</li>
          <li>3.Evolutionary Computation</li>
          <li>4.Hybridization in Computational Intelligence</li>
        </ol>
      )}
    </div>
  );
};

export default ExpandableList;
