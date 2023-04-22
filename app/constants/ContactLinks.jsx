import { GitHub, Linkedin } from "react-feather";

export const ContactLinks = [
  {
    url: "https://www.github.com/jomonty",
    url_display: "GitHub",
    html: (
      <a
        href="https://www.github.com/jomonty"
        target="_blank"
        rel="noreferrer"
        className="flex justify-center py-3"
      >
        <GitHub color="var(--color-logoprimary)" />
      </a>
    ),
  },
  {
    url: "https://www.linkedin.com/in/josh-montgomery-203663111/",
    url_display: "LinkedIn",
    html: (
      <a
        href="https://www.linkedin.com/in/josh-montgomery-203663111/"
        target="_blank"
        rel="noreferrer"
        className="flex justify-center py-3"
      >
        <Linkedin color="var(--color-logoprimary" />
      </a>
    ),
  },
];

export default ContactLinks;
