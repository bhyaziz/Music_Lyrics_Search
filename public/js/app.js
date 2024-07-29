document.getElementById('form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const searchValue = document.getElementById('search').value.trim();

    if (searchValue === '') {
        alert('Please enter a search term');
        return;
    }

    try {
        const response = await fetch(`/api/search?query=${searchValue}`);
        const data = await response.json();
        
        const songsContainer = document.getElementById('songs-container');
        songsContainer.innerHTML = '';

        if (data.data && data.data.length > 0) {
            data.data.forEach(song => {
                const songElement = document.createElement('li');
                songElement.textContent = `${song.artist.name} - ${song.title}`;
                songElement.addEventListener('click', () => fetchLyrics(song.artist.name, song.title));
                songsContainer.appendChild(songElement);
            });
        } else {
            songsContainer.innerText = 'No suggestions found';
        }
    } catch (error) {
        console.error('Error fetching suggestions:', error);
        document.getElementById('songs-container').innerText = 'An error occurred';
    }
});

async function fetchLyrics(artist, title) {
    try {
        const response = await fetch(`/api/lyrics?artist=${artist}&title=${title}`);
        const data = await response.json();

        const songsContainer = document.getElementById('songs-container');
        songsContainer.innerHTML = '';

        if (data.lyrics) {
            const lyricsElement = document.createElement('pre');
            lyricsElement.textContent = data.lyrics;
            lyricsElement.className = 'lyrics-container';
            songsContainer.appendChild(lyricsElement);
        } else {
            songsContainer.innerText = 'No lyrics found';
        }
    } catch (error) {
        console.error('Error fetching lyrics:', error);
        document.getElementById('songs-container').innerText = 'An error occurred';
    }
}

