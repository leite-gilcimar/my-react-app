# Usar Node 22 como base
FROM node:22

# Diretório de trabalho dentro do container
WORKDIR /app

# Expor a porta padrão do React
EXPOSE 3000

# Comando padrão (caso já exista package.json)
CMD ["npm", "start"]
