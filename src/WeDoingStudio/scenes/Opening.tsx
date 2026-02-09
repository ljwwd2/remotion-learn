import { interpolate } from "remotion";
import React from "react";
import { SceneContainer } from "../components/SceneContainer";
import { AnimatedText } from "../components/AnimatedText";

export const Opening: React.FC<{
  phase: "enter" | "hold" | "exit";
  progress: number;
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
}> = ({ phase, progress, primaryColor, secondaryColor, textColor }) => {
  const logoScale = interpolate(
    phase === "enter" ? progress : phase === "hold" ? 1 : progress,
    phase === "enter" ? [0, 1] : [0, 1],
    phase === "enter" ? [0, 1] : [1, 0.95]
  );

  const glowIntensity = phase === "hold" ? 1 : phase === "enter" ? progress : 1 - progress * 0.5;

  return (
    <SceneContainer>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 40,
        }}
      >
        {/* Logo 容器 */}
        <AnimatedText phase={phase} progress={progress} delay={0}>
          <div
            style={{
              width: 200,
              height: 200,
              borderRadius: "50%",
              background: "linear-gradient(135deg, " + primaryColor + ", " + secondaryColor + ")",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 " + (glowIntensity * 100) + "px " + primaryColor,
              transform: "scale(" + logoScale + ")",
              position: "relative",
            }}
          >
            <div
              style={{
                fontSize: 80,
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              W
            </div>
            {/* 装饰环 */}
            <div
              style={{
                position: "absolute",
                width: 240,
                height: 240,
                borderRadius: "50%",
                border: "2px solid " + primaryColor + "40",
              }}
            />
            <div
              style={{
                position: "absolute",
                width: 280,
                height: 280,
                borderRadius: "50%",
                border: "1px solid " + secondaryColor + "30",
              }}
            />
          </div>
        </AnimatedText>

        {/* 工作室名称 */}
        <AnimatedText phase={phase} progress={progress} delay={2}>
          <h1
            style={{
              fontSize: 72,
              fontWeight: "bold",
              color: textColor,
              margin: 0,
              letterSpacing: 8,
              textShadow: "0 0 40px " + primaryColor,
            }}
          >
            WeDoing Studio
          </h1>
        </AnimatedText>

        {/* 副标题 */}
        <AnimatedText phase={phase} progress={progress} delay={4}>
          <div
            style={{
              fontSize: 28,
              color: secondaryColor,
              fontWeight: 300,
              letterSpacing: 4,
            }}
          >
            专业技术团队 · 高质量软件开发
          </div>
        </AnimatedText>

        {/* 装饰线 */}
        <AnimatedText phase={phase} progress={progress} delay={6}>
          <div
            style={{
              width: 400,
              height: 2,
              background: "linear-gradient(90deg, transparent 0%, " + primaryColor + " 50%, transparent 100%)",
            }}
          />
        </AnimatedText>

        {/* 标语 */}
        <AnimatedText phase={phase} progress={progress} delay={8}>
          <div
            style={{
              fontSize: 24,
              color: textColor + "CC",
              maxWidth: 800,
              lineHeight: 1.6,
            }}
          >
            由大厂员工与研究生组成的专业开发团队
            <br />
            40+ 成功项目案例 · 全栈技术能力
          </div>
        </AnimatedText>
      </div>
    </SceneContainer>
  );
};
