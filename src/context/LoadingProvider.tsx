import {
  createContext,
  PropsWithChildren,
  useContext,
  useCallback,
  useEffect,
  useState,
} from "react";
import Loading from "../components/Loading";
import { homeNavigation } from "../utils/homeNavigation";
import { lenis } from "../components/Navbar";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface LoadingType {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  setLoading: (percent: number) => void;
}

export const LoadingContext = createContext<LoadingType | null>(null);

export const LoadingProvider = ({ children }: PropsWithChildren) => {
  const [returnPosition] = useState(homeNavigation.scrollY);
  const [isLoading, setIsLoading] = useState(() => {
    // Skip loading on mobile
    if (window.innerWidth <= 1024 || homeNavigation.scrollY !== null) return false;
    return true;
  });
  const [loading, updateLoading] = useState(0);
  const setLoading = useCallback((percent: number) => {
    updateLoading((current) => Math.max(current, Math.min(100, percent)));
  }, []);

  useEffect(() => {
    if (!isLoading) return;
    // The page remains usable while slow devices finish preparing the model.
    const timer = setTimeout(() => setLoading(100), 10000);
    return () => clearTimeout(timer);
  }, [isLoading, setLoading]);

  const value = {
    isLoading,
    setIsLoading,
    setLoading,
  };
  useEffect(() => {
    // Auto-start animations on mobile since there's no 3D model
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;
    if (window.innerWidth <= 1024 || returnPosition !== null) {
      import("../components/utils/initialFX").then((module) => {
        if (!cancelled && module.initialFX) {
          timer = setTimeout(() => {
            module.initialFX();
            if (returnPosition !== null) {
              ScrollTrigger.refresh();
              window.scrollTo(0, returnPosition);
              lenis?.scrollTo(returnPosition, { immediate: true });
            }
          }, 100);
        }
      });
    }
    return () => { cancelled = true; clearTimeout(timer); };
  }, [returnPosition]);

  useEffect(() => {
    if (returnPosition === null || loading < 100) return;
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
      window.scrollTo(0, returnPosition);
      lenis?.scrollTo(returnPosition, { immediate: true });
    }, 100);
    return () => clearTimeout(timer);
  }, [loading, returnPosition]);

  return (
    <LoadingContext.Provider value={value as LoadingType}>
      {isLoading && <Loading percent={loading} />}
      <main className="main-body">{children}</main>
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
