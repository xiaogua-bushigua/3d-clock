import * as THREE from 'three';
import Rings from './Rings';
import Lines from './Lines';
import Marks from './Marks';

const Clock = () => {

	return (
		<mesh>
			<Rings speed_1={12.5} speed_2={0.75} scale={0.75} thickness={0.65} color={new THREE.Color('white')} />
			<Rings speed_1={10} speed_2={0.95} scale={1.05} thickness={0.35} color={new THREE.Color(0.25, 0.225, 0.215)} />
			<Rings speed_1={7.5} speed_2={0.95} scale={1.3} thickness={0.15} color={new THREE.Color(0.7, 0.7, 0.7)} />
      <Lines type="hour" w={0.135} h={0.4} d={0.07} envMapIntensity={3} color="white" />
      <Lines type="minute" w={0.135} h={0.65} d={0.07} envMapIntensity={1} color={new THREE.Color(0.5,0.5,0.5)} />
      <Lines type="second" w={0.075} h={0.85} d={0.07} envMapIntensity={1} color={new THREE.Color(0.2,0.2,0.2)} />
      <Marks />
		</mesh>
	);
};

export default Clock;