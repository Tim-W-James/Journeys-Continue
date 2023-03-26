import clsx from "clsx";
import { Container } from "react-bootstrap";

const PrimaryFooter: React.FC = () => (
  <footer className={clsx("bg-light text-muted")} id="footer">
    <Container>
      <span>
        Copyright © <time>{new Date().getFullYear()}</time>&nbsp;
        <a href="https://journeyscontinue.com.au/">Journeys Continue</a> -
        Kenneth King
      </span>
    </Container>
  </footer>
);

export default PrimaryFooter;
