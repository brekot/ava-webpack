(function() {

    var fileselect = document.getElementById("js-file-select"),
        filedrag = document.getElementById("js-file-drag");

	function Output(msg)
    {
		document.getElementById("js-file-messages").innerHTML = msg;
	}

	function FileDragHover(e)
    {
		e.stopPropagation();
		e.preventDefault();
	}

	function FileSelectHandler(e)
    {
		FileDragHover(e);

		if (e.dataTransfer && e.dataTransfer.files) fileselect.files = e.dataTransfer.files;

        var files = fileselect.files;

		if (files.length == 1)
        {
            Output(files[0].name);
        }
        else
        {
            Output('Выбранно файлов: ' + files.length);
        }
	}

	function Init()
    {
        if (!fileselect || !filedrag) return;

        filedrag.addEventListener("dragover", FileDragHover, false);
        filedrag.addEventListener("dragleave", FileDragHover, false);
        filedrag.addEventListener("drop", FileSelectHandler, false);
        fileselect.addEventListener("change", FileSelectHandler, false);
	}

	if (window.File && window.FileList && window.FileReader)
    {
		Init();
	}

})();