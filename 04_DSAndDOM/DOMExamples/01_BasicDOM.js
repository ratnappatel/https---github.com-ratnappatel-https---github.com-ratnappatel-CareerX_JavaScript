function doThings()
        {
            var result="";
            
            var elements=document.getElementsByTagName('li');
            for(var i=0;i<elements.length;i++)
            {
                 result+=", "+elements[i].innerText;
                 elements[i].style.borderColor="red";
            }
            alert(result);
        }
       