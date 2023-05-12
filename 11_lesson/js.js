const API_PRODUCT = 'https://dummyjson.com/products/';

const API_PRODUCT_DETAILS = 0;

const productList = document.getElementById('product-list');
const limitInput = document.getElementById('pagination-limit');
const updateBtn = document.getElementById('update-pagination');

let pagination = {
    limit: 4,
    skip: 0,
    total: null,

    next() {
        this.skip += this.limit;
    },
    get isEnd() {
        if (this.total == null) return false;
        return this.skip >= this.total;
    }

};

function connectingProductServer() {
    let url = `${API_PRODUCT}?skip=${pagination.skip}&limit=${pagination.limit}`;
    pagination.next();

    fetch(url).then(res => res.json()).then(data => {
        pagination.total = data.total;
        showMor.disabled = pagination.isEnd;

        console.log(data);
        const products = data.products;

        for (const p of products) {
            showProduct(p);
        }

    });
}

function showProduct(product) {
    const productItem = document.createElement('li');
    productItem.innerHTML = `<div class="card" style="width: 18rem;">
                                  <img src="${product.thumbnail}" class="card-img-top" alt="...">
                                  <div class="card-body">
                                    <h5 class="card-title">${product.title}</h5>
                                    <p class="card-text">Price:${product.price}$</p>
                                  </div>
                                </div>`;
    productList.appendChild(productItem);
    productItem.addEventListener('click', () => openModal(product.id));
  }
  

updateBtn.onclick = () => {
    pagination.limit = parseInt(limitInput.value);
    pagination.skip = 0;
    productList.innerHTML = '';
    connectingProductServer();
};

connectingProductServer();

showMor.onclick = () => {
    connectingProductServer();
};

//Modal
const modalEL = document.querySelector(".modal");
async function openModal(id) {
    console.log(id);
    const resp = await fetch(API_PRODUCT + id);
    const productData = await resp.json();
    modalEL.classList.add("modal--show");

    const imagesRow = productData.images.map((imageUrl) => {
        return `<img src="${imageUrl}" alt="" class="modal__movie-backdrop">`;
    }).join('');

    modalEL.innerHTML = `<div class="modal__card">
        <div class="modal__images-container">
            ${imagesRow}
        </div>
        <h2>
            <span class="modal__movie-title">Назва: ${productData.title}</span>
        </h2>
        <ul class="modal__movie-info">
            <li class="modal__movie-genre">Ціна: ${productData.price}$</li>
            <li class="modal__movie-overview">Категорія: ${productData.discountPercentage}</li>
            <li class="modal__movie-runtime">Рейтинг: ${productData.rating}</li>
            <li class="modal__movie-runtime">Запас: ${productData.stock}</li>
            <li class="modal__movie-runtime">Бренд: ${productData.brand}</li>
            <li class="modal__movie-overview">Категорія: ${productData.category}</li>
            <li class="modal__movie-genre">Опис: ${productData.description}</li>
        </ul>
        <button type="button" class="modal__button-close">Закрити</button>
    </div>`;

    const btnClose = document.querySelector(".modal__button-close");
    btnClose.addEventListener("click", () => closeModal());
}



function closeModal() {
    modalEL.classList.remove("modal--show")
}

window.addEventListener("click", (e) => {
    if (e.target === modalEL) {
        closeModal();
    }
})