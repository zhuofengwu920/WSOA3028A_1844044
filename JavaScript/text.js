var hLink = document.getElementsByClassName("otherSite");

for(var i = 0; i < hLink.length; i++)
{
    hLink[i].addEventListener("click", ConfirmLog());
}

function ConfirmLog()
{
    let goingToOther = confirm("You are about to leave this site to another site. Are you sure?");
    if(goingToOther)
    {
        window.location = hLink.attributes[0].value;
    }
}