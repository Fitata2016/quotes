import React from 'react';

const Button = ({change, colorsButton}) => {

    return (
        <div>
            <button 
                onClick={change} 
                style= {{borderBottomColor: `${colorsButton}`,
                        borderLeftColor: `${colorsButton}`,
                        borderTopColor: `${colorsButton}`,
                        borderRightColor: `${colorsButton}`,
                        borderWidth: "3px"}}
            >
                <i 
                    className="fa-solid fa-arrow-right"
                    style= {{color: `${colorsButton}`, fontSize: "20px"}}
                >
                </i>
            </button>
        </div>
    );
};

export default Button;