
var pictureContainers = document.querySelectorAll('.picture-container-about');
for (var i = 0; i < pictureContainers.length; i++) {
    pictureContainers[i].addEventListener('click', function () {
        var picture = this.querySelector('.picture-about');
        var description = this.querySelector('.picture-description-about');
        if (picture.style.transform === 'scale(2)') {
            picture.style.transform = 'scale(1)';
            description.style.display = 'none';
        } else {
            picture.style.transform = 'scale(2)';
            description.style.display = 'block';
        }
    });
}