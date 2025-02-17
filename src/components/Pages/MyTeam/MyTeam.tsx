import React from "react";
import { teamData } from "./MyTeamData";
import styles from "./MyTeam.module.css";
import Modal from "../../Modal/Modal";

const TeamSection: React.FC = () => {
  const [modalActive, setModalActive] = React.useState(false);
  const [selectedMember, setSelectedMember] = React.useState<
    null | (typeof teamData)[0]
  >(null);

  const openModal = (member: (typeof teamData)[0]) => {
    setSelectedMember(member);
    setModalActive(true);
  };

  return (
    <section className={styles.team}>
      <h2 className={styles.heading}>Команда Adventure Events</h2>
      <div className={styles.teamGrid}>
        {teamData.map((member) => (
          <div
            key={member.id}
            className={styles.teamMember}
            onClick={() => openModal(member)}
          >
            <img src={member.photo} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
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
