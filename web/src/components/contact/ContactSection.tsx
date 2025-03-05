import ContactForm from "./ContactForm";

export const ContactSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            GET IN TOUCH
          </h2>
        </div>

        <div className="flex justify-center">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
