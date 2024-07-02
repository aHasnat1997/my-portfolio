import Link from "next/link";
import { FaFacebook, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import ContactForm from "./ContactForm";

function Contact() {
  const socialLinks = [
    // {
    //   icon: <FaFacebook />,
    //   href: '/'
    // },
    {
      icon: <FaLinkedin />,
      href: 'https://www.linkedin.com/in/a-hasnat/'
    },
    {
      icon: <FaGithub />,
      href: 'https://github.com/aHasnat1997'
    },
    {
      icon: <FaWhatsapp />,
      href: 'https://wa.me/01725056703'
    },
  ];

  return (
    <section id="contact" className="max-section relative mt-4 py-48">
      <div className="flex flex-col md:flex-row items-center gap-28">
        <div>
          <h2 className='text-4xl md:text-6xl font-semibold pb-14'>Contact with Me</h2>
          <h4 className='text-xl md:text-2xl font-semibold mb-4'>Let&apos;s Build Something Amazing Together</h4>
          <p className="text-lg md:text-base">
            I&apos;m excited to collaborate on innovative projects. Whether you have a question, a project idea, or just want to connect, feel free to reach out. Let&apos;s create something remarkable!
          </p>
          <div className="flex items-center gap-4 mt-8">
            {
              socialLinks.map((item, i) => <Link
                key={i}
                href={item.href}
                className="text-4xl duration-300 hover:drop-shadow-[0_4px_8px_rgb(255,255,255)]"
              >
                {item.icon}
              </Link>)
            }
          </div>
        </div>
        <div className="w-full">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;