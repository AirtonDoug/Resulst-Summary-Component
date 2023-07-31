
fetch('data.json')
  .then(response => response.json())
  .then(data => {
   
    document.getElementById('reaction-category').innerText = data[0].category;
    document.getElementById('reaction-score').innerText = data[0].score;
    document.getElementById('reaction-icon').src = data[0].icon;

    document.getElementById('memory-category').innerText = data[1].category;
    document.getElementById('memory-score').innerText = data[1].score;
    document.getElementById('memory-icon').src = data[1].icon;

    document.getElementById('verbal-category').innerText = data[2].category;
    document.getElementById('verbal-score').innerText = data[2].score;
    document.getElementById('verbal-icon').src = data[2].icon;

    document.getElementById('visual-category').innerText = data[3].category;
    document.getElementById('visual-score').innerText = data[3].score;
    document.getElementById('visual-icon').src = data[3].icon;
  })
  .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));
