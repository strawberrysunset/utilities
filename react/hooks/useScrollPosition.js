import React, { useState } from 'react'

export const useYScrollPosition = () => { 
    const [yPos, setYPos] = useState(window.pageYOffset);

    useEffect(() => {
        setYPos(window.pageYOffset);
    }, [window.pageYOffset]);

    return yPos
}
