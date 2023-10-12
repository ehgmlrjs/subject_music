function transKo(song){
    song_name = ''
    switch(song){
        case 'Ballad':
            song_name = '발라드';
            break;
        case 'Dance':
            song_name = '댄스';
            break;
        case 'Hippop':
            song_name = '랩/힙합';
            break;
        case 'Indi':
            song_name = '인디';
            break;
        case 'Rock':
            song_name = '록';
            break;
    }
    return song_name;
}

module.exports = transKo;