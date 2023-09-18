import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";
const LineChart = () => {
  const studentData = [
    {
      id: 1,
      studentName: "Alice",
      mathScore: 85,
      physicsScore: 78,
      chemistryScore: 92,
    },
    {
      id: 2,
      studentName: "Bob",
      mathScore: 78,
      physicsScore: 82,
      chemistryScore: 89,
    },
    {
      id: 3,
      studentName: "Charlie",
      mathScore: 92,
      physicsScore: 88,
      chemistryScore: 94,
    },
    {
      id: 4,
      studentName: "David",
      mathScore: 88,
      physicsScore: 76,
      chemistryScore: 85,
    },
    {
      id: 5,
      studentName: "Eve",
      mathScore: 76,
      physicsScore: 90,
      chemistryScore: 91,
    },
    {
      id: 6,
      studentName: "Frank",
      mathScore: 94,
      physicsScore: 85,
      chemistryScore: 78,
    },
    {
      id: 7,
      studentName: "Grace",
      mathScore: 89,
      physicsScore: 92,
      chemistryScore: 88,
    },
    {
      id: 8,
      studentName: "Hannah",
      mathScore: 81,
      physicsScore: 78,
      chemistryScore: 76,
    },
    {
      id: 9,
      studentName: "Ian",
      mathScore: 90,
      physicsScore: 94,
      chemistryScore: 82,
    },
    {
      id: 10,
      studentName: "Jane",
      mathScore: 85,
      physicsScore: 89,
      chemistryScore: 90,
    },
  ];

  return (
    <div>
      <LChart width={900} height={400} data={studentData}>
        <XAxis dataKey="studentName"></XAxis>
        <YAxis></YAxis>
        <Line dataKey="mathScore" type="monotone" stroke="#8884d8"></Line>
        <Line dataKey="physicsScore" type="monotone" stroke="orange"></Line>
      </LChart>
    </div>
  );
};

export default LineChart;
