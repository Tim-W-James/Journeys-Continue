import clsx from "clsx";
import { MdFacebook, MdMail } from "react-icons/md";

const ContactHeader: React.FC = () => (
  <div className={clsx("bg-light pt-2 pb-2 contact-header")}>
    <div className={clsx("container d-flex justify-content-between")}>
      <a
        href="https://www.facebook.com/journeyscontinue/"
        rel="noreferrer"
        target="_blank"
      >
        <MdFacebook style={{ marginRight: "0.2rem" }} />
        facebook.com/JourneysContinue
      </a>
      <a
        href="mailto:contact@journeyscontinue.au"
        rel="noreferrer"
        target="_blank"
      >
        <MdMail style={{ marginRight: "0.2rem" }} />
        contact@JourneysContinue.au
      </a>
    </div>
  </div>
);

export default ContactHeader;
