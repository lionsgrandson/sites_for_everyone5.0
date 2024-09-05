import Menu from "../components/menu/menu";
import Footer from "../components/footer/footer";
import "./privacy.css";
import { useTranslation } from "react-i18next";
export default function Privacy() {
  const { t } = useTranslation();

  return (
    <div>
      <Menu />
      <div class="container-privacy">
        <h1 class="main-title-privacy">
          {t("Privacy Policy for Sites for Everyone")}
        </h1>

        <h2 class="section-title-privacy">{t("Introduction")}</h2>
        <p class="paragraph-privacy">
          {t(
            "This Privacy Policy outlines how Sites for Everyone (`we,` `our,` or`us`) collects, uses, and protects your personal information. We are committed to safeguarding your privacy and complying with applicable data protection laws, including GDPR, CalOPPA, CCPA (CPRA), and other privacy laws around the world."
          )}
        </p>

        <h2 class="section-title-privacy">{t("Information We Collect")}</h2>
        <p class="paragraph-privacy">
          {t("We collect the following personal information")}:
        </p>
        <ul class="paragraph-privacy">
          <li>{t("Email address")}</li>
          <li>{t("First name and last name")}</li>
          <li>{t("Phone number")}</li>
        </ul>

        <h2 class="section-title-privacy">
          {t("How We Use Your Information")}
        </h2>
        <p class="paragraph-privacy">
          {t("We use your personal information to")}:
        </p>
        <ul class="paragraph-privacy">
          <li>{t("Provide and improve our services")}</li>
          <li>{t("Communicate with you about our products and services")}</li>
          <li>{t("Respond to your inquiries and support requests")}</li>
        </ul>

        <h2 class="section-title-privacy">
          {t("Data Protection and Security")}
        </h2>
        <p class="paragraph-privacy">
          {t(
            "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
          )}
        </p>

        <h2 class="section-title-privacy">{t("Your Rights")}</h2>
        <p class="paragraph-privacy">
          {t("Depending on your location, you may have the following rights")}:
        </p>
        <ul class="paragraph-privacy">
          <li>{t("Access to your personal information")}</li>
          <li>{t("Correction of inaccurate data")}</li>
          <li>{t("Deletion of your personal information")}</li>
          <li>{t("Restriction of processing")}</li>
          <li>{t("Data portability")}</li>
          <li>{t("Objection to processing")}</li>
        </ul>
        <p class="paragraph-privacy">
          {t(
            "To exercise these rights, please contact us using the information provided in the `Contact Us` section."
          )}
        </p>

        <h2 class="section-title-privacy">
          {t("International Data Transfers")}
        </h2>
        <p class="paragraph-privacy">
          {t(
            "As we are based in Israel, your data may be transferred to and processed in countries outside your residence. We ensure appropriate safeguards are in place to protect your information during such transfers."
          )}
        </p>

        <h2 class="section-title-privacy">{t("Changes to This Policy")}</h2>
        <p class="paragraph-privacy">
          {t(
            "We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our website."
          )}
        </p>

        <h2 class="section-title-privacy">{t("Contact Us")}</h2>
        <p class="paragraph-privacy">
          {t(
            "If you have any questions or concerns about this Privacy Policy, please contact us at"
          )}
          :
        </p>
        <p class="paragraph-privacy">
          {t("Email")}:
          <a
            href="mailto:mosheschwartzberg@gmail.com"
            class="link-privacy"
          >
            mosheschwartzberg@gmail.com
          </a>
        </p>
        <p class="paragraph-privacy">
          {t("Website")}:
          <a
            href="https://mosheschwartzberg.com/contact"
            class="link-privacy"
          >
            https://mosheschwartzberg.com/contact
          </a>
        </p>
        <p class="paragraph-privacy">
          <span class="bold-privacy">{t("Last updated")}:</span>{" "}
          {t("September")} 1, 2024
        </p>
      </div>
      <Footer />
    </div>
  );
}
