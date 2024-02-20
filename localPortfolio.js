// const LocalInfo = JSON.parse(localStorage.getItem("heroInfo")) || [];
// const PersonalDetailsLocal =
//   JSON.parse(localStorage.getItem("PersonalDetails")) || [];
// const projectsLocal = JSON.parse(localStorage.getItem("project-data")) || [];

//tạo đối tượng
let arrInfo = [];
let heroInfo = {
  name: "Minh Cường",
  job: "freelance react developer",
  imgUrl: "https://picsum.photos/200/300",
};

//push đối tượng vào mảng lấy từ local
arrInfo.push(heroInfo);

localStorage.setItem("heroInfo", JSON.stringify(arrInfo));

let arrPersonalDetail = [];
let personalDetail = {
  name: "Minh Cường",
  dob: "06 June 1995",
  spokenLanguages: ["English", "France", "German"],
  nationality: "Vietnam",
  interest: ["Music", "Reading", "Journey"],
  techs: [
    {
      id: 1,
      imgUrl: "https://i.postimg.cc/cHdfNH2Z/android.png",
      techName: "Android",
      exp: 2,
    },
    {
      id: 2,
      imgUrl: "https://i.postimg.cc/nrCjHQk8/Angular.png",
      techName: "Angular",
      exp: 1,
    },
    {
      id: 3,
      imgUrl: "https://i.postimg.cc/G3VJ4csP/bootstrap.png",
      techName: "Bootstrap",
      exp: 3,
    },
    {
      id: 4,
      imgUrl: "https://i.postimg.cc/dt91z6v7/vue.png",
      techName: "Vue",
      exp: 2,
    },
    {
      id: 5,
      imgUrl: "https://i.postimg.cc/XNdXg3zk/react.png",
      techName: "React",
      exp: 2 / 3,
    },
    {
      id: 6,
      imgUrl: "https://i.postimg.cc/PfgYt2B2/mongodb.png",
      techName: "Mongodb",
      exp: 0.25,
    },
    {
      id: 7,
      imgUrl: "https://i.postimg.cc/RZzFYYjx/laravel.png",
      techName: "Laravel",
      exp: 1,
    },
    {
      id: 8,
      imgUrl: "https://i.postimg.cc/X7N3ybSJ/nodejs-icon.png",
      techName: "Node.js",
      exp: 5 / 6,
    },
  ],
};
arrPersonalDetail.push(personalDetail);
localStorage.setItem("PersonalDetails", JSON.stringify(arrPersonalDetail));

let projectData = [
  {
    id: 1,
    imgUrl: "https://i.postimg.cc/nrCjHQk8/Angular.png",
    projectName: "Auto Drive Project",
    link: "https://abcd-example.com",
    tags: ["Angular", "React", "Jquery"],
  },
  {
    id: 2,
    imgUrl: "https://i.postimg.cc/G3VJ4csP/bootstrap.png",
    projectName: "Ecommerce Project",
    link: "https://abcd-example.com",
    tags: ["Bootstrap", "CSS", "Javascript"],
  },
  {
    id: 3,
    imgUrl: "https://i.postimg.cc/PfgYt2B2/mongodb.png",
    projectName: "Chat Application",
    link: "https://abcd-example.com",
    tags: ["MongoDB", "Javascript"],
  },
  {
    id: 4,
    imgUrl: "https://i.postimg.cc/dt91z6v7/vue.png",
    projectName: "Social Media Platform",
    link: "https://abcd-example.com",
    tags: ["Vue", "Javascript"],
  },
  {
    id: 5,
    imgUrl: "https://i.postimg.cc/XNdXg3zk/react.png",
    projectName: "Image Sharing Platform",
    link: "https://abcd-example.com",
    tags: ["React", "Javascript"],
  },
];

localStorage.setItem("project-data", JSON.stringify(projectData));

// Hàm render personal detail

function renderPersonalDetail() {
  const PersonalDetailsLocal =
    JSON.parse(localStorage.getItem("PersonalDetails")) || [];

  const divPerson = PersonalDetailsLocal.map((person) => {
    return `
        
      
            <p>${person.dob}</p>
            <p>${person.spokenLanguages}</p>
            <p>${person.nationality}</p>
            <p>${person.interest}</p>
  

    `;
  });
  //chuyển mảng thành chuỗi
  let divPersons = divPerson.join("");
  //append
  document
    .getElementById("detail-right-item")
    .classList.add("detail-right-item");
  document.getElementById("detail-right-item").innerHTML = divPersons;
}

renderPersonalDetail();

function renderLanguage() {
  const PsLocal = JSON.parse(localStorage.getItem("PersonalDetails")) || [];

  let arrPsLocal = PsLocal[0].techs;
  let divPsLocal = arrPsLocal.map((detail, index) => {
    return `
            <div class="group-img">
                <img src="${detail.imgUrl}" alt="" />
                <div>
                  <h2>${detail.techName}</h2>
                  <p> ${detail.exp} Year Experience</p>
                </div>
            </div>

    `;
  });
  let divPsLocals = divPsLocal.join("");
  document.getElementById("group").innerHTML = divPsLocals;
}
renderLanguage();
