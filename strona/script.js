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
    welcome: `<h1>Witamy na stronie koła NaN++</h1><hr><p>To jest ekran powitalny. Wybierz interesującą ciebie opcję z menu!</p>`,
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
    galeria: `<h1>GALERIA</h1><hr>  <div class="gallery">
              <img src="placeholder.png" alt="placeholder image 1">
              <img src="placeholder.png" alt="placeholder image 2">
              <img src="placeholder.png" alt="placeholder image 3">
              <img src="placeholder.png" alt="placeholder image 4">
              <img src="placeholder.png" alt="placeholder image 5">
              <img src="placeholder.png" alt="placeholder image 6"></div>`,
    kontakt: `<h1>KONTAKT</h1><hr><p>Dołącz do nas!
              <br><br>Masz pytania? Chcesz się przywitać? A może od razu chcesz dołączyć? Śmiało, napisz do nas! Jesteśmy tu:
              <br><br>E-mail: n4nplusplus@gmail.com
              <br><br>Discord: https://discord.gg/8DQ9P497</p>`
  };

  function changeContent(newContent) {
    content.classList.add("fade-out");

    setTimeout(() => {
      content.innerHTML = newContent;
      content.classList.remove("fade-out");
      content.classList.add("fade-in");

      setTimeout(() => {
        content.classList.remove("fade-in");
      }, 400);
    }, 300);
  }

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
