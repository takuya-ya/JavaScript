async function loadProducts() {
    try {
        //.then()でなく、返り値は変数に代入に代入
        const response = await fetch('products.json');
        if (!response.ok) throw new Error('商品データの取得に失敗しました');
        //.jsonもPromiseオブジェクトを返すから、そのため以下のように await を使って、パース完了を待つ必要があります：

        const products = await response.json();

        const list = document.querySelector('#product-list');
        list.innerHTML = '';
        products.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} — 在庫: ${item.stock}`;
            list.appendChild(li);
        });
    } catch (error) {
        // .messageにはnew Error('この部分')の引数部分が入る
        alert(error.message);
    }
}

async function loadStudents() {
    try {
        const response = await fetch('students.json');
        if (!response.ok) throw new Error('生徒データの取得に失敗しました');
        const students = await response.json();

        const list = document.querySelector('#student-list');
        list.innerHTML = '';
        students.forEach(student => {
            const li = document.createElement('li');
            li.textContent = `${student.name} — 点数: ${student.score}`;
            list.appendChild(li);
        });
    } catch (error) {
        alert(error.message);
    }
}

document.querySelector('#load-products').addEventListener('click', loadProducts);
document.querySelector('#load-students').addEventListener('click', loadStudents);
