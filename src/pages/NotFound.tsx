
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center px-6 py-20">
          <div className="mb-8">
            <h1 className="text-6xl font-bold text-songcm-primary mb-4">404</h1>
            <p className="text-xl text-songcm-light mb-8">
              Oups! La page que vous cherchez semble avoir disparu...
            </p>
          </div>
          <div className="flex justify-center">
            <Link to="/">
              <Button className="btn-primary">
                Retourner à l'accueil
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
