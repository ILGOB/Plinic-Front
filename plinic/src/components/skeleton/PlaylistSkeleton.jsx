import React from 'react';
import styled, { keyframes } from 'styled-components';

function PlaylistSkeleton() {
  return <VideoFrame></VideoFrame>;
}

export default PlaylistSkeleton;

const wave = keyframes`
  from {
    left: -150px;
  }
  to {
    left: 100%;
  }
`;

const VideoFrame = styled.div`
  position: relative;
  width: 600px;
  height: 360px;
  border-radius: 20px;
  overflow: hidden;

  ::before {
    content: '';
    display: block;
    position: absolute;
    left: -150px;
    top: 0;
    height: 100%;
    width: 150px;
    background: linear-gradient(to right, transparent 0%, #e8e8e8 50%, transparent 100%);
    animation: ${wave} 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
`;
