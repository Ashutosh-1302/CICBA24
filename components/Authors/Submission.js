import React from 'react'

export default function Submission() {
    return (
        <div>
             <div className='border-2 w-full'>
             <div className='p-4 items-center bg-green-800 rounded-sm w-full' style={{border:'1px solid'}}>
            <h2 className='text-2xl font-semibold text-white text-left '>Paper Submission Guideline</h2>
            </div>
            <div className='p-4 items-center space-y-2 text-left w-full'>
            <p className='pb-1 text-xl'>Full papers (Upto 15 pages in the one-column page format without author information, must be submitted through Easy Chair portal.) <br/></p><br/>
            <a className='pb-1 font-bold text-blue-400 text-2xl w-fit' href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines" >Formatting Guidelines: http://www.springer.com/computer/lncs?SGWID=0-164-6-793341-0 </a>
            <br/><br/><a className='pb-1 font-bold text-blue-400 text-2xl ' href="http://www.cicba.in/cicba2023/Springer_Guidelines_for_Authors_of_Proceedings_CS.pdf" >Author's Guidelines</a>
            <br/><br/>
            <h1 className='font-bold text-2xl'>Submission Guideline:</h1>
            <p className='font-medium'>Submission guidelines: Paper length should be within 15 pages in the Springer CCIS one-column format. All submissions are required to follow the Springer stipulations and are subject to screening for plagiarism by iThenticate®. Double blind review system will be followed and each paper will be reviewed by at least three reviewers. Manuscripts must be anonymous during submission.</p>
            <br/>
            <h1 className='font-bold text-2xl'>Review Policy :</h1>    
            <a href="http://www.cicba.in/cicba2023/review_process.pdf" className='text-blue-400'>Click here for detailed review Policy</a>
            <h1 className='font-bold text-2xl'>Review Policy :</h1> 
            <a href="/" className='text-blue-400'>To be updated soon</a>
        </div>
</div>
        </div>
      )
}
