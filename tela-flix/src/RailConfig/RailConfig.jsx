export const rails = [
    { 
        title: "Em Alta Hoje", 
        endpoint: "/trending/movie/day",
        component: "top",
        description: "Os filmes mais populares hoje"
    },
    { 
        title: "Populares", 
        endpoint: "/movie/popular",
        component: "movie",
        description: "Filmes mais populares da semana"
    },
    { 
        title: "Mais Bem Avaliados", 
        endpoint: "/movie/top_rated",
        component: "movie",
        description: "Filmes com melhor avaliação"
    },
    { 
        title: "Em Breve", 
        endpoint: "/movie/upcoming",
        component: "movie",
        description: "Próximos lançamentos"
    },
    { 
        title: "Nos Cinemas", 
        endpoint: "/movie/now_playing",
        component: "movie",
        description: "Filmes em cartaz"
    },
    { 
        title: "Terror", 
        endpoint: "/discover/movie?with_genres=27",
        component: "movie",
        description: "Os melhores filmes de terror"
    },
    { 
        title: "Comédia", 
        endpoint: "/discover/movie?with_genres=35",
        component: "movie",
        description: "Filmes para rir"
    },
    { 
        title: "Drama", 
        endpoint: "/discover/movie?with_genres=18",
        component: "movie",
        description: "Dramas premiados"
    },
    { 
        title: "Em Alta na Semana", 
        endpoint: "/trending/movie/week",
        component: "movie",
        description: "Tendências da semana"
    },
];
