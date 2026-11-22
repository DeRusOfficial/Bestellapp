# 🍽️ Express Delivery – Bestell-App

Eine responsive Web-App zum Bestellen von Speisen. Gerichte aus verschiedenen Küchen können durchstöbert, in den Warenkorb gelegt und anschließend bestellt werden.

🔗 **Live-Demo:** [denis-maier.developerakademie.net/bestellapp](https://denis-maier.developerakademie.net/bestellapp/index.html)

---

## 📋 Inhaltsverzeichnis

- [Features](#-features)
- [Technologien](#-technologien)
- [Projektstruktur](#-projektstruktur)
- [Installation & Nutzung](#-installation--nutzung)
- [Bedienung](#-bedienung)
- [Mögliche Erweiterungen](#-mögliche-erweiterungen)
- [Autor](#-autor)

---

## ✨ Features

- **Gerichte nach Kategorien filtern:** Griechische, Italienische, Russische Gerichte oder alle Gerichte auf einmal
- **Warenkorb:** Gerichte hinzufügen und Mengen anpassen
- **Automatische Berechnung:** Lieferkosten (5,00 €), enthaltene MwSt. und Gesamtsumme
- **Bestellvorgang:** Bestellübersicht mit Bestätigung über „Endgültig bestellen"
- **Responsive Design:** Ausklappbarer Warenkorb für mobile Geräte

## 🛠️ Technologien

- HTML5
- CSS3
- JavaScript (Vanilla)

## 📁 Projektstruktur

```
bestellapp/
├── index.html
├── assets/
│   ├── icons/
│   │   ├── logo/
│   │   └── arrows/
│   └── img/
│       └── meals/
│           ├── greek/
│           ├── italian/
│           └── russian/
├── css/
└── js/
```

> ⚠️ Bitte an die tatsächliche Ordnerstruktur deines Projekts anpassen.

## 🚀 Installation & Nutzung

1. Repository klonen:
   ```bash
   git clone https://github.com/<dein-username>/bestellapp.git
   ```
2. In den Projektordner wechseln:
   ```bash
   cd bestellapp
   ```
3. `index.html` im Browser öffnen (oder z. B. mit der VS-Code-Erweiterung *Live Server* starten).

Es werden keine zusätzlichen Abhängigkeiten oder Build-Schritte benötigt.

## 🕹️ Bedienung

1. Wähle oben eine Kategorie (Griechisch, Italienisch, Russisch oder Alle Gerichte).
2. Füge die gewünschten Gerichte dem Warenkorb hinzu.
3. Prüfe im Warenkorb Mengen, Lieferkosten und Gesamtsumme.
4. Klicke auf **„Jetzt bestellen!"**, damit deine **Bestellung** vorbereitet und geliefert wird.

## 🔮 Mögliche Erweiterungen

- Speichern des Warenkorbs im `localStorage`
- Suchfunktion für Gerichte
- Zusätzliche Kategorien und Gerichte
- Anbindung an ein Backend für echte Bestellungen

## 👤 Autor

**Denis Maier**
Projekt im Rahmen der Developer Akademie

---

*Dieses Projekt ist ein Lernprojekt und dient ausschließlich Übungszwecken.*
