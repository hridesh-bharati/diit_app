function AlljsStyle() {
    return(
<>

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: !0,
    centeredSlides: !0,
    slidesPerView: "auto",
    coverflowEffect: { rotate: 30, stretch: 0, depth: 500, modifier: 1, slideShadows: !0 },
    autoplay: { delay: 1e3, disableOnInteraction: !1 },
    pagination: { el: ".swiper-pagination" },
});
</>
    );
}