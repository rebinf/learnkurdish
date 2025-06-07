isOpen = true;
function ToggleNav()
{
    if (isOpen)
    {
        closeNav();
        isOpen = false;
    }
    else
    {
        openNav();
        isOpen = true;
    }
}

function openNav()
{
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("menu-btn").style.left = "250px";
}

function closeNav()
{
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("menu-btn").style.left = "0";
}

var tds = document.querySelectorAll("td, th");
var groups = [];

for (var i = 0; i < tds.length; i++)
{
    if (tds[i].getAttribute('rowspan') != null)
    {
        var rspan = tds[i];
        groups.push({
            parent: rspan.parentNode,
            height: rspan.getAttribute('rowspan')
        });
    }
}

var count = 0;
var rows = document.querySelectorAll('tr');
var dark = true;

for (var i = 0; i < rows.length; i++)
{
    var row = rows[i];
    var index = groupIndex(row);
    if (index != null && dark)
    {
        var group = groups[index];
        var height = parseInt(group.height);
        for (var j = i; j < i + height; j++)
        {
            rows[j].classList.add('dark');
        }
        i += height - 1;
        dark = !dark;
        continue;
    }
    if (dark)
    {
        rows[i].classList.add('dark');
    }
    dark = !dark;
}

function groupIndex(element)
{
    for (var i = 0; i < groups.length; i++)
    {
        var group = groups[i].parent;
        if (group == element)
        {
            return i;
        }
    }
    return null;
}