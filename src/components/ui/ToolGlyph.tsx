import {
  SiConfluence,
  SiCursor,
  SiFigma,
  SiGoogleanalytics,
  SiJira,
  SiMysql,
  SiPython,
} from "@icons-pack/react-simple-icons";

const size = 28;

function PowerBiMark() {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} aria-hidden="true">
      <rect x="5" y="17" width="5.5" height="10" rx="1.2" fill="#F2C811" />
      <rect x="13.25" y="11" width="5.5" height="16" rx="1.2" fill="#E6B800" />
      <rect x="21.5" y="5" width="5.5" height="22" rx="1.2" fill="#F2C811" />
    </svg>
  );
}

function ExcelMark() {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} aria-hidden="true">
      <path d="M7 5h14a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3z" fill="#185C37" />
      <path d="M10 5h14a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H10V5z" fill="#21A366" />
      <path d="M10 11h17v4H10V11zm0 6h17v4H10v-4z" fill="#107C41" opacity="0.9" />
      <path d="M4 10.5h11a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5H4V10.5z" fill="#33C481" />
      <path d="M7.2 13.2 9.5 16l-2.3 2.8h2.1L11 16.8l1.7 2.2h2.1L12.5 16l2.3-2.8h-2.1L11 15.2 9.3 13.2H7.2z" fill="#fff" />
    </svg>
  );
}

function TableauMark() {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} aria-hidden="true">
      <rect x="14.2" y="3" width="3.6" height="8.2" rx="1" fill="#E97627" />
      <rect x="14.2" y="20.8" width="3.6" height="8.2" rx="1" fill="#E97627" />
      <rect x="3" y="14.2" width="8.2" height="3.6" rx="1" fill="#E97627" />
      <rect x="20.8" y="14.2" width="8.2" height="3.6" rx="1" fill="#E97627" />
      <rect x="10.4" y="10.4" width="3.2" height="11.2" rx="1" fill="#5B9BD5" />
      <rect x="18.4" y="10.4" width="3.2" height="11.2" rx="1" fill="#5B9BD5" />
      <rect x="10.4" y="10.4" width="11.2" height="3.2" rx="1" fill="#5B9BD5" />
      <rect x="10.4" y="18.4" width="11.2" height="3.2" rx="1" fill="#5B9BD5" />
      <rect x="13.4" y="13.4" width="5.2" height="5.2" rx="1" fill="#1F4E79" />
    </svg>
  );
}

function SharePointMark() {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} aria-hidden="true">
      <circle cx="12" cy="12" r="7.5" fill="#036C70" />
      <circle cx="20.5" cy="11" r="6.2" fill="#1A9BA1" />
      <circle cx="16.5" cy="20" r="7" fill="#37C6D0" />
      <path
        d="M12.2 8.8c1.7 0 2.8.7 3.3 1.8H13.8c-.2-.5-.7-.8-1.5-.8-.9 0-1.6.7-1.6 1.7s.7 1.7 1.7 1.7c.7 0 1.2-.3 1.5-.8h1.7c-.4 1.2-1.6 2-3.3 2-2.1 0-3.5-1.4-3.5-3.2 0-1.8 1.4-3.2 3.4-3.2z"
        fill="#fff"
      />
    </svg>
  );
}

function MoreMark() {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} aria-hidden="true">
      <circle cx="8" cy="16" r="2.4" fill="#C9C9C9" />
      <circle cx="16" cy="16" r="2.4" fill="#C9C9C9" />
      <circle cx="24" cy="16" r="2.4" fill="#C9C9C9" />
    </svg>
  );
}

const brandIcons = {
  mysql: SiMysql,
  python: SiPython,
  figma: SiFigma,
  jira: SiJira,
  confluence: SiConfluence,
  cursor: SiCursor,
  ga: SiGoogleanalytics,
} as const;

export function ToolGlyph({ id }: { id: string }) {
  if (id in brandIcons) {
    const Icon = brandIcons[id as keyof typeof brandIcons];
    return <Icon color="default" size={size} aria-hidden="true" />;
  }

  switch (id) {
    case "powerbi":
      return <PowerBiMark />;
    case "excel":
      return <ExcelMark />;
    case "tableau":
      return <TableauMark />;
    case "sharepoint":
      return <SharePointMark />;
    default:
      return <MoreMark />;
  }
}
