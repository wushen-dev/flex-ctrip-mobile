window.onload = function(){

    var LanguageSelect = document.querySelector('.mask .LanguageSelect');
    // 点击页面底部选择语种的时候弹出语种选择层
    var Language = document.getElementsByClassName('Language')[0];
    var mask = document.querySelector('.mask');

    Language.onclick = function(){
        mask.style.display = 'block';
        mask.style.display = 'block';
        setTimeout(() => {
            LanguageSelect.classList.add('dis');
            mask.classList.add('dis');
        }, 100);
        
    }

    // 点击语种遮罩层的时候关闭该层
    mask.onclick = function(e){
        if(e.target == this){
            LanguageSelect.classList.remove('dis');
            mask.classList.remove('dis');
            setTimeout(() => {
                mask.style.display = 'none';
            }, 500);
        }
        
    }
    // 点击语种选择的X的时候关闭该层
    var maskClose = document.querySelector('.LanguageSelect i');
    maskClose.onclick = mask.onclick;
}