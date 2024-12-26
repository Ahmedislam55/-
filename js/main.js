const btn  = document.querySelector('.btn');
const disp = document.getElementById('result');
btn.addEventListener('click' , () =>
{
    const num = document.getElementById('number').value;
    const percentage = 0.025 ;
    if(num==0)
    {
        disp.innerText=`من فضلك ادخل القيمة`
    }
    else
    {
        let finalResult = (num * percentage);
        disp.innerText=`نسبةالزكاة = ${finalResult} جنية`;
    }
    document.getElementById('number').value = "";
})
