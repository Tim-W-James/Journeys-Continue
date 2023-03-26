import clsx from "clsx";
import { MdFacebook, MdMail } from "react-icons/md";

const ContactHeader: React.FC = () => (
  <div className={clsx("bg-light pt-2 pb-2 contact-header")}>
    <div className={clsx("container d-flex justify-content-between")}>
      <a
        href="https://journeyscontinue.com.au/"
        rel="noreferrer"
        target="_blank"
      >
        <MdFacebook />
        https://journeyscontinue.com.au/
      </a>
      <a
        href="mailto:contact@journeyscontinue.com.au"
        rel="noreferrer"
        target="_blank"
      >
        <MdMail />
        contact@journeyscontinue.com.au
      </a>
    </div>
  </div>
);

export default ContactHeader;
