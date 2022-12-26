function fibonacci()
{
    var n1=0;
    var n2=1;
    console.log(n1);
    while(n2<=100)
    {
        console.log(n2);
        // this logic will swap n2-->n1 & n2=total_of_n1_n2
        n2=n1+n2;
        n1=n2-n1;
    }
}
fibonacci();