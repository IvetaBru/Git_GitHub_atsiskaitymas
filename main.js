document
.querySelector('#tabBtn1')
.addEventListener('click', function(){
    document.querySelector('.content').classList.add('hidden');
    document.querySelector('#tab1').style.display = 'block';
});

document
.querySelector('#closeBtn1')
.addEventListener('click', function(){
    document.querySelector('#tab1').style.display = 'none';
    document.querySelector('.content').classList.remove('hidden');
})

document
.querySelector('#tabBtn2')
.addEventListener('click', function(){
    document.querySelector('.content').classList.add('hidden');
    document.querySelector('#tab2').style.display = 'block';
});

document
.querySelector('#closeBtn2')
.addEventListener('click', function(){
    document.querySelector('#tab2').style.display = 'none';
    document.querySelector('.content').classList.remove('hidden');
})

document
.querySelector('#tabBtn3')
.addEventListener('click', function(){
    document.querySelector('.content').classList.add('hidden');
    document.querySelector('#tab3').style.display = 'block';
});

document
.querySelector('#closeBtn3')
.addEventListener('click', function(){
    document.querySelector('#tab3').style.display = 'none';
    document.querySelector('.content').classList.remove('hidden');
})

document
.querySelector('#tabBtn4')
.addEventListener('click', function(){
    document.querySelector('.content').classList.add('hidden');
    document.querySelector('#tab4').style.display = 'block';
});

document
.querySelector('#closeBtn4')
.addEventListener('click', function(){
    document.querySelector('#tab4').style.display = 'none';
    document.querySelector('.content').classList.remove('hidden');
})


