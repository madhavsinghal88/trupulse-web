import { Suspense } from "react";
import { DemoProvider } from "./_components/DemoProvider";
import SiteBehaviors from "./_components/SiteBehaviors";
import CookieNotice from "./_components/CookieNotice";
import ChatDock from "./_components/chat/ChatDock";
import "../styles/extras.css";

// Marketing pages. Each page imports its own stylesheet from app/styles, scoped to the
// tp-* class on its wrapper, and renders its own header and footer.
export default function SiteLayout({ children }) {
  return (
    <DemoProvider>
      <Suspense fallback={null}>
        <SiteBehaviors />
      </Suspense>
      {children}
      <ChatDock />
      <CookieNotice />
    </DemoProvider>
  );
}
