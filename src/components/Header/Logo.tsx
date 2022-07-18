import { RouteLink } from "components/primitives";
import Image from "next/image";

const Logo: React.FC = () => (
  <RouteLink to="/" title="Home" className="flex-shrink-0">
    <Image src="/logo.webp" alt="GPAD Logo" width={40} height={40} />
  </RouteLink>
);

export default Logo;
