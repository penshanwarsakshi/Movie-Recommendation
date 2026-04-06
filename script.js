const movies = [
    { title: "Spider-Man: No Way Home", genre: "Action", mood: "Excited", year: 2021 },
    { title: "Jumanji", genre: "Adventure", mood: "Fun", year: 2017 },
    { title: "The Notebook", genre: "Romance", mood: "Romantic", year: 2004 },
    { title: "Inception", genre: "Thriller", mood: "Thrilled", year: 2010 },
    { title: "Forrest Gump", genre: "Drama", mood: "Relaxed", year: 1994 },
    { title: "Deadpool", genre: "Action", mood: "Excited", year: 2016 },
    { title: "La La Land", genre: "Romance", mood: "Romantic", year: 2016 },
    { title: "Interstellar", genre: "Sci-Fi", mood: "Thrilled", year: 2014 },
    { title: "Coco", genre: "Animation", mood: "Relaxed", year: 2017 }
];

function userChoice(mood) {
    addUserMessage(mood);
    setTimeout(() => {
        recommendMovie(mood);
    }, 500);
}

function addUserMessage(message) {
    const chatBox = document.getElementById("chat-box");
    const userMsg = document.createElement("div");
    userMsg.classList.add("user-message");
    userMsg.textContent = message;
    chatBox.appendChild(userMsg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function addBotMessage(message) {
    const chatBox = document.getElementById("chat-box");
    const botMsg = document.createElement("div");
    botMsg.classList.add("bot-message");
    botMsg.textContent = message;
    chatBox.appendChild(botMsg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function recommendMovie(mood) {
    let suggestions = [];
    if (mood === "Random") {
        const randomIndex = Math.floor(Math.random() * movies.length);
        suggestions.push(movies[randomIndex]);
    } else {
        suggestions = movies.filter(movie => movie.mood.toLowerCase() === mood.toLowerCase());
    }

    if (suggestions.length === 0) {
        addBotMessage("Sorry, no movies found for that mood 😅");
        return;
    }

    let message = "Here are some movie suggestions:\n";
    suggestions.forEach(movie => {
        message += `${movie.title} (${movie.year})\n`;
    });
    addBotMessage(message);
}
