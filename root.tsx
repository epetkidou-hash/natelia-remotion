import React from 'react';
import {Composition} from 'remotion';
import {NateliaReel} from './video';
export const Root: React.FC = () => <Composition id="NateliaReel" component={NateliaReel} durationInFrames={300} fps={30} width={1080} height={1920} />;
