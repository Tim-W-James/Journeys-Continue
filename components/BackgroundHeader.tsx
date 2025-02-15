import clsx from "clsx";
import { Settings } from "lib/sanity.queries";

import { ImageURL } from "./SanityImage";

const BackgroundHeader: React.FC<{ title: string; settings: Settings }> = ({
  title,
  settings,
}) => (
  <div>
    <div
      className={clsx("carousel slide")}
      data-ride="carousel"
      id="carousel"
      style={{
        backgroundImage: `url(${ImageURL(settings.backgroundImage) ?? ""})`,
      }}
    >
      <div className={clsx("carousel-inner darken")}>
        <div className={clsx("item active")}>
          <div className={clsx("container")}>
            <div className={clsx("carousel-caption")}>
              <span className={clsx("txt_header")}>{title}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BackgroundHeader;
