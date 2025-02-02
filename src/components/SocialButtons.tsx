import React from 'react';

const SocialButtons: React.FC = () => {
    const buttonStyle: React.CSSProperties = {
        position: 'fixed',
        bottom: '-1%',
        right: '-1%',
        padding: '0%',
    };

    const imgStyle: React.CSSProperties = {
        width: '100px',
        height: '100px',
    };

    return (
        <div style={buttonStyle}>
            <a href="https://t.me/+hgtZpDcc7XIzODMx" target="_blank" rel="noopener noreferrer">
                <img src="lovable-uploads/telegram.png" alt="Telegram" style={imgStyle} />
            </a>
        </div>
    );
};

export default SocialButtons;