const offices = [
  { region: "United States", address: "1234 Innovation Drive, Suite 500\nTechVille, CA 94016\nUnited States" },
  { region: "India", address: "1234 Innovation Drive, Suite 500\nTechVille, CA 94016\nUnited States" },
  { region: "United States", address: "1234 Innovation Drive, Suite 500\nTechVille, CA 94016\nUnited States" },
  { region: "India", address: "1234 Innovation Drive, Suite 500\nTechVille, CA 94016\nUnited States" },
];

export default function OfficeLocations() {
  return (
    <section className="py-20 px-4 md:px-6 border-b">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-bold mb-2">Our Locations</h2>
        <p className="mb-6">
          With offices strategically located worldwide, we’re always close to you to provide seamless support and collaboration.
        </p>
        <div className="grid md:grid-cols-4 gap-8 text-sm text-secondary-text">
          {offices.map((office, idx) => (
            <div key={idx}>
              <h4 className="font-semibold sm:text-xl mb-1">{office.region}</h4>
              <p className="whitespace-pre-line text-sm sm:text-base">{office.address}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
