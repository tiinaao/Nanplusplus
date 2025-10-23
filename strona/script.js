document.querySelectorAll('.menu button').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.add('active');
    setTimeout(() => btn.classList.remove('active'), 200);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");
  const menuButtons = document.querySelectorAll(".menu button");
  const logo = document.getElementById("logo");
  const burger = document.getElementById("burger");
  const menu = document.getElementById("menu");

  const pages = {
    welcome: `<h2>Witamy na stronie<br> koła NaN</h2>`,
    info: `<h1>INFO</h1><hr><p>Hej! Szukasz miejsca, gdzie Twoja pasja do technologii spotka się z ambitnymi projektami i świetną atmosferą? Trafiłeś idealnie!
            <br><br>Jesteśmy Kołem Naukowym NaN++ (Not a Number++), zrzeszającym studentów Uniwersytetu Gdańskiego, dla których informatyka i nowoczesne technologie to coś więcej niż tylko kierunek studiów. To grupa zapaleńców, którzy nie boją się wyzwań i chcą razem tworzyć.
            <br><br>Wymyślamy i realizujemy różne projekty, eksperymentujemy z nowymi technologiami, dzielimy się wiedzą i razem rozwijamy nasze umiejętności.
            <br><br>U nas nie chodzi tylko o gadanie, u nas się robi! Stawiamy na konkretne działania i realne efekty. Działamy po to, aby tworzyć projekty, które będą powodem do dumy, którymi możesz się pochwalić i które wzbogacą Twoje portfolio oraz CV.
            <br><br>Nie ważne, czy dopiero zaczynasz, czy jesteś już doświadczonym programistą lub grafikiem. Nie ważne, czy jesteś z Wydziału Matematyki, Fizyki i Informatyki, czy zupełnie innego wydziału. Wierzymy, że pasja i chęć do działania są najważniejsze. Jeśli lubisz to, co robisz i chcesz poznać ludzi z podobną energią to jest to miejsce dla ciebie. Nasza ekipa jest nastawiona na osoby z KAŻDYM poziomem zaawansowania (no, może oprócz tych, którzy są już lepsi od nas ;).
            <br><br>Wiemy, jak to jest. Myślisz: "brzmi fajnie, ale...". To, że to czytasz i Cię to zainteresowało, nie jest przypadkiem. To jest ten pierwszy, najważniejszy krok. Nie pozwól, żeby strach lub wątpliwości go zmarnowały. Nie musisz od razu być ekspertem. Musisz tylko chcieć spróbować. Zrób ten jeden, mały krok. Nie obiecujemy, że będzie łatwo, ale obiecujemy, że będzie warto.
            <br><br>Nie musisz czekać na "idealny moment" lub "nowy projekt". Jeśli coś teraz tworzymy, a Ty chcesz dołączyć - NAPISZ! Zawsze znajdziemy sposób, żeby Cię wciągnąć w działanie.
            <br><br>Pozdrawiamy,
            <br>Ekipa NaN++ ;]</p>`,
    projekty:  `<h1>PROJEKTY</h1><hr>
                <div class="projects">
                <div class="project" onclick="window.open('project1.html', '_blank')">
                <img src="placeholder.png" alt="Project 1">
                <div class="overlay"><span>Projekt 1</span></div></div>
                <div class="project" onclick="window.open('project2.html', '_blank')">
                <img src="placeholder.png" alt="Project 2">
                 <div class="overlay"><span>Projekt 2</span></div></div>
                 <div class="project" onclick="window.open('project3.html', '_blank')">
                 <img src="placeholder.png" alt="Project 3">
                 <div class="overlay"><span>Projekt 3</span></div></div></div>`,
    aktualnosci: `<h1>AKTUALNOŚCI</h1><hr><section class="updates">
                    <div class="update-list">
                    <div class="update">
                    <div class="update-header">
                     <span class="update-title">Spotkanie organizacyjne</span>
                        <span class="update-date">2025-10-22</span>
                        <span class="arrow">▼</span></div>
                     <div class="update-content">
                      <p>Kiedy: Nan <br> Gdzie: Nan</p>
                      </div></div></section>`,
    kontakt: `<h1>KONTAKT</h1><hr><p>Dołącz do nas!
              <br><br>Masz pytania? Chcesz się przywitać? A może od razu chcesz dołączyć? Śmiało, napisz do nas! Jesteśmy tu:
              <br><br><strong>E-mail:</strong> n4nplusplus@gmail.com
              <br><br><strong>Discord:</strong> https://discord.gg/8DQ9P497</p>`
  };

  function createContentSymbols() {
    
    const existingSymbols = content.querySelectorAll('.content-symbol');
    existingSymbols.forEach(symbol => symbol.remove());

    const symbols = ['blue.svg', 'pink.svg'];
    const symbolCount = 35;

    for (let i = 0; i < symbolCount; i++) {
      const symbol = document.createElement('img');
      const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
      
      symbol.src = randomSymbol;
      symbol.className = 'content-symbol';
      symbol.alt = '';
      
      const posX = Math.random() * 95;
      const posY = Math.random() * 95;
      
      const size = 15 + Math.random() * 25;
      const delay = Math.random() * 8;
      const duration = 1.5 + Math.random() * 3;
      
      symbol.style.left = `${posX}%`;
      symbol.style.top = `${posY}%`;
      symbol.style.width = `${size}px`;
      symbol.style.animationDelay = `${delay}s`;
      symbol.style.animationDuration = `${duration}s`;
      
      content.appendChild(symbol);
    }
    console.log('Symbols created!');
  }

  function initializeUpdates() {
  document.querySelectorAll('.update-header').forEach(header => {
    // Remove all existing event listeners
    header.replaceWith(header.cloneNode(true));
  });

  // Re-attach only click events
  document.querySelectorAll('.update-header').forEach(header => {
    header.addEventListener('click', handleUpdateClick);
  });
}

  function handleUpdateClick(e) {
  e.preventDefault();
  e.stopPropagation();
  toggleUpdate(e.currentTarget);
}

  function toggleUpdate(header) {
  const update = header.parentElement;
  update.classList.toggle('open');
}

  function changeContent(newContent) {
    console.log('Changing content to:', newContent.substring(0, 50) + '...');
    content.classList.add("fade-out");

    setTimeout(() => {
      content.innerHTML = newContent;
      content.classList.remove("fade-out");
      content.classList.add("fade-in");
      
      setTimeout(() => {
      if (newContent === pages.welcome) {
      createContentSymbols();
      }}, 20);
      
      if (newContent.includes("update-header")) {
        initializeUpdates();
      }

      setTimeout(() => {
        content.classList.remove("fade-in");
      }, 400);
    }, 300);
  }
  
  console.log('Initial page load');
  changeContent(pages.welcome);

  menuButtons.forEach(button => {
    button.addEventListener("click", () => {
      const page = button.getAttribute("data-page");
      changeContent(pages[page]);
      if (menu.classList.contains("open")) {
        menu.classList.remove("open");
        burger.classList.remove("active");
      }
    });
  });

  logo.addEventListener("click", () => {
    changeContent(pages.welcome);
    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
      burger.classList.remove("active");
    }
  });

  burger.addEventListener("click", () => {
    menu.classList.toggle("open");
    burger.classList.toggle("active");
  });
});