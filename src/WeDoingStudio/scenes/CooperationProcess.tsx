import React from "react";
import { SceneContainer } from "../components/SceneContainer";
import { AnimatedText } from "../components/AnimatedText";

export const CooperationProcess: React.FC<{
  phase: "enter" | "hold" | "exit";
  progress: number;
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
}> = ({ phase, progress, primaryColor, secondaryColor, textColor }) => {
  const steps = [
    {
      step: "1",
      title: "需求沟通",
      desc: "详细了解项目需求",
    },
    {
      step: "2",
      title: "确定方案",
      desc: "制定技术方案和报价",
    },
    {
      step: "3",
      title: "支付定金",
      desc: "支付30%订金启动项目",
    },
    {
      step: "4",
      title: "开发执行",
      desc: "每周周会汇报进度",
    },
    {
      step: "5",
      title: "中期验收",
      desc: "支付30%中期款",
    },
    {
      step: "6",
      title: "交付上线",
      desc: "支付尾款，交付源码",
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
            合作流程
          </h2>
        </AnimatedText>

        <AnimatedText phase={phase} progress={progress} delay={1}>
          <div
            style={{
              fontSize: 24,
              color: secondaryColor,
              textAlign: "center",
              marginBottom: 50,
            }}
          >
            标准流程 · 省心省力
          </div>
        </AnimatedText>

        {/* 流程步骤 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 30,
            marginBottom: 60,
          }}
        >
          {steps.map((item, index) => (
            <AnimatedText key={index} phase={phase} progress={progress} delay={2 + index * 0.3}>
              <div
                style={{
                  background: "linear-gradient(135deg, " + primaryColor + "15, " + secondaryColor + "10)",
                  border: "1px solid " + primaryColor + "30",
                  borderRadius: 15,
                  padding: 30,
                  position: "relative",
                }}
              >
                {/* 步骤编号 */}
                <div
                  style={{
                    position: "absolute",
                    top: -15,
                    left: 20,
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, " + primaryColor + ", " + secondaryColor + ")",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "#fff",
                  }}
                >
                  {item.step}
                </div>

                {/* 标题 */}
                <div
                  style={{
                    fontSize: 24,
                    fontWeight: "bold",
                    color: textColor,
                    marginBottom: 10,
                    marginTop: 10,
                  }}
                >
                  {item.title}
                </div>

                {/* 描述 */}
                <div
                  style={{
                    fontSize: 18,
                    color: textColor + "CC",
                  }}
                >
                  {item.desc}
                </div>
              </div>
            </AnimatedText>
          ))}
        </div>

        {/* 付款方式 */}
        <AnimatedText phase={phase} progress={progress} delay={4}>
          <div
            style={{
              background: "linear-gradient(135deg, " + primaryColor + "20, " + secondaryColor + "15)",
              border: "2px solid " + primaryColor + "50",
              borderRadius: 20,
              padding: 40,
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: 36,
                fontWeight: "bold",
                color: textColor,
                marginBottom: 20,
              }}
            >
              334 付款方式
            </div>
            <div
              style={{
                fontSize: 24,
                color: textColor + "CC",
                lineHeight: 1.8,
              }}
            >
              <div>30% 订金 → 启动项目</div>
              <div>30% 中期款 → 继续开发</div>
              <div>40% 尾款 → 交付源码 + 一年免费维护</div>
            </div>
          </div>
        </AnimatedText>

        {/* 额外说明 */}
        <AnimatedText phase={phase} progress={progress} delay={5}>
          <div
            style={{
              marginTop: 40,
              fontSize: 20,
              color: secondaryColor,
              textAlign: "center",
            }}
          >
            ✓ 支持对公账户打款 ✓ 可开具发票
          </div>
        </AnimatedText>
      </div>
    </SceneContainer>
  );
};
