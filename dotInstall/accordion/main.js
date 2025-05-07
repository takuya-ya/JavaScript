'use strict';

{
  const dts = document.querySelectorAll('dt');

  dts.forEach(dt => {
    dt.addEventListener('click', () => {
      // parentNodeにより、直接の親だけにクラスを追加
      dt.parentNode.classList.toggle('appear'); 

      dts.forEach(el => {
        if(el !== dt) {
          el.parentElement.classList.remove('appear')

        }

      });

    })
  })
}