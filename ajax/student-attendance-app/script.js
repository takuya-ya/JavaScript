document.getElementById('login-btn').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    if (!username) return alert('ユーザー名を入力してください');

    document.getElementById('login-area').style.display = 'none';
    document.getElementById('main-area').style.display = 'block';

    fetch('students.json')
        .then(r => {
            if (!r.ok) throw new Error('データ取得失敗');
            return r.json();
        })
        .then(data => {
            const list = document.getElementById('student-list');
            list.innerHTML="";
            data.forEach(student => {
                const li = document.createElement('li');
                li.className = student.present ? 'present' : 'absent';
                li.textContent = `${student.name} - 出席: ${student.present ? '○' : '×'}`;
                list.appendChild(li);
            });
        })
        .catch(err => {
            alert('エラーが発生しました: ' + err.message);
        });
});
