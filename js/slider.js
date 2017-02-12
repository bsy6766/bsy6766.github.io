var imageCount = 1;
var timer;
var paused = false;

function slider(offset, projectName, totalImageCount) {
	var image = document.getElementById('image');
	imageCount = imageCount + offset;
	if(imageCount > totalImageCount)
	{
		imageCount = 1;
	}

	if(imageCount < 1)
	{
		imageCount = totalImageCount;
	}	

	image.src = "img/projects/detail/" + projectName+ imageCount +".png";

	clearTimeout(timer);
	if(!paused)
	{
    	timer = setTimeout(function() { slider(1, projectName, totalImageCount);}, 3000);
	}
	
	if(offset == 0)
	{
		if(paused)
		{
			paused = false;
	    	timer = setTimeout(function() { slider(1, projectName, totalImageCount);}, 3000);
		}
	}
}

function endSlider()
{
	clearTimeout(timer);
	paused = true;
}