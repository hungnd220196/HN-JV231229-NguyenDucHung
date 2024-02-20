const projectGroup = document.getElementById("project-group");
const projectLocal = JSON.parse(localStorage.getItem("projects")) || [];

function renderProject() {
  const divProject = projectLocal.map((project) => {
    return `
             
                <div class="list-item1">
                    <div class="item-project">
                        <img src="${project.imageUrl}" alt="" />
                        <div>
                        <h2>${project.name}</h2>
                        <a href="">${project.link}</a>
                        <i class="fa-regular fa-share-from-square"></i>
                        </div>
                    </div>
                    <div>
                        <button class="button-second">${project.tags}</button>
                        
                    </div>
                </div>
                
            
            

    `;
  });
  //chuyển mảng thành chuỗi
  const divProjects = divProject.join("");
  //append
  projectGroup.innerHTML = divProjects;
}

renderProject();
