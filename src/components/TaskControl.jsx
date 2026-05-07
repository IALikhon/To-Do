import { ArrowDownWideNarrow } from "lucide-react";

const TaskControl = ({ showOnlyIncomplete, setShowOnlyIncomplete, sortTasks }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: "10px",
        marginTop: "20px",
      }}
    >
      <label style={{ display: "flex", alignItems: "center" }}>
        <input type="checkbox"
        checked= {showOnlyIncomplete}
        onChange={() => setShowOnlyIncomplete(!showOnlyIncomplete)}
        style={{ marginRight: "5px" }} />
        Show only incomplete
      </label>
      <button
      onClick={sortTasks}
        style={{
          backgroundColor: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <ArrowDownWideNarrow />
      </button>
    </div>
  );
};

export default TaskControl;
