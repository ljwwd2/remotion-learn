import { z } from "zod";

export const wedoingStudioSchema = z.object({
  // 主标题颜色
  primaryColor: z.string(),
  // 次要颜色
  secondaryColor: z.string(),
  // 背景颜色
  backgroundColor: z.string(),
  // 文本颜色
  textColor: z.string(),
});
