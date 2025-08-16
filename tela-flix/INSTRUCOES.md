# TelaFlix - Instruções de Uso

## 🎬 Sobre o Projeto

O TelaFlix é uma aplicação React que simula uma interface de streaming de filmes, consumindo a API do TMDB (The Movie Database). A aplicação permite navegar por diferentes categorias de filmes, visualizar detalhes e acompanhar estatísticas de visualização.

## 🚀 Como Executar

1. **Instalar dependências:**
   ```bash
   cd tela-flix
   npm install
   ```

2. **Iniciar o servidor de desenvolvimento:**
   ```bash
   npm start
   ```

3. **Acessar a aplicação:**
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🎮 Controles

### Navegação por Teclado
- **Setas ↑↓**: Navegar entre os trilhos (categorias)
- **Setas ←→**: Navegar entre filmes no mesmo trilho
- **Enter** ou **Espaço**: Selecionar filme e abrir detalhes
- **ESC**: Fechar modal de detalhes

### Mouse
- **Clique**: Selecionar filme e abrir detalhes
- **Hover**: Visualizar informações do filme

## 📊 Funcionalidades

### 1. Trilhos de Filmes
- **Em Alta Hoje**: Filmes mais populares do dia
- **Populares**: Filmes mais populares da semana
- **Mais Bem Avaliados**: Filmes com melhor avaliação
- **Em Breve**: Próximos lançamentos
- **Nos Cinemas**: Filmes em cartaz
- **Terror**: Filmes de terror
- **Comédia**: Filmes de comédia
- **Drama**: Filmes dramáticos
- **Em Alta na Semana**: Tendências da semana

### 2. Sistema de Foco
- Navegação visual com destaque no filme selecionado
- Transição suave entre trilhos e filmes
- Estado de foco salvo no localStorage

### 3. Contagem de Cliques
- Cada clique em um filme é registrado
- Contador visual no canto superior direito do poster
- Estatísticas de visualização na parte superior

### 4. Detalhes do Filme
- Modal com informações completas
- Poster, título, sinopse
- Data de lançamento, duração, avaliação
- Gêneros e elenco principal
- Link para TMDB

### 5. Estatísticas
- Total de visualizações
- Número de filmes únicos visualizados
- Top 5 filmes mais visualizados

## 💾 Persistência de Dados

A aplicação salva automaticamente:
- Contagem de cliques por filme
- Posição do foco (trilho e filme)
- Estado é restaurado ao recarregar a página

## 🎨 Design

- Interface moderna inspirada em plataformas de streaming
- Gradientes e efeitos visuais
- Layout responsivo para diferentes tamanhos de tela
- Animações suaves e transições
- Tema escuro com cores Netflix

## 🔧 Tecnologias Utilizadas

- **React 19**: Framework principal
- **CSS3**: Estilização com gradientes e animações
- **TMDB API**: Dados dos filmes
- **Context API**: Gerenciamento de estado global
- **localStorage**: Persistência de dados

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona em:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (480px - 767px)
- Mobile pequeno (< 480px)

## 🐛 Solução de Problemas

### Erro de API
- Verifique sua conexão com a internet
- A API do TMDB pode estar temporariamente indisponível

### Problemas de Performance
- A aplicação carrega 8 filmes por trilho para otimizar performance
- Imagens são carregadas sob demanda

### Problemas de Navegação
- Certifique-se de que o elemento está em foco antes de usar as teclas
- Use Tab para navegar entre elementos focáveis

## 🔮 Próximas Funcionalidades

- [ ] Busca de filmes
- [ ] Filtros por gênero
- [ ] Lista de favoritos
- [ ] Modo noturno/claro
- [ ] Reprodução de trailers
- [ ] Recomendações personalizadas
- [ ] Avaliação de filmes
- [ ] Compartilhamento de filmes

## 📞 Suporte

Para dúvidas ou problemas, consulte a documentação do React ou entre em contato com a equipe de desenvolvimento.
