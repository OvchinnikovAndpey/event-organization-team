import React from 'react';
import { teamData } from './MyTeamData';
import styles from './MyTeam.module.css';

const TeamSection: React.FC = () => {
  return (
    <section className={styles.team}>
      <h2>Наша команда</h2>
      <div className={styles.teamGrid}>
        {teamData.map(member => (
          <div key={member.id} className={styles.teamMember}>
            <img src={member.photo} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
