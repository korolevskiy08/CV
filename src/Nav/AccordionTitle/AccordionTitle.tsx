import React from 'react';

type AccordionTitleType = {
    setOffHandler: () => void
}

export const AccordionTitle = ({setOffHandler}:AccordionTitleType) => {
    return (
        <div>
            <span onClick={setOffHandler}>Menu</span>
        </div>
    );
};

