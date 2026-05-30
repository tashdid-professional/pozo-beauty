import { getTermsAndConditions } from "@/src/services/api";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function TermsPage() {
  const termsAndConditions = await getTermsAndConditions();
  
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 px-4 md:px-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-lato text-3xl md:text-4xl uppercase tracking-widest text-black mb-4">
            {termsAndConditions.title}
          </h1>
          <p className="text-gray-500 italic mb-12">Last updated: {termsAndConditions.lastUpdated}</p>

          <div className="space-y-10">
            {termsAndConditions.sections.map((section, index) => (
              <section key={index}>
                <h2 className="font-lato text-xl uppercase tracking-wider text-black mb-4">
                  {section.title}
                </h2>
                {Array.isArray(section.content) ? (
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 font-cormorant text-lg">
                    {section.content.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700 font-cormorant text-lg leading-relaxed">
                    {section.content}
                  </p>
                )}
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
