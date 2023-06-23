import { ReactNode, useState } from "react";

interface AlertProps{
    // text: string;
    children: ReactNode; //ReactNode is used to pass anything through the children
    close: () => void;
  }


// const [click, setClick] = useState(false)
// Passing through the props in the Alert function
const Alert = ({children, close}:AlertProps) => {
  return (

    

    <div className='alert alert-primary alert-dismissible fade show' role='alert'>
        {children}
      <button type="button" className="btn-close" onClick={close} data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default Alert