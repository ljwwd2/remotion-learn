import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { z } from "zod";
import { wedoingStudioSchema } from "./schema";
import { Opening } from "./scenes/Opening";
import { TeamStrength } from "./scenes/TeamStrength";
import { ProjectExperience } from "./scenes/ProjectExperience";
import { ServiceAdvantage } from "./scenes/ServiceAdvantage";
import { CooperationProcess } from "./scenes/CooperationProcess";
import { ContactInfo } from "./scenes/ContactInfo";
import { TechBackground } from "./components/TechBackground";

// 动画配置
const ANIMATION_CONFIG = {
  enterDuration: 20,  // 进入动画帧数 (0.67秒)
  holdDuration: 90,   // 展示时间帧数 (3秒)
  exitDuration: 20,   // 退出动画帧数 (0.67秒)
  totalDuration: 130, // 每个场景总帧数 (4.33秒)
};

export const WeDoingStudio: React.FC<z.infer<typeof wedoingStudioSchema>> = ({
  primaryColor,
  secondaryColor,
  backgroundColor,
  textColor,
}) => {
  const frame = useCurrentFrame();

  // 场景时间轴 - 每个场景: 20帧进入 + 90帧展示 + 20帧退出 = 130帧
  const scenes = {
    opening: { start: 0, end: 130 },           // 0-4.33秒
    teamStrength: { start: 130, end: 260 },    // 4.33-8.67秒
    projectExperience: { start: 260, end: 390 }, // 8.67-13秒
    serviceAdvantage: { start: 390, end: 520 }, // 13-17.33秒
    cooperationProcess: { start: 520, end: 650 }, // 17.33-21.67秒
    contactInfo: { start: 650, end: 780 },     // 21.67-26秒
  };

  const getCurrentScene = () => {
    if (frame < scenes.opening.end) return "opening";
    if (frame < scenes.teamStrength.end) return "teamStrength";
    if (frame < scenes.projectExperience.end) return "projectExperience";
    if (frame < scenes.serviceAdvantage.end) return "serviceAdvantage";
    if (frame < scenes.cooperationProcess.end) return "cooperationProcess";
    return "contactInfo";
  };

  const currentScene = getCurrentScene();
  const sceneStartFrame = scenes[currentScene].start;
  const sceneDuration = scenes[currentScene].end - scenes[currentScene].start;
  const frameInScene = frame - sceneStartFrame;

  // 计算动画阶段
  const getAnimationPhase = () => {
    if (frameInScene < ANIMATION_CONFIG.enterDuration) {
      return { phase: "enter", progress: frameInScene / ANIMATION_CONFIG.enterDuration };
    } else if (frameInScene < ANIMATION_CONFIG.enterDuration + ANIMATION_CONFIG.holdDuration) {
      return { phase: "hold", progress: 1 };
    } else {
      const exitProgress = (frameInScene - ANIMATION_CONFIG.enterDuration - ANIMATION_CONFIG.holdDuration) / ANIMATION_CONFIG.exitDuration;
      return { phase: "exit", progress: exitProgress };
    }
  };

  const { phase, progress } = getAnimationPhase();

  // 计算透明度（用于淡入淡出）
  const getOpacity = () => {
    if (phase === "enter") {
      return interpolate(progress, [0, 1], [0, 1]);
    } else if (phase === "hold") {
      return 1;
    } else {
      return interpolate(progress, [0, 1], [1, 0]);
    }
  };

  const getScale = () => {
    if (phase === "enter") {
      return interpolate(progress, [0, 1], [0.92, 1]);
    } else if (phase === "hold") {
      return 1;
    } else {
      return interpolate(progress, [0, 1], [1, 0.92]);
    }
  };

  return (
    <AbsoluteFill
      style={{
        backgroundColor,
        fontFamily: "Arial, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* 科技背景 */}
      <TechBackground
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
      />

      {/* 场景渲染 */}
      <div
        style={{
          width: "100%",
          height: "100%",
          opacity: getOpacity(),
          transform: `scale(${getScale()})`,
          transition: "none",
        }}
      >
        {currentScene === "opening" && (
          <Opening
            phase={phase}
            progress={progress}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            textColor={textColor}
          />
        )}

        {currentScene === "teamStrength" && (
          <TeamStrength
            phase={phase}
            progress={progress}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            textColor={textColor}
          />
        )}

        {currentScene === "projectExperience" && (
          <ProjectExperience
            phase={phase}
            progress={progress}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            textColor={textColor}
          />
        )}

        {currentScene === "serviceAdvantage" && (
          <ServiceAdvantage
            phase={phase}
            progress={progress}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            textColor={textColor}
          />
        )}

        {currentScene === "cooperationProcess" && (
          <CooperationProcess
            phase={phase}
            progress={progress}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            textColor={textColor}
          />
        )}

        {currentScene === "contactInfo" && (
          <ContactInfo
            phase={phase}
            progress={progress}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            textColor={textColor}
          />
        )}
      </div>
    </AbsoluteFill>
  );
};
