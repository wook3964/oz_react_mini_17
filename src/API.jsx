import React from 'react'

const TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN;
const BASE_URL = 'https://api.themoviedb.org/3';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ${TMDB_TOKEN}'
    }
};

export const getPopularMovies = async () => {
    try {
        const response = await fetch('${BASE_URL}/movie/popular?languag=ko-KR&page=1', options);
        const data = await response.json();
        return data.results;      
    } catch (err) {
        console.error("데이터 로딩 에러", err);
        return [];
    }
}




