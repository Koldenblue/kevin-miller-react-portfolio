import React, { useState } from 'react';
const path = require('path')

function Background(props) {
    let styles = {
        image: {
            top: '0',
            objectFit: 'cover',
            height: '100%',
            width: '100%',
            margin: '0',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            position: 'fixed'
        }
    }

    let image = props.image.toString()

    switch (props.image) {
        case '../assets/images/beach.jpg':
            return (
                <div>
                    <img src={require('../assets/images/beach.jpg')}  style={styles.image}/>
                </div>
            )
            break;
        case '../assets/images/beach2.jpg':
            return (
                <div>
                    <img src={require('../assets/images/beach2.jpg')}  style={styles.image}/>
                </div>
            )
            break;
        case '../assets/images/beach-hut.jpg':
            return (
                <div>
                    <img src={require('../assets/images/beach-hut.jpg')}  style={styles.image}/>
                </div>
            )
            break;
        case '../assets/images/tidepool.jpg':
            return (
                <div>
                    <img src={require('../assets/images/tidepool.jpg')}  style={styles.image}/>
                </div>
            )
            break;
        case '../assets/images/shore.jpg':
            return (
                <div>
                    <img src={require('../assets/images/shore.jpg')}  style={styles.image}/>
                </div>
            )
            break;
        case '../assets/images/koi.jpg':
            return (
                <div>
                    <img src={require('../assets/images/koi.jpg')}  style={styles.image}/>
                </div>
            )
            break;
        default: 
            return (<> </>)
            break;
}
}

export default Background;