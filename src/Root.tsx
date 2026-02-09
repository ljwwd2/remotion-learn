import "./index.css";
import { Composition } from "remotion";
import { WeDoingStudio, wedoingStudioSchema } from "./WeDoingStudio";

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* WeDoing 工作室宣传视频 */}
      <Composition
        id="WeDoingStudio"
        component={WeDoingStudio}
        durationInFrames={780}
        fps={30}
        width={1920}
        height={1080}
        schema={wedoingStudioSchema}
        defaultProps={{
          primaryColor: "#3B82F6",
          secondaryColor: "#8B5CF6",
          backgroundColor: "#0F172A",
          textColor: "#F8FAFC",
        }}
      />
    </>
  );
};
