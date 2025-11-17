import React from 'react'
import { ChevronRightIcon } from 'lucide-react'

const progress_steps = ['Select Dentist','Choose Time','Confirm'];

const ProgressSteps = ({currentStep}:{currentStep:number}) => {

const handleActive = (stepNumber:number)=>{


}

  return (
    <div className='flex items-center gap-4'>

        {
            progress_steps.map((step,index)=>{
                const stepNumber  = index+1;
                const isActive = currentStep>=stepNumber;

                return (
                    <div key={stepNumber} className='flex items-center gap-2 cursor-pointer'>

                        {/* step circle  */}

                        <div className={`size-8 rounded-full flex items-center justify-center font-bold text-sm 
                            ${isActive ? 'bg-primary text-primary-foreground' :'bg-muted text-muted-foreground'}
                            `}>
                             {stepNumber}
                        </div>

                        <span className={`text-sm ${isActive ? 'text-foreground ':'text-muted-foreground'}`}>
                            {step}
                        </span>

                        {
                            stepNumber < 3 && <ChevronRightIcon className={`size-4 
                                 ${isActive ? 'text-foreground':'text-muted-foreground'}
                                `}/>
                        }



                    </div>
                )
            })
        }
      
    </div>
  )
}

export default ProgressSteps
