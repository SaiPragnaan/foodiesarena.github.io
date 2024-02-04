const price = {
    "Chicken Biryani": 225, "Paneer Dosa": 85, "Crab 65": 319, "Paneer Butter Masala": 248, "Pani Puri": 69, "Chineese Noodles": 99, "Chicken Lolipop": 188, "Paneer Showerma": 109
};


const items = ["Chicken Biryani", "Paneer Dosa", "Crab 65", "Paneer Butter Masala", "Pani Puri", "Chineese Noodles", "Chicken Lolipop", "Paneer Showerma"
];

let ornum = [];

document.addEventListener("DOMContentLoaded", function () {
    const addbutton = document.querySelectorAll(".button");
    addbutton.forEach(btn => {
        btn.addEventListener("click", function () {
            if (btn.textContent !== "Added") {
                btn.textContent = "Added";
                const ordernum = this.id;
                ornum.push(ordernum);
                sessionStorage.setItem("test1", JSON.stringify(ornum));
            }
        });
    });

});

const ordersstored = sessionStorage.getItem("test1");
const orders = JSON.parse(ordersstored);


let table = document.querySelector("tbody");
let thad = document.querySelector("thead");
if (orders) {
    thad.innerHTML = `<tr>
                                <th>No.</th>
                                <th>NAME</th>
                                <th>QUANTITY</th>
                                <th>COST</th>
                            </tr>`;

}
table.innerHTML = " ";
for (let i = 0; i < orders.length; i++) {
    table.innerHTML += `<tr id="cart-order">
                            <th class="item-number">${i + 1}</th>
                            <td class="item-name">${items[orders[i] - 1]}</td>
                            <td class="quantity">1</td>
                            <td class="price">${price[items[orders[i] - 1]]}</td>
                            <td><button class="change-qty">+</button></td>
                            <td><button class="change-qty">-</button></td>
                        </tr>`
}
let totalPrice = document.getElementById("final-cost");
let total = 0;
const initialPrices = document.querySelectorAll(".price");
initialPrices.forEach(initialPrice => {
    total += parseInt(initialPrice.textContent);
});
totalPrice.textContent = total;
const changeBtns = document.querySelectorAll(".change-qty");
changeBtns.forEach(button => {
    button.addEventListener("click", function () {
        const parent = this.closest("tr");
        const quantity = parent.querySelector(".quantity");
        let quantityValue = parseInt(quantity.textContent);
        if (quantity) {
            if (this.textContent === "+") {
                quantityValue++;
                quantity.textContent = quantityValue;
            }
            else {
                quantityValue--;
                quantity.textContent = quantityValue;
            }
        }
        const itemName = parent.querySelector(".item-name");
        const price = parent.querySelector(".price");
        price.textContent = (price[itemName.textContent]) * (quantityValue);
        let totalcost = document.getElementById("final-cost");
        let total = 0;
        const initialPrices = document.querySelectorAll(".price");
        initialPrices.forEach(initialPrice => {
            total += parseInt(initialPrice.textContent);
        });
        totalPrice.textContent = total;
    })
})


