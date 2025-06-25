export default function Footer() {
  return (
    <footer className="  py-4 px-6 md:px-20 text-sm ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* About Company */}
        <div className="md:col-span-2">
          <h3 className="font-bold text-base mb-4">About Scanta </h3>
          <p className="mb-4">
            Scanta develops AI agents and automation solutions that transform
            employee feedback. We empower HR leaders and managers to
            effortlessly generate, conduct, and analyze 1:1 discussions, focus
            groups, and surveys. With enterprise-grade security and privacy
            controls, we deliver real-time insights to foster data-driven
            cultures.{" "}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-base mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/">Use Cases</a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
            <li>
              <a href="/">Company</a>
            </li>
            <li>
              <a href="#">Try it</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Key Usecases */}
        <div>
          <h3 className="font-bold text-base mb-4">Contact Us</h3>
          <p>General Questions</p>
          <p className="mb-3">hello@trupulse.ai</p>
          <p>Technical Support </p>
          <p className="mb-3">support@trupulse.ai</p>
          <p>Sales </p>
          <p className="mb-3">sales@trupulse.ai</p>
        </div>

        {/* Contacts + Social */}
        <div>
          <h3 className="font-bold text-base mb-3">Follow us on</h3>
          <ul className="">
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-3 flex justify-between border-t pt-2 text-center text-xs">
        <p>Copyright © 2025 Scanta Inc. All Rights Reserved.</p>
        <div className="mt-2 space-x-4">
          <a className="hover:underline">
            Terms of Use
          </a>
          <span>|</span>
          <a className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
