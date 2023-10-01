import { Components } from "./Framer/Components";
import { useRouter } from "next/router";

export function Container({ children }) {
  const router = useRouter();
  return (
    <div className="container">
      <Components.Navbar
        home={() => router.push("/")}
        about={() => router.push("/about")}
        viewport={() => router.push("/viewport")}
        hydro={() => router.push("/hydro")}
        ess={() => router.push("/ess")}
        material={() => router.push("/material")}
        className="width_100 sticky"
      />
      {children}
      <Components.Footer className="width_100" />
    </div>
  );
}
