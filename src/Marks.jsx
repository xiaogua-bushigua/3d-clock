import React from 'react';
import Lines from './Lines';
import * as THREE from 'three';

const Marks = () => {
	return (
		<group>
			{new Array(12).fill(0).map((item, index) => (
				<Lines 
        key={'mark'+index} 
        type="none" 
        w={0.075} 
        h={index % 3 === 0 ? 0.15 : 0.1} 
        d={0.025} 
        envMapIntensity={1} 
        color={index % 3 === 0 ? 'red' : new THREE.Color(0.65,0.65,0.65)} 
        num={index} />
			))}
		</group>
	);
};

export default Marks;
