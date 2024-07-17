// 初始加载时只显示基础图片和瀏海1
window.onload = function () {

    // 隐藏除了基础图片和瀏海1以外的所有衣物
    var allClothing = document.getElementsByClassName('clothing');
    for (var i = 0; i < allClothing.length; i++) {
        if (allClothing[i].id !== 'base' && allClothing[i].id !== 'f_hair01') {
            allClothing[i].style.display = 'none';
        }
    }
};

var clothes = {
    ear: ['ear0', 'ear1',],
    f_hair: [, 'f_hair01', 'f_hairpajamas', 'f_hairvalen', 'f_hairshort', 'f_hairwayo'],
    accessory: ['accessory0', 'earing01'],
    coat: ['coat0', 'coatvalen', 'coathigh'],
    cloth: ['cloth0', 'cloth01', 'clothpajamas', 'clothvalen', 'clothhigh1', 'clothhigh2', 'clothwayo','clothdress'],
    shoe: ['shoe0', 'shoe01', 'shoevalen', 'shoehigh'],
    sock: ['sock0', 'sock01', 'sockvalen'],
    b_hair: ['b_hair01', 'b_hairpajamas', 'b_hairvalen', 'b_hairshort', 'b_hairhigh', 'b_hairwayo'],
    tail: ['tail0', 'tail1','tailL','tailR'],
};

function changeClothing(clothingId) {
    var category = '';
    for (var key in clothes) {
        if (clothes[key].includes(clothingId)) {
            category = key;
            break;
        }
    }
    var clothingType = document.getElementsByClassName(category);

    // 隱藏同一類別中已經顯示的圖片
    for (var i = 0; i < clothingType.length; i++) {
        clothingType[i].style.display = 'none';
    }

    // 顯示點擊的圖片
    var clickedClothing = document.getElementById(clothingId);
    clickedClothing.style.display = 'block';


}


function showCategory(category) {
    var buttonsContainer = document.getElementById('clothingButtons');
    buttonsContainer.innerHTML = '';

    // 根据选择的类别显示相应的按钮
    clothes[category].forEach(function (clothingId) {
        var button = document.createElement('button');
        var image = document.createElement('img');
        image.src = 'img/icon/' + clothingId + '.PNG'; // 根据你的图片命名规则调整路径
        image.alt = clothingId; // 替换为更友好的文字或图标
        image.className = 'button-image';
        button.appendChild(image);
        button.onclick = function () {
            changeClothing(clothingId);
        };
        buttonsContainer.appendChild(button);
    });
}
