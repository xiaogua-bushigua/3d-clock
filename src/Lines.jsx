import React, { useRef } from 'react'
import { DoubleSide } from 'three'
import { useFrame } from '@react-three/fiber';

const Lines = ({w, h, d, color, envMapIntensity, type, num}) => {
  const line = useRef();

  useFrame(({mouse}) => {
    const date = new Date();
    const hourAngle = (date.getHours()%12)/12 * Math.PI * 2;
    const minuteAngle = date.getMinutes()/60 * Math.PI * 2;
    const secondAngle = date.getSeconds()/60 * Math.PI * 2;
    if(type === 'hour') {
      line.current.rotation.z = -hourAngle;
      line.current.position.set(Math.sin(hourAngle), Math.cos(hourAngle), 0)
    } else if(type === 'minute') {
      line.current.rotation.z = -minuteAngle;
      line.current.position.set(Math.sin(minuteAngle), Math.cos(minuteAngle), 0)
    } else if(type === 'second') {
      line.current.rotation.z = -secondAngle;
      line.current.position.set(Math.sin(secondAngle), Math.cos(secondAngle), 0)
    } else {
      let angle = num / 12 * Math.PI * 2;
      line.current.rotation.z = -angle;
      line.current.position.set(1.7*Math.sin(angle), 1.7*Math.cos(angle), 0)
    }
    const x = mouse.x / 12.5 / 3;
		const y = mouse.y / 12.5 / 3;
		line.current.rotation.x = -y + line.current.rotation.x * 0.85;
		line.current.rotation.y = x + line.current.rotation.y * 0.85;
  })

  const getZpos = () => {
    if(type === 'minute') return -d;
    else if (type === 'second') return d;
    else if(type === 'hour') return 0;
    else return d*10;
  }
  return (
    <group ref={line}>
      <mesh position={[0,0,getZpos()]}>
        <boxGeometry args={[w, h, d]} />
        <meshStandardMaterial envMapIntensity={envMapIntensity} color={color} roughness={0} metalness={1} side={DoubleSide} />
      </mesh>
      <mesh rotation-x={0.5 * Math.PI} position={[0, h/2, getZpos()]}>
        <cylinderGeometry args={[w/2, w/2, d, 10]} />
        <meshStandardMaterial envMapIntensity={envMapIntensity} color={color} roughness={0} metalness={1} side={DoubleSide} />
      </mesh>
      <mesh rotation-x={0.5 * Math.PI} position={[0, -h/2, getZpos()]}>
        <cylinderGeometry args={[w/2, w/2, d, 10]} />
        <meshStandardMaterial envMapIntensity={envMapIntensity} color={color} roughness={0} metalness={1} side={DoubleSide} />
      </mesh>
    </group>
  )
}

export default Lines