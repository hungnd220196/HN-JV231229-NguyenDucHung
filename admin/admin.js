const projectNameInput = document.getElementById("projectname");
const imageUrlInput = document.getElementById("image-url");
const linkInput = document.getElementById("link");
const tagsInput = document.getElementById("tags");
const form = document.getElementById("form");
const btn = document.getElementById("btn");
const tbody = document.getElementById("tbody");
let existingIndex = -1;
let existing = false;

//hàm reset form
function resetForm() {
  projectNameInput.value = "";
  imageUrlInput.value = "";

  linkInput.value = "";
  tagsInput.value = "";
}

//lắng nghe sự kiện submit form

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //tạo đối tượng
  const objProject = {
    name: projectNameInput.value,
    imageUrl: imageUrlInput.value,
    link: linkInput.value,
    tags: tagsInput.value,
  };
  // lấy dữ liệu từ local về
  const projectLocal = JSON.parse(localStorage.getItem("projects")) || [];
  if (existing) {
    projectLocal[existingIndex] = objProject;
    existingIndex = -1;
    existing = false;
    document.getElementsByClassName("btn-edit").textContent = "Updated";
  } else {
    projectLocal.push(objProject);
  }

  //đẩy dữ liệu lên local
  localStorage.setItem("projects", JSON.stringify(projectLocal));
  resetForm();
  renderListProject();
});

//hàm render listProject
function renderListProject() {
  const projectLocal = JSON.parse(localStorage.getItem("projects")) || [];
  const trHTMLs = projectLocal.map((project, index) => {
    return `
             <tr>
                <td>${index + 1}</td>
                <td>${project.name}</td>
                <td>${project.imageUrl}</td>
                <td>${project.link}</td>
                <td>${project.tags}</td>
                <td>
                  <button onclick="deleteProject(${index})" class="btn button-danger btn-del">Delete</button>
                  <button onclick="editProject(${index})" class="btn button-secondary btn-edit">Update</button>
                </td>
              </tr>
    `;
  });
  //chuyển mảng thành chuỗi
  const trHTML = trHTMLs.join("");
  //append
  tbody.innerHTML = trHTML;
}
renderListProject();

//Hàm xóa project
function deleteProject(index) {
  const projectLocal = JSON.parse(localStorage.getItem("projects")) || [];
  projectLocal.splice(index, 1);
  localStorage.setItem("projects", JSON.stringify(projectLocal));
  renderListProject();
}

// Hàm edit project
function editProject(index) {
  const projectLocal = JSON.parse(localStorage.getItem("projects")) || [];
  projectNameInput.value = projectLocal[index].name;
  imageUrlInput.value = projectLocal[index].imageUrl;
  linkInput.value = projectLocal[index].link;
  tagsInput.value = projectLocal[index].tags;
  existingIndex = index;
  existing = true;
  document.getElementsByClassName("btn-edit")[0].textContent = "Updating";
}
