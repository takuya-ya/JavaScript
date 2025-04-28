{
    // let score =Math.floor(Math.random() * 100)+1;
    let score =Math.floor(Math.random() * 101);
    console.log(`${score}`);

    let revue = '';

    if (score === 100) {
        revue = '満点';
    } else if (score >= 80) {
        revue = '合格';
    } else if (score <= 30) {
        revue = '赤点';
    } else {
        revue = '不合格';
    }

    console.log(`あなたの点数は${score}でした!${revue}です！ `);

}