import { useState } from 'react';
import {AiOutlineHeart} from 'react-icons/ai';
import {AiFillHeart} from 'react-icons/ai';

interface LikeProps{
    onClick: () => void;
}

const Like = ({onClick}:LikeProps) => {
    // useStates to render the different hearts
    const [status,setStatus] = useState(true);

    //Function to change the useState value and passing in thre prop to add on the App.tsx
    const toggle = () => {
        setStatus(!status);
        onClick();
    }

  return (

    <div>
        {/* Ternary operator to toggle different heart icons and passing in the toggle function with the onClick */}
       {status ? <AiFillHeart color='pink' size={40} onClick={toggle}/>:<AiOutlineHeart size={40} onClick={toggle}/>}
    </div>
  )
}

export default Like
