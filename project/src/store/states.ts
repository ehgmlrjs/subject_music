import { atom } from 'recoil';

export const tokenState = atom({
    key : 'tokenState',
    default : '',
});

export const nickState = atom({
    key : 'nickState',
    default : '',
})

export const genreState = atom({
    key : 'genreState',
    default : ''
})

export const indexState = atom({
    key : 'indexState',
    default : 0,
})