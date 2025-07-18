import React from 'react'
import { Link } from 'react-router-dom';
import cookieImage from './assets/cookieImage.jpg';
import fanImage from './assets/fan.png';
import ovenImage from './assets/ovenImage.png';
import rollerImage from './assets/roller.png';
import heart from './assets/yellow-heart.png';

function Home () {
    const steps = [
        { path: '/dough', label: 'Chill dough', image: rollerImage },
        { path: '/preheat', label: 'Preheat', image: ovenImage },
        { path: '/bake', label: 'Bake', image: cookieImage },
        { path: '/cool', label: 'Cool', image: fanImage },
  ];
    return (
        <div style={{textAlign: 'center'}}>
            <div style={{ display: 'flex', justifyContent: 'center',alignItems: 'center'}}> 
                <h1 style={{fontSize: '5rem'}}>
                    Cookie Timer
                </h1>
                <img style={{height: '50px',  width: '50px', marginLeft: '10px'}} src={heart}/>
            </div>
            <p style={{fontSize: '3rem'}}>
                Which step are you on?
            </p>
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(2, 1fr)', 
                maxWidth: '800px',
                margin: '0 auto',
            }}>
            {steps.map((({path, label, image}) => (
                <Link 
                key={path}
                to={path}
                style={{
                    textDecoration: 'none',
                    color: 'black',     
                }}
                >
                    <img 
                        src={image}
                        alt={label}
                        style=
                        {{ 
                            width: '65%', 
                            height: 'auto',
                            transform: label === 'Chill dough' ? 'rotate(-25deg)' : 'none',
                        }}
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