<!-- <template>
  <div class="sliderWrapper">
    <div class="slider">
      <div class="slide-track">
        <div class="logos-slide">
          <div class="slide">
            <img
              src="@/assets/images/typesOfVa/slider/Administration.png"
              alt="" />
          </div>
          <div class="slide">
            <img
              src="@/assets/images/typesOfVa/slider/Appointment-Setting.png"
              alt="" />
          </div>
          <div class="slide">
            <img
              src="@/assets/images/typesOfVa/slider/Book-Keeping.png"
              alt="" />
          </div>
          <div class="slide">
            <img
              src="@/assets/images/typesOfVa/slider/Customer-Service.png"
              alt="" />
          </div>
          <div class="slide">
            <img src="@/assets/images/typesOfVa/slider/Data-Entry.png" alt="" />
          </div>
          <div class="slide">
            <img
              src="@/assets/images/typesOfVa/slider/Digital-Marketing.png"
              alt="" />
          </div>
          <div class="slide">
            <img
              src="@/assets/images/typesOfVa/slider/Executive-Admin.png"
              alt="" />
          </div>
          <div class="slide">
            <img
              src="@/assets/images/typesOfVa/slider/Project-Management.png"
              alt="" />
          </div>
          <div class="slide">
            <img src="@/assets/images/typesOfVa/slider/Sales.png" alt="" />
          </div>
          <div class="slide">
            <img
              src="@/assets/images/typesOfVa/slider/Social-Media.png"
              alt="" />
          </div>
        </div>
        <div class="logos-slide">
          <div class="slide">
            <img
              src="@/assets/images/typesOfVa/slider/Administration.png"
              alt="" />
          </div>
          <div class="slide">
            <img
              src="@/assets/images/typesOfVa/slider/Appointment-Setting.png"
              alt="" />
          </div>
          <div class="slide">
            <img
              src="@/assets/images/typesOfVa/slider/Book-Keeping.png"
              alt="" />
          </div>
          <div class="slide">
            <img
              src="@/assets/images/typesOfVa/slider/Customer-Service.png"
              alt="" />
          </div>
          <div class="slide">
            <img src="@/assets/images/typesOfVa/slider/Data-Entry.png" alt="" />
          </div>
          <div class="slide">
            <img
              src="@/assets/images/typesOfVa/slider/Digital-Marketing.png"
              alt="" />
          </div>
          <div class="slide">
            <img
              src="@/assets/images/typesOfVa/slider/Executive-Admin.png"
              alt="" />
          </div>
          <div class="slide">
            <img
              src="@/assets/images/typesOfVa/slider/Project-Management.png"
              alt="" />
          </div>
          <div class="slide">
            <img src="@/assets/images/typesOfVa/slider/Sales.png" alt="" />
          </div>
          <div class="slide">
            <img
              src="@/assets/images/typesOfVa/slider/Social-Media.png"
              alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .sliderWrapper {
    display: none;
    position: absolute;
    bottom: 0;
  }
  .slider {
    height: 100px;
    width: auto;
    display: grid;
    place-items: center;
    position: relative;
    overflow: hidden;
    z-index: 5;
    padding: 0 3vw;
  }
  .slider::before,
  .slider::after {
    content: "";
    height: 100%;
    position: absolute;
    width: 20%;
    z-index: 5;
  }
  .slider::before {
    left: 0;
    bottom: 0;
  }
  .slider::after {
    right: 0;
    bottom: 0;
    transform: rotateZ(180deg);
  }
  .slider .slide-track {
    width: 205vw;
    height: 100%;
    display: flex;
    gap: 5vw;
    animation: scroll 20s linear infinite;
    padding: 0 5vw;
  }
  .slider .slide-track:hover {
    animation-play-state: paused;
  }
  .logos-slide {
    width: 100%;
    display: flex;
    gap: 5vw;
  }
  .slider .slide {
    display: flex;
    align-items: center;
  }
  .slide img {
    width: auto;
    height: 5.5vw;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-200vw));
    }
  }

  /* Desktop */
  @media only screen and (min-width: 1080px) {
    .sliderWrapper {
      display: block;
    }
  }

  @media only screen and (min-width: 1300px) {
    .slide img {
      height: 5vw;
    }
  }

  @media only screen and (min-width: 1400px) {
    .slide img {
      height: 4.5vw;
    }
  }

  @media only screen and (min-width: 1920px) {
    .slide img {
      height: 95px;
    }
  }
</style> -->
