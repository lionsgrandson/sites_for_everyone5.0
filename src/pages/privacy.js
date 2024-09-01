import Menu from "../components/menu/menu";
import Footer from "../components/footer/footer";
import "./privacy.css";
export default function Privacy() {
  return (
    <div>
      <Menu />
      <div class="container-privacy">
        <h1 class="main-title-privacy">
          Privacy Policy for Sites for Everyone
        </h1>

        <h2 class="section-title-privacy">Introduction</h2>
        <p class="paragraph-privacy">
          This Privacy Policy outlines how Sites for Everyone ("we," "our," or
          "us") collects, uses, and protects your personal information. We are
          committed to safeguarding your privacy and complying with applicable
          data protection laws, including GDPR, CalOPPA, CCPA (CPRA), and other
          privacy laws around the world.
        </p>

        <h2 class="section-title-privacy">Information We Collect</h2>
        <p class="paragraph-privacy">
          We collect the following personal information:
        </p>
        <ul class="paragraph-privacy">
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Phone number</li>
        </ul>

        <h2 class="section-title-privacy">How We Use Your Information</h2>
        <p class="paragraph-privacy">We use your personal information to:</p>
        <ul class="paragraph-privacy">
          <li>Provide and improve our services</li>
          <li>Communicate with you about our products and services</li>
          <li>Respond to your inquiries and support requests</li>
        </ul>

        <h2 class="section-title-privacy">Data Protection and Security</h2>
        <p class="paragraph-privacy">
          We implement appropriate technical and organizational measures to
          protect your personal information against unauthorized access,
          alteration, disclosure, or destruction.
        </p>

        <h2 class="section-title-privacy">Your Rights</h2>
        <p class="paragraph-privacy">
          Depending on your location, you may have the following rights:
        </p>
        <ul class="paragraph-privacy">
          <li>Access to your personal information</li>
          <li>Correction of inaccurate data</li>
          <li>Deletion of your personal information</li>
          <li>Restriction of processing</li>
          <li>Data portability</li>
          <li>Objection to processing</li>
        </ul>
        <p class="paragraph-privacy">
          To exercise these rights, please contact us using the information
          provided in the "Contact Us" section.
        </p>

        <h2 class="section-title-privacy">International Data Transfers</h2>
        <p class="paragraph-privacy">
          As we are based in Israel, your data may be transferred to and
          processed in countries outside your residence. We ensure appropriate
          safeguards are in place to protect your information during such
          transfers.
        </p>

        <h2 class="section-title-privacy">Changes to This Policy</h2>
        <p class="paragraph-privacy">
          We may update this Privacy Policy from time to time. We will notify
          you of any significant changes by posting the new policy on our
          website.
        </p>

        <h2 class="section-title-privacy">Contact Us</h2>
        <p class="paragraph-privacy">
          If you have any questions or concerns about this Privacy Policy,
          please contact us at:
        </p>
        <p class="paragraph-privacy">
          Email:{" "}
          <a
            href="mailto:mosheschwartzberg@gmail.com"
            class="link-privacy"
          >
            mosheschwartzberg@gmail.com
          </a>
        </p>
        <p class="paragraph-privacy">
          Website:{" "}
          <a
            href="https://mosheschwartzberg.com/contact"
            class="link-privacy"
          >
            https://mosheschwartzberg.com/contact
          </a>
        </p>
        <p class="paragraph-privacy">
          <span class="bold-privacy">Last updated:</span> September 1, 2024
        </p>
      </div>
      <Footer />
    </div>
  );
}
