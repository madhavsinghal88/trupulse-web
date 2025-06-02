export default function Footer() {
  return (
    <footer className="  py-4 px-6 md:px-20 text-sm ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">

        {/* About Company */}
        <div className="md:col-span-2">
          <h3 className="font-bold text-base mb-4">About company</h3>
          <p className="mb-4">
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore accusantium doloremque
          </p>
          <p>
            totam rem aperiam, eaque ipsa quae ab illoinventore accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-base mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#">Our Pricing</a></li>
            <li><a href="#">Key Use cases</a></li>
            <li><a href="#">Company Blogs</a></li>
            <li><a href="#">Terms of use</a></li>
            <li><a href="#">Data Privacy</a></li>
            <li><a href="#">Privacy Polity</a></li>
          </ul>
        </div>

        {/* Key Usecases */}
        <div>
          <h3 className="font-bold text-base mb-4">Key usecases</h3>
          <ul className="space-y-2">
            <li><a href="#">HR Department</a></li>
            <li><a href="#">Markering automation</a></li>
            <li><a href="#">Finance</a></li>
          </ul>
        </div>

        {/* Contacts + Social */}
        <div>
          <h3 className="font-bold text-base mb-4">Contacts</h3>
          <p>Sales</p>
          <p className="mb-4">sales@trupulse.con</p>
          <p>Markering</p>
          <p className="mb-6">Marketing@trupulse.con</p>

          <h3 className="font-bold text-base mb-3">Follow us on</h3>
          <ul className="space-y-2">
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-5 border-t pt-4 text-center text-xs ">
        © Copyright 2025 Scanta Inc.
      </div>
    </footer>
  );
}
