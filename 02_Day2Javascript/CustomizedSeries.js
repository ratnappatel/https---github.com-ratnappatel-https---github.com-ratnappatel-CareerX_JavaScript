function series(limit)
{
    // 1 2 3 4 10 5 6 7 8 26 9 10 11 12 42........ limit
    var sum=0;
    var count=0;
    for(var i=1;i<=limit;i++)
    {
        document.write(""+i+", ");
        count++;
        sum=sum+i;
        if(count==4)
        {
            count=0;
            document.write("<b>"+sum+"</b>, ");
            sum=0;
        }        
    }    
}