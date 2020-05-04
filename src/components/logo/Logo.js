import React from 'react';
import Tilt from 'react-tilt';
import Brain from './brain.png'
import './Logo.css';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
				<div className="Tilt-inner pa3">
					<img style={{padding: '10px', height: '80%', width: '80%'}} alt='logo' src={Brain}/>
				</div>
			</Tilt>
		</div>
	);
}

export default Logo;