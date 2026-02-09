import React from "react";
import { SceneContainer } from "../components/SceneContainer";
import { AnimatedText } from "../components/AnimatedText";

export const TeamStrength: React.FC<{
  phase: "enter" | "hold" | "exit";
  progress: number;
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
}> = ({ phase, progress, primaryColor, secondaryColor, textColor }) => {
  const highlights = [
    {
      icon: "🎓",
      title: "研究生团队",
      desc: "核心成员均为高校研究生",
    },
    {
      icon: "🏢",
      title: "大厂背景",
      desc: "多名原大厂员工技术支持",
    },
    {
      icon: "⚡",
      title: "技术实力",
      desc: "多届算法竞赛获奖者",
    },
    {
      icon: "🔗",
      title: "稳定协作",
      desc: "2年+项目合作经验",
    },
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
            团队实力
          </h2>
        </AnimatedText>

        <AnimatedText phase={phase} progress={progress} delay={1}>
          <div
            style={{
              fontSize: 24,
              color: secondaryColor,
              textAlign: "center",
              marginBottom: 80,
            }}
          >
            专业团队 · 值得信赖
          </div>
        </AnimatedText>

        {/* 亮点卡片网格 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 40,
          }}
        >
          {highlights.map((item, index) => (
            <AnimatedText key={index} phase={phase} progress={progress} delay={2 + index * 0.5}>
              <div
                style={{
                  background: "linear-gradient(135deg, " + primaryColor + "15, " + secondaryColor + "10)",
                  border: "1px solid " + primaryColor + "30",
                  borderRadius: 20,
                  padding: 40,
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  style={{
                    fontSize: 64,
                    marginBottom: 20,
                  }}
                >
                  {item.icon}
                </div>
                <div
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    color: textColor,
                    marginBottom: 12,
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    fontSize: 20,
                    color: textColor + "CC",
                  }}
                >
                  {item.desc}
                </div>
              </div>
            </AnimatedText>
          ))}
        </div>

        {/* 底部说明 */}
        <AnimatedText phase={phase} progress={progress} delay={5}>
          <div
            style={{
              marginTop: 60,
              fontSize: 20,
              color: textColor + "AA",
              textAlign: "center",
              lineHeight: 1.8,
            }}
          >
            背靠天津工业大学 CSDN 社团
            <br />
            每年补充优秀人才，成员多保研或进入大厂工作
          </div>
        </AnimatedText>
      </div>
    </SceneContainer>
  );
};
