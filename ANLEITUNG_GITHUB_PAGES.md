# App online stellen (GitHub Pages) – aktualisierte Version

Diese Version hat **498 Fragen** (inkl. neuer Systemintegration-Themen: Routing, Linux/CLI, Container,
Active Directory, Cloud/Virtualisierung, Storage, IT-Sicherheit) und ein **modernisiertes Design**.

## Dateien, die ins Repo gehören
```
index.html
styles.css
main.js
.nojekyll
core/   (config.js, ui.js, quiz.js, loader.js, generators.js, storage.js)
data/   (net.js, sys.js, sec.js, dev.js, biz.js)
README.md, LICENSE
```

## Wenn du schon ein GitHub-Repo hast
Lade einfach die geänderten Dateien neu hoch (überschreiben):
`index.html`, `styles.css`, `core/config.js`, `data/net.js`, `data/sys.js`, `data/sec.js`
(und `.nojekyll`, falls noch nicht vorhanden). Nach ~1 Min ist die Seite aktualisiert.

Per Git:
```bash
git add index.html styles.css core/config.js data/net.js data/sys.js data/sec.js .nojekyll
git commit -m "Design modernisiert + 75 neue Systemintegration-Fragen"
git push
```

## Wenn du noch kein Repo hast
1. github.com → Konto → **New repository** (Public), Name z. B. `fisi-quiz`.
2. **Add file → Upload files** → alle oben genannten Dateien/Ordner reinziehen → **Commit**.
3. **Settings → Pages → Deploy from a branch → main / root → Save.**
4. Nach ~1 Min erscheint deine Adresse `https://DEINNAME.github.io/fisi-quiz/`.

## Lokal ansehen (empfohlen vor dem Hochladen)
ES-Module brauchen einen Webserver (Doppelklick/file:// geht nicht):
```bash
python3 -m http.server 8000
# dann http://localhost:8000
```
