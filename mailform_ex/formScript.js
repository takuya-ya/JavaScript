document.querySelector("#contactForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target; //フォームの内容と考えて
    const data = new FormData(form);
    // FormData オブジェクトは、フォームの name 属性 を キー（key） として使い、対応するフォーム要素の 値（value） をその値として保持

    const errors = {
        name: document.querySelector("#name-error"),
        email: document.querySelector("#email-error"),
        gender: document.querySelector("#gender-error"),
        category: document.querySelector("#category-error"),
        message: document.querySelector("#message-error")
    };

    // エラーメッセージを初期化
    // for...in文
    for (let key in errors) {
        errors[key].textContent = "";
    }

    let hasError = false;

    const name = data.get("name")?.trim() || "";
    if (!name) {
        errors.name.textContent = "お名前を入力してください。";
        hasError = true;
    }

    const email = data.get("email")?.trim() || "";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errors.email.textContent = "有効なメールアドレスを入力してください。";
        hasError = true;
    }

    const gender = data.get("gender");
    if (!gender) {
        errors.gender.textContent = "性別を選択してください。";
        hasError = true;
    }

    const category = data.get("category");
    if (!category) {
        errors.category.textContent = "お問い合わせ種別を選択してください。";
        hasError = true;
    }

    const message = data.get("message")?.trim() || "";
    if (message.length < 10) {
        errors.message.textContent = "お問い合わせ内容は10文字以上で入力してください。";
        hasError = true;
    }

    if (!hasError) {
        alert("送信成功！");
        console.log("送信データ:", Object.fromEntries(data.entries()));//formData.entries　キーと値のペアを、繰り返し可能なイテレーターとして取得
        form.reset();
    }
});