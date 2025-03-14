import { Route, Routes } from "react-router-dom";
import IndexPage from "@/pages/index";
import CvPage from "@/pages/cv-vitae";
import SkillPage from "@/pages/skill";
import ContactPage from "@/pages/contact";
import { ScrollShadow } from "@heroui/scroll-shadow";

function App() {
  return (
    <ScrollShadow
        hideScrollBar
        className="max-w-full max-h-[600px]"
          offset={50}
          orientation="horizontal"
        >
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<SkillPage />} path="/skill" />
      <Route element={<CvPage />} path="/cv" />
      <Route element={<ContactPage />} path="/contact" />
    </Routes>
    </ScrollShadow>
  );
}

export default App;
/*
 */
