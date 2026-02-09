import { useCurrentFrame, useVideoConfig } from "remotion";
import React from "react";

export const TechBackground: React.FC<{
  primaryColor: string;
  secondaryColor: string;
}> = ({ primaryColor, secondaryColor }) => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  // 生成动态网格点
  const gridPoints = [];
  const gridSize = 80;
  for (let x = 0; x <= width; x += gridSize) {
    for (let y = 0; y <= height; y += gridSize) {
      const opacity = Math.sin((frame + x + y) * 0.02) * 0.1 + 0.1;
      gridPoints.push({ x, y, opacity });
    }
  }

  // 生成代码雨效果
  const codeLines = [
    "React.useEffect(() => {",
    "const init = async () => {",
    "await connect();",
    "const data = fetch();",
    "return response;",
    "export default App;",
    "import { useState }",
    "const Component = () => {",
    "return <View />;",
    "// WeDoing Studio",
    "quality.focus();",
    "team.execute();",
  ];

  const primaryColorLowOpacity = primaryColor + "40";
  const primaryColorVeryLow = primaryColor + "15";
  const secondaryColorLowOpacity = secondaryColor + "30";
  const secondaryColorVeryLow = secondaryColor + "10";

  return (
    <>
      {/* 深色渐变背景 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f172a 100%)",
        }}
      />

      {/* 动态网格点 */}
      {gridPoints.map((point, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: point.x - 1,
            top: point.y - 1,
            width: 2,
            height: 2,
            borderRadius: "50%",
            backgroundColor: primaryColor,
            opacity: point.opacity,
          }}
        />
      ))}

      {/* 扫光线 */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: (Math.sin(frame * 0.01) * 0.5 + 0.5) * 100 + "%",
          width: "100%",
          height: 2,
          background: "linear-gradient(90deg, transparent 0%, " + primaryColorLowOpacity + " 50%, transparent 100%)",
        }}
      />

      {/* 装饰性代码 */}
      <div
        style={{
          position: "absolute",
          right: 40,
          top: 100,
          fontFamily: "monospace",
          fontSize: 12,
          color: secondaryColorLowOpacity,
          lineHeight: 1.8,
          whiteSpace: "pre",
        }}
      >
        {codeLines.join("\n")}
      </div>

      {/* 左侧代码装饰 */}
      <div
        style={{
          position: "absolute",
          left: 40,
          bottom: 100,
          fontFamily: "monospace",
          fontSize: 12,
          color: secondaryColorLowOpacity,
          lineHeight: 1.8,
          whiteSpace: "pre",
        }}
      >
        {codeLines.slice().reverse().join("\n")}
      </div>

      {/* 底部发光效果 */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 200,
          background: "linear-gradient(to top, " + primaryColorVeryLow + " 0%, transparent 100%)",
        }}
      />

      {/* 顶部发光效果 */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 150,
          background: "linear-gradient(to bottom, " + secondaryColorVeryLow + " 0%, transparent 100%)",
        }}
      />
    </>
  );
};
