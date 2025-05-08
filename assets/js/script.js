// Data proyek (bisa diedit sesuai kebutuhan)
const projects = [
  {
    title: "Proyek 1: Situs Web Pribadi",
    description: "Situs web statis menggunakan HTML, CSS, dan JavaScript.",
    link: "https://github.com/nama-anda/proyek1",
  },
  {
    title: "Proyek 2: Aplikasi VB.NET",
    description: "Aplikasi desktop untuk manajemen data menggunakan VB.NET.",
    link: "https://github.com/nama-anda/proyek2",
  },
];

// Fungsi untuk menampilkan proyek
function loadProjects() {
  const projectList = document.getElementById("project-list");
  projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";
    projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">Lihat di GitHub</a>
        `;
    projectList.appendChild(projectCard);
  });
}

// Panggil fungsi saat halaman dimuat
window.onload = loadProjects;
