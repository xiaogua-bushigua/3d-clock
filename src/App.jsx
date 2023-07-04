import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import Clock from './Clock';

function App() {
	return (
		<Suspense>
			<Canvas>
				<OrbitControls enableZoom={false} />
				<PerspectiveCamera makeDefault fov={50} position={[0, 0, 10]} />
				<Environment files={'./cannon_1k_blurred.hdr'} resolution={256} />
				<Clock />
			</Canvas>
		</Suspense>
	);
}

export default App;
