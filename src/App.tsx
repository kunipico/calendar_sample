import { ScheduleCalendar } from "./component";

export const App = () => {
  const date = new Date();
  const schedules = [
    { name: "Schedule1", year: date.getFullYear(), month: date.getMonth() + 1, day: 20, color: "#ff0049" },
    { name: "Schedule2", year: date.getFullYear(), month: date.getMonth() + 1, day: 25, color: "#0ce7ff" },
    { name: "Schedule3", year: date.getFullYear(), month: date.getMonth() + 1, day: 25, color: "#68df00" },
  ];
  return (
    <div className="w-[100vw] p-0 sm:p-5 min-h-[100vh] flex justify-center items-center">
      <ScheduleCalendar schedules={schedules} className="w-[90%] h-[95vh] sm:w-[380px] sm:h-[380px]" startOnMonday />
    </div>
  );
};
