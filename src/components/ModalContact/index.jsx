import { Container } from "./styles";
import { FcGoogle } from "react-icons/fc";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { useModalHandlers } from "../../providers/ModalHandlers";

import dropIn from "../../styles/motionVar";

const ModalContact = () => {
  const { setShowModal } = useModalHandlers();
  return (
    <Container>
      <motion.div
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <IoClose size={25} onClick={() => setShowModal((prev) => !prev)} />
        <a
          href="https://mail.google.com/mail/u/0/?fs=1&to={luizfelipedeoliveirap@gmail.com}&tf=cm"
          target="blank"
        >
          <FcGoogle size={30} />
          Contate-me pelo Email
        </a>
      </motion.div>
    </Container>
  );
};

export default ModalContact;
