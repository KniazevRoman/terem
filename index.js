// --- Задание 2.1 через встроенный метод jQuery --- //

// $(".btn-warning").click(function() {
//     $(".row:first-child").toggle();
// });


// --- Задание 2.1 через изменение Bootstrap классов с помощью jQuery --- //

$(".btn-warning").click(function() {
    $(".row:first-child").toggleClass('d-none');
});


// --- Задание 2.1 через нативный JS и без использования классов --- //

// const warningButton = document.querySelector('.btn-warning');
// const blockToHide = document.querySelector('.row:first-child');
// const contentToHide = blockToHide.innerHTML;

// warningButton.addEventListener('click', () => {
//     if (blockToHide.innerHTML !== '') {
//         blockToHide.innerHTML = '';
//     } else {
//         blockToHide.innerHTML = contentToHide;
//     }
// });


// --- Задание 2.2 через jQuery и манипуляции с DOM --- //

// $(".row:nth-child(2) div:nth-child(1)").addClass("green-background");
// $(".row:nth-child(2) div:nth-child(2)").addClass("gradient-background");
// $(".row:nth-child(2) div:nth-child(3)").addClass("cyan-background");

// const greenBlock = $(".row:nth-child(2) div:nth-child(1)");
// const gradientBlock = $(".row:nth-child(2) div:nth-child(2)");
// const cyanBlock = $(".row:nth-child(2) div:nth-child(3)");

// let initialOrder = true;

// $(".btn-success").click(function() {
//     if (initialOrder) {
//         $(".row:nth-child(2)").empty();
//         $(".row:nth-child(2)").append(gradientBlock, greenBlock, cyanBlock);

//         initialOrder = false;
//     } else {
//         $(".row:nth-child(2)").empty();
//         $(".row:nth-child(2)").append(greenBlock, gradientBlock, cyanBlock);

//         initialOrder = true;
//     }
// });


// --- Задание 2.2 через Bootstrap классы и нативный JS --- //

const row = document.querySelector(".row:nth-child(2)");
const block1 = document.querySelector(".row:nth-child(2) div:nth-child(1)");
const block2 = document.querySelector(".row:nth-child(2) div:nth-child(2)");
const block3 = document.querySelector(".row:nth-child(2) div:nth-child(3)");
const orderButton = document.querySelector('.btn-success');

row.classList.add("d-flex");
block1.classList.add("green-background");
block2.classList.add("gradient-background");
block3.classList.add("cyan-background");

orderButton.addEventListener('click', () => {
    block2.classList.toggle('order-1');
    block1.classList.toggle('order-2');
    block3.classList.toggle('order-3');
});


// --- Задание 2.3 через встроенный компонент Bootstrap и jQuery --- //

const modalInnerHtml = `    
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-bottom-0">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-center">
                    Привет, мир
                </div>
            </div>
        </div>
    </div>`;


$(document.body).prepend(modalInnerHtml);

const modal = new bootstrap.Modal(document.querySelector('.modal'));
modal.toggle();


// --- Задание 2.3 через нативный JS --- //

// const modal = document.createElement('div');
// modal.classList.add('modal-native');
// modal.innerHTML = `
//     <div class="modal-content">
//         <span class="close-button">&times;</span>
//         <p>Привет, мир</p>
//     </div>`;

// document.body.prepend(modal);


// const closeButton = document.querySelector(".close-button");
// closeButton.onclick = function() {
//   modal.style.display = "none";
// }

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }