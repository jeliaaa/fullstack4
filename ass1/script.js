$(document).ready(function() {
    const items = [
        { id: 1, propsAvail: 30, city: "Batumi", foto: "https://raw.githubusercontent.com/bluebill1049/react-simple-img/master/example/src/logo.png" },
        { id: 2, propsAvail: 10, city: "Tbilisi", foto: "https://raw.githubusercontent.com/bluebill1049/react-simple-img/master/example/src/logo.png" },
        { id: 3, propsAvail: 40, city: "Erevan", foto: "https://raw.githubusercontent.com/bluebill1049/react-simple-img/master/example/src/logo.png" },
        { id: 4, propsAvail: 5, city: "Baku", foto: "https://raw.githubusercontent.com/bluebill1049/react-simple-img/master/example/src/logo.png" },
        { id: 5, propsAvail: 60, city: "Madrid", foto: "https://raw.githubusercontent.com/bluebill1049/react-simple-img/master/example/src/logo.png" },
        { id: 6, propsAvail: 100, city: "Warsaw", foto: "https://raw.githubusercontent.com/bluebill1049/react-simple-img/master/example/src/logo.png" }
    ];

    items.forEach((item) => {
        const itemCard = `
        <div id="card">
        <h1 class="city"> ${item.city}</h1>
        <img alt="" src="${item.foto}">
        <p class="property">Properties Available:${item.propsAvail}>
        </div>
        `
        $(".carousel").append(itemCard);
    })

    $(".carousel").slick({
        infinite: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
})