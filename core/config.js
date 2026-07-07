// config.js – Metadaten (klein, immer geladen). Die eigentlichen Fragen liegen in src/data/*.js
// und werden per dynamischem import() erst geladen, wenn eine Kategorie gebraucht wird.

// Welche Kategorie liegt in welcher Datei? Der Loader importiert nur bei Bedarf.
export const CATEGORIES = {
  net: {
    label: "Netzwerktechnik",
    load: () => import("../data/net.js"),
    topics: ["OSI-Modell","IP-Adressen","Subnetting","IPv6","Protokolle/Ports","DHCP","DNS","ARP","NAT/PAT","Firewall","VLAN","VPN","WLAN","ICMP/Tools","Verkabelung","MAC-Adressen","Routing"]
  },
  sys: {
    label: "Hardware & Systeme",
    load: () => import("../data/sys.js"),
    topics: ["CPU/Hardware","Arbeitsspeicher","Massenspeicher","RAID","NAS/SAN","Betriebssysteme","Virtualisierung","Cloud Computing","Serverdienste","Linux/CLI","Container"]
  },
  sec: {
    label: "IT-Sicherheit & Recht",
    load: () => import("../data/sec.js"),
    topics: ["IT-Sicherheit","Malware","Angriffe","Verschlüsselung","DSGVO","BSI-Grundschutz","Backup","OS-Härtung","Logging","Schutzbedarf"]
  },
  dev: {
    label: "Datenbanken & Programmierung",
    load: () => import("../data/dev.js"),
    topics: ["ER-Modell","Normalisierung","SQL","Pseudocode","Schreibtischtest","UML-Anwendungsfall","UML-Klassendiagramm","UML-Aktivitätsdiagramm"]
  },
  biz: {
    label: "Wirtschaft & Projekt",
    load: () => import("../data/biz.js"),
    topics: ["IT-Mathe","Energiekosten","Handelskalkulation","Nutzwertanalyse","Leasing/Darlehen","Kaufvertrag/Recht","Projektmanagement","Pflichten-/Lastenheft","Netzplan/Gantt","SMART","4-Ohren-Modell","Marktformen","Schulungen","QR-Code","Englischer Text"]
  }
};

// Welches Thema wird von welchen Generatoren bedient (für unbegrenzte Rechenaufgaben)
export const GEN_BY_TOPIC = {
  "IT-Mathe": ["binToDec","decToBin","decToHex","hexToDec","transferTime"],
  "Subnetting": ["subnetHosts","subnetMask","subnetNetwork","subnetBroadcast","subnetCount"],
  "Energiekosten": ["energyDay","energyCost"],
  "Handelskalkulation": ["discount","vat"],
  "RAID": ["raidCap"]
};

// Schnelles Nachschlagen: Thema -> Kategorie-Key
export const TOPIC_TO_CAT = (() => {
  const m = {};
  for (const [key, def] of Object.entries(CATEGORIES)) {
    def.topics.forEach(t => { m[t] = key; });
  }
  return m;
})();

// Statische Fragenzahl pro Thema – fürs Anzeigen der Badges OHNE alle Daten zu laden.
// (Wird einmalig generiert; bei Änderungen an den Daten neu eintragen oder per Build-Skript erzeugen.)
export const STATIC_COUNTS = {
  "OSI-Modell":15,"IP-Adressen":13,"Subnetting":19,"IPv6":14,"Protokolle/Ports":19,"DHCP":6,"DNS":9,"ARP":4,"NAT/PAT":4,"Firewall":4,"VLAN":7,"VPN":7,"WLAN":7,"ICMP/Tools":7,"Verkabelung":7,"MAC-Adressen":4,"Routing":3,"CPU/Hardware":14,"Arbeitsspeicher":8,"Massenspeicher":8,"RAID":11,"NAS/SAN":6,"Betriebssysteme":18,"Virtualisierung":10,"Cloud Computing":13,"Serverdienste":9,"Linux/CLI":5,"Container":5,"IT-Sicherheit":13,"Malware":9,"Angriffe":12,"Verschlüsselung":11,"DSGVO":13,"BSI-Grundschutz":7,"Backup":11,"OS-Härtung":5,"Logging":4,"Schutzbedarf":3,"ER-Modell":10,"Normalisierung":7,"SQL":21,"Pseudocode":10,"Schreibtischtest":4,"UML-Anwendungsfall":4,"UML-Klassendiagramm":5,"UML-Aktivitätsdiagramm":4,"IT-Mathe":20,"Energiekosten":6,"Handelskalkulation":7,"Nutzwertanalyse":6,"Leasing/Darlehen":6,"Kaufvertrag/Recht":7,"Projektmanagement":7,"Pflichten-/Lastenheft":5,"Netzplan/Gantt":5,"SMART":2,"4-Ohren-Modell":3,"Marktformen":3,"Schulungen":2,"QR-Code":3,"Englischer Text":7
}; // automatisch generiert via build-counts
