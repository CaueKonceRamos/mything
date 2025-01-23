document.getElementById('menu-button').addEventListener('click', function() {
    var menuDropdown = document.getElementById('menu-dropdown');
    if (menuDropdown.classList.contains('hidden')) {
      menuDropdown.classList.remove('hidden');
    } else {
      menuDropdown.classList.add('hidden');
    }
  });
  
  const projects = [
    {
      title: "Projeto 1",
      description: "Descrição do projeto 1.",
      imageDesktop: "https://placehold.co/600x400?text=Projeto+1+Desktop",
      imageMobile: "https://placehold.co/600x400?text=Projeto+1+Mobile"
    },
    {
      title: "Projeto 2",
      description: "Descrição do projeto 2.",
      imageDesktop: "https://placehold.co/600x400?text=Projeto+2+Desktop",
      imageMobile: "https://placehold.co/600x400?text=Projeto+2+Mobile"
    },
    {
      title: "Projeto 3",
      description: "Descrição do projeto 3.",
      imageDesktop: "https://placehold.co/600x400?text=Projeto+3+Desktop",
      imageMobile: "https://placehold.co/600x400?text=Projeto+3+Mobile"
    }
  ];
  
  let currentProjectIndex = 0;
  
  function updateProject() {
    const project = projects[currentProjectIndex];
    document.getElementById('project-title').innerText = project.title;
    document.getElementById('project-description').innerText = project.description;
    document.getElementById('project-image-desktop').src = project.imageDesktop;
    document.getElementById('project-image-mobile').src = project.imageMobile;
  }
  
  document.getElementById('prev-project').addEventListener('click', function() {
    currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
    updateProject();
  });
  
  document.getElementById('next-project').addEventListener('click', function() {
    currentProjectIndex = (currentProjectIndex + 1) % projects.length;
    updateProject();
  });
  
  updateProject();
  
