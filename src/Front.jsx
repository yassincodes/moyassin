import React from 'react';

function Front() {
    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#000',
            overflow: 'hidden',
        },
        iframe: {
            width: '100%',
            height: '100%',
            border: 'none',
        },
    };

    return (
        <div style={styles.container}>
            <iframe
                style={styles.iframe}
                src="https://www.youtube.com/embed/IviYsgJXG5k"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
}

export default Front;
