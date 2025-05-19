document.querySelector('#load-products').addEventListener('click', () => {
    fetch('products.json')
        .then(response => {
            if (!response.ok)
                throw new Error('商品データの取得に失敗しました');
            return response.json();
        })
        .then(products => {
            const list = document.querySelector('#product-list');
            list.innerHTML = '';
            products.forEach(item => {
                const li = document.createElement('li');
                li.textContent = `${item.name} — 在庫: ${item.stock}`;
                list.appendChild(li);
            });
        })
        .catch(error => {
            alert(error.message);
        });
});

document.querySelector('#load-students').addEventListener('click', () => {
    fetch('students.json')
        .then(response => {
            if (!response.ok) throw new Error('生徒データの取得に失敗しました');
            return response.json();
        })
        .then(students => {
            const list = document.querySelector('#student-list');
            list.innerHTML = '';
            students.forEach(student => {
                const li = document.createElement('li');
                li.textContent = `${student.name} — 点数: ${student.score}`;
                list.appendChild(li);
            });
        })
        .catch(error => {
            alert(error.message);
        });
});
