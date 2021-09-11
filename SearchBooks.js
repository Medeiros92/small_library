//Declaração do array
const booksByCategory = [
    {
        category: 'Riqueza',
        books: [
            {
                title: 'Os segredos da mente milionária',
                author: 'T. Harv Eker'
            },
            {
                title: 'O homem mais rico da Babiônia',
                author: 'George S. Classon'
            },
            {
                title: 'Pai rico, pai pobre',
                author: 'Robert T. Kiyosaki'
            }
        ]
    },
    {
        category: 'Inteligência Emocional',
        books: [
            {
                title: 'Você é Insubstituível',
                author: 'Augusto Cury'
            },
            {
                title: 'Ansiedade - Como enfrentar o mal do século',
                author: 'Augusto Cury'
            },
            {
                title: 'Os 7 hábitos das pessoas altamente eficazes ',
                author: 'Stephen R. Covey'
            }
        ]
    }
];

//Quantidade de Categorias
const totalCategories = booksByCategory.length
console.log(totalCategories)

//Quantidade de livros por Categoria
for(let category of booksByCategory) {
    console.log('Total de livos da categoria: ', category.category)
    console.log(category.books.length)
}






