// import { useEffect, useState } from "react";
// import { getAllTopics } from "../../services/topicsService";

// export const TopicsFilter = () => {
//   const [topics, setAllTopics] = useState([]);

//   useEffect(() => {
//     getAllTopics().then((topicsArr) => {
//       setAllTopics(topicsArr);
//     });
//   }, []);

//   return (
//     <select
//       id="resource"
//       className="select"
//       onChange={(event) => {
//         console.log(event);
//       }}
//     >
//       <option value="0">Select Topic...</option>
//       {topics.map((topic) => {
//         return <option value={topic.id}>{topic.name}</option>;
//       })}
//     </select>
//   );
// };
