import React from 'react';

function Front() {
    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#000',
            color: '#fff',
            fontSize: '72px',
            fontFamily: 'Arial, sans-serif',
            textAlign: 'center',
            animation: 'fadeInOut 3s ease-in-out infinite',
        },
    };

    return (
        <div style={styles.container}>
            07.21.24
        </div>
    );
}

export default Front;
