import React, { useRef, useState } from "react";
import Layout from "../components/Layout";
import SocialIcons from "../components/SocialIcons";
import { Toaster, toast } from "sonner";
import emailjs, { init } from "@emailjs/browser";
init("QCAjYjhWtTN0Fgmf8");

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_ud7kyei",
        "template_imyjgk9",
        form.current,
        "QCAjYjhWtTN0Fgmf8"
      )
      .then(
        () => {
          e.target.reset();
          toast.success("Mensaje enviado correctamente");
          setLoading(false);
        },
        () => {
          toast.error("Mensaje no enviado");
        }
      );
  };
  return (
    <Layout>
      <Toaster richColors />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>¿Necesitas más información?</h3>
            <p>
              Puedes consultar más información a través de nuestras redes
              sociales y medios de nuestros líderes principales disponibles.
            </p>
            <p>
              O también contactarnos por medio del siguiente formulario con sus
              preguntas pertinentes.
            </p>
            <SocialIcons></SocialIcons>
          </article>
          <article>
            {/* template id -  template_imyjgk9 */}
            {/* service id - service_ud7kyei */}
            <form
              className="form contact-form"
              onSubmit={handleSubmit}
              ref={form}
            >
              <div className="form-row">
                <label htmlFor="name">Nombre:</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Claudia Gomez"
                />
              </div>
              <div className="form-row">
                <label htmlFor="email">Correo Electrónico:</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="claudia@ufps.edu.com"
                />
              </div>
              <div className="form-row">
                <label htmlFor="message">Mensaje:</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="La presente es para solicitar ..."
                ></textarea>
              </div>
              {loading ? (
                <div className="loader"></div>
              ) : (
                <button type="submit" className="btn block">
                  Enviar
                </button>
              )}
            </form>
          </article>
        </section>
      </main>
    </Layout>
  );
}

export default Contact;
