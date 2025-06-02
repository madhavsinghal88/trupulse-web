const contacts = [
  { title: "Marketing" },
  { title: "Sales" },
  { title: "Investors" },
  { title: "Technical" },
];

export default function SupportContact() {
  return (
    <section className="bg-purple-50">
    <div className="py-20 px-4 md:px-6 border-b">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-bold mb-2">Support & Contact</h2>
        <p className="mb-6 text-sm sm:text-base text-secondary-text">
          Need help or have questions? Our dedicated support team is here to assist you every step of the way.
        </p>
        <div className="grid md:grid-cols-4 gap-8 text-sm text-secondary-text">
          {contacts.map((c, idx) => (
            <div key={idx}>
              <h4 className="font-semibold sm:text-xl mb-1">{c.title}</h4>
              <p>Email: support@yourplatform.com</p>
              <p>Phone: 1-800–123–4567</p>
              <p>Live Chat: Mon–Fri, 9 AM – 6 PM EST</p>
              <p>Help Center: Visit for guides and FAQs</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}
