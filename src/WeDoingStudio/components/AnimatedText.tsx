import { interpolate, spring, useVideoConfig } from "remotion";
import React from "react";

export const AnimatedText: React.FC<{
  children: React.ReactNode;
  phase: "enter" | "hold" | "exit";
  progress: number;
  delay?: number;
  style?: React.CSSProperties;
}> = ({ children, phase, progress, delay = 0, style = {} }) => {
  const { fps } = useVideoConfig();

  // 计算内部动画进度（基于 delay）
  const getInternalProgress = () => {
    const adjustedProgress = Math.max(0, progress - delay / 20);
    return Math.min(1, adjustedProgress);
  };

  const internalProgress = getInternalProgress();

  // 根据阶段计算动画值
  const getAnimationValues = () => {
    if (phase === "enter") {
      const springVal = spring({
        frame: internalProgress * 20,
        fps,
        config: { stiffness: 200, damping: 20, mass: 0.8 },
      });
      return {
        opacity: interpolate(springVal, [0, 1], [0, 1]),
        translateY: interpolate(springVal, [0, 1], [40, 0]),
        scale: interpolate(springVal, [0, 1], [0.85, 1]),
      };
    } else if (phase === "hold") {
      return {
        opacity: 1,
        translateY: 0,
        scale: 1,
      };
    } else {
      return {
        opacity: interpolate(progress, [0, 1], [1, 0]),
        translateY: interpolate(progress, [0, 1], [0, -30]),
        scale: interpolate(progress, [0, 1], [1, 0.95]),
      };
    }
  };

  const { opacity, translateY, scale } = getAnimationValues();

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${translateY}px) scale(${scale})`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
