// script.js

document.addEventListener("DOMContentLoaded", function() {
  // 모든 섹션과 GNB 메뉴 링크 선택
  const sections = document.querySelectorAll("section");
  const menuLinks = document.querySelectorAll("#gnb .menu li a");
  const logo = document.querySelector("#gnb .logo"); // 로고 선택

  // 특정 id를 가진 섹션만 active 클래스를 추가하여 보이게 하는 함수
  function showSection(id) {
    sections.forEach(section => {
      if (section.id === id) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    });
  }

  // GNB 메뉴 링크에 클릭 이벤트 리스너 추가
  menuLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href").substring(1);

      // "관리자 Linkedin" 링크는 display 변경 제외
      if (this.getAttribute("href").startsWith("http")) {
        return; // 외부 링크이므로 display 변경을 무시
      }

      // 페이지 내 섹션 보이기 처리
      e.preventDefault(); // 기본 링크 동작 방지
      showSection(targetId);
    });
  });

  // 로고 클릭 시 Home과 동일한 동작 수행
  logo.addEventListener("click", function(e) {
    e.preventDefault(); // 기본 링크 동작 방지
    showSection("home"); // Home 섹션으로 이동
  });

  // URL에 해시(#...)가 있다면 해당 섹션을 보여주기
  if(window.location.hash) {
    const initialId = window.location.hash.substring(1);
    showSection(initialId);
  } else {
    // 기본: home 섹션을 보여줌
    showSection("home");
  }
});
