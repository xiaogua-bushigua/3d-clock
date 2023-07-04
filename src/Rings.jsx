import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Rings = ({ scale, speed, thickness, color }) => {
	const ring = useRef();

	useFrame(({ mouse }) => {
		const x = mouse.x / speed / 3;
		const y = mouse.y / speed / 3;
		ring.current.rotation.x = -y + ring.current.rotation.x * 0.95;
		ring.current.rotation.y = x + ring.current.rotation.y * 0.95;
	});
	return (
		<group scale={scale} ref={ring}>
			<mesh position={[0, 0, 0.25 * 0.5]}>
				<ringGeometry args={[2, 2 + thickness, 70]} />
				<meshStandardMaterial color={color} roughness={0} metalness={1} side={THREE.DoubleSide} envMapIntensity={1} />
			</mesh>
			<mesh rotation-x={-0.5 * Math.PI}>
				<cylinderGeometry args={[2 + thickness, 2 + thickness, 0.25, 70, 1, true]} />
				<meshStandardMaterial color={color} roughness={0} metalness={1} side={THREE.DoubleSide} envMapIntensity={1} />
			</mesh>
			<mesh rotation-x={-0.5 * Math.PI}>
				<cylinderGeometry args={[2, 2, 0.25, 140, 1, true]} />
				<meshStandardMaterial color={color} roughness={0} metalness={1} side={THREE.DoubleSide} envMapIntensity={1} />
			</mesh>
			<mesh position={[0, 0, -0.25 * 0.5]}>
				<ringGeometry args={[2, 2 + thickness, 70]} />
				<meshStandardMaterial color={color} roughness={0} metalness={1} side={THREE.DoubleSide} envMapIntensity={1} />
			</mesh>
		</group>
	);
};

export default Rings;