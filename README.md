# 🎬 TelaFlix

<img width="1024" height="313" alt="TelaFlix Banner" src="https://github.com/user-attachments/assets/0e7311c0-35f4-4828-bf61-fd4342246d2d" />

<h2 align="center">Interface de Streaming Moderna com Navegação por Foco</h2>

## ✨ Funcionalidades Implementadas

### ✅ Concluído
- [x] **9 Trilhos de Filmes** - Diferentes categorias (Populares, Terror, Comédia, etc.)
- [x] **Sistema de Foco** - Navegação por teclado entre trilhos e filmes
- [x] **Contagem de Cliques** - Simulador de métricas com persistência
- [x] **Tela de Detalhes** - Modal com informações completas do filme
- [x] **Estatísticas** - Dashboard com métricas de visualização
- [x] **Persistência de Estado** - Salva foco e cliques no localStorage
- [x] **Design Responsivo** - Funciona em desktop, tablet e mobile
- [x] **Loading States** - Indicadores de carregamento
- [x] **Error Handling** - Tratamento de erros da API

### 🎮 Controles
- **Setas ↑↓**: Navegar entre trilhos
- **Setas ←→**: Navegar entre filmes
- **Enter/Espaço**: Selecionar filme
- **ESC**: Fechar modal
- **Mouse**: Clique para selecionar, hover para preview

## 🚀 Como Executar

```bash
cd tela-flix
npm install
npm start
```

Acesse [http://localhost:3000](http://localhost:3000)

## 🏗️ Arquitetura

```
tela-flix/
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── MovieDetail.jsx  # Modal de detalhes do filme
│   │   └── Stats.jsx        # Dashboard de estatísticas
│   ├── context/             # Gerenciamento de estado
│   │   └── MovieContext.jsx # Context API para estado global
│   ├── config/              # Configurações
│   │   └── api.js          # Configuração da API TMDB
│   ├── Card/               # Componente de cartão de filme
│   ├── Rail/               # Trilhos de filmes
│   └── RailConfig/         # Configuração dos trilhos
```

## 🎨 Design System

- **Tema**: Escuro com gradientes Netflix
- **Cores**: Vermelho (#e50914), Azul escuro (#0f0f23)
- **Tipografia**: Sans-serif moderna
- **Animações**: Transições suaves de 0.3s
- **Responsividade**: Mobile-first approach

## 📊 Trilhos Disponíveis

1. **Em Alta Hoje** - Tendências do dia
2. **Populares** - Mais vistos da semana
3. **Mais Bem Avaliados** - Melhores notas
4. **Em Breve** - Próximos lançamentos
5. **Nos Cinemas** - Em cartaz
6. **Terror** - Filmes de terror
7. **Comédia** - Filmes de comédia
8. **Drama** - Filmes dramáticos
9. **Em Alta na Semana** - Tendências semanais

## 🔧 Tecnologias

- **React 19** - Framework principal
- **CSS3** - Estilização avançada
- **TMDB API** - Dados dos filmes
- **Context API** - Estado global
- **localStorage** - Persistência

## 📱 Screenshots

![Interface Principal](https://github.com/user-attachments/assets/65ae2fa2-8763-4b3f-abdf-27a06ab26480)

## 🎯 Melhorias Implementadas

### 1. **Sistema de Foco Avançado**
- Navegação fluida entre trilhos e filmes
- Indicador visual de foco com borda vermelha
- Persistência da posição do foco

### 2. **Contagem de Cliques Inteligente**
- Contador visual em cada poster
- Estatísticas em tempo real
- Top 5 filmes mais visualizados

### 3. **Modal de Detalhes Rico**
- Informações completas do filme
- Elenco principal
- Metadados (duração, avaliação, gêneros)
- Link direto para TMDB

### 4. **Interface Moderna**
- Gradientes e efeitos visuais
- Animações suaves
- Layout responsivo
- Loading states elegantes

### 5. **Arquitetura Limpa**
- Separação de responsabilidades
- Configuração centralizada da API
- Context API para estado global
- Componentes reutilizáveis

## 🔮 Próximas Implementações

- [ ] Busca de filmes
- [ ] Filtros avançados
- [ ] Lista de favoritos
- [ ] Reprodução de trailers
- [ ] Recomendações personalizadas
- [ ] Modo noturno/claro
- [ ] Avaliação de filmes
- [ ] Compartilhamento

## 📖 Documentação

Consulte [INSTRUCOES.md](tela-flix/INSTRUCOES.md) para instruções detalhadas de uso.

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

**Desenvolvido com ❤️ para demonstrar navegação por foco em interfaces de streaming**
