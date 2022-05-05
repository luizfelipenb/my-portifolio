import { Container } from "./styles";
import { motion } from "framer-motion";
import { useModalHandlers } from "../../providers/ModalHandlers";

import SectionName from "../../components/SectionName";
import SectionDescription from "../../components/SectionDescription";
import ModalContact from "../../components/ModalContact";

import dropIn from "../../styles/motionVar";

const Dashboard = () => {
  const { showModal } = useModalHandlers();
  return (
    <Container>
      {showModal && <ModalContact />}
      <motion.section
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <SectionName />
      </motion.section>
      <motion.section
        initial={{ translateX: 1000, opacity: 0 }}
        animate={{ translateX: 0, opacity: 2 }}
        exit={{ translateX: 100, opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <SectionDescription />
      </motion.section>
    </Container>
  );
};
export default Dashboard;
