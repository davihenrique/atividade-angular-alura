# Usa a imagem do Node.js 14 como base
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:14

# Atualiza pacotes e instala Angular CLI
RUN npm cache clean --force && \
    npm install -g @angular/cli@15.0.5

# Define o diretório de trabalho
WORKDIR /workspace
