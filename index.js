const extractName = document.querySelector("#name");
const extractEmail = document.querySelector("#email");
const extractAge = document.querySelector("age");
const btn = document.querySelector("#submit")




function createCollection() {
    const collection = document.createElement("div");
    collection.setAttribute("class", "info");

    return collection;
  }

  function createCard(card) {
    const wrapper = document.createElement("div");
    wrapper.setAttribute("class", "information");
  
    wrapper.innerHTML = `
            <!-- <div class="submission-item">
              <div class="submission-details">
                <div class="detail-row">
                  <p class="detail-label">Name:</p>
                  <p class="detail-value">John Doe</p>
                </div>
                <div class="detail-row">
                  <p class="detail-label">Email:</p>
                  <p class="detail-value">john@example.com</p>
                </div>
                <div class="detail-row">
                  <p class="detail-label">Age:</p>
                  <p class="detail-value">43</p>
                </div>
              </div>
            </div> -->
    `;
  
    return wrapper;
  }

  
  btn.addEventListener("click", () =>{
    const infos ={
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        age : document.getElementById("age").value,
   }

   const personalInfo = createCollection();
  personalInfo.appendChild(createCard(infos));

  
  document.getElementById(".display_container").appendChild(personalInfo);
  
  infos.name = "";
  infos.email = "";
  infos.age = "";


    
  })

  