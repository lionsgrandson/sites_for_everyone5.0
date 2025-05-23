import Menu from "../components/menu/menu";
import Footer from "../components/footer/footer";
import "./terms.css";
import { useTranslation } from "react-i18next";
export default function TermnCond() {
  const { t } = useTranslation();
  return (
    <div>
      <Menu />
      <div class="container-terms">
        <h1 class="main-title-terms">
          {t("Terms and Conditions for Sites for Everyone")}
        </h1>
        <p class="paragraph-terms">
          <span class="bold-terms">{t("Effective Date")}:</span>
          {t("September")} 1, 2024
        </p>
        <h2 class="section-title-terms">1. {t("Introduction")}</h2>
        <p class="paragraph-terms">
          {t(
            "Welcome to Sites for Everyone (`we,` `our,` or `us`). By accessing or using our website"
          )}
          (
          <a
            href="https://mosheschwartzberg.com"
            class="link-terms"
          >
            https://mosheschwartzberg.com
          </a>
          )
          {t(
            "or engaging our website development services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, please do not use our website or services"
          )}
          .
        </p>
        <h2 class="section-title-terms">2. {t("Use of Our Services")}</h2>
        <p class="paragraph-terms">
          <span class="bold-terms">2.1.</span>
          {t(
            "You agree to provide accurate and complete information when using our services"
          )}
          .
        </p>
        <p class="paragraph-terms">
          <span class="bold-terms">2.2.</span>
          {t(
            "You are responsible for maintaining the confidentiality of your account information and any login credentials provided for your website"
          )}
          .
        </p>
        <h2 class="section-title-terms">3. {t("Intellectual Property")}</h2>
        <p class="paragraph-terms">
          <span class="bold-terms">3.1.</span>
          {t(
            "All content on our website, including text, graphics, logos, and software, is our property and protected by copyright laws"
          )}
          .
        </p>
        <p class="paragraph-terms">
          <span class="bold-terms">3.2.</span>
          {t(
            "You may not use, reproduce, or distribute our content without our express written permission"
          )}
          .
        </p>
        <p class="paragraph-terms">
          <span class="bold-terms">3.3.</span>
          {t(
            "Upon full payment for our services, you will own the website we develop for you, except for any third-party elements, plugins, or themes that may be subject to their own licenses"
          )}
          .
        </p>
        <p class="paragraph-terms">
          <span class="bold-terms">3.4.</span>
          {t(
            "By engaging our services, you grant us permission to use the website we create for you as part of our portfolio. This includes displaying screenshots, descriptions, and links to your website for promotional purposes. If you wish to opt out of this, please inform us in writing"
          )}
          .
        </p>
        <h2 class="section-title-terms">4. {t("Client Content")}</h2>
        <p class="paragraph-terms">
          <span class="bold-terms">4.1.</span>
          {t(
            "By submitting any content, materials, or information to us for use in your website development project, you grant us ownership of such content. This allows us to incorporate it into your website and make necessary modifications"
          )}
          .
        </p>
        <p class="paragraph-terms">
          <span class="bold-terms">4.2.</span>
          {t(
            "You represent and warrant that you have the right to grant us ownership of any content you provide and that it does not infringe on any third-party rights."
          )}
        </p>
        <p class="paragraph-terms">
          <span class="bold-terms">4.3.</span>
          {t(
            "While we own the content you provide, you retain the right to use this content for your own purposes outside of the website we develop for you"
          )}
          .
        </p>
        <h2 class="section-title-terms">5. {t("Limitation of Liability")}</h2>
        <p class="paragraph-terms">
          <span class="bold-terms">5.1.</span>
          {t(
            "We provide our services `as is` without any warranties, express or implied"
          )}
          .
        </p>
        <p class="paragraph-terms">
          <span class="bold-terms">5.2.</span>
          {t(
            "We shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services"
          )}
          .
        </p>
        <h2 class="section-title-terms">6. {t("Termination")}</h2>
        <p class="paragraph-terms">
          {t(
            "We reserve the right to terminate or suspend our services at our sole discretion, without notice, for any reason, including breach of these Terms"
          )}
          .
        </p>
        <h2 class="section-title-terms">7. {t("Governing Law")}</h2>
        <p class="paragraph-terms">
          {t(
            "These Terms shall be governed by and construed in accordance with the laws of Israel, without regard to its conflict of law provisions"
          )}
          .
        </p>
        <h2 class="section-title-terms">8. {t("Changes to Terms")}</h2>
        <p class="paragraph-terms">
          {t(
            "We may modify these Terms at any time. Your continued use of our services after any changes indicates your acceptance of the modified Terms"
          )}
          .
        </p>
        <h2 class="section-title-terms">9. {t("Contact Information")}</h2>
        <p class="paragraph-terms">
          {t(
            "If you have any questions about these Terms, please contact us at"
          )}
          :
        </p>
        <p class="paragraph-terms">
          {t("Email")}:
          <a
            href="mailto:mosheschwartzberg@gmail.com"
            class="link-terms"
          >
            mosheschwartzberg@gmail.com
          </a>
        </p>
        <p class="paragraph-terms">
          {t("Website")}:
          <a
            href="https://mosheschwartzberg.com/contact"
            class="link-terms"
          >
            https://mosheschwartzberg.com/contact
          </a>
        </p>
        <p class="paragraph-terms">
          {t(
            "By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions"
          )}
          .
        </p>
      </div>
      <Footer />
    </div>
  );
}
