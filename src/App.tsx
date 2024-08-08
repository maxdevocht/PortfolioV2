import SkillSection from "./sections/SkillSection";
import DockSection from "./sections/DockSection";
import { cn } from "./lib/utils";
import DotPattern from "./components/magicui/dot-pattern";

function App() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background DotPattern */}
      <DotPattern
        className={cn(
          "absolute inset-0 z-0 [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />

      {/* Main content */}
      <div className="relative z-10">
        <SkillSection />
        <DockSection />
      </div>
    </div>
  );
}

export default App;
