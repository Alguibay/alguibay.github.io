document.addEventListener('DOMContentLoaded', () => {
  const comunaInput = document.getElementById('comunaInput');
  const searchButton = document.getElementById('searchButton');
  const suggestionsContainer = document.getElementById('suggestions');
  const resultContainer = document.getElementById('resultContainer');
  const codigoPostalElement = document.getElementById('codigoPostal');
  const diaAtencionElement = document.getElementById('diaAtencion');
  const semanaMesElement = document.getElementById('semanaMes');

  let comunasData = [];
  let currentSuggestionIndex = -1;

  // Fetch data from CSV
  async function fetchComunasData() {
    try {
      const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vT3WGSdY5CUk5aZoQIcFig6Kx6aM6ljzhln-S5JUcrLnSFCIPTu-0uhhU0jKXJ50jSRBvMuc_XNnNQG/pub?gid=1841775016&single=true&output=csv');
      const text = await response.text();
      
      // Parse CSV
      const rows = text.split('\n').map(row => {
        const [comuna, codigoPostal, diaAtencion, semanaMes] = row.split(',');
        return {
          nombre: comuna.trim(),
          codigo_postal: codigoPostal.trim(),
          dia_semana: diaAtencion.trim(),
          semana_mes: semanaMes.trim()
        };
      });

      comunasData = rows;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  function showSuggestions(searchText) {
    if (!searchText) {
      suggestionsContainer.style.display = 'none';
      return;
    }

    const filteredComunas = comunasData.filter(comuna =>
      comuna.nombre.toLowerCase().includes(searchText.toLowerCase())
    );

    if (filteredComunas.length > 0) {
      suggestionsContainer.innerHTML = '';
      filteredComunas.forEach((comuna, index) => {
        const div = document.createElement('div');
        div.className = 'suggestion-item';
        div.textContent = comuna.nombre;
        div.addEventListener('click', () => selectComuna(comuna));
        if (index === currentSuggestionIndex) {
          div.classList.add('selected');
        }
        suggestionsContainer.appendChild(div);
      });
      suggestionsContainer.style.display = 'block';
    } else {
      suggestionsContainer.style.display = 'none';
    }
  }

  function selectComuna(comuna) {
    comunaInput.value = comuna.nombre;
    suggestionsContainer.style.display = 'none';
    
    // Update results
    codigoPostalElement.textContent = comuna.codigo_postal;
    diaAtencionElement.textContent = comuna.dia_semana || 'No disponible';
    semanaMesElement.textContent = comuna.semana_mes || 'No disponible';
    
    resultContainer.classList.remove('hidden');
    setTimeout(() => resultContainer.classList.add('visible'), 50);
  }

  function handleSearch() {
    const searchText = comunaInput.value.trim().toUpperCase();
    if (searchText) {
      const comuna = comunasData.find(c => 
        c.nombre.toUpperCase().includes(searchText)
      );
      if (comuna) {
        selectComuna(comuna);
      }
    }
  }

  // Event Listeners
  comunaInput.addEventListener('input', (e) => {
    currentSuggestionIndex = -1;
    showSuggestions(e.target.value);
  });

  comunaInput.addEventListener('keydown', (e) => {
    const suggestions = suggestionsContainer.children;
    if (suggestions.length > 0) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        currentSuggestionIndex = Math.min(currentSuggestionIndex + 1, suggestions.length - 1);
        showSuggestions(comunaInput.value);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        currentSuggestionIndex = Math.max(currentSuggestionIndex - 1, 0);
        showSuggestions(comunaInput.value);
      } else if (e.key === 'Enter' && currentSuggestionIndex >= 0) {
        e.preventDefault();
        const selectedComuna = comunasData.find(c => 
          c.nombre === suggestions[currentSuggestionIndex].textContent
        );
        if (selectedComuna) {
          selectComuna(selectedComuna);
        }
      }
    }
  });

  searchButton.addEventListener('click', handleSearch);

  comunaInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && currentSuggestionIndex === -1) {
      handleSearch();
    }
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-wrapper')) {
      suggestionsContainer.style.display = 'none';
    }
  });

  // Initialize
  fetchComunasData();
});
