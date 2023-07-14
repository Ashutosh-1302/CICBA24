import { useState } from 'react';

const ExpandableList = () => {
  const [isListExpanded, setListExpanded] = useState(false);

  const toggleList = () => {
    setListExpanded(!isListExpanded);
  };

  return (
    <div className='flex flex-row' ><div className="justify-left h-15 pt-2 pr-4"><img src="./Assets/rightarrow.png" className="w-8 pl-5" /></div>
     <div> <button onClick={toggleList} className='text-blue-500 font-semibold text-l'>
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
    </div>
  );
};

export default ExpandableList;
