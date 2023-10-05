import Head from "next/head";
import { Components } from "./Framer/Components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Script from "next/script";

export function Container({ children }) {
  const router = useRouter();
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Function to update windowWidth state
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add a listener for the window resize event
    window.addEventListener("resize", handleResize);

    // Initial window width
    setWindowWidth(window.innerWidth);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let navbarVariant = "Desktop";

  if (windowWidth < 1200) {
    navbarVariant = "Tablet";
  }

  if (windowWidth < 810) {
    navbarVariant = "Phone";
  }

  return (
    <>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          <!-- Google tag (gtag.js) -->
          <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11361899346">
          </script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'AW-11361899346');
          </script>
        `}
      </Script>
      <div className="container">
        <Components.Navbar
          home={() => router.push("/")}
          about={() => router.push("/about")}
          viewport={() => router.push("/viewport")}
          hydro={() => router.push("/hydro")}
          ess={() => router.push("/ess")}
          material={() => router.push("/material")}
          className="width_100 sticky"
          variant={navbarVariant} // Set the variant dynamically
        />
        {children}
        <Components.Footer className="width_100" />
      </div>
    </>
  );
}
