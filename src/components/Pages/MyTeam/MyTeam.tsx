import React from "react";
import { motion } from "framer-motion";
import { teamData } from "./MyTeamData";
import styles from "./MyTeam.module.css";
import Modal from "../../Modal/Modal";

const TeamSection: React.FC = () => {
  const [modalActive, setModalActive] = React.useState(false);
  const [selectedMember, setSelectedMember] = React.useState<
    null | (typeof teamData)[0]
  >(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const openModal = (member: (typeof teamData)[0]) => {
    setSelectedMember(member);
    setModalActive(true);
  };

  return (
    <section className={styles.team}>
      <motion.h2 
        className={styles.heading}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Команда Adventure Events
      </motion.h2>
      <motion.div 
        className={styles.teamGrid}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {teamData.map((member) => (
          <motion.div
            key={member.id}
            className={styles.teamMember}
            onClick={() => openModal(member)}
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={member.photo} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.description}</p>
          </motion.div>
        ))}
      </motion.div>
      <Modal active={modalActive} setActive={setModalActive}>
        {selectedMember && (
          <div className={styles.modalContentWrapper}>
            <img
              src={selectedMember.photo}
              alt={selectedMember.name}
              className={styles.modalImage}
            />
            <h3>{selectedMember.name}</h3>
            <p>{selectedMember.description}</p>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default TeamSection;
