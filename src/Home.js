import React from 'react'
import { Link } from 'react-router-dom';
import cookieImage from './assets/cookieImage.jpg';


function Home () {
    const steps = [
        { path: '/dough', label: 'Chill dough', image: cookieImage },
        { path: '/preheat', label: 'Preheat', image: cookieImage },
        { path: '/bake', label: 'Bake', image: cookieImage },
        { path: '/cool', label: 'Cool', image: cookieImage },
  ];
    return (
        <div style={{textAlign: 'center'}}>
            <h1 style={{fontSize: '3rem'}}>
                Cookie Timer
            </h1>
            <p style={{fontSize: '2rem'}}>
                Which step are you on?
            </p>
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(2, 1fr)', 
                gap: '1.5rem',
                maxWidth: '800px',
                margin: '0 auto',
            }}>
            {steps.map((({path, label, image}) => (
                <Link 
                key={path}
                to={path}
                >
                    <img 
                        src={image}
                        alt={label}
                        style={{ width: '45%', height: 'auto'}}
                    />
                    <div style={{fontSize: '1.5rem'}}>
                        {label}
                    </div>
                </Link>
            )))}
        </div>
        </div>
    )
    }

export default Home