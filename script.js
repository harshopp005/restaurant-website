// navbar

function showSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
  }
  function hideSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
  }

  const menuList = document.querySelector(".menu-ul");

  menuList.addEventListener('click', () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
  })

// dish 1
  // const openDish1 = document.querySelector("#dish1-open");
  // const closeDish1 = document.querySelector("#dish1-close");
  // const backdrop = document.querySelector('.backdrop');
  // const dish1Model_container = document.querySelector(".model-container");
  // const body = document.querySelector("body");
  // openDish1.addEventListener('click', () => {
  //   backdrop.style.display = 'block';
  //   dish1Model_container.style.display = "flex";
  //   dish1Model_container.style.overflowY = "auto";
  //   body.style.overflowY = "hidden";
  // })

  // closeDish1.addEventListener('click', () => {
  //   dish1Model_container.style.display = "none";
  //   body.style.overflowY = "auto";
  // })


  
  



  const dishes = document.querySelectorAll(".dish-open");
  const body = document.querySelector("body");

  // Function to close the modal
  const closeModal = (modelContainer) => {
    modelContainer.style.display = "none";
    body.style.overflowY = "auto";
  };

  // Add event listeners to all dishes to handle opening the modal
  dishes.forEach(dish => {
    dish.addEventListener('click', () => {
      const dishId = dish.getAttribute("data-dish-id");
      const dishModelContainer = document.querySelector(`#${dishId}-model-container`);
      const backdrop = dishModelContainer.querySelector(".backdrop");
      const closeButton = dishModelContainer.querySelector(".dish-close");

      // Show the modal container
      dishModelContainer.style.display = "flex";
      dishModelContainer.style.overflowY = "auto";
      body.style.overflowY = "hidden";

      // Remove existing click listeners to avoid stacking
      backdrop.removeEventListener('click', () => closeModal(dishModelContainer));
      closeButton.removeEventListener('click', () => closeModal(dishModelContainer));

      // Add event listener to the backdrop to close the modal
      backdrop.addEventListener('click', () => closeModal(dishModelContainer));

      // Add event listener to the close button to close the modal
      closeButton.addEventListener('click', () => closeModal(dishModelContainer));
    });
  });















  // you cloud use function for display none
  // you can add comnnads here to be used anywhere like this
  // i hope you undestand
  function displayNone(e) {
    console.log(e)
    // here? yes
  }

  // const openDish2 = document.querySelector("#dish2-open");
  // const closeDish2 = document.querySelector("#dish2-close");
  // const backdrop2 = document.querySelector('.backdrop2');
  // const dish2Model_container = document.querySelector(".model-container2");
  // openDish2.addEventListener('click', () => {
  //   backdrop2.style.display = 'block';
  //   dish2Model_container.style.display = "flex";
  //   dish2Model_container.style.overflowY = "auto";
  //   body.style.overflowY = "hidden";
  //   displayNone()
  // })

  // closeDish2.addEventListener('click', () => {
  //   dish2Model_container.style.display = "none";
  //   body.style.overflowY = "auto";
  //   displayNone()
  // })
  // backdrop2.addEventListener('click', (e) => {
  //   console.log(e);
  //   dish2Model_container.style.display = 'none';
  //   backdrop2.style.display = 'none';
  //   body.style.overflowY = "auto";
  //   displayNone(e)
  // });










  // Close the dialog when clicking outside of it
// backdrop.addEventListener('click', (e) => {
//   console.log(e);
//   dish1Model_container.style.display = 'none';
//   backdrop.style.display = 'none';
//   body.style.overflowY = "auto";
// });







  