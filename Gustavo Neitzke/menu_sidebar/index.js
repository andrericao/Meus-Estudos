var header = document.getElementById('header');
var header_navigation = document.getElementById('header_navigation');
var content = document.getElementById('content');
var showSideBar = false;

function toggleSideBar()
{
  showSideBar = !showSideBar;
  console.log(showSideBar);
  if(showSideBar)
  {
    header_navigation.style.marginLeft = "-10vw"
    header_navigation.style.animationName = "showSideBar" 
    content.style.filter = 'blur(3px)'
  }
  else
  {
    header_navigation.style.marginLeft = "-100vw"
    header_navigation.style.animationName = ""
    content.style.filter = ''
  }

}

function closeSideBar()
{
  if(showSideBar)
  {
    showSideBar()
  }
}

window.addEventListener('resize', function(event)
{
  if(window.innerWidth > 768 && showSideBar) 
    {
      toggleSideBar()
    }
})