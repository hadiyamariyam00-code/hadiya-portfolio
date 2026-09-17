import React,{useEffect} from "react";

const styles = {
  page: {
    minHeight: "100vh",
    background: "#0d1210",
    color: "#d6e2dc",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    lineHeight: 1.6,
  },
  wrap: {
    maxWidth: 720,
    margin: "0 auto",
    padding: "64px 24px 96px",
  },
  back: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    color: "#7d9188",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontFamily: "'JetBrains Mono', 'SF Mono', Consolas, monospace",
    fontSize: 13,
    marginBottom: 48,
    padding: 0,
  },
  statusRow: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 12,
    color: "#5ee3a5",
    marginBottom: 18,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: "#5ee3a5",
    boxShadow: "0 0 8px #5ee3a5",
  },
  h1: {
    fontSize: 40,
    fontWeight: 650,
    letterSpacing: "-0.01em",
    margin: "0 0 8px",
    color: "#f2f7f4",
  },
  stackLine: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 13,
    color: "#7d9188",
    margin: "0 0 56px",
  },
  h2: {
    fontSize: 15,
    fontFamily: "'JetBrains Mono', monospace",
    color: "#e3b95e",
    fontWeight: 500,
    margin: "0 0 16px",
    paddingBottom: 10,
    borderBottom: "1px solid #223028",
  },
  section: { marginBottom: 48 },
  p: { margin: "0 0 14px", fontSize: 16 },
  diagram: {
    background: "#131a17",
    border: "1px solid #223028",
    borderRadius: 4,
    padding: "20px 24px",
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 13,
    color: "#5ee3a5",
    lineHeight: 1.8,
    overflowX: "auto",
    whiteSpace: "pre",
    marginBottom: 16,
  },
  agent: { color: "#e3b95e" },
  screens: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: 14,
  },
  screenCard: {
    background: "#131a17",
    border: "1px solid #223028",
    borderRadius: 4,
    padding: 14,
  },
  screenNum: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 11,
    color: "#2f7c5b",
    marginBottom: 6,
  },
  callout: {
    background: "#131a17",
    borderLeft: "2px solid #e3b95e",
    borderRadius: "0 4px 4px 0",
    padding: "16px 20px",
  },
  btn: {
    display: "inline-block",
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 13,
    color: "#0d1210",
    background: "#5ee3a5",
    textDecoration: "none",
    padding: "10px 18px",
    borderRadius: 3,
  },
};

const screenshots = [
  "Login / role selection",
  "Admin dashboard — lab overview",
  "Staff — live monitoring",
  "Lab Assistant dashboard",
  "Student dashboard",
  "Attendance tracking",
  "Complaints view",
  "Remote action controls",
];


function SmartLabCaseStudy({ onBack }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={styles.page}>
      <div style={styles.wrap}>
        <button type="button" onClick={onBack} style={styles.back}>
          ← back to portfolio
        </button>

        <div style={styles.statusRow}>
          <span style={styles.dot}></span>
          <span> PROJECT DETAILS — CODE + SCREENSHOT REFERENCE</span>
        </div>

        <h1 style={styles.h1}>SmartLab</h1>
        <p style={styles.stackLine}>Team project · Django · MySQL · JavaScript · Bootstrap</p>

        <section style={styles.section}>
          <h2 style={styles.h2}>Problem</h2>
          <p style={styles.p}>
            Most colleges follow semi-manual or traditional lab management practices. These systems lack 
            centralized control and real-time monitoring. Lab allocation is often done manually, and 
            supervision during lab sessions depends mainly on physical presence or CCTV monitoring.
          </p>
          <p style={styles.p}>
            SmartLab gives lab staff live visibility into the machines they're
            responsible for, and gives every role, Admin, Staff, Lab Assistant,
            Student, a dashboard scoped to what they actually need to do.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>My Role</h2>
          <p style={styles.p}>
            I built the entire web application: frontend, backend, and
            database along with a teammate, while other two teammates built a companion mobile app separately.
          </p>
          <ul>
            <li>Designed the MySQL schema for lab allocation, attendance, and complaints</li>
            <li>Built role-based authentication and dashboards for four user types</li>
            <li>Implemented live monitoring views and remote actions (shutdown, restart, process kill) in Django</li>
            <li>Wired up the JavaScript/Bootstrap frontend for each dashboard</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>Architecture</h2>
          <div style={styles.diagram}>
{`Browser (Bootstrap / JS dashboards)
        │
        ▼
Django (views, auth, role-based routing)
        │
        ▼
MySQL (lab allocation, attendance, complaints, users)

`}<span style={styles.agent}>{`Monitoring agent — local screenshot/webcam capture
runs separately on lab machines, reports to Django`}</span>
          </div>
          <p style={styles.p}>
            The monitoring agent is architecturally separate from the main
            request/response flow, part of why it can't be hosted as a public demo.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>Key Screens</h2>
          <div style={styles.screens}>
            {screenshots.map((label, i) => (
              <div style={styles.screenCard} key={i}>
                <div style={styles.screenNum}>{String(i + 1).padStart(2, "0")}</div>
                <div>{label}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>Why No Live Demo</h2>
          <div style={styles.callout}>
            <p style={styles.p}>
              The monitoring feature depends on local Windows/webcam access on
              lab machines, so it can't be hosted as a public web demo that
              was true of the original deployment too, not just this write-up.
            </p>
            <p style={{ ...styles.p, marginBottom: 0 }}>
              What's on GitHub is a
              code-and-screenshot archive rebuilt from the final project
              report.A reference, not a clone-and-run repo.
            </p>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>What I'd Improve</h2>
          <ul>
            <li>Rebuild the repo under proper version control from day one</li>
            <li>Add automated tests around role-based access control</li>
            <li>Document the monitoring agent's data handling protocol clearly</li>
            <li>Add a visible consent/disclosure step in the student-facing flow</li>
          </ul>
        </section>

        <a
          href="https://github.com/hadiyamariyam00-code/smartlab" // update link
          style={styles.btn}
          target="_blank"
          rel="noopener noreferrer"
        >
          View code on GitHub
        </a>
      </div>
    </div>
  );
}

export default SmartLabCaseStudy;