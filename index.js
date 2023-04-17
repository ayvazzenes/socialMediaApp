//!sidebar el
const menuItems = document.querySelectorAll(".menu-item");
const notPopupEl = document.querySelector(".notifications-popup");

//!messages el
const messageNotEL = document.querySelector("#messages-notifications");
const messagesEl = document.querySelector(".messages");

//!rigth search-bar el
const messagesAllEl = document.querySelectorAll(".message");

const messageSearchEl = document.querySelector("#message-search");

//! THEME
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".choose-size span");
var root = document.querySelector(":root");
const colorPalette = document.querySelectorAll(".choose-color span");
const bg1 = document.querySelector(".bg-1");
const bg2 = document.querySelector(".bg-2");
const bg3 = document.querySelector(".bg-3");


//!sidebar start
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    removeActive();
    item.classList.add("active");
    if (item.id !== "notifications") {
      notPopupEl.style.display = "none";
    } else {
      notPopupEl.style.display = "block";
      document.querySelector(
        "#notifications .notification-count"
      ).style.display = "none";
    }
  });
});
const removeActive = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};
//!sidebar end

//!messages start
messageNotEL.addEventListener("click", () => {
  messagesEl.style.boxShadow = "0 0 1rem var(--color-primary)";
  document.querySelector(
    "#messages-notifications .notification-count"
  ).style.display = "none";
  setTimeout(() => {
    messagesEl.style.boxShadow = "none";
  }, 2000);
});
//!messages end
const searchMessage = () => {
  const val = messageSearchEl.value.toLowerCase();
  messagesAllEl.forEach((chat) => {
    let name = chat.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      chat.style.display = "flex";
    } else {
      chat.style.display = "none";
    }
  });
};

messageSearchEl.addEventListener("keyup", searchMessage);
//opens Modal
const openThemeModal = () => {
  themeModal.style.display = "grid";
};

//closeMdal
const closeThemeModal = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  }
};
themeModal.addEventListener("click", closeThemeModal);
theme.addEventListener("click", openThemeModal);

//fontSizes
const removeActiveSize = () => {
  fontSizes.forEach((item) => {
    item.classList.remove("active");
  });
};

fontSizes.forEach((size) => {
  size.addEventListener("click", () => {
    removeActiveSize();
    let fontSize;
    size.classList.toggle("active");
    if (size.classList.contains("font-size-1")) {
      fontSize = "10px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "13px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.style.setProperty("--sticky-top-left", "-2rem");
      root.style.setProperty("--sticky-top-right", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "19px";
      root.style.setProperty("--sticky-top-left", "-5rem");
      root.style.setProperty("--sticky-top-right", "-25rem");
    } else if (size.classList.contains("font-size-5")) {
      fontSize = "22px";
      root.style.setProperty("--sticky-top-left", "-12rem");
      root.style.setProperty("--sticky-top-right", "-35rem");
    }
    document.querySelector("html").style.fontSize = fontSize;
  });
});

//color theme changed
const removeActiveColor = () =>{
    colorPalette.forEach(item =>{
        item.classList.remove("active");
    })
}
colorPalette.forEach(color => {
    color.addEventListener("click", () =>{
        let primaryHue;
        removeActiveColor();
        color.classList.toggle("active")
        if(color.classList.contains("color-1")){
            primaryHue = 252;
            

        }else if (color.classList.contains("color-2")){
            primaryHue = 52;
        }
        else if (color.classList.contains("color-3")){
            primaryHue = 352;
        }
        else if (color.classList.contains("color-4")){
            primaryHue = 152;
        }
        else if (color.classList.contains("color-5")){
            primaryHue = 202;
        }
        root.style.setProperty("--primary-color-hue", primaryHue)
        
    })
})

let lightTheme;
let whiteTheme;
let darkTheme;

const changeBg = () => {
    root.style.setProperty("--light-color-lightness", lightTheme)
    root.style.setProperty("--white-color-lightness", whiteTheme)
    root.style.setProperty("--dark-color-lightness" ,darkTheme)
}
bg1.addEventListener("click", () =>{
    darkTheme = "17%";
    whiteTheme = "100%";
    lightTheme = "95%";
    bg1.classList.add("active");
    bg2.classList.remove("active");
    bg3.classList.remove("active");
    changeBg();
})

bg2.addEventListener("click", () =>{
    darkTheme = "95%";
    whiteTheme = "20%";
    lightTheme = "15%";
    bg2.classList.add("active");
    bg1.classList.remove("active");
    bg3.classList.remove("active");
    changeBg();
})

bg3.addEventListener("click", () =>{
    darkTheme = "95%";
    whiteTheme = "10%";
    lightTheme = "0%";
    bg3.classList.add("active");
    bg1.classList.remove("active");
    bg2.classList.remove("active");
    changeBg();
})

