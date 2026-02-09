import React from "react";
import { DollarSign, Target, BarChart3, Wrench } from "lucide-react";
import { SceneContainer } from "../components/SceneContainer";
import { AnimatedText } from "../components/AnimatedText";

export const ServiceAdvantage: React.FC<{
  phase: "enter" | "hold" | "exit";
  progress: number;
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
}> = ({ phase, progress, primaryColor, secondaryColor, textColor }) => {
  const advantages = [
    {
      number: "01",
      icon: <DollarSign size={56} strokeWidth={1.5} />,
      title: "高性价比",
      desc: "高校研究生团队，无公司运营成本",
    },
    {
      number: "02",
      icon: <Target size={56} strokeWidth={1.5} />,
      title: "技术保证",
      desc: "成员质量高于大部分外包公司",
    },
    {
      number: "03",
      icon: <BarChart3 size={56} strokeWidth={1.5} />,
      title: "进度透明",
      desc: "每周周会汇报，确保项目方向正确",
    },
    {
      number: "04",
      icon: <Wrench size={56} strokeWidth={1.5} />,
      title: "长期维护",
      desc: "一年免费维护，团队稳定有保障",
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
            服务优势
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
            专业服务 · 超越期待
          </div>
        </AnimatedText>

        {/* 优势卡片 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 40,
          }}
        >
          {advantages.map((item, index) => (
            <AnimatedText key={index} phase={phase} progress={progress} delay={2 + index * 0.5}>
              <div
                style={{
                  background: "linear-gradient(135deg, " + primaryColor + "15, " + secondaryColor + "10)",
                  border: "1px solid " + primaryColor + "30",
                  borderRadius: 20,
                  padding: 40,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* 编号背景 */}
                <div
                  style={{
                    position: "absolute",
                    top: -10,
                    right: 20,
                    fontSize: 100,
                    fontWeight: "bold",
                    color: primaryColor + "15",
                    lineHeight: 1,
                  }}
                >
                  {item.number}
                </div>

                {/* 图标 */}
                <div
                  style={{
                    color: secondaryColor,
                    marginBottom: 20,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </div>

                {/* 标题 */}
                <div
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    color: textColor,
                    marginBottom: 15,
                  }}
                >
                  {item.title}
                </div>

                {/* 描述 */}
                <div
                  style={{
                    fontSize: 20,
                    color: textColor + "CC",
                    lineHeight: 1.6,
                  }}
                >
                  {item.desc}
                </div>
              </div>
            </AnimatedText>
          ))}
        </div>

        {/* 额外说明 */}
        <AnimatedText phase={phase} progress={progress} delay={5}>
          <div
            style={{
              marginTop: 60,
              padding: 30,
              background: primaryColor + "10",
              border: "1px solid " + primaryColor + "30",
              borderRadius: 15,
              textAlign: "center",
              fontSize: 20,
              color: textColor,
            }}
          >
            使用飞书 + CodeUp 协作，CI/CD 自动化开发流程
          </div>
        </AnimatedText>
      </div>
    </SceneContainer>
  );
};
