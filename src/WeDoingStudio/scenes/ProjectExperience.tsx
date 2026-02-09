import React from "react";
import { SceneContainer } from "../components/SceneContainer";
import { AnimatedText } from "../components/AnimatedText";

export const ProjectExperience: React.FC<{
  phase: "enter" | "hold" | "exit";
  progress: number;
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
}> = ({ phase, progress, primaryColor, secondaryColor, textColor }) => {
  const techStacks = [
    { name: "Java", color: "#ED8B00" },
    { name: "Golang", color: "#00ADD8" },
    { name: "Python", color: "#3776AB" },
    { name: "Node.js", color: "#339933" },
    { name: "Vue", color: "#42B883" },
    { name: "React", color: "#61DAFB" },
  ];

  const projectTypes = [
    "移动应用 APP",
    "微信小程序",
    "Web 网站",
    "桌面程序",
    "AI 算法",
    "企业系统",
  ];

  return (
    <SceneContainer>
      <div
        style={{
          width: "100%",
          maxWidth: 1400,
          padding: 60,
        }}
      >
        {/* 标题 */}
        <AnimatedText phase={phase} progress={progress} delay={0}>
          <h2
            style={{
              fontSize: 56,
              fontWeight: "bold",
              color: textColor,
              margin: "0 0 20px 0",
              textAlign: "center",
            }}
          >
            项目经验
          </h2>
        </AnimatedText>

        <AnimatedText phase={phase} progress={progress} delay={1}>
          <div
            style={{
              fontSize: 24,
              color: secondaryColor,
              textAlign: "center",
              marginBottom: 60,
            }}
          >
            40+ 成功案例 · 全领域覆盖
          </div>
        </AnimatedText>

        {/* 项目数量展示 */}
        <AnimatedText phase={phase} progress={progress} delay={2}>
          <div
            style={{
              textAlign: "center",
              marginBottom: 60,
            }}
          >
            <div
              style={{
                display: "inline-block",
                fontSize: 120,
                fontWeight: "bold",
                background: "linear-gradient(135deg, " + primaryColor + ", " + secondaryColor + ")",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              40+
            </div>
            <div
              style={{
                fontSize: 32,
                color: textColor,
                marginTop: 10,
              }}
            >
              累计完成项目
            </div>
          </div>
        </AnimatedText>

        {/* 技术栈展示 */}
        <AnimatedText phase={phase} progress={progress} delay={3}>
          <div style={{ marginBottom: 50 }}>
            <div
              style={{
                fontSize: 24,
                color: textColor,
                marginBottom: 30,
                textAlign: "center",
              }}
            >
              技术栈覆盖
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 20,
                flexWrap: "wrap",
              }}
            >
              {techStacks.map((tech, index) => (
                <div
                  key={index}
                  style={{
                    background: tech.color + "20",
                    border: "2px solid " + tech.color + "60",
                    borderRadius: 12,
                    padding: "15px 30px",
                    fontSize: 24,
                    fontWeight: "bold",
                    color: tech.color,
                  }}
                >
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        </AnimatedText>

        {/* 项目类型 */}
        <AnimatedText phase={phase} progress={progress} delay={4}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
            }}
          >
            {projectTypes.map((type, index) => (
              <div
                key={index}
                style={{
                  background: "linear-gradient(135deg, " + primaryColor + "15, " + secondaryColor + "10)",
                  border: "1px solid " + primaryColor + "30",
                  borderRadius: 12,
                  padding: 25,
                  textAlign: "center",
                  fontSize: 22,
                  color: textColor,
                }}
              >
                {type}
              </div>
            ))}
          </div>
        </AnimatedText>

        {/* 底部说明 */}
        <AnimatedText phase={phase} progress={progress} delay={5}>
          <div
            style={{
              marginTop: 50,
              fontSize: 20,
              color: textColor + "AA",
              textAlign: "center",
            }}
          >
            从需求分析到上线运营，全流程专业服务
          </div>
        </AnimatedText>
      </div>
    </SceneContainer>
  );
};
