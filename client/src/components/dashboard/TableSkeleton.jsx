import { sc } from "./styles";

export default function TableSkeleton({ cols, rows = 4 }) {
  return (
    <table style={sc.table}>
      <thead><tr>{cols.map(h => <th key={h} style={sc.th}>{h}</th>)}</tr></thead>
      <tbody>
        {Array.from({ length: rows }).map((_, i) => (
          <tr key={i} style={sc.tr}>
            {cols.map((_, j) => (
              <td key={j} style={sc.td}>
                <div style={{ height:13, borderRadius:6, background:"rgba(30,58,138,0.07)", width: j===0?60:j===cols.length-1?68:"75%" }} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}