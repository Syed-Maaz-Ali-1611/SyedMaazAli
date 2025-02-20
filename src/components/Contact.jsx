import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";  // Importing icons

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
     <motion.div
  variants={slideIn("left", "tween", 0.2, 1)}
  className="flex-[0.75] bg-black-100 p-8 rounded-2xl shadow-2xl shadow-white/30"
>
  <p className={styles.sectionSubText}>Get in touch</p>
  <h3 className={styles.sectionHeadText}>Contact Me</h3>

  <div className="mt-12 flex flex-col gap-8">
    {/* Mail Section */}
    <div className="flex flex-col">
      <span className="text-white font-medium mb-4 flex items-center">
        <FaEnvelope className="mr-2" />
        Personal Mail:
      </span>
      <a
        href="mailto:maazali1611@gmail.com"
        className="text-green-500 font-medium hover:underline"
      >
        maazali1611@gmail.com
      </a>
    </div>

    {/* LinkedIn Section */}
    <div className="flex flex-col">
      <span className="text-white font-medium mb-4 flex items-center">
        <FaLinkedin className="mr-2" />
        LinkedIn:
      </span>
      <a
        href="https://www.linkedin.com/in/syed-maaz-ali-847a8822b/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 font-medium hover:underline"
      >
        https://www.linkedin.com/in/syed-maaz-ali-847a8822b/
      </a>
    </div>

    {/* GitHub Section */}
    <div className="flex flex-col">
      <span className="text-white font-medium mb-4 flex items-center">
        <FaGithub className="mr-2" />
        GitHub:
      </span>
      <a
        href="https://github.com/Syed-Maaz-Ali-1611"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 font-medium hover:underline"
      >
        https://github.com/Syed-Maaz-Ali-1611
      </a>
    </div>
  </div>
</motion.div>


      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
