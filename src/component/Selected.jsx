
import React from 'react';

const Selected = ({className,children,...all}) => {
    return (
        <select className={className} {...all}>
            {children}
        </select>
    );
};

export default Selected;