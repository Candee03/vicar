import React from 'react';
import { useMediaQuery } from 'react-responsive';

function MyComponent() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

    return (
        <div style={{ padding: isMobile ? '5px' : '10px' }}>
        {isTabletOrMobile ? 'Tablet or Mobile View' : 'Desktop View'}
        </div>
    );
}

export default MyComponent;