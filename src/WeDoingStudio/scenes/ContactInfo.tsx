import { Phone } from "lucide-react";
import React from "react";
import { SceneContainer } from "../components/SceneContainer";
import { AnimatedText } from "../components/AnimatedText";
import { WeChatIcon } from "../components/WeChatIcon";

export const ContactInfo: React.FC<{
  phase: "enter" | "hold" | "exit";
  progress: number;
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
}> = ({ phase, progress, primaryColor, secondaryColor, textColor }) => {
  return (
    <SceneContainer>
      <div
        style={{
          width: "100%",
          maxWidth: 1200,
          padding: 60,
          textAlign: "center",
        }}
      >
        {/* 标题 */}
        <AnimatedText phase={phase} progress={progress} delay={0}>
          <h2
            style={{
              fontSize: 64,
              fontWeight: "bold",
              color: textColor,
              margin: "0 0 30px 0",
            }}
          >
            联系我们
          </h2>
        </AnimatedText>

        <AnimatedText phase={phase} progress={progress} delay={1}>
          <div
            style={{
              fontSize: 28,
              color: secondaryColor,
              marginBottom: 60,
            }}
          >
            期待与您合作 · 共创优秀产品
          </div>
        </AnimatedText>

        {/* 联系方式卡片 */}
        <AnimatedText phase={phase} progress={progress} delay={2}>
          <div
            style={{
              display: "inline-flex",
              flexDirection: "column",
              gap: 30,
            }}
          >
            {/* 微信 */}
            <div
              style={{
                background: "linear-gradient(135deg, " + primaryColor + "20, " + secondaryColor + "15)",
                border: "2px solid " + primaryColor + "50",
                borderRadius: 20,
                padding: "40px 80px",
                display: "flex",
                alignItems: "center",
                gap: 30,
              }}
            >
              <div
                style={{
                  color: secondaryColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <WeChatIcon size={64} color={secondaryColor} />
              </div>
              <div
                style={{
                  textAlign: "left",
                }}
              >
                <div
                  style={{
                    fontSize: 20,
                    color: textColor + "AA",
                    marginBottom: 8,
                  }}
                >
                  微信号
                </div>
                <div
                  style={{
                    fontSize: 36,
                    fontWeight: "bold",
                    color: textColor,
                    fontFamily: "monospace",
                  }}
                >
                  zhao__xiao__yun
                </div>
              </div>
            </div>

            {/* 手机号 */}
            <div
              style={{
                background: "linear-gradient(135deg, " + secondaryColor + "20, " + primaryColor + "15)",
                border: "2px solid " + secondaryColor + "50",
                borderRadius: 20,
                padding: "40px 80px",
                display: "flex",
                alignItems: "center",
                gap: 30,
              }}
            >
              <div
                style={{
                  color: secondaryColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Phone size={64} strokeWidth={1.5} />
              </div>
              <div
                style={{
                  textAlign: "left",
                }}
              >
                <div
                  style={{
                    fontSize: 20,
                    color: textColor + "AA",
                    marginBottom: 8,
                  }}
                >
                  手机号
                </div>
                <div
                  style={{
                    fontSize: 36,
                    fontWeight: "bold",
                    color: textColor,
                    fontFamily: "monospace",
                  }}
                >
                  151-9204-3237
                </div>
              </div>
            </div>
          </div>
        </AnimatedText>

        {/* 结语 */}
        <AnimatedText phase={phase} progress={progress} delay={3}>
          <div
            style={{
              marginTop: 80,
              fontSize: 24,
              color: textColor + "CC",
              lineHeight: 1.8,
            }}
          >
            <div>感谢您的关注与信任</div>
            <div style={{ marginTop: 20 }}>WeDoing Studio · 专业软件开发团队</div>
          </div>
        </AnimatedText>

        {/* 底部 Logo */}
        <AnimatedText phase={phase} progress={progress} delay={4}>
          <div
            style={{
              marginTop: 60,
              width: 100,
              height: 100,
              margin: "0 auto",
              borderRadius: "50%",
              background: "linear-gradient(135deg, " + primaryColor + ", " + secondaryColor + ")",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                fontSize: 40,
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              W
            </div>
          </div>
        </AnimatedText>
      </div>
    </SceneContainer>
  );
};
