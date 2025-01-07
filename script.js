document.addEventListener('DOMContentLoaded', function() {
    fetch('php/get_gallery_data.php')
        .then(response => response.json())
        .then(data => {
            const galleryContainer = document.getElementById('gallery-container');
            data.forEach(item => {
                const galleryItem = document.createElement('div');
                galleryItem.classList.add('col-md-4');
                galleryItem.innerHTML = `
                    <div class="card">
                        <img src="images/${item.gambar}" class="card-img-top" alt="${item.nama_karya}">
                        <div class="card-body">
                            <h5 class="card-title">${item.nama_karya}</h5>
                            <p class="card-text">${item.deskripsi}</p>
                        </div>
                    </div>
                `;
                galleryContainer.appendChild(galleryItem);
            });
        });
});
