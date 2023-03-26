import clsx from "clsx";
import Link from "next/link";

const Custom404 = () => (
  <>
    <h1>404 - Page Not Found</h1>
    <div className={clsx("d-flex justify-content-center")}>
      <Link href="/">Go back home</Link>
    </div>
  </>
);
export default Custom404;
