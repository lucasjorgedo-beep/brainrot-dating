# 🧠 Brainrot Dating - Setup Guide

## Instalação

### Backend

```bash
cd backend
npm install
```

Crie um arquivo `.env` na pasta backend:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/brainrot-dating
JWT_SECRET=your_super_secret_key_here
NODE_ENV=development
```

Popule o banco de dados:
```bash
node src/utils/seed.js
```

Inicie o servidor:
```bash
npm start
# ou para desenvolvimento
npm run dev
```

### Frontend

```bash
cd frontend
npm install
```

Inicie o projeto:
```bash
expo start
```

Escolha:
- `i` para iOS
- `a` para Android
- `w` para web

## 📱 Funcionalidades

### Swipe em Memes
- Sistema de cards deslizáveis
- Like/Pass em memes brainrot
- Rastreamento de matches

### Personagens Celestiais
- 4 níveis de raridade: Celestial, Epic, Rare, Common
- Chat em tempo real com Socket.io
- Perfis únicos de cada personagem

### Chat
- Mensagens em tempo real
- Histórico de conversas
- Emojis e expressões

## 🗄️ Estrutura do Banco de Dados

### Collections
- **Users**: Usuários da aplicação
- **Memes**: Acervo de memes brainrot
- **CelestialCharacters**: Personagens disponíveis
- **Matches**: Registro de interações do usuário

## 🔑 API Endpoints

### Auth
- `POST /api/auth/register` - Registrar usuário
- `POST /api/auth/login` - Fazer login

### Memes
- `GET /api/memes` - Obter todos os memes
- `GET /api/memes/:id` - Obter meme específico
- `POST /api/memes/:id/rate` - Registrar like/pass

### Characters
- `GET /api/characters` - Obter personagens
- `GET /api/characters/:id` - Obter personagem específico
- `GET /api/characters/rarity/:rarity` - Filtrar por raridade

### Matches
- `GET /api/matches/user/:userId` - Obter matches do usuário
- `GET /api/matches/user/:userId/successful` - Obter matches bem-sucedidos

## 🚀 Próximos Passos

1. Implementar autenticação completa no frontend
2. Integrar Socket.io para chat em tempo real
3. Adicionar sistema de notificações
4. Deploy na Google Play Store
5. Adicionar mais personagens celestiais
6. Implementar sistema de level e conquistas

---

Feliz swiping! 🧠💬
