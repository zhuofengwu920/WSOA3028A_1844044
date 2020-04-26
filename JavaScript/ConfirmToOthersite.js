var hLink = document.getElementsByClassName("otherSite");

for(var i = 0; i < hLink.length; i++)
{
    hLink[i].addEventListener("click", GoToSite);
}

function GoToSite() {
    let goingToOther = confirm("You are about to leave this site to another site. Are you sure?");
    if(goingToOther)
    {
        window.location = this.attributes[0].value;
    }
}
