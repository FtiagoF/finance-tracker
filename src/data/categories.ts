import { Category } from '../types/Category'

export const categories: Category = {
    food: { 
        title: 'Alimentação', 
        color: '#f39c12', 
        expense: true 
    },
    health: {
        title: 'Saúde',
        color: '#3498db',
        expense: true
    },
    games: {
        title: 'Jogos',
        color: '#130f40',
        expense: true
    },
    salary: {
        title: 'Salário',
        color: '#27ae60',
        expense: false
    }
}