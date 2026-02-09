import { Audio, staticFile } from "remotion";

/**
 * 背景音效组件 - 循环播放科技提示音
 */
export const TransitionSounds: React.FC<{
  volume?: number;
}> = ({
  volume = 0.3,
}) => {
  return (
    <Audio
      src={staticFile("audio/hi-tech-ping.mp3")}
      volume={volume}
    />
  );
};
