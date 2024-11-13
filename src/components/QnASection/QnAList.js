import { useTranslation } from "react-i18next";

export default function QnALis() {
  const { t } = useTranslation();

  return (
    <div>
      <ul>
        <li>What is the price of a website?</li>
        <li>How long does the process take before the site is live?</li>
        <li>
          Will there be support and maintenance available even after the project
          is over?
        </li>
      </ul>
    </div>
  );
}
