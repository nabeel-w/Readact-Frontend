import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/Animation - 1725219710098.json'; // Import your JSON animation file

const MyLottieAnimation = () => {
    return (
        <>
            <div className='blurred-background'>
                <Lottie
                    animationData={animationData}
                    loop={true}
                    autoplay={true}
                    style={{ width: 300, height: 300 }} // Customize the size of the animation
                />
            </div>
        </>
    );
};

export default MyLottieAnimation;

