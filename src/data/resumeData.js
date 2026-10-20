export const personalInfo = {
  name: "Hamad Moiz Chodhry",
  email: "hamadmoizchodhry@gmail.com",
  location: "Pakistan · Remote · Open to UAE / EU / USA",
  phone: "+92-308-4268511",
  gpa: "3.86 / 4.0",
  university: "Air University, Multan, Pakistan",
  degree: "B.S. Cybersecurity",
  graduation: "Sep 2026 (expected)",
  role: "Vice President, Air University Cyber Security Society (Oct 2025 – present)",
  tagline: "SOC Analyst · Penetration Tester · AI Security Engineer",
  summaryBlue:
    "I work on the defensive side: SOC operations, detection engineering, and incident response. Day to day that means SIEM work across Wazuh, ELK, QRadar, FortiSIEM, and Splunk, EDR/XDR triage, and IDS/IPS tuning with Suricata, Snort, and Zeek. I built AetherGuard, a multi-agent AI SIEM that uses the Claude API and Model Context Protocol to handle routine Tier-1 triage and write detection rules, cutting alert investigation time from 20–40 minutes to under 5 in our test environment. I map detection and response work to MITRE ATT&CK and NIST CSF.",
  summaryRed:
    "I also work on the offensive side: penetration testing across Active Directory, enterprise networks, and web applications. That means manual exploitation, not just running scanners: privilege escalation, AD attack paths such as Kerberoasting, AS-REP Roasting and Pass-the-Hash, OWASP Top 10 flaws, and lateral movement. I built an autonomous AI pentesting agent (Claude API, OpenAI API, MCP) wired into Nmap, Metasploit, and Burp Suite, with operator approval required at each phase of the kill chain.",
  social: {
    github: "https://github.com/2004shark",
    linkedin: "https://linkedin.com/in/hamad-moiz",
    email: "hamadmoizchodhry@gmail.com",
    phone: "+92-308-4268511",
  },
}

export const blueTeam = {
  label: "Defensive",
  title: "SOC Analyst · AI Security Engineer · Detection Engineer",
  skills: [
    {
      category: "SIEM & SOC",
      items: ["Wazuh", "IBM QRadar", "ELK Stack", "FortiSIEM", "Splunk"],
      desc: "Rule tuning, log onboarding, alert triage, correlation, custom decoders",
    },
    {
      category: "AI & Automation",
      items: ["AetherGuard", "Claude API", "OpenAI API", "MCP", "Python", "Bash", "PowerShell"],
      desc: "Alert triage automation, anomaly correlation, workflow scripting",
    },
    {
      category: "SOAR & IR",
      items: ["FortiSOAR", "TheHive", "Cortex", "MISP", "Shuffle"],
      desc: "Playbook automation, incident triage, root cause write-ups, IOC enrichment",
    },
    {
      category: "EDR / XDR",
      items: ["CrowdStrike", "SentinelOne", "FortiXDR"],
      desc: "Behavioural analysis, containment, endpoint telemetry, malware triage",
    },
    {
      category: "IDS / IPS",
      items: ["Suricata", "Snort", "Zeek"],
      desc: "Rule authoring, signature tuning, traffic analysis, C2 beacon detection",
    },
    {
      category: "Threat Intel",
      items: ["IOC correlation", "CVE analysis", "OSINT", "Shodan", "Maltego", "MISP"],
      desc: "Threat actor profiling, attack surface management",
    },
    {
      category: "Frameworks",
      items: ["MITRE ATT&CK", "NIST CSF", "Cyber Kill Chain"],
      desc: "Detection engineering, playbook design, purple team collaboration",
    },
    {
      category: "Network & Firewall",
      items: ["FortiGate (NSE)", "pfSense"],
      desc: "Policy hardening, segmentation, perimeter defence, VPN, access control",
    },
    {
      category: "Active Directory",
      items: ["GPO security", "AD hardening"],
      desc: "Privileged access monitoring, Kerberoasting and PtH detection",
    },
    {
      category: "Compliance",
      items: ["ISO 27001", "SOC 2", "NIST CSF", "PCI-DSS"],
      desc: "Audit support, evidence collection, gap analysis",
    },
  ],
}

export const redTeam = {
  label: "Offensive",
  title: "Red Team Analyst · Penetration Tester",
  skills: [
    {
      category: "Active Directory Attacks",
      items: ["Kerberoasting", "AS-REP Roasting", "Pass-the-Hash", "Pass-the-Ticket", "BloodHound", "DCSync", "Silver/Golden Ticket"],
      desc: "Domain Admin compromise, lateral movement",
    },
    {
      category: "Network Pentesting",
      items: ["Nmap", "Wireshark", "Netcat", "SMB", "FTP", "SSH", "RDP"],
      desc: "Port scanning, service enumeration, protocol abuse, VLAN hopping, firewall evasion",
    },
    {
      category: "Web App Pentesting",
      items: ["Burp Suite Pro", "SQLmap", "OWASP Top 10"],
      desc: "SQLi, XSS, CSRF, IDOR, LFI/RFI, auth bypass, JWT attacks",
    },
    {
      category: "Exploit Tooling",
      items: ["Metasploit", "Impacket", "Mimikatz", "CrackMapExec", "PowerView", "PowerUp", "John the Ripper", "Hashcat", "Responder", "Evil-WinRM"],
      desc: "Full exploitation toolkit",
    },
    {
      category: "Recon & OSINT",
      items: ["Shodan", "theHarvester", "Maltego"],
      desc: "Attack surface mapping, credential leak identification, passive and active recon",
    },
    {
      category: "AI & Automation",
      items: ["VAPT agent", "Claude API", "OpenAI API", "MCP", "Python", "Bash", "PowerShell"],
      desc: "Automated exploitation pipelines, custom scanner integrations",
    },
    {
      category: "VAPT Reporting",
      items: ["Technical reports", "CVSS", "Executive summaries", "MITRE ATT&CK mapping"],
      desc: "Remediation briefings for international stakeholders",
    },
    {
      category: "Purple Teaming",
      items: ["Suricata", "Wazuh", "ELK Stack"],
      desc: "Attack simulation, detection use case development, SOC playbook improvement",
    },
  ],
}

export const experiences = [
  {
    role: "SOC Analyst & AI Security Engineer",
    company: "SecureQuanta",
    location: "Ottawa, Canada (remote)",
    period: "Jan 2025 – present",
    team: "blue",
    highlights: [
      "Built and deployed AetherGuard, a multi-agent AI SIEM on the Claude API and Model Context Protocol, which automates routine Tier-1 alert triage and cut investigation time from 20–40 minutes to under 5 per alert.",
      "Designed the agent architecture: separate Investigator, Collector, Rule Creator, and Threat Publisher agents that work across SIEM, SOAR, threat intel, and case management tools without static playbooks.",
      "Wrote an MCP server as the bridge between LLMs and SOC tooling (Wazuh, ELK, TheHive, MISP), exposing log queries, IOC enrichment, and case creation as callable functions.",
      "Closed the loop on detections: confirmed threats trigger generated Sigma/SIEM rules, MISP IOC updates, and TheHive investigation cases.",
      "Ran continuous monitoring and alert triage across SIEM and EDR platforms, with correlation rules and behavioural analysis mapped to MITRE ATT&CK and NIST CSF.",
      "Deployed and tuned Suricata rules for port scans, brute force, lateral movement, and C2 beaconing, wired into FortiSIEM alert pipelines.",
      "Implemented ransomware containment in Wazuh Active Response: automated file quarantine and process kill on behavioural indicators.",
      "Triaged alerts in Wazuh and ELK, performing log analysis, IOC correlation, and escalation per SOC playbooks.",
      "Hardened Active Directory and GPO baselines and detected credential attacks, including Kerberoasting and Pass-the-Hash, from authentication logs.",
      "Ran purple team exercises with the offensive team to improve alerting, detection use cases, and IR playbooks from simulated attack scenarios.",
      "Did OSINT and attack surface mapping with Shodan and Maltego to surface exposed assets, leaked credentials, and third-party risk.",
    ],
  },
  {
    role: "Red Team Analyst & Junior Penetration Tester",
    company: "SecureQuanta",
    location: "Ottawa, Canada (remote)",
    period: "Jan 2025 – present",
    team: "red",
    highlights: [
      "Ran end-to-end penetration tests across internal networks, web applications, and Active Directory environments, finding and exploiting 20+ critical vulnerabilities per engagement cycle.",
      "Executed full AD attack chains: Kerberoasting, AS-REP Roasting, Pass-the-Hash, credential dumping with PowerView, Mimikatz, and Impacket, reaching Domain Admin through lateral movement on multiple client engagements.",
      "Tested web applications manually across the OWASP Top 10: blind and error-based SQL injection, stored and reflected XSS, CSRF, IDOR, file inclusion, and broken authentication across several web stacks.",
      "Ran network penetration tests covering port scanning, service enumeration, protocol abuse (SMB, FTP, SSH, RDP), and firewall evasion to map the full attack surface.",
      "Built an autonomous AI pentesting agent (Claude API, OpenAI API, MCP) integrated with Nmap, Metasploit, and Burp Suite for human-supervised, repeatable exploitation workflows.",
      "Did OSINT and attack surface mapping before each engagement to find exposed assets, leaked credentials, and misconfigurations.",
      "Wrote VAPT reports with CVSS ratings, exploitation evidence, and prioritised remediation, and presented findings to international stakeholders in business terms.",
      "Ran purple team exercises, simulating MITRE ATT&CK techniques and working with SOC teams on alerting, detection use cases, and response playbooks.",
    ],
  },
  {
    role: "Network Security Analyst",
    company: "VentureDive",
    location: "Lahore, Pakistan",
    period: "Aug 2024 – Sep 2024",
    team: "both",
    highlights: [
      "Reviewed and hardened the enterprise network perimeter; found critical misconfigurations in FortiGate firewall policies and put corrective segmentation and access control rules in place.",
      "Integrated FortiGate with Wazuh through custom decoders and correlation rules, giving real-time threat visibility and automated alerting across network segments.",
      "Investigated endpoint incidents with CrowdStrike EDR, traced attack vectors, and wrote root cause analysis documentation for remediation teams.",
    ],
  },
]

export const projects = [
  {
    title: "AetherGuard — Autonomous SOC with Agentic AI",
    subtitle: "Defensive",
    team: "blue",
    description:
      "An autonomous SOC platform built on agentic AI and a custom MCP server that acts as the bridge between LLMs and security tooling.",
    highlights: [
      "Four agents: Investigator (lead analyst and orchestrator), Collector (forensic log retrieval via MCP tools), Rule Creator (Sigma/SIEM rule generation), and Threat Publisher (IOC updates to MISP and SIEM threat lists).",
      "Uses Claude's long context window to read full investigation logs, PCAP summaries, and threat feeds in one prompt.",
      "Stack: Wazuh, OpenSearch/Elasticsearch, MISP, TheHive, Shuffle/n8n, PostgreSQL/SQLite.",
      "Cut MTTR in a simulated SOC environment and produced automated Markdown audit trails for compliance.",
    ],
    techStack: ["Claude API", "MCP", "Wazuh", "OpenSearch", "TheHive", "MISP", "Python", "TypeScript"],
  },
  {
    title: "Autonomous AI Penetration Testing Agent",
    subtitle: "Offensive",
    team: "red",
    description:
      "An automated VAPT pipeline (Claude API, OpenAI API, MCP) integrated with Nmap, Metasploit, and Burp Suite. The agent scans targets, identifies exploitable vulnerabilities, picks attack vectors, and asks the operator before each kill chain phase.",
    highlights: [
      "Makes repeatable, human-supervised exploitation workflows practical at scale.",
      "Drives real industry pentesting tools rather than simulated output.",
      "Operator-in-the-loop design keeps control of each phase.",
    ],
    techStack: ["Claude API", "OpenAI", "MCP", "Nmap", "Metasploit", "Burp Suite", "Python"],
  },
  {
    title: "Active Directory Red Team Lab",
    subtitle: "Offensive",
    team: "red",
    description:
      "A multi-phase AD attack simulation covering initial foothold, internal enumeration (PowerView, BloodHound), Kerberoasting, AS-REP Roasting, Pass-the-Hash, lateral movement, and Domain Admin compromise.",
    highlights: [
      "Full attack chain documented with MITRE ATT&CK technique mappings and remediation notes.",
    ],
    techStack: ["BloodHound", "PowerView", "Mimikatz", "Impacket", "Hashcat", "Evil-WinRM"],
  },
  {
    title: "Web Application Penetration Test — DVWA",
    subtitle: "Offensive",
    team: "red",
    description:
      "A complete manual web assessment across the OWASP Top 10: blind and error-based SQL injection, stored and reflected XSS, CSRF, LFI/RFI, and command injection.",
    highlights: [
      "Each finding documented with proof-of-concept exploits and CVSS scores.",
      "Validated detections in Wazuh and Suricata alongside the test.",
    ],
    techStack: ["Burp Suite", "SQLmap", "Wazuh", "Suricata", "OWASP Top 10"],
  },
  {
    title: "Network Pentesting & Segmentation Review",
    subtitle: "Offensive",
    team: "red",
    description:
      "Designed and attacked a multi-segment enterprise network (pfSense, Security Onion, honeypots), testing VLAN hopping, firewall rule bypass, and lateral movement paths.",
    highlights: ["Findings mapped to Cyber Kill Chain phases for remediation gap analysis."],
    techStack: ["Nmap", "Wireshark", "pfSense", "Security Onion", "Metasploit"],
  },
  {
    title: "LLM Guard — Prompt Injection Detection",
    subtitle: "Research",
    team: "both",
    description:
      "A real-time latent-based classifier that detects and blocks prompt injection and jailbreak attempts against LLM-powered applications.",
    highlights: ["Research into defensive techniques for AI-specific attack surfaces."],
    techStack: ["Python", "LLM Security", "ML Classification", "OpenAI"],
  },
  {
    title: "Automated Threat Detection Pipeline",
    subtitle: "Defensive",
    team: "blue",
    description:
      "An end-to-end detection and response system integrating Wazuh, Cortex, MISP, and TheHive, with automated alert enrichment and case creation across the IOC lifecycle.",
    highlights: [],
    techStack: ["Wazuh", "Cortex", "MISP", "TheHive", "Python"],
  },
]

export const publications = [
  {
    title:
      "Towards Intelligent And Autonomous SOCs: Enabling LLM-Driven, MCP-Integrated, Multi-Agent Security Operations",
    authors: "Hamad Moiz Chodhry",
    venue: "Theses Journal — Computer Science & Engineering",
    year: "2025",
    url: "https://thesesjournal.com/index.php/1/article/view/2719",
    pdfUrl: "/hamad-portfolio/research/ai-soc-paper.pdf",
    abstract:
      "This research presents an architecture for autonomous Security Operations Centers that integrates Large Language Models with the Model Context Protocol to create multi-agent security operations. Four specialized agents — Investigator, Collector, Rule Creator, and Threat Publisher — collaborate across SIEM, SOAR, threat intelligence, and case management platforms. MCP acts as the bridge between LLMs and enterprise security tools, exposing structured functions for log queries, IOC enrichment, and case creation. The system reduced Mean Time to Respond and produced automated audit trails for every investigation.",
    tags: ["AI Security", "LLM", "MCP", "SOC Automation", "Multi-Agent Systems", "Threat Detection"],
    topics: [
      {
        title: "AI Security & Prompt Injection",
        desc: "Detecting and mitigating prompt injection attacks against LLM-powered applications.",
      },
      {
        title: "Android Forensics using MCP",
        desc: "Using Model Context Protocol for Android forensic data extraction and analysis.",
      },
      {
        title: "Zero Trust Architecture",
        desc: "Applying zero trust principles to enterprise network security architecture.",
      },
      {
        title: "Detection Engineering",
        desc: "Sigma rule development and detection engineering for enterprise SOC environments.",
      },
      {
        title: "Threat Intelligence Automation",
        desc: "Automating threat intelligence feeds and IOC lifecycle management with MISP and TheHive.",
      },
    ],
  },
]

export const certifications = [
  { name: "ISC2 Certified in Cybersecurity (CC)", issuer: "ISC2" },
  { name: "Certified Red Team Analyst (CRTA)", issuer: "CRTA" },
  { name: "Fortinet Certified Associate — Cybersecurity", issuer: "Fortinet" },
  { name: "FortiGate 7.6 Operator (NSE)", issuer: "Fortinet" },
  { name: "Ethical Hacking Essentials (EHE)", issuer: "EC-Council" },
  { name: "Certified Ethical Hacker (CEH)", issuer: "EC-Council", status: "In progress" },
  { name: "Introduction to Cybersecurity", issuer: "Cisco" },
  { name: "External Attack Surface with Azure", issuer: "Microsoft" },
  { name: "Fundamentals of Dark Web", issuer: "EC-Council" },
]