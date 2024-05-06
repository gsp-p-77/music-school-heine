# Verwende das offizielle Node.js-Basisimage von Docker Hub
FROM node:latest

# Setze das Arbeitsverzeichnis im Container
WORKDIR /usr/src/app

# Kopiere die Abhängigkeitsdefinitionen
COPY package*.json ./

# Installiere die Abhängigkeiten
RUN npm install

# Kopiere den Rest des Codes
COPY . .

# Setze den Port, den die Anwendung innerhalb des Containers verwenden wird
EXPOSE 3000

# Starte die Anwendung
CMD ["node", "app.js"]
