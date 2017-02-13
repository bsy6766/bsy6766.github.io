var imageCount = 1;
var projectName;
var totalImageCount;
var timer;
var idName;
var paused = false;
var ended = true;

function slider(offset) {
	if(!ended)
	{
		var image = document.getElementById(idName);
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
		// alert("img/projects/detail/" + projectName+ imageCount +".png");

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
}

function pauseSlider()
{
	clearTimeout(timer);
	paused = true;
	// alert("Pause slider, name: " + projectName);
}

function stopSlider()
{
	ended = true;
	// alert("End slider, name: " + projectName);
}

function startSlider()
{
	ended = false;
	// alert("Start slider, name: " + projectName);
}

function initSlider(index, _projectName, _totalImageCount, _idName)
{
	imageCount = index;
	projectName = _projectName;
	totalImageCount = _totalImageCount;
	idName = _idName;
	paused = false;

	// alert("init with index: " + index + ", projectName: " + _projectName + ", totalImageCount: " + _totalImageCount);

	slider(0);
}