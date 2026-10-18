import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
export const NateliaReel: React.FC = () => {
 const frame = useCurrentFrame();
 const opacity = interpolate(frame,[0,18,270,299],[0,1,1,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
 return <AbsoluteFill style={{backgroundColor:'#162b28',color:'#f8f1e5',fontFamily:'Georgia, serif',justifyContent:'center',alignItems:'center',padding:90,textAlign:'center'}}>
 <div style={{fontSize:38,letterSpacing:7,opacity}}>NATELIA NATURALS</div>
 <div style={{fontSize:86,lineHeight:1.15,marginTop:60,opacity}}>Mediterranean living,<br/>naturally.</div>
 <div style={{fontFamily:'Arial, sans-serif',fontSize:32,marginTop:70,opacity}}>Premium products from Greece</div>
 <div style={{position:'absolute',bottom:160,fontFamily:'Arial, sans-serif',fontSize:30,opacity}}>natelianaturals.ch</div>
 </AbsoluteFill>;
};
