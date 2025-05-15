// ; f. サイコロ（1〜6までの整数）をランダムに表示するコードを記入せよ。
// let dice = Math.floor(Math.random() * 6 + 1);
// cl(dice);



// ; c. 現在の日時をコンソールに表示させる関数now
     function now() {
        const current = new Date();
        console.log(currenttoString());
        } 
        
        now();


//         問5.
// ; 要素数５の配列photoがある。
// ; 要素はそれぞれ
// ; photo1.jpg,
// ;  photo2.jpg ,
// ;  photo3.jpg ,
// ;  photo4.jpg ,
// ;  photo5.jpg の五個とする。
// ; これらはimageフォルダに格納されている。
// ; これらをJavaScript 上で img タグを生成し読み込むコードを記載せよ。
// ; 問6.
// ; 次のHTML コードがあります。
// ; <div class="person"> 要素に、ユーザーID、ユーザー名、ユーザーコストというデータ属性が含まれています。
// ; <div class="person" data-user-id="300" data-user-name="Nekosuki" data-user-cost="15080"></div>
// ;  <div class="person" data-user-id="301" data-user-name="Takahashi" data-user-cost="20000"></div>
// ;  <div class="person" data-user-id="302" data-user-name="Yamamoto" data-user-cost="18000"></div>
// ;  a.すべての.person 要素から、ユーザーID、ユーザー名、ユーザーコストの情報を取得し、
// ; 配列としてまとめてください。
// ; 取得したデータをコンソールに表示させ、以下のように表示されることを確認してください
// ; [
// ;  ]
// ;  { userId: "300", userName: "Nekosuki", userCost: "15080" },
// ;  { userId: "301", userName: "Takahashi", userCost: "20000" },
// ;  { userId: "302", userName: "Yamamoto", userCost: "18000" }
// ; 問6-ｂに続く
// ; ｂ. html上に 「ユーザー情報を表示する」ボタンを作成し、そのボタンを
// ; クリックすると、すべてのユーザー情報（ユーザー名とコスト）を一覧表示
// ; する機能を作成してください。
// ; ※表示の形式は次のようにしてください
// ; Nekosuki のコストは 15080 円です。
// ; Takahashi のコストは 20000 円です。
// ; Yamamoto のコストは 18000 円です。