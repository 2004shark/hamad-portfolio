export const personalInfo = {
  name: "Hamad Moiz Chodhry",
  email: "hamadmoizchodhry@gmail.com",
  linkedin: "linkedin.com/in/hamad-moiz",
  location: "Pakistan | Remote | Open to UAE / EU / USA",
  phone: "+92-308-4268511",
  gpa: "3.86 / 4.0",
  university: "Air University, Multan, Pakistan",
  degree: "B.S. Cybersecurity",
  graduation: "Sep 2026 (Expected)",
  role: "Vice President, Air University Cyber Security Society (Oct 2025 – Present)",
  summaryBlue: "Cybersecurity professional with hands-on SOC operations, threat detection, incident response, and AI-driven security automation experience. Proficient in SIEM platforms (Wazuh, ELK Stack, IBM QRadar, FortiSIEM, Splunk), EDR/XDR (CrowdStrike, SentinelOne), IDS/IPS (Suricata, Snort, Zeek), and SOAR (FortiSOAR, TheHive, Cortex). Architected AetherGuard — an autonomous, multi-agent AI SIEM leveraging Claude API, Model Context Protocol (MCP), and LLM reasoning to automate Tier-1 alert triage, threat hunting, and detection rule generation, reducing MTTR by up to 90%. Strong foundation in MITRE ATT&CK, NIST CSF, and purple team operations.",
  summaryRed: "Offensive security professional with hands-on experience conducting end-to-end penetration tests across Active Directory environments, enterprise networks, and web applications. Expert in manual exploitation – privilege escalation chains, AD attack paths (Kerberoasting, AS-REP Roasting, Pass-the-Hash), OWASP Top 10 web flaws, and lateral movement – without relying solely on automated scanners. Engineered an autonomous AI penetration testing agent (Claude API, OpenAI API, MCP) integrated with Nmap, Metasploit, and Burp Suite – enabling human-supervised, scalable end-to-end exploitation workflows.",
}

export const blueTeam = {
  title: "SOC Analyst | AI Security Engineer | Detection Engineer",
  subtitle: "Blue Team — Defender",
  skills: [
    { category: "SIEM & SOC", items: ["Wazuh", "IBM QRadar", "ELK Stack", "FortiSIEM", "Splunk"], desc: "Rule tuning, log onboarding, alert triage, threat correlation, custom decoder development" },
    { category: "AI & Automation", items: ["AetherGuard AI SIEM", "Claude API", "OpenAI API", "MCP", "Python", "Bash", "PowerShell"], desc: "Automated alert triage, anomaly correlation, workflow automation" },
    { category: "SOAR & IR", items: ["FortiSOAR", "TheHive", "Cortex", "MISP", "Shuffle"], desc: "Playbook automation, incident triage, RCA documentation, IOC enrichment" },
    { category: "EDR / XDR", items: ["CrowdStrike EDR", "SentinelOne", "FortiXDR"], desc: "Behavioral analysis, threat containment, endpoint telemetry, malware triage" },
    { category: "IDS / IPS", items: ["Suricata", "Snort", "Zeek"], desc: "Rule authoring, signature tuning, network traffic analysis, C2 beaconing detection" },
    { category: "Threat Intel", items: ["IOC Correlation", "CVE Analysis", "OSINT", "Shodan", "Maltego", "MISP"], desc: "Threat actor profiling, attack surface management" },
    { category: "Frameworks", items: ["MITRE ATT&CK", "NIST CSF", "Cyber Kill Chain"], desc: "Detection engineering, playbook design, purple team collaboration" },
    { category: "Network & FW", items: ["FortiGate (NSE)", "pfSense"], desc: "Policy hardening, segmentation, perimeter defence, VPN, access control" },
    { category: "Active Directory", items: ["GPO Security", "AD Hardening"], desc: "Privileged access monitoring, Kerberoasting detection, Pass-the-Hash detection" },
    { category: "Compliance", items: ["ISO 27001", "SOC 2", "NIST CSF", "PCI-DSS"], desc: "Audit support, evidence collection, gap analysis" },
  ],
}

export const redTeam = {
  title: "Red Team Analyst | Penetration Tester | Offensive Security",
  subtitle: "Red Team — Attacker",
  skills: [
    { category: "Active Directory Attacks", items: ["Kerberoasting", "AS-REP Roasting", "Pass-the-Hash", "Pass-the-Ticket", "BloodHound", "DCSync", "Silver/Golden Ticket"], desc: "Domain Admin compromise, lateral movement" },
    { category: "Network Pentesting", items: ["Nmap", "Wireshark", "Netcat", "SMB", "FTP", "SSH", "RDP"], desc: "Port scanning, service enumeration, protocol abuse, VLAN hopping, firewall evasion" },
    { category: "Web App Pentesting", items: ["Burp Suite Pro", "SQLmap", "OWASP Top 10"], desc: "SQLi, XSS, CSRF, IDOR, LFI/RFI, authentication bypass, JWT attacks" },
    { category: "Exploit Tooling", items: ["Metasploit", "Impacket", "Mimikatz", "CrackMapExec", "PowerView", "PowerUp", "John the Ripper", "Hashcat", "Responder", "Evil-WinRM"], desc: "Full exploitation toolkit" },
    { category: "Recon & OSINT", items: ["Shodan", "theHarvester", "Maltego"], desc: "Attack surface mapping, credential leak identification, passive/active recon" },
    { category: "AI & Automation", items: ["Autonomous VAPT Agent", "Claude API", "OpenAI API", "MCP", "Python", "Bash", "PowerShell"], desc: "Automated exploitation pipelines, custom scanning integrations" },
    { category: "VAPT Reporting", items: ["Technical Reports", "CVSS", "Executive Summaries", "MITRE ATT&CK Mapping"], desc: "Remediation briefings for international stakeholders" },
    { category: "Purple Teaming", items: ["Suricata", "Wazuh", "ELK Stack"], desc: "Attack simulation, detection use case development, SOC playbook improvement" },
  ],
}

export const experiences = [
  {
    role: "SOC Analyst & AI Security Engineer",
    company: "SecureQuanta",
    location: "Ottawa, Canada (Remote)",
    period: "Jan 2025 – Present",
    team: "blue",
    highlights: [
      "Architected and deployed AetherGuard — an autonomous, multi-agent AI-powered SIEM using Claude API and Model Context Protocol (MCP) to automate 90% of Tier-1 alert triage, reducing investigation time from 20–40 minutes to under 5 minutes per alert.",
      "Designed a multi-agent SOC architecture comprising specialized AI agents (Investigator, Collector, Rule Creator, Threat Publisher) that collaborate autonomously across SIEM, SOAR, threat intelligence, and case management platforms without static playbooks.",
      "Integrated MCP server as a universal bridge between LLMs and enterprise SOC tools (Wazuh, ELK Stack, TheHive, MISP), enabling structured LLM-callable functions for log queries, IOC enrichment, and case creation.",
      "Implemented closed-loop defense automation: upon confirmed threat detection, AI agents autonomously generate and deploy new Sigma/SIEM detection rules, update MISP IOC feeds, and create TheHive investigation cases.",
      "Executed continuous security monitoring and alert triage across SIEM and EDR platforms; reduced MTTD through automated correlation rules and behavioral analysis aligned with MITRE ATT&CK and NIST CSF frameworks.",
      "Deployed and tuned Suricata IDS/IPS rules to detect port scans, brute-force attempts, lateral movement, and C2 beaconing; integrated detection workflows directly with FortiSIEM alert pipelines.",
      "Implemented ransomware containment via Wazuh Active Response — automated file quarantine and process kill scripts triggered by behavioral indicators.",
      "Monitored and triaged alerts across Wazuh and ELK Stack; performed log analysis, IOC correlation, and incident escalation per SOC playbooks.",
      "Configured Active Directory and GPO security baselines; detected credential-based attacks including Kerberoasting and Pass-the-Hash through authentication log analysis.",
      "Participated in purple team exercises — collaborated with offensive team to improve alerting, detection use cases, and IR playbooks based on simulated adversarial scenarios.",
      "Performed OSINT reconnaissance and attack surface mapping using Shodan and Maltego to proactively identify exposed assets, leaked credentials, and third-party risk.",
    ],
  },
  {
    role: "Red Team Analyst & Junior Penetration Tester",
    company: "SecureQuanta",
    location: "Ottawa, Canada (Remote)",
    period: "Jan 2025 – Present",
    team: "red",
    highlights: [
      "Conducted end-to-end penetration tests across internal networks, web applications, and Active Directory environments — identifying and exploiting 20+ critical vulnerabilities per engagement cycle.",
      "Executed full AD attack chains: Kerberoasting, AS-REP Roasting, Pass-the-Hash, credential dumping via PowerView, Mimikatz, and Impacket; achieved Domain Admin through lateral movement in multiple client engagements.",
      "Performed manual web application assessments across full OWASP Top 10 — SQL Injection (blind/error-based), Stored/Reflected XSS, CSRF, IDOR, File Inclusion, and Broken Authentication across diverse web stacks.",
      "Conducted network penetration tests including port scanning, service enumeration, protocol abuse (SMB, FTP, SSH, RDP), and firewall evasion to map complete attack surfaces.",
      "Engineered an autonomous AI penetration testing agent (Claude API, OpenAI API, MCP) integrated with Nmap, Metasploit, and Burp Suite — enabling human-supervised, scalable end-to-end exploitation workflows.",
      "Performed OSINT reconnaissance and attack surface mapping prior to active testing — identified exposed assets, leaked credentials, and misconfigurations for 100% pre-engagement coverage.",
      "Delivered detailed VAPT reports with CVSS severity ratings, exploitation evidence, and prioritized remediation strategies; presented findings to international stakeholders translating technical risk into business impact.",
      "Participated in purple team exercises — simulated MITRE ATT&CK techniques and collaborated with SOC teams to improve alerting, detection use cases, and incident response playbooks.",
    ],
  },
  {
    role: "Network Security Analyst",
    company: "VentureDive",
    location: "Lahore, Pakistan",
    period: "Aug 2024 – Sep 2024",
    team: "both",
    highlights: [
      "Assessed and hardened enterprise network perimeter; identified critical misconfigurations in FortiGate firewall policies and implemented corrective segmentation and access control rules.",
      "Integrated FortiGate with Wazuh SIEM via custom decoders and correlation rules, improving real-time threat visibility and enabling automated alerting across network segments.",
      "Investigated endpoint security incidents using CrowdStrike EDR; traced attack vectors and produced Root Cause Analysis (RCA) documentation for remediation teams.",
    ],
  },
]

export const projects = [
  {
    title: "AetherGuard — Autonomous SOC with Agentic AI",
    subtitle: "Blue Team Project",
    team: "blue",
    description: "Next-generation autonomous SOC platform using agentic AI (Claude 3.5 Sonnet, GPT-4o) and a custom MCP Server (TypeScript/Python) as the universal bridge between LLMs and security tools.",
    highlights: [
      "Four specialized AI agents: Investigator (lead analyst & orchestrator), Collector (forensic log retrieval via MCP tools), Rule Creator (Sigma/SIEM rule generation), and Threat Publisher (automated IOC updates to MISP & SIEM threat lists).",
      "Leveraged Claude's 200K token context window to deep-read entire investigation logs, PCAP summaries, and threat feeds within a single prompt.",
      "Integrated technology stack: Wazuh (SIEM/XDR), OpenSearch/Elasticsearch (data lake), MISP (threat intel), TheHive (case management), Shuffle/n8n (workflow automation), PostgreSQL/SQLite (rule/IOC storage).",
      "Demonstrated 90% MTTR reduction in simulated SOC environment; 100% alert coverage with automated Markdown audit trails and compliance documentation.",
    ],
  },
  {
    title: "Autonomous AI Penetration Testing Agent",
    subtitle: "Red Team Project",
    team: "red",
    description: "Fully automated VAPT pipeline (Claude API, OpenAI API, MCP) integrated with Nmap, Metasploit, and Burp Suite. Agent autonomously scans targets, identifies exploitable vulnerabilities, selects attack vectors, and requests operator approval before each kill chain phase.",
    highlights: [
      "Enables scalable, human-supervised end-to-end exploitation workflows that significantly cut manual triage time.",
      "Integrates with industry-standard pentesting tools for real-world attack simulation.",
      "Operator-in-the-loop design ensures safety and control over each kill chain phase.",
    ],
  },
  {
    title: "Active Directory Red Team Lab",
    subtitle: "Red Team Project",
    team: "red",
    description: "Multi-phase AD attack simulation: initial foothold, internal enumeration (PowerView, BloodHound), Kerberoasting, AS-REP Roasting, Pass-the-Hash, lateral movement, and Domain Admin compromise.",
    highlights: [
      "Full attack chain documented with MITRE ATT&CK technique mappings and remediation recommendations.",
      "Demonstrates complete AD compromise lifecycle from initial access to domain dominance.",
    ],
  },
  {
    title: "Web Application Penetration Test — DVWA",
    subtitle: "Red Team Project",
    team: "red",
    description: "Complete manual web assessment targeting all OWASP Top 10: SQL Injection (blind/error-based), Stored/Reflected XSS, CSRF, LFI/RFI, and Command Injection.",
    highlights: [
      "Each finding documented with Proof-of-Concept (PoC) exploits and CVSS scores.",
      "Integrated Wazuh/Suricata for detection validation — achieved 95% threat detection accuracy.",
    ],
  },
  {
    title: "Advanced Network Pentesting & Segmentation",
    subtitle: "Red Team Project",
    team: "red",
    description: "Designed and attacked a multi-segment enterprise network (pfSense, Security Onion, honeypots) — tested for VLAN hopping, firewall rule bypass, and lateral movement paths.",
    highlights: [
      "All findings mapped to Cyber Kill Chain phases for remediation gap analysis.",
    ],
  },
  {
    title: "LLM Guard — Prompt Injection Detection",
    subtitle: "Applied Security Research",
    team: "both",
    description: "Real-time latent-based classifier to detect and block prompt injection and jailbreak attempts against LLM-powered applications — applied vulnerability research in emerging AI attack surfaces.",
    highlights: [
      "Demonstrates proactive defense against evolving AI-specific attack vectors.",
    ],
  },
  {
    title: "Automated Threat Detection Pipeline",
    subtitle: "Blue Team Project",
    team: "blue",
    description: "End-to-end automated detection and response system integrating Wazuh, Cortex, MISP, and TheHive; reduced MTTR through automated alert enrichment and case creation with full IOC lifecycle management.",
    highlights: [],
  },
]

export const certifications = [
  { name: "ISC2 Certified in Cybersecurity (CC)", issuer: "ISC2" },
  { name: "Certified Red Team Analyst (CRTA)", issuer: "CRTA" },
  { name: "Fortinet Certified Associate — Cybersecurity", issuer: "Fortinet" },
  { name: "FortiGate 7.6 Operator (NSE)", issuer: "Fortinet" },
  { name: "Ethical Hacking Essentials (EHE)", issuer: "EC-Council" },
  { name: "Certified Ethical Hacker (CEH)", issuer: "EC-Council", status: "In Progress" },
  { name: "Introduction to Cybersecurity", issuer: "Cisco" },
  { name: "External Attack Surface with Azure", issuer: "Microsoft" },
  { name: "Fundamentals of Dark Web", issuer: "EC-Council" },
]
