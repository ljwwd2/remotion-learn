# WeDoing 工作室宣传视频

已完成 26 秒科技专业风宣传视频的开发。

## 视频信息

- **时长**: 26 秒（780 帧 @ 30fps）
- **分辨率**: 1920 x 1080 (Full HD)
- **风格**: 科技专业风（深色背景，动态线条，代码元素）

## 动画时间轴

每个场景采用 **快速进入 → 3秒展示 → 快速退出** 的模式：

| 场景 | 帧范围 | 时长 | 说明 |
|------|--------|------|------|
| 开场动画 | 0-130 | 4.3秒 | Logo展示 + 工作室名称 |
| 团队实力 | 130-260 | 4.3秒 | 大厂背景 + 研究生团队 |
| 项目经验 | 260-390 | 4.3秒 | 40+项目案例 + 全技术栈 |
| 服务优势 | 390-520 | 4.3秒 | 高性价比 + 周会汇报 |
| 合作流程 | 520-650 | 4.3秒 | 6步流程 + 334付款 |
| 联系方式 | 650-780 | 4.3秒 | 微信 + 手机号 |

每个场景包含：
- **20帧 (0.67秒)** - 快速进入动画（淡入 + 缩放）
- **90帧 (3秒)** - 内容展示暂停（方便用户阅读）
- **20帧 (0.67秒)** - 快速退出动画（淡出 + 切换）

## 场景内容

### 1. 开场动画 (0-130帧)
- Logo 展示，带旋转和缩放动画
- 工作室名称 "WeDoing Studio"
- 副标题和标语

### 2. 团队实力 (130-260帧)
- 4 个亮点卡片：研究生团队、大厂背景、技术实力、稳定协作
- 网格布局，淡入动画

### 3. 项目经验 (260-390帧)
- 40+ 项目数量展示
- 6 大技术栈：Java、Golang、Python、Node.js、Vue、React
- 6 种项目类型

### 4. 服务优势 (390-520帧)
- 4 个优势卡片：高性价比、技术保证、进度透明、长期维护
- 编号背景装饰

### 5. 合作流程 (520-650帧)
- 6 步流程展示
- 334 付款方式详细说明
- 对公账户和发票支持

### 6. 联系方式 (650-780帧)
- 微信号和手机号展示
- 带图标的醒目卡片设计
- 底部 Logo 和结语

## 技术特点

- 深色渐变背景 (#0a0e27 → #1a1f3a → #0f172a)
- 动态网格点效果
- 扫光线动画
- 代码雨装饰元素
- 流畅的淡入淡出转场
- 主色：#3B82F6 (科技蓝)
- 副色：#8B5CF6 (紫色)
- 快速 spring 动画（stiffness: 200, damping: 20）

## 如何使用

### 1. 预览视频
```bash
npm run dev
```
然后在浏览器打开 http://localhost:3001

在左侧边栏选择 "WeDoingStudio" composition。

### 2. 渲染视频
```bash
npx remotion render WeDoingStudio output/wedoing-studio.mp4
```

### 3. 自定义颜色
在 src/Root.tsx 中修改 defaultProps:
```tsx
defaultProps={{
  primaryColor: "#3B82F6",      // 主色调
  secondaryColor: "#8B5CF6",    // 副色调
  backgroundColor: "#0F172A",   // 背景色
  textColor: "#F8FAFC",         // 文字颜色
}}
```

### 4. 调整动画速度
在 src/WeDoingStudio/WeDoingStudio.tsx 中修改 ANIMATION_CONFIG:
```tsx
const ANIMATION_CONFIG = {
  enterDuration: 20,  // 进入动画帧数
  holdDuration: 90,   // 展示时间帧数 (3秒)
  exitDuration: 20,   // 退出动画帧数
};
```

## 文件结构

```
src/WeDoingStudio/
├── index.ts                      # 导出文件
├── schema.ts                     # 参数定义
├── WeDoingStudio.tsx             # 主组件（场景时间轴）
├── components/
│   ├── TechBackground.tsx        # 科技背景
│   ├── AnimatedText.tsx          # 动画文字组件
│   └── SceneContainer.tsx        # 场景容器
└── scenes/
    ├── Opening.tsx               # 开场场景
    ├── TeamStrength.tsx          # 团队实力
    ├── ProjectExperience.tsx     # 项目经验
    ├── ServiceAdvantage.tsx      # 服务优势
    ├── CooperationProcess.tsx    # 合作流程
    └── ContactInfo.tsx           # 联系方式
```

## 商用说明

此视频可自由用于商业用途。所有元素均使用代码生成，无需担心版权问题。

---

**开发服务器已启动**: http://localhost:3001

立即在浏览器中查看视频预览！
