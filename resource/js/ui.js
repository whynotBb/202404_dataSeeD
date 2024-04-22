// 화면 구현만을 위해 퍼블단에서 작성한 스크립트 입니다.
/*************
gnb
*************/
const menus = document.querySelectorAll('nav ul li');
menus.forEach(function (item) {
    item.addEventListener('click', function () {
        menus.forEach(function (item) {
            item.classList.remove('on');
        });
        this.classList.add('on');
    });
});
/*************
드롭다운
*************/
const dropdown = document.querySelectorAll('.dropdown');
const btnDropdown = document.querySelectorAll('.dropdown p');
const dropdownItem = document.querySelectorAll('.dropdown ul li');
// 드롭다운 여닫기
for (let i = 0; i < btnDropdown.length; i++) {
    btnDropdown[i].addEventListener('click', function () {
        if (this.parentNode.classList.contains('disabled')) {
            return;
        } else {
            this.parentNode.classList.toggle('on');
        }
    });
}
// 드롭다운 닫기
for (let i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener('mouseleave', function (e) {
        e = e ? e : window.event;
        this.classList.remove('on');
    });
}

for (let i = 0; i < dropdownItem.length; i++) {
    dropdownItem[i].addEventListener('click', function () {
        const drop = this.parentNode;
        const text = this.innerText;
        const value = this.dataset.value;
        drop.parentNode.classList.remove('on');
        drop.previousElementSibling.textContent = text;
        drop.previousElementSibling.dataset.value = value;
    });
}
