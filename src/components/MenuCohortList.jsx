import { useState } from "react";

export default function MenuCohortList({ data, setCohortName }) {
  const cohortList = [...new Set(data.map(student => student.cohort.cohortCode))];

  const sortedCohortList = cohortList.sort((a, b) => a.slice(-1) - b.slice(-1));

  const formatCohortName = cohortName => {
    const trimmedName = cohortName.split('').filter(char => isNaN(char)).join('');
    const year = cohortName.slice(-4);
    return `${trimmedName} of ${year}`;
  };

  const handleCohortClick = cohortName => setCohortName(cohortName);

  return (
    <div className="cohort-list">
      <h2>Choose a Class by Start Date</h2>
      <ul>
        <li onClick={() => setCohortName("All Students")}>All Students</li>
        {sortedCohortList.map(cohortName => (
          <li key={cohortName} onClick={() => handleCohortClick(cohortName)}>
            {formatCohortName(cohortName)}
          </li>
        ))}
      </ul>
    </div>
  );
}
