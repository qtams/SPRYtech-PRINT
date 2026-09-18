import { useCallback, useEffect, useState } from "react";

const checkInstalled = () => {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true
  );
};

const checkIOS = () => {
  const ua = window.navigator.userAgent.toLowerCase();

  const isIOS = /iphone|ipad|ipod/.test(ua);

  const isIPadOS =
    navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;

  return isIOS || isIPadOS;
};

export default function usePWAInstall() {
  const [canInstall, setCanInstall] = useState(() =>
    Boolean(window.__PWA_INSTALL_PROMPT__),
  );

  const [isInstalled, setIsInstalled] = useState(() => checkInstalled());

  const [isIOS] = useState(() => checkIOS());

  useEffect(() => {
    const handleInstallReady = () => {
      console.log("✅ React received PWA install event");

      setCanInstall(Boolean(window.__PWA_INSTALL_PROMPT__));
    };

    const handleInstalled = () => {
      setCanInstall(false);
      setIsInstalled(true);
    };

    window.addEventListener("pwa-install-ready", handleInstallReady);

    window.addEventListener("pwa-installed", handleInstalled);

    /*
      In case main.jsx already caught
      the event before this hook mounted.
    */

    setCanInstall(Boolean(window.__PWA_INSTALL_PROMPT__));

    return () => {
      window.removeEventListener("pwa-install-ready", handleInstallReady);

      window.removeEventListener("pwa-installed", handleInstalled);
    };
  }, []);

  const installApp = useCallback(async () => {
    const event = window.__PWA_INSTALL_PROMPT__;

    console.log("Install requested:", event);

    if (!event) {
      return {
        status: "unavailable",
      };
    }

    try {
      /*
          IMPORTANT:

          prompt() happens immediately.
          Don't put SweetAlert before this.
        */

      await event.prompt();

      const choice = await event.userChoice;

      console.log("PWA user choice:", choice);

      if (choice.outcome === "accepted") {
        window.__PWA_INSTALL_PROMPT__ = null;

        setCanInstall(false);

        return {
          status: "accepted",
        };
      }

      return {
        status: "dismissed",
      };
    } catch (error) {
      console.error("PWA install failed:", error);

      return {
        status: "error",
        error,
      };
    }
  }, []);

  return {
    installApp,
    canInstall,
    isInstalled,
    isIOS,
  };
}
