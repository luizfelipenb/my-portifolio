import { Container } from "./styles";
import SectionName from "../../components/SectionName";
import SectionDescription from "../../components/SectionDescription";
import { motion } from "framer-motion";

const Dashboard = () => {
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 2,
        type: "spring",
        damping: 100,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };
  return (
    <Container>
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
