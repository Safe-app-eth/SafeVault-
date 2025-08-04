// Top of SafeTable.tsx
const SafeTable: React.FC<Props> = ({ safesByChain }) => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [filter, setFilter] = useState<string>("");

  const filtered = filter
    ? safesByChain
        .map((group) => ({
          ...group,
          safes: group.safes.filter((safe) =>
            safe.owners.some((o) =>
              o.toLowerCase().includes(filter.toLowerCase())
            )
          ),
        }))
        .filter((g) => g.safes.length > 0)
    : safesByChain;
  {/* Add above the table */}
<div style={{ marginBottom: "1rem" }}>
  <input
    type="text"
    placeholder="Filter by owner address"
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
    style={{
      padding: "0.5rem",
      borderRadius: "4px",
      border: "1px solid #ccc",
      width: "100%",
    }}
  />
</div>
  {/* Inside <ul> under expanded owner list */}
<li key={owner}>
  <code>{owner}</code>
  {owner.toLowerCase() === "0xafd5f60aa8eb4f488eaa0ef98c1c5b0645d9a0a0" && (
    <span style={{
      marginLeft: "0.5rem",
      padding: "0.2rem 0.4rem",
      background: "#00c292",
      color: "#fff",
      borderRadius: "3px",
      fontSize: "0.7rem"
    }}>
      You
    </span>
  )}
</li>
  
