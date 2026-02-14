import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // إرجاع التمرير إلى أعلى الصفحة (0,0)
    window.scrollTo(0, 0);
  }, [pathname]); // يتم التنفيذ عند كل تغيير في المسار

  return null;
};

export default ScrollToTop;