const scoreBox = document.querySelectorAll(".score-box");

const updateScoreBox = (data) => {
    scoreBox.forEach((item, index) => {
        item.innerHTML = `
        <span class="icon"><img src="${data[index].icon}" alt=""></span>
        <p class="summary-item">${data[index].category}</p>
        <p class="score">
            <span class="out-of-hundred">${data[index].score}</span>/<span class="hundred">100</span>
        </p>
        `
    })
}

const getJsonData = async path => {
    try {
        const response = await fetch(path);
        const data = await response.json();
        return data;
    } catch (err) {
        throw new Error('Failed to fetch JSON data');
    }
}

getJsonData('./assets/script/data.json')
.then(data => {
    updateScoreBox(data);
})
.catch(err => console.error(err))